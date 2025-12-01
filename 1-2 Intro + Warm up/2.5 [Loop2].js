 // write a function that search for an element in an array 
 //  and return the index. if the element is not presemt return -1
 let arr = [4, 2, 0, 10, 8, 30]
 
function isPresent(arr , num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == num){
            return i
        }
    }
    return -1 
}

let result = isPresent(arr, 0  )
console.log(result);


// Write a function that's return the number of negative number in an array

let array = [2, -9, 17 ,0 , 1, -10, -4, 8];

function countNegative(array){
    let count = 0;
    for(let i=0; i<array.length; i++){
        if(array[i]< 0){
            count = count +1
        }
    }
    return count
}

let answer = countNegative(array)
console.log(answer);


//  write a function that's return the largest number in an array

let numbers = [5, 0, 10, 8, 17, 1];

function largestNum(numbers){
    let largest = -Infinity;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] >largest){
            largest = numbers[i]
        }
    }
    return largest
}

let res = largestNum(numbers)
console.log(res);


// write a function that's return a smallest number in array

let num = [5, 0, 10, 8, 17, 1 ];

function SmallestNumber(num){
    let current = Infinity;
    for(let i=0; i<num.length; i++){
        // console.log(num[i]);
        if(num[i] < current){
            current = num[i]
        }
    }

    return current

}

let ans = SmallestNumber(num)
console.log(ans);