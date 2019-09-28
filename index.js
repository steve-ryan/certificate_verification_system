require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const name = "steve";
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});


//Getting candidate certificate details
app.get("/api/graduate/:cert_no", (req, res) => {
  pool.query(
    "SELECT first_name,last_name, surname,cert_no,course,date_awarded,wakati FROM student WHERE cert_no = ?",
    [req.params.cert_no],
    (error, rows) => {
      if (error) {
        return res.status(500).json({ error });
      }

      res.json(rows);
    }
  );
});

//Dummy API key
// app.get("/api/student",(req,res)=>{
// pool.query(
//     "SELECT * FROM student", 
//     (error, rows) => {
//   if (error) {
//     return res.status(500).json({ error });
//   }

//   res.json(rows);
// }
// );
// });



app.get("/", (req, res) => res.send("Hello " + name + "!!"));

app.listen(9000, () => console.log("App listening on port 9000"));
