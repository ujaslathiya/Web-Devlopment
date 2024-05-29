const butttons = document.querySelectorAll('.button');
const body = document.body;

butttons.forEach( function (button){
    console.log(button);
    button.addEventListener('click', function (e){
        console.log(e);
        console.log(e.target);

        const id = e.target.id;

        if (id == 'grey') {
            body.style.backgroundColor = id;
            body.style.color = 'white';
        } else if (id == 'white') {
            body.style.backgroundColor = id;
            body.style.color = 'black';
        } else if (id == 'blue') {
            body.style.backgroundColor = id;
            body.style.color = 'white';
        } else if (id == 'yellow') {
            body.style.backgroundColor = id;
            body.style.color = 'black';
        }

        // body.style.backgroundColor = id;
    });
});