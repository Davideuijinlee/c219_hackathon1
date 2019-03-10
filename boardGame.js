class GameBoard {
    constructor() {
        this.city = []; 
        this.factory = []; 
        this.displayArea = $('body'); 
        this.players = [];
        this.currentPlayer = 0; //game starts on player 0
        this.handleClick = this.handleClick.bind(this);
        this.handleClick();
        this.callBack = this.callBack.bind(this);
        this.buyFactoryCard = this.buyFactoryCard.bind(this);
        this.useCityCard = this.useCityCard.bind(this);

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
    }
    createFactoryCard() {
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
        if(gameboard.players[0].city.length === 2){
            $('.firstplayer .playertitle').text("Player One WINS!");
            $('.secondplayer .playertitle').text("Bend the knee...");
            $(".factoryContainer").addClass("winCondition");
            $(".cityContainer").addClass("winCondition");
            $(".citymodal").addClass("winCondition");
            $(".conversioncardmodal").addClass("winCondition");
        }
        else if(gameboard.players[1].city.length === 2){
            $('.secondplayer .playertitle').addClass('glow').text('Player Two WINS!');
            $('.firstplayer .playertitle').removeClass('glow').text("Bend the knee...");
            $(".factoryContainer").addClass("winCondition");
            $(".cityContainer").addClass("winCondition");
            $(".citymodal").addClass("winCondition");
            $(".conversioncardmodal").addClass("winCondition"); 
        }
        else{
            return;
        }
        // turn off click handlers

    }

    buyFactoryCard(card){
        console.log(card.getInput());
        var factoryCost = card.getInput();
        var currentPlayer = this.players[ this.currentPlayer ];
        if(currentPlayer.buy(factoryCost)){
            currentPlayer.addFactoryCard(card);
        }
    }
    useCityCard(card){
        console.log(card.getInput());
        var cityCost = card.getInput();
        var currentPlayer = this.players[ this.currentPlayer ];
        if(currentPlayer.buy(cityCost)){
            currentPlayer.addCityCard(card);
        }
        currentPlayer.updateSpice();
        this.winCondition();
    }
    changePlayerTurn(){
        console.log("playerTurn has been called");

        if(this.currentPlayer === 0){//player 1
            this.currentPlayer = 1;//change to player 2
            $(".firstplayer .playertitle").removeClass("glow");
            $(".secondplayer .playertitle").addClass("glow");
            console.log("current player is now player 2")
        }else{//this.currentPlayer === 1 - player is 2
            this.currentPlayer = 0;//change to player 1
            $(".secondplayer .playertitle").removeClass("glow");
            $(".firstplayer .playertitle").addClass("glow");
            console.log("current player is now player 1")
        }
        //when player three and four are enabled delete the above else and uncomment the below
        /*
        else if(this.currentPlayer === 1){//player 2
            this.currentPlayer = 2;//change to player 3
            console.log("current player is now player 3")
        }else if(this.currentPlayer === 2){//player 3
            this.currentPlayer = 3;//change to player 4
            console.log("current player is now player 4")
        }else{//this.currentPlayer === 3 - player 4
            this.currentPlayer = 0;//change to player 1
            console.log("current player is now player 1")
        }
        */
    }

} 
