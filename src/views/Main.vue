<template>
  <header class="header">
    <section class="header-content">
      <img class="header-logo" src="/images/logo-black.png" alt="logo" />
      <div class="header-swipe-change">
        <input
          :class="['header-input', { 'show-input': searchActive }]"
          placeholder="搜索 …"
          type="text" />
        <nav :class="['nav', { 'show-burger-menu': burgerActive }]">
          <ul :class="['menu', { 'hide-menu': searchActive && !burgerActive }]">
            <li class="menu-select">
              AI 研發區
              <i class="arrow-down" />
              <ul class="menu-list">
                <li class="menu-list-link">
                  <a href="">AI雲飛-API庫</a>
                </li>
                <li class="menu-list-link">
                  <a href="">展示 – AI 學習寵物功能</a>
                </li>
                <li class="menu-list-link">
                  <a href="">展示 – AI 伴讀小雲飛</a>
                </li>
                <li class="menu-list-link">
                  <a href="">展示-AI英語情境式學習</a>
                </li>
                <li class="menu-list-link">
                  <a href="">展示 AI飛常快樂學英語</a>
                </li>
                <li class="menu-list-link">
                  <a href="">雲飛 – AI遊樂區</a>
                </li>
              </ul>
            </li>
            <li class="menu-select">
              教學方案
              <i class="arrow-down" />
              <ul class="menu-list">
                <li class="menu-list-link">
                  <a href="">AI 飛躍英語村</a>
                </li>
                <li class="menu-list-link">
                  <a href="">AI CampusGPT 雲飛學堂</a>
                </li>
                <li class="menu-list-link">
                  <a href="">Air 英語未來城</a>
                </li>
                <li class="menu-list-link">
                  <a href="">Chromebook教學廣播互動系統</a>
                </li>
                <li class="menu-list-link">
                  <a href="">iPad 教學廣播互動系統</a>
                </li>
                <li class="menu-list-link">
                  <a href="">Android 教學廣播與互動系統</a>
                </li>
                <li class="menu-list-link">
                  <a href="">Google workspace 版本介紹</a>
                </li>
                <li class="menu-list-link">
                  <a href="">ClassPoint AI 飛越課點</a>
                </li>
                <li class="menu-list-link">
                  <a href="">雲動方案價目表</a>
                </li>
              </ul>
            </li>
            <li class="menu-select">
              免費方案區
              <i class="arrow-down" />
              <ul class="menu-list">
                <li class="menu-list-link">
                  <a href="">學生名稱QR Code 產生器</a>
                </li>
              </ul>
            </li>
            <li class="menu-select">
              moonshot-射月行動
              <i class="arrow-down" />
              <ul class="menu-list">
                <li class="menu-list-link">
                  <a href="">Moonshot-報名表</a>
                </li>
                <li class="menu-list-link">
                  <a href="">Moonshot-星之花絮</a>
                </li>
                <li class="menu-list-link">
                  <a href="">Moonshot-星之老師</a>
                </li>
              </ul>
            </li>
            <li class="menu-select">
              客戶回饋區
              <i class="arrow-down" />
              <ul class="menu-list">
                <li class="menu-list-link">
                  <a href="">產學合作申請</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header-swipe-change">
        <svg
          @click="swipeNavMenu"
          :class="['cancel-icon', { 'show-cancel-icon': searchActive }]">
          <use href="@/assets/icons/sprite.svg#cancel" />
        </svg>
        <svg
          @click="swipeNavMenu"
          :class="['search-icon', { 'hidden-search-icon': searchActive }]">
          <use href="@/assets/icons/sprite.svg#search" />
        </svg>
        <div
          @click="burgerActive = !burgerActive"
          :class="['burger', { 'hide-burger': searchActive }]">
          <div class="burger-menu"></div>
        </div>
      </div>
    </section>
  </header>
  <section class="container">
    <img class="banner-bg" src="@/assets/images/banner.png" alt="Banner" />
    <div class="editor">
      <div class="editor-content">
        <img
          class="editor-content-logo"
          src="@/assets/images/class-q.png"
          alt="Class-Q" />
        <h1 class="editor-content-title">亞洲最強大的IRS即時互動教學工具</h1>
        <p class="editor-content-description">
          ClassQ是您教學的神器，能讓您的教學方式大放異彩，事半功倍。它無縫地融合於教學中，讓您的簡報煥發新生。獨特的呈現形式和遊戲式的學習活動，能有效地提升學生的參與和學習成效。
          <!-- <span class="editor-content-description-link">
            <svg class="editor-content-description-icon">
              <use href="@/assets/icons/sprite.svg#play" />
            </svg>
            <span class="editor-content-description-link-text">Some text</span>
          </span> -->
        </p>
        <img
          class="editor-content-link"
          src="@/assets/images/link.png"
          alt="Link" />
      </div>
      <img
        class="editor-laptop-img"
        src="@/assets/images/laptop.png"
        alt="Laptop" />
    </div>
    <div class="bg">
      <div class="study">
        <img class="study-logo" src="@/assets/images/logo.png" alt="logo" />
        <h3 class="study-title">優越的演示工具</h3>
        <p class="study-subtitle">
          我們為教育而設計的進階註解和教學工具，讓您能製作出獨一無二且富吸引力的教學演示。這些工具能夠無縫融入您的教學風格，進一步提升教學效能。
        </p>
        <div class="study-links">
          <div
            class="link-container"
            v-for="link of arrLinks"
            :key="link.title">
            <img
              class="link-container-icon"
              :src="`/images/${link.imgPath}.png`"
              alt="Icon" />
            <h5 class="link-container-title">{{ link.title }}</h5>
            <p class="link-container-subtitle">{{ link.subtitle }}</p>
          </div>
        </div>
      </div>
      <div class="downloads">
        <h3 class="downloads-title">馬上下載</h3>
        <div class="downloads-links">
          <img
            class="downloads-links-link"
            src="@/assets/images/for-free.png"
            alt="free" />
          <img
            class="downloads-links-link"
            src="@/assets/images/for-student.png"
            alt="student" />
          <img
            class="downloads-links-link"
            src="@/assets/images/for-teacher.png"
            alt="teacher" />
        </div>
      </div>
    </div>
  </section>
  <footer class="footer">
    <section class="footer-content">
      <div class="footer-partners">
        <img
          class="footer-partners-logo"
          src="@/assets/images/Gtrainers_logo_L.png"
          alt="logo" />
        <img
          class="footer-partners-logo"
          src="@/assets/images/Google-for-Education_logo.png"
          alt="logo" />
      </div>
      <div class="footer-nav">
        <div class="footer-nav-links">
          <h3 class="footer-nav-title">我們的伙伴</h3>
          <span class="footer-nav-link">Google</span>
          <span class="footer-nav-link">ACER 宏碁</span>
          <span class="footer-nav-link">大同</span>
          <span class="footer-nav-link">中華電信</span>
          <span class="footer-nav-link">成為我們的伙伴</span>
          <span class="footer-nav-link">合作顆伴推廣經費申請</span>
        </div>
        <div class="footer-nav-links">
          <h3 class="footer-nav-title">支援</h3>
          <span class="footer-nav-link">幫助中心</span>
          <span class="footer-nav-link">教育訓練</span>
          <span class="footer-nav-link">隱私條款</span>
          <span class="footer-nav-link">聯絡我們</span>
        </div>
        <div class="footer-nav-links">
          <h3 class="footer-nav-title">資源</h3>
          <span class="footer-nav-link">(官網）社交媒體</span>
          <span class="footer-nav-link">(AI+）教學應用社交媒體</span>
          <span class="footer-nav-link">(Line ID): @ydai</span>
          <span class="footer-nav-link">iPad 教學廣播安裝手冊</span>
          <span class="footer-nav-link">iPad 教學廣播使用手冊</span>
          <span class="footer-nav-link">Chromebook 教學廣播 安裝手冊</span>
          <span class="footer-nav-link">Chromebook教學廣播 使用手冊</span>
          <span class="footer-nav-link">Privacy Policy 隱私條款</span>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const arrLinks = [
  { title: "畫面廣播", subtitle: "將老師螢幕畫面廣播給全班", imgPath: "horn" },
  { title: "封鎖畫面", subtitle: "學生畫面一鍵黑屏", imgPath: "cancel" },
  {
    title: "AI雲飛",
    subtitle:
      "採用 ChatGPT 技術的輔助學習助理，讓學生在可記錄、可監控、可管理下獲得協助。",
    imgPath: "chat",
  },
  {
    title: "監控畫面",
    subtitle: "輕鬆實時檢視學生之螢幕畫面",
    imgPath: "monitor",
  },
  {
    title: "推播超連結",
    subtitle:
      "為方便老師在課堂中或其他時間, 使用網頁短網址及QRCode 以輕鬆分享一些非常長的網址/檔案連接",
    imgPath: "hyper",
  },
  {
    title: "群組廣播",
    subtitle: "廣播1-4位學生之畫面至所有其他學生",
    imgPath: "group",
  },
  {
    title: "出席狀況",
    subtitle: "查看並匯出每天上線之學生出席報表",
    imgPath: "calendar",
  },
  {
    title: "黑名單",
    subtitle: "祇允許學生進入某些網站,隨時開通或關閉",
    imgPath: "blacklist",
  },
  {
    title: "瀏覽歷程",
    subtitle: "課堂中隨時查閱學生的網站瀏覽歷程並匯出",
    imgPath: "history",
  },
  {
    title: "幸運輪",
    subtitle: "使用輪盤，抽取幸運的學生，並同時記錄中獎者",
    imgPath: "lottery",
  },
];
const searchActive = ref(false);
const burgerActive = ref(false);

const swipeNavMenu = () => {
  const input = document.querySelector(".header-input");
  searchActive.value = !searchActive.value;
  if (searchActive.value) {
    input.focus();
  }
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1920px;
  margin: 0 auto;
}

.banner-bg {
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.header {
  width: 100%;
  position: fixed;
  z-index: 2;

  background-color: var(--white);

  &-content {
    padding: 0 20px;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav {
      display: flex;
      align-items: center;
      gap: 30px;

      @media (320px <= width <= 992px) {
        display: none;
        width: 80%;
        padding: 24px;
        position: absolute;
        top: 35px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--white);
        z-index: 2;
      }
    }

    @media (320px <= width <= 992px) {
      position: relative;
    }
  }

  &-logo {
    max-width: 230px;

    @media (320px <= width <= 992px) {
      max-width: 180px;
    }
  }

  &-swipe-change {
    position: relative;
    display: flex;
    flex-direction: column;

    @media (320px <= width <= 992px) {
      position: static;
    }
  }

  &-input {
    position: absolute;
    width: 100%;
    top: 0;
    outline: none;
    border: none;
    color: #333;
    margin: auto;
    background: transparent;

    opacity: 0;
    // visibility: hidden;

    transition: opacity 0.4s ease-out, visibility 0.4s ease-out,
      transform 0.4s ease-out, top 0.4s ease-out !important;

    @media (320px <= width <= 992px) {
      transform: translateY(-50%);
      position: static;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    gap: 30px;

    transition: opacity 0.4s ease-in, visibility 0.4s ease-in,
      transform 0.4s ease-in-out;

    &-select {
      position: relative;
      padding: 20px 0;
      display: flex;
      align-items: center;
      gap: 10px;

      color: rgba(0, 0, 0, 0.6);
      cursor: pointer;

      &:hover {
        .menu-list {
          opacity: 1;
          visibility: visible;
        }

        .arrow-down {
          transform: rotate(-135deg);
        }
      }

      @media (320px <= width <= 992px) {
        // margin-top: 10px;
        width: 100%;
        padding: 0;
        flex-direction: column;
        // position: re;
        align-items: flex-start;
        gap: 0;
        padding-top: 10px;

        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 39px;
          top: 0;
          background-color: rgba(0, 0, 0, 0.03);
        }
      }
    }

    &-list {
      white-space: nowrap;
      position: absolute;
      padding: 20px;
      left: 50%;
      top: 60px;

      border-top: 3px solid var(--blue);
      background-color: var(--white);
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%);

      transition: opacity 0.3s ease, visibility 0.3s ease;

      @media (320px <= width <= 992px) {
        width: 100%;
        padding: 0;
        position: static;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 10px;
        gap: 0px;

        border-top: none;
        opacity: 1;
        visibility: visible;
        transform: translateX(0);
      }
    }

    &-list-link {
      transition: background-color 0.3s ease;

      &:hover {
        background-color: rgba(0, 0, 0, 0.03);
      }
      & > a {
        color: #666;
      }

      @media (320px <= width <= 992px) {
        text-align: start;
        width: 100%;
        padding: 10px 5%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.03);
      }
    }

    @media (320px <= width <= 992px) {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
    }
  }

  .arrow-down {
    border: solid rgba(0, 0, 0, 0.6);
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;

    transform: rotate(45deg);
    transition: transform 0.3s ease;

    @media (320px <= width <= 992px) {
      display: none;
    }
  }

  .search-icon {
    max-width: 17px;
    max-height: 17px;
    transform: rotate(90deg);

    opacity: 1;
    visibility: visible;
    transition: opacity 0.6s ease-out, visibility 0.6s ease-out,
      transform 0.4s ease-out;

    @media (320px <= width <= 992px) {
      position: absolute;
      right: 75px;
      top: 10px;
    }
  }
  .cancel-icon {
    top: -35px;
    position: absolute;
    max-width: 17px;
    max-height: 17px;

    opacity: 0;
    visibility: hidden;

    transition: opacity 0.6s ease-out, visibility 0.6s ease-out,
      top 0.4s ease-out !important;
  }

  @media (320px <= width <= 992px) {
    position: static;
  }
}

