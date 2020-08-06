// ==UserScript== 
// @name   回到顶/底部
// @description  
// @match   *
// @require   file:///meta_webapp/1586529073.js
// @run-at   document-end
// ==/UserScript==


(function() {
if(document.getElementById('toTopLikeKuAn')){

}else{
function toTopLikeKuAn() {
		var toTopBtn = document.createElement("div");
		toTopBtn.id = "toTopBtn";
		toTopBtn.setAttribute("style","font-size:4vw !important;width:10vw !important;height:10vw !important;line-height:10vw !important;text-align:center !important;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABD0lEQVR42u3bMRLCMAwFUbz3v7MpKKACkvhLzsyqcCntO4DHfNx7eAgQIECAAAECBAgQIECAAAECBAgQIOBzxhzzxoBXfJ5AMr+CQDY/TyCdnyaQz88SqMhPEqjJzxGoyk8RyOXPMUeeQC7//SYJJPMrCGTz8wTS+WkC+fwsgYr8JIGa/ByBqvwUgbr8DIHK/ASB2vz1BKrzVxOoz19LoCN/JYGe/HUEuvJXEejLX0OgM38Fgd786wS6868S6M+/RmCH/CsE9sg/T2CX/LME9sk/R2Cn/DME/llSl3/8Or+X1OYfvc6vJfX5x67zfUlP/pHrwx8cAgQIECBAgAABAgQIECBAgAABAgQIECCgfJ7DZZC9LC8fDAAAAABJRU5ErkJggg==') no-repeat center center !important;background-size:3vw 3vw !important;background-color:rgba(250,250,250,0.9) !important;box-shadow:0px 1px 1px rgba(0,0,0,0.4);color:#000 !important;position:fixed !important;bottom:5vh !important;right:45vw !important;z-index:99999999999999999 !important;border-radius:100% !important;display:none;");
		document.body.appendChild(toTopBtn);
};
function isScrollToTop() {
	var toTopTimer;
	var theBody = document.getElementsByTagName('body')[0];
	var topTopBtn = document.getElementById('toTopBtn');
	document.ontouchstart = function (e) {
		if (toTopTimer) {
			clearTimeout(toTopTimer);
		};
		mystartY = e.changedTouches[0].clientY;
	};
	document.ontouchmove = function (e) {
		myendY = e.changedTouches[0].clientY;
		var myY = myendY - mystartY;
		if (myY > 0){
			toTopBtn.style.opacity = "1";
			toTopBtn.style.display = "block";
			toTopBtn.style.transform = "rotateZ(0deg)";
			toTopBtn.style.boxShadow = "0px 1px 1px rgba(0,0,0,0.4)";
			toTopBtn.onclick = function () {
				window.scrollTo(0,0);
				this.style.display = "none";
				toTopBtn.removeEventListener('click',this,false);
			};
		} else if (myY < 0) {
			toTopBtn.style.opacity = "1";
			toTopBtn.style.display = "block";
			toTopBtn.style.transform = "rotateZ(180deg)";
			toTopBtn.style.boxShadow = "0px -1px 1px rgba(0,0,0,0.4)";
			toTopBtn.onclick = function () {
				window.scrollTo(0, document.body.scrollHeight);	
				this.style.display = "none";
				toTopBtn.removeEventListener('click',this,false);
			};
		}else {
			toTopBtn.style.display = "none";
		};
	};
	document.ontouchend = function (e) {
		toTopTimer = setTimeout(function () {
			toTopBtn.style.transitionProperty="opacity,background-color";
			toTopBtn.style.transitionDuration="500ms";
			toTopBtn.style.transitionTimingFunction = "linear";
			toTopBtn.style.opacity = "0";
			toTopBtn.style.backgroundColor = "rgba(200,200,200,1)";
			setTimeout(function() {
				toTopBtn.style.display = "none";
				toTopBtn.style.backgroundColor = "rgba(250,250,250,0.9)";
			},500);
		},3000);
	};
};
var isHaveToTopBtn;
isHaveToTopBtn = document.getElementById('toTopBtn');
if (!isHaveToTopBtn) {
	toTopLikeKuAn();
	isScrollToTop();
};

var pans= document.createElement('b');		
pans.id='toTopLikeKuAn';
document.body.appendChild(pans);

}
})();