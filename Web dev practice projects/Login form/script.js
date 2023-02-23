var oc = document.querySelector(".outerCursor");
var ic = document.querySelector(".innerCursor");

document.addEventListener("mousemove", function (e) {
    oc.style.cssText = ic.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
