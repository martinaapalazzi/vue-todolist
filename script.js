const { createApp } = Vue; 

createApp({
    data() {
        return {
            newToDo: '',
            toDoList: [
                {
                    text: 'Fare il letto',
                    done: true
                },
                {
                    text: 'Fare la lavatrice',
                    done: true
                },
                {
                    text: 'Preparare la cena',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Andare al cinema',
                    done: false
                },
            ]
        }
    },
    methods: {
        addNewToDo(){
            this.toDoList.push(this.newToDo);
            this.newToDo = ''
        },
        removeFromToDo(i){
            this.toDoList.splice(i, 1)
        }
    }
}).mount('#app')
