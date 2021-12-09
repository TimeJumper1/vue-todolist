
Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            todo: [
                {
                    text:'completare la prima milestone',
                    done: true
                },
                {
                    text:'completare la seconda  milestone',
                    done: false
                },
                {
                    text:'completare la terza milestone',
                    done: false
                },

            ],
            newTodo: '',

            
        },
        
        methods: {
            completed: function(index){
                this.todo.splice(index, 1)
                
            },
            addNewTodo: function(newTodo){
                this.todo.push({
                    text: newTodo,
                    done: false
                });
                this.newTodo= ''
                

            },
            doneOrNot: function(index){
                this.todo[index].done =!this.todo[index].done   
            }
        },
    }
);