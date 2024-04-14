const express = require("express");
const { engine } = require("express-handlebars");
const myconnection = require("express-myconnection");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const tasksRoutes = require("./routes/tasks");

const app = express();
app.set("port", 8080)

app.use(myconnection(mysql, {
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "TODOLIST"
}));

app.set("views", __dirname + "/views");
app.engine(".hbs", engine({
    extname: ".hbs"
}));
app.set("view engine", "hbs");

app.listen(app.get("port"), () => {
    console.log("Server listening on port", app.get("port"))
});

app.use("/", tasksRoutes);

app.get("/", (req, res) => {
    res.render("home");
})