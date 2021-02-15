var mobiusInput=document.getElementById("mobius");
var form=document.getElementById("form");
var outputvalue=0;
var nValue=document.getElementById("nValue");
var oValue=document.getElementById("oValue");
var euler=document.getElementById("euler");
var otherForm=document.getElementById("otherForm");
var n2Value=document.getElementById("n2Value");
var o2Value=document.getElementById("o2Value");
var output1=document.getElementById("output1");
var output2=document.getElementById("output2");

form.addEventListener("submit",function(e){
    e.preventDefault();
    var n=mobiusInput.value;
    console.log("value is......",n)
    var p=0;
    if (n%2 == 0) 
  { 
    n = n/2; 
    p++; 

    if (n % 2 == 0) 
    outputvalue=0; 
  } 
  if (n%2 == 0) 
{ 
    n = n/2; 
    p++; 

    if (n % 2 == 0) 
    outputvalue=0; 
} 
for (var i = 3; i <= Math.sqrt(n); i = i+2) 
{ 
    if (n%i == 0) 
    { 
        n = n/i; 
        p++; 

        if (n % i == 0) 
        outputvalue=0; 
    } 
} 
 (p % 2 == 0)? outputvalue=-1 :outputvalue=1; 
 console.log("output",outputvalue);
 nValue.innerHTML=n;
 oValue.innerText=outputvalue;
 output1.style.display="block";

})

otherForm.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("euler",euler.value);
    var answer=phi(euler.value);
    n2Value.innerHTML=euler.value;
    o2Value.innerHTML=answer;
    output2.style.display="block";
});

function gcd(a,b)  
{  
    if (a == 0)  
        return b;  
    return gcd(b % a, a);  
}  

function phi(n)  
{  
     var result = 1;  
     for (var i = 2; i < n; i++)  
        if (gcd(i, n) == 1)  
            result++;  
    return result;  
}  




