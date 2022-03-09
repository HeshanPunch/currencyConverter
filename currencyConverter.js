function convertCurrency(){
    
    var userValue = document.getElementById("userValue").value;
    var fromCurrency = document.getElementById("fromUnit").value;
    var toCurrency = document.getElementById("toUnit").value;
    var currency;
    var result;
    var ratio;
    
    switch(true){
        // from EURO
        case ((fromCurrency == "fr-eur") && (toCurrency == "to-eur")):{
            ratio = 1;
            result = userValue*ratio;
            currency = " &euro;";
            
            break;
        }
        case ((fromCurrency == "fr-eur") && (toCurrency == "to-usd")):{
            ratio = 1.09;
            result = userValue*ratio;
            currency = " $USD";
            break;
        }
        case ((fromCurrency == "fr-eur") && (toCurrency == "to-cdn")):{
            ratio = 1.41;
            result = userValue*ratio;
            currency = " $CDN";
            break;
        }
        case ((fromCurrency == "fr-eur") && (toCurrency == "to-btc")):{
            ratio = 0.000026;
            result = userValue*ratio;
            currency = " &#8383;";
            break;
        }
        case ((fromCurrency == "fr-eur") && (toCurrency == "to-eth")):{
            ratio = 0.0004196;
            result = userValue*ratio;
            currency = " ETH";
            break;
        }
        // from USD
        case ((fromCurrency == "fr-usd") && (toCurrency == "to-eur")):{
            ratio = 0.92;
            result = userValue * ratio;
            currency = " &euro;";
            break;
        }
        case ((fromCurrency == "fr-usd") && (toCurrency == "to-usd")):{
            ratio = 1;
            result = userValue*ratio;
            currency = " $USD";
            break;
        }
        case ((fromCurrency == "fr-usd") && (toCurrency == "to-cdn")):{
            ratio = 1.29;
            result = userValue * ratio;
            currency = " $CDN";
            break;
        }
        case ((fromCurrency == "fr-usd") && (toCurrency == "to-btc")):{
            ratio = 0.000024;
            result = userValue * ratio;
            currency = " &#8383;";
            break;
        }
        case ((fromCurrency == "fr-usd") && (toCurrency == "to-eth")):{
            ratio = 0.00037;
            result = userValue * ratio;
            currency = " ETH";
            break;
        }
        // from CDN
        case ((fromCurrency == "fr-cdn") && (toCurrency == "to-eur")):{
            ratio = 0.71;
            result = userValue * 0.71;
            currency = " &euro;";
            break;
        }
        case ((fromCurrency == "fr-cdn") && (toCurrency == "to-usd")):{
            ratio = 0.78;
            result = userValue * ratio;
            currency = " $USD";
            break;
        }
        case ((fromCurrency == "fr-cdn") && (toCurrency == "to-cdn")):{
            ratio = 1;
            result = userValue*ratio;
            currency = " $CDN";
            break;
        }
        case ((fromCurrency == "fr-cdn") && (toCurrency == "to-btc")):{
            ratio = 0.000019;
            result = userValue * ratio;
            currency = " &#8383;";
            break;
        }
        case ((fromCurrency == "fr-cdn") && (toCurrency == "to-eth")):{
            ratio = 0.00029;
            result = userValue * ratio;
            currency = " ETH";
            break;
        }
        // from BTC;
        case ((fromCurrency == "fr-btc") && (toCurrency == "to-eur")):{
            ratio =  37986.35;
            result = userValue * ratio;
            currency = " &euro;";
            break;
        }
        case ((fromCurrency == "fr-btc") && (toCurrency == "to-usd")):{
            ratio = 41844.30;
            result = userValue * ratio;
            currency = " $USD";
            break;
        }
        case ((fromCurrency == "fr-btc") && (toCurrency == "to-cdn")):{
            ratio = 53900.69;
            result = userValue*ratio;
            currency = " $CDN";
            break;
        }
        case ((fromCurrency == "fr-btc") && (toCurrency == "to-btc")):{
            ratio = 1;
            result = userValue * ratio;
            currency = " &#8383";
            break;
        }
        case ((fromCurrency == "fr-btc") && (toCurrency == "to-eth")):{
            ratio = 15.06;
            result = userValue * ratio;
            currency = " ETH";
            break;
        }
        //from ETH
        case ((fromCurrency == "fr-eth") && (toCurrency == "to-eur")):{
            ratio = 2426.42;
            result = userValue * ratio;
            currency = " &euro;";
            break;
        }
        case ((fromCurrency == "fr-eth") && (toCurrency == "to-usd")):{
            ratio = 2716.44;
            result = userValue * ratio;
            currency = " $USD";
            break;
        }
        case ((fromCurrency == "fr-eth") && (toCurrency == "to-cdn")):{
            ratio = 3498.15;
            result = userValue* ratio;
            currency = " $CDN";
            break;
        }
        case ((fromCurrency == "fr-eth") && (toCurrency == "to-btc")):{
            ratio =  0.06608;
            result = userValue * ratio;
            currency = " &#8383";
            break;
        }
        case ((fromCurrency == "fr-eth") && (toCurrency == "to-eth")):{
            ratio = 1;
            result = userValue * ratio;
            currency = " ETH";
            break;
        }
             
        
    }
    
    document.getElementById("resultOut").innerHTML = "<hr>" + result.toFixed(2) + currency + " (1:" + ratio + ")";
    //ratio makes more sense when its 1:1.22 for example, user currency:converted
    
    
}