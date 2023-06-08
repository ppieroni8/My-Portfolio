// Check JS is Connected
console.log('👍 JS Connected');

const allDialogs = document.querySelectorAll('dialog');

// Group One
const tn1 = document.querySelector('#one');
const fz1 = document.querySelector('[data-fz="one"]');

// Group Two
const tn2= document.querySelector('#two');
const fz2 = document.querySelector('[data-fz="two"]');

// Group Three
const tn3= document.querySelector('#three');
const fz3 = document.querySelector('[data-fz="three"]');

// Group Four
const tn4= document.querySelector('#four');
const fz4 = document.querySelector('[data-fz="four"]');


// Group Five
const tn5= document.querySelector('#five');
const fz5 = document.querySelector('[data-fz="five"]');

tn1.addEventListener('click', () => {
    fz1.showModal();
});

tn2.addEventListener('click', () => {
    fz2.showModal();
});

tn3.addEventListener('click', () => {
    fz3.showModal();
});

tn4.addEventListener('click', () => {
    fz4.showModal();

});  

tn5.addEventListener('click', () => {
    fz5.showModal();

});  

// Close Button for all
allDialogs.forEach( (dialog) => {
    
    dialog.addEventListener( 'click' , (e) => {

            dialog.close();

        }); 
  
});
