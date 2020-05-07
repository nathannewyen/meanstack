// .punch()
// Add a new method to Ninja called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your .punch() should display a console message like the below example.

// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and  .punch() will take another Ninja instance.

// Validations
// Update .punch() and .kick() so that they only accept Instances of Ninja. Hint: You will need to find a way to check the constructor of an instance. You will often need to consult outside documentation to find solutions for particular features.

class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        var self = this;
        var speed = 3;
        var strength = 3;
        var privateStats = function () {
            self
        }
        this.showStats = function () {
            console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`)
            privateStats();
        }
    }
    sayName() {
        console.log(`My ninja name is ${this.name}`)
    }
    drinkSake() {
        this.health += 10
        return this.health
    }
    punch(ninja) {
        var health_lost_by_punch = 5
        ninja.health -= health_lost_by_punch
        console.log(`${ninja.name} was punched by ${this.name} and ${ninja.name} lost ${health_lost_by_punch} HP`)
    }
    kick(ninja) {
        var health_lost_by_kick = 15
        ninja.health -= health_lost_by_kick
        console.log(`${ninja.name} was punched by ${this.name} and ${ninja.name} lost ${health_lost_by_kick} HP`)
    }
}

let ninja1 = new Ninja('Naruto', 100)
let ninja2 = new Ninja('Nathan the one punch', 200)


ninja1.showStats()
ninja2.showStats()
ninja2.punch(ninja1)
ninja1.kick(ninja2)
ninja1.kick(ninja2)
ninja1.kick(ninja2)
ninja1.kick(ninja2)
ninja1.kick(ninja2)
ninja1.kick(ninja2)
ninja2.showStats()