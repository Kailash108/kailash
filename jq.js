function greet(){
  var date = new Date();
  var hour = date.getHours();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  if(hour >= 0 && hour <= 6){
    hour = "Good Morning<br>Have A Nice Day.";
    window.alert('Please Use Night Mode To Reduce The Eye Strain.');
  }
  else if(hour > 6 && hour < 12){
    hour = "Good Morning<br>Have A Nice Day.";
  }
  else if(hour >= 12 && hour < 16){
    hour = "Good Afternoon<br>Stay Peacefully.";
  }
  else if(hour >= 16 && hour < 18){
    hour = "Good Evening<br>Stay Tension Free.";
  }
  else if(hour >= 18 && hour < 20){
    hour = "Good Evening<br>Stay Tension Free.";
    window.alert('Please Use Night Mode To Reduce The Eye Strain.');
  }
  else if(hour >= 20 && hour <= 23){
    hour = "Good Night<br>Sweet Dreams, Take Care.";
    window.alert('Please Use Night Mode To Reduce The Eye Strain.');
  }
  document.getElementById("greet").innerHTML = hour;
  document.getElementById("time").innerHTML = "Last (Re)loaded Time: " + h + ":" + m + ":" + s;
}
document.onreadystatechange = function() { 
  if (document.readyState !== "complete") { 
    document.getElementById("greet").innerHTML = "Loading...";
    document.getElementById("time").innerHTML = "Loading...";
  } 
  else { 
    document.getElementById("greet").innerHTML = hour;
    document.getElementById("time").innerHTML = "Last (Re)loaded Time: " + h + ":" + m + ":" + s;
  } 
};

