$(function(){
$('#fullpage').fullpage({
    menu:'#menu',
anchors: ['page1','page2','page2-1','page3','page3-1','page3-2','page4','page5'],
navigation:true,
navigationPosition:'right',
slideNavigation : true,
scrollingSpeed: 500,
keyboardScrolling: true,
paddingBottom:'0px',
paddingTop:'0px',
afterLoad:function(anchorLink,index){
    if(anchorLink == 'page3' || anchorLink == 'page3-1' || anchorLink == 'page3-2'){
        $('.menuDepth').addClass('on')

    }else{
        $('.menuDepth').removeClass('on')
    }
    var depth2 =$('.nav ul.fr li.fl'),
    title= $('.nav h1.fl');
    if(anchorLink !== 'page1'){
        title.addClass('act')
    }else{
        
        title.removeClass('act')
    }

}


});

$('#topBtn').on('click',function(){
    $('#fullpage').fullpage.moveTo(".section-01")
});


/* slogan typed */
var pFirst=$(".slogan .sloganBox .ptitle");
pFirst.typed({
strings:['<span class="typed01">소현 = ui/ux <br>소현 = 디자인<br>++; </span>'],
typeSpeed:150,
backDelay:200,
loop:true,
showCursor:false,
startDelay:100,
})

var footerContact=$(".footer .section-title .trans");
footerContact.typed({
strings:['<span>Contact Me!</span>'],
typeSpeed:150,
backDelay:2000,
loop:true,
showCursor:false,
startDelay:100,
})



/* progress bar */
moveBar();
function moveBar(){
$('.progress-bar').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
        duration: 1000,
        step: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
    });
    });
}



var announce=$("<div class='announce'>※마우스를 올리면 화면이 움직입니다.</div>");
var contentPic=$(".contentPic");

$(function(){
    contentPic.prepend(announce);


})



/* project screen move */
$('.computer > a.screen').hover(
    function(){
        var screen=$(this).innerHeight(), 
        img=$(this).find('img'),
        imgH=img.innerHeight();
        img.stop().animate({top:screen - imgH},2000)

    },function(){
        var img=$(this).find('img');
        img.stop().animate({top:0},2000)
    }
)
$('.mobile').hover(
    function(){
        var screen=$('.mobile .screen').innerHeight(), 
        img=$(this).find('img'),
        imgH=img.innerHeight();
        img.stop().animate({top:screen - imgH},2000)

    },function(){
        var img=$(this).find('img');
        img.stop().animate({top:0},2000)
    }
)
    


});

$(function(){
    var winH = $(window).innerHeight(); 
	var winW = $(window).innerWidth(); 
	var mainVideo = $("#mainVideo");
	var vidH = mainVideo.innerHeight(); 
	var vidW = mainVideo.innerWidth(); 

	mainVideo.get(0).autoplay = true;
	mainVideo.get(0).loop = 1; 
	mainVideo.get(0).playbackRate = 1;
	mainVideo.get(0).muted = true;


	setInterval(videoResizeFn,100);
	$(window).resize(function(){
		videoResizeFn();
	})
    
	function videoResizeFn() {
		winH = $(window).innerHeight();
		winW = $(window).innerWidth();
		vidH = mainVideo.innerHeight();
		vidW = mainVideo.innerWidth();
		$(".section-main-video").css({width: 100 + "%", height: winH});
		if (winH > vidH) {
			mainVideo.css({width: "auto", height: winH});
		}
		if (winW > vidW) {
			mainVideo.css({width: winW, height: "auto"});
		}
		mainVideo.css({marginLeft: (winW - vidW) / 2, marginTop: (winH - vidH) / 2});
	}

var emailCopy=$('button.copy');
emailCopy.click(function(){
    $('#emailCopy').select()
    document.execCommand("copy");
    alert('이메일이 복사되었습니다')
})



});

