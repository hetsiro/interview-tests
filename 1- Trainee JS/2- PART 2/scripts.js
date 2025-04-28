class Cliente {
    constructor( id, dni, name, lastName ) {
        this.id = id,
        this.dni = dni,
        this.name = name,
        this.lastName = lastName
    }
}

class Ticket {
    constructor( cliente, number, row, seat, purchaseDate, validationDate, price ) {
        this.cliente = cliente,
        this.number = number,
        this.row = row,
        this.seat = seat,
        this.purchaseDate = purchaseDate,
        this.validationDate = validationDate,
        this.price = price
    }
}

// Se almacenarán todos los tickets
const tickets = [];

// Se crean los clientes
const cliente = new Cliente(1, 20183085, 'Cristobal', 'Fuentealba');

tickets.push(new Ticket(cliente, 1, 1, 1, new Date(), new Date(), 51450));
tickets.push(new Ticket(cliente, 1, 1, 1, new Date(), new Date(), 51450));
tickets.push(new Ticket(cliente, 1, 1, 1, new Date(), new Date(), 51450));
tickets.push(new Ticket(cliente, 1, 1, 1, new Date(), new Date(), 51450));
tickets.push(new Ticket(cliente, 1, 1, 1, new Date(), new Date(), 51450));
tickets.push(new Ticket(cliente, 1, 1, 1, new Date(), new Date(), 51450));
tickets.push(new Ticket(cliente, 1, 1, 1, new Date(), new Date(), 51450));
tickets.push(new Ticket(cliente, 1, 1, 1, new Date(), new Date(), 51450));
tickets.push(new Ticket(cliente, 1, 1, 1, new Date(), new Date(), 51450));

const allTicketPrices = () => {

    let ticketPrices = 0;

    tickets.forEach( ticket => {
        ticketPrices += ticket.price;
    });

    return ticketPrices;
}

const button = document.querySelector('#button');
const input = document.querySelector('#input');

button.addEventListener('click', () => {
    const { value } = input;
    const rowSelected = parseInt(value);

    tickets.forEach( ticket => {
        if( ticket.row === rowSelected )
            console.log(ticket);
    });
})

console.log('El precio total de los tickets es de: ',allTicketPrices());
console.log('Escribe una fila para obtener los datos de los tickets');

