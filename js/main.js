const translations = {
  ru: {
    pageTitle: "Fcarrent — аренда автомобилей",
    metaDesc:
      "Fcarrent — аренда автомобилей: Toyota Sienna, Chevrolet Captiva и Kia Carnival.",
    langAria: "Язык",
    navAria: "Основное меню",
    menu: "Меню",
    close: "Закрыть",
    navFleet: "Автопарк",
    navHow: "Как это работает",
    navPricing: "Цены",
    navContact: "Контакты",
    eyebrow: "Местная аренда авто",
    heroTitle: "Арендуйте авто за минуты. Езжайте спокойно.",
    heroLead:
      "Понятные цены, ухоженные машины и выдача, которая подходит под ваш график.",
    bookCar: "Забронировать",
    seeFleet: "Смотреть автопарк",
    fleetTitle: "Наш автопарк",
    fleetLead: "Нажмите на автомобиль, чтобы выбрать его в заявке.",
    specYear: "Год",
    specEngine: "Двигатель",
    specSeats: "Мест",
    specColor: "Цвет",
    engineHybrid: "Гибрид",
    engineGas: "Бензин",
    engineDiesel: "Дизель",
    colorRed: "Красный",
    colorBlack: "Чёрный",
    priceFrom: "от 250 SAR",
    bookThis: "Забронировать",
    altSienna: "Toyota Sienna, красный минивэн",
    altCaptiva: "Chevrolet Captiva, чёрный кроссовер",
    altCarnival: "Kia Carnival, чёрный минивэн",
    howTitle: "Как это работает",
    how1Title: "Выберите авто",
    how1Text:
      "Toyota Sienna, Chevrolet Captiva или Kia Carnival — нажмите на карточку.",
    how2Title: "Укажите даты",
    how2Text: "Заполните заявку: имя, Telegram, даты получения и возврата.",
    how3Title: "Свяжитесь с нами",
    how3Text: "Позвоните, напишите в WhatsApp или Telegram — подтвердим бронь.",
    pricingTitle: "Простые цены",
    pricingLead:
      "Все три автомобиля — от 250 SAR. Условия страхования объясняем до брони.",
    pricing1: "Toyota Sienna, Chevrolet Captiva, Kia Carnival — от 250 SAR",
    pricing2: "Бесплатная отмена за 24 часа до получения",
    pricing3: "Детские кресла и дополнительные водители — по запросу",
    contactTitle: "Связаться и забронировать",
    contactLead:
      "Звонок, WhatsApp или Telegram — самый быстрый способ. Заявку можно оставить ниже.",
    call: "Позвонить",
    labelName: "Имя",
    labelTelegram: "Имя пользователя Telegram",
    labelCar: "Автомобиль",
    labelPickup: "Дата получения",
    labelReturn: "Дата возврата",
    labelMessage: "Сообщение",
    selectCar: "Выберите автомобиль",
    submit: "Отправить заявку",
    footerCopy: "© 2026 Fcarrent. Все права защищены.",
    footerHours: "Ежедневно 8:00–20:00",
    formError: "Заполните обязательные поля.",
    formDates: "Дата возврата не может быть раньше даты получения.",
    formSendError:
      "Не удалось отправить заявку. Позвоните или напишите в WhatsApp / Telegram.",
    formSuccess: "Спасибо. Заявка отправлена. Мы свяжемся с вами.",
  },
  en: {
    pageTitle: "Fcarrent — car rental",
    metaDesc:
      "Fcarrent — car rental: Toyota Sienna, Chevrolet Captiva, and Kia Carnival.",
    langAria: "Language",
    navAria: "Primary",
    menu: "Menu",
    close: "Close",
    navFleet: "Fleet",
    navHow: "How it works",
    navPricing: "Pricing",
    navContact: "Contact",
    eyebrow: "Local car rental",
    heroTitle: "Rent a car in minutes. Drive with confidence.",
    heroLead:
      "Clear daily rates, well-maintained vehicles, and pickup that fits your schedule.",
    bookCar: "Book a car",
    seeFleet: "See the fleet",
    fleetTitle: "Our fleet",
    fleetLead: "Tap a car to select it in the booking form.",
    specYear: "Year",
    specEngine: "Engine",
    specSeats: "Seats",
    specColor: "Color",
    engineHybrid: "Hybrid",
    engineGas: "Gasoline",
    engineDiesel: "Diesel",
    colorRed: "Red",
    colorBlack: "Black",
    priceFrom: "from 250 SAR",
    bookThis: "Book this car",
    altSienna: "Toyota Sienna, red minivan",
    altCaptiva: "Chevrolet Captiva, black crossover",
    altCarnival: "Kia Carnival, black minivan",
    howTitle: "How it works",
    how1Title: "Pick your car",
    how1Text: "Toyota Sienna, Chevrolet Captiva, or Kia Carnival — tap a card.",
    how2Title: "Choose dates",
    how2Text: "Send your name, Telegram, pickup date, and return date.",
    how3Title: "Get in touch",
    how3Text: "Call, WhatsApp, or Telegram — we confirm the booking.",
    pricingTitle: "Simple pricing",
    pricingLead:
      "All three cars start from 250 SAR. Insurance options are explained before you book.",
    pricing1: "Toyota Sienna, Chevrolet Captiva, Kia Carnival — from 250 SAR",
    pricing2: "Free cancellation up to 24 hours before pickup",
    pricing3: "Child seats and extra drivers available on request",
    contactTitle: "Contact and book",
    contactLead:
      "Call, WhatsApp, or Telegram is the fastest way. You can also send a request below.",
    call: "Call",
    labelName: "Name",
    labelTelegram: "Telegram username",
    labelCar: "Car",
    labelPickup: "Pickup date",
    labelReturn: "Return date",
    labelMessage: "Message",
    selectCar: "Select a car",
    submit: "Send request",
    footerCopy: "© 2026 Fcarrent. All rights reserved.",
    footerHours: "Open daily 8:00–20:00",
    formError: "Please fill in the required fields.",
    formDates: "Return date cannot be earlier than pickup date.",
    formSendError:
      "Could not send the request. Please call or message us on WhatsApp / Telegram.",
    formSuccess: "Thank you. Your request was sent. We will contact you.",
  },
};

