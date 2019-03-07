class GameBoard {
    constructor() {
        this.city = []; //length 5
        this.factory = []; //length 6
        this.displayArea = $('body'); //change later
        // this.displayCityCards(cityCardArray);
        // this.displayFactoryCards(factoryCardArray);
        // this.callbacks = {
        // click: clickCallBack
        // }
        this.handleClick = this.handleClick.bind(this);
        this.handleClick();

        this.createStartingSpice();
    }

    //ties in with creatingStartingSpice
    createSpice(color) {
        var newSpice = $('<div>').addClass('newSpice').css({
            'background-color': color
        });
        newSpice.addClass(color);
        $('.caravancard').append(newSpice);
    };

    //makes the spice colors pop up on the DOM
    createStartingSpice() {
        this.createSpice('yellow');
        this.createSpice('red');
        this.createSpice('green');
        this.createSpice('brown');

    }

    handleClick() {
        $('#clickMe').on('click', '.cityCard', this.callBack);
        $('#clickMe').on('click', '.factoryCard', this.callBack);
    }
    callBack(event){
        var testVar = $(event.currentTarget);
        console.log('clicked');

    }
    createFactoryCard() {
        // console.log('create factory', createdFactoryCard);
        for (var factoryIndex = 0; this.factory.length < 6; factoryIndex++) {
            var factoryDisplayCard = new FactoryCard();
            this.factory.push(factoryDisplayCard);
            var factoryBoardCard = $('<div>',{
                class: "factoryCard",
                val: factoryDisplayCard
            });
            $('.factoryContainer').append(factoryBoardCard);
        }
        if (this.factory.length < 6) {
            createFactoryCard();
        };
    }

    createCityCard() {
        for (var cityIndex = 0; this.city.length < 5; cityIndex++) {
            var cityDisplayCard = new CityCard();
            this.city.push(cityDisplayCard);
            var cityBoardCard = $('<div>',{
                class: "cityCard",
                val: cityDisplayCard
            });
            $('.cityContainer').append(cityBoardCard);
        }
        if (this.city.length < 5) {
            createCityCard();
        }
    }

    // moveCard() {
    //     // console.log('move card', moveCard());
    //     // for (var i = 0; i < players.length; i++) {
    //     //     if (players[i].city.length === 2) {
    //     //         checkForPoints = true
    //     //         break;
    //     //     }
    //     // }
    // }
    winCondition() {
    //     // var checkForPoints = false;
    //     // console.log('win condition', winCondition());
    //     //check player city storage
    //     // if(Player.city.length === 1){
    //     //     //games ends
    //     //     //check values of cities
    //     // }
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
        });

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
    // doSpice() {
    //     // console.log('doSpice', doSpice());
    // }


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
            var inputValue = array[index]['input'];
            var newFactoryCard = $("<div>", {
                class: 'factoryCard',
                why: inputValue,
                output: `${array[index]['output']}`,
                text: `Input: ${array[index]['input']}
                output: ${array[index]['output']}`,
            });
            $(".factoryContainer").append(newFactoryCard);
        }
    };
    render(){
        // debugger;
        for(var cardCreationPosition = 0; cardCreationPosition < this.factory.length; cardCreationPosition++){
            var factoryBoardCard = $('<div>',{
                class: "factoryCard",
                text: '1'
            });
            $('.factoryContainer').append(factoryBoardCard);
        }
        for(var cardCreationPosition = 0; cardCreationPosition < this.city.length; cardCreationPosition++){
            var cityBoardCard = $('<div>',{
                class: "cityCard",
                text: '1'
            });
            $('.cityContainer').append(cityBoardCard);
        }
    }
} 
