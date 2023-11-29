let num1 = parseInt(prompt());
let num2 = parseInt(prompt());
let num3 = parseInt(prompt());

let max, mid, min;
if(num1 >= num2 && num1 >= num3){
    max = num1
    if (num2 >= num3){
        mid = num2
        min = num3
    }else{
        mid = num3
        min = num2
    }
} else if (num2 >= num1 && num2 >= num3){
    max = num2
    if (num1 >= num3){
        mid = num1
        min = num3
    }else{
        mid = num3
        min = num1
    }
} else{
    max = num3
    if (num1 >= num2){
        mid = num1
        min = num2
    }else{
        mid = num2
        min = num1
    }
}

alert(`ผลลัพธ์ : ${max},${mid},${min}`)