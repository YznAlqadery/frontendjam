class Garage{
    sensor;
    plateNumber;
    constructor(sensor){
        this.sensor = sensor;
    }
    //Enter garage method
    enterGarage = () =>{
        if(this.sensor){
            //True = garage is full
            console.log(`There is a car already parked there.`)
        }
        else{
            //False = garage is not full
            console.log(`Car with ${this.plateNumber} can park here.`)
            this.sensor = true
        }
    }


    //Leave garage method
    exitGarage = () =>{
        if(this.sensor){
            console.log(`Car with ${this.plateNumber} is leaving.`)
            this.sensor = false
        }
        else{
            console.log(`The garage is empty.`)
        }
    }
}
export default Garage;