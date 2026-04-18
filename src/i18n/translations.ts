export type Locale = "fr" | "nl" | "en";

export type Translations = {
  header: {
    nav: { how: string; faq: string };
    signup: string;
    signupFree: string;
    noCommitment: string;
    openMenu: string;
    closeMenu: string;
    menuDialog: string;
    switchLabel: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    cta: string;
    imageAlt: string;
    bullets: string[];
  };
  trouver: {
    accrocheLine1: string;
    accrocheHighlight: string;
    stats: { value: string; label: string }[];
    constatTag: string;
    constatTitle: string;
    constatDesc: string;
    solutionTag: string;
    solutionTitle: string;
    solutionDesc: string;
    blocks: { value: string; label: string }[];
    howTag: string;
    steps: { num: string; title: string; desc: string }[];
  };
  inscription: {
    tag: string;
    title: string;
    intro: string;
    successTitle: string;
    successDesc: string;
    sideTitleHost: string;
    sideTitleDriver: string;
    sideDescHost: string;
    sideDescDriver: string;
    benefitsHost: string[];
    benefitsDriver: string[];
    toggleDriver: string;
    toggleHost: string;
    descHost: string;
    descDriver: string;
    placeholders: {
      name: string;
      phone: string;
      email: string;
      postal: string;
      terminal: string;
    };
    sending: string;
    submitDriver: string;
    submitHost: string;
    consent: string;
    privacy: string;
    errorGeneric: string;
    errorConnection: string;
    typeDriver: string;
    typeHost: string;
  };
  faq: {
    tag: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  proprietaire: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    desc: string;
    cta: string;
    imageAlt: string;
  };
  footer: {
    tagline: string;
    navTitle: string;
    navHow: string;
    navSignup: string;
    navFaq: string;
    contactTitle: string;
    contactDesc: string;
    rights: string;
    human: string;
  };
};

