class GameBoard {
    constructor() {
        this.city = []; //length 5
        this.factory = []; //length 6
        this.displayArea = $('body'); //change later
        this.players = [];
        this.currentPlayer = 0;
        // this.displayCityCards(cityCardArray);
        // this.displayFactoryCards(factoryCardArray);
       /* this.callbacks = {
        click: clickCallBack
        };*/
        this.handleClick = this.handleClick.bind(this);
        this.handleClick();
        this.callBack = this.callBack.bind(this);
        this.useFactoryCard = this.useFactoryCard.bind(this);
    }
    addPlayer(playerName, playerNumber){
        var player = new Player(playerName, playerNumber);
        this.players.push(player);
    }
    handleClick() {
        $('#clickMe').on('click', '.cityCard', this.callBack);
        $('#clickMe').on('click', '.factoryCard', this.callBack);
    }
    callBack(event){
        var testVar = $(event.currentTarget);
        console.log("this: "+this);

    }
    createFactoryCard() {
        // console.log('create factory', createdFactoryCard);
        for (var factoryIndex = 0; this.factory.length < 6; factoryIndex++) {
            var factoryDisplayCard = new FactoryCard(this.useFactoryCard);
            this.factory.push(factoryDisplayCard);
            var factoryCardDomElement = factoryDisplayCard.render();
            $('.factoryContainer').append(factoryCardDomElement);
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
    createStartingCards() {
        //gives you the starting two yellow spice card
        for( var playerIndex=0; playerIndex< this.players.length; playerIndex++){
            var input= {
                yellow: 0,
                red: 0,
                green: 0,
                brown: 0,
            }
            var output = {
                yellow: 2,
                red: 0,
                green: 0,
                brown: 0,
            }
            var factoryCard1 = new FactoryCard(this.useFactoryCard, input, output );
            var input= {
                yellow: 0,
                red: 0,
                green: 0,
                brown: 0,
            }
            var output = {
                yellow: 0,
                red: 1,
                green: 1,
                brown: 0,
            }
            var factoryCard2 = new FactoryCard(this.useFactoryCard, input, output);
            this.players[playerIndex].addFactoryCard( factoryCard1);
            this.players[playerIndex].addFactoryCard( factoryCard2);
        }

        //gives you the starting conversion spice card
        // var conversionFactoryCard = {
        //     'input': 2,
        //     'output': ['to be determined']
        // }

        // var newDiv = $("<div>").addClass('modalCard').css('font-size', '2rem');
        //
        // //adds a blank card to the modal, add starting yellow stats?
        // if (this.playernumber === 1) {
        //     $('#p1factory').append(newDiv);
        // } else if (this.playernumber === 2) {
        //     $('#p2factory').append(newDiv);
        // }
        //
        // this.factory.push(yellowFactoryCard, conversionFactoryCard);


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
    useFactoryCard( card ){
        console.log( card.getInput())
        var factoryCost = card.getInput();
        var currentPlayer = this.players[ this.currentPlayer ];
        if(currentPlayer.buy( factoryCost )){
            currentPlayer.addFactoryCard( card );
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
