const http = require("http");
const moment = require("moment");

let visits = 0;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const hora = moment().format("HH");
    console.log(hora);
    if (hora >= 6 && hora < 12) {
      res.write("Buenos dias!!");
    } else if (hora >= 13 && hora < 19) {
      res.write("Buenos tardes!!");
    } else {
      res.write("Buenos noches!!");
    }
    res.end();
  }
  if (req.url === "/world") {
    res.write("hola mundo");
    res.end();
  }
  if (req.url === "/api") {
    res.write(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
    res.end();
  }
  if (req.url === "/visitas") {
    visits++;
    res.write(`Total de visitas ${visits}`);
    res.end();
  }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT);

console.log(`Escuchando puerto ${PORT}`);
