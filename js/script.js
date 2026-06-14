// 1. 導覽列滾動效果
window.onscroll = function() {
    const nav = document.querySelector('.top-nav');
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    }
};

// 監聽整個網頁載入完成的事件
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 600);
    }
});

// 3. 作品資料庫
const mpData = {
    img1: {
        title: "Matte Painting - 虛擬場景設計",
        fullImg: "assets/portfolio/GD/Matte Painting_1.jpg", 
        videoUrl: "assets/portfolio/GD/MP_1.mp4" 
    },
    img2: {
        title: "Matte Painting - 虛擬場景設計2",
        fullImg: "assets/portfolio/GD/Matte Painting_2.jpg", 
        videoUrl: "assets/portfolio/GD/MP_2.mp4"
    },
    portrait1: {
        title: "人像修圖 - 作品 1",
        fullImg: "assets/portfolio/GD/Portrait Retouch_1_AB.jpg", 
        videoUrl: ""
    },
    portrait2: {
        title: "人像修圖 - 作品 2",
        fullImg: "assets/portfolio/GD/Portrait Retouch_2_AB.jpg",
        videoUrl: ""
    },
    portrait3: {
        title: "人像修圖 - 作品 3",
        fullImg: "assets/portfolio/GD/Portrait Retouch_3_AB.jpg", 
        videoUrl: ""
    },
    portrait4: {
        title: "人像修圖 - 作品 4",
        fullImg: "assets/portfolio/GD/Portrait Retouch_4_AB.jpg",
        videoUrl: ""
    },
    portrait5: {
        title: "人像修圖 - 作品 5",
        fullImg: "assets/portfolio/GD/Portrait Retouch_5_AB.jpg",
        videoUrl: ""
    },
    houdiniTree: {
        title: "樹木生長動畫",
        fullImg: "",
        videoUrl: "assets/portfolio/3D/leaves falling.mp4"
    },
    houdiniCloud: {
        title: "體積雲製作",
        fullImg: "assets/portfolio/3D/cloud.jpg",
        videoUrl: ""
    },
    unreal_light_1: {
        title: "unreal- 場景燈光設計_1",
        fullImg: "", 
        videoUrl: "assets/portfolio/3D/3D_3.mp4" 
    },
    unreal_light_2: {
        title: "unreal- 場景燈光設計_2",
        fullImg: "", 
        videoUrl: "assets/portfolio/3D/3D_2.mp4"
    },
    unreal_water: {
        title: "unreal- 水粒子",
        fullImg: "", 
        videoUrl: "assets/portfolio/3D/3D_4.mp4"
    },
    blender_SeaOfClouds: {
            title: "Blender- 雲海",
            isMulti: true,
            items: [
            {
                title: "3D動畫",
                type: "video",
                url: "assets/portfolio/3D/Sea of Clouds.mp4"
            },
            {
                title: "雲海渲染圖",
                type: "image",
                url: "assets/portfolio/3D/Sea of Clouds.jpg"
            },
            {
                title: "製作過程",
                type: "video",
                url: "assets/portfolio/3D/Sea of Clouds_ProductionProcess.mp4"
            }
        ]
    },
    blender_Starry: {
            title: "Blneder- 星空",
            isMulti: true,
            items: [
            {
                title: "星空渲染圖",
                type: "image",
                url: "assets/h4.jpg"
            },
            {
                title: "製作過程",
                type: "video",
                url: "assets/portfolio/3D/staryng.mp4"
            },
            {
                title: "節點圖",
                type: "image",
                url: "assets/portfolio/3D/staryng_node.jpg"
            }
        ]
    },
    blender_obj_1: {
        title: "blender - 鍵盤",
        fullImg: "assets/portfolio/3D/Obj_keyboard.jpg", 
        videoUrl: ""
    },
    blender_obj_2: {
        title: "blender - 布咕鐘",
        fullImg: "", 
        videoUrl: "assets/portfolio/3D/CuckooClock.mp4"
    },
    blender_obj_3: {
        title: "blender - 滑鼠",
        fullImg: "assets/portfolio/3D/Obj_mouse.jpg", 
        videoUrl: ""
    },
    maya_obj_1: {
        title: "maya - 小木屋",
        fullImg: "assets/portfolio/3D/modeling_1.jpg", 
        videoUrl: ""
    },
    maya_obj_2: {
        title: "maya - 燭台",
        fullImg: "assets/portfolio/3D/modeling_2.jpg", 
        videoUrl: ""
    },
    maya_obj_3: {
        title: "maya - 腳踏車",
        fullImg: "assets/portfolio/3D/modeling_3.jpg", 
        videoUrl: ""
    },
    maya_obj_4: {
        title: "maya - 警車",
        fullImg: "assets/portfolio/3D/modeling_4.jpg", 
        videoUrl: ""
    },
    game_1: {
        title: "game - 大魚吃小魚",
        fullImg: "", 
        videoUrl: "assets/portfolio/game/game_1.mp4"
    },
    modeling_3D_2: {
        title: "角色建模_細節1",
        fullImg: "assets/portfolio/interview/Wrinkled clothes.jpg", 
        videoUrl: ""
    },
    modeling_3D_3: {
        title: "角色建模_細節2",
        fullImg: "assets/portfolio/interview/Wrinkled clothes_2_1.jpg", 
        videoUrl: ""
    },
    modeling_3D_4: {
        title: "角色建模_細節3",
        fullImg: "assets/portfolio/interview/Wrinkled clothes_2_2.jpg", 
        videoUrl: ""
    },
    st_1: {
            title: "st - 材質練習",
            isMulti: true,
            items: [
            {
                title: "",
                type: "image",
                url: "assets/portfolio/interview/st_1.jpg"
            },
            {
                title: "正面",
                type: "image",
                url: "assets/portfolio/interview/st_2.jpg"
            },
            {
                title: "背面",
                type: "image",
                url: "assets/portfolio/interview/st_3.jpg"
            }
        ]
    },
    maya_1: {
            title: "maya_場景燈光",
            isMulti: true,
            items: [
            {
                title: "",
                type: "image",
                url: "assets/portfolio/interview/maya.jpg"
            },
            {
                title: "製作過程",
                type: "video",
                url: "assets/portfolio/interview/maya.mp4"
            },
        ]
    },
};

