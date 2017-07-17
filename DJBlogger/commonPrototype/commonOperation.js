/**
 * Created by Administrator on 2017/5/22.
 */

function commonOperation(){

}
commonOperation.prototype.getEventTarget = function(e){
    e = e || window.event;
    return e.target || e.srcElement;
};

$(function(){
    var $backToTop = $("#backToTop");
    var $backToTop_text = $("#backToTop_text");
    var $backToTop_img = $('#backToTop_img');
    $backToTop.hide();
    $backToTop_text.hide();
    $(window).scroll(function(){
        if($(window).scrollTop() > 500){
            $backToTop.show();
        }else{
            $backToTop.hide();
        }
    });
    $backToTop.click(function(){
        var spreed = 100;
        $('html,body').animate({scrollTop: 0},spreed);
    });
    $backToTop_img.hover(function(){
        $backToTop_text.show();
    },function(){
        $backToTop_text.hide();
    });
});
