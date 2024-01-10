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
            if (this.newToDo.trim().length > 0) {
                let newObj = {
                    text: this.newToDo.trim(),
                    done: false
                };
                this.toDoList.push(newObj);
                this.newToDo = ''
            };
        },
        removeFromToDo(i){
            this.toDoList.splice(i, 1)
        },
        invertDone(i){
            this.toDoList[i].done = !this.toDoList[i].done
        }

    }
}).mount('#app')
