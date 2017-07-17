/**
 * Created by Administrator on 2017/5/22.
 */
function frontEndTechnology(){
    this.navItem = $("#navBar03");
}
frontEndTechnology.prototype.navActive = function(){
    this.navItem.addClass('active');
};

function main(){
    var frontET = new frontEndTechnology();
    frontET.navActive();
}
main();