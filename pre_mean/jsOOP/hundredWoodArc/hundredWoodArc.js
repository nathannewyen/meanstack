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
    Heffalumps = {
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