const db = require('../config/db');

const News = function(news) {
    this.title = news.title;
    this.content = news.content;
    this.date = news.date;
}

// créer la news
News.create = (newNews, result) => {
    db.query("INSERT INTO news SET ?", newNews, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created news: ", { id: res.insertId, ...newNews });
        result(null, { id: res.insertId, ...newNews });
    });
};

News.getAll = result => {
    db.query("SELECT * FROM news", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("\x1b[32m", "Les news ont bien été fetch");
        result(null, res);
    });
};

News.updateById = (id, news, result) => {
    db.query("UPDATE news SET title = ?, content = ?, date = ? WHERE id = ?",
    [news.title, news.content, news.date, id],
    (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found news with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("updated news: ", { id: id, ...news });
        result(null, { id: id, ...news });
        }
    );
}

News.remove = (id, result) => {
    db.query("DELETE FROM news WHERE id = ?", id, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
        }

        if (res.affectedRows == 0) {
        // not found News with the id
        result({ kind: "not_found" }, null);
        return;
        }

        console.log("deleted news with id: ", id);
        result(null, res);
    });
};

module.exports = News;