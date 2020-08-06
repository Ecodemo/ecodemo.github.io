// ==UserScript==// @name         clicli// @namespace    http://tampermonkey.net/// @version      1.0// @description  try to take over the world!// @author       You// @match        https://api.clicli.us/*// @grant        none// ==/UserScript==
(function() {     
var integrityurl = window.location.href;  
if (integrityurl.indexOf('clicli.us') < 0) {
        return;
    }
  var data = document.body.innerHTML;    
  data = data.replace(/<.*?>/g, '');   
   var jsonObj = JSON.parse(data);    
   if(String(integrityurl).match(/quan/))
   {
   document.body.innerHTML = '<!DOCTYPE html><html itemscope itemtype="http://schema.org/WebPage" class="ua-chrome ua-mobile "><head><meta charset="UTF-8"><title></title><meta name="google-site-verification" content="ok0wCgT20tBBgo9_zat2iAcimtN4Ftf5ccsh092Xeyw" /><meta name="viewport"    content="width=device-width, height=device-height, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"><meta name="format-detection" content="telephone=no"><style>    html,    body {      margin: 0;      padding: 0;      width: 100%;      height: 100%;      overflow: hidden;    }    .playerBox {      width: 90vw;      height: 60vh;      margin: 0px auto;      margin-top: 20vh;      text-align: center;      line-height: 60vh;      color: #fff;    }    .button {      background-color: #f44336;            height: 150px;      width: 250px;      border: none;      color: white;      padding: 15px 32px;      text-align: center;      text-decoration: none;      display: inline-block;      font-size: 16px;      cursor: pointer;      border-radius: 4px;    }</style><link rel="stylesheet" href="https://img3.doubanio.com/misc/mixed_static/72312681dbda0a84.css"></head><body ontouchstart=""><div id="playerBox" class="playerBox"><a href="'+integrityurl.replace(/.*=/,'')+'"><button class="button" href="#" style="font-size:30px">立即播放</button></a></div></body></html>';
    
       
   }
   
   else{
   if(String(integrityurl).match(/url/)) 
       
       document.body.innerHTML = '<!DOCTYPE html><html itemscope itemtype="http://schema.org/WebPage" class="ua-chrome ua-mobile "><head><meta charset="UTF-8"><title></title><meta name="google-site-verification" content="ok0wCgT20tBBgo9_zat2iAcimtN4Ftf5ccsh092Xeyw" /><meta name="viewport"    content="width=device-width, height=device-height, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"><meta name="format-detection" content="telephone=no"><style>    html,    body {      margin: 0;      padding: 0;      width: 100%;      height: 100%;      overflow: hidden;    }    .playerBox {      width: 90vw;      height: 60vh;      margin: 0px auto;      margin-top: 20vh;      text-align: center;      line-height: 60vh;      color: #fff;    }    .button {      background-color: #f44336;            height: 150px;      width: 250px;      border: none;      color: white;      padding: 15px 32px;      text-align: center;      text-decoration: none;      display: inline-block;      font-size: 16px;      cursor: pointer;      border-radius: 4px;    }</style><link rel="stylesheet" href="https://img3.doubanio.com/misc/mixed_static/72312681dbda0a84.css"></head><body ontouchstart=""><div id="playerBox" class="playerBox"><a href="'+jsonObj.url+'"><button class="button" href="#" style="font-size:30px">立即播放</button></a></div></body></html>';

       else{
   if(String(integrityurl).match(/video/))
   var li='';
   
   for(var i=0;i<jsonObj.videos.length;i++){
   var li =li+'<a href="https://jx.clicli.us/jx?url='+ jsonObj.videos[i].content+'"><button class="button" href="#"><font style="font-size:20px;text-align:center;" >'+jsonObj.videos[i].oid+'  '+jsonObj.videos[i].title+'</font></button></a>';        
   }   
   
    var style='<style>a{text-decoration:none;color:#000;text-align:center;}.button {outline:none;background-color: #edaced;height: 30px;width:100%;border: 1px;color: white;text-align: left;  text-decoration: none; display: inline-block; margin:5px;border-radius:20px }</style>'
    document.body.innerHTML = '<!DOCTYPE html><html itemscope itemtype="http://schema.org/WebPage" class="ua-chrome ua-mobile "><head><meta charset="UTF-8"><title></title><meta name="google-site-verification" content="ok0wCgT20tBBgo9_zat2iAcimtN4Ftf5ccsh092Xeyw" /><meta name="viewport"    content="width=device-width, height=device-height, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"><meta name="format-detection" content="telephone=no">'+style+'</head><body><div align="center">'+li+'</div></body></html>';  
   }
   
  
 }
    })();