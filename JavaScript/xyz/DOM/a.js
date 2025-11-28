//  document.querySelector('h1').innerText="Easin";
document.querySelector('h1').innerText;
('Easin');
document.querySelector('h1').textContent;
('welcome easin')

document.querySelector('h1').innerHTML.HTML;

const box= document.querySelector('.box');
box.style.backgroundColor='red';
box.style.width='100px';
box.style.height='100px';


document.getElementById('box').innerHTML="REd";

const menuItem =document.querySelectorAll('a');
// menuItem[2].style.color='red';
menuItem.forEach(function(i){
    i.style.color='red';
    i.style.fontSize='24px'

});

const cusClass=document.getElementsByClassName('nav_link');
const convertedClass=Array.from(cusClass);
for(let i=0;i<cusClass.length;i++){
    console.log(cusClass[i]);
}