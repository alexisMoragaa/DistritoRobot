const endPoint = 'http://localhost:3000/inscription/set-new-inscription'
const $form = document.querySelector('#formSubscription')

$form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData($form)
    fetch(endPoint, {
        method: 'POST',
        body : formData
    })
})


let addform = document.querySelector("#add-competitor")
let comp = document.querySelector("#competitors");
let numComp = 0

const createElement = (name, placeholder, numComp) => {
    //Contenedor del elemento
    let container = document.createElement('div')
    container.classList.add('col-6')
    container.classList.add('mt-3')

    //label
    let label = document.createElement('label')
    label.textContent = `${placeholder} # ${numComp}` 

    //Elemento
    let element = document.createElement('input')
    element.classList.add(name)
    element.classList.add('form-control')
    element.setAttribute('placeholder', `${placeholder} # ${numComp}`)
    element.setAttribute('name', `${name}-${numComp}`);
    element.setAttribute('required', '');

    container.appendChild(label)
    container.appendChild(element)
    return container
}


function addUser(){
    numComp ++

    if(numComp > 4){
        alert('No puede registrar mas de 4 participantes por equipo')
        return false
    }

    let container = document.createElement('div')
    container.classList.add('row');
    container.classList.add('mt-2');
    container.classList.add('mb-4');

    let name = createElement('name', 'Nombre Participante ', numComp)
    container.appendChild(name)
   
    let rut = createElement('rut', 'Rut participante ', numComp)
    container.appendChild(rut)

    let mail = createElement('correo', 'Correo participante ', numComp)
    container.appendChild(mail)

    let phone = createElement('phone', 'Telefono participante ', numComp)
    container.appendChild(phone)

    comp.appendChild(container)
}

addform.addEventListener('click', () => {
//nombre, rut, correo, telefono
  addUser()
})

addUser()




