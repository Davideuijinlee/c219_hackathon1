class GameBoard {
    constructor() {
        this.city = []; //length 5
        this.factory = []; //length 6
        this.displayArea = $('body'); //change later
        this.displayCityCards(cityCardArray);
        this.displayFactoryCards(factoryCardArray);
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
    createCityCard() {
        for (var cityIndex = 0; cityIndex < 5; cityIndex++) {
            var input = this.randomNumber = Math.floor((Math.random() * (4)));
            var output = this.randomNumber = Math.floor((Math.random() * (10)));
            var currentCityCard = new CityCard(input, output);
            this.city.push(currentCityCard);
            console.log(this.city)
        }
        if (this.city.length < 5) {
            createCityCard();
        }
    }
    moveCard() {
        // console.log('move card', moveCard());
        // for (var i = 0; i < players.length; i++) {
        //     if (players[i].city.length === 2) {
        //         checkForPoints = true
        //         break;
        //     }
        // }
    }
    winCondition() {
        // var checkForPoints = false;

        // console.log('win condition', winCondition());
        //check player city storage
        // if(Player.city.length === 1){
        //     //games ends
        //     //check values of cities

        // }
        var playerPoints = [];
        playerPoints.push(players[0].points);
        playerPoints.push(players[1].points);
        var highest = 0;
        for (var i = 0; i < players.length; i++) {
            if (highest < players[i].points) {
                highest = players[i].points;
            }
        }

        var playerPointsCombinedArray = $.map(players, function (n, i) {
            return [n, playerPoints[i]];
        })

        // console.log(playerPointsCombinedArray);
        // console.log("The highest points is ", highest);
        for (i = 0; i < playerPointsCombinedArray.length; i++) {
            if (highest === playerPointsCombinedArray[i]) {
                console.log(playerPointsCombinedArray[i - 1].name, "wins!");
            }
        }
    }

    //if there is player with max cities end game
    //turn off click handlers
    //create an alert

    //player with highest value wins

    //check if what the players are offering matches the city card input
    doSpice() {
        // console.log('doSpice', doSpice());
    }

    //displays the city cards onto the dom
    //when to call this? after buying city
    //clear DOM before adding if adding after buying?
    displayCityCards(array) {
        for (var index = 0; index < array.length; index++) {
            var newCityCard = $("<div>").addClass('cityCard').text(`Cost: ${array[index]['price']}
            Value: ${array[index]['value']}`);
            $(".cityContainer").append(newCityCard);
        }
    };

    displayFactoryCards(array) {
        for (var index = 0; index < array.length; index++) {
            var newFactoryCard = $("<div>").addClass('cityCard').text(`Input: ${array[index]['input']}
            Output: ${array[index]['output']}`);
            $(".factoryContainer").append(newFactoryCard);
        }
    };
};