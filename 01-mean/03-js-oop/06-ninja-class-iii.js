class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    sayName (){
        console.log('Ninja Name: ' + this.name);
    }
    showStats () {
        console.log('Ninja Name: ' + this.name + '. Strength: ' + this.strength + ". Speed: " + this.speed + ". Health: " + this.health);
    }
    drinkSake () {
        this.health += 10;
        console.log('Ninja Name: ' + this.name + '. Strength: ' + this.strength + ". Speed: " + this.speed + ". Health: " + this.health);
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name, health, wisdom){
        super(name,health);
        this.wisdom = 10
    }
    speakWisdom(){
        const message = super.drinkSake();
        console.log("Named must be your fear before banish it you can.")
    }
}

const ninja1 = new Ninja('Striker')
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();