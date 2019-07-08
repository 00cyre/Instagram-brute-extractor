var active = false;
document.addEventListener("click", (e) => {
    console.log("listen:" + active);
    if (active) {
        active = false;
        var ele = e.target.parentNode;
        while (true) {
            if (ele.children.length > 0) {
                ele = ele.children[0];
            } else {
                break;
            }
        }
        var link = document.createElement("a");
        link.id = "teste1";
        link.download = name;
        link.target = "_blank";
        link.href = ele.attributes.src.textContent;
        link.click();
    }
});
document.addEventListener("keydown", (e) => {
    if (e.code == "ShiftLeft") {
        active = true;
        console.log("keydown:" + active);
    }
});
document.addEventListener("keyup", (e) => {
    if (e.code == "ShiftLeft") {
        active = false;
        console.log("keyup:" + active);
    }
});