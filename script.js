const translations = {
  ko: {
    navAbout: "회사소개",
    navServices: "서비스",
    navDestinations: "이용국가",
    navPartnership: "제휴문의",
    navContact: "문의하기",

    heroEyebrow: "AIRPORT TRANSFER PARTNER",
    heroSubtitle: "아시아 공항 픽업·샌딩 전문 파트너",
    heroText: "한국, 대만, 일본, 태국 지역의 공항 픽업 및 샌딩 서비스를 안정적으로 운영하는 여행 전문 파트너입니다.",
    heroQuote: "견적 문의하기",
    heroB2B: "B2B 제휴 문의",

    aboutTitle: "영한여행사는 공항 이동 서비스를 전문으로 운영합니다.",
    aboutText: "영한여행사는 여행사, OTA, 현지 파트너와 협업하여 한국·대만·일본·태국 지역의 공항 픽업, 공항 샌딩, 단체 차량 서비스를 제공합니다.",

    servicesTitle: "서비스",
    service1Title: "공항 픽업",
    service1Text: "공항 도착 후 기사 미팅 및 호텔 이동 서비스를 제공합니다.",
    service2Title: "공항 샌딩",
    service2Text: "호텔에서 공항까지 편안한 출국 이동 서비스를 제공합니다.",
    service3Title: "단체 차량",
    service3Text: "가족, 골프, 단체 여행객을 위한 차량 배정이 가능합니다.",
    service4Title: "미팅보드",
    service4Text: "고객명 또는 여행사명으로 공항 미팅보드 서비스를 제공합니다."
  },

  en: {
    navAbout: "About",
    navServices: "Services",
    navDestinations: "Destinations",
    navPartnership: "Partnership",
    navContact: "Contact",

    heroEyebrow: "AIRPORT TRANSFER PARTNER",
    heroSubtitle: "Airport pickup & drop-off partner in Asia",
    heroText: "YOUNGHAN TRAVEL provides reliable airport pickup and drop-off services in Korea, Taiwan, Japan, and Thailand.",
    heroQuote: "Request a Quote",
    heroB2B: "B2B Partnership",

    aboutTitle: "YOUNGHAN TRAVEL specializes in airport transfer services.",
    aboutText: "We work with travel agencies, OTAs, and local partners to provide airport pickup, airport drop-off, and group vehicle services in Korea, Taiwan, Japan, and Thailand.",

    servicesTitle: "Services",
    service1Title: "Airport Pickup",
    service1Text: "We provide airport arrival meeting and hotel transfer services.",
    service2Title: "Airport Drop-off",
    service2Text: "We provide comfortable transfer services from hotels to airports.",
    service3Title: "Group Vehicles",
    service3Text: "Vehicle arrangements are available for families, golf groups, and group travelers.",
    service4Title: "Meeting Board",
    service4Text: "Airport meeting board service is available under the customer or agency name."
  },

  zh: {
    navAbout: "公司介紹",
    navServices: "服務項目",
    navDestinations: "服務國家",
    navPartnership: "合作洽詢",
    navContact: "聯絡我們",

    heroEyebrow: "機場接送合作夥伴",
    heroSubtitle: "亞洲機場接送專業合作夥伴",
    heroText: "YOUNGHAN TRAVEL 在韓國、台灣、日本、泰國提供穩定可靠的機場接送服務。",
    heroQuote: "詢問報價",
    heroB2B: "B2B 合作洽詢",

    aboutTitle: "YOUNGHAN TRAVEL 專營機場接送服務。",
    aboutText: "我們與旅行社、OTA 及當地合作夥伴合作，提供韓國、台灣、日本、泰國的機場接送及團體車輛服務。",

    servicesTitle: "服務項目",
    service1Title: "機場接機",
    service1Text: "提供抵達機場後的司機會合及飯店接送服務。",
    service2Title: "機場送機",
    service2Text: "提供從飯店前往機場的舒適送機服務。",
    service3Title: "團體車輛",
    service3Text: "可安排家庭、高爾夫及團體旅客車輛。",
    service4Title: "接機牌",
    service4Text: "可依旅客姓名或旅行社名稱提供機場接機牌服務。"
  }
};

function setLanguage(lang) {
  const selectedLanguage = translations[lang];

  if (!selectedLanguage) {
    console.error("지원하지 않는 언어입니다:", lang);
    return;
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (selectedLanguage[key]) {
      element.textContent = selectedLanguage[key];
    }
  });

  const currentLang = document.getElementById("current-lang");
  if (currentLang) {
    currentLang.textContent = lang.toUpperCase();
  }

  const menu = document.getElementById("language-menu");
  if (menu) {
    menu.classList.remove("show");
  }
}

function toggleLanguageMenu() {
  const menu = document.getElementById("language-menu");

  if (menu) {
    menu.classList.toggle("show");
  }
}

document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".language-dropdown");
  const menu = document.getElementById("language-menu");

  if (!dropdown || !menu) return;

  if (!dropdown.contains(event.target)) {
    menu.classList.remove("show");
  }
});
