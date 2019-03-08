class GameBoard {
    constructor() {
        this.city = []; //length 5
        this.factory = []; //length 6
        this.displayArea = $('body'); //change later
        this.players = [];
        this.currentPlayer = 0;
        this.handleClick = this.handleClick.bind(this);
        this.handleClick();
        this.callBack = this.callBack.bind(this);
        this.buyFactoryCard = this.buyFactoryCard.bind(this);
        this.useCityCard = this.useCityCard.bind(this);
    }
    addPlayer(playerName, playerNumber){
        debugger;
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
        // debugger;
        // console.log('create factory', createdFactoryCard);
        for (var factoryIndex = 0; this.factory.length < 6; factoryIndex++) {
            var factoryDisplayCard = new FactoryCard(this.buyFactoryCard);
            this.factory.push(factoryDisplayCard);
            var factoryCardDomElement = factoryDisplayCard.renderFactory();
            $('.factoryContainer').append(factoryCardDomElement);
        }
        if (this.factory.length < 6) {
            createFactoryCard();
        };
    }

    createCityCard() {
        debugger;
        for (var cityIndex = 0; this.city.length < 5; cityIndex++) {
            var cityDisplayCard = new CityCard(this.useCityCard);
            this.city.push(cityDisplayCard);
            var cityCardDomElement = cityDisplayCard.renderCity();
            $('.cityContainer').append(cityCardDomElement);
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
            var factoryCard1 = new FactoryCard(this.buyFactoryCard, input, output );
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
            var factoryCard2 = new FactoryCard(this.buyFactoryCard, input, output);
            this.players[playerIndex].addFactoryCard( factoryCard1);
            this.players[playerIndex].addFactoryCard( factoryCard2);
        }
    }

    winCondition() {
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

    buyFactoryCard(card ){
        debugger;
        console.log( card.getInput())
        var factoryCost = card.getInput();
        var currentPlayer = this.players[ this.currentPlayer ];
        if(currentPlayer.buy(factoryCost)){
            currentPlayer.addFactoryCard(card);
        }
    }
    useCityCard(card){
        console.log( card.getInput())
        var cityCost = card.getInput();
        var currentPlayer = this.players[ this.currentPlayer ];
        if(currentPlayer.buy(cityCost)){
            currentPlayer.addCityCard(card);
        }
    }
} 
