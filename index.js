function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
document.getElementById("toTop").addEventListener("click", toTop);