.burger {
  position: relative;
  display: none;
  align-items: center;
  width: 25px;
  min-height: 25px;

  transition: opacity 0.3s ease-out, visibility 0.3s ease-out,
    transform 0.4s ease-out !important;
  cursor: pointer;

  &-menu {
    width: 100%;
    height: 3px;

    border-radius: 8px;
    background-color: var(--blue);

    &::before {
      content: "";
      position: absolute;
      top: 4px;
      left: 0;
      width: 100%;
      height: 3px;

      border-radius: 8px;
      background-color: var(--blue);
    }
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 4px;
      width: 100%;
      height: 3px;

      border-radius: 8px;
      background-color: var(--blue);
    }
  }

  @media (320px <= width <= 992px) {
    display: flex;
  }
}

.show-burger-menu {
  display: flex !important;
}

.hide-menu {
  opacity: 0;
  visibility: hidden;
  transform: translateY(50%);

  transition: opacity 0.3s ease-out, visibility 0.3s ease-out,
    transform 0.8s ease-out !important;
}

.show-input {
  opacity: 1;
  top: 50%;
  transform: translateY(-50%);

  transition: opacity 0.6s ease-out, visibility 0.6s ease-out,
    transform 0.4s ease-out, top 0.4s ease-out !important;

  @media (320px <= width <= 992px) {
    transform: translateY(0);
  }
}

