	/*导航栏滚动*/
	$(window).scroll(function(){
		headerInit();
	})
	
	function headerInit(){
		if($(this).scrollTop()>0){
			$("body").addClass("fixed-header-on")
		}else{
			$("body").removeClass("fixed-header-on")
		}
	}
	headerInit()

	/*首页底部背景*/
	var images=[ 
		"img/Ad01@2x.png", 
		"img/Ad02@2x.png", 
		"img/Ad03@2x.png"
	]
	$(".index").backstretch(images, { 
		fade: 1000, 
		duration: 3000 
	});
	/*页面动画开始*/
	if($("[data-animate-effect]").length>0){
		$("[data-animate-effect]").each(function(index,el){
			var $this=$(this);
			var currentEffect=$this.attr("data-animate-effect");
			setTimeout(function(){
				$this.removeClass("display-non-visible").addClass("display-visible")
				$this.addClass("animated" + currentEffect)
			},500)
		})
	}
	/*滚动监听*/
	$('body').scrollspy({ target: "#scroll-nav" });
	$(".navbar-nav a").click(function(){
		var target= $(this.hash);
//		console.log(target.offset().top)
		$("html").animate({
			scrollTop:target.offset().top
		},1500);
		return false;
	})
	$(".filter-isotope li a").click(function(){
		var filterVale=$(this).attr("data-filter");
		$(".isotope-container").isotope({filter:filterVale});
		$(this).parent().addClass("active").siblings().removeClass("active")
		return false;
	})
	
