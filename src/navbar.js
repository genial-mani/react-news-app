function changeSlide(index) {
    const slider = document.querySelector('.slider');
    const navItems = document.querySelectorAll('.nav-item');

    const selectedNavItem = navItems[index];
    const offsetLeft = selectedNavItem.offsetLeft;
    const width = selectedNavItem.offsetWidth;

    slider.style.transform = `translateX(${offsetLeft}px)`;
    slider.style.width = `${width}px`;

    // Remove the 'active' class from all items
    navItems.forEach(item => item.classList.remove('active'));
    // Add the 'active' class to the clicked item
    selectedNavItem.classList.add('active');
  }