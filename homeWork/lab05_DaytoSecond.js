function DayToSec(day){
    let hour = day * 24
    let sec = hour * 60 * 60
    return sec
}

console.log(DayToSec(2),'วินาที');