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
          <!-- <ul :class="['menu', { 'hide-menu': searchActive && !burgerActive }]">
            <li class="menu-select">
              {{ t("header-first-menu-title") }}
              <i class="arrow-down" />
              <ul class="menu-list">
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/airpet.png"
                    alt="airpet-icon" />
                  <a href="">{{ t("header-first-menu.1") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/highlight.png"
                    alt="highlight-icon" />
                  <a href="">{{ t("header-first-menu.2") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/translate.png"
                    alt="translate-icon" />
                  <a href="">{{ t("header-first-menu.3") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/video.png"
                    alt="video-icon" />
                  <a href="">{{ t("header-first-menu.4") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/learnenglish.png"
                    alt="learn-english-icon" />
                  <a href="">{{ t("header-first-menu.5") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/aiplay.png"
                    alt="airplay-icon" />
                  <a href="">{{ t("header-first-menu.6") }}</a>
                </li>
              </ul>
            </li>
            <li class="menu-select">
              {{ t("header-second-menu-title") }}
              <i class="arrow-down" />
              <ul class="menu-list">
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/AIBeyondEnglishTown.png"
                    alt="AIBeyond-icon" />
                  <a href="">{{ t("header-second-menu.1") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/CampusGPT.png"
                    alt="CampusGPT-icon" />
                  <a href="">{{ t("header-second-menu.2") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/ENGCITY.png"
                    alt="ENGCITY-icon" />
                  <a href="">{{ t("header-second-menu.3") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/chromebook.png"
                    alt="chromebook-icon" />
                  <a href="">{{ t("header-second-menu.4") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/classroomgo-iPad.png"
                    alt="classroomgo-icon" />
                  <a href="">{{ t("header-second-menu.5") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/Android.png"
                    alt="android-icon" />
                  <a href="">{{ t("header-second-menu.6") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/googleworkspace.png"
                    alt="googleworkspace-icon" />
                  <a href="">{{ t("header-second-menu.7") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/classpoint.png"
                    alt="classpoint-icon" />
                  <a href="">{{ t("header-second-menu.8") }}</a>
                </li>
                <li class="menu-list-link">
                  <a href="">{{ t("header-second-menu.9") }}</a>
                </li>
              </ul>
            </li>
            <li class="menu-select">
              {{ t("header-third-menu-title") }}
              <i class="arrow-down" />
              <ul class="menu-list">
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/studentqrcode.png"
                    alt="studentqrcode-icon" />
                  <a href="">{{ t("header-third-menu.1") }}</a>
                </li>
              </ul>
            </li>
            <li class="menu-select">
              {{ t("header-fourth-menu-title") }}
              <i class="arrow-down" />
              <ul class="menu-list">
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/registration.png"
                    alt="registration-icon" />
                  <a href="">{{ t("header-fourth-menu.1") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/video.png"
                    alt="video-icon" />
                  <a href="">{{ t("header-fourth-menu.2") }}</a>
                </li>
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/moonshoot.png"
                    alt="moonshoot-icon" />
                  <a href="">{{ t("header-fourth-menu.3") }}</a>
                </li>
              </ul>
            </li>
            <li class="menu-select">
              {{ t("header-fifth-menu-title") }}
              <i class="arrow-down" />
              <ul class="menu-list">
                <li class="menu-list-link">
                  <img
                    class="menu-list-icon"
                    src="@/assets/images/header-nav/cooperation.png"
                    alt="cooperation-icon" />
                  <a href="">{{ t("header-fifth-menu.1") }}</a>
                </li>
              </ul>
            </li>
          </ul> -->
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
        <a-select
          v-model:value="defaultLocale"
          label-in-value
          style="width: 120px"
          :options="locales"
          @change="changeLang"></a-select>
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
        <h1 class="editor-content-title">{{ t("main.section1.title") }}</h1>
        <p class="editor-content-description">
          {{ t("main.section1.desc") }}
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
        <h3 class="study-title">{{ t("main.section2.title") }}</h3>
        <p class="study-subtitle">
          {{ t("main.section2.desc") }}
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
        <h3 class="downloads-title">{{ t("main.section3.title") }}</h3>
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
      <!-- <div class="footer-nav">
        <div class="footer-nav-links">
          <h3 class="footer-nav-title">{{ t("footer-first-title") }}</h3>
          <a class="footer-nav-link">{{ t("first-links.1") }}</a>
          <a class="footer-nav-link">{{ t("first-links.2") }}</a>
          <a class="footer-nav-link">{{ t("first-links.3") }}</a>
          <a class="footer-nav-link">{{ t("first-links.4") }}</a>
          <a class="footer-nav-link">{{ t("first-links.5") }}</a>
          <a class="footer-nav-link">{{ t("first-links.6") }}</a>
        </div>
        <div class="footer-nav-links">
          <h3 class="footer-nav-title">{{ t("footer-second-title") }}</h3>
          <a class="footer-nav-link">{{ t("second-links.1") }}</a>
          <a class="footer-nav-link">{{ t("second-links.2") }}</a>
          <a class="footer-nav-link">{{ t("second-links.3") }}</a>
          <a class="footer-nav-link">{{ t("second-links.4") }}</a>
        </div>
        <div class="footer-nav-links">
          <h3 class="footer-nav-title">{{ t("footer-third-title") }}</h3>
          <a class="footer-nav-link">{{ t("third-links.1") }}</a>
          <a class="footer-nav-link">{{ t("third-links.2") }}</a>
          <a class="footer-nav-link">{{ t("third-links.3") }}</a>
          <a class="footer-nav-link">{{ t("third-links.4") }}</a>
          <a class="footer-nav-link">{{ t("third-links.5") }}</a>
          <a class="footer-nav-link">{{ t("third-links.6") }}</a>
          <a class="footer-nav-link">{{ t("third-links.7") }}</a>
          <a class="footer-nav-link">{{ t("third-links.8") }}</a>
        </div>
      </div> -->
    </section>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { SelectProps } from "ant-design-vue";
import i18n from "@/locales/index.js";

const { t, setLocale } = useI18n();

const arrLinks = [
  {
    title: t("main.section2.links.1.title"),
    subtitle: t("main.section2.links.1.subtitle"),
    imgPath: "horn",
  },
  {
    title: t("main.section2.links.2.title"),
    subtitle: t("main.section2.links.2.subtitle"),
    imgPath: "cancel",
  },
  {
    title: t("main.section2.links.3.title"),
    subtitle: t("main.section2.links.3.subtitle"),
    imgPath: "chat",
  },
  {
    title: t("main.section2.links.4.title"),
    subtitle: t("main.section2.links.4.subtitle"),
    imgPath: "monitor",
  },
  {
    title: t("main.section2.links.5.title"),
    subtitle: t("main.section2.links.5.subtitle"),
    imgPath: "hyper",
  },
  {
    title: t("main.section2.links.6.title"),
    subtitle: t("main.section2.links.6.subtitle"),
    imgPath: "group",
  },
  {
    title: t("main.section2.links.7.title"),
    subtitle: t("main.section2.links.7.subtitle"),
    imgPath: "calendar",
  },
  {
    title: t("main.section2.links.8.title"),
    subtitle: t("main.section2.links.8.subtitle"),
    imgPath: "blacklist",
  },
  {
    title: t("main.section2.links.9.title"),
    subtitle: t("main.section2.links.9.subtitle"),
    imgPath: "history",
  },
  {
    title: t("main.section2.links.10.title"),
    subtitle: t("main.section2.links.10.subtitle"),
    imgPath: "lottery",
  },
];
const locales = ref([
  {
    value: "zh-hk",
    label: "ZH-HK",
  },
  {
    value: "ja",
    label: "JA",
  },
  {
    value: "en",
    label: "EN",
  },
]);

const defaultLocale = ref({ value: "zh-hk", label: "ZH-HK" });
const searchActive = ref(false);
const burgerActive = ref(false);

const changeLang = (value) => {
  i18n.setLocale(value.key);
};

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
        // width: 80%;
        padding: 24px;
        position: absolute;
        // top: 35px;
        top: 25px;
        left: 50%;

        border-top: 3px solid var(--blue);
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
    align-items: center;
    gap: 20px;

    @media (320px <= width <= 992px) {
      // position: static;
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
      display: flex;
      flex-direction: column;
      gap: 10px;
      white-space: nowrap;
      position: absolute;
      padding: 20px;
      left: 50%;
      top: 58px;

      border-top: 3px solid var(--blue);
      background-color: var(--white);
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%);

      transition: opacity 0.3s ease, visibility 0.3s ease;

      &-icon {
        max-width: 25px;
      }

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
      display: flex;
      align-items: center;
      gap: 10px;
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
    cursor: pointer;

    @media (320px <= width <= 992px) {
      position: absolute;
      // right: 75px;
      left: -30px;
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
    cursor: pointer;
    transition: opacity 0.6s ease-out, visibility 0.6s ease-out,
      top 0.4s ease-out !important;

    @media (320px <= width <= 992px) {
      // right: 75px;
      left: -30px;
    }
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

    @media (320px <= width <= 1280px) {
      max-width: 180px;
    }

    @media (320px <= width <= 992px) {
      max-width: 120px;
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
      left: 50%;
      bottom: -25px;

      transform: translateX(-50%);
      background-color: var(--yellow);
    }

    @media (320px <= width <= 992px) {
      font-size: 24px;
    }
  }

  &-subtitle {
    margin-top: 50px;
    max-width: 700px;
    text-align: center;
    font-size: 18px;
    color: var(--gray);

    @media (320px <= width <= 992px) {
      padding: 0 10px;
      font-size: 16px;
    }
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

      @media (320px <= width <= 1280px) {
        max-width: 125px;
      }
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

    @media (320px <= width <= 1280px) {
      padding: 0 20px;
      max-width: 220px;
      min-height: 300px;
    }
    @media (320px <= width <= 992px) {
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

    @media (320px <= width <= 1280px) {
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

      @media (320px <= width <= 1280px) {
        max-width: 180px;
      }
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

      cursor: pointer;

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
