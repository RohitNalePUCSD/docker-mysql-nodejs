const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: '172.17.0.1',
    user: 'root',
    password: 'secret',
    database: 'users',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.listen(8080, () => console.log('Express server is runnig at port no : 8080'));

app.post('/user', function (req, res) {
	//console.log(req.body);
   connection.query('INSERT INTO students value (?, ?, ?, ?, ?)', [req.body.ID, req.body.Name, req.body.Age, req.body.Department, req.body.Subject], function (error, results, fields) {
          if (error) throw error;
          res.end(JSON.stringify(results));
        });
});

app.get('/user', function (req, res) {
   connection.query('select * from students', function (error, results, fields) {
          if (error) throw error;
          res.end(JSON.stringify(results));
        });
});

app.get('/user/:id', function (req, res) {
   connection.query('select * from students where ID=?', [req.params.id], function (error, results, fields) {
          if (error) throw error;
          res.end(JSON.stringify(results));
        });
});

app.put('/user', function (req, res) {

   //console.log(req.body);
   connection.query('UPDATE `students` SET `Name`=?,`Age`=?,`Department`=?,`Subject`=? where `ID`=?', [req.body.Name,req.body.Address, req.body.Department, req.body.Subject, req.body.ID], function (error, results, fields) {
          if (error) throw error;
                res.end("update", JSON.stringify(results));
        });
});

app.delete('/user/:id', function (req, res) {
   //console.log(req.body);
   connection.query('DELETE FROM `students` WHERE `ID`=?', [req.params.id], function (error, results, fields) {
          if (error) throw error;
          res.end('Record has been deleted!');
        });
});
