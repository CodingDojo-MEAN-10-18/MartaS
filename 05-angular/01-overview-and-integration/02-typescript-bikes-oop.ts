class Bike {
    constructor(
        public price: number,
        public max_speed: string,
        public miles: number = 0) { 
            this.price = price;
            this.max_speed = max_speed;
            this.miles = miles;
    }
        
    displayinfo() {
    console.log(`Price: ${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}`)
    }

    ride = () => {
        console.log('Riding');
        this.miles += 10;
        return this
    }

    reverse() {
        console.log('Reversing');
        if (this.miles <= 5) {
            console.log("Bike cannot have less than 0 miles")
            this.miles = 0
            return this
        }
        else {
           this.miles -= 5;
           return this
        }
    }
}


let bike1 = new Bike(200, "25mph");
//console.log(bike1)
bike1.ride().ride().ride().reverse().displayinfo();


let bike2 = new Bike(100, "20mph");
//console.log(bike2)
bike2.ride().ride().reverse().reverse().displayinfo();


let bike3 = new Bike(400, "60mph");
//console.log(bike3)
bike3.reverse().reverse().reverse().displayinfo();