// 2. 開啟燈箱
function openLightbox(workId) {
    const data = mpData[workId];
    if (!data) return;

    const modal = document.getElementById("matteLightbox");
    const standardContent = document.getElementById("standardLightboxContent");
    const multiContent = document.getElementById("multiMediaContent");
    const imgElement = document.getElementById("fullImage");
    const videoElement = document.getElementById("fullVideo");
    const videoBox = document.getElementById("videoBox");
    const titles = standardContent.querySelectorAll('h4');

    if (data.isMulti) {
        // --- 模式 B：多媒體模式 ---
        standardContent.style.display = "none";
        multiContent.style.display = "flex";
        
        multiContent.innerHTML = "";
        
        data.items.forEach((item, index) => {
            let mediaHtml = "";
            
            if (item.type === 'video') {
                if (index === 0) {
                    mediaHtml = `
                        <video src="${item.url}" 
                            class="multi-media-item" 
                            autoplay muted loop controls 
                            preload="metadata">
                        </video>`;
                } else {
                    mediaHtml = `
                        <video src="${item.url}" 
                            class="multi-media-item" 
                            controls 
                            preload="metadata">
                        </video>`;
                }
            } else {
                mediaHtml = `<img src="${item.url}" alt="${item.title}" class="multi-media-item">`;
            }

            multiContent.innerHTML += `
                <div class="multi-section">
                    <h3 class="multi-title">${item.title}</h3>
                    <div class="multi-media-wrapper">${mediaHtml}</div>
                </div>`;
        });
    } else {
        // --- 啟用原本的單一圖文模式 ---
        standardContent.style.display = "flex"; 
        multiContent.style.display = "none";
        multiContent.innerHTML = "";

        if (workId.startsWith('portrait')) {
            titles.forEach(h4 => h4.style.display = 'none');
        } else {
            titles.forEach(h4 => h4.style.display = 'block');
        }

        if (data.fullImg && data.fullImg !== "") {
            imgElement.src = data.fullImg;
            imgElement.style.display = "block";
        } else {
            imgElement.style.display = "none";
        }

        if (data.videoUrl && data.videoUrl !== "") {
            videoBox.style.display = "block"; 
            videoElement.src = data.videoUrl;
            videoElement.controls = true;
            videoElement.load();
            videoElement.play();
        } else {
            videoBox.style.display = "none"; 
            videoElement.pause();
            videoElement.src = "";
        }
    }

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

// 1. 關閉燈箱函數
function closeLightbox() {
    const modal = document.getElementById("matteLightbox");
    const videoElement = document.getElementById("fullVideo");
    const multiContent = document.getElementById("multiMediaContent");

    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";

        if (videoElement) {
            videoElement.pause();
            videoElement.src = "";
            videoElement.load();
        }

        if (multiContent) {
            multiContent.innerHTML = "";
        }
    }
}

