//Harismran Preet Singh
//Testing

const myFunctions = require('./stock-portfolio.js');

test('Creating a stock portfolio', () => {
    expect(myFunctions.settingup()).toStrictEqual([]);
  });

test('If Empty stock portfolio', () => {
    expect(myFunctions.ifempty(0)).toBe("Empty stock portfolio.");
  });

test('Test number of unique tickets -- no tickers', () => {
    expect(myFunctions.num_of_tickers([])).toBe(0);
  });

test('Test number of unique tickets -- multiple tickers', () => {
    expect(myFunctions.num_of_tickers(["ABC", "ABC", "GMR", "TSL", "GMR"])).toBe(3);
  });

  // test('Test buying shares for a symbol -- not already have', () => {
  //   var portfolio = {"GMR": 10}
  //   var res = {"GMR": 10, "TSLA": 3}
  //   expect(myFunctions.num_of_tickers(portfolio, "TSLA", 3)).toBe(res);
  // });
  test('Test to buy share -- for an existing ticker', () => {
    portfolio = [["ABC", 30], ["GMR", 10]];
    expect(myFunctions.buyshares(portfolio, "GMR", 10)).toStrictEqual([["ABC", 30],["GMR", 20]]);
  });
  test('Test to buy share -- for non-existing ticker', () => {
    portfolio = [["ABC", 30], ["GMR", 10]];
    expect(myFunctions.buyshares(portfolio, "TSLA", 10)).toStrictEqual([["ABC", 30],["GMR", 10], ["TSLA", 10]]);
  });
test('Test selling shares for a symbol -- normal', () => {
    portfolio = [["ABC", 30], ["GMR", 10]];
    expect(myFunctions.sellshares(portfolio, "GMR", 5)).toStrictEqual([["ABC", 30], ["GMR", 5]]);
  });

test('Test selling shares for a symbol -- ticker that is not owned', () => {
    portfolio = [["ABC", 30], ["GMR", 10]];
    expect(myFunctions.sellshares(portfolio, "TSLA", 5)).toStrictEqual([["ABC", 30], ["GMR", 10]]);
  });

test('Test selling shares for a symbol -- selling all of a ticker', () => {
    portfolio = [["ABC", 30], ["GMR", 10]];
    expect(myFunctions.sellshares(portfolio, "ABC", 30)).toStrictEqual([["GMR", 10]]);
  });
test('Test selling shares for a symbol -- sell more than have', () => {
    portfolio = [["ABC", 30], ["GMR", 10]];
    expect (() => {myFunctions.sellshares(portfolio, "GMR", 15)}).toThrow("ShareSaleException");

  });

  test('Test seaching for a ticker -- normal', () => {
    portfolio = [["ABC", 30], ["GMR", 10]];
    expect(myFunctions.search_share(portfolio, "ABC")).toBe(30);
  });
  test('Test seaching for a ticker -- for the one that is not owned', () => {
    portfolio = [["ABC", 30], ["GMR", 10]];
    expect(myFunctions.search_share(portfolio, "TSLA")).toBe();
  });

  test('Test to find only owned ticker list -- no empty', () => {
    portfolio = [["ABC", 30], ["GMR", 10]];
    expect(myFunctions.take_out_empty(portfolio)).toStrictEqual([["ABC", 30],["GMR", 10]]);
  });
  test('Test to find only owned ticker list -- with an empty ticker', () => {
    portfolio = [["ABC", 30], ["GMR", 10], ["TSLA", 0]];
    expect(myFunctions.take_out_empty(portfolio)).toStrictEqual([["ABC", 30],["GMR", 10]]);
  });