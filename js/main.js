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
    }
});