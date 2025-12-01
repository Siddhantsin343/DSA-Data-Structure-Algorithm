// For Loop 

// print "H.W" 10 times
let num = 10;

for(i=0; i<=num ; i++){
    console.log("hello World  " + i );
}  

// Print 3-5  
for(let i =3 ; i <5 ; i++){
    console.log("number printed " + i);
}
      
// for  loop 3-9  o/p base 
for(let i = 3 ; i<10; i= i+2){
    console.log("This is num " + i);
}

// for loop 5 reverse 
for(let i = 5; i>0; i = i-1){
    console.log("Reverse "+ i);
}

// is this Run?
for(let i = 5; i<4 ; i++){
    console.log("Run ? " + i);
}

//  IS This Code Run's 
for(let i = 0; i>0; i++){
    // console.log("is This Runn" + i);  // THIS CODE ALLWAYS RUN ! LOOP NEVER END
}

// Loop inside a Loop 

function greet (){
    for(let i=0 ; i<10; i++){
        console.log("I Hate AI.");
    }
}

greet()


// Loop inside Array
let arr = [10, 3, 4, 35, 24, 67, 234];

for(let i=0 ; i<arr.length; i++){
    console.log("loop inside arr" + arr[i]);
}

// fIND EVEN NUMBER AND PRINT ONTTO A CONSOLE
for(let i = 0; i<arr.length; i++){
    if(arr[i ] %2 == 0){
        console.log("array number are even " + arr[i]);
    }
}

// While Loop 
//   