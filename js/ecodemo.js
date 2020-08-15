$(function(){
    if(typeof mxbox != 'undefined'){
	document.getElementById("mxbox").innerHTML = "你已使用 小木匣 V" + mxbox.getVersion() + " 打开网页";
    }
});
