import { openDB } from 'idb';
import AppTodos from '/js/components/todos.js';

(async function(document) {
    const app = document.querySelector('#app');
    const ul = document.querySelector('#ul');
    
    try {
        const data = await fetch('http://localhost:3333/list');
        const json = await data.json();
        const valueInput = document.getElementById("inputText").value
    
        const database = await openDB('db', 1, {
            upgrade(db) {
                db.createObjectStore('line', {
                autoIncrement: true,
                });
            }
        });

        if (navigator.onLine) {
            await database.put('line', json, 'line');
        }

        const lines = await database.get('line', 'line');
        fetch('http://localhost:3333/list', {
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })

        const todos = json.map(item => {
            const todosElement = new AppTodos();
        
            todosElement.initTodos(item.content);
        
            ul.appendChild(todosElement);
        
            return todosElement;
        });
    }
    catch (error) {
        console.log(error, ':(');
    }



})(document);
