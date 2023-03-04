const container = document.querySelector('.container');
const names= [];
const form = document.querySelector('.addName');


function rerender(){
    container.innerText = ' ';
    for (i=0; i< names.length; i++){

        addCard(names[i].name, names[i].lastname);
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault();
    const name = form.name;
    const lastname = form.lastname;

    const newname = {
        name: name.value,
        lastname: lastname.value
    };

    names.push(newname);

    rerender();

    name.value = ' ';
    lastname.value = ' ';

});

function addCard(name, lastname){
    const div = document.createElement('div');
    const pName = document.createElement('p');
    const pLastname = document.createElement('p');

    div.classList.add('item');

    pName.innerText = name;
    pLastname.innerText = lastname;
    div.append(pName, pLastname);
    container.append(div);

}