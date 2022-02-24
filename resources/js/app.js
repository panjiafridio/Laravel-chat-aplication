const { default: axios } = require('axios');

require('./bootstrap');

const username = document.getElementById('username');
const messages_el = document.getElementById('messages');
const message_input = document.getElementById('message-input');
const message_form = document.getElementById('send-message');

message_form.addEventListener('submit', (e) => {
    e.preventDefault();

    let has_error = false;

    if(username.value == ''){
        alert('Please input username')
        has_error = true; 
    }

    if(message_input.value == ''){
        alert('Please input messages')
        has_error = true; 
    }

    if(has_error){
        return;
    }

    const options = {
        method : 'post',
        url : '/send-message',
        data : {
            username : username.value,
            message : message_input.value
        },
        TransformResponse : [(data) => {
            return data;
        }]
    }

    axios(options);
})

window.Echo.channel('chat')
    .listen('.message', (e) =>{
        messages_el.innerHTML += `<div class='message'><strong>${e.username}</strong> : ${e.message}</div>`
    });
