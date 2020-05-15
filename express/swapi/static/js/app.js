//**  Planet **/
$('#info').hide();
document.getElementById('people').addEventListener('click', displayInfo);

function displayInfo() {
    $('#info').toggle();

    let people_name = document.getElementById('people_names')

    fetch('https://swapi.dev/api/people')
        .then((res) => res.json())
        .then(({
            results,
            count,
        }) => {
            console.log(count)
            for (var i = 0; i <= count; i++) {
                people_name.innerHTML += `<p> ${results[i].name} </p>`
            }

        })
}

//**  Planet **/
$('#planet_info').hide();
document.getElementById('planet').addEventListener('click', displayPlanetInfo);

function displayPlanetInfo() {
    $('#planet_info').toggle();

    let planet_name = document.getElementById('planet_names')

    fetch('https://swapi.dev/api/planets/')
        .then((res) => res.json())
        .then(({
            results,
            count,
        }) => {
            console.log(count)
            for (var i = 0; i <= count; i++) {
                planet_name.innerHTML += `<p> ${results[i].name} </p>`
            }

        })
}