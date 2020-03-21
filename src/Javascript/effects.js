var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbarHide").style.top = "0";
  } else {
    document.getElementById("navbarHide").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}