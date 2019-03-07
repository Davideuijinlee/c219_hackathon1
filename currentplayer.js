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
        $(".caravancard").addClass(this.name);
        this.createStartingCards();
        this.showSpiceValue();
        // this.createVisualSpice(this.spice);
    };

    //currently appends to both stat cards, will have to change
    showSpiceValue() {
        var yellow = this.spice.yellow;
        $(".yellow ").text(yellow);
        var red = this.spice.red;
        $(".red").text(red);
        var green = this.spice.green;
        $(".green").text(green);
        var brown = this.spice.brown;
        $(".brown").text(brown);
    }

    createStartingCards() {
        //gives you the starting two yellow spice card
        var yellowFactoryCard = {
            'input':  {
                yellow: 0,
                red: 0,
                green: 0,
                brown: 0,
            },
            'output': {
                yellow: 2,
                red: 0,
                green: 0,
                brown: 0,
            }
        };
        //gives you the starting conversion spice card
        var conversionFactoryCard = {
            'input': 2,
            'output': ['to be determined']
        }
        //pushes them to the factory array
        this.factory.push(yellowFactoryCard, conversionFactoryCard);
    };

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