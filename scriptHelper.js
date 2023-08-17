// Write your helper functions here!


require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML= 
    
           `     
             <h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth:${distance} </li>
                     <li>Number of Moons:${moons} </li>
                 </ol>
                 <img src="${imageUrl}"/>
            `
    
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    } else if (isNaN(testInput)) {
        return "Not a Number"
    } else {
        return "Is a Number"
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById('pilotStatus')
    let copilotStatus = document.getElementById('copilotStatus')
    let fuelStatus = document.getElementById('fuelStatus')
    let cargoStatus = document.getElementById('cargoStatus')
    let launchStatus = document.getElementById('launchStatus')
    // let list = document.getElementById('faultyItems')
//.toHaveTextContent means noun.innerHTML
//.toHave Style means to change css styling noun.style
   

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel ) === "Empty" || validateInput(cargoLevel) === "Empty") { 
         alert("All fields are requied and must have valid inputs!") 
        } else if (validateInput(pilot) === "is a number" || validateInput(copilot) ==="is a number")
        {
            alert("Must enter valid names!")
        } else if (validateInput(fuelLevel) ==="isNan" || validateInput(cargoLevel) === "isNan") 
        {       
            alert("Must enter numbers!")
        } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        }
        
    

// if statement for fuel being too low             
            if (fuelLevel < 10000) {
                list.style.visibility = 'visible';
                launchStatus.style.color = 'red';
                launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
                fuelStatus.innerHTML = 'Fuel level too low for launch';
// continue if statement for cargo too heavy                
            } else if (cargoLevel > 10000) {
                list.style.visibility = 'visible'; 
                launchStatus.style.color = 'red';
                launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
                fuelStatus.innerHTML = 'Fuel level high enough for launch';
                cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
// continue if statement for fuel low && cargo heavy                
            } else if (fuelLevel < 10000 && cargoLevel > 10000) {
                list.style.visibility = 'visible';
                launchStatus.style.color = 'red';
                launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
                fuelStatus.innerHTML = 'Fuel level too low for launch';
                cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
// finish if statement for all levels met                
            } else {
                list.style.visibility = 'visible';
                launchStatus.style.color = 'green';
                launchStatus.innerHTML = 'Shuttle is Ready for Launch';
                fuelStatus.innerHTML = 'Fuel level high enough for launch';
                cargoStatus.innerHTML = 'Cargo mass low enough for launch';
            }
        }
    


 
 //copy fetch website  return response.json()
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
            return response.json()

         });
 
     return planetsReturned;
 }
 // use math.floor to properly use math.random() and return a planet 
 function pickPlanet(planets) {
    let rando = Math.floor(Math.random() * planets.length)
    return planets[rando]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;