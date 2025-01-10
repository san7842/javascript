
let displayValue = '';

let appendNumber=(number)=> {
  displayValue += number;
  updateDisplay();
}

let appendOperator=(operator) =>{
  displayValue += ` ${operator} `;
  updateDisplay();
}

let  clearDisplay=()=> {
  displayValue = '';
  updateDisplay();
}

let updateDisplay=()=>{
  let display = document.getElementById('display');
  display.value = displayValue;
}

let calculateResult=()=> {
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = 'Error';
  }
  updateDisplay();
}
let squre=(value)=>{
    let show=document.querySelector("#display")
    displayValue=displayValue*displayValue
   show.value=displayValue;
}
let  del=()=> {
     displayValue = displayValue.trimEnd();
     displayValue = displayValue.slice(0, -1);
      updateDisplay();
     }
let root=()=>{
     try { 
        displayValue = Math.sqrt(parseFloat(displayValue)).toString(); 
    } 
    catch (error) { displayValue = 'Error'; }
     updateDisplay();
 }