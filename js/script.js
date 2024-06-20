//获取轮播图片
var imglist=document.querySelectorAll(".banner .img-list>img");
//获取指定轮播按钮
var button=document.querySelectorAll(".banner .button>li");//这里获取多个li标签



/*
通过使用forEach方法，可以将函数传递给按钮集合中的每个元素，
并在函数内部使用value来代表当前的元素。
这样，在循环的每一次迭代中，value都会指向按钮集合中的一个具体的按钮元素。
*/

//循环按钮集合并绑定点击事件
button.forEach(function(Value,Index){
	Value.onclick=function(){

		//设置所有的图片的透明度为0，完全透明
		imglist.forEach(function(value,index){
			value.style.cssText="opacity:0;";
		})
		//设置所有按钮li的颜色为#fff 白色
		button.forEach(function(value,index){
			value.style.cssText="background:#fff;";
		})
		imglist[Index].style.cssText="opacity:1;";
		button[Index].style.cssText="background:#0caee8;";
	}

});



//获取需要添加遮罩的元素
var masklist=document.querySelectorAll(".mask");
//循环添加移入移出事件
masklist.forEach(function(Value,Index){
	Value.onmouseover=function(){
		Value.style.opacity="0";
	}
	Value.onmouseout=function(){
		Value.style.opacity="1";
	}
});