.show-cancel-icon {
  top: 0 !important;
  opacity: 1 !important;
  visibility: visible !important;

  transition: opacity 0.6s ease-out, visibility 0.6s ease-out, top 0.4s ease-out !important;

  @media (320px <= width <= 992px) {
    top: 50% !important;
    transform: translateY(-50%);
  }
}
.hidden-search-icon {
  transform: rotate(90deg) translateX(100%) !important;
  opacity: 0 !important;
  visibility: hidden !important;
  transition: opacity 0.3s ease-out, visibility 0.3s ease-out,
    transform 0.8s ease-out !important;
}
.hide-burger {
  opacity: 0 !important;
  visibility: hidden !important;
  transform: translateY(50%);

  transition: opacity 0.3s ease-out, visibility 0.3s ease-out,
    transform 0.8s ease-out !important;
}

.editor {
  padding: 0 20px;
  max-width: 1550px;
  margin: 0 auto;
  margin-right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;

  &-content {
    max-width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &-logo {
      max-width: 300px;
      width: 100%;
      object-fit: cover;
      object-position: center;

      @media (320px <= width <= 992px) {
        max-width: 250px;
      }
    }

    &-title {
      position: relative;
      font-size: 32px;
      font-weight: normal;
      text-align: start;

      &:after {
        position: absolute;
        content: "";

        width: 120px;
        height: 4px;
        left: 0;
        bottom: -25px;
        background-color: var(--yellow);

        @media (320px <= width <= 992px) {
          left: 50%;
          transform: translateX(-50%);
        }
      }

      @media (320px <= width <= 992px) {
        font-size: 24px;
      }
    }

    &-description {
      margin: 50px 0 10px;
      text-align: start;
      font-size: 18px;
      color: var(--gray);

      @media (320px <= width <= 992px) {
        max-width: 600px;
        text-align: center;
        font-size: 16px;
      }
    }

    &-link {
      max-width: 100px;
      width: 100%;
      object-fit: cover;
      object-position: center;

      cursor: pointer;
    }

    // &-description-icon {
    // }

    // &-description-link-text {
    // }
    @media (320px <= width <= 992px) {
      max-width: 100%;
      align-items: center;
    }
  }

  &-laptop-img {
    max-width: 60%;
    width: 100%;
    object-fit: cover;
    object-position: center;

    @media (320px <= width <= 992px) {
      max-width: 80%;
      margin: 0 auto;
      margin-right: 0;
    }
  }

  @media (320px <= width <= 992px) {
    padding: 0 10px;
    flex-direction: column;
    gap: 10px;
  }
}

