const translations = {
  en: {
    mainNavigation: "Main navigation",
    navHome: "Home",
    navQa: "Q + A",
    weddingOf: "The wedding of",
    brideName: "Maria Lujza Daoud",
    and: "and",
    groomName: "Aron Atilla Hegedus",
    budapestHungary: "Budapest, Hungary",
    weddingDay: "Wedding day",
    ceremony: "Ceremony",
    basilica: "Szent Istvan Basilica",
    dinnerDancing: "Dinner & Dancing",
    intercontinental: "InterContinental Budapest",
    photoAlt: "Lujza and Aron together in Budapest",
    helpfulInformation: "Helpful information",
    qaTitle: "Q + A",
    detailsLater: "We will add further details here as the day approaches.",
    dressCodeQuestion: "What is the dress code?",
    dressCodeAnswer: "Formal.",
    guestQuestion: "Can I bring a guest?",
    guestAnswer: "Please let us know whether you require a plus one when you RSVP.",
    childrenQuestion: "Are children welcome?",
    childrenAnswer: "Yes. Please include their names and ages in your RSVP.",
    stayQuestion: "Where should I stay?",
    stayAnswer: "Accommodation recommendations will be added shortly.",
    giftsQuestion: "What gifts can we bring?",
    giftsAnswer:
      "Our home already has its foundations, so if you would like to give a gift, we would warmly welcome any contribution that helps us bring our shared plans to life.",
    rsvpIntro: "Please let us know whether you will be able to join us.",
    formLink: "Link to RSVP form",
  },
  hu: {
    mainNavigation: "Fő navigáció",
    navHome: "Kezdőlap",
    navQa: "Kérdések",
    weddingOf: "Szeretettel meghívunk az esküvőnkre",
    brideName: "Daoud Maria Lujza",
    and: "és",
    groomName: "Hegedűs Áron Atilla",
    budapestHungary: "Budapest, Magyarország",
    weddingDay: "Az esküvő napja",
    ceremony: "Szertartás",
    basilica: "Szent István Bazilika",
    dinnerDancing: "Vacsora és tánc",
    intercontinental: "InterContinental Budapest",
    photoAlt: "Lujza és Áron Budapesten",
    helpfulInformation: "Hasznos információk",
    qaTitle: "Kérdések és válaszok",
    detailsLater: "A további részleteket az esküvő közeledtével tesszük közzé.",
    dressCodeQuestion: "Mi az öltözködési előírás?",
    dressCodeAnswer: "Formális.",
    guestQuestion: "Hozhatok magammal kísérőt?",
    guestAnswer: "Kérjük, a visszajelzés során jelezd, ha kísérővel érkezel.",
    childrenQuestion: "Szeretettel várjátok a gyerekeket is?",
    childrenAnswer: "Igen. Kérjük, a visszajelzésben add meg a nevüket és életkorukat.",
    stayQuestion: "Hol érdemes megszállni?",
    stayAnswer: "A szállásajánlásokat hamarosan közzétesszük.",
    giftsQuestion: "Milyen ajándékkal készülhetünk?",
    giftsAnswer:
      "Otthonunk alapjai már megvannak, ezért ha ajándékkal készülnétek, örömmel fogadunk minden hozzájárulást, amely közös terveink megvalósítását segíti.",
    rsvpIntro: "Kérjük, jelezd, hogy velünk tudsz-e ünnepelni.",
    formLink: "Visszajelző űrlap",
  },
};

const languageButtons = document.querySelectorAll("[data-language]");
const rsvpFormLink = document.querySelector("#rsvp-form-link");
const formLinkParts = [
  "aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20v",
  "Zm9ybXMvZC9lLzFGQUlwUUxTY1ppOXVr",
  "V19zd3J2WG1VSFQ5QlZJcHZyLUVSSVlW",
  "bEk2eFZPeHZ0QUpLbGhWTTB3L3ZpZXdmb3Jt",
  "P3VzcD1wdWJsaXNoLWVkaXRvcg==",
];

rsvpFormLink.href = window.atob(formLinkParts.join(""));

function setLanguage(language) {
  const selected = translations[language] ? language : "en";
  const strings = translations[selected];

  document.documentElement.lang = selected;
  document.documentElement.dir = "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = strings[element.dataset.i18n];
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = strings[element.dataset.i18nAlt];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", strings[element.dataset.i18nAriaLabel]);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === selected;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  window.localStorage.setItem("wedding-language", selected);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

setLanguage(window.localStorage.getItem("wedding-language") || "en");
