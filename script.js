const translations = {
  ko: {
    navAbout: "회사소개",
    navServices: "서비스",
    navDestinations: "이용국가",
    navPartnership: "제휴문의",
    navContact: "문의하기",

    heroEyebrow: "B2B TRAVEL PARTNER",
    heroSubtitle: "아시아 여행 서비스를 연결하는 B2B 파트너",
    heroText: "한국, 대만, 일본, 태국 지역의 공항 이동 서비스와 다양한 여행 상품을 안정적으로 운영하는 여행 전문 파트너입니다.",
    heroQuote: "견적 문의하기",
    heroB2B: "B2B 제휴 문의",

    aboutTitle: "영한여행사는 신뢰할 수 있는 B2B 여행 파트너입니다.",
    aboutText: "영한여행사는 여행사, OTA, 현지 파트너와 협업하여 공항 이동 서비스, 차량, 단체 행사, 현지 투어 및 맞춤 여행 상품을 제공합니다.",

    servicesTitle: "서비스",
    service1Title: "공항 이동 서비스",
    service1Text: "공항 픽업 및 샌딩 서비스를 안정적으로 제공합니다.",
    service2Title: "차량 서비스",
    service2Text: "개별, 가족, 골프, 단체 여행객을 위한 차량 배정이 가능합니다.",
    service3Title: "단체 행사",
    service3Text: "단체 여행, 기업 행사, 인센티브 투어 운영을 지원합니다.",
    service4Title: "맞춤 여행 상품",
    service4Text: "파트너사의 요청에 맞춘 현지 여행 상품 구성이 가능합니다."
  },

  en: {
    navAbout: "About",
    navServices: "Services",
    navDestinations: "Destinations",
    navPartnership: "Partnership",
    navContact: "Contact",

    heroEyebrow: "B2B TRAVEL PARTNER",
    heroSubtitle: "Your trusted B2B travel partner in Asia",
    heroText: "YOUNGHAN TRAVEL provides reliable airport transfers, vehicle services, group arrangements, and customized travel products across Korea, Taiwan, Japan, and Thailand.",
    heroQuote: "Request a Quote",
    heroB2B: "B2B Partnership",

    aboutTitle: "YOUNGHAN TRAVEL is a reliable B2B travel partner.",
    aboutText: "We work with travel agencies, OTAs, and local partners to provide airport transfers, vehicle services, group arrangements, local tours, and customized travel products.",

    servicesTitle: "Services",
    service1Title: "Airport Transfer",
    service1Text: "Reliable airport pickup and drop-off services.",
    service2Title: "Vehicle Service",
    service2Text: "Vehicle arrangements for individuals, families, golf groups, and group travelers.",
    service3Title: "Group Arrangements",
    service3Text: "Support for group tours, corporate events, and incentive travel.",
    service4Title: "Customized Travel Products",
    service4Text: "Customized local travel products based on partner requests."
  },

  zh: {
    navAbout: "公司介紹",
    navServices: "服務項目",
    navDestinations: "服務國家",
    navPartnership: "合作洽詢",
    navContact: "聯絡我們",

    heroEyebrow: "B2B 旅遊合作夥伴",
    heroSubtitle: "連結亞洲旅遊服務的 B2B 合作夥伴",
    heroText: "YOUNGHAN TRAVEL 在韓國、台灣、日本、泰國提供機場接送、車輛安排、團體服務及客製化旅遊商品。",
    heroQuote: "詢問報價",
    heroB2B: "B2B 合作洽詢",

    aboutTitle: "YOUNGHAN TRAVEL 是值得信賴的 B2B 旅遊合作夥伴。",
    aboutText: "我們與旅行社、OTA 及當地合作夥伴合作，提供機場接送、車輛服務、團體安排、當地行程及客製化旅遊商品。",

    servicesTitle: "服務項目",
    service1Title: "機場接送",
    service1Text: "提供穩定可靠的機場接送服務。",
    service2Title: "車輛服務",
    service2Text: "可安排個人、家庭、高爾夫及團體旅客車輛。",
    service3Title: "團體安排",
    service3Text: "支援團體旅遊、企業活動及獎勵旅遊。",
    service4Title: "客製化旅遊商品",
    service4Text: "可依合作夥伴需求規劃當地旅遊商品。"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = translations[lang][key];
  });

  document.getElementById("current-lang").textContent = lang.toUpperCase();

  const menu = document.getElementById("language-menu");
  if (menu) {
    menu.classList.remove("show");
  }
}

function toggleLanguageMenu() {
  document.getElementById("language-menu").classList.toggle("show");
}
