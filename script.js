let buscarCep = document.querySelector('#buscarCep');
let cep = document.querySelector('#cep');
let rua = document.querySelector('#logradouro');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#localidade');
let estado = document.querySelector('#estado');



buscarCep.addEventListener('blur', function(e){
    let buscarCep = e.target.value;
    let script = document.createElement('script');
    script.src = 'https://viacep.com.br/ws/'+buscarCep+'/json/?callback=popularform';
    document.body.appendChild(script);
});

function popularform(resposta) {
    if("erro" in resposta){
        alert("CEP não encontrado");
        return;
    }
    
    cep.value = resposta.cep;
    rua.value = resposta.logradouro;
    bairro.value = resposta.bairro;
    cidade.value = resposta.localidade;
    estado.value = resposta.uf;
}