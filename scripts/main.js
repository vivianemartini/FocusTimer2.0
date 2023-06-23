

const menuItems = document.querySelectorAll('.sound__item');
let menuItemActive = document.querySelector('.sound--active');

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', buttonClick);
  }

  function buttonClick() {
    if (!this.classList.contains('sound--active')) {
  
      menuItemActive.classList.remove('sound--active');
      this.classList.add('sound--active');
  
      menuItemActive = this;
    }
  }