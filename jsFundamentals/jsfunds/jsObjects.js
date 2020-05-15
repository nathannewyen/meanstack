// Name: Remy, Cohort: Jan
// Name: Genevieve, Cohort: March
// Name: Chuck, Cohort: Jan
// Name: Osmund, Cohort: June
// Name: Nikki, Cohort: June
// Name: Boris, Cohort: June

// Challenge I
let students = [{
        name: 'Remy',
        cohort: 'Jan'
    },
    {
        name: 'Genevieve',
        cohort: 'March'
    },
    {
        name: 'Chuck',
        cohort: 'Jan'
    },
    {
        name: 'Osmund',
        cohort: 'June'
    },
    {
        name: 'Nikki',
        cohort: 'June'
    },
    {
        name: 'Boris',
        cohort: 'June'
    }
];

function studentShow(studentList) {
    for (let student in studentList) {
        console.log("Name: " + students[student]['name'] + ", Cohort: " + students[student]['cohort']);
    }
}

studentShow(students)

// Challenge 2
// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9
let users = {
    employees: [{
            'first_name': 'Miguel',
            'last_name': 'Jones'
        },
        {
            'first_name': 'Ernie',
            'last_name': 'Bertson'
        },
        {
            'first_name': 'Nora',
            'last_name': 'Lu'
        },
        {
            'first_name': 'Sally',
            'last_name': 'Barkyoumb'
        }
    ],
    managers: [{
            'first_name': 'Lillian',
            'last_name': 'Chambers'
        },
        {
            'first_name': 'Gordon',
            'last_name': 'Poe'
        }
    ]
};

console.log("")

function showEmployees(users) {
    let number_employees = 0
    employees_name_char = 0
    console.log("EMPLOYEES")
    for (let i in users['employees']) {
        number_employees += 1
        employees_name_char = users['employees'][i]['first_name'].length + users['employees'][i]['last_name'].length
        console.log(number_employees + " - " + users['employees'][i]['last_name'], users['employees'][i]['first_name'] + " - " + users['employees'][i]['last_name'] + " - " + employees_name_char);
    }
}

showEmployees(users);

function showManager() {
    let number_manager = 0;
    manager_name_char = 0;
    console.log("MANAGERS")
    for (let i in users['managers']) {
        number_manager++;
        manager_name_char = users['managers'][i]['first_name'].length + users['managers'][i]['last_name'].length
        console.log(number_manager + " - " + users['managers'][i]['last_name'] + users['managers'][i]['first_name'] + " - " + manager_name_char)
    }
}

showManager(users);