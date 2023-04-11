const array = ["Dart","Golang","Kubernete","Flutter","Python","Node","Java","JavaScript","C#","RabbitMQ","Docker","Terraform","SQL","NoSQL","AWS","DigitalOcean","GCP","React","Vue"];

console.log('Mi arreglo de tecnología: '+JSON.stringify(array))


const BusquedaSecuencial = (array, word) => {

    for (let i = 0; i < array.length; i++) {

        if (String(array[i]).toLowerCase()== String(word).toLowerCase()) {

            return 'La tecnología '+String(word).toUpperCase()+' fue encontrada en la posicion '+i+' del arreglo';

        }

    }

}


const BusquedaPorSalto = (array, word) => {
    
    const length = array.length;

    let step = Math.floor(Math.sqrt(length));

    let i = 0;


    let upperBound = Math.min(step, length);

    while (String(array[i]).toLowerCase() != String(word).toLowerCase()) {
        i++;
        if (i == array.length) {
            return;
        }
    }



    if (String(array[i]).toLowerCase() == String(word).toLowerCase()) {
        return 'La tecnología '+String(word).toUpperCase()+' fue encontrada en la posicion '+i+' del arreglo';
    }


    return;

}
 
function matchInArray(strin , expressions) {

    var len = expressions.length,
        i = 0;

    for (; i < len; i++) { 
        if (strin.match(expressions[i])) {
            return true;
        }
    }

    return false;

};

do{
    
    technology = prompt('Escriba una tecnología')
 

    if(matchInArray(technology, array) && technology.length > 0){
        console.log('Busqueda Secuencial: '+BusquedaSecuencial(array, technology))

        console.log('Busqueda Por Saltos: '+BusquedaPorSalto(array, technology))

    } else {

        alert('La tecnología ingresada no se encuentra en la lista')
        technology = ''

    }

} while(!matchInArray(technology, array) && technology.length != 1);

