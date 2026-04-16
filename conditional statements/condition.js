// Check whether a number is positive, negative, or zero
// let a=5 
// if (a>0){
//     console.log("postive number"); 
// }
// else if (a==0){
//     console.log("zero"); 
// }
// else{
//     console.log("negative number");
    
// }
//  // Check whether a number is even or odd
// let b=5
// if(b%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
    
// }
// // Check whether a number is divisible by 5
// let c=42
// if (c%5==0){
//     console.log("divisible by 5");
// }else{
//     console.log("not divisible by 5");
    
// }
// // Check whether a number is a multiple of 3 and 7
// let d=21
// if (d%3==0){
//     if(d%7==0){
//         console.log(d,"is multiple by both 3 and 7");
        
//     }else{
//         console.log(d,"is not multiple by 7");
        
//     }
// }else{
//     console.log(d,"is not multiple by 3");
    
// }

// // Check whether a number is a two-digit number
// let e=55
// if (e>9 && e<100){
//     console.log(e,"is a two digit number");
// }else{
//     console.log(e,"is not a two digit number ");
    
// }
// // Check whether a person is eligible to vote
// let f=18
// if(f>=18){
//     console.log(f,"eligible for voting");
// }
// else{
//     console.log(f,"not eligible for voiting ");
    
// }
// // Check whether a year is a leap year
// let year=2024
// if (year%4==0 && year%100!=0 || year%400==0){
//     console.log(year,"leap year"); 
// }
// else{console.log(year,"not a leap year ");


// }
// // Check whether a number is positive and even
// let g=-44
// if(g>=0 && g%2==0){
//     console.log(g,"is positive number and even number ");
    
// }else{
//     console.log("not ");
    
// }
// // Find the largest of two numbers
// let h=40
// let i=40
// if(h>i){
//     console.log(h);
    
// }else{
//     console.log(i);
    
// }
// // Find the smallest of two numbers
// let j=111
// let k=12
// if(j<k){
//     console.log(j)
// }else{
//     console.log(k);
    
// }

// // switch case
// let l=7
// switch(l){
//     case 1:
//         console.log("sunday");
//         break
//     case 2:
//         console.log("monday")
//         break
//     case 3:
//         console.log("tusday");
//         break
//     case 4:
//         console.log("wednesday");
//         break
//     case 5:
//         console.log("thursday");
//         break
//     case 6:
//         console.log("friday");
//         break
//     case 7:
//         console.log("saturday")
//         break 
// }

// //Find the sum of even numbers from 1 to 100
// let even_sum=0
// for (i=1;i<=100;i++){
//     if(i%2==0){
//         even_sum+=i
//     }
// }
// console.log("even_sum",even_sum);

// //Find the sum of odd numbers from 1 to 100
// let odd_sum=0
// for (i=1;i<=100;i++){
//     if(i%2==0){
//         odd_sum+=i
//     }
// }
// console.log("odd_sum",odd_sum);
// //Print the multiplication table of a given number
// let table=5
// for (i=1;i<=10;i++){
//     console.log(`${table}x${i}=${table*i}`);
    
// }

// // Count how many numbers are there from 1 to N
// let nth=100
// count=0
// for (i=1;i<=nth;i++){
//     count+=1

// }
// console.log(count);

// // Find the factorial of a given number
// let factorial_number=5
// fact=1
// for(i=1;i<=factorial_number;i++){
//     fact=fact*i
// }
// console.log(fact);

// Count the number of digits in a number
// let digit=1234
// let count1=0
// while (digit>0){
//     count1 = count1+1
//     digit = Math.floor(digit / 10);

// }
// console.log(count1);

// Reverse a given number
// let num = 1234;
// let reversed = 0;
// let n = Math.abs(num);

// while (n > 0) {
//     let digit = n % 10;
//     reversed = reversed * 10 + digit;
//     n = Math.floor(n / 10);
// }

// reversed = reversed * Math.sign(num);

// console.log(reversed); // 4321

// find the largest digit in a number
// let num2 = 53829;
// let max = 0;

// while (num2 > 0) {
//     let digit = num2 % 10;   // get last digit
//     if (digit > max) {
//         max = digit;
//     }
//     num2 = Math.floor(num2 / 10); // remove last digit
// }
// console.log(max); 

// Check whether a number is a palindrome
// let num=121
// let num1=num
// let rev=0

// while(num>0){
//     let digit = num%10;
//     rev=rev*10+digit
//     num=Math.floor(num/10)
// }
// if(rev==num1){
//     console.log("palindrom")
// }else{
//     console.log("not a palindrom")
// }

// Check whether a number is a prime number
// let num=5
// let count=0
// for (i=1;i<=num;i++){
//     if (i%2==0){
//         count+=1
//     }

// }
// if(count==2){
//     console.log("prime numbwe");
    
// }else{
//     console.log("not a prime numbwe");
    
// }
// Print all prime numbers from 1 to 100
// for(i=1;i<=100;i++){
//     let count=0
//     for(j=1;j<=i;j++){
//         if(i%j==0){
//             count+=1
//         }
//     }
//     if(count==2){
//         console.log(i);
        
