// Assignment: Ninja Class
// Create a new object constructor called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// Ninja should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 Health to the Ninja



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
}

let ninja1 = new Ninja('Hyabusa', 100)
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()