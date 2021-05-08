
function getCurrentTime(){
    const timeDate = new Date();
    time = timeDate.getHours() + ":" + timeDate.getMinutes() + ":" + timeDate.getSeconds();
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('currentTime').innerText = currentTime;
    setTimeOfDay(time);
}


function setTimeOfDay(currentTime){
   let morning = document.getElementById('morningSelect').value.split('-');
   let morningOne = morning[0];
   let morningTwo = morning[1];
    
   let afternoon = document.getElementById('afternoonSelect').value.split('-');
   let afternoonOne = afternoon[0];
   let afternoonTwo = afternoon[1];

   let evening = document.getElementById('eveningSelect').value.split('-');
   let eveningOne = evening[0];
   let eveningTwo = evening[1];


    if(currentTime >= morningOne && currentTime <= morningTwo){
        document.getElementById('timeDesc').innerText = "Morning!";
        document.getElementById("timePicture").src = "assets/morning.png";
    }
    else if( currentTime >=  afternoonOne && currentTime <=  afternoonTwo){
        document.getElementById('timeDesc').innerText = "Afternoon!";
        document.getElementById("timePicture").src = "assets/afternoon.jpeg";
    }
    else if(currentTime >= eveningOne && currentTime <= eveningTwo){
        document.getElementById('timeDesc').innerText = "Evening!";
        document.getElementById("timePicture").src = "assets/evening.jpeg";
    }
    else(document.getElementById('timeDesc').innerText = "No Special Time Yet!", 
    document.getElementById("timePicture").src = "assets/clock.jpeg"
    );
    

}


getCurrentTime();
setInterval(getCurrentTime, 1000);
