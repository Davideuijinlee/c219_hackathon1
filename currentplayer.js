class Player {
    constructor(name, playernumber) {
        this.name = name;
        this.playernumber = playernumber; //used to append cards to the correct container
        this.spice = {
            yellow: 1,
            red: 0,
            green: 0,
            brown: 0,
        };

        this.factory = [];
        this.city = [];
        this.points = 0;

        this.clickedSpiceValue = {
            yellow: 0,
            red: 0,
            green: 0,
            brown: 0,
        };

        this.createStartingCards();
        this.createStartingSpice(); //creates the divs
        this.showSpiceValue(); //pushes the value to the divs
        this.logClickedSpice();
    };


    //adds the value of clicked spiced to an object, to be used for conversion cards
    logClickedSpice() {
        if (this.playernumber === 1) {
            $(".firstplayer .yellow").click(() => {
                this.clickedSpiceValue['yellow']++;
                console.log(this.clickedSpiceValue);
            })
            $(".firstplayer .red").click(() => {
                this.clickedSpiceValue['red']++;
                console.log(this.clickedSpiceValue);
            })
            $(".firstplayer .green").click(() => {
                this.clickedSpiceValue['green']++;
                console.log(this.clickedSpiceValue);
            })
            $(".firstplayer .brown").click(() => {
                this.clickedSpiceValue['brown']++;
                console.log(this.clickedSpiceValue);
            })
        } else {
            $(".secondplayer .yellow").click(() => {
                this.clickedSpiceValue['yellow']++;
                console.log(this.clickedSpiceValue);
            })
            $(".secondplayer .red").click(() => {
                this.clickedSpiceValue['red']++;
                console.log(this.clickedSpiceValue);
            })
            $(".secondplayer .green").click(() => {
                this.clickedSpiceValue['green']++;
                console.log(this.clickedSpiceValue);
            })
            $(".secondplayer .brown").click(() => {
                this.clickedSpiceValue['brown']++;
                console.log(this.clickedSpiceValue);
            })
        }
    }

    //ties in with creatingStartingSpice
    createSpice(color) {
        var newSpice = $('<div>').addClass('newSpice').css({
            'background-color': color
        });
        newSpice.addClass(color);
        if (this.playernumber === 1) {
            $('.playerone').append(newSpice);
        } else if (this.playernumber === 2) {
            $('.playertwo').append(newSpice);
        }
    };

    //makes the spice colors pop up on the DOM
    createStartingSpice() {
        this.createSpice('yellow');
        this.createSpice('red');
        this.createSpice('green');
        this.createSpice('brown');
    }

    //currently appends to both stat cards, will have to change
    showSpiceValue() {
        var yellow = this.spice.yellow;
        var red = this.spice.red;
        var green = this.spice.green;
        var brown = this.spice.brown;

        $(".yellow").text(yellow);
        $(".red").text(red);
        $(".green").text(green);
        $(".brown").text(brown);
    }

    createStartingCards() {
        //gives you the starting two yellow spice card
        var yellowFactoryCard = {
            'input': {
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

        var newDiv = $("<div>").addClass('modalCard').css('font-size', '2rem');

        //adds a blank card to the modal, add starting yellow stats?
        if (this.playernumber === 1) {
            $('#p1factory').append(newDiv);
        } else if (this.playernumber === 2) {
            $('#p2factory').append(newDiv);
        }

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