const url =  "https://api.adviceslip.com/advice";
let conselho = '';

async function gerarConselho(){
    const response = await fetch(url);
    const result = await response.json();
    let conselhoAnterior = conselho;
    conselho = result ['slip']['advice'];
    console.log(result['slip']['advice']);

    if(conselho == conselhoAnterior){
        gerarConselho();
    }else{
        document.querySelector("#conselho").value = conselho;
    }

}

// function exibirConselho(){
    
// }