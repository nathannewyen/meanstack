users = [{
        fname: "Kermit",
        lname: "the Frog",
        languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
        interests: {
            music: ["guitar", "flute"],
            dance: ["tap", "salsa"],
            television: ["Black Mirror", "Stranger Things"]
        }
    },
    {
        fname: "Winnie",
        lname: "the Pooh",
        languages: ["Python", "Swift", "Java"],
        interests: {
            food: ["honey", "honeycomb"],
            flowers: ["honeysuckle"],
            mysteries: ["Heffalumps"]
        }
    },
    {
        fname: "Arthur",
        lname: "Dent",
        languages: ["JavaScript", "HTML", "Go"],
        interests: {
            space: ["stars", "planets", "improbability"],
            home: ["tea", "yellow bulldozers"]
        }
    }
]



function userInfo(users) {
    for (var i = 0; i < users.length; i++) {
        var interests = "";
        for (var j in users[i]['interests']) {
            interests += users[i]['interests'][j] + " ";
        }
        // Language
        console.log(
            users[i]['fname'] +
            " " +
            users[i]['lname'] +
            " knows " +
            users[i]['languages'] +
            ".")
        // Interests
        console.log(
            users[i]['fname'] +
            " " +
            users[i]['lname'] +
            " is also interested in " +
            interests
        );
    }
}

userInfo(users)