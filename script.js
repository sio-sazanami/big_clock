function twoDigit(num) {
  let ret;
  if( num < 10 ) 
    ret = "0" + num; 
  else 
    ret = num; 
  return ret;
}
function showClock() {
  let nowTime = new Date();
  let nowYear = nowTime.getFullYear();
  let nowMonth = Number( nowTime.getMonth() ) + 1;
  let nowDay = nowTime.getDate();
  let nowHour = twoDigit( nowTime.getHours() );
  let nowMin  = twoDigit( nowTime.getMinutes() );
  let nowSec  = twoDigit( nowTime.getSeconds() );
  let nowWeekday = weekDay[nowTime.getDay()];
  let msg_date = nowYear + "年" + nowMonth + "月" + nowDay + "日 " + nowWeekday +"曜日";
  let msg_time = nowHour + ":" + nowMin + ":" + nowSec;
  document.getElementById("realdate").innerHTML = msg_date;
  document.getElementById("realtime").innerHTML = msg_time;
}
var weekDay = ["日", "月", "火", "水", "木", "金", "土"];
setInterval('showClock()',1000);