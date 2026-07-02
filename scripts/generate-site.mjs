import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const site = {
  name: "Open Free Tools",
  baseUrl: "https://john1912-7.github.io/open-free-tools",
  midiUrl: "https://john1912-7.github.io/midi-piano-trainer/",
  githubUrl: "https://github.com/john1912-7",
  analyticsId: "G-EFDCRJY776",
  googleSiteVerification: "IKltP1oUj7Y3BJdkTE2-DUNCvV29QHhHrTNKxxtqPhs",
};

const languages = {
  en: {
    label: "English",
    flag: "🇬🇧",
    locale: "en",
    nav: ["Tools", "About", "Blog", "Donate", "Contribute", "Legal", "Contact"],
    pages: {
      home: {
        title: "Open Free Tools - free open-source alternatives to paid tools",
        description:
          "A multilingual hub for free, open-source, browser-first tools: MIDI practice, audio to MIDI, and future transcription workflows.",
        h1: "Free open-source tools without subscription traps",
        intro:
          "Open Free Tools collects useful browser-first tools that stay free, open-source, and practical. The first live project is MIDI Piano Trainer, with audio-to-MIDI conversion already in progress.",
      },
      tools: {
        title: "Free Open-Source Tools - Open Free Tools",
        description:
          "Browse free tools for MIDI practice, audio-to-MIDI conversion, and future transcription workflows.",
        h1: "Free tools catalog",
        intro: "Each tool is designed to be useful without an account, friendly to self-hosting, and clear about backend limits.",
      },
      about: {
        title: "About Open Free Tools - why this project exists",
        description:
          "Open Free Tools builds free, open-source, browser-first alternatives to subscription workflows with clear privacy, legal, and monetization rules.",
        h1: "Why Open Free Tools exists",
        intro:
          "Many useful tools move behind subscriptions. This project explores a different path: practical open-source tools, transparent limits, and a website that can fund itself without paywalling core features.",
      },
      midi: {
        title: "Free MIDI Piano Trainer Online - Open Free Tools",
        description:
          "Practice MIDI files in your browser with falling notes, keyboard input, track selection, and accuracy feedback.",
        h1: "Free MIDI Piano Trainer Online",
        intro:
          "Upload a MIDI file, follow falling notes, choose tracks, and practice with your PC keyboard. This is the first official tool in the Open Free Tools ecosystem.",
      },
      audio: {
        title: "Free Audio to MIDI Converter - Open Free Tools",
        description:
          "Convert your own audio files to MIDI with an optional backend, then open the result in MIDI Piano Trainer.",
        h1: "Free Audio to MIDI Converter",
        intro:
          "Audio-to-MIDI is in beta and backend-assisted. Upload your own audio file, generate MIDI, download it, or open it in the piano trainer.",
      },
      transcription: {
        title: "Open Source Transcription Studio - Open Free Tools",
        description:
          "Roadmap for a free, open-source transcription editor with local-first editing and subtitle export.",
        h1: "Open Source Transcription Studio",
        intro:
          "A planned privacy-first transcription editor for audio and video, with transcript editing, timestamps, and exports such as TXT, SRT, and VTT.",
      },
      blog: {
        title: "Guides for Free Music and Transcription Tools - Open Free Tools",
        description:
          "SEO-friendly guides about MIDI practice, audio-to-MIDI conversion, open-source transcription, and privacy-friendly workflows.",
        h1: "Guides and build notes",
        intro:
          "Useful articles will explain real workflows, not thin content: how to convert audio to MIDI, practice MIDI files, and build open-source transcription workflows.",
      },
      donate: {
        title: "Donate and Support Open Free Tools",
        description:
          "Support free open-source tools through donations, GitHub Sponsors, feedback, testing, and sharing.",
        h1: "Support the project",
        intro:
          "Core functionality stays free. Donations, sponsors, feedback, and sharing help keep the project independent and affordable to run.",
      },
      contribute: {
        title: "Contribute to Open Free Tools",
        description:
          "Help with code, design, translations, testing, documentation, SEO pages, and launch feedback.",
        h1: "Contribute",
        intro:
          "You can help by testing tools, reporting bugs, improving translations, writing guides, or contributing code to the open-source projects.",
      },
      privacy: {
        title: "Privacy Policy - Open Free Tools",
        description:
          "Privacy-first principles for Open Free Tools, including local processing, analytics, ads, and user-submitted files.",
        h1: "Privacy Policy",
        intro:
          "The project prefers browser-side processing and clear data boundaries. Backend features should explain when files leave the device.",
      },
      legal: {
        title: "Legal Disclaimer - Open Free Tools",
        description:
          "Open Free Tools legal disclaimer: independent open-source alternatives, no affiliation with paid services mentioned in comparisons.",
        h1: "Legal Disclaimer",
        intro:
          "Open Free Tools builds independent alternatives. It does not copy brands, logos, private APIs, copyrighted assets, or paid-service interfaces.",
      },
      contact: {
        title: "Contact Open Free Tools",
        description:
          "Contact Open Free Tools for bug reports, feedback, launch suggestions, partnerships, and legal requests.",
        h1: "Contact",
        intro:
          "Use GitHub issues for product feedback and bug reports. Add a public contact email before applying for AdSense.",
      },
    },
    ctaTry: "Try the tool",
    ctaFeedback: "Give feedback",
    ctaStar: "Star on GitHub",
    ctaSupport: "Support the project",
    ctaShare: "Share this tool",
  },
  ru: {
    label: "Русский",
    flag: "🇷🇺",
    locale: "ru",
    nav: ["Инструменты", "О проекте", "Блог", "Донат", "Участие", "Правила", "Контакт"],
    pages: {
      home: {
        title: "Open Free Tools - бесплатные open-source альтернативы",
        description:
          "Мультиязычный hub бесплатных open-source инструментов: MIDI-тренажер, аудио в MIDI и будущая transcription studio.",
        h1: "Бесплатные open-source инструменты без подписок",
        intro:
          "Open Free Tools собирает полезные browser-first инструменты, которые остаются бесплатными, открытыми и практичными.",
      },
      tools: {
        title: "Бесплатные open-source инструменты - Open Free Tools",
        description: "Каталог бесплатных инструментов для MIDI, audio-to-MIDI и будущей транскрипции.",
        h1: "Каталог бесплатных инструментов",
        intro: "Каждый инструмент должен быть полезен без аккаунта, понятен для self-hosting и честен про backend-лимиты.",
      },
      about: {
        title: "О проекте Open Free Tools",
        description:
          "Open Free Tools делает бесплатные open-source альтернативы платным инструментам с понятной приватностью, SEO и безопасной монетизацией.",
        h1: "Зачем существует Open Free Tools",
        intro:
          "Многие полезные инструменты уходят в подписки. Этот проект пробует другой путь: открытые бесплатные инструменты, честные ограничения и монетизация без paywall для core-функций.",
      },
      midi: {
        title: "Бесплатный MIDI Piano Trainer онлайн",
        description: "Тренируйте MIDI-файлы в браузере: падающие ноты, клавиатура ПК, выбор дорожек и статистика.",
        h1: "Бесплатный MIDI Piano Trainer онлайн",
        intro: "Загрузите MIDI-файл, следите за падающими нотами, выбирайте дорожки и тренируйтесь на клавиатуре ПК.",
      },
      audio: {
        title: "Бесплатный конвертер аудио в MIDI",
        description: "Конвертируйте свои аудиофайлы в MIDI через optional backend и открывайте результат в тренажере.",
        h1: "Бесплатный конвертер аудио в MIDI",
        intro: "Audio-to-MIDI пока в beta: пользователь загружает свой файл, получает MIDI и открывает его в тренажере.",
      },
      transcription: {
        title: "Open Source Transcription Studio",
        description: "План бесплатного open-source редактора транскрипций с экспортом TXT, SRT и VTT.",
        h1: "Open Source Transcription Studio",
        intro: "Будущий privacy-first редактор транскрипций для аудио и видео с таймкодами и экспортом субтитров.",
      },
      blog: {
        title: "Гайды по бесплатным music и transcription tools",
        description: "Полезные статьи про MIDI, audio-to-MIDI, open-source транскрипцию и privacy-friendly workflows.",
        h1: "Гайды и заметки разработки",
        intro: "Статьи должны решать реальные задачи: как конвертировать аудио в MIDI, тренироваться по MIDI и делать транскрипции.",
      },
      donate: {
        title: "Поддержать Open Free Tools",
        description: "Поддержите бесплатные open-source инструменты донатами, GitHub Sponsors, тестами и распространением.",
        h1: "Поддержать проект",
        intro: "Основной функционал остается бесплатным. Донаты, спонсоры, фидбек и шеры помогают проекту жить независимо.",
      },
      contribute: {
        title: "Участвовать в Open Free Tools",
        description: "Помогите кодом, дизайном, переводами, тестированием, документацией и SEO-страницами.",
        h1: "Участвовать",
        intro: "Можно помогать тестами, баг-репортами, переводами, гайдами или кодом в open-source репозиториях.",
      },
      privacy: {
        title: "Политика приватности - Open Free Tools",
        description: "Принципы приватности Open Free Tools: локальная обработка, аналитика, реклама и пользовательские файлы.",
        h1: "Политика приватности",
        intro: "Проект предпочитает обработку в браузере и ясные границы данных. Backend-функции должны объяснять, когда файл покидает устройство.",
      },
      legal: {
        title: "Legal Disclaimer - Open Free Tools",
        description: "Open Free Tools является независимым проектом и не связан с платными сервисами, которые упоминаются в сравнениях.",
        h1: "Legal Disclaimer",
        intro: "Проект делает независимые альтернативы и не копирует бренды, логотипы, приватные API, ассеты или интерфейсы платных сервисов.",
      },
      contact: {
        title: "Контакт - Open Free Tools",
        description: "Связь с Open Free Tools для багов, фидбека, идей запуска, партнерств и юридических запросов.",
        h1: "Контакт",
        intro: "Для фидбека и багов используйте GitHub issues. Перед AdSense нужно добавить публичный email.",
      },
    },
    ctaTry: "Открыть инструмент",
    ctaFeedback: "Оставить фидбек",
    ctaStar: "Звезда на GitHub",
    ctaSupport: "Поддержать проект",
    ctaShare: "Поделиться",
  },
  de: {
    label: "Deutsch",
    flag: "🇩🇪",
    locale: "de",
    nav: ["Tools", "Projekt", "Blog", "Spenden", "Mitmachen", "Rechtliches", "Kontakt"],
    pages: {
      home: {
        title: "Open Free Tools - kostenlose Open-Source-Alternativen",
        description: "Mehrsprachiger Hub fuer kostenlose Open-Source-Tools: MIDI Training, Audio zu MIDI und Transkription.",
        h1: "Kostenlose Open-Source-Tools ohne Abo-Fallen",
        intro: "Open Free Tools sammelt browser-first Werkzeuge, die frei, offen und praktisch bleiben.",
      },
      tools: {
        title: "Kostenlose Open-Source-Tools - Open Free Tools",
        description: "Katalog fuer MIDI Training, Audio-zu-MIDI und kommende Transkriptions-Workflows.",
        h1: "Tool-Katalog",
        intro: "Jedes Tool soll ohne Account nutzbar sein, Self-Hosting respektieren und Backend-Grenzen klar zeigen.",
      },
      about: {
        title: "Ueber Open Free Tools",
        description: "Warum Open Free Tools freie, offene und browser-first Alternativen zu Abo-Workflows baut.",
        h1: "Warum Open Free Tools existiert",
        intro: "Das Projekt baut praktische Open-Source-Tools mit klaren Grenzen, Datenschutz und fairer Monetarisierung.",
      },
      midi: {
        title: "Kostenloser MIDI Piano Trainer online",
        description: "MIDI-Dateien im Browser ueben: fallende Noten, PC-Tastatur, Spurauswahl und Trefferstatistik.",
        h1: "Kostenloser MIDI Piano Trainer online",
        intro: "Lade eine MIDI-Datei hoch, folge fallenden Noten und uebe mit deiner PC-Tastatur.",
      },
      audio: {
        title: "Kostenloser Audio zu MIDI Converter",
        description: "Eigene Audiodateien per optionalem Backend in MIDI konvertieren und im Trainer oeffnen.",
        h1: "Kostenloser Audio zu MIDI Converter",
        intro: "Audio-to-MIDI ist in beta: eigene Datei hochladen, MIDI erzeugen, herunterladen oder im Trainer oeffnen.",
      },
      transcription: {
        title: "Open Source Transcription Studio",
        description: "Roadmap fuer einen freien Transkriptionseditor mit TXT-, SRT- und VTT-Export.",
        h1: "Open Source Transcription Studio",
        intro: "Ein geplanter privacy-first Editor fuer Audio- und Video-Transkription mit Zeitstempeln und Untertitel-Export.",
      },
      blog: {
        title: "Guides fuer kostenlose Musik- und Transkriptions-Tools",
        description: "Hilfreiche Artikel zu MIDI, Audio-to-MIDI, Open-Source-Transkription und Privacy-Workflows.",
        h1: "Guides und Build Notes",
        intro: "Artikel sollen echte Workflows erklaeren statt duennen SEO-Content zu erzeugen.",
      },
      donate: {
        title: "Open Free Tools unterstuetzen",
        description: "Unterstuetze kostenlose Open-Source-Tools mit Spenden, Feedback, Tests und Teilen.",
        h1: "Projekt unterstuetzen",
        intro: "Die Kernfunktionen bleiben kostenlos. Spenden, Sponsoren und Feedback helfen dem Projekt.",
      },
      contribute: {
        title: "Zu Open Free Tools beitragen",
        description: "Hilf mit Code, Design, Uebersetzungen, Tests, Dokumentation und SEO-Seiten.",
        h1: "Mitmachen",
        intro: "Du kannst durch Tests, Bug Reports, Uebersetzungen, Guides oder Code beitragen.",
      },
      privacy: {
        title: "Datenschutz - Open Free Tools",
        description: "Datenschutzprinzipien: lokale Verarbeitung, Analytics, Ads und Nutzerdateien.",
        h1: "Datenschutz",
        intro: "Das Projekt bevorzugt Verarbeitung im Browser und klare Daten-Grenzen.",
      },
      legal: {
        title: "Rechtlicher Hinweis - Open Free Tools",
        description: "Open Free Tools ist unabhaengig und nicht mit erwaehnten kostenpflichtigen Diensten verbunden.",
        h1: "Rechtlicher Hinweis",
        intro: "Das Projekt baut unabhaengige Alternativen und kopiert keine Marken, Logos, privaten APIs oder Interfaces.",
      },
      contact: {
        title: "Kontakt - Open Free Tools",
        description: "Kontakt fuer Feedback, Bugs, Launch-Ideen, Partnerschaften und rechtliche Anfragen.",
        h1: "Kontakt",
        intro: "Nutze GitHub Issues fuer Feedback und Bug Reports. Eine oeffentliche E-Mail folgt vor AdSense.",
      },
    },
    ctaTry: "Tool oeffnen",
    ctaFeedback: "Feedback geben",
    ctaStar: "Auf GitHub merken",
    ctaSupport: "Projekt unterstuetzen",
    ctaShare: "Teilen",
  },
  es: {
    label: "Español",
    flag: "🇪🇸",
    locale: "es",
    nav: ["Herramientas", "Proyecto", "Blog", "Donar", "Contribuir", "Legal", "Contacto"],
    pages: {
      home: {
        title: "Open Free Tools - alternativas open-source gratis",
        description: "Hub multilingue de herramientas gratis y open-source: MIDI, audio a MIDI y futura transcripcion.",
        h1: "Herramientas open-source gratis sin suscripciones",
        intro: "Open Free Tools reune herramientas utiles, orientadas al navegador, gratuitas y abiertas.",
      },
      tools: {
        title: "Herramientas open-source gratis - Open Free Tools",
        description: "Catalogo de herramientas para practica MIDI, conversion audio a MIDI y transcripcion.",
        h1: "Catalogo de herramientas",
        intro: "Cada herramienta debe funcionar sin cuenta, respetar self-hosting y explicar sus limites de backend.",
      },
      about: {
        title: "Sobre Open Free Tools",
        description: "Por que Open Free Tools crea alternativas gratuitas, open-source y orientadas al navegador.",
        h1: "Por que existe Open Free Tools",
        intro: "El proyecto crea herramientas practicas, abiertas y gratuitas con privacidad clara y monetizacion responsable.",
      },
      midi: {
        title: "MIDI Piano Trainer gratis online",
        description: "Practica archivos MIDI en el navegador con notas descendentes, teclado del PC y estadisticas.",
        h1: "MIDI Piano Trainer gratis online",
        intro: "Sube un archivo MIDI, sigue las notas descendentes y practica con el teclado del PC.",
      },
      audio: {
        title: "Conversor audio a MIDI gratis",
        description: "Convierte tus propios archivos de audio a MIDI con backend opcional y abre el resultado en el trainer.",
        h1: "Conversor audio a MIDI gratis",
        intro: "Audio-to-MIDI esta en beta: sube tu propio archivo, genera MIDI, descargalo o abrelo en el trainer.",
      },
      transcription: {
        title: "Open Source Transcription Studio",
        description: "Roadmap de un editor de transcripcion gratis con exportacion TXT, SRT y VTT.",
        h1: "Open Source Transcription Studio",
        intro: "Un futuro editor privacy-first para transcribir audio y video con marcas de tiempo y subtitulos.",
      },
      blog: {
        title: "Guias de herramientas gratis de musica y transcripcion",
        description: "Articulos utiles sobre MIDI, audio a MIDI, transcripcion open-source y privacidad.",
        h1: "Guias y notas de desarrollo",
        intro: "Los articulos deben resolver flujos reales, no crear contenido SEO vacio.",
      },
      donate: {
        title: "Donar a Open Free Tools",
        description: "Apoya herramientas open-source gratis con donaciones, feedback, pruebas y difusion.",
        h1: "Apoyar el proyecto",
        intro: "La funcionalidad principal sigue gratis. Donaciones, sponsors, feedback y difusion ayudan al proyecto.",
      },
      contribute: {
        title: "Contribuir a Open Free Tools",
        description: "Ayuda con codigo, diseno, traducciones, pruebas, documentacion y paginas SEO.",
        h1: "Contribuir",
        intro: "Puedes ayudar con pruebas, bugs, traducciones, guias o codigo.",
      },
      privacy: {
        title: "Privacidad - Open Free Tools",
        description: "Principios de privacidad: procesamiento local, analitica, anuncios y archivos de usuario.",
        h1: "Privacidad",
        intro: "El proyecto prefiere procesamiento en el navegador y limites claros sobre los datos.",
      },
      legal: {
        title: "Aviso legal - Open Free Tools",
        description: "Open Free Tools es independiente y no esta afiliado con servicios de pago mencionados en comparaciones.",
        h1: "Aviso legal",
        intro: "El proyecto crea alternativas independientes y no copia marcas, logos, APIs privadas ni interfaces.",
      },
      contact: {
        title: "Contacto - Open Free Tools",
        description: "Contacto para feedback, bugs, ideas de lanzamiento, partners y solicitudes legales.",
        h1: "Contacto",
        intro: "Usa GitHub Issues para feedback y bugs. Se anadira un email publico antes de AdSense.",
      },
    },
    ctaTry: "Probar herramienta",
    ctaFeedback: "Dar feedback",
    ctaStar: "Star en GitHub",
    ctaSupport: "Apoyar proyecto",
    ctaShare: "Compartir",
  },
  hy: {
    label: "Հայերեն",
    flag: "🇦🇲",
    locale: "hy",
    nav: ["Գործիքներ", "Նախագիծ", "Բլոգ", "Նվիրաբերել", "Մասնակցել", "Իրավական", "Կապ"],
    pages: {
      home: {
        title: "Open Free Tools - անվճար open-source գործիքներ",
        description: "Բազմալեզու հարթակ անվճար open-source գործիքների համար՝ MIDI, audio-to-MIDI եւ transcription:",
        h1: "Անվճար open-source գործիքներ առանց բաժանորդագրության",
        intro: "Open Free Tools-ը հավաքում է օգտակար browser-first գործիքներ, որոնք մնում են անվճար եւ բաց:",
      },
      tools: {
        title: "Անվճար open-source գործիքներ - Open Free Tools",
        description: "Գործիքների կատալոգ MIDI-ի, audio-to-MIDI-ի եւ ապագա transcription workflow-ների համար:",
        h1: "Գործիքների կատալոգ",
        intro: "Յուրաքանչյուր գործիք պետք է օգտակար լինի առանց հաշվի եւ պարզ բացատրի backend-ի սահմանները:",
      },
      about: {
        title: "Open Free Tools նախագծի մասին",
        description: "Ինչու Open Free Tools-ը ստեղծում է անվճար, open-source եւ browser-first գործիքներ:",
        h1: "Ինչու կա Open Free Tools-ը",
        intro: "Նախագիծը ստեղծում է գործնական open-source գործիքներ՝ հստակ privacy-ով, սահմաններով եւ պատասխանատու monetization-ով:",
      },
      midi: {
        title: "Անվճար MIDI Piano Trainer առցանց",
        description: "Սովորեք MIDI ֆայլերով բրաուզերում՝ ընկնող նոտաներ, PC ստեղնաշար եւ վիճակագրություն:",
        h1: "Անվճար MIDI Piano Trainer առցանց",
        intro: "Վերբեռնեք MIDI ֆայլ, հետեւեք ընկնող նոտաներին եւ վարժվեք PC ստեղնաշարով:",
      },
      audio: {
        title: "Անվճար Audio to MIDI Converter",
        description: "Ձեր սեփական աուդիո ֆայլերը վերածեք MIDI-ի optional backend-ի միջոցով:",
        h1: "Անվճար Audio to MIDI Converter",
        intro: "Audio-to-MIDI-ն beta է. վերբեռնեք ձեր ֆայլը, ստացեք MIDI եւ բացեք trainer-ում:",
      },
      transcription: {
        title: "Open Source Transcription Studio",
        description: "Անվճար transcription editor-ի պլան՝ TXT, SRT եւ VTT export-ով:",
        h1: "Open Source Transcription Studio",
        intro: "Ապագա privacy-first editor աուդիո եւ վիդեո transcription-ի համար՝ timestamps եւ subtitles export:",
      },
      blog: {
        title: "Ուղեցույցներ անվճար music եւ transcription tools-ի մասին",
        description: "Օգտակար հոդվածներ MIDI-ի, audio-to-MIDI-ի եւ open-source transcription-ի մասին:",
        h1: "Ուղեցույցներ եւ զարգացման նշումներ",
        intro: "Հոդվածները պետք է լուծեն իրական խնդիրներ, ոչ թե լինեն դատարկ SEO էջեր:",
      },
      donate: {
        title: "Աջակցել Open Free Tools-ին",
        description: "Աջակցեք անվճար open-source գործիքներին նվիրատվություններով, feedback-ով եւ տարածումով:",
        h1: "Աջակցել նախագծին",
        intro: "Հիմնական ֆունկցիաները մնում են անվճար: Նվիրատվությունները եւ feedback-ը օգնում են նախագծին:",
      },
      contribute: {
        title: "Մասնակցել Open Free Tools-ին",
        description: "Օգնեք code-ով, design-ով, թարգմանությամբ, testing-ով եւ documentation-ով:",
        h1: "Մասնակցել",
        intro: "Կարող եք օգնել testing-ով, bug reports-ով, թարգմանությամբ, guides-ով կամ code-ով:",
      },
      privacy: {
        title: "Գաղտնիություն - Open Free Tools",
        description: "Գաղտնիության սկզբունքներ՝ local processing, analytics, ads եւ user files:",
        h1: "Գաղտնիություն",
        intro: "Նախագիծը նախընտրում է browser-side processing եւ տվյալների հստակ սահմաններ:",
      },
      legal: {
        title: "Իրավական նշում - Open Free Tools",
        description: "Open Free Tools-ը անկախ նախագիծ է եւ կապ չունի վճարովի ծառայությունների հետ:",
        h1: "Իրավական նշում",
        intro: "Նախագիծը ստեղծում է անկախ alternative-ներ եւ չի պատճենում brands, logos, private APIs կամ interfaces:",
      },
      contact: {
        title: "Կապ - Open Free Tools",
        description: "Կապ feedback-ի, bug reports-ի, launch ideas-ի եւ իրավական հարցերի համար:",
        h1: "Կապ",
        intro: "Feedback-ի եւ bugs-ի համար օգտագործեք GitHub Issues: Public email կավելացվի AdSense-ից առաջ:",
      },
    },
    ctaTry: "Փորձել գործիքը",
    ctaFeedback: "Ուղարկել feedback",
    ctaStar: "Star GitHub-ում",
    ctaSupport: "Աջակցել",
    ctaShare: "Կիսվել",
  },
};

