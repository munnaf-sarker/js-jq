/* javascript start */

// 1. date
function demo(){
   document.getElementById('p').innerHTML = Date();
}
// 2.bulb
function on(){
  document.getElementById('img').src='image/on.gif';
}
function off(){
  document.getElementById('img').src='image/off.gif';
}
// 3.font size
function size(){
  document.getElementById('font').style.fontSize='35px';
}
// 4.text hide
function hide(){
  document.getElementById('h').style.display="none";
}
function block(){
  document.getElementById('h').style.display="block";
}
// 5.text change
function change(){
  document.getElementById('mytext').innerHTML="paragraph change the text";
}
// 6.JavaScript Numbers
 document.getElementById('num').innerHTML=12.50;
 //7. strings
 document.getElementById('str').innerHTML="MUNNAF SARKER";
 // 8.variable
 let x;
 x = 14  // Declare x, give it the value of 
 document.getElementById('vari').innerHTML= x;
//9. var variable keyword
var a = 45;
var y = 43;
var z = a + y;
document.getElementById('vai').innerHTML="The value of z is:" + z;
// 10.const variable keyword
const price1=225;
const price2=165;
let total=price1+price2;
document.getElementById('con').innerHTML="the total is:"+total
//11. constant object and array
const cars = ["BMW","SAAB","VOLVO","NISSAN"];
cars [0] = "toyota";
cars.push("audi");
document.getElementById('oa').innerHTML= cars;
//12. constant object
const car = {type:"Fiat", model:"500", color:"white"};
car.color = "red";
car.owner = "Johnson";
document.getElementById('cp').innerHTML="Car owner is " + car.owner;
//13. Addition Operator
let b = 5;
let c = 2;
let d = b + c;
document.getElementById("ad").innerHTML = d;
//14. subtraction operator
let e = 13;
let f = 7;
let g = e - f;
document.getElementById("su").innerHTML = g;
//15. multiplication operator
let h = 6;
let i = 3;
let j = h * i;
document.getElementById("mu").innerHTML = j;
//16. division operator
let k = 48;
let l = 8;
let m = k / l;
document.getElementById("di").innerHTML = m;
//17. modulus operator
let n = 5;
let o = 2;
let p = n % o;
document.getElementById("mo").innerHTML = p;
// 18. increment operator
let aa = 8;
aa++;
let zz = aa;
document.getElementById('in').innerHTML = aa;
// 19. decrement operator
let bb = 8;
bb--;
let cc = bb;
document.getElementById('de').innerHTML = bb;
// 20. exponentiation operator
let dd = 5;
document.getElementById('ex').innerHTML = dd ** 2;
// 21. exponentiation Operator with math.pow
let ee = 6;
document.getElementById('po').innerHTML = Math.pow(ee,2);
// 22. Operator Precedence
document.getElementById('pre').innerHTML = 100 + 50 * 3;
document.getElementById('pre-i').innerHTML = 100 / 50 * 3;
// 23.Addition Assignment Operator
let gh = 10;
gh += 5;
document.getElementById("aao").innerHTML = "Value of gh is: " + gh;
// 24. Subtraction Assignment Operator
let ik = 10;
ik -= 5;
document.getElementById("sao").innerHTML = "Value of ik is: " + ik;
// 25.Multiplication Assignment Operator
let jk = 10;
jk *= 5;
document.getElementById("mao").innerHTML = "Value of jk is: " + jk;
// 26.Exponentiation Assignment Operator
let ek = 10;
ek **= 5;
document.getElementById("eao").innerHTML = "Value of ek is: " + ek;
// 27.Exponentiation Assignment Operator
let dk = 10;
dk /= 5;
document.getElementById("dao").innerHTML = "Value of dk is: " + dk;
// 28.Remainder Assignment Operator
let rk = 10;
rk %= 5;
document.getElementById("boo").innerHTML = "Value of dk is: " + rk;
// 29.JavaScript Booleans
let xlk = 5;
let ylk = 5;
let zlk = 6;
document.getElementById('boo').innerHTML = (xlk == ylk) + "<br>" + (xlk == zlk);
// 30.JavaScript Objects
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
document.getElementById("obi").innerHTML = person.firstName + " is " + person.age + " years old.";
// 31.The length Property
let text = "ABBHFBSFHFHBKJSDAIKUHIGFSKJSHIw";
document.getElementById('lstr').innerHTML = text.length;
// 32. The escape sequence
let text5 = 'It\'s alright.';
document.getElementById("esc").innerHTML = text5;
// 33. The Integer Accuracy
let ilo = 999999999999999;
let ylo = 9999999999999999;
document.getElementById("ina").innerHTML = ilo + "<br>" + ylo;
//34. The Integer Accuracy
document.getElementById("nin").innerHTML =Number.isInteger(10) + "<br>" + Number.isInteger(10.5);
//35. The isSafeInteger() Method
document.getElementById("nins").innerHTML =
Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890);
// 36. The toFixed() Method
let fixm = 9.656;
document.getElementById("fixm").innerHTML =
  fixm.toFixed(0) + "<br>" +
  fixm.toFixed(2) + "<br>" +
  fixm.toFixed(4) + "<br>" +
  fixm.toFixed(6);
