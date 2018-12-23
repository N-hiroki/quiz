(function(){
    'use strict';
    var open = document.getElementById("open");
    var mask = document.getElementById("mask");
    var modal = document.getElementById("modal");
    var close = document.getElementById("close");
    var result = document.getElementById("result");
    var ans = document.getElementById("ans");
    var score = document.getElementById("score");
    var quiz = document.getElementById("quiz");
    var selectAns1 = document.getElementById("select1");
    var selectAns2 = document.getElementById("select2");
    var selectAns3 = document.getElementById("select3");
    var selectAns4 = document.getElementById("select4");
    var quizList, QUIZ;
    var userAns = 0;
    var quizAns = 0;
    var quizCount = 0;
    var correctCount = 0;
    var correct = "";
    var Settled = [];
    //問題数
    var max = 30;
    //出題数
    var quizNumber = 10;
    
    
    
    quizList = function(){
        //クイズ１
        this.quiz1 = "プロメテウスHLの開始時のチャージターンはいくつ？";
        this.quiz1Select1 = "1";
        this.quiz1Select2 = "2";
        this.quiz1Select3 = "3";
        this.quiz1Select4 = "4";
        this.quiz1Ans = 3;
        
        //クイズ２
        this.quiz2 = "プロメテウスHLで魅了がガードされるのは何％から？";
        this.quiz2Select1 = "80%";
        this.quiz2Select2 = "75%";
        this.quiz2Select3 = "50%";
        this.quiz2Select4 = "25%";
        this.quiz2Ans = 2;
        
        //クイズ3
        this.quiz3 = "プロメテウスHLのカウカソスの頻度は？";
        this.quiz3Select1 = "３ターンに１回";
        this.quiz3Select2 = "２ターンに１回";
        this.quiz3Select3 = "HP75%~26% 3ターンに１回 HP25%~10% ２ターンに１回";
        this.quiz3Select4 = "HP75%~26% 3ターンに１回 HP25%以下 ２ターンに１回";
        this.quiz3Ans = 4;
        
        //クイズ4
        this.quiz4 = "カー・オンの開始時のチャージターンはいくつ？";
        this.quiz4Select1 = "1";
        this.quiz4Select2 = "2";
        this.quiz4Select3 = "3";
        this.quiz4Select4 = "4";
        this.quiz4Ans = 3;
        
        //クイズ5
        this.quiz5 = "デュランダルを剣神共鳴した時の効果は？";
        this.quiz5Select1 = "10ターンの間、味方全体の攻撃力UP(大)(累積)";
        this.quiz5Select2 = "2ターンの間、効果中必ず連続攻撃";
        this.quiz5Select3 = "ブレイク時の敵に5倍自属性ダメージ";
        this.quiz5Select4 = "オーバードライブ時の敵に5倍自属性ダメージ";
        this.quiz5Ans = 4;
    
        //クイズ6
        this.quiz6 = "光シャルロッテの１アビ「清き光の蒼剣」の効果、闇属性攻撃DOWNは何％？";
        this.quiz6Select1 = "15%";
        this.quiz6Select2 = "20%";
        this.quiz6Select3 = "25%";
        this.quiz6Select4 = "30%";
        this.quiz6Ans = 2;
        
        //クイズ7
        this.quiz7 = "ジュワユースを剣神解放した時の効果は？";
        this.quiz7Select1 = "2ターンの間、効果中必ず連続攻撃";
        this.quiz7Select2 = "3ターンの間、味方全体の連続攻撃確率UP";
        this.quiz7Select3 = "5ターンの間、参戦者の防御UP(大)(累積)";
        this.quiz7Select4 = "1ターンの間、自分の攻撃大幅UP(敵ブレイク時のみ/1回)";
        this.quiz7Ans = 2;
        
        //クイズ8
        this.quiz8 = "ディスペルを持っていないキャラは次のうち誰？";
        this.quiz8Select1 = "シャリオス17世";
        this.quiz8Select2 = "アンスリア";
        this.quiz8Select3 = "グレア(SSR)";
        this.quiz8Select4 = "火クラリス";
        this.quiz8Ans = 2;
        
        //クイズ9
        this.quiz9 = "かばうを持っていないキャラは次のうち誰？";
        this.quiz9Select1 = "SRスーテラ";
        this.quiz9Select2 = "ベス";
        this.quiz9Select3 = "メデューサ（バレンタイン）";
        this.quiz9Select4 = "アギエルバ";
        this.quiz9Ans = 3;
        
        //クイズ10
        this.quiz10 = "かばうを持っていないキャラは次のうち誰？";
        this.quiz10Select1 = "SRヤイア";
        this.quiz10Select2 = "SRユーリ";
        this.quiz10Select3 = "Rボレミア";
        this.quiz10Select4 = "水着サラ";
        this.quiz10Ans = 4;
        
        //クイズ11
        this.quiz11 = "かばうを持っていないキャラは次のうち誰？";
        this.quiz11Select1 = "ユイシス";
        this.quiz11Select2 = "水着リーシャ";
        this.quiz11Select3 = "浴衣ユイシス";
        this.quiz11Select4 = "SRヘイゼン";
        this.quiz11Ans = 2;
        
        //クイズ12
        this.quiz12 = "かばうを持っていないキャラは次のうち誰？";
        this.quiz12Select1 = "プリキュア";
        this.quiz12Select2 = "モニカ";
        this.quiz12Select3 = "SRシャルロッテ";
        this.quiz12Select4 = "SRザザ";
        this.quiz12Ans = 3;
        
        //クイズ13
        this.quiz13 = "魅了を持っていないキャラは次のうち誰？";
        this.quiz13Select1 = "火メーテラ";
        this.quiz13Select2 = "SRアンナ";
        this.quiz13Select3 = "風メーテラ";
        this.quiz13Select4 = "水着イルザ";
        this.quiz13Ans = 4;
        
        //クイズ14
        this.quiz14 = "イイルクーンを剣神解放した時の効果は？";
        this.quiz14Select1 = "3ターンの間、味方全体の連続攻撃確率UP";
        this.quiz14Select2 = "2ターンの間、効果中必ず連続攻撃";
        this.quiz14Select3 = "5ターンの間、参戦者の防御UP(大)(累積)";
        this.quiz14Select4 = "1ターンの間、自分の攻撃大幅UP(敵ブレイク時のみ/1回)";
        this.quiz14Ans = 3;
        
        //クイズ15
        this.quiz15 = "一伐槍・真の奥義効果は次のうちどれ？";
        this.quiz15Select1 = "光属性ダメージ（特大）／味方全体の被ダメージの一部を反射（5T 3回・10%反射）";
        this.quiz15Select2 = "光属性ダメージ（特大）／味方全体の被ダメージの一部を反射（3T 3回・10%反射）";
        this.quiz15Select3 = "光属性ダメージ（特大）／味方全体の被ダメージの一部を反射（5T 3回・15%反射）";
        this.quiz15Select4 = "光属性ダメージ（特大）／味方全体の被ダメージの一部を反射（3T 3回・15%反射）";
        this.quiz15Ans = 1;
        
        //クイズ16
        this.quiz16 = "二王弓・真の奥義効果は次のうちどれ？";
        this.quiz16Select1 = "光属性ダメージ(特大)/味方全体の攻撃力上昇（中）";
        this.quiz16Select2 = "光属性ダメージ(特大)/味方全体の攻撃力上昇（大）";
        this.quiz16Select3 = "光属性ダメージ(特大)/味方全体の通常攻撃を全体化";
        this.quiz16Select4 = "光属性ダメージ(特大)/味方全体の防御力上昇（大）";
        this.quiz16Ans = 3;
        
        //クイズ17
        this.quiz17 = "三寅斧・真の奥義効果は次のうちどれ？";
        this.quiz17Select1 = "光属性ダメージ(特大)/防御30%DOWN";
        this.quiz17Select2 = "光属性ダメージ(特大)/防御20%DOWN";
        this.quiz17Select3 = "光属性ダメージ(特大)/発動ターン中防御20%DOWN";
        this.quiz17Select4 = "光属性ダメージ(特大)/発動ターン中防御30%DOWN";
        this.quiz17Ans = 4;
        
        //クイズ18
        this.quiz18 = "四天刃・真の奥義効果は次のうちどれ？";
        this.quiz18Select1 = "光属性ダメージ(特大)/味方全体の連続攻撃確率UP(DA30％/TA30％)";
        this.quiz18Select2 = "光属性ダメージ(特大)/味方全体の連続攻撃確率UP(DA40％/TA30％)";
        this.quiz18Select3 = "光属性ダメージ(特大)/味方全体の連続攻撃確率UP(DA30％/TA20％)";
        this.quiz18Select4 = "光属性ダメージ(特大)/味方全体の連続攻撃確率UP(DA20％/TA20％)";
        this.quiz18Ans = 1;
        
        //クイズ19
        this.quiz19 = "五神杖・真の奥義効果は次のうちどれ？";
        this.quiz19Select1 = "光属性ダメージ(特大)/味方全体のHPを回復(最大HPの10%/上限2000)/再生効果(最大HPの5%/上限500)";
        this.quiz19Select2 = "光属性ダメージ(特大)/味方全体のHPを回復(最大HPの10%/上限3000)/再生効果(最大HPの5%/上限500)";
        this.quiz19Select3 = "光属性ダメージ(特大)/味方全体のHPを回復(最大HPの10%/上限2000)/再生効果(最大HPの5%/上限1000)";
        this.quiz19Select4 = "光属性ダメージ(特大)/味方全体のHPを回復(最大HPの10%/上限1500)/再生効果(最大HPの5%/上限1000)";
        this.quiz19Ans = 1;
        
        //クイズ20
        this.quiz20 = "六崩拳・真の奥義効果は次のうちどれ？";
        this.quiz20Select1 = "光属性ダメージ(特大)/3ターンの間、味方全体にカウンター効果(3回)";
        this.quiz20Select2 = "光属性ダメージ(特大)/2ターンの間、味方全体にカウンター効果(2回)";
        this.quiz20Select3 = "光属性ダメージ(特大)/2ターンの間、味方全体にカウンター効果(3回)";
        this.quiz20Select4 = "光属性ダメージ(特大)/3ターンの間、味方全体にカウンター効果(2回)";
        this.quiz20Ans = 3;
        
        //クイズ21
        this.quiz21 = "七星剣・真の奥義効果は次のうちどれ？";
        this.quiz21Select1 = "光属性ダメージ(特大)/発動ターン中味方全体の被ダメージカット(15%)";
        this.quiz21Select2 = "光属性ダメージ(特大)/発動ターン中味方全体の被ダメージカット(20%)";
        this.quiz21Select3 = "光属性ダメージ(特大)/発動ターン中味方全体の被ダメージカット(25%)";
        this.quiz21Select4 = "光属性ダメージ(特大)/発動ターン中味方全体の被ダメージカット(30%)";
        this.quiz21Ans = 4;
        
        //クイズ22
        this.quiz22 = "八命切・真の奥義効果は次のうちどれ？";
        this.quiz22Select1 = "光属性ダメージ(特大)/アビリティ再使用間隔をランダムでひとつ2ターン短縮";
        this.quiz22Select2 = "光属性ダメージ(特大)/アビリティ再使用間隔をランダムでひとつ1ターン短縮";
        this.quiz22Select3 = "光属性ダメージ(特大)/2ターンの間、味方全体にカウンター効果(3回)";
        this.quiz22Select4 = "光属性ダメージ(特大)/発動ターン中味方全体の被ダメージカット(30%)";
        this.quiz22Ans = 2;
        
        //クイズ23
        this.quiz23 = "九界琴・真の奥義効果は次のうちどれ？";
        this.quiz23Select1 = "光属性ダメージ(特大)/味方全体のHPを回復(最大HPの10%/上限2000)/弱体効果成功率UP(10%)";
        this.quiz23Select2 = "光属性ダメージ(特大)/味方全体のHPを回復(最大HPの10%/上限3000)/弱体効果成功率UP(10%)";
        this.quiz23Select3 = "光属性ダメージ(特大)/味方全体のHPを回復(最大HPの20%/上限2000)/弱体効果成功率UP(10%)";
        this.quiz23Select4 = "光属性ダメージ(特大)/味方全体のHPを回復(最大HPの20%/上限3000)/弱体効果成功率UP(10%)";
        this.quiz23Ans = 1;
        
        //クイズ24
        this.quiz24 = "十狼雷・真の奥義効果は次のうちどれ？";
        this.quiz24Select1 = "光属性ダメージ(特大)/味方全体の防御UP/アビリティダメージUP";
        this.quiz24Select2 = "光属性ダメージ(特大)/味方全体の攻撃UP/アビリティダメージUP";
        this.quiz24Select3 = "光属性ダメージ(特大)/味方全体の攻撃UP/弱体効果成功率UP(10%)";
        this.quiz24Select4 = "光属性ダメージ(特大)/2ターンの間、味方全体にカウンター効果(2回)";
        this.quiz24Ans = 2;
        
        //クイズ25
        this.quiz25 = "魅了を持っていないキャラは次のうち誰？";
        this.quiz25Select1 = "キャサリン";
        this.quiz25Select2 = "ラスティナ(SR)";
        this.quiz25Select3 = "十時愛梨(とときん)";
        this.quiz25Select4 = "一ノ瀬志希";
        this.quiz25Ans = 2;
        
        //クイズ26
        this.quiz26 = "暗闇を持っているキャラは次のうち誰？";
        this.quiz26Select1 = "火ユエル(SSR)";
        this.quiz26Select2 = "土カリオストロ";
        this.quiz26Select3 = "一ノ瀬志希";
        this.quiz26Select4 = "前川みく";
        this.quiz26Ans = 4;
        
        //クイズ27
        this.quiz27 = "防御DOWN(10%)を持っているキャラは誰？";
        this.quiz27Select1 = "土カリオストロ";
        this.quiz27Select2 = "水シャルロッテ(SSR)";
        this.quiz27Select3 = "カトル";
        this.quiz27Select4 = "サラーサ";
        this.quiz27Ans = 1;
        
        
        
        //クイズ28
        this.quiz28 = "次のうち全体ダメージカットを持っているキャラは誰？";
        this.quiz28Select1 = "カタリナ（リミ）";
        this.quiz28Select2 = "SSRロミオ";
        this.quiz28Select3 = "土レ・フィーエ";
        this.quiz28Select4 = "SSRオーキス";
        this.quiz28Ans = 1;
        
        //クイズ29
        this.quiz29 = "次のうち全体反射+４０％を持つキャラは誰？";
        this.quiz29Select1 = "SSRジュリエット";
        this.quiz29Select2 = "水着レ・フィーエ";
        this.quiz29Select3 = "三日月宗近";
        this.quiz29Select4 = "バウタオーダ";
        this.quiz29Ans = 2;
        
        //クイズ30
        this.quiz30 = "次のうち全体反射+20%以上を持つキャラは誰？";
        this.quiz30Select1 = "SRファラ";
        this.quiz30Select2 = "SSRジュリエット";
        this.quiz30Select3 = "水着ノイシュ";
        this.quiz30Select4 = "メドゥーサ(バレンタイン)";
        this.quiz30Ans = 4;
        
        
        this.quizSelect = function(){
            var num = doubleCheck(Settled);
            var temp = [];
            
            if(num != false){
                Settled.push(num);
                console.log(Settled);
            }else{
                ending();
            }
            
            //プロパティ呼び出し用変数
            temp.push('quiz' + num);
            temp.push('quiz' + num + 'Select1');
            temp.push('quiz' + num + 'Select2');
            temp.push('quiz' + num + 'Select3');
            temp.push('quiz' + num + 'Select4');
            temp.push('quiz' + num + 'Ans');
            
            //その整数のクイズを出題する
            quiz.innerHTML = QUIZ[temp[0]];
            selectAns1.innerHTML = QUIZ[temp[1]];
            selectAns2.innerHTML = QUIZ[temp[2]];
            selectAns3.innerHTML = QUIZ[temp[3]];
            selectAns4.innerHTML = QUIZ[temp[4]];
            quizAns = QUIZ[temp[5]];
            correct = QUIZ[temp[quizAns]];
            ans.innerHTML = correct;
//            quiz数カウント
            quizCount++;
        };
        
    };
    
    function ending(){
        window.location.href = 'result.php?correctCount=' + correctCount + "&quizCount=" + quizCount;
    }
    
    function doubleCheck(Settled){
        var num, temp;
        var check;
        do{
            if(Settled.length == quizNumber){
                console.log(quizNumber + "問全てのクイズを出題しました。");
                return false;
                break;
            }else{
                num = rand(1,max);
                check = true;
            }
            
            if(Settled[0] == undefined){
                break;
            }else{
                for(var i = 0;i < Settled.length;i++){
                    if(num == Settled[i]){
                        check = false;
                    }
                }
            }
        }while(check == false)
        return num;
    }
    function rand(min, max){
               return min + Math.floor(Math.random() * (max - min + 1));
    }
    
    open.addEventListener('click', function(){
        modal.className = '';
        mask.className = '';
        //答えあわせ
        if(userAns == quizAns){
            result.innerHTML = "正解";
            //正解数カウント
            correctCount++;
        }else{
            result.innerHTML = "不正解";
        }
        score.innerHTML = correctCount + "/" + quizCount;
        
        //問題数がquizNumberになったらsee resultに変える
        if(quizCount == quizNumber){
            close.innerHTML = "see result";
        }
    });
    
    close.addEventListener('click', function(){
        if(quizCount == quizNumber){
            ending();
        }
        modal.className = 'hidden';
        mask.className = 'hidden';
        QUIZ.quizSelect();
        classRemove();
        userAns = 0;
    });
    
    mask.addEventListener('click', function(){
        close.click();
    });
    
    selectAns1.addEventListener('click', function(){
        userAns = 1;
        classRemove();
        selectAns1.classList.add('check');
    });
    selectAns2.addEventListener('click', function(){
        userAns = 2;
        classRemove();
        selectAns2.classList.add('check');
    });
    selectAns3.addEventListener('click', function(){
        userAns = 3;
        classRemove();
        selectAns3.classList.add('check');
    });
    selectAns4.addEventListener('click', function(){
        userAns = 4;
        classRemove();
        selectAns4.classList.add('check');
    });
    function classRemove(){
        selectAns1.classList.remove('check');
        selectAns2.classList.remove('check');
        selectAns3.classList.remove('check');
        selectAns4.classList.remove('check');
    }
    QUIZ = new quizList();
    QUIZ.quizSelect();
})();