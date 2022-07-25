let buscarCep = document.querySelector('#buscarCep');
let cep = document.querySelector('#cep');
let rua = document.querySelector('#logradouro');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#localidade');
let complemento = document.querySelector('#complemento');


buscarCep.addEventListener('blur', function(e){
    let buscarCep = e.target.value;
    let script = document.createElement('script');
    const aparecer = document.querySelector('.resposta');
    script.src = 'https://viacep.com.br/ws/'+buscarCep+'/json/?callback=popularform';
    document.body.appendChild(script);
    aparecer.style.display = "flex";

});

function popularform(resposta) {
    if("erro" in resposta){
        alert("CEP não encontrado");
        return;
    }
    
    cep.value = "CEP: "+ resposta.cep;
    complemento.value = "Complemento: " + resposta.complemento
    rua.value = "Rua: " + resposta.logradouro;
    bairro.value = "Bairro: " + resposta.bairro;
    cidade.value = resposta.localidade + "-" + resposta.uf;
    
}