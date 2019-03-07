
class CityCard{
    constructor(){
        this.price = {
            yellow : Math.floor(Math.random() * 4),
            red : Math.floor(Math.random() * 4),
            green : null,
            brown : null
        }
        this.value = Math.floor(Math.random() * 5)+ 1;
        var nestedCityObject = Object.assign(this.price, this.value);   
        console.log(nestedCityObject);
    }
    render(){
        var factoryBoardCard = $('<div>',{
            class: "factoryCard",
            text: '1'
        });
        $('.factoryContainer').append(factoryBoardCard);
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
        var nestedFactoryObject = Object.assign(this.input, this.value, this.output);
        console.log(nestedFactoryObject);
    }
}