    //实现登录后的header页面的不同
	var login = document.getElementById('login');
	var shop = document.getElementById('shop');
	var username = window.localStorage.getItem('username');
	var password = window.localStorage.getItem('password');
		if(username&&password){
		   login.innerHTML = '<a href="javascript:;">'+username+' /</a><a href="javascript:;"> 退出</a>';
		}else{
		   login.innerHTML = '<a href="reg.html">登录 /</a><a href="login.html"> 注册</a>';
		}
	
		if(username&&password){
			   shop.innerHTML = '<a href="shop.html"><span class="iconfont icon-gouwudai"></span>&nbsp;购物袋</a>';
		}else{
			   shop.innerHTML = '<a href="reg.html"><span class="iconfont icon-gouwudai"></span>&nbsp;购物袋</a>';
		}
		//退出
		var out = document.getElementById('login').children[1];
		console.log(out);
		out.onclick = function(){
			window.localStorage.removeItem('username');
			window.localStorage.removeItem('password');
			window.open('reg.html');
		}
	
//导航栏
var nav = document.getElementById('nav');
var navfixde = document.getElementById('nav-fixde');
document.onscroll = function(){
	var top = nav.getBoundingClientRect().bottom;
	//当nav的底部距窗口顶部值<0时就显示navfixde,反之隐藏
	if(top<0){
		navfixde.style.display = 'block';
	}else{
		navfixde.style.display = 'none';
	}
	
}
//导航栏数据渲染
var lis = nav.getElementsByTagName('li');
var down = document.getElementById('down');
var content = document.getElementById('content');
Down(lis,down,content);
//固定导航栏数据渲染

var lisfixde = navfixde.getElementsByTagName('li');
var downfixde = document.getElementById('down-fixde');
var contentfixde = document.getElementById('content-fixde');
Down(lisfixde,downfixde,contentfixde);


/* 用途:用于导航页数据渲染及动画效果
lis：鼠标移入产生效果的li标签集
down:展示出来的部分,
content:展示部分的子标签 */
function Down(lis,down,content){
	Array.from(lis).forEach(function(el,i){
		lis[i].onclick = function(){
			var data = Data[i-1];
			lis[i].children[0].href = 'nav.html?name='+ data.name;
		}
		lis[i].onmouseenter = function(){
			content.innerHTML = '';
			if(i==0){
				return;
			}
			var dataList = Data[i-1].list;
			
			
			dataList.forEach(function(el,i){
				//生成list
				var list = document.createElement('div');
				list.className = 'list';
				//生成li
				var dataLi = dataList[i].classify;
				var ul = document.createElement('ul');
				var str = '';
				dataLi.forEach(function(el,i){
					
					str += '<li>'+
								'<dl>';
					for(var j=0;j<dataLi[i].length;j++){
							   str +=  '<dt><a href="">'+ dataLi[i][j].title +'</a></dt>';
								 //console.log(str);
							  }			
					str +=	'</dl>'+
							  '</li>';
							 
					
				})
				ul.innerHTML = str;
				list.innerHTML = `<h4>${dataList[i].title}</h4>`;
				list.appendChild(ul);
				content.appendChild(list);
			})
			down.style.height = '340px';
			down.onmouseenter = function(){
				down.style.height = '340px';
				//alert()
			}
			down.onmouseleave = function(){
				down.style.height = '0';
			}
		}
		lis[i].onmouseleave = function(){
			down.style.height = '0px';
		}
	})
}


//渲染商品列表
function setPage(page){
	var page_str =  '';
	page_ul.innerHTML = '';
	for(var i=0;i<data_arr.length;i++){
		if(i>=(16-1)*(page-1)&&i<=(16-1)*(page-1)+15){
			page_str += `<li>
							<a href="${data_arr[i].link}" target="_blank">
								<div class="img">
								<div>
									<img src="1" alt="" getsrc="${data_arr[i].img}">
								</div>
								</div>
								<div class="text">
									<p>${data_arr[i].miaoshu}</p>
									<p>
										<i>&#165;&nbsp;<span>${data_arr[i].xianjia}</span></i>
										<em>&#165;&nbsp;<span>${data_arr[i].yuanjia}</span></em>
										<b>&#10084;</b>
									</p>
								</div>
							</a>
						</li>`;
		}
	}
	page_ul.innerHTML = page_str;
}


//懒加载
var goods_lis = goods.getElementsByTagName('li');
for(var i=0;i<goods_lis.length;i++){//先判断一次让最开始有内容

	if(goods_lis[i].getBoundingClientRect().top<window.innerHeight){
		
		var good_img = goods_lis[i].querySelector('img');
		var getsrc = good_img.getAttribute('getsrc');
		good_img.src = getsrc;
		console.log(goods_lis[i]);
	}
}
document.onscroll = function(){
	//alert()
	for(var i=0;i<goods_lis.length;i++){
		if(goods_lis[i].getBoundingClientRect().top<window.innerHeight){
			console.log(goods_lis[i].getBoundingClientRect().top);
			var good_img = goods_lis[i].querySelector('img');
			var getsrc = good_img.getAttribute('getsrc');
			good_img.src = getsrc;
			console.log(goods_lis[i]);
		}
	}
}	