const BOOKING_URL =
  "https://soft-base-8f0afcarrent-booking.saidakhmad-shavkatov-011.workers.dev/";

const navToggle = document.querySelector(".nav-toggle");
const siteHeader = document.querySelector(".site-header");
const siteNav = document.querySelector("#site-nav");
const bookingForm = document.querySelector(".contact form");
const carSelect = document.querySelector("#car");
const pickupInput = document.querySelector("#pickup");
const returnInput = document.querySelector("#return");
const langButtons = document.querySelectorAll(".lang-switch [data-lang]");

let currentLang = "ru";

function t(key) {
  return translations[currentLang][key];
}

function applyLanguage(lang) {
  currentLang = translations[lang] ? lang : "ru";
  document.documentElement.lang = currentLang;
  localStorage.setItem("fcarrent-lang", currentLang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (translations[currentLang][key]) {
      el.alt = translations[currentLang][key];
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (translations[currentLang][key]) {
      el.setAttribute("aria-label", translations[currentLang][key]);
    }
  });

  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const key = el.dataset.i18nContent;
    if (translations[currentLang][key]) {
      el.setAttribute("content", translations[currentLang][key]);
    }
  });

  const titleEl = document.querySelector("title");
  if (titleEl) titleEl.textContent = t("pageTitle");

  langButtons.forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.lang === currentLang)
    );
  });

  setNavOpen(siteHeader?.classList.contains("nav-open"));
}

function setNavOpen(isOpen) {
  if (!navToggle || !siteNav) return;
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.textContent = isOpen ? t("close") : t("menu");
  siteHeader?.classList.toggle("nav-open", isOpen);
}

function selectCar(carId) {
  if (!carSelect || !carId) return;
  carSelect.value = carId;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

if (pickupInput) {
  pickupInput.min = todayISO();
  pickupInput.addEventListener("change", () => {
    if (!returnInput) return;
    returnInput.min = pickupInput.value || todayISO();
    if (returnInput.value && returnInput.value < returnInput.min) {
      returnInput.value = returnInput.min;
    }
  });
}

if (returnInput) {
  returnInput.min = todayISO();
}

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setNavOpen(!isOpen);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setNavOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setNavOpen(false);
});

document.addEventListener("click", (event) => {
  if (!siteHeader?.contains(event.target)) setNavOpen(false);
});

document.querySelectorAll(".car-card[data-car]").forEach((card) => {
  card.addEventListener("click", () => {
    selectCar(card.dataset.car);
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

if (bookingForm) {
  let status = bookingForm.querySelector(".form-status");
  if (!status) {
    status = document.createElement("p");
    status.className = "form-status";
    status.setAttribute("role", "status");
    bookingForm.append(status);
  }

  bookingForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";
    status.classList.remove("is-success", "is-error");

    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      status.textContent = t("formError");
      status.classList.add("is-error");
      return;
    }

    if (pickupInput?.value && returnInput?.value && returnInput.value < pickupInput.value) {
      status.textContent = t("formDates");
      status.classList.add("is-error");
      returnInput.focus();
      return;
    }

    const payload = {
      name: bookingForm.elements.namedItem("name").value.trim(),
      telegram: bookingForm.elements.namedItem("telegram").value.trim(),
      car: bookingForm.elements.namedItem("car").value,
      pickup: bookingForm.elements.namedItem("pickup").value,
      return: bookingForm.elements.namedItem("return").value,
      message: bookingForm.elements.namedItem("message").value.trim(),
    };

    try {
      const response = await fetch(BOOKING_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) {
        status.textContent = t("formSendError");
        status.classList.add("is-error");
        return;
      }
    } catch {
      status.textContent = t("formSendError");
      status.classList.add("is-error");
      return;
    }

    status.textContent = t("formSuccess");
    status.classList.add("is-success");
    const selectedCar = carSelect?.value;
    bookingForm.reset();
    if (selectedCar) selectCar(selectedCar);
  });
}

const savedLang = localStorage.getItem("fcarrent-lang");
applyLanguage(savedLang === "en" ? "en" : "ru");
