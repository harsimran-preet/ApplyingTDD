//Harismran Preet Singh
//Functions


function settingup(){
    return [];
}
function ifempty(portfolio){
    if (portfolio==0){
        return "Empty stock portfolio."
    }
}

function num_of_tickers(portfolio){
    count = []
    res = [... new Set(portfolio)]
    return res.length;
}


// function buyingshares(port, ticker, num_of_shares){
//     for (let x = 0; x<port.length; x++){
//         if (port[i][0] )
//     }
    // if (port[ticker]){
    //     port[ticker] +=num_of_shares;
    // }
    // else{
    //     port[ticker] = 0;
    //     port[ticker] = num_of_shares;
    // }
    // return port;
//}
// 4 is pending

function sellshares(port, ticker, num_of_shares){
    port = take_out_empty(port);
    for (let x = 0; x<port.length; x++){
        if (port[x][0] === ticker){
            if (port[x][1]<num_of_shares){
                throw "ShareSaleException";
            }
            else{
                port[x][1] -= num_of_shares;
            }
        }
    }
    port = take_out_empty(port);
    return port;
}
function take_out_empty(portfolio){
    for (let x = 0; x<portfolio.length; x++){
        if (portfolio[x][1] < 1){
            portfolio.splice(x, 1);
        }
    }
    return portfolio;
}

function buyshares(portfolio, ticker, num_of_shares){
    portfolio = take_out_empty(portfolio);
    tickers = []
    for (let x = 0; x<portfolio.length; x++){
        if(!(tickers.includes(portfolio[x][0]))){
            tickers.push(portfolio[x][0]);
        }
        if (portfolio[x][0] == ticker){
            portfolio[x][1] += num_of_shares;
        }
    }
    if(!(tickers.includes(ticker))){
        portfolio.push([ticker, num_of_shares]);
    }
    return portfolio;
}

function search_share(portfolio, ticker){
    portfolio = take_out_empty(portfolio);
    for (let x = 0; x<portfolio.length; x++){
        if (portfolio[x][0] == ticker){
            return portfolio[x][1];
        }
    }
    return;
}
exports.search_share = search_share;
exports.take_out_empty = take_out_empty;
exports.sellshares = sellshares;
exports.buyshares = buyshares;
exports.num_of_tickers = num_of_tickers;
exports.ifempty = ifempty;
exports.settingup = settingup;