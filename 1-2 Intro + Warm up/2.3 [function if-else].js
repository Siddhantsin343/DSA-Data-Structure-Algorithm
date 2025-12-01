function abc (name) {
    console.log(`Hello ${name}`);        
}

abc("Siddhant")


let sum = (val1=0 , val2=0)=>{
    return val1 + val2
}

console.log(sum(2,200 ))


// vote eligble programm

let vote = (age=0) =>{
    if(age >= 18){
        console.log("person is eligble ! ✔");
    }
    else{
        console.log("Sorry person is not eligble to vote ❌");
    }
}

vote(62)


// odd even Programm 

function oddEven(num){
    if(num %2 == 0 ){
        console.log(`${num} is even !`);
    }else{
        console.log(`${num} is odd !`);
    }
}

oddEven(3)