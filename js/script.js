$(document).ready(function() {

    $("#coll").on("click", function() {
        $(".sidebar").toggleClass("active");
        $(".banner").toggleClass("active");
        
        $(".bi-chevron-left").toggleClass("bi-list");
        $(".bi-chevron-down").toggleClass("bi-chevron-up");
        
    })

    $("#dropdown").on("click", function() {
        $(".bi-chevron-down").toggleClass("bi-chevron-up");
        
    })
})

document.addEventListener('DOMContentLoaded', function() {
      if (window.innerWidth < 768) {
        document.querySelector('.sidebar').classList.add('active');
    }
});

function checkWindowSize() {
    if (window.innerWidth < 768) {
        document.querySelector('.sidebar').classList.add('active');
        document.querySelector('.bi-chevron-left').classList.add('bi-list');
    } else {
        document.querySelector('.sidebar').classList.remove('active');
        document.querySelector('.bi-chevron-left').classList.remove('bi-list');
    }
}

window.onload = checkWindowSize;
window.onresize = checkWindowSize;

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.top > window.innerHeight;
  }
  
  function addClassToVisibleElements() {
    var aosElements = document.querySelectorAll(".ani");
    aosElements.forEach(function (aniElement) {
      if (!isElementInViewport(aniElement)) aniElement.classList.add("ed");
    //   else aniElement.classList.remove("ed");
    });
  }
  
  document.addEventListener("scroll", addClassToVisibleElements);
  addClassToVisibleElements();

// ---------------Navbar---------------
  let navbarlinks = select('#Navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('tab_active')
      } else {
        navbarlink.classList.remove('tab_active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)