function toggleVideo(overlay) {
    const wrapper = overlay.parentElement;
    const video = wrapper.querySelector('video');

    if (video.paused) {
        video.play();
        wrapper.classList.add('playing');
    }
}

document.querySelectorAll('.video-wrapper_Editor video').forEach(video => {
    const wrapper = video.parentElement;

    video.addEventListener('pause', () => {
        wrapper.classList.remove('playing');
    });

    video.addEventListener('play', () => {
        wrapper.classList.add('playing');
    });
});

// ------------------------------
// 定義服裝的燈箱資料
const clothingData = [
    {
        title: "魔女服 詳細視圖",
        images: [
            "assets/portfolio/3D/clothing_1_1.jpg", 
            "assets/portfolio/3D/clothing_1.jpg",
            "assets/portfolio/3D/clothing_1_2.jpg",
            "assets/portfolio/3D/clothing_1_3.jpg"
        ],
        descriptions: ["", "", "", ""]
    },
    {
        title: "學生服 詳細視圖",
        images: [
            "assets/portfolio/3D/clothing_2.jpg",
            "assets/portfolio/3D/clothing_2_1.png",
            "assets/portfolio/3D/T-pose_2.png"
        ],
        descriptions: ["", "", ""]
    }
];

function openClothingLightbox(index) {
    const lightbox = document.getElementById('scene-lightbox');
    const mainContent = document.getElementById('scene-lightbox-main');
    const thumbContainer = document.getElementById('scene-thumbnails-container');
    
    const data = clothingData[index];
    if (thumbContainer) {
        thumbContainer.innerHTML = '';
    }

    let htmlContent = `<h2 style="color:#fff; text-align:center; margin: 20px 0 40px;">${data.title}</h2>`;
    
    data.images.forEach((imgSrc, i) => {
        htmlContent += `
            <div class="scene-media-wrapper" style="margin-bottom: 60px;">
                <h3 class="scene-media-title" style="margin-bottom: 15px;">${data.descriptions[i]}</h3>
                <img src="${imgSrc}" class="multi-media-item" style="width: 100%; height: auto; display: block;">
            </div>
        `;
    });

    mainContent.innerHTML = htmlContent;
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}