//37. JavaScript Global Methods
document.getElementById("glom").innerHTML = 
  Number(true) + "<br>" +
  Number(false) + "<br>" +
  Number("10") + "<br>" + 
  Number("  10") + "<br>" +
  Number("10  ") + "<br>" +
  Number(" 10  ") + "<br>" +
  Number("10.33") + "<br>" + 
  Number("10,33") + "<br>" +
  Number("10 33") + "<br>" +
  Number("John");
// 38.JavaScript Array splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("spli-1").innerHTML = fruits;
fruits.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("spli-2").innerHTML = fruits;
// 39.Sorting an Array
const fruit = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("sora-1").innerHTML = fruit;
fruit.sort();
document.getElementById("sora-2").innerHTML = fruit;
// 40. JavaScript Array Sort
const points = [40, 100, 1, 5, 25, 10];
document.getElementById("arrs-1").innerHTML = points;
points.sort(function(a,b){return a - b});
document.getElementById("arrs-2").innerHTML = points;
// 41. JavaScript Array Sort descending
const point = [40, 100, 1, 5, 25, 10];
document.getElementById("drrs-1").innerHTML = point;
point.sort(function(a, b){return b - a});
document.getElementById("drrs-2").innerHTML = point;
// 42.JavaScript Array Sort array alphabetically or numerically
const po_num = [40, 100, 1, 5, 25, 10];
document.getElementById("arran").innerHTML = po_num;  
function alfa() {
  po_num.sort();
  document.getElementById("arran").innerHTML = po_num;
}
function numr() {
  po_num.sort(function(a, b){return a - b});
  document.getElementById("arran").innerHTML = po_num;
}
// 43. array sort random number
const numb = [40, 100, 1, 5, 25, 10];
document.getElementById("rnum").innerHTML = numb;
function ran() {
  numb.sort(function(){return 0.5 - Math.random()});
  document.getElementById("rnum").innerHTML = numb;
}
//44. Array Sort highest number
const highnum = [40, 100, 1, 5, 25, 10];

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
document.getElementById("hinu").innerHTML = myArrayMax(highnum);
//45. JavaScript Array.filter()
const numbe = [45, 4, 9, 16, 25];
const over18 = numbe.filter(myFunction);
function myFunction(value, index, array) {
  return value > 18;
}
document.getElementById("fil").innerHTML = over18;
//46. JavaScript Array.reduce()
const numberve = [45, 4, 9, 16, 25];
let sum = numberve.reduce(myFunction);
function myFunction(total, value) {
  return total + value;
}
document.getElementById("rufi").innerHTML = "The sum is " + sum;
//47.JavaScript new Date()
const da = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("newda").innerHTML = da;
// 48.The getFullYear() Method
const dat = new Date("2021-03-25")
document.getElementById("newdat").innerHTML = dat.getFullYear();
// 49.JavaScript if .. else
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
document.getElementById("els").innerHTML = greeting;
// 50.JavaScript switch
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("swi").innerHTML = "Today is " + day;

