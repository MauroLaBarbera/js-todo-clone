/**
 * To Do Vue-List!
 */

const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Fare i compiti',
                completed: false,
            },
            {
                text: 'Fare la spesa',
                completed: false,
            },
            {
                text: 'Fare la lavatrice',
                completed: false,
            },
        ],
        newTodo: '',
    },
    methods: {
        //INSERIMENTO NUOVO TODO
        addTodo() {

            if(this.newTodo !== '') {

                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });

                //RESET
                this.newTodo = '';
                this.$refs.todoInput.focus();
            }
        },

        //RIMUOVIAMO TODO DALLA LISTA TRAMITE L?INDEX
        removeTodo(index) {
            this.todos.splice(index,1);

            //POSSIAMO SALVARE L?ELEMENTO CANCELLATO DENTRO AD UNA CONST
            // const deleted= this.todo.splice(index,1)[0];
            // console.log(deleted);
        },
        updateStatus(index) {
            this.todos[index].completed = ! this.todos[index].completed;
            console.log(updateStatus(index));
        },
    }
});