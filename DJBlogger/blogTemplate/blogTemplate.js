/**
 * Created by Administrator on 2017/5/22.
 */
function blogTemplate(){
    this.tempItems = $("#tempItems");
    this.navItem = $("#navBar02");
}
blogTemplate.prototype.setAttrOfA = function(){
    var temp = this;
    temp.tempItems.find('a').attr("target", "_blank");
};
blogTemplate.prototype.navActive = function(){
    this.navItem.addClass("active");
};
function main(){
    var blogTemp = new blogTemplate();
    blogTemp.setAttrOfA();
    blogTemp.navActive();
}
main();