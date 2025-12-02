// Loop within a loop

for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        console.log("i=" + i  + " j=" + j );
        
    }
}

// j inside i

for(let i=0; i<3; i++){
    for(let j=0; j<i; j++){
        console.log(i , j);
        
    }
}

// complex i inside j

for(let i=0; i<3; i++){
    for(let j=i; j>0; j--){
        console.log(i, j);
        
    }
}

// reverse loop

for(i=5 ; i>0; i--){
    for(j=0; j<i; j++){
        console.log(i ,j );
        
    }
}