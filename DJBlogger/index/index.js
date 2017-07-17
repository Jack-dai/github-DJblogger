/**
 * Created by daijun on 2017/3/22.
 */
function index(){
    this.carouselControl = $("#myCarousel");
    this.easyNode = $("#list_easyInfo");
    this.easyNodeList = $("#list");
    this.navItem = $("#navBar01");
}
index.prototype.carouselShow = function(){
    <!--每隔一秒跳转到下一帧-->
    var temp = this;
    temp.carouselControl.carousel({interval: 2000});
};
index.prototype.easyList = function(){
    var temp = this;
    for(var i = 0; i < 10; i++){
        temp.easyNode.clone(true).appendTo(temp.easyNodeList);
    }
};
index.prototype.navActive = function(){
    this.navItem.addClass("active");
};
index.prototype.lookEasy = function(){
    var temp = this;
    var getCommon = new commonOperation();
    temp.easyNodeList[0].addEventListener('click', function(e){
        const target = getCommon.getEventTarget(e);
        if(target.tagName == 'li'){
            console.log(target.tagName);
        }
    });
};

function indexTest(){
    var indexTest = new index();
    indexTest.carouselShow();
    indexTest.easyList();
    indexTest.navActive();
};
indexTest();
