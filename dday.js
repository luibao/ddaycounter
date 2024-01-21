let interval;
let countStart = () =>{
    document.getElementById('basic').style.display = 'none';
    document.getElementById('timeContent').style.display = 'block';

    //카운트 시작 함수 불활성화/
    document.getElementById('countStart').setAttribute('disabled', true);

    
    //사용자가 입력한 값 받아오기
    let userYear = document.getElementById('year').value;
    let userMonth = document.getElementById('month').value;
    let userDay = document.getElementById('day').value;
    let users = userYear+'/'+userMonth+'/'+userDay;

    //현재 날짜와 비교하기
    // let timeDiff = new Date(users) - new Date();
    // if(timeDiff<=0){
    //     //시간이 종료되었습니다. 출력해주기.
    // }

    //타이머에 표시해주기.
    interval = setInterval(function(){
        let timeDiff = new Date(users) - new Date();
        if(timeDiff>=0){
            // console.log(timeDiff);
            let resultDay = 
            Math.floor(timeDiff/ (24*60*60*1000));

            let timeDiff2= timeDiff - Math.floor(timeDiff/ (24*60*60*1000))*24*60*60*1000;
            let resultHour =
            String(Math.floor(timeDiff2/ (60*60*1000))).padStart(2,"0");

            let timeDiff3 = timeDiff2- (Math.floor(timeDiff2/ (60*60*1000))*60*60*1000);
            let resultMin =
            String(Math.floor(timeDiff3/(60*1000))).padStart(2,"0");


            let timeDiff4 = timeDiff3 - Math.floor(timeDiff3/(60*1000))*60*1000;
            let resultSec =
            String(Math.floor(timeDiff4/1000)).padStart(2,"0"); //9초

            //결과 표시해주기
            document.getElementById('timeDay').innerText = resultDay;
            document.getElementById('timeHour').innerText = resultHour;
            document.getElementById('timeMin').innerText = resultMin;
            document.getElementById('timeSec').innerText = resultSec;        


        } else{
            alert('타이머가 종료되었습니다.');
            clearInterval(interval);
            document.getElementById('basic').style.display = 'block';
    document.getElementById('timeContent').style.display = 'none';
    document.getElementById('countStart').removeAttribute("disabled"); 
        }
    },1000);

}




//잘못된 날짜 입력받아왔을때 수정하는 함수

//타이머 초기화 버튼 누르는 함수

let resetCounting = () => {
    // console.log('초기화');
    clearInterval(interval);
    document.getElementById('basic').style.display = 'block';
    document.getElementById('timeContent').style.display = 'none';
    document.getElementById('countStart').removeAttribute("disabled"); 

    document.getElementById('year').value="";
    document.getElementById('month').value="";
    document.getElementById('day').value="";
    
}