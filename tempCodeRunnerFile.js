const myFunctions = require('./stock-portfolio.js');

test('Creating a stock portfolio', () => {
    expect(myFunctions.settingup()).toStrictEqual([]);
  });