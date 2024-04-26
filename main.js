import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'What you want to add in your Todos?'
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'Do you want to add more in your Todos?',
            default: 'false'
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
let menuChoice = await inquirer.prompt({
    name: 'option',
    type: 'list',
    message: 'Select an option:',
    choices: ['View Todos', 'Mark Task as Completed', 'Delete Last Todo', 'Exit']
});
switch (menuChoice.option) {
    case 'View Todos':
        viewTodos();
        break;
    case 'Mark Task as Completed':
        markCompleted();
        break;
    case 'Delete Last Todo':
        deleteLastTodo();
        break;
    case 'Exit':
        console.log('Thank You & Goodbye!');
        break;
    default:
        console.log('Invalid choice');
        break;
}
;
function viewTodos() {
    console.log('Your Todos:');
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}
async function markCompleted() {
    let answer = await inquirer.prompt({
        name: 'index',
        type: 'number',
        message: 'Enter the number of the task you want to mark as completed:'
    });
    let index = answer.index;
    if (index >= 1 && index <= todos.length) {
        console.log(`Marking "${todos[index - 1]}" as completed.`);
        // You can add your logic here to mark the task as completed
    }
    else {
        console.log('Invalid index.');
        await markCompleted();
    }
}
function deleteLastTodo() {
    if (todos.length === 0) {
        console.log('No todos to delete.');
    }
    else {
        const deletedTodo = todos.pop();
        console.log(`Deleted todo: "${deletedTodo}"`);
        console.log('Remaining todos:', todos);
    }
}
;
