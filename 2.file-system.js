const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // devuelve true si es
    stats.isDirectory(),//devuelve true si es un director
    stats.isSymbolicLink(),//devuelve true si es un enlace simbólico
    stats.size
)