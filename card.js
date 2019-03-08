
class CityCard{
    constructor(clickCallback, costs, output){
        this.clickCallback = clickCallback;
        this.price = {};
        if(costs === undefined) {
            this.input = {
                yellow: Math.floor(Math.random() * 4),
                red: Math.floor(Math.random() * 4),
                green: Math.floor(Math.random() * 3),
                brown: Math.floor(Math.random() * 3)
            }
        } else {
            this.input = {
                yellow: costs.yellow,
                red: costs.red,
                brown: costs.brown,
                green: costs.green
            }
        }
        this.factoryElement = null;
        if(output === undefined){
        this.output = Math.floor(Math.random() * 5)+ 1;
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.clickCallback(this);
    }
    getInput(){
        return this.input;
    }
    renderCity(){
        this.cityElement = $('<div>',{
            class: "cityCard",
            on: {
                click: this.handleClick
            }
        });
        return this.cityElement;
    }
}

class FactoryCard{
    constructor(clickCallback, costs, output){
        this.clickCallback = clickCallback;
        this.price = {};
        if(costs === undefined){
            this.input = {
                yellow : Math.floor(Math.random() * 5),
                red : Math.floor(Math.random() * 4),
                green : Math.floor(Math.random() * 3),
                brown : Math.floor(Math.random() * 2),
            }
        } else {
            this.input = {
                yellow: costs.yellow,
                red: costs.red,
                brown: costs.brown,
                green: costs.green
            }
        }
        this.value = {
            yellow : 0,
            red : 1,
            green : 1,
            brown : 1,
        }
        this.factoryElement = null;
        if(output===undefined){
            this.output= {
                yellow : Math.floor(Math.random() * 4),
                red : Math.floor(Math.random() * 4),
                green : Math.floor(Math.random() * 3),
                brown : Math.floor(Math.random() * 3),
            }
        } else {
            this.output = {
                yellow: output.yellow,
                red: output.red,
                brown: output.brown,
                green: output.green
            }
        }
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.clickCallback(this);
    }
    getInput(){
        return this.input;
    }
    renderFactory(){
        this.factoryElement = $('<div>',{
            class: "factoryCard",
            on: {
                click: this.handleClick
            }
        });
        return this.factoryElement;
    }
}