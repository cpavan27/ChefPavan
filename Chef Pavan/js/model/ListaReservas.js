class ListaReservas{
    constructor(){
        this._reservas = [];
    }

    addLista(reserva){
        this._reservas.push(reserva);
    }

    get listaReserva(){
        return this._reservas;
    }
}