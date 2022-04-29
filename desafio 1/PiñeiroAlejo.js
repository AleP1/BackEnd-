class Usuario {


    constructor(name = '', lastName = '', pets = [] , books = []) {
        this.nombre = name
        this.apellido = lastName
        this.mascotas = pets 
        this.libros = books
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(nuevaMascota) {
        this.mascotas.push(nuevaMascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombreNuevoLibro, autorNuevoLibro) {
        this.libros = [...this.libros,
        {
            nombre: nombreNuevoLibro,
            autor: autorNuevoLibro,
        },
        ]
    }
    getBookNames() {
        let queGanasDeJoder = []
        const queGanasDeJoderPush = this.libros.map(libro => queGanasDeJoder.push(libro.nombre))

        return queGanasDeJoder
    }

}


const usuario = new Usuario('Alejo', 'Piñeiro', [], [])

usuario.getFullName()

usuario.addMascota('Firulais')
usuario.addMascota('Pichicho')
usuario.addMascota('Flash')

usuario.countMascotas()

usuario.addBook('El Principito', 'Un frances')
usuario.addBook('El Psicoanalista', 'Un gringo')
usuario.addBook('Rayuela', 'Un argento')

usuario.getBookNames()

console.log(usuario.getFullName())
console.log(usuario.countMascotas())
console.log(usuario.getBookNames())

