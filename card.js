var randomizerMath = 

class CityCard{
    constructor(){
        this.price = {
            yellow : Math.floor(Math.random() * 4),
            red : Math.floor(Math.random() * 4),
            green : Math.floor(Math.random() * 3),
            brown : Math.floor(Math.random() * 3)
        }
        this.value = Math.floor(Math.random() * 5)+ 1;
        var nestedCityObject = Object.assign(this.price, this.value);
        console.log(nestedCityObject);
    }
}

class FactoryCard{
    constructor(){
        this.price = {};
        this.input = {
            yellow : Math.floor(Math.random() * 5),
            red : Math.floor(Math.random() * 4),
            green : Math.floor(Math.random() * 3),
            brown : Math.floor(Math.random() * 2),
        }
        this.value = {
            yellow : 0,
            red : 1,
            green : 1,
            brown : 1,
        }
        this.output= {
            yellow : Math.ceiling(Math.random() * 4),
            red : Math.floor(Math.random() * 4),
            green : Math.floor(Math.random() * 3),
            brown : Math.floor(Math.random() * 3),
        }
        console.log("factory card created")
        var nestedFactoryObject = Object.assign(this.input, this.value, this.output);
        console.log(nestedFactoryObject);
    }
}