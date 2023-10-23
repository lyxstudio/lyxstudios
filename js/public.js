$(function(){
    // 点击菜单按钮切换
    $(".hdMenu").click(function(){
        $(".bodyBg").toggle();//显示与隐藏
        $(this).toggleClass("active")//
        $(".hdNav").slideToggle()//上划，下划
    })

    $(".bodyBg").click(function(){
        $(this).hide();
        $(".hdMenu").removeClass("active");
        $(".hdNav").slideUp();
        
    })

    // 当前页面导航部分的高亮显示 或location.href.lastIndexOf("/")
    var path=location.href.split("/")[location.href.split("/").length-1]
    console.log(path)
    // var path=location.href.substring(location.href.lastIndexOf("/")+1)
    $(".hdNav li a[href='"+path+"']").parent().addClass("active")

    // 监听页面宽度：因为此时页面变大后导航条会不显示 display：none
    $(window).resize(function(){
        // console.log($(this).width)//内层宽度  outwidth外层宽度
        if($(this).width()>992){
            $(".bodyBg").hide();
            $(".hdNav").show();
            // $(".hdMenu").removeClass("active")
        }
        else{
            $(".hdNav").hide();
        }
    })
})