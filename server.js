const express = require("express");
const app = express();
const Contenedor = require("./contenedor.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const relativePath = "\\productos.txt";
const absolutePath = __dirname.toString().concat(relativePath);

const items = new Contenedor(absolutePath);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/productos", async (req, res) => {
  res.send(JSON.stringify(await items.getAll()));
});

app.get("/productoRandom", async (req, res) => {
  const objectArrayLength = await items.objectArray.length;
  console.log(objectArrayLength);
  const randomItem = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  const itemsLength = objectArrayLength + 1;
  const id = parseInt(randomItem(1, itemsLength));
  res.send(items.getById(id));
});

app.listen(8080, () => console.log("escuchando en puerto 8080"));
