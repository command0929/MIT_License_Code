const scriptName = "채팅 순위";
const allsee="\u200b".repeat(500);
var player = {};
let playered = {};
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
try {
if(player[sender]==undefined) {
    player[sender] = {
    lv: 0, 
    chat: 0,
    isuser: 1,
    bar: 100
   };
  }
{
  playered[sender] = FileStream.read("/storage/emulated/0/Download/botfile/chat/Player/"+sender+".json");
  player[sender] = JSON.parse(playered[sender]);
}
FileStream.write("/storage/emulated/0/Download/botfile/chat/Player/"+sender+".json", JSON.stringify(player[sender]));
if(player[sender]==null) {
    player[sender] = {
    lv: 0, 
    chat: 0,
    isuser: 1,
    bar: 100
   };
  } 
 FileStream.write("/storage/emulated/0/Download/botfile/chat/Player/"+sender+".json", JSON.stringify(player[sender]));
player[sender].chat++;
FileStream.write("/storage/emulated/0/Download/botfile/chat/Player/"+sender+".json", JSON.stringify(player[sender]));
if (player[sender].bar == player[sender].chat) {
    player[sender].bar += 100;
    player[sender].lv++;
FileStream.write("/storage/emulated/0/Download/botfile/chat/Player/"+sender+".json", JSON.stringify(player[sender]));
    Log.info(sender + "님이 레벨업했습니다!\n레벨 : " + player[sender].lv);
    player[sender].chat++;
FileStream.write("/storage/emulated/0/Download/botfile/chat/Player/"+sender+".json", JSON.stringify(player[sender]));
}
    if (msg == ";채팅랭킹") {
      var ranking = [];
      for (var user in player) {
        if (player[user] && player[user].isuser === 1) {
          ranking.push({
  name: user, 
  score: player[user].chat});
        }
      }
      ranking.sort(function(a, b) {
  return b.score - a.score;
});
      var result = "\n";
      for (var ia = 0; ia < Math.min(ranking.length, 50); ia++) {
        result += (ia + 1) + "위: " + ranking[ia].name + " (" + ranking[ia].score + "번)\n";
      }
      replier.reply("랭킹 (최대 50위)" + allsee + result);
    }
    }catch(e)
    {
      Api.on("채팅 순위");
    }
      }
