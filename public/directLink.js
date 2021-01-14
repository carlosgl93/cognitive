
function expandByUrl() {
    let getHash = window.location.hash;
    console.log(getHash);

    let getTarget = getHash.slice(1);
    console.log(getTarget);

    let targetButton = document.getElementById(getTarget);
    console.log(targetButton);
    
    targetButton.click();
    console.log("clicked!");

}

window.onload(expandByUrl());
