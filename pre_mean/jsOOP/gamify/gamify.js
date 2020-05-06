var tiger = {
        character: 'Tiger',
        greet: function () {
            console.log("The wonderful thing about Tiger is Tiger are wonderful things!");
        }

    },
    pooh = {
        character: 'Winnie The Pooh',
        greet: function () {
            console.log(this.character + " says: Yo wassup ")
        },
    },
    piglet = {
        character: 'Piglet',
        greet: function () {
            console.log(this.character + " says: 'Hey my man'")
        }
    },
    bees = {
        character: 'Bees',
        greet: function () {
            console.log(this.character + " says: 'Bzzz bzzz bzzz bzz bzzz'")
        },
    },
    robin = {
        character: 'Christopher Robin',
        greet: function () {
            console.log(this.character + " says: let's celebrate")
        }
    },
    owl = {
        character: 'Owl',
        greet: function () {
            console.log(this.character + " says: '...Hi!'")
        }
    },
    rabbit = {
        character: 'Rabbit',
        greet: function () {
            console.log(this.character + " says: 'Yoooooooo'")
        }
    },
    gopher = {
        character: 'Gopher',
        greet: function () {
            console.log(this.character + " says: 'My hood!'")
        }
    },
    kanga = {
        character: 'Kanga',
        greet: function () {
            console.log(this.character + " says: 'You are now at " + player.location.character + " hood' ")
        }
    },
    eeyore = {
        character: 'Eeyore',
        greet: function () {
            console.log(this.character + " says: Move east to reach heffalumps")
        }
    },
    heffalumps = {
        character: 'Heffalumps',
        greet: function () {
            console.log(this.character + " says: You are now at end game")
        }
    }




tiger.north = pooh;

pooh.west = piglet;
pooh.east = bees;
pooh.north = robin;
pooh.south = tiger;

piglet.east = pooh;
piglet.north = owl;

bees.west = pooh;
bees.north = rabbit;

robin.west = owl;
robin.east = rabbit;
robin.north = kanga;
robin.south = pooh;

owl.south = piglet;
owl.east = robin;

rabbit.east = gopher;
rabbit.west = robin;
rabbit.south = bees;

gopher.west = rabbit;

kanga.north = eeyore;
kanga.south = robin;

eeyore.east = heffalumps;
eeyore.south = kanga;

heffalumps.west = eeyore;




var player = {
    location: tiger,
    honey: false,
}

function move(direction) {
    if (direction == "north" || direction == "North") {
        if (player.location.north == null) {
            console.log("Direction not found, please move to another direction")
        } else {
            player.location = player.location.north
            console.log("You are now at " + player.location.character + "'s house!")
            player.location.greet();
        }
    }
    if (direction == "south" || direction == "South") {
        if (player.location.south == null) {
            console.log("Direction not found, please move to another direction")
        } else {
            player.location = player.location.south
            console.log("You are now at " + player.location.character + "'s house!")
            player.location.greet();
        }
    }
    if (direction == "east" || direction == "East") {
        if (player.location.east == null) {
            console.log("Direction not found, please move to another direction")
        } else {
            player.location = player.location.east
            console.log("You are now at " + player.location.character + "'s house!")
            player.location.greet()
        }
    }
    if (direction == "west" || direction == "West") {
        if (player.location.west == null) {
            console.log("Direction not found, please move to another direction")
        } else {
            player.location = player.location.west
            console.log("You are now at " + player.location.character + "'s house!")
            player.location.greet()
        }
    }
}

function pickup() {
    if (player.location == bees) {
        console.log("You've gathered some honey!")
    } else {
        console.log("There is no honey at this location!")
    }
}


function mission() {
    characterList = [tiger, pooh, piglet, robin, owl, rabbit, gopher, kanga, eeyore, heffalumps]
    let random = Math.floor(Math.random() * Math.floor(characterList.length))
    recipients = characterList[random]
    recipients.objectives = true
    console.log("Hello adventurer... " + recipients.character + " is in need of some honey! Please lend a helping hand and get some honey from the bees and take it over.");
}

function drop() {
    if (player.location.objectives == recipients.objectives) {
        console.log("Congratulations! You've delivered some honey!")
    } else {
        console.log("Whoops! This place isn't the place to drop honey folks!")
    }
}