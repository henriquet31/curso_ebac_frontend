const apiChave = "8878c11be29636841358d683";
const apiBase = `https://v6.exchangerate-api.com/v6/${apiChave}/latest/`;

const moedaUm = document.getElementById("de-moeda");
const moedaDois = document.getElementById("para-moeda");
const quantia = document.getElementById("valor");
const resultado = document.getElementById("resultado");

async function carregarMoedas() {
    try {
        const response = await fetch(apiBase);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const dados = await response.json();

        const moedas = Object.keys(dados.conversion_rates);

        moedas.forEach(moeda => {
            const opcional1 = document.createElement("option");
            const opcional2 = document.createElement("option");
            opcional1.value = opcional2.value = moeda;
            opcional1.textContent = opcional2.textContent = moeda;
            moedaUm.appendChild(opcional1);
            moedaDois.appendChild(opcional2);
        });
    } catch (error) {
        console.error('Erro ao carregar moedas:', error);
        resultado.textContent = 'Erro ao carregar moedas. Tente novamente mais tarde.';
    }
}

async function converterMoeda() {
    const moedaValor1 = moedaUm.value;
    const moedaValor2 = moedaDois.value;
    const quantiaValor = parseFloat(quantia.value);

    if (isNaN(quantiaValor) || quantiaValor <= 0) {
        resultado.textContent = "Digite um valor válido!";
        return;
    }

    try {
        const resposta = await fetch(`${apiBase}${moedaValor1}`);
        if (!resposta.ok) {
            throw new Error(`HTTP error! status: ${resposta.status}`);
        }
        const dados = await resposta.json();
        const taxaDeCambio = dados.conversion_rates[moedaValor2];
        const valorConvertido = (quantiaValor * taxaDeCambio).toFixed(2);

        resultado.textContent = `${quantiaValor} ${moedaValor1} = ${valorConvertido} ${moedaValor2}`;
    } catch (error) {
        console.error('Erro ao converter moeda:', error);
        resultado.textContent = 'Erro ao converter moeda. Tente novamente mais tarde.';
    }
}

carregarMoedas();
document.querySelector('button').onclick = async function() {
    await converterMoeda();
};
