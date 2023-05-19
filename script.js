console.log('hola');
window.addEventListener('load', () => {

    //funcion para el boton submit de la seccion contacto

    const submitButton = document.getElementById('submit');
    submitButton?.addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        const email = document.getElementById('email').value;
        if (name != '' && message != '' && email != ''){

            //mensajes en consola
            console.log('name: ' + name);
            console.log('email: ' + email);
            console.log('message: ' + message);

            //ingresar texto en el dom
            document.getElementById('user-name').innerHTML = name;
            document.getElementById('user-email').innerHTML = email;
            document.getElementById('user-message').innerHTML = message;

        } else{
            console.log('datos mal ingresados');

            document.getElementById('error').classList.add('show-error')
        }
    })

    //funcion para el boton descubrir de la seccion mrX

    const getUserButton = document.getElementById('get-user')
    getUserButton.addEventListener('click',getUser)

})

function getUser(){
    fetch('https://randomuser.me/api/')
        .then((e)=>{
            return e.json()
        })
        .then((response)=>{
            let userData = response.results[0].name
            document.querySelector('#user-name').innerHTML = `${userData.title} ${userData.first} ${userData.last}`
        })
}
