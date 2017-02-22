$(function(){
	var do_num = 0;
	var key = true;
	var num_t;
	var this_num = 2;
	var this_th = 2;
	var dafe_code = ['18232323232','15673737373','18734430233','18335830283','15811284816'];
	var gift_code = [
		['18756561212'],
		['10110101010','20220202020','30330303030','40440404040','50550505050'],
		['11111111111','22222222222','33333333333','44444444444','55555555555']
	];
	var gift_name = ['一','二','三'];
	var random;
	dafe_code.forEach(function(v,i){
		dafe_code[i] = dafe_code[i].substring(0,3) + dafe_code[i].substring(7,11);
	})
	gift_code.forEach(function(v,i){
		v.forEach(function(m,n){
			gift_code[i][n] = m.substring(0,3) + m.substring(7,11);
		})
	})
	Array.prototype.remove = function(val) {
		var index = this.indexOf(val);
		if (index > -1) {
			this.splice(index, 1);
		}
	};
	$('.start').click(function(){
		$('.main-text').css({display:'none'});
		$('.start').css({display:'none'});
		$('.code_name').css({display:'block'});
		$('.num-list').css({display:'block'});
		$('.prompt').css({display:'block'});
	})
	$(document).keypress(function(e){
		if(key){
			if( do_num == 0 && e.keyCode == 32){
				codechage();
				do_num = 1;
			}else if(do_num == 1 && e.keyCode == 32){
				clearInterval(num_t);
				if(gift_code[this_num].length == 0){
					this_num -= 1;
				}
				random = parseInt(Math.random()*gift_code[this_num].length);
				$('.num-list .li-num').each(function(i){
					this.innerHTML = gift_code[this_num][random][i];
				})
				gift_code[this_num].remove(gift_code[this_num][random]);
				$('.prompt .prompttwo').text(gift_code[this_num].length)
				do_num = 2;
			}else if(do_num == 2 && e.keyCode == 32){
				if(gift_code[this_num].length == 0){
					this_th -= 1;
				}
				if(this_num == 0){
					$('.code_name').css({display:'none'});
					$('.num-list').css({display:'none'});
					$('.prompt').css({display:'none'});
					$('.gift-end').css({display:'block'});
					do_num = 3;
					key = false;
				}else{
					$('.gift_this').text(gift_name[this_th]+'等奖中奖号码');
					$('.prompt .promptone').text(gift_name[this_th]);
					$('.prompt .prompttwo').text(gift_code[this_th].length)
				}
				codechage();
				do_num = 1;
			}
		}
	})
	$(document).click(function(){
		if( key ){
			if( do_num == 0 ){
				codechage();
				do_num = 1;
			}else if(do_num == 1){
				clearInterval(num_t);
				if(gift_code[this_num].length == 0){
					this_num -= 1;
					if(this_num < 0){
						$('.code_name').css({display:'none'});
						$('.num-list').css({display:'none'});
						$('.prompt').css({display:'none'});
						$('.gift-end').css({display:'block'});
						do_num = 3;
					}
				}
				random = parseInt(Math.random()*gift_code[this_num].length);
				$('.num-list .li-num').each(function(i){
					this.innerHTML = gift_code[this_num][random][i];
				})
				gift_code[this_num].remove(gift_code[this_num][random]);
				$('.prompt .prompttwo').text(gift_code[this_num].length);
				do_num = 2;
			}else if(do_num == 2){
				if(gift_code[this_num].length == 0){
					this_th -= 1;
				}
				if(this_num == 0){
					$('.code_name').css({display:'none'});
					$('.num-list').css({display:'none'});
					$('.prompt').css({display:'none'});
					$('.gift-end').css({display:'block'});
					do_num = 3;
					key = false;
				}else{
					$('.gift_this').text(gift_name[this_th]+'等奖中奖号码');
					$('.prompt .promptone').text(gift_name[this_th]);
					$('.prompt .prompttwo').text(gift_code[this_th].length)
				}
				codechage();
				do_num = 1;
			}
		}
	})
	function codechage(){
		num_t = setInterval(function(){
			random = parseInt(Math.random()*5);
			$('.num-list .li-num').each(function(i){
				this.innerHTML = dafe_code[random][i];
			})
		},50)
	}

	window.onresize = resize;
	function resize(){
		var height = window.innerHeight;
		var img_height = 734;
		var n = height / img_height;
		$('body').css({'-webkit-transform': 'scale(' + n + ')','transform': 'scale(' + n + ')'});
	}
	resize();
})