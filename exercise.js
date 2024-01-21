
//오늘날짜 구하기.
//목표날짜
//시간 차 계산하기
//1초마 갱신.
let result = dateA - new Date('2023/12/12')
result/ (24*60*60*1000)

Math.floor(result/ (24*60*60*1000)) //40일

let result2= result - Math.floor(result/ (24*60*60*1000))*24*60*60*1000

Math.floor(result2/ (60*60*1000)) //15시간

let result3 = result2- Math.floor(result2/ (60*60*1000))*60*60*1000

Math.floor(result3/(60*1000)) //22분

let result4 = result3 - Math.floor(result3/(60*1000))*60*1000

Math.floor(result4/1000) //9초


//문제점1. 1초마다 갱신해서 보여주는 방법?
// setInterval 함수
// delay(밀리초)마다 실행되는 function입니다. 첫 번째 실행은 delay(밀리초) 후에 발생합니다.
//대충해결
//문제점2.
//메반. 함수안에서, date차를 구하고, time >=0일때까지. 반복하면됨
setInterval(function(){
    let time = new Date('2024/01/22') - new Date();
    if(time>=0){
        console.log(time/1000);
    }
    
},1000)