// ------------------------
const scenesData = [
    {
        id: "scene-1",
        title: "環境動畫",
        date: "2026年3月",
        desc: "我一直很喜歡日系動畫中那種通透、乾淨的視覺感，所以這個作品主要是透過自定義的材質，去模擬清澈且具備透明感的水面動態，整體採用淺藍色調，想呈現出一種比較安靜、平穩的環境氛圍。",
        coverMedia: "assets/portfolio/3D/pond_BG.jpg",
        lightboxMain: "assets/portfolio/3D/pond.mp4",
        lightboxProcess: "",
        thumb: "assets/portfolio/3D/pond_BG.jpg"
    },
    {
        id: "scene-2",
        title: "場景氛圍",
        date: "2025年12月",
        desc: "這個作品聚焦於室內場景的氛圍營造與光影對比，特別著重於大理石材質的反射質感與窗外月光的漫射效果，透過調整體積光來增加場景整體的神秘感。",
        coverMedia: "assets/BG_6.jpg",
        lightboxMain: "assets/BG_6.jpg",
        lightboxProcess: "assets/portfolio/3D/hall_ProductionProcess.mp4",
        thumb: "assets/BG_6.jpg"
    },
    {
        id: "scene-3",
        title: "寫實場景",
        date: "2026年3月",
        desc: "此場景採用較為寫實的風格，且利用兩個螢幕作為主要光源，產生柔和的藍紫色環境光，搭配紫色系的鍵盤、滑鼠、水杯。",
        coverMedia: "assets/portfolio/3D/Scene modeling_3.jpg",
        lightboxMain: "assets/portfolio/3D/Scene modeling_3.jpg",
        lightboxProcess: "",
        thumb: "assets/portfolio/3D/Scene modeling_3.jpg"
    }
];

let currentSceneIndex = 1;

function initSceneCarousel() {
    const track = document.getElementById('scene-track');
    track.innerHTML = '';

    scenesData.forEach((scene, index) => {
        const isVideo = scene.coverMedia.endsWith('.mp4');
        const mediaHtml = isVideo 
            ? `<video src="${scene.coverMedia}" autoplay muted loop playsinline></video>`
            : `<img src="${scene.coverMedia}">`;

        track.innerHTML += `
            <div class="scene-item scene-img-container" data-index="${index}" onclick="handleSceneClick(${index})">
                <div class="hover-overlay"><span>點擊查看細節</span></div>
                ${mediaHtml}
            </div>
        `;
    });

    updateCarouselDisplay();
}

function handleSceneClick(clickedIndex) {
    if (clickedIndex === currentSceneIndex) {
        openSceneLightbox(clickedIndex);
    } else {
        currentSceneIndex = clickedIndex;
        updateCarouselDisplay();
    }
}

// 更新輪播畫面與文字
function updateCarouselDisplay() {
    const items = document.querySelectorAll('.scene-item');
    const total = scenesData.length;

    items.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next', 'hidden');

        if (index === currentSceneIndex) {
            item.classList.add('active');
        } else if (index === (currentSceneIndex - 1 + total) % total) {
            item.classList.add('prev');
        } else if (index === (currentSceneIndex + 1) % total) {
            item.classList.add('next');
        } else {
            item.classList.add('hidden');
        }
    });

    // 更新上方的文字
    const activeData = scenesData[currentSceneIndex];
    document.getElementById('scene-title').innerText = activeData.title;
    document.getElementById('scene-date').innerText = `完成時間：${activeData.date}`;
    document.getElementById('scene-desc').innerText = activeData.desc;
}

// 打開並渲染燈箱內容
function openSceneLightbox(index) {
    const lightbox = document.getElementById('scene-lightbox');
    const mainContent = document.getElementById('scene-lightbox-main');
    const thumbContainer = document.getElementById('scene-thumbnails-container');
    const data = scenesData[index];

    if (thumbContainer) {
        thumbContainer.style.display = ''; 
    }

    function renderMedia(url, title) {
            if (!url) return '';
            const isVideo = url.toLowerCase().endsWith('.mp4');
            
            if (isVideo) {
                return `
                    <h3 class="scene-media-title">${title}</h3>
                    <div class="scene-media-wrapper has-play-button" onclick="toggleSceneVideo(this)">
                        <div class="play-overlay"><div class="play-btn"></div></div>
                        <video src="${url}" class="multi-media-item" preload="metadata" playsinline muted loop onclick="event.stopPropagation()">></video>
                    </div>`;
            } else {
                return `
                    <h3 class="scene-media-title">${title}</h3>
                    <div class="scene-media-wrapper">
                        <img src="${url}" class="multi-media-item">
                    </div>`;
            }
        }

    mainContent.innerHTML = `
        ${renderMedia(data.lightboxMain, "場景渲染")}
        ${renderMedia(data.lightboxProcess, "製作過程")}
    `;

    thumbContainer.innerHTML = '';
    scenesData.forEach((scene, i) => {
        const isActive = i === index ? 'active-thumb' : '';
        thumbContainer.innerHTML += `
            <div class="thumb-item ${isActive}" onclick="switchSceneLightbox(${i})">
                <img src="${scene.thumb}" alt="Scene Thumbnail">
            </div>
        `;
    });

    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}

