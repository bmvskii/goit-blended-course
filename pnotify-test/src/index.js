import { info, success, error, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

defaults.styling = 'material';
defaults.icons = 'material';

// document.querySelector('.buttons').addEventListener('click', (event) => {
//     const { target } = event;

//     if (target.classList.contains('button--error')) {
//         error({ text: "I'm an error message.", closer: true });
//     } else if (target.classList.contains('button--success')) {
//         success({ text: "I'm a success message." , closer: true });
//     } else if (target.classList.contains('button--info')) {
//         info({ text: "I'm an info message.", closer: true }); 
//     } 
// });

document.querySelector('.load-todos').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(res => res.json())
        .then(res => {
            const wrapper = document.querySelector('.todos');
            res.forEach(todo => {
                const { userId, completed, title } = todo;

                wrapper.innerHTML += `
                    <div>
                        <h2>${title}</h2>
                        <p>Is completed? ${completed ? 'Yes' : 'No'} </p>
                        <p>User id: ${userId}</p>
                    </div>
                `;
            })
          
        })
        .catch(e => console.log(e));
});