.bg {
  background-image: url("../../public/images/background.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100%;
  background-position: top;
  padding-bottom: 100px;

  @media (320px <= width <= 992px) {
    padding-bottom: 40px;
  }

  @media (320px <= width <= 475px) {
    background-position: bottom;
  }
}

.study {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-logo {
    max-width: 200px;
  }

  &-title {
    position: relative;
    font-size: 32px;
    font-weight: normal;
    text-align: start;

    &:after {
      position: absolute;
      content: "";

      width: 120px;
      height: 4px;
      left: 50%;
      bottom: -25px;

      transform: translateX(-50%);
      background-color: var(--yellow);
    }
  }

  &-subtitle {
    margin-top: 50px;
    max-width: 700px;
    text-align: center;
    font-size: 18px;
    color: var(--gray);
  }

  &-links {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px 100px;

    @media (320px <= width <= 992px) {
      margin-top: 20px;
      gap: 25px 35px;
    }
  }

  .link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 315px;
    min-height: 350px;
    width: 100%;
    height: 100%;
    gap: 17px;

    transition: box-shadow 0.3s ease, background-color 0.3s ease;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      box-shadow: 5px 5px 25px 0px rgba(57, 126, 250, 0.18);
      background-color: var(--white);
    }

    &-icon {
      max-width: 217px;
      width: 100%;
      object-fit: cover;
      object-position: center;

      @media (320px <= width <= 992px) {
        max-width: 125px;
      }
    }

    &-title {
      font-size: 24px;

      @media (320px <= width <= 992px) {
        font-size: 18px;
      }
    }

    &-subtitle {
      max-width: 250px;

      color: var(--gray-middle);
      font-size: 16px;

      @media (320px <= width <= 992px) {
        font-size: 14px;
      }
    }

    @media (320px <= width <= 992px) {
      max-width: 220px;
      min-height: 350px;
      width: 100%;
      height: 100%;
      padding: 20px;
    }
    @media (320px <= width <= 475px) {
      min-height: 240px;
    }
  }
}

