// ==UserScript== 
// @name   悬浮翻页
// @description  页面嵌入悬浮按钮，方便小说阅读翻页.
// @run-at   document-end
// ==/UserScript==


/*刷新.翻页按钮*/
{var totn=document.createElement("div");
totn.innerHTML="↻";
totn.setAttribute
("style","font-size:6vw !important;width:10vw !important;height:10vw !important;line-height:10vw !important;text-align:center !important;background-color:rgba(250,250,250,0.5) !important;box-shadow:0px 0px 1px rgba(0,0,0,0.5) !important;position:fixed !important;bottom:50vh !important;right:3.3vw !important;z-index:99999 !important;border-radius:100% !important;");
totn.onclick=function (){window.location.reload();};
document.getElementsByTagName("html").item(0).appendChild(totn);};
{var uptotn=document.createElement("div");
uptotn.innerHTML="▽";
uptotn.setAttribute("style","font-size:5vw !important;width:10vw !important;height:10vw !important;line-height:10vw !important;text-align:center !important;background-color:rgba(250,250,250,0.5) !important;box-shadow:0px 0px 1px rgba(0,0,0,0.5) !important;position:fixed !important;bottom:42vh !important;right:3.3vw !important;z-index:99999 !important;border-radius:100% !important;");
uptotn.onclick=function (){window.scrollBy(0,460);
};
document.getElementsByTagName("html").item(0).appendChild(uptotn);
var Dtotn=document.createElement("div");
Dtotn.innerHTML="△";
Dtotn.setAttribute("style","font-size:5vw !important;width:10vw !important;height:10vw !important;line-height:10vw !important;text-align:center !important;background-color:rgba(250,250,250,0.5) !important;box-shadow:0px 0px 1px rgba(0,0,0,0.5) !important;position:fixed !important;bottom:58vh !important;right:3.3vw !important;z-index:99999 !important;border-radius:100% !important;");
Dtotn.onclick=function (){window.scrollBy(0,-460);
};
document.getElementsByTagName("html").item(0).appendChild(Dtotn);
};