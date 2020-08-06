// ==UserScript== 
// @name   自动夜间模式
// @description  
// @run-at   document-start
// ==/UserScript==



now = new Date(), hour = now.getHours();

if (hour == 0 || hour == 1 || hour == 2 || hour == 3 || hour == 4 || hour == 5 ||hour == 12 ||  hour == 19 || hour == 20 || hour == 21 || hour == 22 || hour == 23)
 {
javascript:{css=document.createElement("style");let t=`

html,body,form,nav,header {
	background-image: none !important;
	background-color: #363c47 !important;
	color: #c3bdbc!important;
	border-color: #212533!important;
	box-shadow: 0 0 0!important;
	text-shadow: 0 0 0!important;
}

div,html * {
	background-color: #363c47 !important;
	color: #c3bdbc!important;
	border-color: #212533!important;
	box-shadow: 0 0 0!important;
	text-shadow: 0 0 0!important;
}

p,span {
	background-color: transparent !important;
	color: #c3bdbc!important;
	border-color: #212533!important;
	box-shadow: 0 0 0!important;
	text-shadow: 0 0 0!important;
}

div:empty {
	background-color: transparent !important;
}

input,select,button,textarea {
	box-shadow: 0 0 0!important;
	color: #c3bdbc!important;
	background-color: #293037 !important;
	border-color: #212533!important;
}

a,a * {
	background-color: transparent !important;
	color: #b5a598!important;/* 链接颜色 */
	text-decoration: none!important;
	border-color: #212533!important;
	text-shadow: 0 0 0!important;
}

a:visited,a:visited * {
	color: #757170!important;/* 访问过的链接颜色 */
}

`;css.appendChild(document.createTextNode(t)),document.documentElement.appendChild(css)};
}