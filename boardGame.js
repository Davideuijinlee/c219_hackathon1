

class GameBoard {
    constructor(){
        this.city = []; //length 5
        this.factory = []; //length 6
        this.displayArea = $('body'); //change later
    }
    createFactoryCard(input, output){
        var createdFactoryCard = {
            'input': input,
            'output': output
        };
        // console.log('create factory', createdFactoryCard);
        for(var factoryIndex = 0; factoryIndex < 6; factoryIndex++){
            var currentFactoryCard = new FactoryCard(0, 2);
            this.factory.push(currentFactoryCard);

        } 
        return createdFactoryCard;
    }
    createCityCard(input, pointValue){
        var createdCityCard = {
            'input': input,
            'value': pointValue
        };
        for(var cityIndex = 0; cityIndex < 5; cityIndex++){
            var currentCityCard = new CityCard(0, 1);
            this.city.push(currentCityCard);
        }
        // console.log('create city', createdCityCard);
        return createdCityCard;
    }
    moveCard(){
        // console.log('move card', moveCard());
    }
    winCondition(){
        // console.log('win condition', winCondition());
    }
    doSpice(){
        // console.log('doSpice', doSpice());
    }
}