// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection(
    "mysql://jxx0uskorovt3jeh:iotngm837mfibuyt@erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ad16t6pbytylnovr"
);

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;