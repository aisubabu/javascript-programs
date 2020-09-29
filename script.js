function leapyear() {
    var x = document.getElementById("year").value;
    var y = x % 400
    if (x % 400 == 0) 
    {
        document.getElementById("leap").innerHTML = "It is a leap year"
    } 
    else if (x % 100 == 0) 
    {
        document.getElementById("leap").innerHTML = "It is not a leap year"
    } else if(x % 4 == 0)
    {
        document.getElementById("leap").innerHTML = "It is a leap year"   
    }
    else 
    {
        document.getElementById("leap").innerHTML = "It is not a leap year"
    }
}
function Multi() {
    var x = document.getElementById("fnum").value;
    var y = document.getElementById("snum").value;
    var z = x*y;
    document.getElementById("mulres").innerHTML = z
}
function Divi() {
    var x = document.getElementById("fnum").value;
    var y = document.getElementById("snum").value;
    var z = x/y;
    document.getElementById("divres").innerHTML = z
}
function Add() {
    var x = Number(document.getElementById("number1").value);
    var y = Number(document.getElementById("number2").value);
    var z = x + y;
    if (z>=50 && z<=80)
    {
        document.getElementById("add").innerHTML = 65 
    }
    else 
    {
        document.getElementById("add").innerHTML = 80
    }
}
function Convert() {
    var x = document.getElementById("temp").value;
    var y = (x*1.8)+32;
    document.getElementById("tempres").innerHTML = y;
}
function Factorial() {
    var x =document.getElementById("fact").value;
    var y = 1
    for(var i=1; i<=x; i++) 
    {
        var y = y*i
    }
    document.getElementById("factres").innerHTML = y   
}
function WordCheck() {
    var str = document.getElementById("word").value;
    if (str.substring(0,2)=="Py" || str.substring(0,2)=="py")
    {
        document.getElementById("wordres").innerHTML = str
    }
    else {
        document.getElementById("wordres").innerHTML = "Py"+str
    }
}
function findscript() {
    var str = document.getElementById("scrpt").value;
    if (str.indexOf("script") == 4)
    {
        document.getElementById("scr").innerHTML = str.slice(0,4)+str.slice(10,str.length);
    }
    else 
    {
        document.getElementById("scr").innerHTML = str;
    }
}
function RemoveChar() {
    var str = document.getElementById("text").value;
    var ind = Number(document.getElementById("chr").value);
    var str1 = str.substring(0,ind-1);
    var str2 = str.substring(ind,str.length);
    document.getElementById("finstr").innerHTML = str1+str2
}
function swap() {
    var str = document.getElementById("swap").value;
    var midchar = str.substring(1,str.length-1);
    var word = str.charAt(str.length-1)+midchar+str.charAt(0);
    document.getElementById("fintext").innerHTML = word
}
function findjava() {
    var str = document.getElementById("java").value;
    if (str.substring(0,4) == "Java" ||str.substring(0,4) == "java") 
    {
        document.getElementById("findjava").innerHTML = "This word starts with Java"
    }
    else {
        document.getElementById("findjava").innerHTML = "This word doesn't start with Java"
    }
}
function lowercase() {
    var str = document.getElementById("lower").value;
    if (str.length <= 3)
    {
        document.getElementById("lowercase").innerHTML = str.toUpperCase();
    }
    else 
    {
        str1 = str.substring(0,3);
        str2 = str.substring(3,str.length);
        document.getElementById("lowercase").innerHTML = str1.toLowerCase() + str2
    }
}
function factor() {
    var x = document.getElementById("factor").value;
    if (x % 3 == 0 || x % 7 == 0)
    {
        document.getElementById("factorres").innerHTML = "The number is divisible"
    }
    else { document.getElementById("factorres").innerHTML = "The number is not divisible"}
}
function largest() {
    var x = document.getElementById("larnum1").value;
    var y = document.getElementById("larnum2").value;
    var z = document.getElementById("larnum3").value;
    if ( x>y && x>z)
    {
        document.getElementById("largest").innerHTML = "The largest number is "+x
    }
    else if ( y>x && y>z)
    {
        document.getElementById("largest").innerHTML = "The largest number is "+y
    }
    else if ( z>y && z>x)
    {
        document.getElementById("largest").innerHTML = "The largest number is "+z
    }
} 
function currentday() {
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("currentday").innerHTML =" " + days[d.getDay()] + " " + d.getHours() + ":" + d.getMinutes();
}  
function currentdate() {
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("currentdate").innerHTML =" " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear(); 
} 
function Area() {
    var a = Number(document.getElementById("entryA").value);
    var b = Number(document.getElementById("entryB").value);
    var c = Number(document.getElementById("entryC").value);
    var p = (a+b+c)/2;
    var x = p*(p-a)*(p-b)*(p-c);
    var res = Math.sqrt(x)
    document.getElementById("Area").innerHTML = res
}
function holiyear() {
    var year = document.getElementById("sunyear").value;
    var d = new Date(year, 0 , 1);
    if (d.getDay() == 0)
    {
        document.getElementById("holiyear").innerHTML = "Jan 1 of " + year + " is Sunday"
    }
    else 
    {
        document.getElementById("holiyear").innerHTML = "Jan 1 of " + year + " is not Sunday"
    }
}
function Match(){
    var num = document.getElementById("number").value;
    var x = Math.ceil(Math.random()*10);
    if (x == num)
    {
      document.getElementById("match").innerHTML = "GoodWork"
    }
    else 
    {
        document.getElementById("match").innerHTML = "Try Again"
    }
}
function Difference() {
    var x = document.getElementById("difnum").value;
    if (x <= 13)
    {
       var val = 13-x; 
       document.getElementById("difference").innerHTML = val;
    }
    else 
    {
        var val = (x-13)*2;
        document.getElementById("difference").innerHTML = val;
    }
}
function Sum() {
    var x = Number(document.getElementById("sumnum1").value);
    var y = Number(document.getElementById("sumnum2").value);
    if(x == y)
    {
        document.getElementById("sum").innerHTML = 3*x;
    }
    else 
    {
        document.getElementById("sum").innerHTML = x+y;
    }
}
function Check() {
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    if ( x+y == 50 || x == 50 || y == 50)
    {
        document.getElementById("check").innerHTML = "True"
    }
    else {
        document.getElementById("check").innerHTML = "False"
    }
}
function Sign() {
    var x = document.getElementById("int1").value;
    var y = document.getElementById("int2").value;
    if (x < 0 && y >0 || x >0 && y <0)
    {
        document.getElementById("sign").innerHTML = "True"
    }
    else 
    {
        document.getElementById("sign").innerHTML = "False"
    }
}
function swap3() {
    var str = document.getElementById("char3").value;
    var last = str.slice(-3);
    document.getElementById("swap3").innerHTML = last+str+last;
}
function range() {
    var x = document.getElementById("firstnum").value;
    var y = document.getElementById("secondnum").value;
    var z = document.getElementById("thirdnum").value;
    if ( x >= 50 && x <= 99 || y >= 50 && y <= 99 || z >= 50 && z <= 99)
    {
        document.getElementById("range").innerHTML = "True"
    }
    else 
    {
        document.getElementById("range").innerHTML = "False"
    }
}
function near100(){
    var x = document.getElementById("firstint").value;
    var y = document.getElementById("secondint").value;
    var diff1 = 100-x;
    var diff2 = 100-y;
    if (diff1 > diff2)
    {
        document.getElementById("near100").innerHTML = "The nearest number to 100 is "+ y;
    }
    else 
    {
        document.getElementById("near100").innerHTML = "The nearest number to 100 is "+ x;
    }
}
function sort() {
    var x = document.getElementById("lastnum1").value;
    var y = document.getElementById("lastnum2").value;
    var z = document.getElementById("lastnum3").value;
    valx = x % 10;
    valy = y % 10;
    valz = z % 10;
    if (valx == valy && valy == valz)
    {
        document.getElementById("lastnum").innerHTML = "True";
    }
    else 
    {
        document.getElementById("lastnum").innerHTML = "False"
    }
}
function sort(){
    var x = document.getElementById("sort1").value;
    var y = document.getElementById("sort2").value;
    var z = document.getElementById("sort3").value;
    if ( x<y && y<z)
    {
        document.getElementById("sort").innerHTML = "Strict Mode";
    }
    else if (y<z)
    {
        document.getElementById("sort").innerHTML = "Soft Mode";
    }
    else 
    {
        document.getElementById("sort").innerHTML = "Undefined";
    }
}
function Reverse(){
    var str = document.getElementById("reversetext").value;
    var text = str.split("");
    for( var i = 0; i < text.length/2; i++)
    {
        var temp = text[i];
        text[i] = text[text.length -1 - i];
        text[text.length -1 -i] = temp;
    } 
    document.getElementById("reverse").innerHTML = text.join("");
}
function Charcode() {
    var text = document.getElementById("character").value;
    alpha = text.split("")
    for (var i = 0; i < text.length; i++)
    {
        var char= Number(text.charCodeAt(i));
        var code = char+1;
        alpha[i] = String.fromCharCode(code);
    }
    document.getElementById("charcode").innerHTML = alpha.join("")
}
function Capitalize() {
    var str = document.getElementById("capital").value;
    document.getElementById("Capitalize").innerHTML = str;
}
function time() {
    var time = document.getElementById("minutes").value;
    if (time < 60)
    {
        document.getElementById("time").innerHTML = time + " mins";
    }
    else 
    {
        var hour = Math.floor(time/60);
        var min = time%60;
        document.getElementById("time").innerHTML = hour+" hours "+min + " mins ";
    }
    
}
function sorttext() {
    var text = document.getElementById("order").value;
    var arr = text.split("");
    document.getElementById("sorttext").innerHTML = arr.sort().join("");
}
function vowels() {
    var text = document.getElementById("voweltext").value;
    var arr = text.split("");
    var count = 0;
    for (var i =0; i<text.length; i++)
    {
        if(arr[i] == "a" || arr[i] == "e" || arr[i] == "i" || arr[i] == "o" || arr[i] == "u" || arr[i] == "A" || arr[i] == "E" || arr[i] == "I" || arr[i] == "O" || arr[i] == "U")
        {
            count++;
        }
    }
    document.getElementById("vowels").innerHTML = "Number of vowels in this text is " + count;
}
function Concatenate() {
    var text1 = document.getElementById("concattext1").value;
    var text2 = document.getElementById("concattext2").value;
    if(text1.length == text2.length)
    {
        document.getElementById("concat").innerHTML = text1.concat(text2);
    }
    else if (text1.length > text2.length)
    {
        text = text1.slice(0,text2.length);
        document.getElementById("concat").innerHTML = text.concat(text2);
    }
    else
    {
        text = text2.slice(0,text1.length);
        document.getElementById("concat").innerHTML = text1.concat(text);
    }
}