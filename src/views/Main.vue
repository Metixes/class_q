<template>
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
            class="downloads-links-links"
            src="@/assets/images/for-free.png"
            alt="free" />
          <img
            class="downloads-links-links"
            src="@/assets/images/for-student.png"
            alt="student" />
          <img
            class="downloads-links-links"
            src="@/assets/images/for-teacher.png"
            alt="teacher" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 70px;

    &-link {
      max-width: 300px;
      width: 100%;
      object-fit: cover;
      object-position: center;

      cursor: pointer;
    }
  }

  @media (320px <= width <= 1150px) {
    margin-top: 150px;
  }
}
</style>
>
