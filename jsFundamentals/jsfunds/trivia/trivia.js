// Geography

let geographyElement = document.getElementById('geography');

fetch(`https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple`)
    .then((response) => response.json())
    .then(({
        results,
    }) => {
        results.map((result, idx) => {
            const node_geography = document.createElement('div')
            node_geography.textContent = `Question ${idx + 1}: ${result.question}`
            node_geography.classList.add('choice')
            geographyElement.append(node_geography)
        })
    });

// Science
let scienceElement = document.getElementById('science');

fetch(`https://opentdb.com/api.php?amount=10&category=19&difficulty=easy`)
    .then((response) => response.json())
    .then(({
        results,
    }) => {
        results.map((result, idx) => {
            const node_science = document.createElement('div')
            node_science.textContent = `Question ${idx + 1}: ${result.question}`
            node_science.classList.add('choice')
            scienceElement.append(node_science)
        })
    });
// Celebrities
let celebElement = document.getElementById('celeb');

fetch(`https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=multiple`)
    .then((response) => response.json())
    .then(({
        results,
    }) => {
        results.map((result, idx) => {
            const node_celeb = document.createElement('div')
            node_celeb.textContent = `Question ${idx + 1}: ${result.question}`
            node_celeb.classList.add('choice')
            celebElement.append(node_celeb)
        })
    });