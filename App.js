const dateOfBirth = document.querySelector('#dateOfBirth');
const luckyNumber  = document.querySelector('#luckyNumber');
const checkBtn= document.querySelector('.checkBtn');
const output = document.querySelector('#output');



function compareValues(sum,luckyNumber){
if(sum%luckyNumber ===0){
    output.innerText = "your birthday is lucky 🥳"
}
else{
    output.innerText = "your birthday is Not Lucky 🤭"
}
}




checkBtn.addEventListener('click',function checkBirthIsLucky(){

    let DOB = dateOfBirth.value;
    let sum =  sumOfDate(DOB)
 
    if(sum && DOB){
        compareValues(sum, luckyNumber.value)
    }
    else{
        output.innerText = "Please enter both fields 😡"
    }

})




function sumOfDate(DOB){

    const d = DOB.replaceAll("-","");
    
    let sum =0;

    for(let i=0; i<d.length;i++){
        sum = sum+Number(d.charAt(i));

    }


    return sum;
}

