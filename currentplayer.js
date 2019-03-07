class Player {
    constructor(name) {
        this.name = name; 
        this.spice = ['yellow'];
        this.factory = [];
        this.city = [];
        this.points = 0;
        this.createStartingCards();
        this.createVisualSpice(this.spice);
        console.log()
    };

    createStartingCards() {
        //gives you the starting two yellow spice card
        var yellowFactoryCard = {
            'input': [],
            'output': ['yellow', 'yellow']
        };
        //gives you the starting conversion spice card
        var conversionFactoryCard = {
            'input': 2,
            'output': ['to be determined']
        }
        //pushes them to the factory array
        this.factory.push(yellowFactoryCard, conversionFactoryCard);
    };

    //adds a visual indicator for spice to the DOM
    //currently only adds it to one caravan card, need to figure out a way to add it to the specific player's caravan card
    //eventually add active class, then change append to active caravan card
    createSpice(color) {
        var newSpice = $('<div>').css({
            'height': '10px',
            'width': '10px',
            'margin': '2px 2px',
            'background-color': color,
        });
        $('.playerone').append(newSpice);
    };

    //adds the visual indicator
    //can call in other places? after you add/remove spices?
    createVisualSpice(array) {
        this.spiceArray = array;
        for (var index = 0; index < this.spiceArray.length; index++) {
            var currentColor = this.spiceArray[index];
            this.createSpice(currentColor);
        }
    }
}