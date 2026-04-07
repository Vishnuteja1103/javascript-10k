// Check whether a number is positive, negative, or zero
let a=5 
if (a>0){
    console.log("postive number"); 
}
else if (a==0){
    console.log("zero"); 
}
else{
    console.log("negative number");
    
}
 // Check whether a number is even or odd
let b=5
if(b%2==0){
    console.log("even");
}else{
    console.log("odd");
    
}
// Check whether a number is divisible by 5
let c=42
if (c%5==0){
    console.log("divisible by 5");
}else{
    console.log("not divisible by 5");
    
}
// Check whether a number is a multiple of 3 and 7
let d=21
if (d%3==0){
    if(d%7==0){
        console.log(d,"is multiple by both 3 and 7");
        
    }else{
        console.log(d,"is not multiple by 7");
        
    }
}else{
    console.log(d,"is not multiple by 3");
    
}

// Check whether a number is a two-digit number
let e=55
if (e>9 && e<100){
    console.log(e,"is a two digit number");
}else{
    console.log(e,"is not a two digit number ");
    
}
// Check whether a person is eligible to vote
let f=18
if(f>=18){
    console.log(f,"eligible for voting");
}
else{
    console.log(f,"not eligible for voiting ");
    
}
// Check whether a year is a leap year
let year=2024
if (year%4==0 && year%100!=0 || year%400==0){
    console.log(year,"leap year"); 
}
else{console.log(year,"not a leap year ");


}
// Check whether a number is positive and even
let g=-44
if(g>=0 && g%2==0){
    console.log(g,"is positive number and even number ");
    
}else{
    console.log("not ");
    
}
// Find the largest of two numbers
let h=40
let i=40
if(h>i){
    console.log(h);
    
}else{
    console.log(i);
    
}
// Find the smallest of two numbers
let j=111
let k=12
if(j<k){
    console.log(j)
}else{
    console.log(k);
    
}