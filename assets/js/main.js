document.addEventListener("DOMContentLoaded", function(e) {
    loadNumbers(true)
    loadMessage(true)
});
const loadNumbers = function (flag){
    if(flag){
        var numeros = sessionStorage.getItem('numeros');
        if(numeros){
            document.getElementById('numeros').value = numeros;
            const ArrNumeros = numeros.split(",");
        }
    } else {
        var numeros = document.getElementById('numeros').value;
        const ArrNumeros = numeros.split(",");
        sessionStorage.removeItem('numeros');
        sessionStorage.setItem('numeros',ArrNumeros);
    }
}

const clearNumbers = function (){
    sessionStorage.removeItem('numeros');
    document.getElementById('numeros').value = '';
    var divLista = document.getElementById('lista');
    divLista.innerHTML = '';
}

const loadMessage = function (flag){
    if(flag){
        var mensagem = sessionStorage.getItem('mensagem');
        if(mensagem) {
            document.getElementById('mensagem').value = mensagem;
        }
    } else {mensagem
        var mensagem = document.getElementById('mensagem').value;
        sessionStorage.removeItem('mensagem');
        sessionStorage.setItem('mensagem', mensagem);
    }
}

const clearMessage = function (){
    sessionStorage.removeItem('mensagem');
    document.getElementById('mensagem').value = '';
    var divLista = document.getElementById('lista');
    divLista.innerHTML = '';

}

const prepareItens = function (){

    let divLista = document.getElementById('lista');

    var mensagem = sessionStorage.getItem('mensagem');
    if(mensagem == '' || mensagem == null){
        alert("Mensagem não pode estar em branco!")
        return false;
    }

    var numeros = sessionStorage.getItem('numeros');
    if(numeros == '' || numeros == null){
        alert("Você precisa informar os numeros primeiro!")
        return false;
    }
    const ArrNumeros = numeros.split(",");
    if(ArrNumeros.length < 0){
        alert("Você precisa informar os numeros primeiro!");
        return false;
    }

    for(var i = 0; i < ArrNumeros.length; i++){
        var link = document.createElement('a');
        link.setAttribute('href', 'whatsapp://send?phone=55'+ArrNumeros[i]+'&text='+mensagem);
        // link.setAttribute('href', 'https://api.whatsapp.com/send?phone=55'+ArrNumeros[i]+'&text='+mensagem);
        link.setAttribute('target', '_blank');
        link.innerHTML = ArrNumeros[i];
        var itemLista = document.createElement('li');
        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        itemLista.appendChild(link);
        divLista.appendChild(itemLista);
    }

}