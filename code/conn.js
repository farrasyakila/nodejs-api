var mysql = require('mysql2');

// Mengambil konfigurasi dari environment variables
var con = mysql.createConnection({
  host: process.env.MYSQL_HOST || "mysql-container",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "12345",
  database: process.env.MYSQL_DATABASE || "nodejs_api"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
