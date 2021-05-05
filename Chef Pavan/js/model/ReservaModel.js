class ReservaModel {
    constructor(nome, email, telefone, data, contato){
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._data = new Date(data.getTime());
        this._contato = contato;
        Object.freeze(this);
    }

    get nome(){
        return this._nome;
    }
    
    get email(){
        return this._email;
    }

    get telefone(){
        return this._telefone;
    }
    get data(){
        return new Date(this._data.getTime());
    }
    get contato(){
        return this._contato;
    }
}