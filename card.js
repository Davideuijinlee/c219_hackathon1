
class CityCard{
    constructor(price, pointValue ){
        this.pointValue = pointValue;
        this.price = price;
        this.isOwned= false;
        console.log("city card created");
    }

}

class FactoryCard{
    constructor(input, output){
        this.input = input;
        this.output = output;
        this.isOwned = false;
        console.log("factory card created")
    }
    convertSpice(input,output){
        console.log("convert spice called")
    }
}