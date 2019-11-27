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