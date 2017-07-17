/**
 * Created by Administrator on 2017/5/22.
 */
function leaveMessage(){
    this.navItem = $("#navBar06");
    this.show = $("#MC_msg_content");
    this.MC_box_say = $("#MC_box_say");
    this.faceBox = $("#qqfaceBox");
    this.face = $("span.text");
    this.emotions = $("#emotions");
    this.submit_msg = $("#submit_msg");
    this.icon_ding = $('.icon_ding');
    this.ding_count = $('.ding_count');
    this.icon_cai = $('.icon_cai');
    this.cai_count = $('.cai_count')
}
// 添加导航栏选中状态
leaveMessage.prototype.navActive = function(){
    this.navItem.addClass('active');
};
//设置focus and blur
leaveMessage.prototype.pullMsg = function(){
    var temp = this;
    temp.MC_box_say.focus(function(){
        temp.MC_box_say[0].placeholder = "";
        temp.MC_box_say.css({
            'font-size': 16 + 'px',
            'color' : 'black'
        });
    });
    temp.MC_box_say.blur(function(){
        var $StrVal = temp.MC_box_say.val();
        if($StrVal == ""){
            temp.MC_box_say[0].placeholder = "说点儿什么吧...";
            temp.MC_box_say.css({
                'font-size': 14 + 'px',
                'color' : '#bfbfbf'
            });
        }
    });
};
//添加表情
leaveMessage.prototype.addEmotions = function(){
    var temp = this;
    var faceBox = {
        id : '[em_',
        path : 'face/'
    };
    var html;
    for(var i = 0; i < 5; i++){
        html += '<tr>';
            for(var j = 0; j < 15; j++){
                var strIndex = (i * 15 + j + 1).toString();
//                console.log(strIndex);
                html += '<td>';
                html += '<img id="' + faceBox.id + strIndex + ']" src="' + faceBox.path + strIndex +'.gif"/>';
                html += '</td>';
            }
        html += '</tr>'
    }
    temp.faceBox.html(html);
    temp.emotions.hide();
//    console.log('hide');
};
//打开表情包
leaveMessage.prototype.playFaceBox = function(){
    var temp = this;
    temp.face.click(function(){
        temp.emotions.toggle();
    });
    var getCommon = new commonOperation();
    temp.faceBox[0].addEventListener('click', function(e){
        temp.MC_box_say.focus();
        const target = getCommon.getEventTarget(e);
        if(target.tagName == 'IMG'){
            var targetId = target.id;
            console.log(targetId);
            var sayBoxVal = temp.MC_box_say.val();
            temp.MC_box_say.val(sayBoxVal + targetId);
            temp.emotions.hide();
//            temp.MC_box_say.append(targetId);
        }
    });

};
//提交留言
leaveMessage.prototype.submitMsg = function(){
    var temp = this;
    temp.submit_msg.click(function(){
        //获取留言框中的留言
        var str = temp.MC_box_say.val();
        if(str){
            //展示在评论框中
            var user_say = replace_em(str); //转换留言框中的信息
            //动态生成li
            var date = new Date();
            console.log();
            var userName = '婷女神！';
            var userTime = date.getFullYear() + "年" + (date.getMonth()+1) + "月" + date.getDate() + "日 "
                + date.getHours() + ":" + date.getMinutes();
            var userText = user_say;
            var html = replay_li(userName, userTime, userText, 0, 0);
            //将生成的li添加到评论框ul中
//        console.log(html);
            temp.show.prepend(html);
            //留言框制空
            temp.MC_box_say.val("");
        }
    });
};
//点击赞或者踩
leaveMessage.prototype.clickDingOrCai = function(){
    var getCommon = new commonOperation();
    var temp = this;
    temp.show[0].addEventListener('click', function(e){
        var target = getCommon.getEventTarget(e);
        var $target = $(target);
        if(target.tagName == 'A'){
            if(target.className == 'icon_ding'){
                $target.next().text(parseInt($target.next().text()) + 1);
            }else if(target.className == 'icon_cai'){
                $target.next().text(parseInt($target.next().text()) + 1);
            }
        }
    });
};

//查看结果
function replace_em(str){
    str = str.replace(/\</g,'&lt;');
    str = str.replace(/\>/g,'&gt;');
    str = str.replace(/\n/g,'<br/>');
    str = str.replace(/\[em_([0-9]*)\]/g,'<img src="face/$1.gif" border="0" />');
    return str;
}
//动态生成li
function replay_li(userName, userTime, userText, dingCount, caiCount){
    var html;
    html = '<li>';
    html += '<div class="MC_msg_img">';
    html += '<img src="images/personHead.jpg"/>';
    html += '</div>';
    html += '<div class="MC_msg_content">';
    html += '<p>';
    html += '<a href="#" class="user_name">'+ userName +'</a>';
    html += '<span class="user_time">'+ userTime +'</span>';
    html += '</p>';
    html += '<p class="user_text">'+ userText +'</p>';
    html += '<p class="user_operate">';
    html += '<a class="user_reply">回复</a>';
    html += '<a class="icon_ding"></a>';
    html += '<span class="ding_count">'+ dingCount +'</span>';
    html += '<a class="icon_cai"></a>';
    html += '<span class="cai_count">'+ caiCount +'</span>';
    html += '</p>';
    html += '</div>';
    html += '</li>';
    return html;
}

function main(){
    var leaveM = new leaveMessage();
    leaveM.navActive();
    leaveM.pullMsg();
    leaveM.addEmotions();
    leaveM.playFaceBox();
    leaveM.submitMsg();
    leaveM.clickDingOrCai();
}
main();