function calucation(task1,task2,task3,task4){
    console.log("calucations");
    task1(5,5);
    task2(34,12);
    task3(3,5);
    task4(10,2) 
}

calucation(
    (a,b)=>{console.log(a+b);
    },
    (a,b)=>{console.log(a-b);
    },
    (a,b)=>{console.log(a*b);
    },
    (a,b)=>{console.log(a/b);
    }
)
// var 
// var a=10;
// a=20;
// console.log(a);


// const
// console.log(a); #we cant do hoisting to const 

const a=34;
console.log(a);
