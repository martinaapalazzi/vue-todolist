const { createApp } = Vue; 

createApp({
    data() {
        return {
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
    }
})