// 在燈箱內點擊縮圖，直接切換燈箱內容
function switchSceneLightbox(index) {
    currentSceneIndex = index;
    updateCarouselDisplay();
    openSceneLightbox(index);
}

// 關閉場景燈箱
function closeSceneLightbox(event) {
    if (event) {
        const isBackground = event.target.id === 'scene-lightbox';
        const isCloseBtn = event.target.classList.contains('close-btn');
        if (!isBackground && !isCloseBtn) return; 
    }

    const lightbox = document.getElementById('scene-lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; 
    
    const videos = lightbox.querySelectorAll('video');
    videos.forEach(v => v.pause());
}

function toggleSceneVideo(wrapper) {
    if (event && event.target.tagName === 'VIDEO') return;
    const video = wrapper.querySelector('video');
    if (!video || !video.getAttribute('src')) return;

    if (video.paused) {
        video.muted = true; 
        video.play().then(() => {
            video.controls = true;
            wrapper.classList.add('is-playing');
        }).catch(err => console.log("播放被阻擋:", err));
    } else {
        video.pause();
        wrapper.classList.remove('is-playing');
    }
}

// -----------------------
// --- 物件建模：上方區塊的多圖燈箱 ---
const objectGalleryData = {
    title: "物件建模 詳細視圖",
    images: [
        "assets/portfolio/3D/Obj_broom_1.jpg",
        "assets/portfolio/3D/Obj_broom_2.jpg",
        "assets/portfolio/3D/Obj_broom_3.jpg",
        "assets/portfolio/3D/Geometric nodes.jpg"
    ],
    descriptions: ["主視圖", "細節視圖 1", "細節視圖 2","幾何節點圖"]
};

function openObjectGalleryLightbox() {
    const lightbox = document.getElementById('scene-lightbox');
    const mainContent = document.getElementById('scene-lightbox-main');
    const thumbContainer = document.getElementById('scene-thumbnails-container');
    
    if (thumbContainer) thumbContainer.innerHTML = ''; 

    let htmlContent = `<h2 style="color:#fff; text-align:center; margin: 20px 0 40px;">${objectGalleryData.title}</h2>`;
    
    objectGalleryData.images.forEach((imgSrc, i) => {
        htmlContent += `
            <div class="scene-media-wrapper" style="margin-bottom: 60px;">
                <h3 class="scene-media-title" style="margin-bottom: 15px; color: #fff;">${objectGalleryData.descriptions[i]}</h3>
                <img src="${imgSrc}" class="multi-media-item" style="width: 100%; height: auto; display: block; border-radius: 4px;">
            </div>
        `;
    });

    mainContent.innerHTML = htmlContent;
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}

// --- 物件建模：下方跑馬燈的單圖燈箱 ---
function openSingleMediaLightbox(mediaSrc) {
    const lightbox = document.getElementById('scene-lightbox');
    const mainContent = document.getElementById('scene-lightbox-main');
    const thumbContainer = document.getElementById('scene-thumbnails-container');
    
    if (thumbContainer) {
        thumbContainer.innerHTML = '';
        thumbContainer.style.display = 'none';
    }

    const isVideo = mediaSrc.endsWith('.mp4') || mediaSrc.endsWith('.webm');
    
    const mediaHtml = isVideo 
        ? `<video src="${mediaSrc}" autoplay muted loop playsinline controls class="single-media-item"></video>`
        : `<img src="${mediaSrc}" class="single-media-item">`;

    mainContent.innerHTML = `
        <div class="single-media-container">
            ${mediaHtml}
        </div>
    `;
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}

function handleCopy(type, btnElement) {
    let content = "";
    let originalText = "";

    if (type === 'email') {
        const user = "0614nancy";
        const domain = "gmail.com";
        content = user + "@" + domain;
        originalText = "複製 Email";
    } else if (type === 'phone') {
        const part1 = "0934";
        const part2 = "042";
        const part3 = "566";
        content = part1 + part2 + part3;
        originalText = "複製手機號碼";
    }

    navigator.clipboard.writeText(content).then(() => {
        const textElement = btnElement.querySelector('.btn-text');
        btnElement.classList.add('success');
        textElement.innerText = "已複製！";

        setTimeout(() => {
            btnElement.classList.remove('success');
            textElement.innerText = originalText;
        }, 2000);
    }).catch(err => {
        console.error('複製失敗: ', err);
        alert("複製失敗，請手動輸入");
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const gateTrigger = document.getElementById('houdini-gate');
    
    if (gateTrigger) {
        gateTrigger.addEventListener('dblclick', () => {
            openGate();
        });
    }
});

// 開啟彈窗
function openGate() {
    document.getElementById('cyber-modal').style.display = 'flex';
    document.getElementById('cyber-pass').value = '';
    document.getElementById('cyber-pass').focus();
}

// 關閉彈窗
function closeGate() {
    document.getElementById('cyber-modal').style.display = 'none';
}

function verifyAccess() {
    const inputPass = document.getElementById('cyber-pass').value;
    
    // --- 密碼設定區 ---
    const secretCode = "0614";
    const hiddenPage = "access.html";
    // ----------------

    if (inputPass === secretCode) {
        window.location.href = hiddenPage;
    } else {
        alert("密碼錯誤，請洽詢創作者。");
        document.getElementById('cyber-pass').value = '';
    }
}

// --- 優化點擊旁邊黑色區域關閉邏輯 ---
window.addEventListener('load', function() {
    const modal = document.getElementById("matteLightbox");
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeLightbox();
                console.log("點擊背景，關閉燈箱");
            }
        });
    }

    const bookElement = document.getElementById('book');
    const pages = document.querySelectorAll('.st_page');

    if (bookElement && pages.length > 0) {
        const screenWidth = window.innerWidth;
            let bookWidth = 550;
            let bookHeight = 733;
            let useSinglePage = false;

            if (screenWidth < 768) {
                bookWidth = 320;
                bookHeight = 426;
                useSinglePage = true;
            } else if (screenWidth < 1200) {
                bookWidth = 380;
                bookHeight = 506;
            }

         const pageFlip = new St.PageFlip(bookElement, {
            width: bookWidth,
            height: bookHeight,
            size: "fixed",
            showCover: useSinglePage,
            usePortrait: useSinglePage,
            startPage: 0,
            drawShadow: true,
            flippingTime: 1000,
            useMouseEvents: true
        });

        pageFlip.loadFromHTML(pages);

        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');

        if (nextBtn) {
            nextBtn.onclick = () => {
                const totalPages = pageFlip.getPageCount();
                const currentPage = pageFlip.getCurrentPageIndex();
                if (currentPage >= totalPages - 2) {
                    pageFlip.flip(0);
                } else {
                    pageFlip.flipNext();
                }
            };
        }

        if (prevBtn) {
            prevBtn.onclick = () => {
                const totalPages = pageFlip.getPageCount();
                const currentPage = pageFlip.getCurrentPageIndex();
                if (currentPage <= 0) {
                    pageFlip.flip(totalPages - 2);
                } else {
                    pageFlip.flipPrev();
                }
            };
        }
    }

    if (document.getElementById('scene-track')) {
        console.log("正在初始化場景建模區塊...");
        initSceneCarousel(); 
    }
});