// Get rid of the arrays, refactor, use an object to keep track of the state
//After the refactoring, each function now accepts a task object instead of an array index
//Creating functions that are more independent and more portable reduces the risk of functions accidentally modifying something you didn't mean to

// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logState: function() {//state of task mathod
      console.log(`${task.title} has${task.complete ? " " : " not "}been completed`)
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the poop out of the litter box");
const task2 = newTask("Do laundry", "desc");
const tasks = [task1, task2];

//Instead of keeping track of all the details in individual arrays, we are now using an object to group the task data together and keep this code more organized.
//OO bundles together state and logic into an object that can be represented as a single variable

task1.logState();
task1.markCompleted();
task1.logState();
console.log("task:", task1);
console.log("task title:", task1.title);
