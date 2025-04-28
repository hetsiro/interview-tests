// Arreglo con todas las sillas
let seats = [];

// Inicializamos el arreglo con los puestos ocupados
for (let row = 0; row < 10; row++) {
    seats[row] = [];
    for (let column = 0; column < 10; column++) {
        seats[row][column] = 'L';
    }
}

// Interfaz para que el usuario ingrese los valores
const button = document.querySelector('#button');
button.addEventListener('click', () => {

// Valor del usuario obtenido en formato String, ejemplo: "5,8"
const { value } = document.querySelector('#input');

// Verifica que haya ingresado un valor
    if( value ) {

        // Crea un nuevo arreglo por ejemplo de un String 5,8 queda en un arreglo con los valores 0:[5] 1:[8]
        const selectedSeat = value.split(",");
        const selectedSeatRow = parseInt(selectedSeat[0]);
        const selectedSeatColumn = parseInt(selectedSeat[1]);

        // Verifica que los números ingresados son válidos
        if(selectedSeatRow >= 0 && selectedSeatRow <= 9 && selectedSeatColumn >= 0 && selectedSeatColumn <= 9){
            // Verifica que el asiento ya está ocupado
            if( seats[selectedSeatRow][selectedSeatColumn] === 'X'){
                console.log('Lo siento, este asiento ya está reservado')
                return;
            // Reserva el asiento ya que está disponible
            } else {
                seats[selectedSeatRow][selectedSeatColumn] = 'X';
                console.table(seats);
            }
        // El número ingresado está fuera del rango
        } else {
            console.log('Porfavor seleccione un asiento válido, entre 0,0 y 9,9');
        }
        
    } else {
        console.log('Porfavor, ingrese un asiento con el siguiente formato: numero,numero, ejemplo: 5,8');
    }
})

// Mostramos por primera vez todos los asientos
console.table(seats);

console.log('Porfavor, ingrese un asiento con el siguiente formato: numero,numero, ejemplo: 5,8');