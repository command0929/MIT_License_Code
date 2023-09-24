const scriptName = "끝말잇기";

/*
ㄹ→ㅇ (ㅑ, ㅕ, ㅛ, ㅠ, ㅣ, ㅖ)
ㄹ→ㄴ (ㅏ, ㅐ, ㅗ, ㅜ, ㅡ, ㅚ)
ㄴ→ㅇ (ㅕ, ㅛ, ㅠ, ㅣ)
두음법칙



Project Ai Data

Ai 턴일시...

      var Ai = {
      choice: false,
      word: ''
      };
      
      var aW = [];

      aW = word.filter(function(e) {
        return (e.startsWith(game.endWord) && !game.word.includes(e));
      });

      if(aW.length == 0) {
      Ai.choice = false;
      }else{
      Ai.choice = true;
      Ai.word = aW[Math.floor(Math.random() * aW.length)];
      }
*/

var game = {
  play: false,
  word: [],
  user: [],
  ouser: [],
  endWord: '',
  code: 0,
  owner: "",
  pause: false,
  maxtime: 30000,
  nowtime: 0,
  comtime: 0,
  turn: 0,
  room: ''
};

var path = 'sdcard/Download/endData/';

var wordData = [];

var word = [];

var wD = java.io.File(path + 'wordData/').listFiles();
var w = java.io.File(path + 'word/').listFiles();

try{
if(wD.length != 0) {
  for(var i=0;i<wD.length;i++){
    word.push(w[i].replace(path+'word/','').replace('.txt',''));
    wordData[word[i]] = {
      word: word[i],
      mean: JSON.parse(FileStream.read(wD[i])).mean
    };
  }
}
}catch (e) {
wordData = [];
word = [];
}

