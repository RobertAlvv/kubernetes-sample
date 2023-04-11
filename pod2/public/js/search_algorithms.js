
const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const array2 =[5,8,13,4,3,11,10,9,1,2,7,6,15,12,19,18,16,17,20,14];

console.log('Mi arreglo: '+JSON.stringify(array))

const BusquedaBinaria = (array, word) => {

    let low = 0;

    let high = array.length - 1;

    while (low <= high) {

        let i = Math.floor((low + high) / 2);

        let mid = array[i];

        if (String(mid).toLowerCase() == String(word).toLowerCase()) {

            return 'El numero '+String(word).toUpperCase()+' fue encontrado en la posicion '+i+' del arreglo';

        }

        if (String(mid).toLowerCase()  > String(word).toLowerCase()) {

            high = i - 1;

        } else {

            low = i + 1;

        }

    }

    return;

}

const BusquedaBurbuja = (array2, word) => {

    var n, i, k, aux;

    n = array2.length;

    for (k = 1; k < n; k++) {

        for (i = 0; i < (n - k); i++) {

            if (array2[i] > array2[i + 1]) {

                aux = array2[i];

                array2[i] = array2[i + 1];

                array2[i + 1] = aux;

                if(String(array2[i]).toLowerCase() == String(word).toLowerCase()){

                    console.log('Arreglo Desorganizado: '+ JSON.stringify(array2))
                    return 'El numero '+String(word).toUpperCase()+' fue encontrado en la posicion '+i+' del arreglo';
    
                }

            }

        }

    }

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
    
    word = prompt('Escribe un numero')

    if(matchInArray(word, array)  && word.length > 0){

        console.log('Busqueda Binaria: '+BusquedaBinaria(array, word))
        
        console.log('Busqueda por el Metodo Burbuja: '+BusquedaBurbuja(array2, word))

    } else {

        alert('El numero ingresado no se encuentra en la lista')
        word = ''

    }

} while(!matchInArray(word, array) && word.length != 1);

