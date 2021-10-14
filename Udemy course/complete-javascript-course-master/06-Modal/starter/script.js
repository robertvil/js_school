'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModel = document.querySelectorAll('.show-modal'); // this will make an array and that means that we can iterate trough it

const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModel.length; i++)
  btnShowModel[i].addEventListener('click', openModal); // her we will iterate trough all selected elements in this particular class called show-modal

btnCloseModal.addEventListener('click', closeModal); // note in here you don't call function, it will not work. Remember that JS does call the function for us

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  console.log(event); // this will allow as to have a look at the objects which where generated on key press events
  const escKey = event.key; // from object we store the key name which was pressed

  if (escKey === 'Escape' && !modal.classList.contains('hidden')) closeModal(); // .contains will check if element does contain the hidden class
});
