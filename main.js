//console.log("Hello World")


// Program 2

function hello() 
    {
    console.log("Hello World");
    }
  
hello();


// Program 3

function sum(first, second) 
    {
    return first+second;
    }
 const first=5;
 const second=7;
  
  console.log(`Addition of ${first} & ${second} is ${sum(first,second)}.`);
  
  

// Program 4

var async= function()
{
    setTimeout(function(){log("I am coming out later even though I have been called first")},2000)
}

var adder=function(first,second)
{
    var sum=first+second
    return sum
}

var log=function(msg)
{
    console.log("[Log}:",msg)
}

log("The sum is "+adder(5,6))
async()