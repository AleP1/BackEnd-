const fs = require("fs").promises;
const path = require("path");

const data = fs.readFile("./productos.txt", "utf8");

class Contenedor {
  constructor(rute) {
    this.path = rute;
    this.count = 0;
    this.objectArray = [];
  }
  async save(obj) {
    try {
      this.count++;
      let idAsigned = this.count;
      obj.id = idAsigned;
      this.objectArray.push(obj);
      await fs.writeFile(this.path, JSON.stringify(this.objectArray));
      return obj.id
    } catch (error) {
      console.log(`El error es: ${error}`);
    }
  }
  async getById(id) {
    try {
      let idFilter = null;
      const res = await data;
      const response = JSON.parse(res);
      const filterResponse = response.forEach((item) => {
        if (item.id === id) {
          idFilter = item;
        }
      });
      console.log(`id numero ${id} es: ` + JSON.stringify(idFilter));
      return filterResponse;
    } catch (error) {
      console.log(error);
    }
  }
  async getAll() {
    let getAll = null;
    await fs.readFile("./productos.txt", "utf8").then((res) => {
      getAll = res;
      console.log(`getAll es ${getAll}`);
    });
    return getAll;
  }
  async deleteById(id) {
    let newArray;
    this.objectArray = [];
    await data.then((res) => {
      newArray = JSON.parse(res);
      newArray.forEach((item) => {
        if (item.id != id) {
          this.objectArray.push(item);
        }
      });
    });
    try {
      await fs.writeFile("./productos.txt", JSON.stringify(this.objectArray));
      console.log(`El item id ${id} fue borrado`);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteAll() {
    this.objectArray = [];
    await fs.writeFile("./productos.txt", JSON.stringify(this.objectArray));
    console.log("se borraron todos los items");
  }
}

let escuadra = {
  title: "Escuadra",
  price: 300,
  thumbnail: "",
};
let calculadora = {
  title: "Calculadora",
  price: 4500,
  thumbnail:
    "https://upload.wikimedia.org/wikipedia/commons/c/cb/Casio_fx-85WA_20050529.jpg",
};

let globoTerraqueo = {
  title: "Globo terraqueo",
  price: 7200,
  thumbnail:
    "https://http2.mlstatic.com/D_NQ_NP_926873-MLA43786618401_102020-O.jpg",
};

const relativePath = "\\productos.txt";
const absolutePath = __dirname.toString().concat(relativePath);

const archivo = new Contenedor(absolutePath);

archivo.save(escuadra);
archivo.save(calculadora);
archivo.save(globoTerraqueo);

module.exports = Contenedor;