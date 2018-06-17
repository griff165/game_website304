//importing sql driver to establish connection
var mysql = require('mysql');

//corrosponding mysql details required yo determine which mysql to connect to
var con = mysql.createConnection({
	host: "process.env.IP",
	user: "griff165",
	password: "",
	
});
//function to determine whether a connection is established or not
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //create a new database
    con.query("CREATE DATABASE users", function (err, result) {
    if (err) throw err;
    console.log("Database created");
   });
    //create table using sign up form details with added number increment
      var sql =  "CREATE TABLE Users1 (id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(255), password VARCHAR(255), dob DATE(DD-MM-YYYY), email VARCHAR(255) nationality VARCHAR(32))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");

  });
 });

