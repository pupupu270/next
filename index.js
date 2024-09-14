

let http = require("http");
let fs = require("fs");


const  {Client} = require("pg");


const sql_client = new Client({
connectionString:""
});
sql_client.connect();

sql_client.end();




http.createServer((req, res) => {

    console.log(req.url);
    if (req.url == "/")
        req.url = "/index.html";

    fs.readFile(__dirname + "/html" + req.url, (err, data) => {

        if (err == null)
        {
            res.writeHead(200);
            res.write(data);
            res.end();
        }
    });

  

}).listen(2000);
