/** Single source of truth — edit all invitation content here. */

export const wedding = {
  meta: {
    title: "Anas & Fathima — Wedding Invitation",
    description:
      "With gratitude to Allah, join us in celebrating the blessed union of Anas Akbar Ali and Fathima Kasim at PV Regency, Veliancode.",
    ogTitle: "Anas & Fathima — Wedding Invitation",
    ogDescription:
      "You are cordially invited to celebrate the nikah of Anas Akbar Ali and Fathima Kasim.",
  },

  greeting: "Assalamu Alaikum",

  blessing: {
    arabic: "بارك الله لكما وبارك عليكما وجمع بينكما في خير",
  },

  cover: {
    subtitle: "Wedding Invitation",
    curtainPrompt: "Tap the seal to open",
  },

  groom: {
    name: "Anas Akbar Ali",
    displayName: "ANAS AKBAR ALI",
    role: "Groom",
    parents: {
      father: "Akbar Ali Moosa",
      mother: "Hazeena Backer",
    },
    residence: {
      house: "Kalathingal House",
      location: "Ayiroor, Perumpadappu",
    },
    contact: "+91 95393 31368",
    grandparents: {
      paternal: "Late Moosa Thekkumthala",
      maternal: "Abu Backer Manath Parambil",
    },
  },

  bride: {
    name: "Fathima Kasim",
    displayName: "FATHIMA KASIM",
    role: "Bride",
    parents: {
      father: "Mr. Kasim",
      mother: "Mrs. Laila Kasim",
    },
    residence: {
      house: "Puttiyangattayil House",
      location: "Ayiroor, Perumpadappu",
    },
    contact: "+91 94472 69426",
    grandparents: {
      paternal: "Late Saidu Puttiyangattayil",
      maternal: "Late Baputy Maliyakkel",
    },
  },

  /** ISO 8601 — edit date and time for countdown & labels */
  weddingDate: "2026-08-02T10:30:00",
  weddingDateLabel: "Sunday, 2 August 2026",
  weddingTimeLabel: "10:30 AM",

  quran: {
    /** Hero — after curtain opens */
    cover: {
      arabic:
        "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
      reference: "Surah Al-Furqan 25:74",
    },
    /** Welcome section */
    welcome: {
      arabic:
        "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
      verse:
        "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquillity with them, and He has put love and mercy between your hearts.",
      reference: "Surah Ar-Rum 30:21",
    },
    /** Wedding details section */
    details: {
      arabic:
        "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا",
      verse:
        "O mankind, fear your Lord, who created you from one soul and created from it its mate.",
      reference: "Surah An-Nisa 4:1",
    },
  },

  invitation:
    "With hearts full of gratitude to Allah, we joyfully invite you to share in the blessing of our union — a celebration of love woven by faith, family, and forever.",

  closingNote:
    "Your presence and duas would mean the world to us as we begin this blessed journey together.",

  thankYou: "Thank you for sharing in our joy.",

  venue: {
    name: "PV Regency",
    location: "Veliancode, Malappuram",
    address: "PV Regency, Veliancode, Malappuram, Kerala",
    mapEmbed:
      "https://www.google.com/maps?q=PV+Regency+Veliancode+Malappuram&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=PV+Regency+Veliancode+Malappuram",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=PV+Regency+Veliancode+Malappuram",
  },

  music: {
    url: "/music/nasheed.mp3",
    title: "Islamic Wedding Ambience",
    volume: 0.3,
  },
} as const;

export type WeddingConfig = typeof wedding;
