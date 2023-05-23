let climaCidade = '';

document.addEventListener('DOMContentLoaded', pesquisarClima());

async function pesquisarClima(){
    // Selecionando a cidade para ver o clima
    climaCidade = document.querySelector('#cidade').value

    // Realizando o fetch
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${climaCidade}&appid=592c8a6a7ffbc5ae7e4cc6e949b3713f&lang=pt_br`;
    const response = await fetch(url);
    const result = await response.json();

    // =======================|MOSTRANDO O ÍCONE|============================
    // Selecionando o ícone
    let icon = result['weather'][0]['icon'];
    
    // Inserindo o ícone
    let iconClima = document.querySelector('#imgClima');
    iconClima.src = `icons/${icon}.png`;
    
    // =======================|MOSTRANDO O CLIMA|============================

    // Selecionando o clima em kelvin e convertendo-o em celsius
    let tempKelvin = result['main']['temp'];
    let tempCelsius = Math.round(tempKelvin - 273);

    // Mostrando clima em Celsius
    let divClima = document.querySelector('#temp');
    divClima.innerHTML = `${tempCelsius}°C`;

    // ===================|MOSTRANDO CONDIÇÃO CLIMÁTICA|=====================

    // Selecionando descrição
    let description = result['weather'][0]['description']

    // Exibindo descrição
    let divDescr = document.querySelector('#condClima');
    divDescr.innerHTML = description;

    // ===================|MOSTRANDO VELOCIDADE DO VENTO|====================

    let wind = result['wind']['speed']

    let divWind = document.querySelector('#vento');
    divWind.innerHTML = `<p>vento - ${wind} Km/h</p>`

    // ===========================|SIGLA DO PAÍS|============================

    // Pegando a sigla
    let siglaPais = result['sys']['country'];
    
    console.log(tempCelsius);
    console.log(result);
    console.log(icon);
    console.log(siglaPais);

    // Levando a sigla para outra função, afim de descobrir o país
    pesquisarPais(siglaPais)
}

async function pesquisarPais(sigla){
    // Realizando o fetch
    const url = `https://servicodados.ibge.gov.br/api/v1/paises/${sigla}`;
    const response = await fetch(url);
    const result = await response.json();
    
    // Selecionando o nome do país e exibindo-o
    let nomePais = result[0]['nome']['abreviado'];
    document.querySelector('#pais').innerHTML = nomePais;

    // Selecionando o histórico do país
    let descrCountry = result[0]['historico']
    document.querySelector('#historicoPais').innerHTML = descrCountry

    console.log(result);
    console.log(nomePais);
}