var endword = ['사','표','하','국','나','말','전'];

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if(game.play == true) {
    if(game.pause == true) {
      game.comtime = Date.now();
    }
    game.nowtime = Date.now();
    if((game.maxtime) / 2 == (game.nowtime - game.comtime)) {
     Api.replyRoom(game.room, game.user[game.turn]+'님 제한시간이 '+(game.maxtime)/2000+'초 남았어!\n빨리 `'+game.endWord+'` 로 시작하는 단어를 입력해줘');
    }
    if(game.maxtime < (game.nowtime - game.comtime)) {
      game.comtime = Date.now();
      game.nowtime = Date.now();
      var outUser = game.user[game.turn];
      game.user = game.user.filter(function(e) {
        return e != outUser;
      });
      game.endWord = endword[Math.floor(Math.random() * endword.length)];
      game.turn++;
      if(game.user.length <= game.turn) game.turn = 0;
      Api.replyRoom(game.room,"제한시간이 다 되어서 "+outUser+"님이 탈락했어!\n"+game.user[game.turn]+"님이 `"+game.endWord+'` 로 시작하는 단어를 입력해줘!\n순서 : '+game.user);
      if(game.user.length <= 1) {
        Api.replyRoom(game.room,game.user[0] + "님이 홀로 남아서 이겼어!\n참여 유저 : "+game.ouser);
  game = {
  play: false,
  word: [],
  user: [],
  ouser: [],
  code: 0,
  owner: "",
  pause: false,
  maxtime: 30000,
  nowtime: 0,
  room: ''
  };
      }
    }
  }
  if(msg.startsWith(';끝말잇기 ')) {
    var cmd = msg.slice(6);
    if(cmd.startsWith('참가')) {
      if(game.user.length == 0) {
        replier.reply("게임을 먼저 만들어줘!");
      }else{
        if(!cmd.includes(" ")) {
          replier.reply("참여 코드를 `;끝말잇기 참가 (코드) 로 입력해 참가해줘!");
        }else if(!game.user.includes(sender)){
        if(cmd.split(" ")[1] == game.code || game.room == room) {
          game.user.push(sender);
          replier.reply("끝말잇기 참여 완료했어!\n참여 인원 : "+game.user);
        }else{
         replier.reply("참여 코드가 올바르지 않거나 이 방에서\n생성되지 않았어!");
         }
        }else{
         replier.reply('이미 참여중이야!');
        }
      }
    }else if(cmd == '생성') {
      if(game.user.length == 0) {
      game.code = Math.floor(Math.random() * 8999) + 1000;
      game.owner = sender;
      game.user.push(sender);
      game.room = room;
      replier.reply('게임이 만들어졌어!\n참여 코드 : '+game.code+'\n참여 인원 : '+game.user);
      }else{
      replier.reply("이미 게임이 만들어져있어!");
      }
    }else if(cmd == '나가기') {
      if(!game.user.includes(sender)) {
        replier.reply('참가하지 않았어!');
      }else{
        if(game.owner == sender) {
          replier.reply("방을 판 유저는 나갈수 없어!");
        }else{
          if(game.play != true) {
            game.user = game.user.filter(function(e) {
        return e != sender;
      });
        replier.reply("방을 나갔어!\n참여 인원 : "+game.user);
      }else{
        replier.reply("게임중엔 나갈수 없어!");
      }
       }
      }
    }else if(cmd == '종료') {
      if(game.user.length == 0) {
      replier.reply("게임이 만들어져있지 않아!");
      }else if(game.owner != sender) {
        replier.reply("게임을 생성한 자여야해!");
      }else if(game.play == true) {
       replier.reply("게임중엔 종료가 불가능해!");
      }else{
  game = {
  play: false,
  word: [],
  user: [],
  ouser: [],
  code: 0,
  owner: "",
  pause: false,
  maxtime: 30000,
  nowtime: 0,
  room: ''
  };
  replier.reply("게임이 종료되었어!");
     }
    }else if(cmd == '시작') {
      if(game.user.length == 0) {
        replier.reply("게임이 만들어져있지 않아!");
      }else if(game.owner != sender) {
        replier.reply("방을 판 유저가 아니야!");
      }else if(game.play == true) {
        replier.reply("이미 시작중이야!");
       }else{
         if(1 < game.user.length) {
         game.play = true;
         game.ouser = game.user;
         game.comtime = Date.now();
         game.nowtime = Date.now();
         game.turn = 0;
         game.endWord = endword[Math.floor(Math.random() * endword.length)];
         replier.reply("게임을 시작했어!\n"+game.user[game.turn]+'님은 `'+game.endWord+'` 로 시작하는 단어를 입력해줘!\n제한 시간은 '+(game.maxtime) / 1000+'초야!\n순서 : '+game.user);
        }else{
          replier.reply("최소 인원은 2명이야!");
         }
       }
     }else if(cmd == '일시중지') {
      if(game.play != true) {
        replier.reply('게임중이 아니야!');
      }else if(game.owner != sender) {
        replier.reply('게임을 판 이가 아니야!');
      }else if(game.room != room) {
        replier.reply('게임을 판 방이 아니야!');
      }else if(game.pause == true) {
        game.pause = false;
        replier.reply("게임을 다시 시작했어!\n"+game.user[game.turn]+'님은 `'+game.endWord+'` 로 시작하는 단어를 입력해줘!\n제한 시간은 '+(game.maxtime) / 1000+'초야!\n순서 : '+game.user);
      }else{
        game.pause = true;
        replier.reply('게임을 일시중지했어!');
      }
     }else if(cmd == '검색 ') {
      if(cmd.length < 4) {
        replier.reply('검색 단어/시작/끝 (문자) 로 검색해줘!');
      }else{
        var type = cmd.slice(3);
        if(type.startsWith('끝')) {
          replier.reply('아직 지원하지 않는 검색 타입이야!');
        }else if(type.startsWith('시작')) {
          replier.reply('아직 개발중인 검색 타입이야!');
        }else if(type.startsWith('단어')) {
          var word = type.slice(2);
          if(word.length <= 1) {
            replier.reply('단어 (단어) 로 검색해줘!');
          }else{
            var sD = search(word.slice(1));
            if(sD.status != 200) {
              replier.reply('존재하지 않는 단어야!');
            }else {
              replier.reply('검색 결과'+'\u200b'.repeat(500)+'\n\n'+sD.value.word+' : '+sD.value.mean);
            }
          }
        }
      }
     }
  }
  if(msg.startsWith('단어 ')) {
       if(game.play != false && game.room == room) {
         if(game.user[game.turn] == sender) {
           if(!game.word.includes(msg.slice(3))) {
       var worded = msg.slice(3);
       var worde = search(worded);
       if(worde.status == 404) {
         replier.reply("이 봇의 사전에 존재하지 않는 단어야!");
         Log.d(JSON.stringify(worde, null, 3));
        }else{
        game.word.push(worded);
        game.endWord = worded.slice((worded.length) - 1);
        game.turn++;
      if(game.user.length <= game.turn) game.turn = 0;
      replier.reply(worded + ' : '+worde.value.mean+"\n"+game.user[game.turn] + '님 `'+game.endWord+'` 로 시작하는 단어를 입력해줘!');
     }
     }else{
       replier.reply("이미 사용한 단어야!");
     }
       }else{
         replier.reply('지금은 '+game.user[game.turn]+'님의 차례야!');
        }
       }
     }
    if(msg == '단어추천') {
      var aW = [];

      aW = word.filter(function(e) {
        return (e.startsWith(game.endWord) && !game.word.includes(e));
      });

      replier.reply('단어추천 결과 : '+'\u200b'.repeat(500)+'\n'+aW);
    }
    if(msg.startsWith('search')) replier.reply(eval(msg));
}
function search(wor) {
        var url = "https://wordrow.kr/의미/"+wor+"/?q="+wor; 
    var result = {};
   if(wordData[wor] != undefined) {
    result = {
      status: 200,
      value: {
        word: wor,
        mean: wordData[wor].mean
      }
    }; 
   }else{
  try {
        var mean = String(org.jsoup.Jsoup.connect(url).get().text()).split(wor)[1].split("WORDROW")[0].split(" [국어 사전]")[0];
        result = {
        status: 200,
        value: {
        word: wor,
        mean: mean
        }
        };
      word.push(result.value.word);
      wordData.push(result.value);
      FileStream.write(path + 'word/'+ result.value.word +'.txt',result.value.word);
      FileStream.write(path + 'wordData/' + result.value.word + '.json', JSON.stringify(result.value, null, 2));
   }
    catch (e) {
        result = {
        status: 404,
        value:{
        word: wor,
        mean: Api.papagoTranslate("en","ko",e) + '\n'+e.lineNumber
        }
    };
    }
    }
  return result;
  }
