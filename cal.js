var a1 = document.getElementById("1a");
var b1 = document.getElementById("1b");
var a2 = document.getElementById("2a");
var b2 = document.getElementById("2b");
var a3 = document.getElementById("3a");
var b3 = document.getElementById("3b");
var a4 = document.getElementById("4a");
var b4 = document.getElementById("4b");
var a5 = document.getElementById("5a");
var b5 = document.getElementById("5b");
var a6 = document.getElementById("6a");
var b6 = document.getElementById("6b");
var a7 = document.getElementById("7a");
var b7 = document.getElementById("7b");
var a8 = document.getElementById("8a");
var b8 = document.getElementById("8b");
var c9 = document.getElementById("9");
var button = document.getElementById("x");
a1.addEventListener("change",function(){b1.value = (parseFloat(a1.value)).toPrecision(3);});
a2.addEventListener("change",function(){b2.value = ((parseFloat(a2.value)+parseFloat(a1.value))/2).toPrecision(3);});
a3.addEventListener("change",function(){b3.value = ((parseFloat(a3.value)+parseFloat(a2.value)+parseFloat(a1.value))/3).toPrecision(3);});
a4.addEventListener("change",function(){b4.value = ((parseFloat(a4.value)+parseFloat(a3.value)+parseFloat(a2.value)+parseFloat(a1.value))/4).toPrecision(3);});
a5.addEventListener("change",function(){b5.value = ((parseFloat(a5.value)+parseFloat(a4.value)+parseFloat(a3.value)+parseFloat(a2.value)+parseFloat(a1.value))/5).toPrecision(3);});
a6.addEventListener("change",function(){b6.value = ((parseFloat(a6.value)+parseFloat(a5.value)+parseFloat(a4.value)+parseFloat(a3.value)+parseFloat(a2.value)+parseFloat(a1.value))/6).toPrecision(3);});
a7.addEventListener("change",function(){b7.value = ((parseFloat(a7.value)+parseFloat(a6.value)+parseFloat(a5.value)+parseFloat(a4.value)+parseFloat(a3.value)+parseFloat(a2.value)+parseFloat(a1.value))/7).toPrecision(3);});
a8.addEventListener("change",function(){b8.value = ((parseFloat(a8.value)+parseFloat(a7.value)+parseFloat(a6.value)+parseFloat(a5.value)+parseFloat(a4.value)+parseFloat(a3.value)+parseFloat(a2.value)+parseFloat(a1.value))/8).toPrecision(3);});
button.addEventListener("click",final);
function final(){
    if (a8.value == "" && a7.value != "")
    {c9.value = "Your Final CGPA is : " + b7.value; }
    else if (a7.value == "" && a6.value != "")
    {c9.value = "Your Final CGPA is : " + b6.value; }
    else if (a6.value == "" && a5.value != "")
    {c9.value ="Your Final CGPA is : " +  b5.value; }
    else if (a5.value == "" && a4.value != "")
    {c9.value = "Your Final CGPA is : " + b4.value; }
    else if (a4.value == "" && a3.value != "")
    {c9.value = "Your Final CGPA is : " + b3.value; }
    else if (a3.value == "" && a2.value != "")
    {c9.value = "Your Final CGPA is : " + b2.value;}
    else if (a2.value == "" && a1.value != "")
    {c9.value = "Your Final CGPA is : " + b1.value; }
    else if (a1.value == "")
    {window.alert("All the values cannot be empty"); }
    else
    {c9.value =  "Your Final CGPA is : " + b8.value;}
}
