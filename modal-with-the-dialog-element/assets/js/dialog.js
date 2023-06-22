const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');

const openBtn2 = document.querySelector('.openBtn2');
const openBtn3 = document.querySelector('.openBtn3');

const closeBtn1 = document.querySelector('.closeBtn1');
const closeBtn2 = document.querySelector('.closeBtn2');
const closeBtn3 = document.querySelector('.closeBtn3');

closeBtn1.addEventListener('click', () => {
    modal1.style.display = "none";
});

openBtn2.addEventListener('click', () => {
    modal2.show(); // open a dialog popup
});

openBtn3.addEventListener('click', () => {
    modal3.showModal(); // open a modal popup
});

closeBtn2.addEventListener('click', () => {
    modal2.close(); // close the dialog popup
});

closeBtn3.addEventListener('click', () => {
    modal3.close(); // close the modal popup
});