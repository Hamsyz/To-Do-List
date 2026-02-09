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

    // create a new element (p) in memory
    const newtaskpara = document.createElement("p");
    // fill the newp with text
    newtaskpara.textContent = task;
    //adding a class to the p element
    newtaskpara.classList.add("tasks");
    //append the newp to the adress
    container.appendChild(newtaskpara);

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

    // create a new element (p) in memory
    const newtaskpara = document.createElement("p");
    // fill the newp with text
    newtaskpara.textContent = task;
    // adding a class to the p element
    newtaskpara.classList.add("tasks")
    // append the newp to the adress
    container.prepend(newtaskpara);

    // update the the data
    localStorage.setItem("taskdata", JSON.stringify(tasks));

})








