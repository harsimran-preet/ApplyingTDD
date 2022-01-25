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
// function buyingshares(portfolio, ticker, num_of_shares){
//     if (ticker in portfolio){
//         portfolio[ticker] += num_of_shares;
//     }
//     else{
//         portfolio[ticker] = 0;
//         portfolio[ticker] = num_of_shares;
//     }
//     return portfolio;
// }
// 4 is pending


exports.buyingshares = buyingshares;
exports.num_of_tickers = num_of_tickers;
exports.ifempty = ifempty;
exports.settingup = settingup;