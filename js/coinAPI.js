// Variáveis que irão armazenar qual moeda foi escolhia e para qual será convertida
let moedaEsc = '';
let moedaCon = '';

// Função que seleciona a moeda escolhida
function moedaEscolhida(){
    moedaEsc = document.querySelector('#moeda_escolhida').value;
    console.log(`escolhida - ${moedaEsc}`)

    moedaConverter();
}

// Função que seleciona para qual moeda vai converter
function moedaConverter(){
    // Condicional que verifica se a moeda escolhida está vazia. Se estiver, ele volta na função anterior para realizar a seleção do valor
    if(moedaEsc === ''){
        moedaEscolhida();
    }else{
        moedaCon = document.querySelector('#moeda_converter').value
        console.log(`conversão - ${moedaCon}`);
    }

    // Condicional que verifica se as duas moedas são iguais. Se forem, emitirá um alerta pedindo para mudar
    if(moedaEsc === moedaCon){
        alert('escolha outra moeda á ser convertida');
    }else{
        Converter();
    }
}

// Função que vai consumir a API e fazer o cálculo de conversão
async function Converter(){
    // Consumindo API
    const url = `https://economia.awesomeapi.com.br/last/${moedaEsc}-${moedaCon}`;
    const response = await fetch(url);
    const result = await response.json();

    // Selecionando uma key específica do objeto, que é a cotação da moeda
    let cotacao = result[`${moedaEsc}${moedaCon}`]['ask'];

    console.log(cotacao)
    
    // Selecionando o valor para converter
    let valor_moeda = document.querySelector('#valor').value;
    console.log(valor_moeda)

    // Cálculo de conversão
    let valorConvertido = valor_moeda * cotacao;
    console.log(valorConvertido.toFixed(2))

    // Exibindo conversão
    document.querySelector('#valor_convertido').value = `${moedaCon} ${valorConvertido.toFixed(2)}`;

    
}


