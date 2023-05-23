let weight=document.querySelector('#firstValue')
let height=document.querySelector('#secondValue')
let bmi=0;
let result= document.querySelector('#Answer')
let val =true


function DisplayThis(){
  validationWeight();
  console.log(val);
  validationHeight();
  console.log(val);
  if (val){
    bmi=eval(weight.value / Math.pow(height.value/100,2)).toFixed(1); 
  
   
    console.log(bmi);
  
    if (bmi < 18.5) {
       result.innerText=`${bmi}, You are underweight 🤏`;
      
    }else if (bmi>=18.5 && bmi<=24.9){
      result.innerText=`${bmi}, Your weight is normal 😊`;
    }else if (bmi>=25 && bmi <=29.9){
      result.innerText=`${bmi},You are overweight 🤔`;
    }else if(bmi >= 30){
      result.innerText=`${bmi}, You are obese😒`;
  }

}
 
}

function Clear(){
weight.value = ''
height.value = ''
result.value= ''
result.innerText=''
}

function validationWeight(){
  if ( weight.value.length==0){
    result.innerText = "Please enter a number"
    val =false
   
  }else 
    if (isNaN(weight.value)) {
      result.innerText = "Please enter a number";
      console.log(weight.value);
      val=false
    }

 
}
function validationHeight(){
  if (height.value.length > 0) {
    if (isNaN(height.value)) {
      result.innerText = "Please enter a number";
      console.log(height.value);
      val=false
    }
  }
   else if ( height.value.length==0){
    result.innerText = "Please enter a number";
    console.log(height.value);
    val=false

  }
     

  
}
