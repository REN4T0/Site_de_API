let climaCidade = '';

async function pesquisarClima(){
    climaCidade = document.querySelector('#cidade').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${climaCidade}&appid=592c8a6a7ffbc5ae7e4cc6e949b3713f&lang=pt_br`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    let icon = result['weather']['icon']
    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`

    let divClima = document.querySelector('#clima');
    divClima.innerHTML = `<img src='${iconUrl}' alt='ícone do clima'>`
    
    let siglaPais = result['sys']['country']
    console.log(siglaPais);

    pesquisarPais(siglaPais)
}

async function pesquisarPais(sigla){
    const url = `https://servicodados.ibge.gov.br/api/v1/paises/${sigla}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    
    let nomePais = result[0]['nome']['abreviado'];
    console.log(nomePais);
    
    document.querySelector('#pais').value = nomePais;
}

