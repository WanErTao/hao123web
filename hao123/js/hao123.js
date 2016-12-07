$(function(){
	//邮箱登陆
	(function(){
		var oText =$('#text');
		var oPass =$('#pass');

		oText.focus(function(){
			if($(this).val()=='邮箱账号'){
				$(this).val('');
			}
		})
		oText.blur(function(){
			if($(this).val()==''){
				$(this).val('邮箱账号');
			}
		})
		oPass.focus(function(){
			if($(this).val()=='邮箱密码'){
				$(this).val('');
			}
		})
		oPass.blur(function(){
			if($(this).val()==''){
				$(this).val('邮箱密码');
			}
		})
	})();
	//选项卡切换
	(function(){
		var oUl =$('#subChange');
		var aLi=oUl.children();
		var aCont=$('#listnav').children();
		var aList =$('#listnav li');
		var oHot=$('.hot');
		aCont.hide().eq(0).show();
		aLi.each(function(index){
			$(this).hover(function(){
				aCont.css('display','none');
				aCont.eq(index).css('display','inline-block')
			})
		})

		aList.each(function(index){
			$(this).hover(function(index){
				aList.removeClass('active');
				aList.children('a').removeClass('a1');
				$(this).addClass('active');
				$(this).children('a').addClass('a1').next().removeClass('a1');
			})
		})
	})();
	//搜索框
	(function(){
		var iNow =0;
		var aLi =$('.logo_list li');
		var oSearch=$('.search_list');
		var aSearch_list=$('.search_list ul');
		var oBaidu_list=$('.baidu_search');
		var arrBaidu=['网页','音乐','视频','图片','贴吧','知道','新闻','地图'];
		aSearch_list.hide().eq(0).show();

		aLi.each(function(index){
			$(this).click(function(){
				iNow=index;
				oBaidu_list.val(arrBaidu[iNow])
			})
		})

		oBaidu_list.focus(function(){
			oSearch.css('display','inline-block');
			if($(this).val()==arrBaidu[iNow]){
				$(this).val('');
			}
			aSearch_list.hide().eq(iNow).css('display','inline-block');
		})

		oBaidu_list.blur(function(){
			oSearch.css('display','none');
			if($(this).val()==''){
				$(this).val(arrBaidu[iNow]);
			}
		})
	})();
	//无缝滚动
	(function(){
		var inow =0;
		var len =$('.run1 li').length;
		//将第一张图片复制黏贴到图片队列最后
		var clone =$('.run li').clone();
		$('.run1').append(clone);

		//点击left按钮的函数
		$('.rel_left').click(function(){
			inow--;
			if(inow==-1){
				inow=len;
				$('.run1').css({'left':inow*(-178)+'px'});
				inow--;
			}
			$('.run1').stop().animate({'left':inow*(-178)+'px'},500)
		})

		$('.rel_right').click(function(){
			moveR();
		})
		//自动播放
		var timer=setInterval(function(){
			moveR();
		},1000);

		//鼠标悬浮在图片上停止自动播放
		$('.run1').hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(function(){
				moveR();
			},1000);
		})

		//点击right按钮的函数
		function moveR(){
			inow++;
			if(inow==len+1){
				$('.run1').css({'left':'0'});
				inow=1;
			}
			$('.run1').stop().animate({'left':inow*(-178)+'px'},500)
		}
	})()
})