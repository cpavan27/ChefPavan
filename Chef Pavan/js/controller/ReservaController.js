class ReservaController{
    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputNome = $('#nome');
        this._inputEmail = $('#email');
        this._inputTelefone = $('#telefone');
        this._inputData = $('#data');
        this._inputContato = document.getElementsByName('contato');
        this._tabela = $('#corpoTabela')

        this._lista = new ListaReservas();
        this._reservaView = new ReservaViewer();

    }
    
    

    criaReserva(){
        for(let i = 0; i < this._inputContato.length; i++) {
            if(this._inputContato[i].checked){
                this._inputContato = this._inputContato[i].value;
            };            
        };
        return new ReservaModel(this._inputNome.value, this._inputEmail.value, this._inputTelefone.value, DataHelper.textoParaData(this._inputData.value), this._inputContato);
    }


    add(){
        this._reservaView.construirTabela(this._tabela, this.criaReserva());
    }
}