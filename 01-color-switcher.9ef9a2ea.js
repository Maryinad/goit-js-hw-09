const t={btnStart:document.querySelector(".js-btn-start"),btnStop:document.querySelector(".js-btn-stop"),body:document.querySelector("body")};let e=null;t.btnStart.addEventListener("click",(function(){t.btnStart.disabled=!0,e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.btnStop.addEventListener("click",(()=>{t.btnStart.disabled=!1,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.9ef9a2ea.js.map