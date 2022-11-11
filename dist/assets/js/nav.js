if (document.querySelector('#mobile-nav > #mobile-nav-left > .toggle-overlay')) {
  let mobileNav = document.getElementById('mobile-nav');
  let mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  let mobileNavOverlayWrapper = document.getElementById('mobile-nav-overlay-wrapper');
  let mobileNavLeft = document.querySelector('#mobile-nav-left > .toggle-overlay');
  let mobileNavRight = document.querySelector('#mobile-nav-right');
  let mobileNavRightContent = document.querySelector('#mobile-nav-right').innerHTML;
  let mobileNavOpen = false;

  mobileNavLeft.addEventListener('click', function() {
  if (mobileNavOpen == false) {
    mobileNavOverlayWrapper.style.display = 'flex';
    mobileNavLeft.innerHTML = 'Close (-)';
    mobileNavRight.innerHTML = '';
    mobileNavOpen = true;
  } else {
    mobileNavOverlayWrapper.style.display = 'none';
    mobileNavLeft.innerHTML = 'Menu (+)';
    mobileNavRight.innerHTML = mobileNavRightContent;
    mobileNavOpen = false;
  }
  }); 
}