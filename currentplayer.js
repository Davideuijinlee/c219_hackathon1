class Player {
    constructor(name) {
        this.name = name;
        this.spice = {
            yellow: 1,
            red: 0,
            green: 0,
            brown: 0,
        };
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
        this.domSpice = array;
        for (var index = 0; index < this.domSpice.length; index++) {
            var currentColor = this.domSpice[index];
            this.createSpice(currentColor);
        }
    }

    buy(cost) {
        if (this.checkCost(cost, this.spice)) {
            console.log('buying dat shit');
            for (var key in cost) {
                this.changeSpice(key, cost[key] * -1);
            }
        } else {
            console.log('tai gui');
        }
    }

    changeSpice(color, amount) {
        this.spice[color] += amount;
    }

    checkCost(cost, spice) {
        
        this.spice = spice;
        for (var key in cost) {
            if (cost[key] > this.spice[key]) {
                return false;
            }
        }
        return true
    }
}