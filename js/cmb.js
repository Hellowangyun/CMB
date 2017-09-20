			var all = document.getElementsByTagName("*");
			var indexEle = document.getElementById("indexEle").getElementsByTagName("img");
			var indexPlane = document.getElementById("indexPlane").getElementsByTagName("img")[0];
			var wasStar = document.getElementById("wasStar");
			var oAudio = document.getElementsByTagName("audio")[0];
			var oMusic = document.getElementById("music");
			var bg = document.getElementsByClassName("swiper4-bg")[0];
			var bg2 = document.getElementsByClassName("swiper4-bg2")[0];
			var light=document.getElementsByClassName("light")[0];
			var flag = true;
			var flag1 = true;
			var arrow = document.getElementById("arrow");
			for(var i=0;i<all.length;i++){
				all[i].onclick = function(){
					oAudio.loop = "loop";
					if(flag1){
						oAudio.play();
						flag1 = false;
					}
				}
			}
			light.onclick = function(){
				bg.style.display = "none";
							
				var img1 = document.createElement("img");
				img1.src="img/introFlowers.png";
				img1.style.animation= "fadeIn 3s 1s both"
				bg2.appendChild(img1);
				var img2 = document.createElement("img");
				img2.src="img/weKnowYou.png";
				img2.style.animation= "fadeIn 3s 1s both"
				bg2.appendChild(img2);
							
			}
			document.documentElement.ontouchstart = function(){
				oAudio.loop = "loop";
				if(flag1){
					oAudio.play();
					flag1 = false;
				}
			}
			oMusic.ontouchend = function(){
				if(flag){
					oAudio.pause();
					oMusic.style.background = "url(img/musicBtnOff.png) no-repeat";
					oMusic.style.backgroundSize = "100%";
					flag = false;
				}else{
					oAudio.play();
					oMusic.style.background = "";
					flag = true;
				}
			}
			var mySwiper = new Swiper('.swiper-container1', {
				direction:'vertical',
				onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
					swiperAnimateCache(swiper); //隐藏动画元素 
					swiperAnimate(swiper); //初始化完成开始动画
					if(swiper.activeIndex==0){
						indexEle[0].addEventListener("webkitAnimationEnd",function(){
							this.style.animation = "zoomInOut 3s linear forwards infinite";
						},false)
						indexEle[1].addEventListener("webkitAnimationEnd",function(){
							this.style.animation = "zoomInOut 3s 0.4s linear forwards infinite";
						},false)
						indexEle[2].addEventListener("webkitAnimationEnd",function(){
							this.style.animation = "zoomInOut 3s 0.8s linear forwards infinite";
						},false)
						indexPlane.addEventListener("webkitAnimationEnd",function(){
							this.style.animation = "zoomInOut 3s 0.4s linear forwards infinite";
						},false)
					}
//					if(swiper.activeIndex==1){
//						wasStar.style.animation = "sildeInRightTop 3s 0.4s linear forwards";
//					}
				}, 
				onSlideChangeEnd: function(swiper){ 
					swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画		
					if(swiper.activeIndex==0){	
						indexEle[0].addEventListener("webkitAnimationEnd",function(){
							this.style.animation = "zoomInOut 3s linear forwards infinite";
						},false)
						indexEle[1].addEventListener("webkitAnimationEnd",function(){
							this.style.animation = "zoomInOut 3s 0.4s linear forwards infinite";
						},false)
						indexEle[2].addEventListener("webkitAnimationEnd",function(){
							this.style.animation = "zoomInOut 3s 0.8s linear forwards infinite";
						},false)
					}
//					if(swiper.activeIndex==1){
//						wasStar.style.animation = "sildeInRightTop 3s 0.4s linear forwards";
//					}
				}
			})