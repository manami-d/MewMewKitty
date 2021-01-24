let jump = document.getElementById('jump')
let mvRight = document.getElementById(`right`)
let mvLeft = document.getElementById(`left`)
let cat = document.getElementById(`cat-pic`)
cat.style.left = '50px'

// This is collection click events and
// returning a function 
mvRight.addEventListener("click", () => {
    cat.style.left=parseInt(cat.style.left) + 50 +'px';
}); 
mvLeft.addEventListener("click", () => {
    cat.style.left=parseInt(cat.style.left)-50 +'px';
}); 
jump.addEventListener('click',() => {
    cat.classList.add("bounce")
    setTimeout(() => {
        cat.classList.remove("bounce")
    }, 1200);
})

// This is collecting the keyboard presses and 
// returning a function 
document.onkeydown = checkKey

function checkKey(e){
    e = e || window.event;
    // moves left
    if (e.keyCode == '37') {
        cat.style.left=parseInt(cat.style.left)-50 +'px';
        }
        // moves right
    else if (e.keyCode == '39') {
        cat.style.left=parseInt(cat.style.left) + 50 +'px';
    }
    // jumps
    else if (e.keyCode == '32') {
        cat.classList.add("bounce")
        setTimeout(() => {
            cat.classList.remove("bounce")
        }, 1200);
    }
}