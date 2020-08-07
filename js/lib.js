/*! Generate by Moelody. Fri Aug  7 20:28:12 2020*/
(function(p){p.fn.circleMagic=function(t){var o,a,n,r,e=!0,i=[],d=p.extend({color:"rgba(255,0,0,.5)",radius:10,density:0.3,clearOffset:0.2},t),l=this[0];function c(){e=!(document.body.scrollTop>a);}
function s(){(o=l.clientWidth),(a=l.clientHeight),(l.height=a+"px"),(n.width=o),(n.height=a);}
function h(){if(e)for(var t in(r.clearRect(0,0,o,a),i))i[t].draw();requestAnimationFrame(h);}
function f(){var t=this;function e(){(t.pos.x=Math.random()*o),(t.pos.y=a+100*Math.random()),(t.alpha=0.1+Math.random()*d.clearOffset),(t.scale=0.1+0.3*Math.random()),(t.speed=Math.random()),"random"===d.color?(t.color="rgba("+
Math.floor(255*Math.random())+
", "+
Math.floor(0*Math.random())+
", "+
Math.floor(0*Math.random())+
", "+
Math.random().toPrecision(2)+
")"):(t.color=d.color);}
(t.pos={}),e(),(this.draw=function(){t.alpha<=0&&e(),(t.pos.y-=t.speed),(t.alpha-=5e-4),r.beginPath(),r.arc(t.pos.x,t.pos.y,t.scale*d.radius,0,2*Math.PI,!1),(r.fillStyle=t.color),r.fill(),r.closePath();});}!(function(){(o=l.offsetWidth),(a=l.offsetHeight),(function(){var t=document.createElement("canvas");(t.id="canvas"),(t.style.top=0),(t.style.zIndex=0),(t.style.position="absolute"),l.appendChild(t),(t.parentElement.style.overflow="hidden");})(),((n=document.getElementById("canvas")).width=o),(n.height=a),(r=n.getContext("2d"));for(var t=0;t<o*d.density;t++){var e=new f();i.push(e);}
h();})(),window.addEventListener("scroll",c,!1),window.addEventListener("resize",s,!1);};})(jQuery);(function(){$("#page-header").circleMagic({radius:10,density:0.2,color:"rgba(255,255,255,.4)",clearOffset:0.99});})();(function(){let web_bg=document.getElementById("web_bg");let content_inner=document.getElementById("content-inner");let opacity=Cookies.get("opacity")||0.7;let bg=Cookies.get("bg");let animation=Cookies.get("animation");let type=Cookies.get("type");if(bg){web_bg.style.background=bg;web_bg.setAttribute("data-type",type);if(animation){web_bg.style.animation=animation;}}
function setColor(opacity){let light_bg_color="--light_bg_color: rgb(255, 255, 255,"+opacity+");";let dark_bg_color="--dark_bg_color: rgba(18,18,18,"+opacity+");";content_inner.setAttribute("style",light_bg_color+dark_bg_color);}
setColor(opacity);})();(function(){var top_up="<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-70px,-70px);' src='https://cdn.jsdelivr.net/gh/moelody/CDN/blog/up.gif' title='回到顶部' >";document.getElementById("go-up").innerHTML+=top_up;})();(function(){$(document).ready(function(e){$(".copyright").html('©2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fas fa-heartbeat"></i> Moelody');});})();(function(){let OriginTitle=document.title;let titleTime;document.addEventListener("visibilitychange",function(){if(document.hidden){$('[rel="icon"]').attr("href","/img/favicon.ico");document.title="不要看我！！";clearTimeout(titleTime);}else{$('[rel="icon"]').attr("href","/img/favicon.ico");document.title="(*´∇｀*) 呀~"+OriginTitle;titleTime=setTimeout(function(){document.title=OriginTitle;},2000);}});})();