/* javascript end */

// ==============
// ==============
/* jquery start */
$(document).ready(function(){
  // 1.jQuery hide() and show()
  $("#hide").click(function(){
    $(".topic").hide();
  });
  $("#show").click(function(){
    $(".topic").show();
  });

  //2. jQuery hide() and show() with fade
  $("#top").click(function(){
    $(".pa").hide(1000);
  });
  //3.jQuery toggle()
  $("#topi").click(function(){
    $(".pat").toggle()
  })
  // 4.jQuery fadeIn() Method
  $("#cli").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
  // 5.jQuery fadeout() Method
  $("#clic").click(function(){
    $("#div4").fadeOut();
    $("#div5").fadeOut("slow");
    $("#div6").fadeOut(3000);
  });
  // 6.jQuery fadeToggle() Method
  $("#finl").click(function(){
    $("#div7").fadeToggle();
    $("#div8").fadeToggle("slow");
    $("#div9").fadeToggle(3000);
  });
  //7.jQuery fadeTo() Method
  $("#fito").click(function(){
    $("#div10").fadeTo("slow", 0.15);
    $("#div11").fadeTo("slow", 0.4);
    $("#div12").fadeTo("slow", 0.7);
  });
  // 8.jQuery slideDown() Method
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
  //9.jQuery slideUp() Method
  $("#flip1").click(function(){
    $("#panel1").slideUp("slow");
  });
  //10.jQuery slideToggle() Method
  $("#flip2").click(function(){
    $("#panel2").slideToggle("slow");
  });
  //11.jQuery animate Manipulate Multiple Properties
  $("#but").click(function(){
    $(".thing").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
  // 12.jQuery animate() - Using Relative Values
  $("#butt").click(function(){
    $(".things").animate({
      left: '200px',
      height: '+=50px',
      width: '+=50px'
    });
  });
  //13.jQuery animate() - Using Pre-defined Values
  $("#bnel").click(function(){
    $(".obj").animate({
      height: 'toggle'
    });
  });
  //14.jQuery animate() - Uses Queue Functionality
  $("#rotet").click(function(){
    var div = $(".rot");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
  //15.jQuery animate()-Uses Queue Functionality-2
  $("#rotel").click(function(){
    var div = $(".hell");  
    div.animate({left: '200px'}, "slow");
    div.animate({fontSize: '60px'}, "slow");
  });
  //16.jQuery stop() Method
  $("#flipzo").click(function(){
    $("#panelfun").slideDown(5000);
  });
  $("#stofi").click(function(){
    $("#panelfun").stop();
  });
  //17.jQuery Callback Functions
  $("#hicon").click(function(){
    $("#lilp").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
  //18.jQuery Method Chaining
  $("#atti").click(function(){
    $("#p1").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);
  })
  //19.Get Content - text(), html(), and val()
  $("#metho").click(function(){
    alert("Name: " + $("#testy").val());
  });
  //20.Set Content - text(), html(), and val()
  $("#btnk1").click(function(){
    $("#velt1").text("Hello world!");
  });
  $("#btnk2").click(function(){
    $("#velt2").html("<b>Hello world!</b>");
  });
  $("#btnk3").click(function(){
    $("#velt3").val("Dolly Duck");
  });
  //21.jQuery prepend() Method
  $("#btnd1").click(function(){
    $("#apen").append(" <b>Appended text</b>.");
  });
  $("#btnd2").click(function(){
    $("ol").append("<li>Appended item</li>");
  });
  //22.jQuery empty() Method
  $("#copton").click(function(){
    $("#empx").empty();
  });
  // 23.jQuery addClass() Method
  $("#elcla").click(function(){
    $("#hh1, #hh2, #pp1").toggleClass("blue");
    $("#pp3").toggleClass("important");
  });
  //24.Set Multiple CSS Properties
  $("#mlcss").click(function(){
    $(".bgc").css({"background-color": "yellow", "font-size": "200%"});
  });

})


























$(document).ready(function(){
  var data = ["html","css","bootstrap","JQuary"];
  $('#topic').autocomplete({
    source: data
  });
});

/* jquery end */