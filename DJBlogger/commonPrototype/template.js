/**
 * Created by Administrator on 2017/5/23.
 */
function template(){
    var footerComponent = Vue.extend({
        template:'<div class="text-center" id="footer">' +
            '<div id="footer-text">' +
            'Copyright © 2017' + '<a>' + ' Your Company Name ' + '</a>'+ ' | Designed by' + '<a>' + ' 代俊' +'</a>'+
            '</div>' +
            '</div>'
    });
    var headerComponent = Vue.extend({
        template:'<div id="header">' +
            '<form method="get" action="">' +
            '<input type="text" id="search-field" name="searchField">' +
            '<input type="submit" id="search-button" name="Search" value>' +
            '</form>' +
            '</div>'
    });
    var navComponent = Vue.extend({
        template:
            '<div class="container clearfix" id="nav" role="navigation">' +
            '<div class="nav" id="nav-content">' +
            '<ul class="nav nav-pills text-center row" id="nav-items">' +
            '<a href="../index/index.html">' +
            '<div class="col-xs-2 col-md-2 col-lg-2">' +
            '<li id="navBar01">' +
            '首页' +
            '</li>' +
            '</div>' +
            '</a>' +
            '<a href="../blogTemplate/blogTemplate.html">' +
            '<div class="col-xs-2 col-md-2 col-lg-2">' +
            '<li id="navBar02">' +
            '网站模板' +
            '</li>' +
            '</div>' +
            '</a>' +
            '<a href="../frontEndTechnology/frontEndTechnology.html">' +
            '<div class="col-xs-2 col-md-2 col-lg-2">' +
            '<li id="navBar03">' +
            '前端技术' +
            '</li>' +
            '</div>' +
            '</a>' +
            '<a href="../personalDiary/personalDiary.html">' +
            '<div class="col-xs-2 col-md-2 col-lg-2">' +
            '<li id="navBar04">' +
            '个人简历' +
            '</li>' +
            '</div>' +
            '</a>' +
            '<a href="../personalIntroduce/personalIntroduce.html">' +
            '<div class="col-xs-2 col-md-2 col-lg-2">' +
            '<li id="navBar05">' +
            '个人简介' +
            '</li>' +
            '</div>' +
            '</a>' +
            '<a href="../leaveMessage/leaveMessage.html">' +
            '<div class="col-xs-2 col-md-2 col-lg-2">' +
            '<li id="navBar06">' +
            '留言版' +
            '</li>' +
            '</div>' +
            '</a>' +
            '</ul>' +
            '</div>' +
            '</div>'
    });

    var backToTop = Vue.extend({
        template: '<div id="backToTop">' +
            '<img id="backToTop_img" src="../commonPrototype/images/gotop.gif">' +
            '<span id="backToTop_text">' + '返回顶部' + '</span>' +
            '</div>'
    });

//    注册
//Vue.component('footer-component',footerComponent);
//Vue.component('my-component',myComponent);
    var vm = new Vue({
        el: '#homepage',
        data:{
            dingCount: 0,
            caiCount: 0
        },
        components:{
            'footer-component': footerComponent,
            'header-component': headerComponent,
            'nav-component': navComponent,
            'backtotop-component': backToTop
        }
    });
}
template();