.downloads {
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-title {
    position: relative;
    font-size: 32px;
    font-weight: normal;
    text-align: start;

    &:after {
      position: absolute;
      content: "";

      width: 120px;
      height: 4px;
      left: 50%;
      bottom: -25px;
      background-color: var(--yellow);
      transform: translateX(-50%);
    }

    @media (320px <= width <= 992px) {
      font-size: 24px;
    }
  }

  &-links {
    padding: 0 20px;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;

    &-link {
      max-width: 300px;
      width: 100%;
      object-fit: cover;
      object-position: center;

      cursor: pointer;
    }

    @media (320px <= width <= 992px) {
      flex-wrap: wrap;
      padding: 0 10px;
    }
  }

  @media (320px <= width <= 1150px) {
    margin-top: 150px;
  }
}

.footer {
  background-color: var(--gray-light);

  &-content {
    padding: 70px 20px;
    max-width: 1600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 30px;

    @media (320px <= width <= 992px) {
      align-items: center;
      flex-direction: column;
    }
  }

  &-partners {
    max-width: 420px;
    &-logo {
      max-width: 200px;
      width: 100%;
      object-fit: cover;
      object-position: center;

      & + & {
        margin-left: 10px;
      }
    }
  }

  &-nav {
    display: flex;
    gap: 100px;

    &-links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }

    &-title {
      margin-bottom: 15px;
      font-size: 18px;
      color: var(--black);

      @media (320px <= width <= 992px) {
        align-self: center;
      }
    }

    &-link {
      font-size: 14px;
      line-height: 1.7em;
      color: var(--black);

      @media (320px <= width <= 550px) {
        align-self: center;
      }
    }

    @media (320px <= width <= 1120px) {
      gap: 55px;
    }
    @media (320px <= width <= 992px) {
      width: 100%;
      justify-content: space-around;
      gap: 0;
    }
    @media (320px <= width <= 550px) {
      flex-direction: column;
      gap: 30px;
    }
  }
}
</style>
>
