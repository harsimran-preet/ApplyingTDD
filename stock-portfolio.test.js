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
  //   expect(myFunctions.num_of_tickers({"": 0}, "GMR", 3)).toBe({"GMR": 3});
  // });