(()=>{var e={171:e=>{const t={init:function(){this.createHeader(),this.createContentDiv(),this.createSearchDiv(),this.createFooter(),document.getElementById("userInput").focus()},createHeader:function(){let e=document.createElement("div");e.id="header";let t=document.createElement("div");t.id="headerText",t.innerHTML="Current Weather",document.body.append(e),e.append(t)},createContentDiv:function(){let e=document.createElement("div");e.id="content",document.body.append(e),console.log("appended the thing")},createSearchDiv:function(){let e=document.getElementById("content"),t=document.createElement("div");t.id="searchDiv";let n=document.createElement("input");n.id="userInput",n.className="searchDivContents",n.value="London";let o=document.createElement("button");o.id="searchBtn",o.className="searchDivContents",o.innerHTML="Search",t.append(n),t.append(o),e.append(t)},createCards:function(e,t,n,o,a,c,i){console.log("Make the cards");let r=document.getElementById("content"),d=document.createElement("div");d.id="cardsContainer",r.append(d),function(e,t,n,o){let a=document.getElementById("cardsContainer");console.log("temp card");let c=document.createElement("div");c.id="card0",c.className="cards";let i=document.createElement("div");i.className="cardTitles",i.innerHTML="Temperature";let r=document.createElement("div");r.id="currentTemp",r.className="temps",r.innerHTML=e+"°";let d=document.createElement("div");d.id="highTemp",d.innerHTML=t+"°";let l=document.createElement("div");l.id="lowTemp",l.innerHTML=n+"°";let s=document.createElement("div");s.className="cardData",s.innerHTML="Feels like: "+o+"°";let m=document.createElement("div");m.id="highLowContainer",m.className="temps";let u=document.createElement("div");u.id="tempContainer",a.append(c),m.append(d),m.append(l),u.append(r),u.append(m),c.append(u)}(e,t,n,o),function(e,t){let n=document.getElementById("cardsContainer");console.log("precip card");let o=document.createElement("div");o.id="card1",o.className="cards";let a=document.createElement("div");a.className="cardData",a.innerHTML="Precipitation: "+e+"%";let c=document.createElement("div");c.className="cardData",c.innerHTML="Humidity: "+t+"%";let i=document.createElement("div");i.id="card1Container",n.append(o),i.append(a),i.append(c),o.append(i)}(a,c),function(e){let t=document.getElementById("cardsContainer");console.log("desc card");let n=document.createElement("div");n.id="card2",n.className="cards";let o=document.createElement("div");o.id="card2Desc",o.className="cardData",o.innerHTML=e+".",t.append(n),n.append(o)}(i)},createFooter:function(){document.getElementById("content");let e=document.createElement("div");e.id="footer";let t=document.createElement("div");t.id="footerText",t.innerHTML="Powered by BrockDiesel News",document.body.append(e),e.append(t),console.log("hooray")}};e.exports=t},929:e=>{e.exports={init:function(){}}},180:(e,t,n)=>{const o=n(171),a=(()=>{const e=async function(e){return console.log("PRECIP: "),console.log(e.hourly[1].pop),e.hourly[1].pop},t=async function(e){console.log("DESC: "),console.log(e.hourly[1].weather[0].description);let t=e.hourly[1].weather[0].description;return a(t)},n=function(e){let t=1.8*(e-273.15)+32;return Math.round(t)},a=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};return{init:function(){console.log("logic init"),console.log(document.getElementById("userInput")),this.getData("London")},getData:async function(a){const c=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+a+"&appid=f586ade79371e87113e2f9abf57f8fbc",{mode:"cors"}),i=await c.json();let r=await async function(e){console.log("TEMP: "),console.log(e.main.temp);let t=e.main.temp;return n(t)}(i),d=await async function(e){console.log("HIGH: "),console.log(e.main.temp_max);let t=e.main.temp_max;return n(t)}(i),l=await async function(e){console.log("LOW: "),console.log(e.main.temp_min);let t=e.main.temp_min;return n(t)}(i),s=await async function(e){console.log("FEELS LIKE: "),console.log(e.main.feels_like);let t=e.main.feels_like;return n(t)}(i),m=await async function(e){return console.log("HUMIDITY: "),console.log(e.main.humidity),e.main.humidity}(i),u=await async function(n,o){const a=await fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+n+"&lon="+o+"&appid=f586ade79371e87113e2f9abf57f8fbc",{mode:"cors"}),c=await a.json();return[await e(c),await t(c)]}(i.coord.lat,i.coord.lon);o.createCards(r,d,l,s,u[0],m,u[1])}}})();e.exports=a},340:(e,t,n)=>{n(171);const o=n(180),a={init:function(){this.searchBtnListener()},searchBtnListener:function(){document.getElementById("searchBtn").addEventListener("click",(function(){let e=document.getElementById("userInput").value;e?document.getElementById("cardsContainer")?(document.getElementById("cardsContainer").innerHTML="",o.getData(e),document.getElementById("userInput").focus()):(o.getData(e),document.getElementById("userInput").focus()):console.log("blank")}))}};e.exports=a}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}(()=>{const e=n(171),t=n(340),o=n(929),a=n(180);console.log("i think it works"),e.init(),t.init(),a.init(),o.init()})()})();