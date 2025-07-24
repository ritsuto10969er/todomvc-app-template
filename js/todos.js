window.todos = function () {
    return {
        filter: 'all',

        todos: [],

        newTodo: '',

        editedTodo: null,
        
        get active() {
            return 	this.todos.filter(todo => ! todo.completed)
        },

        get completed() {
            return 	this.todos.filter(todo => todo.completed)
        },

        get filteredTodos() {
            return {
                all: this.todos,
                active: this.active,
                completed: this.completed
            }[this.filter];
        },

        get allComplete() {
            return this.todos.length > 0 && this.todos.every(todo => todo.completed);
        },

        addTodo() {
            if(!this.newTodo) {
                return;
            }
            this.todos.push({
                id: Date.now(),
                body: this.newTodo,
                completed: false
            });

            this.newTodo = '';
        },

        editTodo(todo) {
            todo.cacheBody = todo.body;
            this.editedTodo = todo;
        },

        cancelEdit(todo) {
            todo.body = todo.cacheBody;

            this.editedTodo = null;

            delete todo.cacheBody;
        },

        editComplete(todo) {
            if(todo.body.trim() === '') {
                return this.deleteTodo(todo);
            }

            this.editedTodo = null;
        },

        deleteTodo(todo) {
            let position = this.todos.indexOf(todo);
            this.todos.splice(position, 1);
        },

        toggleAllTodos() {
            let allComplete = this.allComplete;

            this.todos.forEach(todo => todo.completed = !allComplete);
        }
    }
}