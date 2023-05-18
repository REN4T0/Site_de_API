let climaCidade = '';

async function pesquisarClima(){
    climaCidade = document.querySelector('#cidade').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${climaCidade}&appid=592c8a6a7ffbc5ae7e4cc6e949b3713f&lang=pt_br`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
}

// async function pesquisarPaís(){
//     climaCidade = document.querySelector('#cidade').value
//     const url = `https://servicodados.ibge.gov.br/api/v1/paises/US`;
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(result);
//     // console.log(climaCidade)
// }

