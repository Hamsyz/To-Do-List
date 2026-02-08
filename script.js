//create the empty array for tasks
const tasks = [];

const form = document.getElementById("taskform");

//stop the site from reloading
form.addEventListener("submit", function(e) {

    //stop the site from reloading
    e.preventDefault();

    //save the task and push it into array
    const task = e.target.task.value;
    tasks.push(task);
})

//create a loop to show every task in the array
for (const task of [...tasks].reverse()) {

}




