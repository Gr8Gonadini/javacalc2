var box = document.getElementById('display');         //gets valuefrom element with given parameter

function toScreen(parameter){                       //toScreen has onclick in html part, after clicking it sets parameter to value of clicked buttons value
  box.value+=parameter;                             //+= will allow to keep adding elements to display
  
  if(parameter === 'c'){
    box.value = '';
  }
}

 
function answer(){
  parameter = box.value;
  parameter=eval(parameter);
  box.value=parameter;
}

function power(){
  parameter= box.value;
  parameter= eval(parameter*parameter);
  box.value=parameter;
}

function backspace(){
  var num = box.value;
  var len = num.length-1; //-1 to target last element
  var newNum = num.substring(0, len);    //builds new substring in place of previous one, starts at 0 index, ends at last character -1
  box.value = newNum;
}