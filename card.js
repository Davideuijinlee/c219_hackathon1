//var randomizerMath =

class CityCard{
    constructor(costs){
        if(costs === undefined) {
            this.price = {
                yellow: Math.floor(Math.random() * 4),
                red: Math.floor(Math.random() * 4),
                green: Math.floor(Math.random() * 3),
                brown: Math.floor(Math.random() * 3)
            }
        } else {
            this.price = {
                yellow: costs.yellow,
                red: costs.red,
                brown: costs.brown,
                green: costs.green
            }
        }
        this.value = Math.floor(Math.random() * 5)+ 1;
        var nestedCityObject = Object.assign(this.price, this.value);
        console.log(nestedCityObject);
    }
}

class FactoryCard{
    constructor( clickCallback, costs, output,  ){
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
        this.domElement = null;

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
        

       //  console.log("factory card created")
       // var nestedFactoryObject = Object.assign(this.input, this.value, this.output);
       //  console.log(nestedFactoryObject);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        debugger;
        this.clickCallback(this);
    }
    getInput(){
        return this.input;
    }
    render(){
        this.domElement = $('<div>',{
            class: "factoryCard",
            on: {
                click: this.handleClick
            }
        });
        return this.domElement;
    }
}