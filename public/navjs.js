/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



/* toggle fixed bottom bar */

window.onload = function() {
 
    let nextCourseDate = moment().locale("es").to([2020, 7, 24]);
    let timeRemainingPlace1 = document.getElementById("timeRemaining");
    let bottomTimeRemaining = document.getElementById("bottomTimeRemaining");
    console.log(nextCourseDate);
    timeRemainingPlace1.innerHTML = "El próximo curso comienza " + nextCourseDate + "!";
    bottomTimeRemaining.innerHTML = "El próximo curso comienza " + nextCourseDate + "!";

    if (nextCourseDate < 0) {
        timeRemainingPlace.innerHTML = "El curso ya comenzó!";
        bottomTimeRemaining.innerHTML = "El curso ya comenzó!";
    }
    
    let y = document.getElementById("shortText");
    let a = document.getElementById("desktopCTA");
    let b = document.getElementById("mobileCTA");
    let c = document.getElementById("secondDesktopCTA");
    let d = document.getElementById("secondMobileCTA");
    let z = window.innerWidth;
    console.log(z);
    if (z < 600) {  
        b.style.margin = "0";
        b.style.padding = "0";
        b.style.paddingTop = "20px";
        a.style.display = "none";
        c.style.display = "none";
        d.style.color = "white";
        d.style.display = "inline-block";
        

    } else {
        a.style.display = "inline-block";
        b.style.display = "none";
        d.style.display = "none";
        c.style.color = "white";
        c.style.display = "inline-block";
        
    }

 

}



