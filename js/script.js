for_count.innerHTML = "00:00:00";         //output of timer values
for_msec.innerHTML = "0";                 //output of milliseconds
start.addEventListener("click", begin);   //event onclick start
clear.addEventListener("click", stp);   //event onclick reset

var count = 0,   //for current state of counter
    timerId, //for function of all timer 
    go = false; //to stop all timer temporarily

//to run timer and pause it
function begin() {
	start.removeAttribute('value'); //remove title of start button
	start.setAttribute('value', 'pause');//change title of start button on 'pause'
    
	if (go == false) { //it is false for start value, this condition runs the timer code
       
		timerId = setInterval(function() {//function for code of all timer
		count++; // counter
		var msec = count%1000;  // count milliseconds
        var sec = Math.floor(count/100)%60; //count seconds
		if (sec<10) {sec = "0" + sec}
		var min = Math.floor(count/6000)%60; //count minutes
	    if (min<10) {min = "0" + min}
		var hours = Math.floor(count/360000)%24; //count hours
	    if (hours<10) {hours = "0" + hours}
		var str = hours + ":" + min + ":" + sec; //string for result of timer
		for_count.innerHTML = str; // output string for timer
		for_msec.innerHTML = msec; // output string for counter of msec
	},1); 
	
	go = true; //click on pause stops all timer temporarily 
    
    } else {
		clearInterval(timerId);// runs again all timer 
		go = false; // helps to run again all timer
		start.removeAttribute('value');  // remove 'pause' value on button
	    start.setAttribute('value', 'continue'); // change value on 'continue'
	}
	
}

//to stop and reset timer
function stp() {
  clearInterval(timerId); //reset and stop all timer
  for_count.innerHTML = "00:00:00";//output of clicking button clear
  for_msec.innerHTML = "0"; // output of clicking button clear
  go = false; // to start counting from zero
  count = 0; //reset counter
  start.removeAttribute('value');
  start.setAttribute('value', 'start');
}




