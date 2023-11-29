let user = prompt();
let sum = 0

user = parseInt(user);
while(user){
    sum += user % 10;
    user = Math.floor(user / 10);
}

alert(sum);