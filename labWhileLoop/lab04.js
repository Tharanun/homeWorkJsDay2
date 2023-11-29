let user = prompt("กรอกตัวเลข : ");

while (isNaN(user) || user === '' || user === null) {
    user = prompt("กรอกตัวเลขที่ถูกต้อง: ");
  }

while(true){
    alert(user.length);
    break;
}