//create the empty array for tasks
let tasks = [];

// get the saved data from the localstorage
const saveddata = localStorage.getItem("taskdata");

if(saveddata) {
    tasks = JSON.parse(saveddata);
}


// get the address of container for future loop
const container = document.getElementById("taskcontainer");

//create a loop to load tasks 
for (const task of [...tasks].reverse()) {

    // first create a div so we can put our task and button in it 
    const subcontainer = document.createElement("div");
    // add a class
    subcontainer.classList.add("subcontainer");
    // put it in main container
    container.prepend(subcontainer);

    // create a new element (p) in memory
    const newtaskpara = document.createElement("p");
    // fill the newp with text
    newtaskpara.textContent = task;
    //adding a class to the p element
    newtaskpara.classList.add("tasks");
    //append the newp to the adress
    subcontainer.appendChild(newtaskpara);

    // create a new button in memory
    const donebutton = document.createElement("button");
    // adding  a class to the new button
    donebutton.classList.add("donebutton");
    //prepend the new p to the adress
    subcontainer.prepend(donebutton);

}

// get the adresses of form and input bar
const form = document.getElementById("taskform");
const taskinput = document.getElementById("taskinput");

form.addEventListener("submit", function(e) {

    // stop the site from reloading
    e.preventDefault();

    // save the task and push it into array
    const task = e.target.task.value;
    tasks.push(task);

    // clear the input bar
    taskinput.value = "";

    // first create a div so we can put our task and button in it 
    const subcontainer = document.createElement("div");
    // add a class
    subcontainer.classList.add("subcontainer");
    // put it in main container
    container.prepend(subcontainer);

    // create a new element (p) in memory
    const newtaskpara = document.createElement("p");
    // fill the newp with text
    newtaskpara.textContent = task;
    // adding a class to the p element
    newtaskpara.classList.add("tasks")
    // prepend the newp to the adress
    subcontainer.prepend(newtaskpara);

    // create a new button in memory
    const donebutton = document.createElement("button")
    // adding  a class to the new button
    donebutton.classList.add("donebutton")
    //prepend the new p to the adress
    subcontainer.prepend(donebutton)

    // update the the data
    localStorage.setItem("taskdata", JSON.stringify(tasks));

})








