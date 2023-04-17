// 1a. 
const button1 = document.querySelector(`button`);
// 1b. 
button1.onclick = function (){
    alert("You clicked the first button! Congrats!");
  }
// 2a.
const h3 = document.querySelector(`h3`);
// 2b.
h3.addEventListener(`mouseenter`, function(){
    alert("You hovered over the h3 element! Congrats!");
  });
// 3a.
const form = document.querySelector(`form`);
// 3b.
form.addEventListener(`submit`, e =>{
    e.preventDefault();
    alert(form.elements.entry.value);
});

// Bonus
// 4a.
const darkMode = document.querySelector(`#dm`);
// 4b. Using addEventListener, TOGGLE the "dark-mode" CSS class On/Off for EVERY element when the Dark Mode Button is clicked
darkMode.addEventListener(`click`, function(){
    document.querySelector(`body`).classList.toggle(`dark-mode`);
});
// 5a.
const times = document.querySelector(`#times`);
// 5b. Using addEventListener, have an alert that says "You clicked the last button! Congrats!" pop up when you click on the button. However, have this setup so that when the button is clicked a third time have the following alert display instead of the "You clicked the last button! Congrats!" alert. New alert "OH NO! This button is NOT going to work anymore". And finally, when the button is clicked a fourth, fifth, sixth, etc. time have it do nothing (AKA Disable the button).
times.addEventListener(`click`, function(){
    alert("You clicked the last button! Congrats!")
});