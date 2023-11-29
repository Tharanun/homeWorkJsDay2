let sum = 0;
let count = 0;
let input;

do{
    input = prompt("กรุณากรอกตัวเลข :");

    if(input == null || input === "" || isNaN(input) || input === "0")
        break;

        const num = Number(input);

        if(!isNaN(num)){
            sum += num;
            count++;
        }
} while(true);

if (count !== 0){
    const average = sum / count;
    alert(`ผลรวม: ${sum}\n ค่าเฉลี่ย: ${average}`);
} else{
    alert("ไม่มีตัวเลขที่ถูกกรอกเข้ามา");
}