module.exports = (app) =>{
    const client = require("../controllers/client.controller");

    app.post('/clients', client.create);
    app.get('/clients', client.findAll);
    app.get('/clients/:clientId', client.findOne);
    app.put('/clients/:clientId', client.update);
    app.delete('/clients/:clientId', client.delete);
}