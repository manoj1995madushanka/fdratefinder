document.addEventListener('DOMContentLoaded',function () {
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const resultData = document.getElementById('resultElement');

    const API_KEY = Constants.API_KEY;
    const apiUrl = "https://api.api-ninjas.com/v1/convertcurrency?want=";

    convert.addEventListener('click', () => {
        const amountTotal = amount.value;
        const currencyTotal = currency.value;
        const url = apiUrl + currencyTotal+"&have=USD&amount="+amountTotal;

        fetch(url, {
            headers: {
                'X-API-KEY': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const resultPrice = data.new_amount;
                resultData.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`;
            })
            .catch(error => {
                console.error('Request failed:', error);
                resultData.innerHTML = 'An error occurred please try again later'
            })
    })
})