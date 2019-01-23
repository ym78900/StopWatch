# StopWatch
A simple stop watch for simple use.
<img width="59" alt="logo" src="https://user-images.githubusercontent.com/42619243/51549524-43dadd00-1e73-11e9-937a-416dbc7dd1e3.png">
<br>
HTML Code:
```
<html>
    <head>
        <title>
            Simple stopwatch
        </title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="main.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>  
    </head>
    <body>
        <div class="time" id="timer">
          <span id="hours">00:</span>
          <span id="mins">00:</span>
          <span id="seconds">00</span>  
        </div>
        <div id="controls">
            <button class="btn btn-success" id="start">Start</button>
            <button class="btn btn-danger" id="stop">Stop</button>
            <button class="btn btn-warning" id="reset">Reset</button>
        </div>  
    <script type="text/javascript" src="main.js"></script>
    </body>
</html>
```
and I used JavaScript and Jquery for the scripts: <img width="25" src="https://user-images.githubusercontent.com/42619243/51636877-f89ff780-1f62-11e9-83fd-0968e87c1d7a.png"> 
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


