function Ninja(name, health){
    var self = this;
    var speed = 3;
    var strength = 3;
    var privateMethod = function() {
        console.log(self);
    }
    this.name = name;
    this.health = 100;

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
    this.punch = function(punchedNinja){
        punchedNinja.health -= 5;
        console.log(punchedNinja.name + ' was punched by ' + this.name + ' and lost 5 health!')
    }
    this.kick = function(kickedNinja) {
        var healthLost = (15 * strength);
        kickedNinja.health -= healthLost;
        console.log('In this case, ' + kickedNinja.name + ' lost ' + healthLost + ' because ' + self.name + ' has ' + strength + ' point of strength');
    }
}
var ninja1 = new Ninja('Indiana');
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

var blueNinja = new Ninja("Geomon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
