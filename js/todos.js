window.todos = function () {
    return {
        todos: [],
        
        get active() {
            return 	this.todos.filter(todo => ! todo.completed)
        },

        newTodo: '',

        addTodo() {
            this.todos.push({
                id: this.todos.length + 1,
                body: this.newTodo,
                completed: false
            });

            this.newTodo = '';
        },

        deleteTodo(todo) {
            let position = this.todos.indexOf(todo);
            this.todos.splice(position, 1);
        }
    }
}