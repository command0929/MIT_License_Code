const scriptName = "출석 순위";
const allsee = "\u200b".repeat(500);
var player = {};
var fish = {};
let playered = {};
var 출석랭킹 = "";
function resetAttendance() {
  var today = new Date();
  var attendanceTimeEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);

  if (today >= attendanceTimeEnd) {
    for (var p in player) {
      player[p].lastAttendanceDate = null;
      FileStream.write("/storage/emulated/0/Download/botfile/attempt/" + p + ".json", JSON.stringify(player[p]));
    }
    출석랭킹 = "";
    Log.info("출석 기록이 초기화되었습니다.");
    Api.replyRoom("관리자실", "리셋 알림\n테스트..");
  }
}
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
try {
  if (player[sender] == undefined) {
    player[sender] = {
      point: 0,
      lastAttendanceDate: null
    };
  }
 if (fish[sender] == undefined) {
    fish[sender] = {
      fish: 0, //낚시돈
      fishm: 0, // 낚시 쿨 최대
      fishc: 0, //낚시쿨
      fisn: "", //낚싯대 --- 이름
      fisu: 0, //강화 정도
      fisum: 0, //최대 강화
      fisc: 0, //낚싯대 쿨타임
      fisl: 0, //낚싯대 행운
      fiss: 0, //뽑기권 갯수
      ups: 0 //강화석 갯수
    };
  }
resetAttendance();
  playered[sender] = FileStream.read("/storage/emulated/0/Download/botfile/attempt/" + sender + ".json");
  player[sender] = JSON.parse(playered[sender]);
  
  if (player[sender] == null) {
    player[sender] = {
      point: 0,
      lastAttendanceDate: null
    };
  }
  FileStream.write("/storage/emulated/0/Download/botfile/attempt/" + sender + ".json", JSON.stringify(player[sender]));
  var 출석시간 = "";
  var today = new Date();
  var attendanceTimeStart = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
  var attendanceTimeEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 58);
 if(msg == "log") {
    Log.info(today+"");
  }
if (msg == ";포인트") {
 replier.reply (sender+"님의 포인트 : "+player[sender].point+"다냥");
 }
if(msg.startsWith(";포인트교환 ")) {
  
}
  if (msg == ";출석" || msg == "ㅊㅊ") {
    if (player[sender].lastAttendanceDate !== null && new Date(player[sender].lastAttendanceDate).toDateString() === today.toDateString()) {
      replier.reply(sender + "님은 이미 출석했다냥");
    } else if (today < attendanceTimeStart || today > attendanceTimeEnd) {
      replier.reply(sender + "님, 출석은 0시 0분 0초부터 23시 59분 59초까지만 가능하다냥");
    } else {
      player[sender].lastAttendanceDate = today;

      if (출석랭킹 == "") {
        출석랭킹 = "1등 : " + sender;
      } else {
        출석랭킹 = 출석랭킹 + "\n" + (출석랭킹.split("\n").length + 1) + "등 : " + sender;
      }
      var point = Math.floor(Math.random() * 9901) + 100;
      player[sender].point += point;
      replier.reply(sender + "님이 출석했다냥"+allsee+"\n (출석시간 : " + today.toLocaleTimeString() + ")\n획득 포인트 : "+ point);
      Log.info(sender + "님이 출석하셨습니다."+allsee+"\n (출석시간 : " + today.toLocaleTimeString() + ")\n획득 포인트 : "+ point);
      FileStream.write("/storage/emulated/0/Download/botfile/attempt/" + sender + ".json", JSON.stringify(player[sender]));
    }
  } 
else if (msg == ";출석랭킹") {
  var 출석자 = [];
  var now = new Date();
  var cutoffTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
  for (var p in player) {
    if (player[p].lastAttendanceDate !== null) {
      var lastAttendance = new Date(player[p].lastAttendanceDate);
      if (lastAttendance >= cutoffTime) {
        출석자.push({ name: p, time: lastAttendance });
      }
    }
  }
  if (출석자.length == 0) {
    replier.reply("아직 출석한 사람중 채팅 친 사람이 없다냥");
  } else {
    출석자.sort(function (a, b) { return a.time - b.time; });
    var rank = 1;
    var result = "출석 순위이다냥" + allsee + "\n";
    for (var i = 0; i < 출석자.length; i++) {
      var date = 출석자[i].time;
      if (출석자[i].name == sender) {
        result += "" + rank + "등 : " + 출석자[i].name + " (" + date.toLocaleTimeString() + ")\n";
      } else {
        result += rank + "등 : " + 출석자[i].name + " (" + date.toLocaleTimeString() + ")\n";
      }
      rank++;
    }
    replier.reply(result);
  }
}
}catch(e)
{
  replier.reply("");
}
      }
