







var cityCardArray = [{
    'price': ['yellow', 'yellow'],
    'value': 5
},
{
    'price': ['yellow', 'red'],
    'value': 7 
},
{
    'price': ['red', 'red'],
    'value': 8 
}];

var factoryCardArray = [{
    'input': ['yellow'],
    'output': ['yellow', 'red']
},
{
    'input': [],
    'output': ['yellow', 'yellow'] 
},
{
    'input': ['red'],
    'output': ['yellow', 'yellow', 'red'] 
}];

var test = new GameBoard();
test.displayCityCards(cityCardArray);