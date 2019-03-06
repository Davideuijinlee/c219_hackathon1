
class CityCard{
    constructor(price, pointValue ){
        this.pointValue = pointValue;
        this.price = price;
        this.isOwned= false;
        console.log("city card created");
    }

}

class FactoryCard{
    constructor(){
        this.price = 0;
        this.isOwned = false;
        console.log("factory card created")
    }
    convertSpice(input,output){
        console.log("convert spice called")
    }
}