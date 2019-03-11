class GameBoard {
    constructor() {
        this.city = [];
        this.factory = [];
        this.displayArea = $('body');
        this.players = [];
        this.currentPlayer = 0; //game starts on player 0
        this.handleClick = this.handleClick.bind(this);
        this.handleClick();
        this.colorArray = ['yellow', 'red', 'green', 'brown'];
        this.callBack = this.callBack.bind(this);
        this.buyFactoryCard = this.buyFactoryCard.bind(this);
        this.useCityCard = this.useCityCard.bind(this);
        this.convertSpice = this.convertSpice.bind(this);
    }

    //working on the conversion card, delete if necessary
    convertSpice() {
        this.players[this.currentPlayer];
    }

    addPlayer(playerName, playerNumber) {
        var player = new Player(playerName, playerNumber);
        this.players.push(player);
    }
    handleClick() {
        $('#clickMe').on('click', '.cityCard', this.callBack);
        $('#clickMe').on('click', '.factoryCard', this.callBack);
    }

    callBack(event){
        $(event.currentTarget);
    }
    createFactoryCard() {
        for (var factoryIndex = 0; this.factory.length < 6; factoryIndex++) {
            var factoryDisplayCard = new FactoryCard(this.buyFactoryCard);
            this.factory.push(factoryDisplayCard);
            var factoryCardDomElement = factoryDisplayCard.renderFactory();
            $('.factoryContainer').append(factoryCardDomElement);
            for(var colorIndex = 0; colorIndex < this.colorArray.length; colorIndex++ ){
                var currentColorValue = gameboard.factory[factoryIndex].input[this.colorArray[colorIndex]];
                var colorElement = $('<div>', {
                    class: 'colorValue',
                    'text': this.colorArray[colorIndex] + ': ' + currentColorValue,
                })
                $(".factoryCard").last().append(colorElement);
            }
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
                for(var colorIndex = 0; colorIndex < this.colorArray.length; colorIndex++ ){
                    var currentColorValue = gameboard.city[cityIndex].input[this.colorArray[colorIndex]];
                    var colorElement = $('<div>', {
                        class: 'colorValue',
                        'text': this.colorArray[colorIndex] + ': ' + currentColorValue,
                    })
                    $(".cityCard").last().append(colorElement);
                }
        }
        if (this.city.length < 5) {
            createCityCard();
        }
    }
    createStartingCards() {
        for (var playerIndex = 0; playerIndex < this.players.length; playerIndex++) {
            var input = {
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
            var factoryCard1 = new FactoryCard(this.buyFactoryCard, input, output);
            var input = {
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
            this.players[playerIndex].addFactoryCard(factoryCard1);
            this.players[playerIndex].addFactoryCard(factoryCard2);
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
        // turn off click handlers
    }
}

    buyFactoryCard(card) {
        var factoryCost = card.getInput();

        var yellow = factoryCost.yellow;
        var red = factoryCost.red;
        var green = factoryCost.green;
        var brown = factoryCost.brown;

        var newCard = $("<div>").addClass('modalCard').val(factoryCost);

        var cardStats = `${yellow} | 
        ${red} | 
        ${green} | 
        ${brown}`;
        var currentPlayer = this.players[this.currentPlayer];
        if (currentPlayer.buy(factoryCost)) {
            currentPlayer.addFactoryCard(card);
            if (this.currentPlayer === 0) {
                $(newCard).text(cardStats);
                $('#p1factory').append(newCard);
            } else if (this.currentPlayer === 1) {
                $(newCard).text(cardStats);
                $('#p2factory').append(newCard);
            }
        }
    }

    useCityCard(card) {
        var cityCost = card.getInput();
        var cityValue = card.getValue();

        var yellow = cityCost.yellow;
        var red = cityCost.red;
        var green = cityCost.green;
        var brown = cityCost.brown;

        var newCard = $("<div>").addClass('modalCard');
        var cardStats = `${yellow} | 
        ${red} | 
        ${green} | 
        ${brown} | 
        ${cityValue}`;

        var currentPlayer = this.players[this.currentPlayer];
        if (currentPlayer.buy(cityCost)) {
            currentPlayer.addCityCard(card);
            if (this.currentPlayer === 0) {
                $(newCard).text(cardStats);
                $('#p1city').append(newCard);
            } else if (this.currentPlayer === 1) {
                $(newCard).text(cardStats);
                $('#p2city').append(newCard);
            }
        }
        currentPlayer.updateSpice();
        this.winCondition();
    }
    
    changePlayerTurn(){
        if(this.currentPlayer === 0){//player 1
            this.currentPlayer = 1;//change to player 2
            $(".firstplayer .playertitle").removeClass("glow");
            $(".secondplayer .playertitle").addClass("glow");
        }else{//this.currentPlayer === 1 - player is 2
            this.currentPlayer = 0;//change to player 1
            $(".secondplayer .playertitle").removeClass("glow");
            $(".firstplayer .playertitle").addClass("glow");
        }
        //when player three and four are enabled delete the above else and uncomment the below
        /*
        else if(this.currentPlayer === 1){//player 2
            this.currentPlayer = 2;//change to player 3
        }else if(this.currentPlayer === 2){//player 3
            this.currentPlayer = 3;//change to player 4
        }else{//this.currentPlayer === 3 - player 4
            this.currentPlayer = 0;//change to player 1
        }
        */
        }
    } 



