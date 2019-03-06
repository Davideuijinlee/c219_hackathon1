class GameBoard {
    constructor(){
        this.city = []; //length 5
        this.factory = []; //length 6
        this.displayArea = $('body'); //change later
        console.log(constructor());
    }
    createFactoryCard(){
        console.log('create factory', createFactoryCard());
    }
    createCityCard(){
        console.log('create city', createCityCard());
    }
    moveCard(){
        console.log('move card', moveCard());
    }
    winCondition(){
        console.log('win condition', winCondition());
    }
    doSpice(){
        console.log('doSpice', doSpice());
    }
}