//     }
// }
// Count the number of factors of a number
// let num=5
// let count=0
// for(i=1;i<=num;i++){
//     if(num%i==0){
//         count+=1
//     }
// }
// console.log(count);

// Print all factors of a given number
// let num=5
// for(i=1;i<=num;i++){
//     if(num%i==0){
//         console.log(i);
        
//     }
// }
// Check whether a number is perfect
// let num=6
// let product=0
// for(i=1;i<num;i++){
//     if(num%i==0){
//         product+=i
//     }
// }
// if(num==product){
//     console.log("perfect number");
    
// }else{
//     console.log("not a perfect number ");
    
// }

// Print all perfect numbers from 1 to 100
// for(i=1;i<=100;i++){
//     let product=0
//     for (j=1;j<i;j++){
//          if(i%j==0){
//             product+=j
//         }
//         if(product==i){
//             console.log(i);
            
//         }
//     }
// }
// Check whether a number is strong
// let num=40585
// let num1=num
// let sum=0
// while(num>0){
//     let fact=1
//     rem=num%10
//     for(i=1;i<=rem;i++){
//         fact*=i
//     }
//     sum+=fact
//     num=Math.floor(num/10)
// }
// if(sum==num1){
//     console.log("strong number");
// }else{console.log("not a strong number");
// }
// / 24.Print all strong numbers from 1 to 100
// for(let i=1;i<=100;i++){
//     let sum=0
//     num=i
//     while(num){
//         rem=num%10
//         fact=1
//         for(let i=1;i<=rem;i++){
//             fact=fact*i
//         }
//         sum=sum+fact
//         num=Math.floor(num/10)
//     }
//     if(sum==i){
//         console.log(i);
        
//     }
// }
// ******************************************************************************************
// 25.Check whether a number is an Armstrong number
// let num=153
// let num1=num
// let num2=num
// let count=0
// let sum1=0
// while(num1){
//     count+=1
//     num1=Math.floor(num1/10)
// }
// while(num2){
//     rem=num2%10
//     power1=rem**count
//     sum1+=power1
//     num2=Math.floor(num2/10)
// }
// if(num==sum1){
//     console.log("ARMSTRONG NUMBER");
// }
// else{
//     console.log("NOT A ARMSTRONG NUMBER");
// }
// ******************************************************************************************
// 26.Print all Armstrong numbers between 1 and 1000
// for(let i=1;i<=1000;i++){
//     let count=0
//     let num1=i
//     let num2=i
//     let sum1=0
//     while(num1){
//         count+=1
//         num1=Math.floor(num1/10)
//     }
//     while(num2){
//         rem=num2%10
//         power1=rem**count
//         sum1+=power1
//         num2=Math.floor(num2/10)
//     }
//     if(i==sum1){
//         console.log(i);
        
//     }
// }
// ******************************************************************************************
// 27.Check whether a number is a spy number
// let num=124
// let num1=num
// let sum1=0
// let product1=1
// while(num1){
//     rem=num1%10
//     sum1+=rem
//     product1=product1*rem
//     num1=Math.floor(num1/10)
// }
// if(product1==sum1){
//     console.log("SPY NUMBER");
    
// }
// else{
//     console.log("NOT A SPY NUMBEr");
    
// }
// ******************************************************************************************
// 28.Find the product of digits of a number
// let num=123
// let product1=1
// while(num){
//     rem=num%10
//     product1*=rem
//     num=Math.floor(num/10)
// }
// console.log("Product of digits is: ",product1);

// ******************************************************************************************
// 29.Find the LCM of two numbers using loops
// let num1=8900
// let num2=37378
// let large=0
// if(num1>num2){
//     large=num1
// }
// else if(num1<num2){
//     large=num2
// }
// else{
//     large=num1
// }
// while(true){
//     if(large%num1==0 && large%num2==0){
//         lcm=large
//         console.log(lcm);
//         break
//     }
//     large+=1
// }
// ******************************************************************************************
// 30.Find the GCD of two numbers using loops
// let num1=12
// let num2=24
// let small=0
// if(num1>num2){
//     small=num2
//     large=num1
// }
// else if(num1<num2){
//     small=num1
//     large=num2
// }
// else{
//     small=num2
//     large=num1
// }
// while(small<=large){
//     if(num1%small==0 && num2%small==0){
//         gcd=small
//     }
//     small+=1
// }
// console.log(gcd);

// ******************************************************************************************
// 31.check whether a number is a perfect square
// let num=65
// square=(num)**0.5
// if(square*square==num){
//     console.log("PERFECT NUMBER");
// }
// else{
//     console.log("NOT A PERFECT NUMBER");
// }

// ******************************************************************************************
// 32.Count how many even digits are in a number
// let num=122
// let even_count=0
// while(num){
//     rem=num%10
//     if(rem%2==0){
//         even_count+=1
//     }
//     num=Math.floor(num/10)
// }
// console.log("NUMBER OF EVEN DIGITS ARE: ",even_count);

