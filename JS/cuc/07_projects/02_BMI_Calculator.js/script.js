const form = document.querySelector('form');

form.addEventListener('submit', function (e){
    e.preventDefault();

    const height =  parseFloat(document.querySelector('#height').value)
    const weight =  parseFloat(document.querySelector('#weight').value)

    const result =  document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Height = ${height} | Please give valid height`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `weight = ${weight} | Please give valid weight`;
    } else {
        const bmi = ( weight / ((height*height) / 10000)).toFixed(2);
        result.innerHTML = ` BMI : ${bmi}`;
    }
})