
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

        }
    }
);