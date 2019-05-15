import { openDB } from 'idb';

(async function(document) {
    const app = document.querySelector('#app');
    
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
    }
    catch (error) {
        console.log(error, ':(');
    }



})(document);
