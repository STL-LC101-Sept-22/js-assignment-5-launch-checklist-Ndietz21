// Write your JavaScript code here!


window.addEventListener("load", function() {

    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let selectedPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
   })
   
   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";
   
   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {
       event.preventDefault();
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let pilot = pilotNameInput.value;

       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let copilot = copilotNameInput.value;

       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let fuelLevel = fuelLevelInput.value;

       let cargoMassInput = document.querySelector("input[name=cargoMass]");
       let cargoLevel = cargoMassInput.value;

       formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

   }); 
});