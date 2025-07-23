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

        addTodo() {
            this.todos.push({
                id: this.todos.length + 1,
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

            this.editedTodo =null
        },

        deleteTodo(todo) {
            let position = this.todos.indexOf(todo);
            this.todos.splice(position, 1);
        }
    }
}