const routeMap = {
  home: "",
  tools: "tools",
  about: "about",
  midi: "tools/midi-piano-trainer",
  audio: "tools/audio-to-midi",
  transcription: "tools/open-transcription-studio",
  blog: "blog",
  donate: "donate",
  contribute: "contribute",
  privacy: "privacy",
  legal: "legal",
  contact: "contact",
};

const rootRoutes = ["home", "tools", "about", "midi", "audio", "transcription", "blog", "donate", "contribute", "privacy", "legal", "contact"];
const languageCodes = Object.keys(languages);
const generatedPaths = [];

async function writeStaticAssets() {
  await mkdir("assets", { recursive: true });
  await writeFile("assets/styles.css", styles, "utf8");
}

async function writePage(route, lang, path) {
  const target = path ? join(path, "index.html") : "index.html";
  await mkdir(dirname(target), { recursive: true });
  const html = renderPage(route, lang, path);
  await writeFile(target, html, "utf8");
  generatedPaths.push(path.replaceAll("\\", "/"));
}

function renderPage(route, lang, path) {
  const data = languages[lang];
  const page = data.pages[route];
  const pagePath = path.replaceAll("\\", "/");
  const url = canonical(path);
  const cssPath = `${relativePrefix(path)}assets/styles.css`;
  const rootPrefix = relativePrefix(path);
  const hasLanguagePrefix = pagePath === lang || pagePath.startsWith(`${lang}/`);
  const localizedPrefix = hasLanguagePrefix ? `${lang}/` : "";
  const navItems = [
    ["tools", data.nav[0]],
    ["about", data.nav[1]],
    ["blog", data.nav[2]],
    ["donate", data.nav[3]],
    ["contribute", data.nav[4]],
    ["legal", data.nav[5]],
    ["contact", data.nav[6]],
  ];
  const isToolPage = ["midi", "audio", "transcription"].includes(route);

  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
    <meta name="google-site-verification" content="${site.googleSiteVerification}" />
    <meta name="application-name" content="${site.name}" />
    <meta name="theme-color" content="#087f68" />
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="canonical" href="${url}" />
${alternateLinks(route)}
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="${data.locale}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="${site.name}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=${site.analyticsId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "${site.analyticsId}");
    </script>
    <script>
      (() => {
        const saved = localStorage.getItem("oft-theme");
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.dataset.theme = saved || (prefersDark ? "dark" : "light");
      })();
    </script>
    <link rel="stylesheet" href="${cssPath}" />
    ${jsonLdScript(buildStructuredData(route, data, page, url))}
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="${rootPrefix}${localizedPrefix}">
        <span>OFT</span>
        <strong>${site.name}</strong>
      </a>
      <nav aria-label="Main navigation">
${navItems.map(([key, label]) => `        <a href="${rootPrefix}${localizedPrefix}${routeMap[key]}/">${escapeHtml(label)}</a>`).join("\n")}
      </nav>
      <div class="header-controls">
        <button class="theme-toggle" type="button" data-theme-toggle aria-label="Toggle dark or light theme">
          <span data-theme-icon>◐</span>
        </button>
        <details class="language-menu">
          <summary aria-label="Change language">
            <span class="flag">${languages[lang].flag}</span>
            <span class="chevron" aria-hidden="true">▾</span>
          </summary>
          <div class="language-list" aria-label="Languages">
${languageCodes.map((code) => `          <a href="${rootPrefix}${code}/${routeMap[route] ? `${routeMap[route]}/` : ""}"${code === lang ? ' aria-current="true"' : ""}><span class="flag">${languages[code].flag}</span><span>${escapeHtml(languages[code].label)}</span></a>`).join("\n")}
          </div>
        </details>
      </div>
    </header>

    <main>
      ${renderHero(route, page, data)}

${renderRouteBody(route, data, isToolPage)}
    </main>

    <footer>
      <p>${site.name} is an independent open-source project. No affiliation with paid services mentioned in comparisons.</p>
      <p><a href="${rootPrefix}${localizedPrefix}privacy/">Privacy</a> · <a href="${rootPrefix}${localizedPrefix}legal/">Legal</a> · <a href="${rootPrefix}${localizedPrefix}contact/">Contact</a></p>
    </footer>
    <script>
      (() => {
        const button = document.querySelector("[data-theme-toggle]");
        const icon = document.querySelector("[data-theme-icon]");
        const setIcon = () => {
          const theme = document.documentElement.dataset.theme || "light";
          icon.textContent = theme === "dark" ? "☀" : "☾";
          button.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
        };

        setIcon();
        button.addEventListener("click", () => {
          const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
          document.documentElement.dataset.theme = next;
          localStorage.setItem("oft-theme", next);
          setIcon();
        });
      })();
    </script>
  </body>
</html>
`;
}

function renderHero(route, page, data) {
  const hasVisual = route === "home";
  return `<section class="hero${hasVisual ? " hero-split" : ""}">
        <div class="hero-copy">
          <p class="eyebrow">Free · Open Source · Browser First</p>
          <h1>${escapeHtml(page.h1)}</h1>
          <p>${escapeHtml(page.intro)}</p>
          <div class="hero-actions">
            <a class="button primary" href="${site.midiUrl}">${escapeHtml(data.ctaTry)}</a>
            <a class="button" href="${site.githubUrl}">${escapeHtml(data.ctaStar)}</a>
          </div>
        </div>
        ${hasVisual ? renderStudioVisual() : ""}
      </section>`;
}

function renderStudioVisual() {
  return `<div class="studio-hero" aria-hidden="true">
          <div class="desk-card screen-card">
            <div class="screen-top"></div>
            <div class="wave-lines">
              <span></span><span></span><span></span><span></span><span></span>
            </div>
            <div class="code-lines">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div class="desk-card midi-card">
            <div class="mini-keyboard"></div>
            <div class="round-control"></div>
          </div>
          <div class="desk-card note-card">
            <strong>OSS</strong>
            <span>free tools</span>
          </div>
        </div>`;
}

function renderRouteBody(route, data, isToolPage) {
  const showcase = showcaseCopy(data.locale);

  if (route === "home") {
    return `
      <section class="showcase-band">
        <div>
          <h2>${escapeHtml(showcase.missionTitle)}</h2>
          <p>${escapeHtml(showcase.missionText)}</p>
        </div>
        <div>
          <h2>${escapeHtml(showcase.statusTitle)}</h2>
          <p>${escapeHtml(showcase.statusText)}</p>
        </div>
      </section>

      <section class="grid three">
        ${toolCard("MIDI Piano Trainer", data.pages.midi.intro, "/tools/midi-piano-trainer/", showcase.statusStable, showcase.openPage)}
        ${toolCard("Audio to MIDI Converter", data.pages.audio.intro, "/tools/audio-to-midi/", showcase.statusBeta, showcase.openPage)}
        ${toolCard("Open Transcription Studio", data.pages.transcription.intro, "/tools/open-transcription-studio/", showcase.statusPlanned, showcase.openPage)}
      </section>

      <section class="grid two">
        <article class="panel">
          <h2>${escapeHtml(showcase.whyTitle)}</h2>
          <p>${escapeHtml(showcase.whyText)}</p>
        </article>
        <article class="panel">
          <h2>${escapeHtml(showcase.monetizationTitle)}</h2>
          <p>${escapeHtml(showcase.monetizationText)}</p>
        </article>
      </section>

      <section class="roadmap">
        <h2>${escapeHtml(showcase.roadmapTitle)}</h2>
        <ol>
          ${showcase.roadmap.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n          ")}
        </ol>
      </section>

      <section class="panel">
        <h2>${escapeHtml(showcase.earlyTitle)}</h2>
        <p>${escapeHtml(showcase.earlyText)}</p>
      </section>`;
  }

  if (route === "tools") {
    return `
      <section class="panel">
        <h2>${escapeHtml(showcase.toolsTitle)}</h2>
        <p>${escapeHtml(showcase.toolsText)}</p>
      </section>
      <section class="grid three">
        ${toolCard("MIDI Piano Trainer", data.pages.midi.intro, "/tools/midi-piano-trainer/", showcase.statusStable, showcase.openPage)}
        ${toolCard("Audio to MIDI Converter", data.pages.audio.intro, "/tools/audio-to-midi/", showcase.statusBeta, showcase.openPage)}
        ${toolCard("Open Transcription Studio", data.pages.transcription.intro, "/tools/open-transcription-studio/", showcase.statusPlanned, showcase.openPage)}
      </section>`;
  }

  if (route === "about") {
    return `
      <section class="grid two">
        <article class="panel">
          <h2>${escapeHtml(showcase.whyTitle)}</h2>
          <p>${escapeHtml(showcase.whyText)}</p>
        </article>
        <article class="panel">
          <h2>${escapeHtml(showcase.rulesTitle)}</h2>
          <p>${escapeHtml(showcase.rulesText)}</p>
        </article>
        <article class="panel">
          <h2>${escapeHtml(showcase.hostingTitle)}</h2>
          <p>${escapeHtml(showcase.hostingText)}</p>
        </article>
        <article class="panel">
          <h2>${escapeHtml(showcase.communityTitle)}</h2>
          <p>${escapeHtml(showcase.communityText)}</p>
        </article>
      </section>
      <section class="roadmap">
        <h2>${escapeHtml(showcase.roadmapTitle)}</h2>
        <ol>
          ${showcase.roadmap.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n          ")}
        </ol>
      </section>`;
  }

  if (route === "blog") {
    return `
      <section class="panel">
        <h2>${escapeHtml(showcase.contentTitle)}</h2>
        <p>${escapeHtml(showcase.contentText)}</p>
      </section>
      <section class="grid two">
        ${articleCard("How to Convert Audio to MIDI", "A practical guide for clean source audio, backend limits, and opening generated MIDI in the trainer.")}
        ${articleCard("Best Free MIDI Piano Practice Tools", "A comparison-style guide designed for real user intent and AdSense-safe original content.")}
        ${articleCard("Privacy-Friendly Transcription Tools", "A future guide for creators who need subtitle exports without subscription lock-in.")}
      </section>`;
  }

  if (isToolPage) {
    const tool = toolCopy(route, data.locale);
    return `
      <section class="project-overview">
        <article>
          <span class="status">${escapeHtml(tool.status)}</span>
          <h2>${escapeHtml(tool.snapshotTitle)}</h2>
          <p>${escapeHtml(tool.snapshotText)}</p>
        </article>
        <article>
          <h2>${escapeHtml(tool.currentTitle)}</h2>
          <ul>
            ${tool.current.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n            ")}
          </ul>
        </article>
        <article>
          <h2>${escapeHtml(tool.nextTitle)}</h2>
          <ul>
            ${tool.next.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n            ")}
          </ul>
        </article>
      </section>
      <section class="tool-actions">
        <a class="button primary" href="${tool.primaryUrl}">${escapeHtml(tool.primaryLabel)}</a>
        <a class="button" href="${tool.feedbackUrl}">${escapeHtml(data.ctaFeedback)}</a>
        <a class="button" href="${site.githubUrl}">${escapeHtml(data.ctaStar)}</a>
        <a class="button" href="${site.baseUrl}/donate/">${escapeHtml(data.ctaSupport)}</a>
        <a class="button" href="mailto:?subject=Open Free Tools&body=${encodeURIComponent(site.baseUrl)}">${escapeHtml(data.ctaShare)}</a>
      </section>
      <section class="panel">
        <h2>${escapeHtml(showcase.launchKitTitle)}</h2>
        <p>${escapeHtml(showcase.launchKitText)}</p>
      </section>
      <section class="panel ad-note">
        <h2>${escapeHtml(showcase.adsTitle)}</h2>
        <p>${escapeHtml(showcase.adsText)}</p>
      </section>`;
  }

  return `
      <section class="panel">
        <h2>${escapeHtml(showcase.rulesTitle)}</h2>
        <p>${escapeHtml(showcase.rulesText)}</p>
      </section>
      <section class="panel">
        <h2>${escapeHtml(showcase.monetizationTitle)}</h2>
        <p>${escapeHtml(showcase.monetizationText)}</p>
      </section>`;
}

function showcaseCopy(locale) {
  const copy = {
    en: {
      missionTitle: "A storefront for free tools",
      missionText: "This website is the public front door for the project: it explains what exists today, what is still beta, and why the tools are open-source.",
      statusTitle: "Honest project status",
      statusText: "MIDI Piano Trainer already works. Audio-to-MIDI is beta. Open Transcription Studio is planned. Users should see the whole direction before every feature is complete.",
      whyTitle: "Why this matters",
      whyText: "Useful creative tools often become subscription-only. Open Free Tools keeps the core workflow free, documents limits clearly, and lets people self-host or fork projects when they need control.",
      monetizationTitle: "How it can fund itself",
      monetizationText: "The project can use donations, sponsors, internal project promotion, and respectful ads on content pages. Ads should never block or confuse the working tool interface.",
      roadmapTitle: "Roadmap",
      roadmap: ["Keep the hub as a complete multilingual storefront.", "Polish MIDI Piano Trainer and the beta Audio-to-MIDI workflow.", "Create useful SEO guides before applying for AdSense.", "Prepare feedback-first launch materials for Reddit, Discord, short videos, GitHub, Show HN, Product Hunt, and AlternativeTo.", "Build Open Transcription Studio as a separate future tool."],
      earlyTitle: "Finding the first users",
      earlyText: "Early users should come from focused communities and short demos, not only from Google. Every launch post should ask for feedback, disclose authorship, and avoid spam.",
      toolsTitle: "Current and planned tools",
      toolsText: "The catalog includes working, beta, and planned tools. The goal is to show the ecosystem clearly even while some apps are still under construction.",
      rulesTitle: "Project rules",
      rulesText: "Core features stay free and open-source. The project does not copy paid services' brands, logos, UI, assets, private APIs, or protected behavior.",
      hostingTitle: "Hosting approach",
      hostingText: "Prefer static hosting and browser-side processing. Use optional backends only when heavy work cannot reasonably run in the browser.",
      communityTitle: "Community approach",
      communityText: "The project should grow through feedback, GitHub issues, useful guides, short demos, and honest launch posts in relevant communities.",
      contentTitle: "Content strategy",
      contentText: "Guides should solve real problems: converting audio to MIDI, practicing MIDI files, choosing free tools, and understanding privacy-friendly workflows.",
      launchKitTitle: "Launch kit",
      launchKitText: "Each tool needs a short pitch, screenshots or video, community post drafts, a feedback issue, and a release note before a public push.",
      adsTitle: "AdSense-safe placement",
      adsText: "Ads belong on guides, landing pages, and comparison content. They must not sit next to upload, play, convert, download, or editor controls.",
      statusStable: "live",
      statusBeta: "beta",
      statusPlanned: "planned",
      openPage: "Open page",
    },
    ru: {
      missionTitle: "Витрина бесплатных инструментов",
      missionText: "Этот сайт - публичный вход в проект: он объясняет, что уже работает, что пока в beta и почему инструменты остаются open-source.",
      statusTitle: "Честный статус проекта",
      statusText: "MIDI Piano Trainer уже работает. Audio-to-MIDI пока beta. Open Transcription Studio запланирован как отдельный будущий инструмент. Пользователь должен видеть направление проекта до полной готовности всех функций.",
      whyTitle: "Почему это важно",
      whyText: "Полезные creative-инструменты часто уходят в подписки. Open Free Tools сохраняет основной workflow бесплатным, честно объясняет ограничения и позволяет сделать fork или self-host.",
      monetizationTitle: "Как проект может себя поддерживать",
      monetizationText: "Проект может использовать донаты, sponsors, продвижение своих инструментов и уважительную рекламу на контентных страницах. Реклама не должна мешать рабочему интерфейсу инструментов.",
      roadmapTitle: "Roadmap",
      roadmap: ["Держать hub полноценной многоязычной витриной.", "Доработать MIDI Piano Trainer и beta Audio-to-MIDI workflow.", "Создать полезные SEO-гайды до заявки в AdSense.", "Подготовить feedback-first материалы для Reddit, Discord, коротких видео, GitHub, Show HN, Product Hunt и AlternativeTo.", "Создать Open Transcription Studio как отдельный будущий инструмент."],
      earlyTitle: "Поиск первых пользователей",
      earlyText: "Первые пользователи должны прийти из точных сообществ и коротких демо, а не только из Google. Каждый запуск должен просить feedback, раскрывать авторство и не выглядеть как спам.",
      toolsTitle: "Текущие и будущие инструменты",
      toolsText: "Каталог показывает рабочие, beta и запланированные инструменты, чтобы направление проекта было понятно сразу.",
      rulesTitle: "Правила проекта",
      rulesText: "Core-функции остаются бесплатными и open-source. Проект не копирует бренды, логотипы, UI, ассеты, private API или защищенное поведение платных сервисов.",
      hostingTitle: "Подход к hosting",
      hostingText: "Предпочитаем статический hosting и обработку в браузере. Backend остается optional и нужен только там, где тяжелую задачу нельзя разумно выполнить локально.",
      communityTitle: "Подход к сообществу",
      communityText: "Проект должен расти через feedback, GitHub issues, полезные гайды, короткие демо и честные посты в подходящих сообществах.",
      contentTitle: "Контент-стратегия",
      contentText: "Гайды должны решать реальные задачи: конвертация аудио в MIDI, практика MIDI-файлов, выбор бесплатных инструментов и privacy-friendly workflow.",
      launchKitTitle: "Launch kit",
      launchKitText: "Каждому инструменту нужен короткий pitch, screenshots или video, черновики постов для сообществ, feedback issue и release note.",
      adsTitle: "AdSense-safe размещение",
      adsText: "Реклама подходит для гайдов, landing pages и comparison content. Она не должна стоять рядом с Upload, Play, Convert, Download или editor controls.",
      statusStable: "работает",
      statusBeta: "beta",
      statusPlanned: "запланировано",
      openPage: "Открыть страницу",
    },
    de: {
      missionTitle: "Schaufenster fuer kostenlose Tools",
      missionText: "Diese Website ist der oeffentliche Eingang zum Projekt: Sie zeigt, was heute funktioniert, was beta ist und warum die Tools open source bleiben.",
      statusTitle: "Ehrlicher Projektstatus",
      statusText: "MIDI Piano Trainer funktioniert bereits. Audio-to-MIDI ist beta. Open Transcription Studio ist als separates zukuenftiges Tool geplant.",
      whyTitle: "Warum das wichtig ist",
      whyText: "Nuetzliche Kreativ-Tools werden oft zu Abo-Produkten. Open Free Tools haelt den Kern-Workflow kostenlos, erklaert Grenzen klar und erlaubt Forks oder Self-Hosting.",
      monetizationTitle: "Wie sich das Projekt finanzieren kann",
      monetizationText: "Das Projekt kann Spenden, Sponsoren, eigene Projektwerbung und respektvolle Anzeigen auf Content-Seiten nutzen. Anzeigen duerfen die Tool-Oberflaeche nicht stoeren.",
      roadmapTitle: "Roadmap",
      roadmap: ["Den Hub als vollstaendige mehrsprachige Projektvitrine halten.", "MIDI Piano Trainer und den beta Audio-to-MIDI Workflow weiter polieren.", "Nuetzliche SEO-Guides vor der AdSense-Bewerbung erstellen.", "Feedback-first Launch-Material fuer Reddit, Discord, kurze Videos, GitHub, Show HN, Product Hunt und AlternativeTo vorbereiten.", "Open Transcription Studio als separates zukuenftiges Tool bauen."],
      earlyTitle: "Erste Nutzer finden",
      earlyText: "Erste Nutzer sollen aus passenden Communities und kurzen Demos kommen, nicht nur aus Google. Jeder Post soll Feedback erbitten, Autorschaft offenlegen und Spam vermeiden.",
      toolsTitle: "Aktuelle und geplante Tools",
      toolsText: "Der Katalog zeigt funktionierende, beta und geplante Tools, damit Nutzer die Richtung des Projekts sofort verstehen.",
      rulesTitle: "Projektregeln",
      rulesText: "Kernfunktionen bleiben kostenlos und open source. Das Projekt kopiert keine Marken, Logos, UI, Assets, privaten APIs oder geschuetzten Ablaeufe bezahlter Dienste.",
      hostingTitle: "Hosting-Ansatz",
      hostingText: "Statisches Hosting und Browser-Verarbeitung haben Vorrang. Backends bleiben optional fuer Arbeit, die nicht sinnvoll lokal laufen kann.",
      communityTitle: "Community-Ansatz",
      communityText: "Das Projekt soll durch Feedback, GitHub Issues, nuetzliche Guides, kurze Demos und ehrliche Posts in passenden Communities wachsen.",
      contentTitle: "Content-Strategie",
      contentText: "Guides sollen echte Probleme loesen: Audio zu MIDI, MIDI-Dateien ueben, kostenlose Tools vergleichen und Privacy-Workflows verstehen.",
      launchKitTitle: "Launch kit",
      launchKitText: "Jedes Tool braucht einen kurzen Pitch, Screenshots oder Video, Community-Post-Entwuerfe, ein Feedback-Issue und Release Notes.",
      adsTitle: "AdSense-sichere Platzierung",
      adsText: "Anzeigen passen auf Guides, Landing Pages und Vergleichsinhalte. Sie duerfen nicht neben Upload, Play, Convert, Download oder Editor-Controls stehen.",
      statusStable: "live",
      statusBeta: "beta",
      statusPlanned: "geplant",
      openPage: "Seite oeffnen",
    },
    es: {
      missionTitle: "Escaparate de herramientas gratis",
      missionText: "Esta web es la entrada publica del proyecto: explica que funciona hoy, que esta en beta y por que las herramientas siguen siendo open-source.",
      statusTitle: "Estado honesto del proyecto",
      statusText: "MIDI Piano Trainer ya funciona. Audio-to-MIDI esta en beta. Open Transcription Studio esta planeado como una herramienta futura separada.",
      whyTitle: "Por que importa",
      whyText: "Muchas herramientas creativas utiles terminan siendo de suscripcion. Open Free Tools mantiene gratis el flujo principal, explica limites y permite forks o self-hosting.",
      monetizationTitle: "Como puede financiarse",
      monetizationText: "El proyecto puede usar donaciones, sponsors, promocion de proyectos propios y anuncios respetuosos en paginas de contenido. Los anuncios no deben molestar al interfaz de trabajo.",
      roadmapTitle: "Roadmap",
      roadmap: ["Mantener el hub como escaparate multilingue completo.", "Pulir MIDI Piano Trainer y el flujo beta de Audio-to-MIDI.", "Crear guias SEO utiles antes de solicitar AdSense.", "Preparar materiales feedback-first para Reddit, Discord, videos cortos, GitHub, Show HN, Product Hunt y AlternativeTo.", "Crear Open Transcription Studio como herramienta futura separada."],
      earlyTitle: "Encontrar los primeros usuarios",
      earlyText: "Los primeros usuarios deben venir de comunidades concretas y demos cortas, no solo de Google. Cada publicacion debe pedir feedback, revelar autoria y evitar spam.",
      toolsTitle: "Herramientas actuales y planeadas",
      toolsText: "El catalogo muestra herramientas funcionales, beta y planeadas para que la direccion del proyecto sea clara.",
      rulesTitle: "Reglas del proyecto",
      rulesText: "Las funciones principales siguen gratis y open-source. El proyecto no copia marcas, logos, UI, assets, APIs privadas ni comportamiento protegido de servicios de pago.",
      hostingTitle: "Enfoque de hosting",
      hostingText: "Preferimos hosting estatico y procesamiento en el navegador. Los backends son opcionales solo cuando el trabajo pesado no puede hacerse bien localmente.",
      communityTitle: "Enfoque de comunidad",
      communityText: "El proyecto debe crecer con feedback, GitHub issues, guias utiles, demos cortas y publicaciones honestas en comunidades relevantes.",
      contentTitle: "Estrategia de contenido",
      contentText: "Las guias deben resolver problemas reales: convertir audio a MIDI, practicar archivos MIDI, elegir herramientas gratis y entender workflows privados.",
      launchKitTitle: "Launch kit",
      launchKitText: "Cada herramienta necesita un pitch corto, screenshots o video, borradores para comunidades, un feedback issue y una nota de release.",
      adsTitle: "Colocacion segura para AdSense",
      adsText: "Los anuncios pertenecen a guias, landing pages y comparativas. No deben estar junto a Upload, Play, Convert, Download ni controles de editor.",
      statusStable: "live",
      statusBeta: "beta",
      statusPlanned: "planeado",
      openPage: "Abrir pagina",
    },
    hy: {
      missionTitle: "Անվճար գործիքների ցուցափեղկ",
      missionText: "Այս կայքը նախագծի հանրային մուտքն է. այն բացատրում է, ինչն արդեն աշխատում է, ինչը դեռ beta է եւ ինչու գործիքները մնում են open-source:",
      statusTitle: "Նախագծի ազնիվ վիճակ",
      statusText: "MIDI Piano Trainer-ն արդեն աշխատում է: Audio-to-MIDI-ն beta է: Open Transcription Studio-ն պլանավորված է որպես առանձին ապագա գործիք:",
      whyTitle: "Ինչու է սա կարեւոր",
      whyText: "Օգտակար creative գործիքները հաճախ դառնում են բաժանորդագրությամբ: Open Free Tools-ը պահում է հիմնական workflow-ը անվճար, հստակ բացատրում է սահմանափակումները եւ թույլ է տալիս fork կամ self-host:",
      monetizationTitle: "Ինչպես կարող է նախագիծը զարգանալ",
      monetizationText: "Նախագիծը կարող է օգտագործել նվիրատվություններ, sponsors, սեփական գործիքների առաջխաղացում եւ հարգալից գովազդ content էջերում: Գովազդը չպետք է խանգարի գործիքի աշխատանքային միջերեսին:",
      roadmapTitle: "Roadmap",
      roadmap: ["Պահել hub-ը որպես ամբողջական բազմալեզու ցուցափեղկ:", "Բարելավել MIDI Piano Trainer-ը եւ beta Audio-to-MIDI workflow-ը:", "Ստեղծել օգտակար SEO guides մինչ AdSense դիմումը:", "Պատրաստել feedback-first նյութեր Reddit-ի, Discord-ի, կարճ տեսանյութերի, GitHub-ի, Show HN-ի, Product Hunt-ի եւ AlternativeTo-ի համար:", "Ստեղծել Open Transcription Studio-ն որպես առանձին ապագա գործիք:"],
      earlyTitle: "Առաջին օգտատերերը",
      earlyText: "Առաջին օգտատերերը պետք է գան թեմատիկ communities-ից եւ կարճ demo-ներից, ոչ միայն Google-ից: Յուրաքանչյուր launch post պետք է խնդրի feedback, բացահայտի հեղինակությունը եւ չլինի spam:",
      toolsTitle: "Ներկա եւ պլանավորված գործիքներ",
      toolsText: "Կատալոգը ցույց է տալիս աշխատող, beta եւ պլանավորված գործիքները, որպեսզի նախագծի ուղղությունը պարզ լինի:",
      rulesTitle: "Նախագծի կանոններ",
      rulesText: "Core ֆունկցիաները մնում են անվճար եւ open-source: Նախագիծը չի պատճենում paid services-ի brands, logos, UI, assets, private APIs կամ protected behavior:",
      hostingTitle: "Hosting մոտեցում",
      hostingText: "Նախընտրում ենք static hosting եւ browser-side processing: Backend-ը optional է եւ պետք է միայն այն դեպքերում, երբ ծանր աշխատանքը հնարավոր չէ նորմալ անել browser-ում:",
      communityTitle: "Community մոտեցում",
      communityText: "Նախագիծը պետք է աճի feedback-ի, GitHub issues-ի, օգտակար guides-ի, կարճ demo-ների եւ ազնիվ community posts-ի միջոցով:",
      contentTitle: "Content strategy",
      contentText: "Guides-ը պետք է լուծեն իրական խնդիրներ՝ audio to MIDI, MIDI practice, անվճար գործիքների ընտրություն եւ privacy-friendly workflows:",
      launchKitTitle: "Launch kit",
      launchKitText: "Յուրաքանչյուր գործիք պետք է ունենա short pitch, screenshots կամ video, community post drafts, feedback issue եւ release note:",
      adsTitle: "AdSense-safe տեղադրում",
      adsText: "Գովազդը տեղավորվում է guides-ի, landing pages-ի եւ comparison content-ի մեջ: Այն չպետք է լինի Upload, Play, Convert, Download կամ editor controls-ի կողքին:",
      statusStable: "աշխատում է",
      statusBeta: "beta",
      statusPlanned: "պլանավորված",
      openPage: "Բացել էջը",
    },
  };

  return copy[locale] || copy.en;
}

function toolCopy(route, locale) {
  const language = languages[locale] ? locale : "en";
  const feedbackUrl = "https://github.com/John1912-7/midi-piano-trainer/issues";
  const labels = {
    en: {
      tryMidi: "Try MIDI Piano Trainer",
      tryAudio: "Try Audio-to-MIDI",
      roadmap: "View roadmap",
      what: "What it is",
      current: "Already available",
      next: "Next",
      midiStatus: "First live tool",
      audioStatus: "Beta tool",
      transcriptionStatus: "Planned tool",
      midiText: "A browser piano trainer: users upload a MIDI file, follow falling notes, listen to the piano sound, and play with a PC keyboard.",
      audioText: "A beta converter for user-owned piano audio. The public page uses the official backend automatically, then lets users download MIDI or open it in the trainer.",
      transcriptionText: "A future open-source transcription editor for audio and video with a privacy-first workflow and subtitle exports.",
      midiCurrent: ["Browser MIDI upload", "Falling notes", "Track selection", "Listen mode", "Multilingual pages"],
      audioCurrent: ["Own audio upload", "Automatic official backend", "Clear limits and waiting states", "MIDI download", "Open generated MIDI in trainer"],
      transcriptionCurrent: ["Roadmap page", "Legal-safe positioning", "Separate future project", "Planned TXT/SRT/VTT exports"],
      midiNext: ["Add demo assets", "Prepare launch kit", "Connect SEO guides", "Collect first-user feedback"],
      audioNext: ["Improve conversion quality", "Add troubleshooting", "Show examples of good source audio", "Prepare a short demo video"],
      transcriptionNext: ["Define MVP", "Choose local-first approach", "Avoid copying paid-service brand or UI", "Create a separate project"],
    },
    ru: {
      tryMidi: "Открыть MIDI Piano Trainer",
      tryAudio: "Открыть Audio-to-MIDI",
      roadmap: "Открыть roadmap",
      what: "Что это",
      current: "Уже есть",
      next: "Дальше",
      midiStatus: "Первый live-инструмент",
      audioStatus: "Beta-инструмент",
      transcriptionStatus: "Запланированный инструмент",
      midiText: "Браузерный piano trainer: пользователь загружает MIDI-файл, следит за падающими нотами, слушает звук пианино и играет на клавиатуре ПК.",
      audioText: "Beta-конвертер пользовательского piano-аудио. Публичная страница автоматически использует официальный backend, а результат можно скачать или открыть в тренажере.",
      transcriptionText: "Будущий open-source редактор транскрипции для аудио и видео с privacy-first workflow и экспортом субтитров.",
      midiCurrent: ["Загрузка MIDI в браузере", "Падающие ноты", "Выбор дорожек", "Прослушивание MIDI", "Многоязычные страницы"],
      audioCurrent: ["Загрузка своего аудио", "Автоматический официальный backend", "Понятные лимиты и ожидание", "Скачивание MIDI", "Открытие MIDI в тренажере"],
      transcriptionCurrent: ["Roadmap-страница", "Юридически безопасное позиционирование", "Отдельный будущий проект", "Планируемый TXT/SRT/VTT export"],
      midiNext: ["Добавить demo-материалы", "Подготовить launch kit", "Связать с SEO-гайдами", "Собрать feedback первых пользователей"],
      audioNext: ["Улучшить качество распознавания", "Добавить troubleshooting", "Показать примеры хорошего исходного аудио", "Подготовить короткое demo video"],
      transcriptionNext: ["Определить MVP", "Выбрать local-first подход", "Не копировать бренд или UI платных сервисов", "Создать отдельный проект"],
    },
    de: {
      tryMidi: "MIDI Piano Trainer oeffnen",
      tryAudio: "Audio-to-MIDI oeffnen",
      roadmap: "Roadmap ansehen",
      what: "Was es ist",
      current: "Bereits verfuegbar",
      next: "Naechstes",
      midiStatus: "Erstes Live-Tool",
      audioStatus: "Beta-Tool",
      transcriptionStatus: "Geplantes Tool",
      midiText: "Ein Browser-Klaviertrainer: Nutzer laden eine MIDI-Datei, folgen fallenden Noten, hoeren den Klavierklang und spielen mit der PC-Tastatur.",
      audioText: "Ein beta Converter fuer eigene Klavieraufnahmen. Die oeffentliche Seite nutzt automatisch das offizielle Backend und kann MIDI herunterladen oder im Trainer oeffnen.",
      transcriptionText: "Ein zukuenftiger Open-Source-Transkriptionseditor fuer Audio und Video mit Privacy-first Workflow und Untertitel-Export.",
      midiCurrent: ["MIDI-Upload im Browser", "Fallende Noten", "Spurauswahl", "MIDI anhoeren", "Mehrsprachige Seiten"],
      audioCurrent: ["Eigenes Audio hochladen", "Automatisches offizielles Backend", "Klare Limits und Wartezustand", "MIDI-Download", "MIDI im Trainer oeffnen"],
      transcriptionCurrent: ["Roadmap-Seite", "Rechtlich sichere Positionierung", "Separates Zukunftsprojekt", "Geplanter TXT/SRT/VTT Export"],
      midiNext: ["Demo-Material ergaenzen", "Launch kit vorbereiten", "Mit SEO-Guides verbinden", "Feedback erster Nutzer sammeln"],
      audioNext: ["Erkennungsqualitaet verbessern", "Troubleshooting ergaenzen", "Gute Audio-Beispiele zeigen", "Kurzes Demo-Video vorbereiten"],
      transcriptionNext: ["MVP definieren", "Local-first Ansatz waehlen", "Keine bezahlten Marken oder UI kopieren", "Separates Projekt erstellen"],
    },
    es: {
      tryMidi: "Abrir MIDI Piano Trainer",
      tryAudio: "Abrir Audio-to-MIDI",
      roadmap: "Ver roadmap",
      what: "Que es",
      current: "Ya disponible",
      next: "Siguiente",
      midiStatus: "Primera herramienta live",
      audioStatus: "Herramienta beta",
      transcriptionStatus: "Herramienta planeada",
      midiText: "Un entrenador de piano en el navegador: el usuario sube MIDI, sigue notas descendentes, escucha el piano y toca con el teclado del PC.",
      audioText: "Un conversor beta para audio de piano propio. La pagina publica usa automaticamente el backend oficial y permite descargar MIDI o abrirlo en el entrenador.",
      transcriptionText: "Un futuro editor open-source de transcripcion para audio y video con enfoque privacy-first y exportacion de subtitulos.",
      midiCurrent: ["Carga MIDI en el navegador", "Notas descendentes", "Seleccion de pistas", "Escuchar MIDI", "Paginas multilingues"],
      audioCurrent: ["Subida de audio propio", "Backend oficial automatico", "Limites y espera claros", "Descarga MIDI", "Abrir MIDI en el entrenador"],
      transcriptionCurrent: ["Pagina roadmap", "Posicionamiento legal seguro", "Proyecto futuro separado", "Exportacion TXT/SRT/VTT planeada"],
      midiNext: ["Anadir demos", "Preparar launch kit", "Conectar guias SEO", "Recoger feedback inicial"],
      audioNext: ["Mejorar calidad de reconocimiento", "Anadir troubleshooting", "Mostrar ejemplos de buen audio", "Preparar video demo corto"],
      transcriptionNext: ["Definir MVP", "Elegir enfoque local-first", "No copiar marca ni UI de servicios de pago", "Crear proyecto separado"],
    },
    hy: {
      tryMidi: "Բացել MIDI Piano Trainer-ը",
      tryAudio: "Բացել Audio-to-MIDI-ը",
      roadmap: "Բացել roadmap-ը",
      what: "Ինչ է սա",
      current: "Արդեն կա",
      next: "Հաջորդը",
      midiStatus: "Առաջին live գործիք",
      audioStatus: "Beta գործիք",
      transcriptionStatus: "Պլանավորված գործիք",
      midiText: "Browser piano trainer. Օգտատերը բեռնում է MIDI ֆայլ, հետեւում է ընկնող նոտաներին, լսում է piano sound-ը եւ նվագում PC keyboard-ով:",
      audioText: "Beta converter սեփական piano audio-ի համար: Public էջը ավտոմատ օգտագործում է official backend-ը, հետո թույլ է տալիս ներբեռնել MIDI կամ բացել այն trainer-ում:",
      transcriptionText: "Ապագա open-source transcription editor audio եւ video-ի համար՝ privacy-first workflow-ով եւ subtitle export-ով:",
      midiCurrent: ["MIDI բեռնում browser-ում", "Ընկնող նոտաներ", "Track selection", "MIDI լսել", "Բազմալեզու էջեր"],
      audioCurrent: ["Սեփական audio upload", "Ավտոմատ official backend", "Հստակ limits եւ սպասում", "MIDI download", "Բացել MIDI-ը trainer-ում"],
      transcriptionCurrent: ["Roadmap էջ", "Իրավական անվտանգ positioning", "Առանձին ապագա նախագիծ", "Պլանավորված TXT/SRT/VTT export"],
      midiNext: ["Ավելացնել demo նյութեր", "Պատրաստել launch kit", "Կապել SEO guides-ի հետ", "Հավաքել առաջին feedback-ը"],
      audioNext: ["Բարելավել ճանաչման որակը", "Ավելացնել troubleshooting", "Ցույց տալ լավ audio օրինակներ", "Պատրաստել կարճ demo video"],
      transcriptionNext: ["Սահմանել MVP", "Ընտրել local-first մոտեցում", "Չկրկնօրինակել paid service brand կամ UI", "Ստեղծել առանձին նախագիծ"],
    },
  };
  const t = labels[language] || labels.en;
  const audioUrl = site.midiUrl + language + "/audio-to-midi/";
  const routes = {
    midi: { status: t.midiStatus, snapshotTitle: t.what, snapshotText: t.midiText, currentTitle: t.current, current: t.midiCurrent, nextTitle: t.next, next: t.midiNext, primaryUrl: site.midiUrl, primaryLabel: t.tryMidi, feedbackUrl },
    audio: { status: t.audioStatus, snapshotTitle: t.what, snapshotText: t.audioText, currentTitle: t.current, current: t.audioCurrent, nextTitle: t.next, next: t.audioNext, primaryUrl: audioUrl, primaryLabel: t.tryAudio, feedbackUrl },
    transcription: { status: t.transcriptionStatus, snapshotTitle: t.what, snapshotText: t.transcriptionText, currentTitle: t.current, current: t.transcriptionCurrent, nextTitle: t.next, next: t.transcriptionNext, primaryUrl: site.baseUrl + "/" + language + "/contribute/", primaryLabel: t.roadmap, feedbackUrl: site.baseUrl + "/" + language + "/contact/" },
  };

  return routes[route] || routes.midi;
}

function toolCard(title, text, href, status, linkLabel = "Open page") {
  return `<article class="card">
          <span class="status">${status}</span>
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(text)}</p>
          <a href="${site.baseUrl}${href}">${escapeHtml(linkLabel)}</a>
        </article>`;
}

function articleCard(title, text) {
  return `<article class="card">
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(text)}</p>
          <a href="#">Planned article</a>
        </article>`;
}

function canonical(path) {
  return `${site.baseUrl}/${path ? `${path.replaceAll("\\", "/")}/` : ""}`;
}

function relativePrefix(path) {
  if (!path) return "";
  return "../".repeat(path.replaceAll("\\", "/").split("/").filter(Boolean).length);
}

function alternateLinks(route) {
  const routePath = routeMap[route];
  const lines = [`    <link rel="alternate" hreflang="x-default" href="${canonical(routePath)}" />`];
  for (const code of languageCodes) {
    lines.push(`    <link rel="alternate" hreflang="${code}" href="${canonical(join(code, routePath).replaceAll("\\", "/"))}" />`);
  }
  return lines.join("\n");
}

function buildStructuredData(route, data, page, url) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.baseUrl,
    sameAs: [site.githubUrl],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.baseUrl,
    inLanguage: languageCodes,
    description: page.description,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: site.name,
        item: `${site.baseUrl}/`,
      },
    ],
  };

  if (route !== "home") {
    breadcrumb.itemListElement.push({
      "@type": "ListItem",
      position: 2,
      name: page.h1,
      item: url,
    });
  }

  if (route === "tools" || route === "home") {
    return [
      organization,
      website,
      breadcrumb,
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: data.pages.tools.h1,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "MIDI Piano Trainer",
            url: `${site.baseUrl}/tools/midi-piano-trainer/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Audio to MIDI Converter",
            url: `${site.baseUrl}/tools/audio-to-midi/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Open Transcription Studio",
            url: `${site.baseUrl}/tools/open-transcription-studio/`,
          },
        ],
      },
    ];
  }

  if (["midi", "audio", "transcription"].includes(route)) {
    return [
      organization,
      breadcrumb,
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: page.h1,
        applicationCategory: route === "transcription" ? "MultimediaApplication" : "MusicApplication",
        operatingSystem: "Web",
        url,
        description: page.description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        isAccessibleForFree: true,
      },
    ];
  }

  return [organization, website, breadcrumb];
}

function jsonLdScript(data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

function sitemapMeta(path) {
  const normalized = path.replaceAll("\\", "/");
  if (!normalized) return { changefreq: "weekly", priority: "1.0" };
  if (normalized.endsWith("tools")) return { changefreq: "weekly", priority: "0.9" };
  if (normalized.includes("/tools/") || normalized.startsWith("tools/")) return { changefreq: "weekly", priority: "0.8" };
  if (normalized.endsWith("blog")) return { changefreq: "weekly", priority: "0.7" };
  return { changefreq: "monthly", priority: "0.6" };
}

function buildSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = generatedPaths.map((path) => {
    const meta = sitemapMeta(path);
    return `  <url>
    <loc>${canonical(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`;
  }).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[char]);
}

const styles = `:root {
  color-scheme: light;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #f6faf8;
  color: #17211d;
  --ink: #17211d;
  --muted: #5b6a63;
  --panel: #ffffff;
  --line: #dce5e1;
  --accent: #087f68;
  --accent-dark: #075f50;
  --soft: #eaf5f1;
  --surface: #f6faf8;
  --surface-2: #edf5f1;
  --shadow: rgba(23, 33, 29, 0.1);
  --hero-glow: rgba(8, 127, 104, 0.12);
}

:root[data-theme="dark"] {
  color-scheme: dark;
  background: #0f1714;
  color: #edf7f3;
  --ink: #edf7f3;
  --muted: #9eb0aa;
  --panel: #15211d;
  --line: #2d3d37;
  --accent: #57d6b5;
  --accent-dark: #8ee8c7;
  --soft: #18332b;
  --surface: #0f1714;
  --surface-2: #111d19;
  --shadow: rgba(0, 0, 0, 0.28);
  --hero-glow: rgba(87, 214, 181, 0.14);
}

* { box-sizing: border-box; }
body {
  margin: 0;
  min-width: 320px;
  background:
    radial-gradient(circle at 80% 8%, var(--hero-glow), transparent 26rem),
    var(--surface);
}
a { color: var(--accent); font-weight: 700; }
.site-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 18px;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
  padding: 18px;
}
.brand { display: inline-flex; gap: 10px; align-items: center; color: var(--ink); text-decoration: none; }
.brand span {
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  border-radius: 8px;
  background: var(--accent);
  color: #fff;
}
nav { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
nav a {
  border-radius: 8px;
  padding: 8px 10px;
  color: var(--muted);
  text-decoration: none;
}
nav a:hover {
  background: var(--soft);
  color: var(--accent);
}
.header-controls {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-self: end;
}
.theme-toggle,
.language-menu summary {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel);
  color: var(--ink);
  cursor: pointer;
}
.theme-toggle {
  width: 44px;
  padding: 0;
  font: inherit;
  font-size: 18px;
}
.language-menu {
  position: relative;
}
.language-menu summary {
  width: 58px;
  gap: 4px;
  list-style: none;
}
.language-menu summary::-webkit-details-marker { display: none; }
.flag {
  font-size: 22px;
  line-height: 1;
}
.chevron {
  color: var(--muted);
  font-size: 12px;
}
.language-list {
  position: absolute;
  z-index: 10;
  top: calc(100% + 8px);
  right: 0;
  display: grid;
  min-width: 190px;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 6px;
  background: var(--panel);
  box-shadow: 0 18px 40px var(--shadow);
}
.language-list a {
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 8px;
  padding: 9px 10px;
  color: var(--ink);
  text-decoration: none;
}
.language-list a:hover,
.language-list a[aria-current="true"] {
  background: var(--soft);
  color: var(--accent);
}
main { max-width: 1180px; margin: 0 auto; padding: 18px; }
.hero {
  padding: 58px 0 34px;
}
.hero-split {
  display: grid;
  grid-template-columns: minmax(0, 1.06fr) minmax(330px, .94fr);
  gap: 34px;
  align-items: center;
}
.hero-copy {
  max-width: 880px;
}
.eyebrow {
  margin: 0 0 10px;
  color: var(--accent);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: .08em;
  text-transform: uppercase;
}
h1 { margin: 0; font-size: clamp(34px, 7vw, 68px); line-height: 1; letter-spacing: 0; }
h2 { margin: 0 0 10px; font-size: 22px; }
p { color: var(--muted); line-height: 1.65; }
.hero p:not(.eyebrow) { max-width: 760px; font-size: 18px; }
.hero-actions, .tool-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
.button {
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0 14px;
  background: var(--panel);
  color: var(--ink);
  text-decoration: none;
}
.button.primary { border-color: var(--accent); background: var(--accent); color: #fff; }
.studio-hero {
  position: relative;
  min-height: 370px;
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
  background:
    linear-gradient(135deg, var(--panel), var(--surface-2));
  box-shadow: 0 22px 60px var(--shadow);
}
.studio-hero::before {
  content: "";
  position: absolute;
  inset: 28px;
  border-radius: 8px;
  background:
    linear-gradient(90deg, transparent 0 58%, rgba(8, 127, 104, 0.12) 58% 100%),
    repeating-linear-gradient(90deg, transparent 0 46px, rgba(8, 127, 104, 0.08) 46px 48px);
}
.desk-card {
  position: absolute;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel);
  box-shadow: 0 16px 34px var(--shadow);
}
.screen-card {
  inset: 44px 42px 126px;
  padding: 16px;
}
.screen-top {
  height: 9px;
  width: 86px;
  border-radius: 999px;
  background: var(--soft);
}
.wave-lines {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  align-items: end;
  height: 82px;
  margin-top: 24px;
}
.wave-lines span {
  display: block;
  border-radius: 999px 999px 8px 8px;
  background: var(--accent);
}
.wave-lines span:nth-child(1) { height: 32px; opacity: .45; }
.wave-lines span:nth-child(2) { height: 62px; opacity: .8; }
.wave-lines span:nth-child(3) { height: 44px; opacity: .55; }
.wave-lines span:nth-child(4) { height: 76px; opacity: .95; }
.wave-lines span:nth-child(5) { height: 38px; opacity: .5; }
.code-lines {
  display: grid;
  gap: 8px;
  margin-top: 16px;
}
.code-lines span {
  display: block;
  height: 9px;
  border-radius: 999px;
  background: var(--soft);
}
.code-lines span:nth-child(2) { width: 78%; }
.code-lines span:nth-child(3) { width: 52%; }
.midi-card {
  right: 44px;
  bottom: 42px;
  width: min(68%, 330px);
  height: 74px;
  padding: 14px;
}
.mini-keyboard {
  height: 38px;
  border-radius: 8px;
  background:
    repeating-linear-gradient(90deg, #fff 0 24px, #dce5e1 24px 26px),
    #fff;
}
.round-control {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--accent);
}
.note-card {
  left: 44px;
  bottom: 54px;
  display: grid;
  gap: 2px;
  min-width: 118px;
  padding: 14px;
}
.note-card strong {
  font-size: 28px;
}
.note-card span {
  color: var(--muted);
  font-weight: 700;
}
.grid { display: grid; gap: 14px; margin: 20px 0; }
.grid.three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.grid.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.showcase-band {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
  gap: 14px;
  margin: 8px 0 20px;
}
.card, .panel {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 18px;
  background: var(--panel);
}
.showcase-band > div,
.roadmap,
.project-overview article {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 18px;
  background: var(--panel);
}
.card p, .panel p { margin-bottom: 0; }
.roadmap { margin: 20px 0; }
.roadmap ol { margin: 0; padding-left: 22px; color: var(--muted); line-height: 1.7; }
.project-overview {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 14px;
  margin: 10px 0 18px;
}
.project-overview ul {
  margin: 0;
  padding-left: 20px;
  color: var(--muted);
  line-height: 1.7;
}
.status {
  display: inline-flex;
  margin-bottom: 12px;
  border-radius: 999px;
  padding: 5px 9px;
  background: var(--soft);
  color: var(--accent-dark);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}
.ad-note { background: #fbfdfc; }
:root[data-theme="dark"] .ad-note { background: #13201c; }
footer {
  max-width: 1180px;
  margin: 30px auto 0;
  border-top: 1px solid var(--line);
  padding: 18px;
}
footer p { margin: 6px 0; font-size: 14px; }
@media (max-width: 840px) {
  .site-header { grid-template-columns: 1fr; }
  .header-controls { justify-self: start; }
  .language-list { right: auto; left: 0; }
  .hero-split, .grid.three, .grid.two, .showcase-band, .project-overview { grid-template-columns: 1fr; }
  .hero { padding-top: 28px; }
  .studio-hero { min-height: 320px; }
}
`;

await writeStaticAssets();

for (const route of rootRoutes) {
  await writePage(route, "en", routeMap[route]);
}

for (const lang of languageCodes) {
  for (const route of rootRoutes) {
    await writePage(route, lang, join(lang, routeMap[route]));
  }
}

await writeFile("sitemap.xml", buildSitemap(), "utf8");
await writeFile("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${site.baseUrl}/sitemap.xml\n`, "utf8");
