!function e(t,a,r){function n(i,s){if(!a[i]){if(!t[i]){var o="function"==typeof require&&require;if(!s&&o)return o(i,!0);if(c)return c(i,!0);throw new Error("Cannot find module '"+i+"'")}var d=a[i]={exports:{}};t[i][0].call(d.exports,function(e){var a=t[i][1][e];return n(a||e)},d,d.exports,e,t,a,r)}return a[i].exports}for(var c="function"==typeof require&&require,i=0;i<r.length;i++)n(r[i]);return n}({1:[function(e,t,a){"use strict";function r(e,t){var a=$(t).find("ul"),r=$(t).find("li.slider"+e),n=$(r).width();$(a).animate({marginLeft:"-"+n*e},500)}var n=function(e){return e&&e.__esModule?e:{default:e}}(e("./toggle"));window.addEventListener("DOMContentLoaded",function(){function e(e,t){return e.replace(/\{([\w\.]*)\}/g,function(e,a){for(var r=a.split("."),n=t[r.shift()],c=0,i=r.length;c<i;c++)n=n[r[c]];return void 0!==n&&null!==n?n:""})}function t(){i.classList.add("preloader--active")}function a(){i.classList.remove("preloader--active")}var r={btn:document.getElementById("menu-btn"),layout:document.getElementById("main-menu"),activeClassLayout:"main-menu--active",activeClassButton:"menu-btn--active"};new n.default(r);var c=[{title:"Red Seat",url:"google.com",imgPath:"img/redSeat.png"},{title:"Dark Seat",url:"amazon.com",imgPath:"img/darkSeat.png"},{title:"Green Seat",url:"yahoo.com",imgPath:"#"},{title:"Hi there",url:"linkedin.com",imgPath:"#"}],i=document.getElementById("preloader");null!==document.getElementById("search")&&function(){var r=document.getElementById("search"),n=document.getElementById("form-reset"),i=document.querySelector(".trade-list"),s=document.querySelector(".count"),o=function(e,r){""!==e?(t(),setTimeout(function(){a();var t=c.filter(function(t){return t.title.toLowerCase().indexOf(e.toLowerCase())>-1});r(t)},1500)):r([])},d=function(t){for(;i.firstChild;)i.removeChild(i.firstChild);var a=t.length;s.textContent=a,document.querySelector(".result-count").classList.add("result-count--active"),a<1&&""===r.value&&document.querySelector(".result-count").classList.remove("result-count--active"),document.querySelector(".search-form__reset").classList.add("search-form__reset--active"),a<1&&""===r.value&&document.querySelector(".search-form__reset").classList.remove("search-form__reset--active"),t.forEach(function(t){var a=document.createElement("li");a.classList.add("trade__item");var r=e(' <a href="{url}" class="trade__link">\n<img src="{imgPath}" alt="" class="trade__img">\n<span class="trade__deskr">{title}</span>\n</a>',t);i.appendChild(a),a.innerHTML=r})};n.addEventListener("click",function(e){r.value="",d([])}),r.addEventListener("keyup",function(e){var t=e.target.value.trim();o(t,d)})}();var s=[{cardTitle:"Read Seat 100",cardUrl:"google.com",cardImgPath:"img/darkSeat.png",cardDescr:"sadasdas",cardPrice:"$35",cardClass:"medium"},{cardTitle:"Blue Seat 200",cardUrl:"google.com",cardImgPath:"img/redSeat.png",cardDescr:"sadasdas",cardPrice:"$35",cardClass:"small"},{cardTitle:"green Seat 300",cardUrl:"google.com",cardImgPath:"img/red.jpg",cardDescr:"sadasdas",cardPrice:"$35",cardClass:"small"},{cardTitle:"rebecca Seat 1",cardUrl:"google.com",cardImgPath:"img/darkSeat.png",cardDescr:"sadasdas",cardPrice:"$35",cardClass:"large"},{cardTitle:"rebecca Seat 2",cardUrl:"google.com",cardImgPath:"img/redSeat.png",cardDescr:"sadasdas",cardPrice:"$35",cardClass:"small"},{cardTitle:"rebecca Seat 3",cardUrl:"google.com",cardImgPath:"img/red.jpg",cardDescr:"sadasdas",cardPrice:"$35",cardClass:"medium"},{cardTitle:"rebecca Seat 4",cardUrl:"google.com",cardImgPath:"img/darkSeat.png",cardDescr:"sadasdas",cardPrice:"$35",cardClass:"medium"}],o=s.length,d=document.querySelector(".products__grid-wrap"),l=0;document.querySelector(".products__load-more").addEventListener("click",function(e){for(var r=0,n=l;n<s.length;n++)!function(e){var n="";if(r<2&&l<o){var c=s[e];n=nunjucks.render("./templates/"+c.cardClass+"-card.njk",c),r++,l++}t(),setTimeout(function(){a(),d.innerHTML+=n},1500),l==o&&$(".products__load-more").hide(500)}(n)})}),$(document).ready(function(){$(".slider").each(function(){var e=$(this);$(e).append("<div class='nav'></div>"),$(e).find("li").each(function(){$(e).find(".nav").append("<span rel='"+$(this).index()+"'></span>"),$(this).addClass("slider"+$(this).index())}),$(e).find("span").first().addClass("on")})}),$(document).on("click",".slider .nav span",function(){var e=$(this).closest(".slider");return $(e).find("span").removeClass("on"),$(this).addClass("on"),r($(this).attr("rel"),e),!1})},{"./toggle":2}],2:[function(e,t,a){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),c=function(){function e(t){var a=t.btn,n=t.layout,c=t.activeClassLayout,i=t.activeClassButton;r(this,e),this.btn=a,this.layout=n,this.activeClassLayout=c,this.activeClassButton=i,this._events()}return n(e,[{key:"_events",value:function(){var e=this;this.btn.addEventListener("click",function(){e.layout.classList.toggle(e.activeClassLayout),e.btn.classList.toggle(e.activeClassButton)})}}]),e}();a.default=c},{}]},{},[1]);