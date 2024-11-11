const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar= false, hasta = 10) =>
{
    
    try{

        

            let salida='',consola='';

            for(i=1;i<=hasta;i++)
            {
                salida+= `${base} x ${i} = ${base*i}\n`;
                consola+= `${base}${'x'.yellow}${i} = ${base*i}\n`;
            }
        if(listar)
        {
                console.log('============================'.green);
                console.log('      tabla del '.red,colors.blue(base));
                console.log('============================'.green);

                console.log(consola);
        }

        /*fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
            if(err) throw err;

            console.log('creado');
        });*/
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return `tabla de la base ${base} creada`;
    }
    catch(err){
        throw err;
    }
    
}





module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo
}