let hasLost = false;  
window.onload = function() {
    document.getElementById("start").onclick = handleStartClick;
    document.getElementById("end").onmouseover = handleEndHover;
    
    const boundaries = document.querySelectorAll("#maze .boundary");
    boundaries.forEach(boundary => {
        boundary.onmouseover = handleBoundaryHover;
    });
};

function handleBoundaryHover() {
    hasLost = true;
    const boundaries = document.querySelectorAll("#maze .boundary");
    boundaries.forEach(boundary => {
        boundary.classList.add("youlose");
    });
}

function handleStartClick() {
    hasLost = false;
    const boundaries = document.querySelectorAll("#maze .boundary");
    boundaries.forEach(boundary => {
        boundary.classList.remove("youlose");
    });
}

function handleEndHover() {
    if (hasLost) {
        alert("Oops! You hit the wall.");
    } else {
        alert("Congratulations, you made it!");
    }
}
