!function(){var t,o=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=document.querySelector("body");function c(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}o.addEventListener("click",(function(){console.log("start"),t=setInterval((function(){e.style.backgroundColor=c()}),1e3)})),n.addEventListener("click",(function(){console.log("stop"),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.f7509108.js.map
