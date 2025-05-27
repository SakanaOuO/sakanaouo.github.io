// 防抖函式 (debounce)
const debounce = (func, delay = 100) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};

// 監聽滾輪事件改變 header 背景 (加防抖)
window.addEventListener('wheel', debounce(function(event) {
  const header = document.getElementById('header');
  if (!header.classList.contains('mobile-nav')) {
    if (event.deltaY > 0) {
      header.classList.add('header-scrolled');
    } else if (event.deltaY < 0 && window.scrollY === 0) {
      header.classList.remove('header-scrolled');
    }
  }
}, 100));

// 根據視窗寬度加/移除 mobile-nav 類別
function updateNavbarClass() {
  const header = document.getElementById('header');
  if (window.innerWidth <= 720) {
    header.classList.add('mobile-nav');
    // 漢堡列開啟時也強制背景存在，可根據需要再調整
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('mobile-nav');
    // 寬度大時，如果沒有滾動到下面可移除 scrolled 樣式
    if (window.scrollY === 0) {
      header.classList.remove('header-scrolled');
    }
  }
}
window.addEventListener('DOMContentLoaded', updateNavbarClass);
window.addEventListener('resize', updateNavbarClass);

// DOMContentLoaded 裡統一處理其他事件
document.addEventListener('DOMContentLoaded', function () {
  // 簡單選取函式
  const select = (selector, all = false) => {
    selector = selector.trim();
    return all ? [...document.querySelectorAll(selector)] : document.querySelector(selector);
  };

  // 導覽列滾動時的 active 狀態切換
  let navbarlinks = select('#navbarNavDropdown .scrollto', true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 20;
    navbarlinks.forEach(navbarlink => {
      if (navbarlink.hash) {
        let section = select(navbarlink.hash);
        if (section) {
          if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
          ) {
            navbarlink.classList.add('active');
          } else {
            navbarlink.classList.remove('active');
          }
        }
      }
    });
  };
  window.addEventListener('load', navbarlinksActive);
  window.addEventListener('scroll', debounce(navbarlinksActive));

  // 手機版作品 dropdown 點擊展開/收合功能
  const dropdownToggle = document.querySelector('.dropdown > .nav-link');
  const dropdownContent = document.querySelector('.dropdown-content');

  if (dropdownToggle && dropdownContent) {
    dropdownToggle.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // 防止點擊跳轉
        dropdownContent.classList.toggle('show');
      }
    });
  }

  // 點擊頁面其他區域，關閉 dropdown (手機)
  document.addEventListener('click', function (e) {
    if (
      window.innerWidth <= 768 &&
      !e.target.closest('.dropdown')
    ) {
      if (dropdownContent) {
        dropdownContent.classList.remove('show');
      }
    }
  });

  // 縮放視窗時重設 dropdown 狀態
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      if (dropdownContent) {
        dropdownContent.classList.remove('show');
      }
    }
  });
});

// 點擊圖片放大功能
function showImage(src) {
  const popupImage = document.getElementById('popup-image');
  const overlay = document.getElementById('overlay');
  popupImage.src = src;
  popupImage.style.display = 'block';
  overlay.style.display = 'block';
}

function hideImage() {
  const popupImage = document.getElementById('popup-image');
  const overlay = document.getElementById('overlay');
  popupImage.style.display = 'none';
  overlay.style.display = 'none';
}
