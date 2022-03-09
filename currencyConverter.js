function convertCurrency(){
    
    var userValue = document.getElementById("userValue").value;
    var fromCurrency = document.getElementById("fromUnit").value;
    var toCurrency = document.getElementById("toUnit").value;
    var currency;
    var result;
    
    
    
    switch(true){
        // from USD
        case ((fromCurrency == "fr-usd") && (toCurrency == "to-usd")):{
            result = userValue*1;
            currency = " $USD";
            break;
        }
        case ((fromCurrency == "fr-usd") && (toCurrency == "to-cdn")):{
            result = userValue * 1.29;
            currency = " $CDN";
            break;
        }
        case ((fromCurrency == "fr-usd") && (toCurrency == "to-btc")):{
            result = userValue * 0.000024;
            currency = " BTC";
            break;
        }
        case ((fromCurrency == "fr-usd") && (toCurrency == "to-eth")):{
            result = userValue * 0.00037;
            currency = " ETH";
            break;
        }
        // from CDN
        case ((fromCurrency == "fr-cdn") && (toCurrency == "to-usd")):{
            result = userValue * 0.78;
            currency = " $USD";
            break;
        }
        case ((fromCurrency == "fr-cdn") && (toCurrency == "to-cdn")):{
            result = userValue*1;
            currency = " $CDN";
            break;
        }
        case ((fromCurrency == "fr-cdn") && (toCurrency == "to-btc")):{
            result = userValue * 0.000019;
            currency = " BTC";
            break;
        }
        case ((fromCurrency == "fr-cdn") && (toCurrency == "to-eth")):{
            result = userValue * 0.00029;
            currency = " ETH";
            break;
        }
        // from BTC
        case ((fromCurrency == "fr-btc") && (toCurrency == "to-usd")):{
            result = userValue * 41844.30;
            currency = " $USD";
            break;
        }
        case ((fromCurrency == "fr-btc") && (toCurrency == "to-cdn")):{
            result = userValue*53900.69;
            currency = " $CDN";
            break;
        }
        case ((fromCurrency == "fr-btc") && (toCurrency == "to-btc")):{
            result = userValue * 1;
            currency = " BTC";
            break;
        }
        case ((fromCurrency == "fr-btc") && (toCurrency == "to-eth")):{
            result = userValue * 15.06;
            currency = " ETH";
            break;
        }
        //from ETH
        case ((fromCurrency == "fr-eth") && (toCurrency == "to-usd")):{
            result = userValue * 2716.44;
            currency = " $USD";
            break;
        }
        case ((fromCurrency == "fr-eth") && (toCurrency == "to-cdn")):{
            result = userValue*3498.15;
            currency = " $CDN";
            break;
        }
        case ((fromCurrency == "fr-eth") && (toCurrency == "to-btc")):{
            result = userValue * 0.06608;
            currency = " BTC";
            break;
        }
        case ((fromCurrency == "fr-eth") && (toCurrency == "to-eth")):{
            result = userValue * 1;
            currency = " ETH";
            break;
        }
             
        
    }
    
    document.getElementById("resultOut").innerHTML = "<hr>" + result.toFixed(2) + currency;
    
    
    
}