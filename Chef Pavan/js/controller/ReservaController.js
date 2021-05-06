class ReservaController{
    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputNome = $('#nome');
        this._inputEmail = $('#email');
        this._inputTelefone = $('#telefone');
        this._inputData = $('#data');
        this._inputContato = document.getElementsByName('contato');
        this._tabela = $('#corpoTabela');        

        this._lista = new ListaReservas();
        this._reservaView = new ReservaViewer();

    }
    
    

    criaReserva(){
        let _inputContatoValue;
        for(let i = 0; i < this._inputContato.length; i++) {
            if(this._inputContato[i].checked){
                _inputContatoValue = this._inputContato[i].value;
            };            
        };
        return new ReservaModel(this._inputNome.value, this._inputEmail.value, this._inputTelefone.value, DataHelper.textoParaData(this._inputData.value), _inputContatoValue);
    }


    add(){

        if(this.verificaData(this._inputData.value)){
            alert("Data já está reservada");
            this._inputData.classList.add("destaqueVermelho");
        }else {
            this._reservaView.construirTabela(this._tabela, this.criaReserva());
            this.limparInput();
            this._inputData.classList.remove("destaqueVermelho")
        }   
    }


    verificaData(data){
        let dataTabela = document.querySelectorAll("#tdData");
        let confirm = false;
        dataTabela.forEach(n => {
            if(DataHelper.textoParaData(n.textContent).getTime() == DataHelper.textoParaData(data).getTime())
            confirm = true;
        });
        return confirm;
    }

    limparInput(){
        this._inputNome.value = "";
        this._inputEmail.value = "";
        this._inputTelefone.value = "";
        this._inputData.value = "";
        this._inputContato.forEach(n => n.checked = false);

        this._inputNome.focus();
    }
}