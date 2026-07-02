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
      freeMidiGuide: {
        title: "Free MIDI Piano Trainer Online - Practice MIDI in Your Browser",
        description:
          "Learn how the free MIDI Piano Trainer helps you upload MIDI files, follow falling notes, choose tracks, and practice piano from a browser.",
        h1: "Free MIDI Piano Trainer Online Guide",
        intro:
          "A practical guide to using MIDI Piano Trainer as a free browser-based piano practice tool for your own MIDI files.",
      },
      freeAudioGuide: {
        title: "Free Audio to MIDI Converter Online - Open Free Tools Guide",
        description:
          "Understand what the free Audio to MIDI Converter can do, which audio works best, and how to download or open generated MIDI files.",
        h1: "Free Audio to MIDI Converter Guide",
        intro:
          "A plain-language guide to the beta audio-to-MIDI workflow, realistic quality expectations, and the best source audio to try first.",
      },
      howConvertGuide: {
        title: "How to Convert Audio to MIDI - Step by Step Guide",
        description:
          "Step-by-step guide for converting your own audio to MIDI, preparing clean piano recordings, waiting for backend processing, and checking results.",
        h1: "How to Convert Audio to MIDI",
        intro:
          "Follow this workflow to prepare an audio file, convert it to MIDI, download the result, and open it in MIDI Piano Trainer.",
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
        h1: "Contact Open Free Tools",
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
      freeMidiGuide: {
        title: "Бесплатный MIDI Piano Trainer онлайн - практика в браузере",
        description:
          "Как бесплатный MIDI Piano Trainer помогает загружать MIDI, видеть падающие ноты, выбирать дорожки и тренироваться в браузере.",
        h1: "Бесплатный MIDI Piano Trainer онлайн - гайд",
        intro:
          "Практический гайд по MIDI Piano Trainer: бесплатному браузерному тренажеру для занятий по своим MIDI-файлам.",
      },
      freeAudioGuide: {
        title: "Бесплатный конвертер аудио в MIDI онлайн - гайд",
        description:
          "Что умеет бесплатный Audio to MIDI Converter, какие аудиофайлы подходят лучше всего и как скачать или открыть MIDI результат.",
        h1: "Бесплатный конвертер аудио в MIDI - гайд",
        intro:
          "Простой гайд по beta audio-to-MIDI workflow, ожиданиям по качеству и подготовке хорошего исходного аудио.",
      },
      howConvertGuide: {
        title: "Как конвертировать аудио в MIDI - пошаговый гайд",
        description:
          "Пошаговая инструкция: подготовьте свое аудио, запустите конвертацию в MIDI, дождитесь backend-обработки и проверьте результат.",
        h1: "Как конвертировать аудио в MIDI",
        intro:
          "Пошаговый workflow: загрузить аудиофайл, получить MIDI, скачать результат и открыть его в MIDI Piano Trainer.",
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
        title: "Юридическое предупреждение - Open Free Tools",
        description: "Open Free Tools является независимым проектом и не связан с платными сервисами, которые упоминаются в сравнениях.",
        h1: "Юридическое предупреждение",
        intro: "Проект делает независимые альтернативы и не копирует бренды, логотипы, приватные API, ассеты или интерфейсы платных сервисов.",
      },
      contact: {
        title: "Контакт - Open Free Tools",
        description: "Связь с Open Free Tools для багов, фидбека, идей запуска, партнерств и юридических запросов.",
        h1: "Контакт Open Free Tools",
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
      freeMidiGuide: {
        title: "Kostenloser MIDI Piano Trainer online - im Browser ueben",
        description:
          "So hilft der kostenlose MIDI Piano Trainer beim Hochladen von MIDI-Dateien, fallenden Noten, Spurauswahl und Browser-Piano-Uebung.",
        h1: "Kostenloser MIDI Piano Trainer online Guide",
        intro:
          "Ein praktischer Guide zum MIDI Piano Trainer als kostenlosem Browser-Tool fuer eigene MIDI-Dateien.",
      },
      freeAudioGuide: {
        title: "Kostenloser Audio zu MIDI Converter online - Guide",
        description:
          "Was der kostenlose Audio-to-MIDI Converter kann, welche Aufnahmen am besten funktionieren und wie MIDI-Ergebnisse geoeffnet werden.",
        h1: "Kostenloser Audio zu MIDI Converter Guide",
        intro:
          "Ein klarer Guide zum beta Audio-to-MIDI Workflow, realistischen Qualitaetserwartungen und guten Ausgangsaufnahmen.",
      },
      howConvertGuide: {
        title: "Audio in MIDI umwandeln - Schritt fuer Schritt",
        description:
          "Schritt-fuer-Schritt-Anleitung zum Vorbereiten eigener Audiodateien, Starten der MIDI-Konvertierung und Pruefen des Ergebnisses.",
        h1: "Audio in MIDI umwandeln",
        intro:
          "Dieser Workflow zeigt, wie man Audio hochlaedt, MIDI erzeugt, herunterlaedt und im MIDI Piano Trainer oeffnet.",
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
        h1: "Kontakt Open Free Tools",
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
      freeMidiGuide: {
        title: "MIDI Piano Trainer gratis online - practica en el navegador",
        description:
          "Como el MIDI Piano Trainer gratis ayuda a subir MIDI, seguir notas descendentes, elegir pistas y practicar piano desde el navegador.",
        h1: "MIDI Piano Trainer gratis online - guia",
        intro:
          "Una guia practica para usar MIDI Piano Trainer como herramienta gratis de practica con tus propios archivos MIDI.",
      },
      freeAudioGuide: {
        title: "Conversor audio a MIDI gratis online - guia",
        description:
          "Que puede hacer el conversor gratis de audio a MIDI, que audio funciona mejor y como descargar o abrir el MIDI generado.",
        h1: "Conversor audio a MIDI gratis - guia",
        intro:
          "Guia sencilla del flujo beta audio-to-MIDI, expectativas realistas de calidad y buen audio de origen.",
      },
      howConvertGuide: {
        title: "Como convertir audio a MIDI - guia paso a paso",
        description:
          "Guia paso a paso para preparar audio propio, convertirlo a MIDI, esperar el procesamiento y revisar el resultado.",
        h1: "Como convertir audio a MIDI",
        intro:
          "Este workflow muestra como subir audio, generar MIDI, descargarlo y abrirlo en MIDI Piano Trainer.",
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
        h1: "Contacto Open Free Tools",
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
        description: "Ձեր սեփական աուդիո ֆայլերը վերածեք MIDI-ի optional backend-ի միջոցով եւ բացեք արդյունքը trainer-ում:",
        h1: "Անվճար Audio to MIDI Converter",
        intro: "Audio-to-MIDI-ն beta է. վերբեռնեք ձեր ֆայլը, ստացեք MIDI եւ բացեք trainer-ում:",
      },
      transcription: {
        title: "Open Source Transcription Studio",
        description: "Անվճար open-source transcription editor-ի պլան՝ TXT, SRT եւ VTT export-ով ու privacy-first workflow-ով:",
        h1: "Open Source Transcription Studio",
        intro: "Ապագա privacy-first editor աուդիո եւ վիդեո transcription-ի համար՝ timestamps եւ subtitles export:",
      },
      blog: {
        title: "Ուղեցույցներ անվճար music եւ transcription tools-ի մասին",
        description: "Օգտակար հոդվածներ MIDI-ի, audio-to-MIDI-ի եւ open-source transcription-ի մասին:",
        h1: "Ուղեցույցներ եւ զարգացման նշումներ",
        intro: "Հոդվածները պետք է լուծեն իրական խնդիրներ, ոչ թե լինեն դատարկ SEO էջեր:",
      },
      freeMidiGuide: {
        title: "Անվճար MIDI Piano Trainer առցանց - վարժանք browser-ում",
        description:
          "Ինչպես անվճար MIDI Piano Trainer-ը օգնում է բեռնել MIDI ֆայլեր, հետեւել ընկնող նոտաներին եւ վարժվել browser-ում:",
        h1: "Անվճար MIDI Piano Trainer առցանց ուղեցույց",
        intro:
          "Գործնական ուղեցույց MIDI Piano Trainer-ի մասին՝ անվճար browser գործիք սեփական MIDI ֆայլերով վարժվելու համար:",
      },
      freeAudioGuide: {
        title: "Անվճար Audio to MIDI Converter առցանց - ուղեցույց",
        description:
          "Ինչ կարող է անել անվճար Audio to MIDI Converter-ը, որ audio-ն է ավելի լավ աշխատում եւ ինչպես ներբեռնել MIDI արդյունքը:",
        h1: "Անվճար Audio to MIDI Converter ուղեցույց",
        intro:
          "Պարզ ուղեցույց beta audio-to-MIDI workflow-ի, որակի սպասելիքների եւ լավ source audio պատրաստելու մասին:",
      },
      howConvertGuide: {
        title: "Ինչպես փոխարկել audio-ն MIDI-ի - քայլ առ քայլ",
        description:
          "Քայլ առ քայլ ուղեցույց՝ պատրաստել սեփական audio-ն, փոխարկել MIDI-ի, սպասել backend processing-ին եւ ստուգել արդյունքը:",
        h1: "Ինչպես փոխարկել audio-ն MIDI-ի",
        intro:
          "Այս workflow-ը ցույց է տալիս՝ ինչպես բեռնել audio, ստանալ MIDI, ներբեռնել արդյունքը եւ բացել MIDI Piano Trainer-ում:",
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
        h1: "Կապ Open Free Tools",
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
  freeMidiGuide: "blog/free-midi-piano-trainer",
  freeAudioGuide: "blog/free-audio-to-midi-converter",
  howConvertGuide: "blog/how-to-convert-audio-to-midi",
  donate: "donate",
  contribute: "contribute",
  privacy: "privacy",
  legal: "legal",
  contact: "contact",
};

const rootRoutes = [
  "home",
  "tools",
  "about",
  "midi",
  "audio",
  "transcription",
  "blog",
  "freeMidiGuide",
  "freeAudioGuide",
  "howConvertGuide",
  "donate",
  "contribute",
  "privacy",
  "legal",
  "contact",
];
const seoGuideRoutes = ["freeMidiGuide", "freeAudioGuide", "howConvertGuide"];
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
      </section>

      ${renderAdSlot(data, "home")}`;
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
      </section>

      ${renderAdSlot(data, "catalog")}`;
  }

  if (route === "about") {
    const trust = trustPageCopy(data.locale).about;
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
      <section class="trust-layout">
        ${trust.sections.map((section) => `<article class="panel">
          <h2>${escapeHtml(section.title)}</h2>
          <p>${escapeHtml(section.text)}</p>
        </article>`).join("\n        ")}
      </section>
      <section class="roadmap">
        <h2>${escapeHtml(showcase.roadmapTitle)}</h2>
        <ol>
          ${showcase.roadmap.map((item) => `<li>${escapeHtml(item)}</li>`).join("\n          ")}
        </ol>
      </section>`;
  }

  if (route === "blog") {
    const cards = blogGuideCards(data.locale);
    return `
      <section class="panel">
        <h2>${escapeHtml(showcase.contentTitle)}</h2>
        <p>${escapeHtml(showcase.contentText)}</p>
      </section>
      <section class="grid two">
        ${cards.map((card) => articleCard(card.title, card.text, `${site.baseUrl}/${data.locale}/${routeMap[card.route]}/`, card.cta)).join("\n        ")}
      </section>

      ${renderAdSlot(data, "blog")}`;
  }

  if (seoGuideRoutes.includes(route)) {
    return renderSeoGuide(route, data);
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
      </section>

      ${renderAdSlot(data, "toolLanding")}`;
  }

  if (["privacy", "legal", "contact"].includes(route)) {
    return renderTrustPage(route, data);
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

function articleCard(title, text, href, linkLabel) {
  return `<article class="card">
          <h2>${escapeHtml(title)}</h2>
          <p>${escapeHtml(text)}</p>
          <a href="${href}">${escapeHtml(linkLabel)}</a>
        </article>`;
}

function blogGuideCards(locale) {
  const cards = {
    en: [
      { route: "freeMidiGuide", title: "Free MIDI Piano Trainer Online", text: "Practice your own MIDI files in the browser with falling notes, track selection, and piano playback.", cta: "Read guide" },
      { route: "freeAudioGuide", title: "Free Audio to MIDI Converter", text: "Understand the beta converter, good source audio, backend waiting time, and result quality limits.", cta: "Read guide" },
      { route: "howConvertGuide", title: "How to Convert Audio to MIDI", text: "A step-by-step workflow from preparing audio to downloading MIDI and opening it in the trainer.", cta: "Read guide" },
    ],
    ru: [
      { route: "freeMidiGuide", title: "Бесплатный MIDI Piano Trainer онлайн", text: "Практика по своим MIDI-файлам в браузере: падающие ноты, выбор дорожек и прослушивание пианино.", cta: "Читать гайд" },
      { route: "freeAudioGuide", title: "Бесплатный конвертер аудио в MIDI", text: "Что умеет beta-конвертер, какое аудио подходит лучше и почему обработка может занимать минуты.", cta: "Читать гайд" },
      { route: "howConvertGuide", title: "Как конвертировать аудио в MIDI", text: "Пошаговый workflow от подготовки аудио до скачивания MIDI и открытия результата в тренажере.", cta: "Читать гайд" },
    ],
    de: [
      { route: "freeMidiGuide", title: "Kostenloser MIDI Piano Trainer online", text: "Eigene MIDI-Dateien im Browser ueben: fallende Noten, Spurauswahl und Piano-Wiedergabe.", cta: "Guide lesen" },
      { route: "freeAudioGuide", title: "Kostenloser Audio zu MIDI Converter", text: "Beta-Converter, passende Aufnahmen, Wartezeit und realistische Qualitaetsgrenzen verstehen.", cta: "Guide lesen" },
      { route: "howConvertGuide", title: "Audio in MIDI umwandeln", text: "Schritt fuer Schritt von der Audio-Vorbereitung bis zum MIDI-Download und Oeffnen im Trainer.", cta: "Guide lesen" },
    ],
    es: [
      { route: "freeMidiGuide", title: "MIDI Piano Trainer gratis online", text: "Practica tus propios MIDI en el navegador con notas descendentes, pistas y sonido de piano.", cta: "Leer guia" },
      { route: "freeAudioGuide", title: "Conversor audio a MIDI gratis", text: "Entiende el conversor beta, el audio recomendado, la espera del backend y los limites de calidad.", cta: "Leer guia" },
      { route: "howConvertGuide", title: "Como convertir audio a MIDI", text: "Flujo paso a paso: preparar audio, generar MIDI, descargarlo y abrirlo en el trainer.", cta: "Leer guia" },
    ],
    hy: [
      { route: "freeMidiGuide", title: "Անվճար MIDI Piano Trainer առցանց", text: "Վարժվեք սեփական MIDI ֆայլերով browser-ում՝ ընկնող նոտաներով, track selection-ով եւ piano playback-ով:", cta: "Կարդալ ուղեցույցը" },
      { route: "freeAudioGuide", title: "Անվճար Audio to MIDI Converter", text: "Հասկացեք beta converter-ը, լավ source audio-ն, backend սպասումը եւ որակի սահմանները:", cta: "Կարդալ ուղեցույցը" },
      { route: "howConvertGuide", title: "Ինչպես փոխարկել audio-ն MIDI-ի", text: "Քայլ առ քայլ workflow՝ audio պատրաստելուց մինչ MIDI ներբեռնում եւ trainer-ում բացում:", cta: "Կարդալ ուղեցույցը" },
    ],
  };
  return cards[locale] || cards.en;
}

function renderSeoGuide(route, data) {
  const guide = seoGuideCopy(data.locale)[route] || seoGuideCopy("en")[route];
  const toolHref = route === "freeMidiGuide" ? site.midiUrl : `${site.midiUrl}${data.locale}/audio-to-midi/`;
  const relatedHref = route === "freeMidiGuide"
    ? `${site.baseUrl}/${data.locale}/blog/free-audio-to-midi-converter/`
    : `${site.baseUrl}/${data.locale}/blog/free-midi-piano-trainer/`;

  return `
      <article class="article-body">
        ${guide.sections.map((section) => `<section class="panel">
          <h2>${escapeHtml(section.title)}</h2>
          <p>${escapeHtml(section.text)}</p>
        </section>`).join("\n        ")}

        <section class="panel">
          <h2>${escapeHtml(guide.stepsTitle)}</h2>
          <ol>
            ${guide.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("\n            ")}
          </ol>
        </section>

        <section class="panel">
          <h2>${escapeHtml(guide.faqTitle)}</h2>
          <dl class="faq-list">
            ${guide.faq.map((item) => `<dt>${escapeHtml(item.q)}</dt><dd>${escapeHtml(item.a)}</dd>`).join("\n            ")}
          </dl>
        </section>
      </article>

      <section class="grid two">
        <article class="card">
          <h2>${escapeHtml(guide.tryTitle)}</h2>
          <p>${escapeHtml(guide.tryText)}</p>
          <a href="${toolHref}">${escapeHtml(guide.tryCta)}</a>
        </article>
        <article class="card">
          <h2>${escapeHtml(guide.relatedTitle)}</h2>
          <p>${escapeHtml(guide.relatedText)}</p>
          <a href="${relatedHref}">${escapeHtml(guide.relatedCta)}</a>
        </article>
      </section>

      ${renderAdSlot(data, "guide")}`;
}

function renderTrustPage(route, data) {
  const page = trustPageCopy(data.locale)[route] || trustPageCopy("en")[route];
  return `
      <section class="trust-layout">
        ${page.sections.map((section) => `<article class="panel">
          <h2>${escapeHtml(section.title)}</h2>
          <p>${escapeHtml(section.text)}</p>
        </article>`).join("\n        ")}
      </section>`;
}

function renderAdSlot(data, placement) {
  const copy = adSlotCopy(data.locale);
  return `<aside class="ad-slot" data-ad-placement="${placement}" aria-label="${escapeHtml(copy.aria)}">
        <span>${escapeHtml(copy.label)}</span>
        <p>${escapeHtml(copy.text)}</p>
      </aside>`;
}

function adSlotCopy(locale) {
  const copy = {
    en: {
      aria: "Reserved advertising space",
      label: "Advertising space",
      text: "Reserved for future respectful ads or project sponsorship. This slot is separated from upload, play, convert, download, and editor controls.",
    },
    ru: {
      aria: "Зарезервированное рекламное место",
      label: "Рекламное место",
      text: "Место для будущей аккуратной рекламы или спонсорского блока. Оно отделено от Upload, Play, Convert, Download и editor controls.",
    },
    de: {
      aria: "Reservierter Anzeigenbereich",
      label: "Anzeigenbereich",
      text: "Reserviert fuer spaetere respektvolle Anzeigen oder Sponsoring. Der Bereich ist von Upload-, Play-, Convert-, Download- und Editor-Controls getrennt.",
    },
    es: {
      aria: "Espacio publicitario reservado",
      label: "Espacio publicitario",
      text: "Reservado para futuros anuncios respetuosos o patrocinio. Esta separado de controles Upload, Play, Convert, Download y editor.",
    },
    hy: {
      aria: "Պահված գովազդային տարածք",
      label: "Գովազդային տարածք",
      text: "Պահված է ապագա հարգալից գովազդի կամ sponsor block-ի համար: Այն առանձնացված է Upload, Play, Convert, Download եւ editor controls-ից:",
    },
  };
  return copy[locale] || copy.en;
}

function trustPageCopy(locale) {
  const copy = {
    en: {
      about: {
        sections: [
          { title: "Mission", text: "Open Free Tools exists to make useful browser-first tools available without subscription pressure. The goal is not to clone paid products, but to build independent open-source workflows that users can inspect, fork, and self-host." },
          { title: "Monetization promise", text: "Core functionality should remain free. Funding can come from respectful ads on content pages, donations, sponsorships, and promotion of our own projects, not from hiding the essential workflow behind a paywall." },
        ],
      },
      privacy: {
        sections: [
          { title: "Data boundaries", text: "Open Free Tools prefers browser-side processing whenever possible. When a feature needs backend processing, the page should explain that the uploaded file may leave the device and should show the relevant limits before conversion starts." },
          { title: "Analytics and ads", text: "The site may use Google Analytics and, later, Google AdSense. Analytics helps understand public page usage. Future ads should appear on content or landing pages, not beside upload, play, convert, download, or editor controls." },
          { title: "Uploaded files", text: "Users should upload only files they are allowed to use. Experimental backend tools should process files only for the requested conversion or benchmark workflow and should avoid unnecessary retention." },
          { title: "User control", text: "The project should keep privacy language clear, update this page when backend behavior changes, and provide a contact route for privacy questions or removal requests." },
        ],
      },
      legal: {
        sections: [
          { title: "Independent project", text: "Open Free Tools is independent and is not affiliated with paid tools, brands, or services mentioned in comparisons. Names of third-party services may be used only for fair, descriptive comparison." },
          { title: "No copying protected services", text: "The project must not copy logos, brand identity, private APIs, paid-service UI, copyrighted assets, demo files, DRM behavior, or subscription bypasses." },
          { title: "User responsibility", text: "Users are responsible for uploading files they own or have permission to process. The tools are provided for lawful personal, educational, creative, and open-source workflows." },
          { title: "Experimental tools", text: "Some tools are beta or roadmap-stage. Results may be inaccurate, slow, or incomplete. The site should describe limits honestly instead of promising paid-service quality before it exists." },
        ],
      },
      contact: {
        sections: [
          { title: "Product feedback", text: "Use GitHub issues for bugs, bad conversion examples, feature requests, and first-user feedback. Real examples are especially useful for improving audio-to-MIDI quality." },
          { title: "Legal and privacy requests", text: "For legal, privacy, affiliation, or content concerns, use the public contact route shown here until a dedicated email is added before AdSense application." },
          { title: "Launch and community feedback", text: "The project welcomes feedback-first posts, community testing, and honest suggestions. We should disclose authorship clearly and avoid spam or automated promotion." },
        ],
      },
    },
    ru: {
      about: {
        sections: [
          { title: "Миссия", text: "Open Free Tools существует, чтобы полезные browser-first инструменты были доступны без давления подписок. Цель не копировать платные продукты, а строить независимые open-source workflow, которые можно проверить, изменить и self-host." },
          { title: "Принцип монетизации", text: "Core-функции должны оставаться бесплатными. Поддержка может идти через аккуратную рекламу на контентных страницах, донаты, sponsors и продвижение своих проектов, а не через paywall для основного сценария." },
        ],
      },
      privacy: {
        sections: [
          { title: "Границы данных", text: "Open Free Tools предпочитает обработку в браузере, когда это возможно. Если функции нужен backend, страница должна объяснять, что файл может покинуть устройство, и показывать лимиты до начала обработки." },
          { title: "Analytics и реклама", text: "Сайт может использовать Google Analytics и позже Google AdSense. Аналитика помогает понимать использование публичных страниц. Будущая реклама должна быть на контентных или landing страницах, а не рядом с Upload, Play, Convert, Download или editor controls." },
          { title: "Загруженные файлы", text: "Пользователь должен загружать только файлы, которые ему разрешено использовать. Экспериментальные backend-инструменты должны обрабатывать файлы только для выбранной конвертации или benchmark workflow и избегать лишнего хранения." },
          { title: "Контроль пользователя", text: "Проект должен держать privacy-текст понятным, обновлять эту страницу при изменениях backend-поведения и давать маршрут связи для privacy-вопросов или запросов удаления." },
        ],
      },
      legal: {
        sections: [
          { title: "Независимый проект", text: "Open Free Tools независим и не связан с платными инструментами, брендами или сервисами, которые могут упоминаться в сравнениях. Названия сторонних сервисов допустимы только для честного описательного сравнения." },
          { title: "Без копирования защищенных сервисов", text: "Проект не должен копировать логотипы, бренд-айдентику, private API, UI платных сервисов, copyrighted assets, demo files, DRM behavior или обход подписок." },
          { title: "Ответственность пользователя", text: "Пользователь отвечает за то, что загружает файлы, которыми владеет или которые имеет право обрабатывать. Инструменты предназначены для законных личных, учебных, creative и open-source workflow." },
          { title: "Экспериментальные инструменты", text: "Некоторые инструменты находятся в beta или roadmap-stage. Результаты могут быть неточными, медленными или неполными. Сайт должен честно описывать лимиты, а не обещать качество платных сервисов заранее." },
        ],
      },
      contact: {
        sections: [
          { title: "Фидбек по продукту", text: "Используйте GitHub issues для багов, плохих примеров конвертации, feature requests и фидбека первых пользователей. Реальные примеры особенно полезны для улучшения audio-to-MIDI качества." },
          { title: "Юридические и privacy запросы", text: "Для legal, privacy, affiliation или content concerns используйте публичный contact route на этой странице, пока перед AdSense-заявкой не будет добавлен отдельный email." },
          { title: "Launch и community feedback", text: "Проект открыт к feedback-first постам, community testing и честным предложениям. Мы должны ясно раскрывать авторство и не использовать спам или автоматизированное продвижение." },
        ],
      },
    },
    de: {
      about: {
        sections: [
          { title: "Mission", text: "Open Free Tools macht nuetzliche browser-first Tools ohne Abo-Druck verfuegbar. Ziel ist nicht, bezahlte Produkte zu kopieren, sondern unabhaengige Open-Source-Workflows zu bauen, die man pruefen, forken und self-hosten kann." },
          { title: "Monetarisierungsversprechen", text: "Kernfunktionen sollen kostenlos bleiben. Finanzierung kann ueber respektvolle Anzeigen auf Content-Seiten, Spenden, Sponsoring und eigene Projektwerbung laufen, nicht ueber Paywalls fuer den Hauptworkflow." },
        ],
      },
      privacy: {
        sections: [
          { title: "Datengrenzen", text: "Open Free Tools bevorzugt Verarbeitung im Browser. Wenn eine Funktion Backend-Verarbeitung braucht, soll die Seite erklaeren, dass eine Datei das Geraet verlassen kann, und Limits vor dem Start zeigen." },
          { title: "Analytics und Anzeigen", text: "Die Website kann Google Analytics und spaeter Google AdSense nutzen. Analytics hilft, die Nutzung oeffentlicher Seiten zu verstehen. Anzeigen gehoeren auf Content- oder Landing-Seiten, nicht neben Upload-, Play-, Convert-, Download- oder Editor-Controls." },
          { title: "Hochgeladene Dateien", text: "Nutzer sollen nur Dateien hochladen, die sie nutzen duerfen. Experimentelle Backend-Tools sollen Dateien nur fuer den gewaehlten Conversion- oder Benchmark-Workflow verarbeiten und unnoetige Speicherung vermeiden." },
          { title: "Nutzerkontrolle", text: "Das Projekt soll Datenschutztexte klar halten, diese Seite bei Backend-Aenderungen aktualisieren und einen Kontaktweg fuer Datenschutzfragen oder Loeschanfragen anbieten." },
        ],
      },
      legal: {
        sections: [
          { title: "Unabhaengiges Projekt", text: "Open Free Tools ist unabhaengig und nicht mit kostenpflichtigen Tools, Marken oder Diensten verbunden, die in Vergleichen erwaehnt werden. Namen Dritter duerfen nur fuer faire beschreibende Vergleiche genutzt werden." },
          { title: "Kein Kopieren geschuetzter Dienste", text: "Das Projekt darf keine Logos, Markenidentitaet, private APIs, UI bezahlter Dienste, urheberrechtlich geschuetzte Assets, Demo-Dateien, DRM-Verhalten oder Abo-Umgehungen kopieren." },
          { title: "Verantwortung der Nutzer", text: "Nutzer sind verantwortlich dafuer, nur Dateien hochzuladen, die sie besitzen oder verarbeiten duerfen. Die Tools sind fuer legale persoenliche, lernbezogene, kreative und Open-Source-Workflows gedacht." },
          { title: "Experimentelle Tools", text: "Einige Tools sind beta oder roadmap-stage. Ergebnisse koennen ungenau, langsam oder unvollstaendig sein. Die Website soll Grenzen ehrlich beschreiben." },
        ],
      },
      contact: {
        sections: [
          { title: "Produktfeedback", text: "Nutze GitHub Issues fuer Bugs, schlechte Conversion-Beispiele, Feature Requests und Feedback erster Nutzer. Reale Beispiele helfen besonders, Audio-to-MIDI zu verbessern." },
          { title: "Rechtliche und Datenschutzanfragen", text: "Fuer Legal-, Privacy-, Affiliation- oder Content-Themen nutze den oeffentlichen Kontaktweg auf dieser Seite, bis vor der AdSense-Bewerbung eine dedizierte E-Mail ergaenzt wird." },
          { title: "Launch- und Community-Feedback", text: "Das Projekt ist offen fuer feedback-first Posts, Community Testing und ehrliche Vorschlaege. Autorschaft soll klar offengelegt werden; Spam und automatisierte Promotion vermeiden wir." },
        ],
      },
    },
    es: {
      about: {
        sections: [
          { title: "Mision", text: "Open Free Tools existe para ofrecer herramientas utiles orientadas al navegador sin presion de suscripcion. La meta no es copiar productos de pago, sino crear workflows open-source independientes que se puedan revisar, modificar y self-host." },
          { title: "Promesa de monetizacion", text: "Las funciones principales deben seguir gratis. La financiacion puede venir de anuncios respetuosos en paginas de contenido, donaciones, sponsors y promocion de proyectos propios, no de bloquear el flujo principal con un paywall." },
        ],
      },
      privacy: {
        sections: [
          { title: "Limites de datos", text: "Open Free Tools prefiere procesamiento en el navegador siempre que sea posible. Si una funcion necesita backend, la pagina debe explicar que el archivo puede salir del dispositivo y mostrar limites antes de empezar." },
          { title: "Analytics y anuncios", text: "El sitio puede usar Google Analytics y mas adelante Google AdSense. Analytics ayuda a entender el uso de paginas publicas. Los anuncios futuros deben estar en contenido o landing pages, no junto a Upload, Play, Convert, Download ni controles de editor." },
          { title: "Archivos subidos", text: "Los usuarios deben subir solo archivos que tengan derecho a usar. Las herramientas backend experimentales deben procesar archivos solo para la conversion o benchmark solicitado y evitar retencion innecesaria." },
          { title: "Control del usuario", text: "El proyecto debe mantener claro el texto de privacidad, actualizar esta pagina cuando cambie el comportamiento del backend y ofrecer una ruta de contacto para privacidad o eliminacion." },
        ],
      },
      legal: {
        sections: [
          { title: "Proyecto independiente", text: "Open Free Tools es independiente y no esta afiliado con herramientas, marcas o servicios de pago mencionados en comparaciones. Los nombres de terceros solo deben usarse para comparacion justa y descriptiva." },
          { title: "No copiar servicios protegidos", text: "El proyecto no debe copiar logos, identidad de marca, APIs privadas, UI de servicios de pago, assets con copyright, demo files, comportamiento DRM ni bypasses de suscripcion." },
          { title: "Responsabilidad del usuario", text: "Los usuarios son responsables de subir archivos propios o con permiso de procesamiento. Las herramientas son para workflows legales personales, educativos, creativos y open-source." },
          { title: "Herramientas experimentales", text: "Algunas herramientas estan en beta o roadmap-stage. Los resultados pueden ser inexactos, lentos o incompletos. El sitio debe describir limites con honestidad." },
        ],
      },
      contact: {
        sections: [
          { title: "Feedback de producto", text: "Usa GitHub issues para bugs, malos ejemplos de conversion, feature requests y feedback inicial. Los ejemplos reales ayudan especialmente a mejorar audio-to-MIDI." },
          { title: "Solicitudes legales y de privacidad", text: "Para temas legales, privacidad, afiliacion o contenido, usa la ruta publica de contacto de esta pagina hasta que se agregue un email dedicado antes de aplicar a AdSense." },
          { title: "Launch y feedback de comunidad", text: "El proyecto acepta posts feedback-first, community testing y sugerencias honestas. Siempre debemos revelar autoria y evitar spam o promocion automatizada." },
        ],
      },
    },
    hy: {
      about: {
        sections: [
          { title: "Առաքելություն", text: "Open Free Tools-ը ստեղծում է օգտակար browser-first գործիքներ առանց subscription ճնշման: Նպատակը paid products-ը կրկնօրինակելը չէ, այլ անկախ open-source workflows կառուցելը, որոնք կարելի է ստուգել, fork անել եւ self-host անել:" },
          { title: "Monetization խոստում", text: "Core ֆունկցիաները պետք է մնան անվճար: Ֆինանսավորումը կարող է գալ հարգալից գովազդից content էջերում, donations-ից, sponsorship-ից եւ սեփական projects-ի առաջխաղացումից, ոչ թե հիմնական workflow-ի paywall-ից:" },
        ],
      },
      privacy: {
        sections: [
          { title: "Տվյալների սահմաններ", text: "Open Free Tools-ը նախընտրում է browser-side processing, երբ դա հնարավոր է: Եթե feature-ին պետք է backend, էջը պետք է բացատրի, որ ֆայլը կարող է դուրս գալ device-ից եւ ցույց տա limits մինչ processing-ը:" },
          { title: "Analytics եւ գովազդ", text: "Կայքը կարող է օգտագործել Google Analytics եւ հետագայում Google AdSense: Analytics-ը օգնում է հասկանալ public pages-ի օգտագործումը: Գովազդը պետք է լինի content կամ landing pages-ում, ոչ թե Upload, Play, Convert, Download կամ editor controls-ի կողքին:" },
          { title: "Բեռնված ֆայլեր", text: "Օգտատերը պետք է բեռնի միայն ֆայլեր, որոնք իրավունք ունի օգտագործել: Experimental backend tools-ը պետք է մշակեն ֆայլերը միայն ընտրված conversion կամ benchmark workflow-ի համար եւ խուսափեն ավելորդ retention-ից:" },
          { title: "Օգտատիրոջ վերահսկում", text: "Նախագիծը պետք է պահի privacy text-ը պարզ, թարմացնի այս էջը backend behavior-ի փոփոխության դեպքում եւ տա contact route privacy հարցերի կամ deletion requests-ի համար:" },
        ],
      },
      legal: {
        sections: [
          { title: "Անկախ նախագիծ", text: "Open Free Tools-ը անկախ նախագիծ է եւ կապված չէ paid tools-ի, brands-ի կամ services-ի հետ, որոնք կարող են նշվել comparisons-ում: Third-party names-ը կարելի է օգտագործել միայն fair descriptive comparison-ի համար:" },
          { title: "Չկրկնօրինակել պաշտպանված services", text: "Նախագիծը չպետք է կրկնօրինակի logos, brand identity, private APIs, paid-service UI, copyrighted assets, demo files, DRM behavior կամ subscription bypasses:" },
          { title: "Օգտատիրոջ պատասխանատվություն", text: "Օգտատերը պատասխանատու է բեռնել միայն իր սեփական կամ թույլատրված ֆայլերը: Գործիքները նախատեսված են lawful personal, educational, creative եւ open-source workflows-ի համար:" },
          { title: "Experimental tools", text: "Որոշ գործիքներ beta կամ roadmap-stage են: Արդյունքները կարող են լինել անճիշտ, դանդաղ կամ ոչ ամբողջական: Կայքը պետք է ազնիվ նկարագրի limits-ը:" },
        ],
      },
      contact: {
        sections: [
          { title: "Product feedback", text: "Օգտագործեք GitHub issues bugs-ի, վատ conversion examples-ի, feature requests-ի եւ first-user feedback-ի համար: Իրական examples-ը հատկապես օգտակար են audio-to-MIDI quality-ն բարելավելու համար:" },
          { title: "Legal եւ privacy requests", text: "Legal, privacy, affiliation կամ content concerns-ի համար օգտագործեք այս էջի public contact route-ը, մինչեւ AdSense application-ից առաջ dedicated email ավելացվի:" },
          { title: "Launch եւ community feedback", text: "Նախագիծը բաց է feedback-first posts-ի, community testing-ի եւ ազնիվ suggestions-ի համար: Պետք է պարզ բացահայտել authorship-ը եւ խուսափել spam-ից կամ automated promotion-ից:" },
        ],
      },
    },
  };

  return copy[locale] || copy.en;
}

function seoGuideCopy(locale) {
  const common = {
    en: {
      faqTitle: "FAQ",
      tryTitle: "Try the tool",
      tryCta: "Open the tool",
      relatedTitle: "Related guide",
      relatedCta: "Read next",
      freeMidiGuide: {
        sections: [
          { title: "What this tool does", text: "MIDI Piano Trainer is a free browser-first piano practice tool. You upload a MIDI file, choose tracks, follow falling notes, listen to playback, and practice with a PC keyboard before connecting more serious MIDI hardware later." },
          { title: "Who it is for", text: "It is useful for beginners who want a visual piano trainer, creators checking MIDI arrangements, and open-source users who prefer a tool that can be hosted or modified instead of locked behind a subscription." },
          { title: "Quality and limits", text: "The trainer depends on the MIDI file you provide. It does not magically correct bad MIDI, but it makes practice easier by showing timing, pitch lanes, track choices, and immediate playback in the browser." },
        ],
        stepsTitle: "How to practice a MIDI file",
        steps: ["Open MIDI Piano Trainer.", "Upload your own .mid file.", "Choose all tracks or one track if the arrangement is too dense.", "Use Listen to hear the piano playback.", "Start practice mode and follow the falling notes."],
        faq: [
          { q: "Is it free?", a: "Yes. The core trainer is free and open-source." },
          { q: "Do I need an account?", a: "No. The trainer is designed to work directly in the browser." },
          { q: "Can I use generated MIDI?", a: "Yes. Audio-to-MIDI results can be opened in the trainer after conversion." },
        ],
        tryText: "Open the live trainer and test it with any MIDI file you are allowed to use.",
        relatedText: "If you only have an audio recording, read the converter guide next.",
      },
      freeAudioGuide: {
        sections: [
          { title: "What this converter does", text: "The free Audio to MIDI Converter is a beta tool for user-owned audio. It sends the file to the official backend automatically, waits for transcription, then returns a MIDI file that can be downloaded or opened in MIDI Piano Trainer." },
          { title: "Best source audio", text: "Clean solo piano works best. Short clips, low noise, clear attacks, and stable tempo are much easier to transcribe than full songs, vocals, drums, reverb-heavy recordings, or mixed instruments." },
          { title: "Quality expectations", text: "Audio-to-MIDI quality depends on the recognition model, preprocessing, and the recording itself. The free backend can be slow, and beta results may miss notes, add extra notes, or estimate timing imperfectly." },
        ],
        stepsTitle: "How to use the converter",
        steps: ["Prepare a short audio file you own.", "Open the Audio-to-MIDI page.", "Upload MP3, WAV, OGG, FLAC, or M4A.", "Wait while the backend queues and processes the file.", "Download the MIDI or open it in MIDI Piano Trainer."],
        faq: [
          { q: "Does it download YouTube?", a: "No. Upload your own audio file. The project does not download YouTube directly." },
          { q: "Why can conversion take minutes?", a: "Piano transcription is heavy, and the free backend may process jobs in a queue." },
          { q: "Will it be perfect?", a: "No. It is a beta workflow and works best on clean solo piano." },
        ],
        tryText: "Try the beta converter with a short clean piano recording first.",
        relatedText: "After conversion, use the trainer guide to practice the generated MIDI.",
      },
      howConvertGuide: {
        sections: [
          { title: "Prepare the audio", text: "Use your own file, trim long silence, and start with a short clean piano clip. Audio with multiple instruments or heavy noise is much harder to convert accurately." },
          { title: "Run the conversion", text: "Open the converter, upload the file, and keep the page open while the backend estimates waiting time, processes the queue, and creates the MIDI result." },
          { title: "Check the MIDI result", text: "Download the MIDI and listen to it in the trainer. Compare pitch, rhythm, tempo, and missing notes before deciding whether the source audio or transcription settings need improvement." },
        ],
        stepsTitle: "Step-by-step workflow",
        steps: ["Choose a short audio file you own.", "Upload it to the converter.", "Wait for queued and processing states to finish.", "Download the generated MIDI.", "Open the MIDI in the trainer and listen for errors."],
        faq: [
          { q: "What file should I test first?", a: "A short, clean solo piano recording is the best first test." },
          { q: "What if the result is bad?", a: "Try a cleaner clip, shorter duration, or report the result through the feedback link." },
          { q: "Can I compare quality?", a: "Yes. The project includes a benchmark page for comparing reference MIDI, external MIDI, and generated MIDI." },
        ],
        tryText: "Start with the public converter and then inspect the MIDI in the trainer.",
        relatedText: "Read the free Audio-to-MIDI guide for quality expectations and limits.",
      },
    },
  };

  for (const route of seoGuideRoutes) {
    Object.assign(common.en[route], {
      faqTitle: common.en.faqTitle,
      tryTitle: common.en.tryTitle,
      tryCta: common.en.tryCta,
      relatedTitle: common.en.relatedTitle,
      relatedCta: common.en.relatedCta,
    });
  }

  common.ru = translateSeoGuides("ru");
  common.de = translateSeoGuides("de");
  common.es = translateSeoGuides("es");
  common.hy = translateSeoGuides("hy");
  return common[locale] || common.en;
}

function translateSeoGuides(locale) {
  const labels = {
    ru: {
      faqTitle: "FAQ",
      tryTitle: "Попробовать инструмент",
      tryCta: "Открыть инструмент",
      relatedTitle: "Связанный гайд",
      relatedCta: "Читать дальше",
      midiWhat: "Что делает инструмент",
      midiWho: "Для кого он",
      midiLimits: "Качество и ограничения",
      midiSteps: "Как заниматься по MIDI",
      audioWhat: "Что делает конвертер",
      audioBest: "Лучшее исходное аудио",
      audioQuality: "Ожидания по качеству",
      audioSteps: "Как пользоваться конвертером",
      howPrepare: "Подготовьте аудио",
      howRun: "Запустите конвертацию",
      howCheck: "Проверьте MIDI результат",
      howSteps: "Пошаговый workflow",
    },
    de: {
      faqTitle: "FAQ",
      tryTitle: "Tool testen",
      tryCta: "Tool oeffnen",
      relatedTitle: "Passender Guide",
      relatedCta: "Weiterlesen",
      midiWhat: "Was das Tool macht",
      midiWho: "Fuer wen es passt",
      midiLimits: "Qualitaet und Grenzen",
      midiSteps: "MIDI-Datei ueben",
      audioWhat: "Was der Converter macht",
      audioBest: "Beste Ausgangsaufnahme",
      audioQuality: "Qualitaet realistisch einschaetzen",
      audioSteps: "Converter nutzen",
      howPrepare: "Audio vorbereiten",
      howRun: "Konvertierung starten",
      howCheck: "MIDI-Ergebnis pruefen",
      howSteps: "Schritt-fuer-Schritt Workflow",
    },
    es: {
      faqTitle: "FAQ",
      tryTitle: "Probar herramienta",
      tryCta: "Abrir herramienta",
      relatedTitle: "Guia relacionada",
      relatedCta: "Leer siguiente",
      midiWhat: "Que hace la herramienta",
      midiWho: "Para quien sirve",
      midiLimits: "Calidad y limites",
      midiSteps: "Como practicar un MIDI",
      audioWhat: "Que hace el conversor",
      audioBest: "Mejor audio de origen",
      audioQuality: "Expectativas de calidad",
      audioSteps: "Como usar el conversor",
      howPrepare: "Preparar el audio",
      howRun: "Ejecutar la conversion",
      howCheck: "Revisar el MIDI",
      howSteps: "Workflow paso a paso",
    },
    hy: {
      faqTitle: "FAQ",
      tryTitle: "Փորձել գործիքը",
      tryCta: "Բացել գործիքը",
      relatedTitle: "Կապված ուղեցույց",
      relatedCta: "Կարդալ հաջորդը",
      midiWhat: "Ինչ է անում գործիքը",
      midiWho: "Ում համար է",
      midiLimits: "Որակ եւ սահմանափակումներ",
      midiSteps: "Ինչպես վարժվել MIDI-ով",
      audioWhat: "Ինչ է անում converter-ը",
      audioBest: "Լավագույն source audio",
      audioQuality: "Որակի սպասելիքներ",
      audioSteps: "Ինչպես օգտագործել converter-ը",
      howPrepare: "Պատրաստեք audio-ն",
      howRun: "Սկսեք conversion-ը",
      howCheck: "Ստուգեք MIDI արդյունքը",
      howSteps: "Քայլ առ քայլ workflow",
    },
  }[locale];

  const text = {
    ru: {
      midi: ["MIDI Piano Trainer - бесплатный browser-first тренажер. Пользователь загружает MIDI-файл, выбирает дорожки, видит падающие ноты, слушает playback и тренируется на клавиатуре ПК.", "Инструмент полезен новичкам, авторам MIDI-аранжировок и пользователям open-source, которым важны бесплатность, прозрачность и возможность self-host.", "Качество тренировки зависит от MIDI-файла. Тренажер не исправляет плохой MIDI автоматически, но помогает увидеть тайминг, высоту нот, дорожки и услышать результат."],
      audio: ["Audio to MIDI Converter - beta-инструмент для аудио, которым вы имеете право пользоваться. Публичная страница автоматически использует официальный backend и возвращает MIDI.", "Лучше всего работает чистое solo piano: короткие клипы, мало шума, понятные атаки нот и стабильный темп.", "Качество зависит от модели, preprocessing и записи. Beta может пропускать ноты, добавлять лишние или ошибаться во времени."],
      how: ["Используйте свой файл, уберите длинную тишину и начните с короткого чистого piano-клипа.", "Откройте конвертер, загрузите файл и держите страницу открытой, пока backend показывает очередь и обработку.", "Скачайте MIDI и послушайте его в тренажере. Проверьте ноты, ритм, tempo и пропуски."],
      midiSteps: ["Откройте MIDI Piano Trainer.", "Загрузите свой .mid файл.", "Выберите все дорожки или одну дорожку.", "Нажмите Listen, чтобы услышать playback.", "Запустите тренировку и следите за падающими нотами."],
      audioSteps: ["Подготовьте короткий аудиофайл.", "Откройте страницу Audio-to-MIDI.", "Загрузите MP3, WAV, OGG, FLAC или M4A.", "Дождитесь очереди и обработки.", "Скачайте MIDI или откройте его в тренажере."],
      howStepsList: ["Выберите короткое аудио, которым вы владеете.", "Загрузите его в конвертер.", "Дождитесь queued и processing states.", "Скачайте generated MIDI.", "Откройте MIDI в тренажере и послушайте ошибки."],
      faq: [["Это бесплатно?", "Да. Core-функции остаются бесплатными и open-source."], ["Нужен аккаунт?", "Нет. Основной сценарий работает в браузере."], ["Почему результат не идеален?", "Audio-to-MIDI зависит от записи, модели и preprocessing. Это beta."]],
      tryText: "Откройте инструмент и попробуйте короткий чистый файл.",
      relatedText: "Прочитайте следующий гайд, чтобы понять соседний workflow.",
    },
    de: {
      midi: ["MIDI Piano Trainer ist ein kostenloses browser-first Uebungswerkzeug. Nutzer laden MIDI hoch, waehlen Spuren, sehen fallende Noten, hoeren Playback und ueben mit der PC-Tastatur.", "Es passt fuer Anfaenger, MIDI-Creator und Open-Source-Nutzer, die ein kostenloses, transparentes und self-host-freundliches Tool suchen.", "Die Uebungsqualitaet haengt von der MIDI-Datei ab. Das Tool korrigiert MIDI nicht automatisch, zeigt aber Timing, Tonhoehe, Spuren und Playback klar."],
      audio: ["Audio to MIDI Converter ist ein beta Tool fuer eigene Audiodateien. Die oeffentliche Seite nutzt automatisch das offizielle Backend und gibt eine MIDI-Datei zurueck.", "Am besten funktionieren kurze, saubere Solo-Piano-Clips mit wenig Rauschen, klaren Anschlaegen und stabilem Tempo.", "Die Qualitaet haengt von Modell, Preprocessing und Aufnahme ab. Beta-Ergebnisse koennen Noten verpassen oder Timing ungenau schaetzen."],
      how: ["Nutze eine eigene Datei, entferne lange Stille und beginne mit einem kurzen sauberen Piano-Clip.", "Oeffne den Converter, lade die Datei hoch und lasse die Seite offen, waehrend Queue und Processing laufen.", "Lade MIDI herunter und hoere es im Trainer. Pruefe Noten, Rhythmus, Tempo und fehlende Noten."],
      midiSteps: ["MIDI Piano Trainer oeffnen.", ".mid Datei hochladen.", "Alle Spuren oder eine einzelne Spur waehlen.", "Mit Listen das Playback hoeren.", "Practice starten und den fallenden Noten folgen."],
      audioSteps: ["Kurze Audiodatei vorbereiten.", "Audio-to-MIDI Seite oeffnen.", "MP3, WAV, OGG, FLAC oder M4A hochladen.", "Queue und Processing abwarten.", "MIDI herunterladen oder im Trainer oeffnen."],
      howStepsList: ["Kurze eigene Audiodatei waehlen.", "In den Converter hochladen.", "Queued und Processing abwarten.", "Generated MIDI herunterladen.", "MIDI im Trainer oeffnen und Fehler anhoeren."],
      faq: [["Ist es kostenlos?", "Ja. Die Kernfunktionen bleiben kostenlos und open source."], ["Brauche ich einen Account?", "Nein. Der Hauptworkflow laeuft im Browser."], ["Warum ist das Ergebnis nicht perfekt?", "Audio-to-MIDI haengt von Aufnahme, Modell und Preprocessing ab. Es ist beta."]],
      tryText: "Oeffne das Tool und teste zuerst eine kurze saubere Aufnahme.",
      relatedText: "Lies den naechsten Guide, um den verbundenen Workflow zu verstehen.",
    },
    es: {
      midi: ["MIDI Piano Trainer es una herramienta gratis orientada al navegador. Subes MIDI, eliges pistas, ves notas descendentes, escuchas playback y practicas con el teclado del PC.", "Sirve para principiantes, creadores de MIDI y usuarios open-source que prefieren una herramienta gratis, clara y facil de self-host.", "La calidad depende del archivo MIDI. El trainer no corrige un MIDI malo automaticamente, pero muestra timing, notas, pistas y playback con claridad."],
      audio: ["Audio to MIDI Converter es una herramienta beta para audio propio. La pagina publica usa automaticamente el backend oficial y devuelve un archivo MIDI.", "Funciona mejor con clips cortos de piano solo, poco ruido, ataques claros y tempo estable.", "La calidad depende del modelo, preprocessing y grabacion. La beta puede perder notas, anadir notas extra o estimar mal el tiempo."],
      how: ["Usa tu propio archivo, elimina silencios largos y empieza con un clip corto y limpio de piano.", "Abre el conversor, sube el archivo y deja la pagina abierta mientras pasan queue y processing.", "Descarga el MIDI y escuchalo en el trainer. Revisa notas, ritmo, tempo y notas perdidas."],
      midiSteps: ["Abre MIDI Piano Trainer.", "Sube tu archivo .mid.", "Elige todas las pistas o una sola.", "Usa Listen para oir playback.", "Inicia practica y sigue las notas descendentes."],
      audioSteps: ["Prepara un audio corto.", "Abre Audio-to-MIDI.", "Sube MP3, WAV, OGG, FLAC o M4A.", "Espera cola y procesamiento.", "Descarga MIDI o abrelo en el trainer."],
      howStepsList: ["Elige un audio corto propio.", "Subelo al conversor.", "Espera queued y processing.", "Descarga el MIDI generado.", "Abre el MIDI en el trainer y escucha errores."],
      faq: [["Es gratis?", "Si. Las funciones principales siguen gratis y open-source."], ["Necesito cuenta?", "No. El flujo principal funciona en el navegador."], ["Por que no es perfecto?", "Audio-to-MIDI depende de la grabacion, el modelo y preprocessing. Es beta."]],
      tryText: "Abre la herramienta y prueba primero un audio corto y limpio.",
      relatedText: "Lee la siguiente guia para entender el workflow relacionado.",
    },
    hy: {
      midi: ["MIDI Piano Trainer-ը անվճար browser-first վարժանքի գործիք է: Օգտատերը բեռնում է MIDI, ընտրում tracks, տեսնում ընկնող նոտաներ, լսում playback եւ վարժվում PC keyboard-ով:", "Այն օգտակար է սկսնակների, MIDI ստեղծողների եւ open-source օգտատերերի համար, որոնք ուզում են անվճար եւ self-host-friendly գործիք:", "Վարժանքի որակը կախված է MIDI ֆայլից: Գործիքը չի ուղղում վատ MIDI-ն ավտոմատ, բայց պարզ ցույց է տալիս timing-ը, նոտաները, tracks-ը եւ playback-ը:"],
      audio: ["Audio to MIDI Converter-ը beta գործիք է սեփական audio-ի համար: Public էջը ավտոմատ օգտագործում է official backend-ը եւ վերադարձնում MIDI ֆայլ:", "Ավելի լավ աշխատում է կարճ, մաքուր solo piano clips-ի հետ՝ քիչ noise, հստակ note attacks եւ կայուն tempo:", "Որակը կախված է model-ից, preprocessing-ից եւ recording-ից: Beta արդյունքը կարող է բաց թողնել նոտաներ կամ սխալ գնահատել timing-ը:"],
      how: ["Օգտագործեք ձեր սեփական ֆայլը, կտրեք երկար լռությունը եւ սկսեք կարճ մաքուր piano clip-ից:", "Բացեք converter-ը, բեռնեք ֆայլը եւ պահեք էջը բաց, մինչեւ queue եւ processing ավարտվեն:", "Ներբեռնեք MIDI-ն եւ լսեք trainer-ում: Ստուգեք նոտաները, rhythm-ը, tempo-ն եւ բաց թողնված նոտաները:"],
      midiSteps: ["Բացեք MIDI Piano Trainer-ը:", "Բեռնեք ձեր .mid ֆայլը:", "Ընտրեք բոլոր tracks-ը կամ մեկ track:", "Օգտագործեք Listen playback լսելու համար:", "Սկսեք practice եւ հետեւեք ընկնող նոտաներին:"],
      audioSteps: ["Պատրաստեք կարճ audio ֆայլ:", "Բացեք Audio-to-MIDI էջը:", "Բեռնեք MP3, WAV, OGG, FLAC կամ M4A:", "Սպասեք queue եւ processing:", "Ներբեռնեք MIDI կամ բացեք trainer-ում:"],
      howStepsList: ["Ընտրեք կարճ սեփական audio:", "Բեռնեք converter-ում:", "Սպասեք queued եւ processing states:", "Ներբեռնեք generated MIDI:", "Բացեք MIDI-ն trainer-ում եւ լսեք սխալները:"],
      faq: [["Անվճա՞ր է:", "Այո: Core ֆունկցիաները մնում են անվճար եւ open-source:"], ["Պե՞տք է account:", "Ոչ: Հիմնական workflow-ը աշխատում է browser-ում:"], ["Ինչու՞ արդյունքը perfect չէ:", "Audio-to-MIDI-ն կախված է recording-ից, model-ից եւ preprocessing-ից: Սա beta է:"]],
      tryText: "Բացեք գործիքը եւ առաջինը փորձեք կարճ մաքուր audio:",
      relatedText: "Կարդացեք հաջորդ ուղեցույցը՝ կապված workflow-ը հասկանալու համար:",
    },
  }[locale];

  const build = (kind) => ({
    sections: kind === "midi"
      ? [
        { title: labels.midiWhat, text: text.midi[0] },
        { title: labels.midiWho, text: text.midi[1] },
        { title: labels.midiLimits, text: text.midi[2] },
      ]
      : kind === "audio"
        ? [
          { title: labels.audioWhat, text: text.audio[0] },
          { title: labels.audioBest, text: text.audio[1] },
          { title: labels.audioQuality, text: text.audio[2] },
        ]
        : [
          { title: labels.howPrepare, text: text.how[0] },
          { title: labels.howRun, text: text.how[1] },
          { title: labels.howCheck, text: text.how[2] },
        ],
    stepsTitle: kind === "midi" ? labels.midiSteps : kind === "audio" ? labels.audioSteps : labels.howSteps,
    steps: kind === "midi" ? text.midiSteps : kind === "audio" ? text.audioSteps : text.howStepsList,
    faqTitle: labels.faqTitle,
    faq: text.faq.map(([q, a]) => ({ q, a })),
    tryTitle: labels.tryTitle,
    tryText: text.tryText,
    tryCta: labels.tryCta,
    relatedTitle: labels.relatedTitle,
    relatedText: text.relatedText,
    relatedCta: labels.relatedCta,
  });

  return {
    freeMidiGuide: build("midi"),
    freeAudioGuide: build("audio"),
    howConvertGuide: build("how"),
  };
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

  if (seoGuideRoutes.includes(route)) {
    return [
      organization,
      breadcrumb,
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: page.h1,
        description: page.description,
        url,
        author: {
          "@type": "Organization",
          name: site.name,
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
        },
        inLanguage: data.locale,
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
  if (normalized.endsWith("blog") || normalized.includes("/blog/") || normalized.startsWith("blog/")) return { changefreq: "weekly", priority: "0.7" };
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
.article-body {
  display: grid;
  gap: 16px;
}
.article-body ol {
  margin: 0;
  padding-left: 22px;
  color: var(--muted);
  line-height: 1.7;
}
.faq-list {
  display: grid;
  gap: 10px;
  margin: 0;
}
.faq-list dt {
  color: var(--ink);
  font-weight: 800;
}
.faq-list dd {
  margin: 0 0 8px;
  color: var(--muted);
  line-height: 1.65;
}
.trust-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 20px 0;
}
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
.ad-slot {
  margin: 34px 0 6px;
  border: 1px dashed var(--line);
  border-radius: 8px;
  padding: 22px;
  background: var(--surface-2);
  text-align: center;
}
.ad-slot span {
  display: inline-flex;
  margin-bottom: 8px;
  border-radius: 999px;
  padding: 5px 9px;
  background: var(--soft);
  color: var(--accent-dark);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .02em;
  text-transform: uppercase;
}
.ad-slot p {
  max-width: 680px;
  margin: 0 auto;
  color: var(--muted);
}
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
  .hero-split, .grid.three, .grid.two, .showcase-band, .project-overview, .trust-layout { grid-template-columns: 1fr; }
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