$(document).ready(function(){
    $('#btn').click(function(){
      //Day Mode Colors
      $('body').css('background-color', '#1F222B');
      $('.footer').css('background-color', '#2E2C41');
      $('.tag').css('color', 'white');
      $('.col1').css('color', 'orange');
      $('.col2').css('color', 'white');
      $('.col2one').css('color', '#0099ff');
      $('.col3').css('color', 'greenyellow');
      $('#col1').css('background-color', '#1ba94c');
      $('#col1').css('color', 'white');
      $('#col2').css('background-color', 'white');
      $('#col2').css('color', '#1F222B');
      $('#col3').css('background-color', 'black');
      $('#col3').css('color', '#fad75a');
      $('#col3one').css('color', '#f9f6ef');
      $('#nav').css('background-color', '#2E2C41');
      $('#btn1').css('visibility', 'visible');
      $('#btn').css('visibility', 'hidden');
      $('.dark').css('color', 'white');
      $('.dark1').css('color', 'white');
      $('.dark2').css('color', 'white');
      $('img').css('border', 'solid 3px orange');
      $('.fa-instagram').css('color', '#FD7164');
      $('.fa-github').css('color', '#5768C6');
      $('.fa-linkedin').css('color', '#FEA374');
      $('.fa-facebook').css('color', '#7753C0');
      $('.dark3').css("color", "greenyellow");
      $('.dark3').css("text-decoration", "greenyellow underline");
      $('.item1').css("color", "white");
      $('a#decor').css("color", "white");
      $('.dark4').css("color", "white");
      $('#1').css("color", "orange");
      $('#2').css("color", "greenyellow");
      $('#3').css("color", "orange");
      $('#4').css("color", "greenyellow");
      $('#5').css("color", "orange");
      $('#6').css("color", "greenyellow");
      $('#slide-1').css("background-color", "orange");
      $('.1').css("color", "black");
      $('#slide-2').css("background-color", "greenyellow");
      $('.2').css("color", "black");
      $('#slide-3').css("background-color", "orange");
      $('.3').css("color", "black");
      $('#slide-4').css("background-color", "greenyellow");
      $('.4').css("color", "black");
      $('#slide-5').css("background-color", "orange");
      $('.5').css("color", "black");
      $('#slide-6').css("background-color", "greenyellow");
      $('.6').css("color", "black");
      $('#slide-7').css("background-color", "orange");
      $('.7').css("color", "black");
      $('#slide-8').css("background-color", "greenyellow");
      $('.8').css("color", "black");
      $('.dark5').css('color', 'white');
      $('.fa-js-square').css('color', 'yellow');
      $('.fa-html5').css('color', 'orange');
      $('.fa-css3').css('color', '#4285f4');
      $('.fa-python').css('color', 'gold');
      $('.dark6').css('color', 'white');
      $('.intComp').css('color', 'gold');
      $('.fa-react').css('color', 'skyblue');
      $('.pl1').css('border-right', 'solid 5px white');
      $('.btn1').css('background-color', 'orange');
      $('.btn1').css('color', 'black');
      $('.dis').css('visibility', 'hidden');
      $('.dis1').css('visibility', 'visible');
      $('.dis1').css('color', 'white');
      $('.dis1').css('font-size', '1cm');
      $('.dis3').css('visibility', 'hidden');
      $('.table').css('color', 'orange');
      $('.nc').css('color', 'white')
      $('.table').css('border-left', 'solid yellowgreen');
      $('.table').css('border-right', 'solid yellowgreen');
      $('.table').css('border-top', 'solid orange');
      $('.table').css('border-bottom', 'solid orange');
      $('.heroku').css('color', '#8763B2')
      $('.netlify').css('color', '4D9ABF')
    })
  
    $('body').css('transition', '2s');
    $('#nav').css('transition', '2s')
    $('#btn1').css('visibility', 'hidden');
    
    
    $('#btn1').click(function(){
      //Night Mode Colors
      $('body').css('background-color', 'white');
      $('#nav').css('background-color', 'black');
      $('.footer').css('background-color', 'black');
      $('.col2one').css('color', 'black');
      $('#col1').css('color', 'black');
      $('#col1').css('background-color', 'white');
      $('#col2').css('color', 'black');
      $('#col2').css('background-color', 'white');
      $('#col3').css('color', 'black');
      $('#col3').css('background-color', 'white');
      $('#col3one').css('color', 'black');
      $('#btn').css('visibility', 'visible');
      $('.tag').css('color', 'black');
      $('#btn1').css('visibility', 'hidden');
      $('.dark').css('color', 'black');
      $('.dark1').css('color', 'black');
      $('.dark2').css('color', 'black');
      $('img').css('border', 'solid black');
      $('.fa-instagram').css('color', 'black');
      $('.fa-github').css('color', 'black');
      $('.fa-linkedin').css('color', 'black');
      $('.fa-facebook').css('color', 'black');
      $('.dark3').css("color", "black");
      $('.dark3').css("text-decoration", "black underline");
      $('.item1').css("color", "black");
      $('a#decor').css("color", "black");
      $('.dark4').css("color", "black");
      $('#1').css("color", "black");
      $('#2').css("color", "black");
      $('#3').css("color", "black");
      $('#4').css("color", "black");
      $('#5').css("color", "black");
      $('#6').css("color", "black");
      $('#slide-1').css("background-color", "black");
      $('.1').css("color", "white");
      $('#slide-2').css("background-color", "black");
      $('.2').css("color", "white");
      $('#slide-3').css("background-color", "black");
      $('.3').css("color", "white");
      $('#slide-3').css("background-color", "black");
      $('.3').css("color", "white");
      $('#slide-4').css("background-color", "black");
      $('.4').css("color", "white");
      $('#slide-5').css("background-color", "black");
      $('.5').css("color", "white");
      $('#slide-6').css("background-color", "black");
      $('.6').css("color", "white");
      $('#slide-7').css("background-color", "black");
      $('.7').css("color", "white");
      $('#slide-8').css("background-color", "black");
      $('.8').css("color", "white");
      $('.dark5').css('color', 'black');
      $('.fa-js-square').css('color', 'black');
      $('.fa-html5').css('color', 'black');
      $('.fa-css3').css('color', 'black');
      $('.fa-python').css('color', 'black');
      $('.dark6').css('color', 'black');
      $('.intComp').css('color', 'indigo');
      $('.fa-react').css('color', 'black');
      $('.btn1').css('background-color', 'black');
      $('.btn1').css('color', 'white');
      $('.dis').css('visibility', 'visible');
      $('.dis').css('padding-top', '1cm');
      $('.dis1').css('visibility', 'hidden');
      $('.dis1').css('color', 'black');
      $('.dis1').css('font-size', '0cm');
      $('.dis3').css('visibility', 'visible');
      $('.table').css('color', 'black');
      $('.nc').css('color', 'black');
      $('.table').css('border', 'none');
      $('.heroku').css('color', 'black')
      $('.netlify').css('color', 'black')
    })
  })