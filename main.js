fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=e3b408865bfc495b84da6a75fb1157e6")
    .then(result => result.json())
    .then(result => {
        let amount = document.querySelector(".amount span").innerHTML;
        document.querySelector(".egp span").innerHTML = Math.round(amount * result.rates.EGP);
        document.querySelector(".sar span").innerHTML = Math.round(amount * result.rates.SAR);
    }
    )