export const translations: Record<Locale, Translations> = {
  fr: {
    header: {
      nav: {
        how: "Comment ça marche",
        faq: "FAQ",
      },
      signup: "S'inscrire",
      signupFree: "S'inscrire gratuitement",
      noCommitment: "Sans engagement · 100% gratuit",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      menuDialog: "Menu navigation",
      switchLabel: "Langue",
    },
    hero: {
      titleLine1: "Rechargez près de chez vous.",
      titleLine2: "Partagez votre borne.",
      subtitle:
        "StreetCharge connecte les voisins afin de rendre la recharge électrique simple, rentable et locale.",
      cta: "Rejoindre les premiers utilisateurs",
      imageAlt: "Recharge électrique",
      bullets: [
        "Rechargez facilement près de chez vous",
        "Gagnez de l'argent grâce à votre borne",
        "Sans engagement & sécurisé",
      ] as string[],
    },
    trouver: {
      accrocheLine1: " Des bornes vides dans votre rue. Besoin de recharger ? ",
      accrocheHighlight: "  Nous vous connectons !",
      stats: [
        {
          value: "En hausse",
          label: "De plus en plus de voitures électriques sur nos routes chaque année.",
        },
        {
          value: "Trop peu",
          label: "Trop peu de bornes disponibles et à proximité.",
        },
        {
          value: "Cher",
          label: "La recharge peut coûter cher sur les bornes publiques.",
        },
      ],
      constatTag: "Le constat",
      constatTitle: "Aujourd'hui, recharger reste compliqué.",
      constatDesc:
        "Pendant ce temps, des milliers de bornes privées ne sont pas utilisées. Une opportunité énorme… encore invisible.",
      solutionTag: "La solution",
      solutionTitle: "StreetCharge débloque ce potentiel.",
      solutionDesc:
        "Nous permettons aux particuliers de partager leur borne et aux conducteurs de recharger près de chez eux. Simple, humain et local.",
      blocks: [
        { value: "Recharge locale", label: "Trouvez une borne à quelques rues de chez vous." },
        { value: "Gagnez de l'argent", label: "Monétisez votre borne quand elle est inutilisée." },
        { value: "Simple & humain", label: "Une solution entre voisins, progressive et fiable." },
      ],
      howTag: "Comment ça marche",
      steps: [
        {
          num: "01",
          title: "Inscrivez-vous",
          desc: "Rejoignez la communauté en quelques clics, que vous soyez conducteur ou propriétaire d'une borne.",
        },
        {
          num: "02",
          title: "Soyez mis en relation",
          desc: "Nous vous connectons avec les bornes disponibles dans votre quartier dès le lancement.",
        },
        {
          num: "03",
          title: "Rechargez",
          desc: "Rechargez votre véhicule à prix local, chez un particulier près de chez vous.",
        },
      ],
    },
    inscription: {
      tag: "Rejoindre le projet",
      title: "Rejoignez les premiers.",
      intro:
        "Inscrivez-vous gratuitement pour accéder en avant-première au réseau local dès le lancement.",
      successTitle: "C'est envoyé !",
      successDesc:
        "Bienvenue dans la communauté. Vous faites partie des premiers. On vous recontacte très vite.",
      sideTitleHost: "Votre borne peut vous rapporter localement",
      sideTitleDriver: "Accès prioritaire au lancement",
      sideDescHost:
        "Votre borne reste souvent inutilisée ? StreetCharge vous aide à l'ouvrir à des conducteurs proches, simplement et selon vos règles.",
      sideDescDriver:
        "En vous inscrivant maintenant, vous êtes parmi les premiers à rejoindre StreetCharge et à bénéficier du réseau local dès son ouverture.",
      benefitsHost: [
        "La borne de recharge est inutilisée 80% du temps",
        "Accueillez des conducteurs près de chez vous",
        "Générez un revenu complémentaire",
        "Rentabilisez votre borne de recharge en générant un revenu passif",
      ] as string[],
      benefitsDriver: [
        "Inscription gratuite et sans engagement",
        "Mise en relation avec vos voisins",
        "Recharge à moindre coût, localement",
      ] as string[],
      toggleDriver: "Je cherche à recharger",
      toggleHost: "J'ai une borne",
      descHost:
        "Partagez votre borne selon vos disponibilités, accueillez des conducteurs proches et générez un revenu complémentaire local.",
      descDriver:
        "Trouvez une solution de recharge locale près de chez vous, simplement et sans engagement.",
      placeholders: {
        name: "Nom complet",
        phone: "Téléphone",
        email: "Adresse email",
        postal: "Code postal (ex : 1000)",
        terminal: "Type de borne (ex : 11kW, 22kW...)",
      },
      sending: "Envoi en cours...",
      submitDriver: "Rejoindre la communauté",
      submitHost: "Commencer à rentabiliser ma borne",
      consent: "En vous inscrivant, vous acceptez d'être recontacté pour le lancement.",
      privacy: "Vos données ne sont jamais partagées avec des tiers.",
      errorGeneric: "Une erreur est survenue.",
      errorConnection: "Erreur de connexion.",
      typeDriver: "Conducteur",
      typeHost: "Propriétaire (Hôte)",
    },
    faq: {
      tag: "Questions fréquentes",
      title: "Tout ce que vous voulez savoir",
      items: [
        {
          question: "Comment ça fonctionne exactement ?",
          answer:
            "StreetCharge met en relation des propriétaires de bornes privées avec des conducteurs qui cherchent à recharger près de chez eux. Vous vous inscrivez, nous facilitons la mise en relation selon votre quartier et vos disponibilités.",
        },
        {
          question: "Est-ce que c'est gratuit ?",
          answer:
            "L'inscription est totalement gratuite et sans engagement. Nous sommes en phase de lancement et nous cherchons à construire la communauté avant d'ouvrir le service.",
        },
        {
          question: "Que se passe-t-il après mon inscription ?",
          answer:
            "Nous vous recontactons pour comprendre vos besoins et vous mettre en relation avec des voisins intéressés dès que le service est disponible dans votre quartier.",
        },
        {
          question: "Quelles communes sont concernées ?",
          answer:
            "Plus il y a d'inscrits dans une zone, plus vite nous pouvons lancer le service. Le réseau s'étend progressivement en fonction de la demande.",
        },
      ],
    },
    proprietaire: {
      tag: "Propriétaires de borne",
      titleLine1: "Votre borne peut vous",
      titleLine2: "rapporter localement.",
      desc: "Votre borne reste souvent inutilisée ? StreetCharge vous aide à l'ouvrir à des conducteurs proches, simplement et selon vos règles.",
      cta: "Proposer ma borne",
      imageAlt: "Propriétaire de borne",
    },
    footer: {
      tagline:
        "Le premier réseau de partage de bornes entre particuliers. Simple, local et humain.",
      navTitle: "Navigation",
      navHow: "Comment ça marche",
      navSignup: "S'inscrire",
      navFaq: "FAQ",
      contactTitle: "Contact",
      contactDesc: "Notre équipe répond à toutes vos questions.",
      rights: "Tous droits réservés",
      human: "Mise en relation 100% humaine",
    },
  },
  nl: {
    header: {
      nav: {
        how: "Hoe het werkt",
        faq: "FAQ",
      },
      signup: "Aanmelden",
      signupFree: "Gratis aanmelden",
      noCommitment: "Zonder verbintenis · 100% gratis",
      openMenu: "Menu openen",
      closeMenu: "Menu sluiten",
      menuDialog: "Navigatiemenu",
      switchLabel: "Taal",
    },
    hero: {
      titleLine1: "Laad op dicht bij huis.",
      titleLine2: "Deel je laadpaal.",
      subtitle:
        "StreetCharge verbindt buren om elektrisch laden eenvoudig, voordelig en lokaal te maken.",
      cta: "Sluit je aan bij de eerste gebruikers",
      imageAlt: "Elektrisch laden",
      bullets: [
        "Laad eenvoudig op dicht bij huis",
        "Verdien geld met je laadpaal",
        "Zonder verbintenis & veilig",
      ] as string[],
    },
    trouver: {
      accrocheLine1: " Lege laadpalen in jouw straat. Moet je opladen? ",
      accrocheHighlight: "  Wij brengen je in contact!",
      stats: [
        {
          value: "In opkomst",
          label: "Elk jaar rijden er meer elektrische auto's op onze wegen.",
        },
        {
          value: "Te weinig",
          label: "Te weinig beschikbare laadpalen in de buurt.",
        },
        {
          value: "Duur",
          label: "Opladen aan openbare laadpalen kan duur zijn.",
        },
      ],
      constatTag: "De vaststelling",
      constatTitle: "Vandaag blijft opladen ingewikkeld.",
      constatDesc:
        "Ondertussen worden duizenden privé-laadpalen niet gebruikt. Een enorme kans… nog onzichtbaar.",
      solutionTag: "De oplossing",
      solutionTitle: "StreetCharge ontsluit dit potentieel.",
      solutionDesc:
        "We laten particulieren hun laadpaal delen en bestuurders dicht bij huis opladen. Eenvoudig, menselijk en lokaal.",
      blocks: [
        { value: "Lokaal opladen", label: "Vind een laadpaal op enkele straten van je vandaan." },
        { value: "Verdien geld", label: "Verdien met je laadpaal wanneer die niet gebruikt wordt." },
        { value: "Eenvoudig & menselijk", label: "Een oplossing tussen buren, geleidelijk en betrouwbaar." },
      ],
      howTag: "Hoe het werkt",
      steps: [
        {
          num: "01",
          title: "Meld je aan",
          desc: "Sluit je in enkele klikken aan bij de community, of je nu bestuurder bent of eigenaar van een laadpaal.",
        },
        {
          num: "02",
          title: "Word in contact gebracht",
          desc: "We brengen je vanaf de lancering in contact met beschikbare laadpalen in je buurt.",
        },
        {
          num: "03",
          title: "Laad op",
          desc: "Laad je voertuig op aan een lokale prijs, bij een particulier dicht bij huis.",
        },
      ],
    },
    inscription: {
      tag: "Sluit je aan bij het project",
      title: "Sluit je aan bij de eersten.",
      intro:
        "Meld je gratis aan om vanaf de lancering in primeur toegang te krijgen tot het lokale netwerk.",
      successTitle: "Verzonden!",
      successDesc:
        "Welkom in de community. Je behoort tot de eersten. We nemen snel contact met je op.",
      sideTitleHost: "Je laadpaal kan lokaal voor je verdienen",
      sideTitleDriver: "Voorrangstoegang bij de lancering",
      sideDescHost:
        "Wordt je laadpaal vaak niet gebruikt? StreetCharge helpt je om ze open te stellen voor bestuurders in de buurt, eenvoudig en volgens jouw regels.",
      sideDescDriver:
        "Door je nu aan te melden, behoor je tot de eersten die zich aansluiten bij StreetCharge en vanaf de opening van het lokale netwerk profiteren.",
      benefitsHost: [
        "De laadpaal wordt 80% van de tijd niet gebruikt",
        "Ontvang bestuurders dicht bij huis",
        "Genereer extra inkomsten",
        "Rentabiliseer je laadpaal door passief inkomen te genereren",
      ] as string[],
      benefitsDriver: [
        "Gratis aanmelding zonder verbintenis",
        "In contact gebracht met je buren",
        "Goedkoper opladen, lokaal",
      ] as string[],
      toggleDriver: "Ik zoek een laadpunt",
      toggleHost: "Ik heb een laadpaal",
      descHost:
        "Deel je laadpaal volgens jouw beschikbaarheid, ontvang bestuurders uit de buurt en genereer lokaal extra inkomen.",
      descDriver:
        "Vind een lokale oplaadoplossing dicht bij huis, eenvoudig en zonder verbintenis.",
      placeholders: {
        name: "Volledige naam",
        phone: "Telefoon",
        email: "E-mailadres",
        postal: "Postcode (bv.: 1000)",
        terminal: "Type laadpaal (bv.: 11kW, 22kW...)",
      },
      sending: "Versturen...",
      submitDriver: "Word lid van de community",
      submitHost: "Begin met mijn laadpaal te rentabiliseren",
      consent: "Door je aan te melden, ga je ermee akkoord opnieuw gecontacteerd te worden voor de lancering.",
      privacy: "Je gegevens worden nooit gedeeld met derden.",
      errorGeneric: "Er is een fout opgetreden.",
      errorConnection: "Verbindingsfout.",
      typeDriver: "Bestuurder",
      typeHost: "Eigenaar (Host)",
    },
    faq: {
      tag: "Veelgestelde vragen",
      title: "Alles wat je wilt weten",
      items: [
        {
          question: "Hoe werkt het precies?",
          answer:
            "StreetCharge brengt eigenaars van privé-laadpalen in contact met bestuurders die dicht bij huis willen opladen. Je meldt je aan en wij faciliteren het contact op basis van je buurt en beschikbaarheid.",
        },
        {
          question: "Is het gratis?",
          answer:
            "Aanmelden is volledig gratis en zonder verbintenis. We bevinden ons in de lanceringsfase en willen de community opbouwen voordat we de dienst openen.",
        },
        {
          question: "Wat gebeurt er na mijn aanmelding?",
          answer:
            "We nemen contact met je op om je behoeften te begrijpen en je in contact te brengen met geïnteresseerde buren zodra de dienst beschikbaar is in je buurt.",
        },
        {
          question: "Welke gemeenten komen in aanmerking?",
          answer:
            "Hoe meer aanmeldingen in een zone, hoe sneller we de dienst kunnen lanceren. Het netwerk breidt zich geleidelijk uit afhankelijk van de vraag.",
        },
      ],
    },
    proprietaire: {
      tag: "Eigenaars van laadpalen",
      titleLine1: "Je laadpaal kan",
      titleLine2: "lokaal voor je verdienen.",
      desc: "Wordt je laadpaal vaak niet gebruikt? StreetCharge helpt je om ze open te stellen voor bestuurders in de buurt, eenvoudig en volgens jouw regels.",
      cta: "Mijn laadpaal aanbieden",
      imageAlt: "Eigenaar van laadpaal",
    },
    footer: {
      tagline:
        "Het eerste netwerk voor het delen van laadpalen tussen particulieren. Eenvoudig, lokaal en menselijk.",
      navTitle: "Navigatie",
      navHow: "Hoe het werkt",
      navSignup: "Aanmelden",
      navFaq: "FAQ",
      contactTitle: "Contact",
      contactDesc: "Ons team beantwoordt al je vragen.",
      rights: "Alle rechten voorbehouden",
      human: "100% menselijk contact",
    },
  },
  en: {
    header: {
      nav: {
        how: "How it works",
        faq: "FAQ",
      },
      signup: "Sign up",
      signupFree: "Sign up for free",
      noCommitment: "No commitment · 100% free",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      menuDialog: "Navigation menu",
      switchLabel: "Language",
    },
    hero: {
      titleLine1: "Charge close to home.",
      titleLine2: "Share your charger.",
      subtitle:
        "StreetCharge connects neighbours to make EV charging simple, affordable and local.",
      cta: "Join the first users",
      imageAlt: "EV charging",
      bullets: [
        "Charge easily close to home",
        "Earn money with your charger",
        "No commitment & secure",
      ],
    },
    trouver: {
      accrocheLine1: " Empty chargers on your street. Need to charge? ",
      accrocheHighlight: "  We connect you!",
      stats: [
        {
          value: "Growing",
          label: "More and more electric cars on our roads every year.",
        },
        {
          value: "Too few",
          label: "Too few available chargers nearby.",
        },
        {
          value: "Expensive",
          label: "Charging at public stations can be costly.",
        },
      ],
      constatTag: "The problem",
      constatTitle: "Today, charging is still complicated.",
      constatDesc:
        "Meanwhile, thousands of private chargers sit unused. A huge opportunity… still invisible.",
      solutionTag: "The solution",
      solutionTitle: "StreetCharge unlocks this potential.",
      solutionDesc:
        "We help private owners share their charger and drivers charge close to home. Simple, human and local.",
      blocks: [
        { value: "Local charging", label: "Find a charger just a few streets from your home." },
        { value: "Earn money", label: "Monetise your charger when it's not in use." },
        { value: "Simple & human", label: "A neighbour-to-neighbour solution, gradual and reliable." },
      ],
      howTag: "How it works",
      steps: [
        {
          num: "01",
          title: "Sign up",
          desc: "Join the community in a few clicks, whether you're a driver or a charger owner.",
        },
        {
          num: "02",
          title: "Get matched",
          desc: "We connect you with available chargers in your neighbourhood as soon as we launch.",
        },
        {
          num: "03",
          title: "Charge",
          desc: "Charge your vehicle at a local price, at a private owner's place near you.",
        },
      ],
    },
    inscription: {
      tag: "Join the project",
      title: "Join the first users.",
      intro:
        "Sign up for free to get early access to the local network as soon as we launch.",
      successTitle: "Sent!",
      successDesc:
        "Welcome to the community. You're among the first. We'll get back to you very soon.",
      sideTitleHost: "Your charger can earn you money locally",
      sideTitleDriver: "Priority access at launch",
      sideDescHost:
        "Is your charger often unused? StreetCharge helps you open it up to nearby drivers, simply and on your own terms.",
      sideDescDriver:
        "By signing up now, you'll be among the first to join StreetCharge and benefit from the local network as soon as it opens.",
      benefitsHost: [
        "The charger sits unused 80% of the time",
        "Welcome drivers near you",
        "Generate extra income",
        "Make your charger profitable with passive income",
      ],
      benefitsDriver: [
        "Free sign-up, no commitment",
        "Connect with your neighbours",
        "Charge at lower cost, locally",
      ],
      toggleDriver: "I'm looking to charge",
      toggleHost: "I have a charger",
      descHost:
        "Share your charger on your schedule, welcome nearby drivers and earn extra local income.",
      descDriver:
        "Find a local charging solution close to home, simply and with no commitment.",
      placeholders: {
        name: "Full name",
        phone: "Phone",
        email: "Email address",
        postal: "Postal code (e.g. 1000)",
        terminal: "Charger type (e.g. 11kW, 22kW...)",
      },
      sending: "Sending...",
      submitDriver: "Join the community",
      submitHost: "Start earning with my charger",
      consent: "By signing up, you agree to be contacted for the launch.",
      privacy: "Your data is never shared with third parties.",
      errorGeneric: "An error occurred.",
      errorConnection: "Connection error.",
      typeDriver: "Driver",
      typeHost: "Owner (Host)",
    },
    faq: {
      tag: "Frequently asked questions",
      title: "Everything you want to know",
      items: [
        {
          question: "How exactly does it work?",
          answer:
            "StreetCharge connects private charger owners with drivers looking to charge near home. You sign up, and we facilitate the match based on your neighbourhood and availability.",
        },
        {
          question: "Is it free?",
          answer:
            "Sign-up is completely free and with no commitment. We're in the launch phase and want to build the community before opening the service.",
        },
        {
          question: "What happens after I sign up?",
          answer:
            "We get back to you to understand your needs and connect you with interested neighbours as soon as the service is available in your area.",
        },
        {
          question: "Which areas are covered?",
          answer:
            "The more sign-ups in an area, the faster we can launch the service. The network grows gradually based on demand.",
        },
      ],
    },
    proprietaire: {
      tag: "Charger owners",
      titleLine1: "Your charger can",
      titleLine2: "earn you money locally.",
      desc: "Is your charger often unused? StreetCharge helps you open it up to nearby drivers, simply and on your own terms.",
      cta: "Offer my charger",
      imageAlt: "Charger owner",
    },
    footer: {
      tagline:
        "The first peer-to-peer charger sharing network. Simple, local and human.",
      navTitle: "Navigation",
      navHow: "How it works",
      navSignup: "Sign up",
      navFaq: "FAQ",
      contactTitle: "Contact",
      contactDesc: "Our team answers all your questions.",
      rights: "All rights reserved",
      human: "100% human matching",
    },
  },
};
