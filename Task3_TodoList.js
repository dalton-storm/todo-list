// Write a to-do list application in JavaScript that allows users to add, view and delete tasks.

// Ensure your code follows logical structure, proper naming conventions, and includes comments and documentation.

let tasks = [];

/**
 * Adds a new task to the list.
 * @param {string} task - The task to be added.
 */

const addTask = (task) => {
  // Creates a shallow copy of the tasks array and appends the new task to the end
  const updatedTasks = [...tasks, task];
  // By setting the shallow copy to a new variable updatedTasks, we ensure that we do not modify the original tasks array and it is immutable.
  tasks = updatedTasks;
};

/**
 * Views all the tasks in the list.
 */

const viewTasks = () => {
  // This function can work in one of two ways - either by console.logging the entire tasks array, or looping over the array and individually logging each of the tasks.
  // Both have been included here

  console.log(tasks);

  // tasks.forEach((task) => console.log(task));
};

/**
 * Deletes a task from the list based on its index.
 * @param {number} taskIndex - The index of the task to be deleted.
 */

const deleteTask = (taskIndex) => {
  const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
  tasks = updatedTasks;
};

// This function was added in the feature-branch and merged in a pull request.

const deleteAllTasks = () => {
  const updatedTasks = [];
  tasks = updatedTasks;
};

// Example usage:

// Adding tasks
addTask('Take out the trash');
addTask('Walk the dog');
addTask('Buy groceries');

// Viewing tasks
viewTasks();

// Deleting a task - deletes 'Walk the dog'
deleteTask(1); //

viewTasks();

deleteAllTasks();

viewTasks();

// For task 4:

// Initialise a Git repository in the directory containing your to-do list application.
// - Commit your code to the repository with a meaningful commit message.
// - Push your repository to GitHub.
// - Create a pull request and merge it.

// Github repo - https://github.com/dalton-storm/todo-list

// For task 5:

// Github pull request - https://github.com/dalton-storm/todo-list/pull/2
