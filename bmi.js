const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#Height').value)
    const Weight = parseInt(document.querySelector('#Weight').value)
    const result =document.querySelector('#result')

    if(height < 0 || isNaN(height)){
        result.innerHTML = 'Please give a valid height';
    }
    else if(Weight < 0 || isNaN(Weight)){
        result.innerHTML = 'Please give a valid weight';
    }
    else
    {
       const bmi = (Weight / ((height*height)/10000)).toFixed(2)
       result.innerHTML = `<span> Your BMI is :  ${bmi}</span>`;
       result.style.color = 'red';
    }
})