// Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following public attributes (do not worry about private variables for this assignment):

// name
// health
// speed
// strength
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 health to the Ninja
// Part II - Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.


class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
    sayName() {
        console.log(`My ninja name is ${this.name}`)
    }
    showStats() {
        let speed = 3;
        let strength = 3;
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`)
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

class Sensei extends Ninja {
    constructor(name, health) {
        super(name, health)
    }
    showStats() {
        let speed = 10;
        let strength = 10;
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`)
    }
    speakWisdom() {
        super.drinkSake()
        console.log(`${this.name} just drank Sake and gain 10HP`)
        console.log("Speak Wisdom: What one programmer can do in one month, two programmers can do in two months.")
    }
}



let ninja1 = new Ninja('Naruto', 100)
let ninja2 = new Ninja('Nathan the one punch', 200)
let ninja3 = new Ninja('Karate', 300)

let superNinja = new Sensei('SuperSaiyan', 500)

// ninja1.showStats()
// ninja2.showStats()
// ninja3.showStats()
superNinja.speakWisdom()
superNinja.showStats()