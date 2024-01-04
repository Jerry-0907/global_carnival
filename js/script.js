$(function() {
    $('#fullpage').fullpage({
        // 导航
    menu: '#myMenu',
    paddingTop: '50px',
    lockAnchors: false,
    anchors:['firstPage', 'secondPage','thirdPage','fourthPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide','thirdPage','fourthPage'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
    onLeave: function(index, direction){
		if(index == 2) {
            $('.landmark').removeClass('animate__animated animate__heartBeat')
            console.log('不在第二页')
        }
	},
   /**
    * 滚动到某一屏后的回调函数
    * @param {Object} anchorLink    锚链接的名称
    * @param {Object} index   index 是序号，从1开始计算
    */
   afterLoad: function(anchorLink, index){
    if(index == 2){
        $('.landmark').addClass('animate__animated animate__heartBeat')
        console.log('在第二页')
    }
}
    })
})

// 第二屏 世界地图 图标
function enlargeAndTransform(element) {
    element.classList.add('square');
    element.querySelector('.landmark').style.display = 'none';
    element.querySelector('.content').style.display = 'block'; // 鼠标移上时显示内容
  }
  
  function shrinkAndRestore(element) {
    element.classList.remove('square');
    element.querySelector('.landmark').style.display = 'block';
    element.querySelector('.content').style.display = 'none'; // 鼠标移出时隐藏内容
  }

// 第二屏 第二页 轮播图
// <!-- Initialize Swiper -->
var swiper2 = new Swiper(".mySwiper2", {
    effect: "cards",
    grabCursor: true
  });

// 第三屏 第一页
function enlargeAndTransform2(element) {
    element.classList.add('square2');
    element.querySelector('.content2').style.display = 'block'; // 鼠标移上时显示内容
  }
  
  function shrinkAndRestore2(element) {
    element.classList.remove('square2');
    element.querySelector('.content2').style.display = 'none'; // 鼠标移出时隐藏内容
  }

// 第四屏 my-
function show_a() {
    var btn_c = document.getElementById("btn_c");
    var divobj1 = document.getElementById("div1");
    var divobj2 = document.getElementById("div2");
    divobj1.innerHTML = "参与的活动";
    divobj2.innerHTML = "发起的活动";
    document.getElementById("a1").style.display = "block";
    document.getElementById("a2").style.display = "block";
    document.getElementById("a3").style.display = "block";
    document.getElementById("a4").style.display = "none";
    document.getElementById("a5").style.display = "none";
}
function show_p() {
    var btn_g = document.getElementById("btn_g");
    var divobj1 = document.getElementById("div1");
    var divobj2 = document.getElementById("div2");
    divobj1.innerHTML = "";
    divobj2.innerHTML = "";
    document.getElementById("a1").style.display = "none";
    document.getElementById("a2").style.display = "none";
    document.getElementById("a3").style.display = "none";
    document.getElementById("a4").style.display = "block";
    document.getElementById("a5").style.display = "none";
}
function show_m() {
    var btn_i = document.getElementById("btn_i");
    var divobj1 = document.getElementById("div1");
    var divobj2 = document.getElementById("div2");
    divobj1.innerHTML = "";
    divobj2.innerHTML = "";
    document.getElementById("a1").style.display = "none";
    document.getElementById("a2").style.display = "none";
    document.getElementById("a3").style.display = "none";
    document.getElementById("a4").style.display = "none";
    document.getElementById("a5").style.display = "block";
}

      