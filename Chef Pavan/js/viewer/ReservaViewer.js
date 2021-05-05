class ReservaViewer {
    constructor() {
    }

    construirTabela(elemento, dados){
        elemento.appendChild(this.createTR(dados));
    }

    createTD(dado, classe){
        let td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
    
        return td;
    }

    createTR(dado){
    
        let reservaTr = document.createElement("tr");
        reservaTr.classList.add("trBody");
        
        reservaTr.appendChild(this.createTD(dado.nome,"td"));
        reservaTr.appendChild(this.createTD('**********',"td"));
        reservaTr.appendChild(this.createTD(DataHelper.dataParaTexto(dado.data),"td"));
    
        return reservaTr;
    }
}