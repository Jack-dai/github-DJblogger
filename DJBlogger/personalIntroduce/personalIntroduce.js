/**
 * Created by Administrator on 2017/5/22.
 */
function personalIntroduce(){
    this.navItem = $("#navBar05");
}
personalIntroduce.prototype.navActive = function(){
    this.navItem.addClass('active');
};
function main() {
    var personIntro = new personalIntroduce();
    personIntro.navActive();
}
main();