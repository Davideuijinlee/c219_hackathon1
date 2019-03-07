
class CityCard{
    constructor(){
        this.price = {
            yellow : Math.floor(Math.random() * 4),
            red : Math.floor(Math.random() * 4),
            green : null,
            brown : null,
        }
        this.value = Math.floor(Math.random() * 5)+ 1;
    }
}

class FactoryCard{
    constructor(){
        this.input = {
            yellow : Math.floor(Math.random() * 4),
            red : Math.floor(Math.random() * 4),
            green : null,
            brown : null,
        }
        this.value = {
            yellow : 0,
            red : 0,
            green : 0,
            brown : 0,
        }
        this.output= {
            yellow : Math.floor(Math.random() * 4),
            red : Math.floor(Math.random() * 4),
            green : null,
            brown : null,
        }
        console.log("factory card created")
    }
}