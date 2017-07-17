/**
 * Created by Administrator on 2017/5/22.
 */
function personalDiary(){
    this.navItem = $("#navBar04");
}
personalDiary.prototype.navActive = function(){
    this.navItem.addClass('active');
};
function main(){
    var personD = new personalDiary();
    personD.navActive();
}
main();