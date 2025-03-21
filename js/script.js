// 獲取元素
const myDiv = document.getElementById('header');

// 設定滾輪事件監聽器
window.addEventListener('wheel', function(event) {
    // 檢查滾輪滾動方向
    if (event.deltaY > 0) {
        // 如果滾輪向下滾動，添加新的class
        myDiv.classList.add('header-scrolled');
    } else if (event.deltaY < 0 && window.scrollY === 0) {
        // 如果滾輪向上滾動並且滾動到最上方，移除新的class
        myDiv.classList.remove('header-scrolled');
    }
});

// -----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  // 定義 select 函數
  const select = (selector, all = false) => {
    selector = selector.trim();
    return all ? [...document.querySelectorAll(selector)] : document.querySelector(selector);
  };

  // // 選取所有 .w_img 元素
  // const wImgElements = document.querySelectorAll('.w_img');

  // // 定義滑鼠懸停功能
  // wImgElements.forEach((element, index) => {
  //   element.addEventListener('mouseenter', () => {
  //     wImgElements.forEach((otherElement, otherIndex) => {
  //       if (index !== otherIndex) {
  //         // 動態生成 class 名稱 (例如 effect_1, effect_2...)
  //         const maskElem = otherElement.querySelector('.mask'); // 選取 mask
  //         const wPElem = otherElement.querySelector('.w_p'); // 選取 w_p

  //         // 在 mask 元素上新增效果
  //         if (maskElem) {
  //           maskElem.classList.add(`effect_${index + 1}`);
  //         }

  //         // 在 w_p 元素上新增效果
  //         if (wPElem) {
  //           wPElem.classList.add(`effect_${index + 1}`);
  //         }
  //       }
  //     });
  //   });

  //   element.addEventListener('mouseleave', () => {
  //     wImgElements.forEach((otherElement, otherIndex) => {
  //       if (index !== otherIndex) {
  //         // 移除動態生成的 class
  //         const maskElem = otherElement.querySelector('.mask'); // 選取 mask
  //         const wPElem = otherElement.querySelector('.w_p'); // 選取 w_p

  //         // 從 mask 元素移除效果
  //         if (maskElem) {
  //           maskElem.classList.remove(`effect_${index + 1}`);
  //         }

  //         // 從 w_p 元素移除效果
  //         if (wPElem) {
  //           wPElem.classList.remove(`effect_${index + 1}`);
  //         }
  //       }
  //     });
  //   });
  // });

  // 保留滾動效果
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

  // 優化滾動效果 (防抖功能)
  const debounce = (func, delay = 100) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  window.addEventListener('load', navbarlinksActive);
  window.addEventListener('scroll', debounce(navbarlinksActive));
});


// 新增點擊放大功能
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