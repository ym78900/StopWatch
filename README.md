# StopWatch
<img width="28%" src="https://user-images.githubusercontent.com/42619243/51637290-099d3880-1f64-11e9-957f-672dabf8c717.png">
A simple stop watch for simple use.
<img width="59" alt="logo" src="https://user-images.githubusercontent.com/42619243/51549524-43dadd00-1e73-11e9-937a-416dbc7dd1e3.png">

I used JavaScript and Jquery for the scripts: <img width="25" src="https://user-images.githubusercontent.com/42619243/51636877-f89ff780-1f62-11e9-83fd-0968e87c1d7a.png"><img width="25" src="https://user-images.githubusercontent.com/42619243/51637128-998eb280-1f63-11e9-95b3-b84d8011030b.png">
<br>
```
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
```
<br>


