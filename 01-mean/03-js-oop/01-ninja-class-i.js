function Ninja(name, health){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    var privateMethod = function() {
        console.log(this)
    }
    

    this.sayName = function(){
        console.log('Ninja Name: ' + this.name);
    }
    this.showStats = function() {
        console.log('Ninja Name: ' + this.name + '. Strength: ' + strength + ". Speed: " + speed + ". Health: " + this.health);
    }
    this.drinkSake = function() {
        this.health += 10;
        console.log('Ninja Name: ' + this.name + '. Strength: ' + strength + ". Speed: " + speed + ". Health: " + this.health);
        return this;
    }

}
var ninja1 = new Ninja('Indiana');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake().drinkSake();