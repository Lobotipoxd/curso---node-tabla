
const {crearArchivo} = require('./helpers/multiplicar');
require('colors');

const argv = require('./config/yargs');




console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs ',argv.base);


//console.log(process.argv);

// const[ , , arg3 = 'base=5'] = process.argv;
// const [ , base=0] = arg3.split('=')
// console.log(base);


//const base = 3;


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,' creado'))
    .catch(err => console.log(err));