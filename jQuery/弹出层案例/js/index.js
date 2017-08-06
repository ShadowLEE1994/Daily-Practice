
// $(document).ready(function($){
// 	// 登陆链接事件
// 	$('#loginLink').click(function(){
// 		// 显示弹出层遮罩
// 		$('#layer-mask').show();
// 		// 显示弹出层窗体
// 		$('#layer-pop').show();
// 		// 弹出层关闭按钮绑定事件
// 		$('#layer-close').click(function(){
// 			// 弹出层关闭
// 			$('#layer-mask').hide();
// 			$('#layer-pop').hide();	
// 		});
// 	});
$(document).ready(function($){
	$('#loginLink').click(function(){
		// 获取弹出层显示代码
		var loginHtml=$('#loginHtml').html();
    	showLayer(loginHtml,400,300,closeCallback);
    	submit();
    	
});
	




	function submit(){
	$('#submit').click(function(){
		// 注册表单校验
    	var password=$("input[name='password']").val();
    	var repassword=$("input[name='repassword']").val();
    	if(password==='imooc'&&repassword==='imooc'){
    		alert("登陆成功");
    	}else{
    		$(".error-msg").html("请输入正确的密码");
    	}
	});
};
	function closeCallback(){
		$(".error-msg").html("");
	}
	

	// 显示弹出层
	function showLayer(html,width,height,closeCallback){
		// 显示弹出层遮罩
		$('#layer-mask').show();
		// 显示弹出层窗体
		$('#layer-pop').show();
		// 设置弹出层窗体样式
		$('#layer-pop').css({
			width: width,
			height: height
		});
		// 填充弹出层窗体内容
		$("#layer-content").html(html);
		// 弹出层关闭按钮绑定事件
		$('#layer-close').click(function(){
			// 弹出层关闭
			hideLayer();
			// 关闭的回调函数
			closeCallback();
	});
	};
	// 隐藏弹出层
	function hideLayer(){
		// 弹出层关闭
			$('#layer-mask').hide();
			$('#layer-pop').hide();	
};
});