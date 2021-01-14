function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
let b = document.getElementById("asterisk");
let a = document.getElementById("popOver");
console.log(b);
console.log(a);

function hideMe(param) {
    let c = document.getElementById(param);
    c.style.display = "none";
}

function popOverFunc(param) {
    let c = document.getElementById(param)
    if (c.style.display === "none") {
        c.style.display = "block";
    } else {
        hideMe(param);
    }
}