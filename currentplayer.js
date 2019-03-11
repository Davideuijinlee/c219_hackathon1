class Player {
    constructor(name, playernumber) {
        this.name = name;
        this.playernumber = playernumber; 
        this.spice = {
            yellow: 10,
            red: 10,
            green: 10,
            brown: 10,
        };
        this.action = false;
        this.factory = [];
        this.city = [];
        this.points = 0;

        this.clickedSpiceValue = {
            yellow: 0,
            red: 0,
            green: 0,
            brown: 0,
        };

        this.showSpiceValue = this.showSpiceValue.bind(this);
        this.updateSpice = this.updateSpice.bind(this);

        this.createStartingSpice(); 
        this.showSpiceValue(); 
        this.logClickedSpice();
    };


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
    }

    createStartingSpice() {
        this.createSpice('yellow');
        this.createSpice('red');
        this.createSpice('green');
        this.createSpice('brown');

    }

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

    updateSpice() {
        if (gameboard.currentPlayer === 0) {
            var yellow = this.spice.yellow;
            var red = this.spice.red;
            var green = this.spice.green;
            var brown = this.spice.brown;

            $(".firstplayer .yellow").text(yellow);
            $(".firstplayer .red").text(red);
            $(".firstplayer .green").text(green);
            $(".firstplayer .brown").text(brown);
            
        } else if (gameboard.currentPlayer === 1) {
            var yellow = this.spice.yellow;
            var red = this.spice.red;
            var green = this.spice.green;
            var brown = this.spice.brown;

            $(".secondplayer .yellow").text(yellow);
            $(".secondplayer .red").text(red);
            $(".secondplayer .green").text(green);
            $(".secondplayer .brown").text(brown);
        }
    }


    addFactoryCard(card) {
        this.factory.push(card);
    }

    addCityCard(card) {
        this.city.push(card);
    }

    buy(cost) {
        if (this.checkCost(cost, this.spice)) {
            for (var key in cost) {
                this.changeSpice(key, cost[key] * -1);
            }
            return true;
        } else {
            return false;
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