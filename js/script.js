
    const { createApp } = Vue
    
    createApp({
    
        data() {
            return { 
                todoList:[
                    "comprare casa",
                    "prendere le banane",
                    "comprare una macchina ",
                    "fare i compiti",
                    "giocare a pallone",
                    "uccidere flanders"
                    ],

               inputUser: "",
               
                    
               
            }
        },
        methods: {
            
            inputButton () {
                this.todoList.push(this.inputUser)
            },

            clearTodo(index) {
                console.log("haiCliccato")
                this.todoList.splice(index, 1);
                
            },
            
           
    
           
        },
        
        mounted() {
            
        }
    
    }).mount('#app')