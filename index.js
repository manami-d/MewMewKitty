/*
Identify the elements
const cat = 
This is to position the cat initially.
cat.style.left = '50px'

const jump = 
const mvRight = 
const mvLeft = 
*/

const cat = document.querySelector('#cat-pic');

cat.style.left = '50px';
const jump = document.querySelector('#jump');
const mvRight = document.querySelector('#right');
const mvLeft = document.querySelector('#left');

/* Write functions to call/invoke later in our code. 
i.e.
function sayHello(){
  console.log("hello")
}
*/
const jumpCat = () => {
  cat.style.top = parseInt(cat.style.top) + 50 + 'px';
  console.log(cat.style.top)
  // position += 20;
  // cat.style.top = position + 'px';
  // const parsed = parseInt(x, base);
  // if (isNaN(parsed)) { return 0; }
  // return parsed * 100;
}

const mvCatRight = () => {
  cat.style.left=parseInt(cat.style.left) + 50 +'px';

}

const mvCatLeft = () => {
  cat.style.left=parseInt(cat.style.left) - 50 +'px';

}
/* add event listeners & Functions
An event listener can be chained onto an identifier
- document.getElementById('right').addEventListener("click", sayHello)

OR

Once we have the variable saved, we can add it to the variable
- mvRight.addEventListener("click", sayHello)
*/
jump.addEventListener('click', jumpCat);
mvRight.addEventListener('click', mvCatRight);
mvLeft.addEventListener('click', mvCatLeft);

