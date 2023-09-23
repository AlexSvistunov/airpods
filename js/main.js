const chooseColor = document.querySelectorAll('.choose-color__btn');
const contentItem = document.querySelectorAll('.content-item');



chooseColor.forEach(function(element){
  element.addEventListener('click', open);
});

function open(event){
  const target = event.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  chooseColor.forEach(function(item){
    item.classList.remove('choose-color__btn--active');
  });

  target.classList.add('choose-color__btn--active');

  contentItem.forEach(function(item){
    item.classList.remove('content-item--active');

  });

  contentActive.forEach(function(item){
    item.classList.add('content-item--active');
  });


}

// chooseColor.forEach(el =>{
//   el.addEventListener('click', event =>{
//     const self = event.currentTarget;
//     const btn = self.dataset.button;
//     const contentActive = document.querySelectorAll(`.${btn}`);
//     console.log(btn);
//     console.log(contentActive);
    
//     chooseColor.forEach(item =>{
//       item.classList.remove('choose-color__btn--active');
      
//     });
//     el.classList.add('choose-color__btn--active');

//   });

  
// });


// const chooseColor = document.querySelectorAll('.choose-color__btn');
// const contentItem = document.querySelectorAll('.content-item');



// chooseColor.forEach(function(element){
//   element.addEventListener('click', open);
// });

// function open(event){
//   const target = event.currentTarget;
//   const btnData = target.dataset.button;
  
  
//   const contentActive = document.querySelectorAll(`.${btnData }`);

//   chooseColor.forEach(item =>{
//     item.classList.remove('choose-color__btn--active');
//   });

//   target.classList.add('choose-color__btn--active');

//   contentItem.forEach(item =>{
//     item.classList.remove('content-item--active');

//   });

//   contentActive.forEach(item =>{
//     item.classList.add('content-item--active');
//   });


// }
