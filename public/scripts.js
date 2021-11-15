const socket = io('http://localhost:9000');

socket.on('connect', () => {
    console.log('socket.id', socket.id);
});

socket.on('nsList', (nsData) => {
    // console.log(nsData);

    let namespacesDiv = document.querySelector('.namespaces');
    namespacesDiv.innerHTML = '';
    nsData.forEach(ns => {
        namespacesDiv.innerHTML += `<div class="namespace"><img src="${ns.img}"/></div>`
    })
})

socket.on('messageFromServer', (dataFromServer) => {
    console.log('dataFromServer', dataFromServer);
    socket.emit('dataToServer', {data: 'Data from the Client!'});
})

