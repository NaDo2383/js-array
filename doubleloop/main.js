//task1 
const numbers=[];
let n=prompt("duriin eyereg buhel too oruulna uu");
for (let i=1; i<=n; i++){
    for(let j=0; j<i; j++){
        numbers[j]=j+1;
    }
    console.log(numbers)
}

//task2 
const numbers1=[];
let n1=prompt("duriin eyereg buhel too oruulna uu"),a=0,m=0;
for (let i1=1; i1<=n1; i1++){
    for(let j1=Number(n1); j1>m; j1--){
        numbers1[a]=j1;
        a++;
    }
    console.log(numbers1);
    numbers1.pop();
    a=0;
    m++;
}
