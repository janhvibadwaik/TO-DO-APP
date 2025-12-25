const todoItems = [
            "kapde Dhona hai",
            "gym jana hai",
            "code karna hai",
            "market jana hai",
            "dost se milna hai"
        ];
function displayTodoItems() {
            const todoItemsContainer = document.getElementById('todo-items-container');
            todoItemsContainer.innerHTML = '';

            for (let i = 0; i < todoItems.length; i++) {
                todoItemsContainer.innerHTML += `
                    <div class="todo-item">
                        ${todoItems[i]}
                        <img src="trashbin.png" onclick="deleteTask(${i})" class="trash-icon">
                    </div>
                `;
            }
        }
        displayTodoItems();

        function addTodoItem() {
            const newTodoInput = document.getElementById('new-todo-input');
            const newTodoItem = newTodoInput.value;

            if (!newTodoItem.trim()) {
                alert("Please enter a valid task.");
                return;
            }

            todoItems.push(newTodoItem);
            newTodoInput.value = "";
            displayTodoItems();
        }
