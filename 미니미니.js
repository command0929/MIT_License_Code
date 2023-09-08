const scriptName = "미니미니";//최적화는 알아서
const gameroom = ["18385797505445350","roomId"];
var player = {};
var blacklist = {};
let playered = {};
var verify1 = "";
var count = 0;
var msgt = {};
var msga = {};
var rv = {};
var prefix = "0"; //;도박 ;돈벌기 등 일반 도박 미니게임 접두사
var adminprefix = "2"; //.dupe .cheat 같은 인증된 유저의 기능
var subprefix = "1"; //인증 같은 보조 접두사
let time = 500;
let creeper = 0; //도배방지 0은 키는거, 1은 도배방지 끄기
let msgsanti = 0;
rv = "2.0.0";
const verifymode = 0;
const fs = FileStream;
const allsee = "\u200b".repeat(500);
function responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName, threadId, userId, roomId, usId) {
eval(fs.read("/storage/emulated/0/Download/botfile/toolsDate.txt"));
try{
  if(msgsanti == 0) {
    msgsanti = 1;
    if(creeper == 0) {
    java.lang.Thread.sleep(time);
    }
verifymode = FileStream.read("/storage/emulated/0/Download/botfile/mini/verifymode.txt");
  if (msg == subprefix+"room") {
    replier.reply (roomId);
    }
  if(msg == subprefix+"roominfo") {
var data=JSON.parse(org.jsoup.Jsoup.connect("https://open.kakao.com/c/search/unified?q="+room).ignoreContentType(true).get().text()).items[0];
replier.reply("❐ 방정보 ❐"+"\n"+"방장 이름 : "+data.nn+"\n"+"방 이름 : "+ data.ln+"\n"+"잠금 : "+(data.lk ?"🔒":"🔓")+"\n"+"방 인원 : "+data.mcnt+"\n"+"하트 개수 : ❤"+data.rc+"개"+"\n"+"방 점수 :"+(data.score*100).toFixed(3));
  }
if(isGroupChat == true && room == "관리자실") {
  if(msg == subprefix+"key") {
   replier.reply(verify1);
                    }
}
  if(gameroom.some(word => roomId.includes(word))) {
  {
    if (blacklist[sender] == undefined) {
  blacklist[sender] = {
    block: 0,
    count: 0,
    anti: 0,
    msgt: {},
    msga: {}
  };
}
    if (player[sender] == undefined) {
  player[sender] = {
  };
}
const hashv = usId;
Log.info (hashv);
  playered[sender] = FileStream.read("/storage/emulated/0/Download/botfile/mini/Player/"+ hashv + ".json");
{try{
  player[sender] = JSON.parse(playered[sender]);
}
catch(e) {
  Log.info (e+"\n\n"+playered[sender]);
  FileStream.read("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json");
}
}
if (player[sender] == null) {
  player[sender] = {
    dobakr: 0, 
    dobak: 0, 
    moneys: 0, 
    bank: 0, 
    money: 100,
    isuser: 1, 
    allin: 0, 
    moneyg: 0,
    key: "", 
    keyc: "", 
    ep: 0, 
    name: sender,
    hashv: hashv,
    antig: "",
    banks: 0
  };
  FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
}
var nowTime = Date.now(); //Anti Ghost User
var playerFiles1 = java.io.File("/storage/emulated/0/Download/botfile/mini/Player/").listFiles();
for (var i1 = 0; i1 < playerFiles1.length; i1++) {
    try {
        var playerData1 = FileStream.read(playerFiles1[i1]);
        var playerObj1 = JSON.parse(playerData1);
        if ((playerObj1.moneys == 1 && (nowTime - playerObj1.antig) >= 2 * 24 * 60 * 60 * 1000) || (playerObj1.moneys == 0 && (nowTime - playerObj1.antig) >= 10 * 60 * 1000)) {
            FileStream.remove(playerFiles1[i1]);
        }
    } catch (e) {
        continue;
    }
}
if(msg == subprefix+"인증") {
  if(player[sender].key == "") {
  securityKey();
verify1 = sKey;
  Log.info(verify1);
  verifymode = 1;
  FileStream.write("/storage/emulated/0/Download/botfile/mini/verifymode.txt",1);
  replier.reply("인증 모드 활성화됨.\n"+subprefix+"인증 (인증코드) 로 인증");
  }else{
    replier.reply("이미 인증된 유저입니다");
  }
}
if(msg.startsWith(adminprefix+"ev ")) {
 if(player[sender].keyc == 1) {
   try{replier.reply("success"+allsee+"\n\n\n"+eval(msg.substring(adminprefix.length+3)));}catch (e) {replier.reply("failed"+allsee+"\n\n\n"+e);}
 }else{
   replier.reply("인증이 필요합니다");
 }
}
if(msg == adminprefix + "인증 우회") {
  if(player[sender].keyc == 1) {
  securityKey();
verify1 = sKey;
  replier.reply("냉면!");
  }else{replier.reply("권한 오류");}
}
if(msg.startsWith(subprefix+"인증 ")) {
  var verify2 = msg.substring(subprefix.length+3);
  if(verify2.length > 3) {
  if(verify1 == verify2) {
    player[sender].key = verify1;
    player[sender].keyc = 1;
    FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
    verifymode = 0;
    FileStream.write("/storage/emulated/0/Download/botfile/mini/verifymode.txt",0);
    replier.reply("인증 완료");
    securityKey();
verify1 = sKey;
  }else{
    verifymode = 0;
    FileStream.write("/storage/emulated/0/Download/botfile/mini/verifymode.txt",0);
    replier.reply("인증 실패"+allsee+"\n\n\n"+verify1+"\n\n"+verify2);
    securityKey();
verify1 = sKey;
  }
  }else{
    replier.reply("ERROR");
  }
}
var lkc = player[sender].key;
if(lkc.length < 3) {
  player[sender].key = "";
  player[sender].keyc = "";
  FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
}
if (msg == prefix+"도박미니게임회원가입") {
  if (player[sender].moneys == 1) {
    replier.reply (sender+"님은 이미 회원가입을 했어요!");
  }else{
    player[sender].moneys = 1;
    player[sender].money += 4999900;
    FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
    replier.reply (sender+"님, 회원가입을 완료했어요!\n[🌊가입보상] : +5000000원\n0명령어 로 명령어를 확인하세요!");
  }
}
{
  if(creeper == 0) {
  if(blacklist[sender].count == 2) {
    if (msg == blacklist[sender].msgt)
    {
      if (msg == blacklist[sender].msga) {
        replier.markAsRead();
        blacklist[sender].count = 0;
        if (blacklist[sender].block == 0) {
      Log.info (sender+"님이 매크로로 의심?");
      replier.markAsRead();
      }
      blacklist[sender].block = 1;
      }
    }else{
      blacklist[sender].count = 0;
    }
  }
 if(blacklist[sender].count == 1) {
   blacklist[sender].msga = msg;
   blacklist[sender].count = 2;
 }
 if(blacklist[sender].count == 0) {
   blacklist[sender].msgt = msg;
   blacklist[sender].count = 1;
 }
 }else{}
 if (player[sender].moneys == 1)  {
   player[sender].antig = Date.now;
   if (msg == prefix+"새로고침") {
    player[sender].moneyg = 0;
    blacklist[sender].count = 0;
    blacklist[sender].anti = 0;
    blacklist[sender].block = 0;
    replier.reply ("success\n리로더 : "+rv);
   }
 if (blacklist[sender].block == 1) {
   blacklist[sender].anti++;
   if (blacklist[sender].anti >= 1000) {
     blacklist[sender].anti = 0;
     blacklist[sender].block = 0;
   }
 }else{
if (msg.startsWith(prefix + "은행 입금 ")) {
  var amount = parseFloat(msg.replace(prefix + "은행 입금 ", ""));
  if (!isNaN(amount)) {
  var multiplier = 1;
  if (amount.toString().includes('e+')) {
    multiplier = Math.pow(10, parseInt(amount.toString().split('e+')[1]));
    amount = parseFloat(amount.toString().split('e+')[0]);
  }
  if (amount > 0) {
  if (player[sender].money >= amount * multiplier) {
    player[sender].bank += amount * multiplier;
    player[sender].money -= amount * multiplier;
    replier.reply("성공적으로 " + amount * multiplier + "만큼의 돈을 입금하였습니다!\n은행 잔액 : "+player[sender].bank+"\n돈 : "+player[sender].money);
  } else {
    replier.reply("돈이 부족합니다.\n입금 시도 잔액 : "+amount * multiplier+"\n돈 : "+player[sender].money);
  }
  FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
}else{
  replier.reply ("입금할 돈은 양수로 써주세요");
}
}
}
let cp = FileStream.read("/storage/emulated/0/Download/botfile/mini/Coin/p.txt");
if(msg == prefix+"코인시세") {
  replier.reply("현재 코인은 "+cp+"원입니다!");
  }
if(msg == prefix+"코인기록") {
      chatlog = FileStream.read("/storage/emulated/0/Download/botfile/bitcoin/btlog.txt");
    if(chatlog.length > 100000) {
      if(chatlog.length > 100000) {
  chatlog = chatlog.slice(0, 100000);
                                  }
                                }
replier.reply("[ 코인 기록(비트코인) ]"+allsee+"\n\n\n"+chatlog);
}
if(msg == prefix+"코인") {
 replier.reply(sender+"님의 코인은 "+player[sender].banks+"개입니다!");
}
if(msg.startsWith(prefix+"코인매수 ")) {
  var amount0 = parseFloat(msg.replace(prefix+"코인매수 ", ""));
  if (!isNaN(amount0)) {
  var multiplier0 = 1;
  if (amount0.toString().includes('e+')) {
    multiplier0 = Math.pow(10, parseInt(amount0.toString().split('e+')[1]));
    amount0 = parseFloat(amount0.toString().split('e+')[0]);
  }
  if (amount0 > 0) {
  if (player[sender].money >= amount0 * multiplier0 * cp) {
    player[sender].banks += amount0 * multiplier0;
    player[sender].money -= amount0 * multiplier0 * cp;
    replier.reply("성공적으로 " + amount0 * multiplier0 + "만큼의 코인을 매수하였습니다!\n코인 갯수 : "+player[sender].banks+"\n돈 : "+player[sender].money);
  } else {
    replier.reply("돈이 부족합니다.\n코인 매수 갯수(금액) : "+amount0 * multiplier0+"("+amount0 * multiplier0 * cp+")"+"\n돈 : "+player[sender].money);
  }
  FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
}else{
  replier.reply ("매수할 코인 갯수는 양수로 써주세요");
}
}
}
if(msg.startsWith(prefix+"코인매도 ")) {
  var amount10 = parseFloat(msg.replace(prefix+"코인매도 ", ""));
  if (!isNaN(amount10)) {
  var multiplier10 = 1;
  if (amount10.toString().includes('e+')) {
    multiplier10 = Math.pow(10, parseInt(amount10.toString().split('e+')[1]));
    amount10 = parseFloat(amount10.toString().split('e+')[0]);
  }
  if (amount10 > 0) {
  if (player[sender].banks >= amount10 * multiplier10) {
    player[sender].money += amount10 * multiplier10 * cp;
    player[sender].banks -= amount10 * multiplier10;
    replier.reply("성공적으로 " + amount10 * multiplier10 + "만큼의 코인을 매도하였습니다!\n코인 갯수 : "+player[sender].banks+"\n돈 : "+player[sender].money);
  } else {
    replier.reply("코인이 부족합니다.\n코인 매도 갯수(금액) : "+amount10 * multiplier10+"("+amount10 * multiplier10 * cp+")"+"\n코인 : "+player[sender].banks);
  }
  FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
}else{
  replier.reply ("매도할 코인 갯수는 양수로 써주세요");
}
}
}
if (msg.startsWith(adminprefix+"cheat ")) {
  if(player[sender].keyc == 1) {
  var cheat = parseFloat(msg.replace(adminprefix+"cheat ", ""));
  if (!isNaN(cheat)) {
  var cheat2 = 1;
  if (cheat.toString().includes('e+')) {
    cheat2 = Math.pow(10, parseInt(cheat.toString().split('e+')[1]));
    cheat = parseFloat(cheat.toString().split('e+')[0]);
  }
var cheat1 = player[sender].money;
player[sender].money = cheat * cheat2;
replier.reply("치트 완료\n"+cheat1+" => "+player[sender].money);
FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
}else{
  replier.reply(cheat);
}
}else{
  replier.reply("인증이 필요합니다");
}
}
if (msg == adminprefix+"dupe") {
  if(player[sender].keyc == 1) {
  var dupe = player[sender].money;
  if(dupe < 0) {
    var dupe1 = dupe*-1;
    dupe += dupe1*2;
  }
  var inject = Math.pow(dupe, 2);
  player[sender].money += inject;
  FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
  replier.reply("dupe success\n"+dupe+" => "+player[sender].money);
  }else{
  replier.reply("인증이 필요합니다");
  }
}
if (msg.startsWith(prefix+"은행 출금 ")) {
  var amount1 = parseFloat(msg.replace(prefix+"은행 출금 ", ""));
  if (!isNaN(amount1)) {
  var multiplier1 = 1;
  if (amount1.toString().includes('e+')) {
    multiplier1 = Math.pow(10, parseInt(amount1.toString().split('e+')[1]));
    amount1 = parseFloat(amount1.toString().split('e+')[0]);
  }
  if(amount1 > 0) {
  if ( player[sender].bank >= amount1 * multiplier1) {
    player[sender].bank -= amount1 * multiplier1;
    player[sender].money += amount1 * multiplier1;
    replier.reply("성공적으로 " + amount1 * multiplier1 + "만큼의 돈을 출금하였습니다!\n은행 잔액 : "+player[sender].bank+"\n돈 : "+player[sender].money);
  } else {
    replier.reply("은행 자금이 부족합니다.\n출금 시도 잔액 : "+amount1 * multiplier1+"\n은행 잔액 : "+player[sender].bank);
  }
  FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
}else{
  replier.reply ("출금할 돈은 양수로 써주세요");
}
}
}
    if (msg == prefix+"은행 잔액") {
      replier.reply (sender+"님의 은행 잔액:\n"+player[sender].bank);
    }
    if (msg == subprefix+"getID") {
      replier.reply (sender + "\nID : " + hashv);
    }
    if (msg == prefix+"올인") {
      player[sender].allin += player[sender].money;
      player[sender].money = 0;
      player[sender].dobakr = Math.floor(Math.random() * 100) + 1;
      if (player[sender].dobakr <= 50) {
        player[sender].money += player[sender].allin * 5;
        replier.reply("올인에 성공했습니다! " + player[sender].allin * 5 + "원을 얻으셨습니다.\n돈 : "+player[sender].money);
      } else {
        replier.reply("도박에 실패하셨습니다.\n(-"+player[sender].allin+")\n돈 : 0");
      }
      player[sender].allin = 0;
      player[sender].dobakr = 0;
  FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
    }
if (msg.includes(prefix+"도박 ")) {
  var amount2 = parseFloat(msg.replace(prefix+"도박 ", ""));
  if (!isNaN(amount2)) {
  var multiplier2 = 1;
  if (amount2.toString().includes('e+')) {
    multiplier2 = Math.pow(10, parseInt(amount2.toString().split('e+')[1]));
    amount2 = parseFloat(amount2.toString().split('e+')[0]);
  }
  if (amount2 >= 0) {
    if (player[sender].money >= amount2 * multiplier2) {
    player[sender].dobakr = Math.floor(Math.random() * 100) + 1;
    if (player[sender].dobakr >= 50) {
    player[sender].money += amount2 * multiplier2 * 2;
    replier.reply("성공적으로 " + amount2 * multiplier2 * 2 + "만큼의 돈을 획득하였습니다!\n돈 : "+player[sender].money);
  }else{
    player[sender].money -= amount2 * multiplier2;
    replier.reply ("도박에 실패했습니다\n(-"+amount2 * multiplier2+")\n돈 : "+player[sender].money+"\n주작 방지용 : "+player[sender].dobakr+"(1~100)");
  }
  }else{
    replier.reply ("돈이 부족합니다");
  }
  }else{
  replier.reply ("도박할 돈은 양수로 써주세요");
}
  FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
}
}
    if (msg == prefix+"내정보") {
      {
        replier.reply(sender + "님의 정보" + allsee + "\n인증 : " + player[sender].keyc + "\n인증 키 : " + player[sender].key + "\n돈 : " + player[sender].money + "원이에요\n은행 잔액 : " + player[sender].bank + "원이십니다!"+"\n코인 갯수 : "+player[sender].banks+"("+player[sender].banks * cp+")\n\n\n고유 아이디 : "+hashv);
       FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
      }
    }
   if (msg == prefix+"돈") {
    replier.reply (sender+"님의 돈:\n"+player[sender].money);
   }
    if (msg == prefix+"명령어") {
      replier.reply("━━━━ 도박미니게임 봇 KIWI ━━━" + allsee + "\n'"+prefix+"내정보' :\n자기의 돈, 최대로 얻을수 있는 돈, 은행 잔액등을 확인할수 있습니다.\n\n'"+prefix+"명령어' :\n도박미니게임 관련 명령어를 불러옵니다\n\n'"+prefix+"돈벌기' :\n100원부터 10만원까지 랜덤하게 5초후 얻습니다'\n\n'"+prefix+"은행 출금 (숫자)' :\n뒤 숫자만큼 돈을 은행에서 뺍니다'\n\n'"+prefix+"은행 입금 (숫자)' :\n그 숫자만큼 은행에 돈을 넣습니다'\n\n'"+prefix+"도박' :\n그 뒤에 숫자를 입력해 그 숫자만큼 도박을 합니다.\n\n'"+prefix+"올인' :\n 자신이 가지고 있는 돈 만큼 도박을 합니다.\n\n'"+prefix+"송금' :\n자신의 돈에서 원하는만큼 상대에게 송금합니다.\n예)"+prefix+"송금 3000 16703829\n=>3번째 행의 16703829는 ;내정보 쳤을때의 고유 아이디입니다.\n\n'"+prefix+"아이디리스트' :\n(플레이어) : (고유아이디) 형식으로 리스트를 보여줍니다.\n\n'"+prefix+"도박랭킹' :\n도박랭킹을 불러옵니다. (50위권 이내, 돈+은행 돈잔액 합산 랭킹)\n\n'"+prefix+"코인매도 (갯수)':\n그 만큼의 코인을 팝니다.\n\n'"+prefix+"코인매수 (갯수)':\n그 만큼의 코인을 삽니다.\n\n'"+prefix+"코인시세' & '"+prefix+"코인기록':\n코인 가격 확인 & 코인 가격 기록 확인\n\n'"+prefix+"재설정' :\n돈벌기 무한 쿨 버그 고침 & 도배 의심 해제");
    }
    if (msg == prefix + "아이디리스트") {
    var playerList0 = "";
    var playerFiles0 = java.io.File("/storage/emulated/0/Download/botfile/mini/Player/").listFiles();
    
    for (var i0 = 0; i0 < playerFiles0.length; i0++) {
        var playerData0 = FileStream.read(playerFiles0[i0]);
        try {
            var playerObj0 = JSON.parse(playerData0);
            if(playerObj0.moneys == 1) {
            var playerName0 = playerObj0.name;
            var hashv0 = playerObj0.hashv;
            playerList0 += playerName0 + " : " + hashv0 + "\n\n";
            }else {}
        } catch (e) {
        }
    }
    if (playerList0 !== "") {
        replier.reply("플레이어 아이디 리스트" + allsee + " :\n\n" + playerList0);
    } else {
        replier.reply("등록된 플레이어가 없습니다.");
    }
}
    if (msg.startsWith(prefix + "송금 ")) {
    var mov = msg.substring(prefix.length + 3);
    var spaceIndex = mov.indexOf(" ");
    var amountStr = mov.substring(0, spaceIndex);
    var tid = mov.substring(spaceIndex + 1);
    var amountt = parseFloat(amountStr);
    
    if (isNaN(amountt)) {
        replier.reply("유효한 금액을 입력해주세요.");
        return;
    }
    
    if (amountStr.indexOf("e+") !== -1) {
        var exponentIndex = amountStr.indexOf("e+");
        var baseAmount = parseFloat(amountStr.substring(0, exponentIndex));
        var exponent = parseInt(amountStr.substring(exponentIndex + 2));
        amountt = baseAmount * Math.pow(10, exponent);
    }
    
    if (amountt <= 0) {
        replier.reply("금액은 양수만 입력 가능합니다.");
        return;
    }
    
    var tidi = FileStream.read("/storage/emulated/0/Download/botfile/mini/Player/" + tid + ".json");
    
    if (tidi == null) {
        replier.reply("송금 대상의 데이터가 존재하지 않습니다.\n" + tid);
        return;
    }
    
    var targetData = JSON.parse(tidi);
    
    if (player[sender].money >= amountt && targetData != null) {
        player[sender].money -= amountt;
        targetData.money += amountt;
        FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + tid + ".json", JSON.stringify(targetData));
        replier.reply(targetData.name + "에게 " + amountt + "원을 성공적으로 송금했습니다.");
    } else {
        replier.reply("송금할 수 있는 금액이 부족하거나 대상의 데이터가 올바르지 않습니다.");
    }
}
   if (msg == prefix+"도박랭킹") {
    var ranking = [];
    var rp = [];
    var playerFiles = java.io.File("/storage/emulated/0/Download/botfile/mini/Player/").listFiles();
    for (var i = 0; i < playerFiles.length; i++) {
        var playerData = FileStream.read(playerFiles[i]);
        rp.push(playerData);
    }
    for (var j = 0; j < rp.length; j++) {
      try{
        var playerObj = JSON.parse(rp[j]);
        }catch(e) {}
        if(playerObj.moneys == 0) {
          }else{
            var score = {
                name: playerObj.name,
                score: playerObj.money + playerObj.bank
            };
            ranking.push(score);
    }
    }
    ranking.sort(function (a, b) {
        var scoreA = a.score;
        var scoreB = b.score;
        return scoreB - scoreA;
    });
    var result = "[ 도박 랭킹 TOP 50 ]"+allsee+"\n\n";
    for (var k = 0; k < 50; k++) {
        if (ranking[k] !== undefined) {
            result += (k + 1) + "위 " + ranking[k].name + ": " + ranking[k].score + "원\n\n";
        }
    }
    replier.reply(result);
}
FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
if (msg == prefix+"돈벌기") {
  if (player[sender].moneyg == 1) {
    replier.reply("쿨타임중");
  } else {
    player[sender].moneyg = 1;
    replier.reply (sender+"님이 돈벌기를 시작합니다!");
    FileStream.write("/storage/emulated/0/Download/botfile/mini/Player/" + hashv + ".json", JSON.stringify(player[sender]));
     setTimeout(function () {
      var moneyToAdd = Math.floor(Math.random() * (100000 - 100 + 1)) + 100;
      player[sender].money += moneyToAdd;
      player[sender].moneyg = 0;
      replier.reply(sender + "님이 " + moneyToAdd + "원을 벌었습니다.");
      const hashv2 = java.lang.String(imageDB.getProfileImage()).hashCode();
  const fileLocation2 = "/storage/emulated/0/Download/botfile/mini/Player/" + hashv2 + ".json";
  FileStream.write(fileLocation2, JSON.stringify(player[hashv2]));
    }, 8000);
  }
}
}
}else{
  if (msg.startsWith(prefix+"내정보")||msg.startsWith(prefix+"돈")||msg.startsWith(prefix+"아이디리스트")||msg.startsWith(prefix+"도박랭킹")||msg.startsWith(prefix+"코인")||msg.startsWith(prefix+"돈벌기")||msg.startsWith(prefix+"새로고침")||msg.startsWith(prefix+"은행 ")||msg.startsWith(subprefix+"getID")||msg.startsWith(prefix+"올인")||msg.startsWith(prefix+"도박 ")||msg.startsWith(prefix+"송금")||msg.startsWith(prefix+"명령어")) {
    replier.reply (sender+"님\n"+prefix+"도박미니게임회원가입\n으로 회원가입 후 사용해주세요!");
  }
  }
}
FileStream.read("/storage/emulated/0/Download/botfile/mini/Player/"+ hashv + ".json");
    msgsanti = 0;
    return;
  }
  }else{
  }
  }else{
    msgsanti = 0;
  }
  }catch (e){Log.info(e); msgsanti = 0;}
}
function shuffleString(str) {
  var arr = str.split("");
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr.join("");
}
function securityKey() {
  var characters = "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6";
  var shuffled = shuffleString(characters);
  var length = Math.floor(Math.random() * 15) + 15;
  var start = Math.floor(Math.random() * (shuffled.length - length));
  sKey = shuffled.substring(start, start + length) + "";
}
function onNotificationPosted(sbn, sm) {
    var packageName = sbn.getPackageName();
    if (!packageName.startsWith("com.kakao.tal")) return;
    var actions = sbn.getNotification().actions;
    if (actions == null) return;
    var userId = sbn.getUser().hashCode();
    for (var n = 0; n < actions.length; n++) {
        var action = actions[n];
        if (action.getRemoteInputs() == null) continue;
        var bundle = sbn.getNotification().extras;
        var userId2 = bundle.get("android.messages")[0].get("sender_person").key;
        var roomId = sbn.getNotification().shortcutId;
        var userId3 = java.lang.String(userId2 + roomId).hashCode();
        var msg = bundle.get("android.text").toString();
        var sender = bundle.getString("android.title");
        var room = bundle.getString("android.subText");
        if (room == null) room = bundle.getString("android.summaryText");
        var isGroupChat = room != null;
        if (room == null) room = sender;
        var replier = new com.xfl.msgbot.script.api.legacy.SessionCacheReplier(packageName, action, room, false, "");
        var icon = bundle.getParcelableArray("android.messages")[0].get("sender_person").getIcon().getBitmap();
        var image = bundle.getBundle("android.wearable.EXTENSIONS");
        if (image != null) image = image.getParcelable("background");
        var imageDB = new com.xfl.msgbot.script.api.legacy.ImageDB(icon, image);
        com.xfl.msgbot.application.service.NotificationListener.Companion.setSession(packageName, room, action);
        if (this.hasOwnProperty("responseFix")) {
            responseFix(room, msg, sender, isGroupChat, replier, imageDB, packageName, userId != 0, userId2, roomId, userId3);
        }
    }
  }
