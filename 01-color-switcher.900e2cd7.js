!function(){var t={btnStart:document.querySelector(".js-btn-start"),btnStop:document.querySelector(".js-btn-stop"),body:document.querySelector("body")};t.btnStart.addEventListener("click",(function(){t.btnStart.disabled=!0,setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.disabled=!1,clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.900e2cd7.js.map
