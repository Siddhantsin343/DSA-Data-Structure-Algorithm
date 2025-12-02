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