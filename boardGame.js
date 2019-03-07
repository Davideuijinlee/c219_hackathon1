

class GameBoard {
    constructor(){
        this.city = []; //length 5
        this.factory = []; //length 6
        this.displayArea = $('body'); //change later
    }
    createFactoryCard(){
        // debugger;
        // console.log('create factory', createdFactoryCard);
        for(var factoryIndex = 0; factoryIndex < 6; factoryIndex++){
            var input = this.randomNumber = Math.floor((Math.random() * (4)));
            var output = this.randomNumber = Math.floor((Math.random() * (4)));
            var currentFactoryCard = new FactoryCard(input, output);
            this.factory.push(currentFactoryCard);
            console.log(this.factory);
        } 
        if(this.factory.length < 6){
            createFactoryCard();
        }
        // return createFactoryCard;
    }
    createCityCard(){
        for(var cityIndex = 0; cityIndex < 5; cityIndex++){
            var input = this.randomNumber = Math.floor((Math.random() * (4)));
            var output = this.randomNumber = Math.floor((Math.random() * (10)));
            var currentCityCard = new CityCard(input, output);
            this.city.push(currentCityCard);
            console.log(this.city)
        } 
        if(this.city.length < 5){
            createCityCard();
        }
    }
    moveCard(){
        // console.log('move card', moveCard());
        // for (var i = 0; i < players.length; i++) {
        //     if (players[i].city.length === 2) {
        //         checkForPoints = true
        //         break;
        //     }
        // }
    }
    winCondition(){
        // var checkForPoints = false;
        // console.log('win condition', winCondition());
        //check player city storage
        // if(Player.city.length === 1){
        //     //games ends
        //     //check values of cities

        // }
            var highest = 0;
            for (var i = 0; i < players.length; i++) {
                if (highest < players[i].points) {
                    highest = players[i].points;
                }
            }
            console.log("The highest points is ", highest);
        

        //if there is player with max cities end game
        //turn off click handlers
        //create an alert
        
        //player with highest value wins
    }
    doSpice(){
        // console.log('doSpice', doSpice());
    }
}