$(document).ready(function(){
	$("#personalx").mouseover(function(){
		$("#pp").show();
	}).mouseout(function(){
		$("#pp").hide();
	});
	$("#pp").mouseover(function(){
		$("#pp").show();
	}).mouseout(function(){
		$("#pp").hide();
	});
	var pages=4,
		i=1,
		$list=$(".list_content"),
		$l_width=$(".list").width();
	$("#lar").click(function(){
		if (!$list.is(":animated"))
		{
			if (i!=1)
			{
				$list.animate({left:"+="+$l_width});
				i--;
			}
			else
			{
				$list.animate({left:"-="+$l_width*(pages-1)});
				i=4;
			}
		}
		return false;
	});
	$("#rar").click(function(){
		if (!$list.is(":animated"))
		{
			if (i!=pages)
			{
				$list.animate({left:"-="+$l_width});
				i++;
			}
			else
			{
				$list.animate({left:"+="+$l_width*(pages-1)});
				i=1;
			}
		}
		return false;
	});
	$("#mytao").mouseover(function(){
			$("#shopcar").show();
		}).mouseout(function(){
			$("#shopcar").hide();
		});
	$("#myshine").mouseover(function(){
			$("#shine").show();
			$("#myshine i img").attr("src","img/shou2.png");
		}).mouseout(function(){
			$("#shine").hide();
			$("#myshine i img").attr("src","img/shou.png");
		});
	$("#seller").mouseover(function(){
			$("#shop").show();
		}).mouseout(function(){
			$("#shop").hide();
		});
	$("#connect").mouseover(function(){
			$("#server").show();
		}).mouseout(function(){
			$("#server").hide();
		});
	var x=10;
	var y=10
	var $move1=$("#msg_wri");
	var $move2=$("#msg_set");
	var $pmove=$(".msgbox_bot_left");
	$move1.mouseover(function(e){
		var msg="意见反馈";
		var mdiv="<div id='imove1'>"+msg+"</div>";
		$pmove.append(mdiv);
		$("#imove1").css({
			"top":(e.pageY-306)+"px",
			"left":(e.pageX-132)+"px"
		}).addClass("move").show("fast");
	}).mouseout(function(){
		$("#imove1").remove();
	});
	$move2.mouseover(function(e){
		var msg="消息设置";
		var mdiv="<div id='imove2'>"+msg+"</div>";
		$pmove.append(mdiv);
		$("#imove2").css({
			"top":(e.pageY-306)+"px",
			"left":(e.pageX-129)+"px"
		}).addClass("move").show("fast");
	}).mouseout(function(){
		$("#imove2").remove();
	});
	$("#mail").mouseover(function(){
		$(".msgbox").show();
	}).mouseout(function(){
		$(".msgbox").hide();
	});
	$("#mynav").mouseover(function(){
		$(".nav").show();
	}).mouseout(function(){
		$(".nav").hide();
	});
	$("#search_more").mouseover(function(){
		$("#search_more i").css("background","url(img/mo2.png)");
	}).mouseout(function(){
		$("#search_more i").css("background","url(img/mo.png)");
	});
	$(".mtao").click(function(){
		var $sp=$(this).siblings().children();
		var $btn=$(".sebtn");
		$sp.css({"color":"black","background-color":"white"});
		$(this).children().css({"color":"white","background-color":"#ff5400"});
		$(".ttb").css("border-color","#ff5400");
		$btn.css("background-color","#ff5400");
		$("#search_more").show();
		return false;
	});
	$("#tml").click(function(){
		var $btn=$(".sebtn");
		var $sp=$(this).siblings().children();
		$sp.css({"color":"black","background-color":"white"});
		$(this).children().css({"color":"white","background-color":"#c60000"});
		$(".ttb").css("border-color","#c60000");
		$btn.css("background-color","#c60000");
		$("#search_more").hide();
		return false;
	});
	//左边导航栏效果
	var $navs=$(".mid_nav_market li"),
		$mod=$(".mid_nav_more"),
		$mar=$(".mid_nav_market"),
		$icon=$("#ishowmore");
				
	$mod.each(function(index){
		this.id=index;
	});
	$navs.each(function(index){
		this.id=index;
		var $cover=$(this).children();
		var $lists=$(this).siblings();
		var $cover1=$cover[$cover.length-1];
		var $icover=$($cover1);
		$(this).mouseover(function(){
			var tid=0;
			tid=this.id;
			$mar.css("background-color","#f9e6e6");
			$icon.hide();
			$icover.show();
			$lists.removeClass("mid_nav_market_showmore").addClass("mid_nav_market_li");
			$(this).addClass("mid_nav_market_showmore").removeClass("mid_nav_market_li");
			$mod.each(function(){
				if (tid==this.id)
				{
					$(this).show();
				}
			});
		}).mouseout(function(){
			var tid=0;
			tid=this.id;
			
			$(this).addClass("mid_nav_market_li").removeClass("mid_nav_market_showmore");
			$mar.css("background-color","#fff");
			$icon.show();
			$icover.hide();
			$mod.each(function(){
				if (tid==this.id)
				{
					$(this).hide();
				}
			});
		});
	});
	$mod.each(function(){
		$(this).mouseover(function(){
			$(this).show();
			var hid=this.id;
			$navs.each(function(){
				if (hid==this.id)
				{
					var $cover=$(this).children();
					var $lists=$(this).siblings();
					var $cover1=$cover[$cover.length-1];
					var $icover=$($cover1);
					$icon.hide();
					$icover.show();
					$mar.css("background-color","#f9e6e6");
					$lists.removeClass("mid_nav_market_showmore").addClass("mid_nav_market_li");
					$(this).addClass("mid_nav_market_showmore").removeClass("mid_nav_market_li");
				}
			});
			}).mouseout(function(){
				var hid=this.id;
				$navs.each(function(){
					if (hid==this.id)
					{
						var $cover=$(this).children();
						var $lists=$(this).siblings();
						var $cover1=$cover[$cover.length-1];
						var $icover=$($cover1);
						$(this).addClass("mid_nav_market_li").removeClass("mid_nav_market_showmore");
						$mar.css("background-color","#fff");
						$icon.show();
						$icover.hide();
					}
				});
				$(this).hide();
			});
		});
		var $midlist=$(".tabbox_list");
		var $midcontent=$(".tabbox_content");
		$midcontent.each(function(index){
			this.id=index;
		});
		$midlist.each(function(index){
			this.id=index;
			$(this).mouseover(function(){
				var $midlists=$(this).siblings();
				var kid=this.id;
				$midlists.removeClass("point");
				$(this).addClass("point");
				$midcontent.each(function(){
					if (kid==this.id)
					{
						var $midcontents=$(this).siblings();
						$midcontents.hide();
						$(this).show();
					}
				});
				
			});
		});
		$(".person_btn").mouseover(function(){
			$(this).css("background-color","#f22d00");
		}).mouseout(function(){
			$(this).css("background-color","#fe4400");
		});
		var $jump=$(".icon_list li");
		var $cha=$(".chargebox");
		$jump.each(function(index){
			this.id=index;
			$(this).mouseover(function(){
				var $img=$(this).find("img");
				if (this.id<4)
				{
					var $phone=$(".cphone");
					$phone.css("height",76);
					$phone.find("img").attr("src","img/sphone.png");
					if (!$img.is(":animated"))
					{
						$img.animate({top:"-=50",opacity:"0"},100,function(){
							$img.css("top",30);
							$img.animate({top:"-=30",opacity:"1"},100);
						});	
					}
					if (this.id==0)
					{
						var $first=$(".phone");
						$first.siblings().hide();
						$(this).siblings().css("border-color","#eeeeee");
						$(this).css({"border-color":"#fe5400"});
						$(this).css("border-bottom-color","#fff");
						$cha.show();
						$first.show();
						$first.find(".charge_close").click(function(){
							$cha.hide();
							$first.hide();
							$phone.css({"border-color":"#eeeeee","height":154});
							$phone.find("img").attr("src","img/phone.png");
							$jump.css("border-color","#eeeeee");
						});
					}
					if (this.id==1)
					{
						var $second=$(".game");
						$second.siblings().hide();
						$(this).siblings().css("border-color","#eeeeee");
						$(this).css({"border-color":"#fe5400"});
						$(this).css("border-bottom-color","#fff");
						$cha.show();
						$second.show();
						$second.find(".charge_close").click(function(){
							$cha.hide();
							$second.hide();
							$phone.css({"border-color":"#eeeeee","height":154});
							$phone.find("img").attr("src","img/phone.png");
							$jump.css("border-color","#eeeeee");
						});
					}
					if (this.id==2)
					{
						var $third=$(".travel");
						$third.siblings().hide();
						$(this).siblings().css("border-color","#eeeeee");
						$(this).css({"border-color":"#fe5400"});
						$(this).css("border-bottom-color","#fff");
						$cha.show();
						$third.show();
						$third.find(".charge_close").click(function(){
							$cha.hide();
							$second.hide();
							$phone.css({"border-color":"#eeeeee","height":154});
							$phone.find("img").attr("src","img/phone.png");
							$jump.css("border-color","#eeeeee");
						});
					}
					if (this.id==3)
					{
						var $fourth=$(".safe");
						$fourth.siblings().hide();
						$(this).siblings().css("border-color","#eeeeee");
						$(this).css({"border-color":"#fe5400"});
						$(this).css("border-bottom-color","#fff");
						$cha.show();
						$fourth.show();
						$fourth.find(".charge_close").click(function(){
							$cha.hide();
							$fourth.hide();
							$phone.css({"border-color":"#eeeeee","height":154});
							$phone.find("img").attr("src","img/phone.png");
							$jump.css("border-color","#eeeeee");
						});
					}
				}
				else
				{
					if (!$img.is(":animated"))
					{
						$img.animate({top:"-=50",opacity:"0"},100,function(){
							$img.css("top",30);
							$img.animate({top:"-=30",opacity:"1"},100);
						});	
					}
				}
			});
		});
		var $ticket=$(".travel .charge_list_top li");
		var $show=$(".showbox");
		$ticket.each(function(index){
			this.id=index;
			$(this).mouseover(function(){
				if (this.id==0)
				{
					if (!$show.is(":animated"))
					{
						$show.animate({left:'0px'},"fast");
					}
				}
				if (this.id==1)
				{
					if (!$show.is(":animated"))
					{
						$show.animate({left:'-290px'},"fast");
					}
				}
				if (this.id==2)
				{
					if (!$show.is(":animated"))
					{
						$show.animate({left:'-580px'},"fast");
					}
				}
				if (this.id==3)
				{
					if (!$show.is(":animated"))
					{
						$show.animate({left:'-870px'},"fast");
					}
				}
				if (this.id==4)
				{
					if (!$show.is(":animated"))
					{
						$show.animate({left:'-1160px'},"fast");
					}
				}
			});
		});
		var $safes=$(".safe .charge_list_top li");
		var $sshow=$(".safe_box_show");
		$safes.each(function(index){
			this.id=index;
			$(this).mouseover(function(){
				if (this.id==0)
				{
					if (!$sshow.is(":animated"))
					{
						$sshow.animate({left:'0px'},"fast");
					}
				}
				if (this.id==1)
				{
					if (!$sshow.is(":animated"))
					{
						$sshow.animate({left:'-290px'},"fast");
					}
				}
				if (this.id==2)
				{
					if (!$sshow.is(":animated"))
					{
						$sshow.animate({left:'-580px'},"fast");
					}
				}
				if (this.id==3)
				{
					if (!$sshow.is(":animated"))
					{
						$sshow.animate({left:'-870px'},"fast");
					}
				}
				if (this.id==4)
				{
					if (!$sshow.is(":animated"))
					{
						$sshow.animate({left:'-1160px'},"fast");
					}
				}
			});
		});
		var $phones=$(".phone .charge_list_top li");
		var $pshow=$(".phone_showbox");
		$phones.each(function(index){
			this.id=index;
			$(this).mouseover(function(){
				if (this.id==0)
				{
					if (!$pshow.is(":animated"))
					{
						$pshow.animate({left:'0px'},"fast");
					}
				}
				if (this.id==1)
				{
					if (!$pshow.is(":animated"))
					{
						$pshow.animate({left:'-290px'},"fast");
					}
				}
			});
		});
		var $games=$(".game .charge_list_top li");
		var $gshow=$(".game_showbox");
		$games.each(function(index){
			this.id=index;
			$(this).mouseover(function(){
				if (this.id==0)
				{
					if (!$gshow.is(":animated"))
					{
						$gshow.animate({left:'0px'},"fast");
					}
				}
				if (this.id==1)
				{
					if (!$gshow.is(":animated"))
					{
						$gshow.animate({left:'-290px'},"fast");
					}
				}
				if (this.id==2)
				{
					if (!$gshow.is(":animated"))
					{
						$gshow.animate({left:'-580px'},"fast");
					}
				}
				if (this.id==3)
				{
					if (!$gshow.is(":animated"))
					{
						$gshow.animate({left:'-870px'},"fast");
					}
				}
			});
		});
});
