console.log ("this file is conneted");


const counterValue = document.getElementById('value');
const increasedBtn= document.getElementById('increased');
const decreasedBtn =document.getElementById('decreased');
const resetBtn = document.getElementById('reset');
//const buttons =document.querySelectorAll('button-container');

let count = 0;

increasedBtn. onclick =function(){
    count++;
    counterValue.textContent =count;
}

decreasedBtn .onclick =function(){
    count--;
    counterValue.textContent =count;
}
resetBtn .onclick =function(){
    count=0;

    counterValue.textContent =count;
}
if(count > 0) {
    counterValue.style.color = 'blue';
} else if (count>0){
    counterValue.style.color ='red';
}