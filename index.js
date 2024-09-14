

let http = require("http");
let fs = require("fs");


const  {Client} = require("pg");


const sql_client = new Client({
connectionString:"postgresql://first:6VegPd2cGpwa@ep-holy-truth-a1tnuv5o.ap-southeast-1.aws.neon.tech/001?sslmode=require"
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
