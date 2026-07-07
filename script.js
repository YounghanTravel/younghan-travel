const translations = {
  ko: {
    lang: "KO",
    heroTitle: "YOUNGHAN TRAVEL",
    heroSubtitle: "아시아 공항 픽업·샌딩 전문 파트너",
    heroText: "한국, 대만, 일본, 태국 지역의 공항 픽업 및 샌딩 서비스를 안정적으로 운영하는 여행 전문 파트너입니다.",
    quote: "견적 문의하기",
    b2b: "B2B 제휴 문의"
  },
  zh: {
    lang: "繁中",
    heroTitle: "YOUNGHAN TRAVEL",
    heroSubtitle: "亞洲機場接送專業夥伴",
    heroText: "YOUNGHAN TRAVEL 提供韓國、台灣、日本、泰國等地區的機場接送服務，為旅客與合作夥伴提供穩定可靠的交通安排。",
    quote: "索取報價",
    b2b: "B2B 合作洽詢"
  },
  en: {
    lang: "EN",
    heroTitle: "YOUNGHAN TRAVEL",
    heroSubtitle: "Reliable Airport Transfer Partner Across Asia",
    heroText: "YOUNGHAN TRAVEL provides reliable airport pickup and drop-off services across Korea, Taiwan, Japan and Thailand.",
    quote: "Get a Quote",
    b2b: "B2B Partnership"
  }
};

function toggleLanguageMenu() {
  document.getElementById("language-menu").classList.toggle("show");
}

function setLanguage(lang) {
  document.getElementById("current-lang").textContent = translations[lang].lang;

  document.querySelector(".hero h1").textContent = translations[lang].heroTitle;
  document.querySelector(".hero h2").textContent = translations[lang].heroSubtitle;
  document.querySelector(".hero-text").textContent = translations[lang].heroText;
  document.querySelector(".primary").textContent = translations[lang].quote;
  document.querySelector(".secondary").textContent = translations[lang].b2b;

  document.getElementById("language-menu").classList.remove("show");
}
