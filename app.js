// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigoSorteado = '';

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (/\d/.test(nombreAmigo)) {
        //Validación para que el nombre no contenga números 
        alert("El nombre no puede contener números.");
        return;
    }
    if (nombreAmigo == '') {
        alert("Por favor, escribe el nombre de un amigo.");
        return;
    }
    if (nombreAmigo.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return;
    }
    amigos.push(nombreAmigo);
    actualizarListaAmigos();
    document.getElementById('amigo').value = '';
    console.log(amigos);
    document.getElementById('amigo').focus();
}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        // Crea un elemento de lista para cada amigo
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigoSorteado == '') {
        if (amigos.length === 0) {
            alert("No hay amigos para sortear.");
            return;
        }
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('listaAmigos').innerHTML = ''; // Limpiar la lista antes de mostrar el resultado
        let resultado = document.getElementById('resultado'); // Aquí es donde se actualiza el elemento 'resultado'
        resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;

    } else {
        resultado.innerHTML = `ya has seleccionado a tu amigo secreto, es: ${amigoSorteado}`;
    }

}