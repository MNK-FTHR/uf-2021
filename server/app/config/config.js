
module.exports={
    app:{
        PORT: process.env.PORT || "5000"
    },
    db:{
        HOST: process.env.HOST ||"localhost",
        USER: process.env.USER ||"root",
        PASSWORD: process.env.PASSWORD ||"",
        DB: process.env.DB ||"at_home"
    },
    cors:{
        AUTH: process.env.AUTH ||"http://localhost:3000",
        METHODS: ["GET", "POST", "PUT", "DELETE"]
    }
}