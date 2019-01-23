var hours =0;
var mins =0;
var seconds =0;

document.getElementById('start').addEventListener('click', function(){
      startTimer();
});

document.getElementById('stop').addEventListener('click', function(){
      clearTimeout(timex);
});

document.getElementById('reset').addEventListener('click', function(){
    hours = 0; mins = 0; seconds = 0;
    document.getElementById('hours').innerHTML = '00:';
    document.getElementById('mins').innerHTML = '00:';
    document.getElementById('seconds').innerHTML = '00';
});
            
function startTimer(){
  timex = setTimeout(function(){
      seconds++;
    if(seconds >59){
        seconds=0;
        mins++;
    if(mins>59) {
            mins=0;hours++;
        if(hours < 10) {
            $("#hours").text('0'+hours+':')
        } else 
            $("#hours").text(hours+':');
                }
                       
            if(mins < 10){                     
                $("#mins").text('0'+mins+':');
            }       
            else $("#mins").text(mins+':');
                   }    
                if(seconds <10) {
                    $("#seconds").text('0'+seconds);
                } else {
                      $("#seconds").text(seconds);
                    }
     
      startTimer();
  },1000);
}
