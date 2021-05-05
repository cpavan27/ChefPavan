class DataHelper {
    constructor(){
        throw new console.error('Date Helper não pode ser instanciada');
    }

    static dataParaTexto(data){
   
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
     }

    static textoParaData(string) {
        if(!/\d{4}-\d{2}-\d{2}/.test(string)){
            throw new Error('Deve estar no formato yyyy-MM-dd');
        }      
        return new Date(...string.split('-')
        .map((item, indice) => item - indice % 2));

    }
}