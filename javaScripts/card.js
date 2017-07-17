
var desk={};
desk.cards={};
desk.cards=[
    "heartA","heartA",
    "heart2","heart2",
    "heart3","heart3",
    "spadeJ","spadeJ",
    "spadeQ","spadeQ",
    "spadeK","spadeK"
]

//翻牌功能
$(function cardGame(){
    desk.cards.sort(randomsort);
    var $table;
    var $cards;
    $table=$("#table");
    $cards=$(".cards");
    var count=0;
    var i;

    for(i=0; i<11; i++){
        $cards.clone().appendTo($table);
    }

    $(".cards").each(function(index){
        $(this).css({
            "left": (80+20)*(index%4)+"px",
            "top": (120+20)*Math.floor(index/4)+"px"
        });

        var cardNum;
        cardNum=desk.cards.pop();
        $(this).data("cardNum",cardNum);
        $(this).find(".front-card").addClass(cardNum);
        $(this).click(function(){
            count++;
            $("span:first").text("翻牌次数："+count+"次");

            var $spCounts=$(".sping");
            if($spCounts.length>1)
            {
                return;
            }

            $(this).addClass("sping");
            var $spCountsAgain=$(".sping");
            if($spCountsAgain.length == 2){
                setTimeout(function(){
                    judgeCards($spCountsAgain);
                },500);
            }
        });
    });
});

//检查牌是否一样
function judgeCards(cards)
{
    var cardNum1 = $(cards[0]).data("cardNum");
    var cardNum2 = $(cards[1]).data("cardNum");
    $(cards).removeClass("sping");
    if(cardNum1==cardNum2)
    {
        $(cards).addClass("cardRemove").bind("transitionOver",function(){
                $(this).remove();
            });
    }
}
//随机洗牌
function randomsort() {
    return Math.random()>.5 ? -1 : 1;
//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}

