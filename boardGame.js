class GameBoard {
    constructor() {
        this.city = []; //length 5
        this.factory = []; //length 6
        this.displayArea = $('body'); //change later
        this.displayCityCards(cityCardArray);
    }
    createFactoryCard() {
        // debugger;
        // console.log('create factory', createdFactoryCard);
        for (var factoryIndex = 0; factoryIndex < 6; factoryIndex++) {
            var input = this.randomNumber = Math.floor((Math.random() * (4)));
            var output = this.randomNumber = Math.floor((Math.random() * (4)));
            var currentFactoryCard = new FactoryCard(input, output);
            this.factory.push(currentFactoryCard);
            console.log(this.factory);
        }
        if (this.factory.length < 6) {
            createFactoryCard();
        }
        // return createFactoryCard;
    }
    // createCityCard() {
    //     for (var cityIndex = 0; cityIndex < 5; cityIndex++) {
    //         var input = this.randomNumber = Math.floor((Math.random() * (4)));
    //         var output = this.randomNumber = Math.floor((Math.random() * (10)));
    //         var currentCityCard = new CityCard(input, output);
    //         this.city.push(currentCityCard);
    //         console.log(this.city)
    //     }
    //     if (this.city.length < 5) {
    //         createCityCard();
    //     }
    // }
    moveCard() {
        // console.log('move card', moveCard());
    }
    winCondition() {
        // console.log('win condition', winCondition());
    }

    //check if what the players are offering matches the city card input
    doSpice() {
        // console.log('doSpice', doSpice());
    }

    //displays the city cards onto the dom
    //when to call this?
    //clear DOM before adding if adding after buying?
    displayCityCards(array) {
        for (var index = 0; index < array.length; index++) {
            var newCityCard = $("<div>").addClass('cityCard').text(`Cost: ${array[index]['price']}
            Value: ${array[index]['value']}`);
            $(".cityContainer").append(newCityCard);
        }
    };
}