// ******************************************************************************************
// 33.Count how many odd digits are in a number
// let num=122
// let odd_count=0
// while(num){
//     rem=num%10
//     if(rem%2!=0){
//         odd_count+=1
//     }
//     num=Math.floor(num/10)
// }
// console.log("NUMBER OF ODD DIGITS ARE: ",odd_count);
// ******************************************************************************************
// 34.Find the second largest digit in a number
// let num=123
// let large1=0
// let large2=0
// while(num){
//     rem=num%10
//     if(rem>large1){
//         large2=large1
//         large1=rem
//     }
//     else if(large2<rem && rem!=large1){
//         large2=rem
//     }
//     num=Math.floor(num/10)
// }
// console.log(large2);

// ******************************************************************************************
// 35.Find the smallest digit in a number
// let num=19280
// let small=9
// while(num){
//     rem=num%10
//     if(small>rem){
//         small=rem
//     }
//     num=Math.floor(num/10)
// }
// console.log(small);
//  ***********************************************
// Generate Fibonacci series up to N
// let n=55
// let a=0
// let b=1
// console.log(a);
// console.log(b);
// while(true){
//     c=a+b
//     a=b
//     b=c
//     console.log(c);
//     if(c>=n){
//         break
//     }
// }
// ******************************************************************************************
//Check whether a number is a Fibonacci number
// let num=56
// let a=0
// let b=1
// while(true){
//     c=a+b
//     a=b
//     b=c
//     if(c==num){
//         console.log("Fibonacci number");
//         break
//     }
//     else if(c>num){
//         console.log("Not a fibonacci series");
//         break
        
//     }
// }
// ******************************************************************************************
// Print first N Fibonacci numbers
// let n=10
// let a=0
// let b=1
// console.log(a);
// console.log(b);
// for(let i=2;i<=10;i++){
//     c=a+b
//     a=b
//     b=c
//     console.log(c);  
// }
// ******************************************************************************************
//Find the Nth Fibonacci number
// let n=11
// let a=0
// let b=1
// for(let i=3;i<=n;i++){
//     c=a+b
//     a=b
//     b=c
//     if(i==n){
//         console.log(c);
        
//     }
// }
// Check whether a number is composite
// let num=11
// flag=false
// for(i=2;i<num;i++){
//     if(num%i==0){
//         flag=true
//         break
//     }
// }
// if(flag==true){console.log("Composite number");
// }
// else{
//     console.log("Not a composite number");
    
// }
// ******************************************************************************************
// Print all composite numbers from 1 to 100
// for(let i=1;i<=100;i++){
//     flag=false
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             flag=true
//         }
//     }
//     if(flag==true)
//     {
//         console.log(i);
        
//     }
// }
// ******************************************************************************************
// Check whether a number is Harshad (Niven) number
// let num=1729
// let num1=num
// let sum1=0
// while(num1){
//     rem=num1%10
//     sum1+=rem
//     num1=Math.floor(num1/10)
// }
// if(num%rem==0){
//     console.log("Harshad number");
// }
// else{
//     console.log("Not a harshad number");
    
// }

// ******************************************************************************************
// Check whether a number is Duck number
// let num=00123
// while(num){
//     rem=num
// }
// ******************************************************************************************
// Check whether a number is Neon number
// let num=9
// square=num**2
// let sum=0
// while(square){
//     rem=square%10
//     sum+=rem
//     square=Math.floor(square/10)
// }
// if(sum==num){
//     console.log("NEON NUMBER");
// }
// else{
//     console.log("NOT A NEON NUMBER");
    
// }
// ******************************************************************************************
// Check whether a number is Automorphic number
// let num=376
// let num1=num
// let pro=0
// let auto=num**2
// let count=0
// while(num1){
//     count+=1
//     num1=Math.floor(num1/10)
// }
// while(count>0){
//  let rem=auto%10
//  pro = pro*10+rem
//  auto=Math.floor(auto/10)
//  count-=1
// }
// if(pro==num){
//     console.log("AUTOMORPHIC NUMBER");
// }
// else{
//     console.log("NOT A AUTOMORPHIC NUMBER");
    
// }
// ******************************************************************************************
// Find the digital root of a number
// let num=123456789
// let sum1=0
// while(num>9){
//     let sum=0
//     while(num){
//         rem=num%10
//         sum+=rem
//         num=Math.floor(num/10)
//     }
//     if(sum>9){
//         num=sum
//     }
//     sum1=sum
// }
// console.log(sum1);


// ******************************************************************************************
//Print numbers whose sum of digits is even
// for(let i=1;i<=100;i++){
//     let sum=0
//     let num=i
//     while(num){
//         rem=num%10
//         sum+=rem
//         num=Math.floor(num/10)
//     }
//     if(sum%2==0){
//         console.log(i);
        
//     }      
//     }
// ******************************************************************************************
// Check whether a number is magic number
// let num=55
// let sum1=0
// while(num>9){
//     let sum=0
//     while(num){
//         rem=num%10
//         sum+=rem
//         num=Math.floor(num/10)
//     }
//     if(sum>9){
//         num=sum
//     }
//     sum1=sum
// }
// if(sum1==1){
//     console.log("MAGIC NUMBER");
// }
// else{
//     console.log("NOT A MAGIC NUMEBR");
    
// }
