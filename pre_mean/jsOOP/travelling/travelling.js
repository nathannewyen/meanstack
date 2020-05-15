// Hundred Acre Wood
// Objectives:
// Practice creating objects that point to each other.
// Complete the map of the Hundred Acre Wood that we started in the previous module.
// Create objects for each location on the map.
// Have the objects point to each other as indicated in the diagram.

var tiger = {
        character: 'Tiger'
    },
    pooh = {
        character: 'Winnie The Pooh'
    },
    piglet = {
        character: 'Piglet'
    },
    bees = {
        character: 'Bees'
    },
    robin = {
        character: 'Christopher Robin'
    },
    owl = {
        character: 'Owl'
    },
    rabbit = {
        character: 'Rabbit'
    },
    gopher = {
        character: 'Gopher'
    },
    kanga = {
        character: 'Kanga'
    },
    eeyore = {
        character: 'Eeyore'
    },
    heffalumps = {
        character: 'Heffalumps'
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
    location: tiger
}

function move(direction) {
    if (direction == "north" || direction == "North") {
        if (player.location.north == null) {
            console.log("Direction not found, please move to another direction")
        } else {
            player.location = player.location.north
            console.log("You are now at " + player.location.character + "'s house!")
        }
    }
    if (direction == "south" || direction == "South") {
        if (player.location.south == null) {
            console.log("Direction not found, please move to another direction")
        } else {
            player.location = player.location.south
            console.log("You are now at " + player.location.character + "'s house!")
        }
    }
    if (direction == "east" || direction == "East") {
        if (player.location.east == null) {
            console.log("Direction not found, please move to another direction")
        } else {
            player.location = player.location.east
            console.log("You are now at " + player.location.character + "'s house!")
        }
    }
    if (direction == "west" || direction == "West") {
        if (player.location.west == null) {
            console.log("Direction not found, please move to another direction")
        } else {
            player.location = player.location.west
            console.log("You are now at " + player.location.character + "'s house!")
        }
    }
}

move("north")
move("west")
move("east")
move("east")
move("north")
move("east")
move("west")
move("west")
move("west")
move("east")
move("north")
move("north")
move("east")