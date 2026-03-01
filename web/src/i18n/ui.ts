export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui: Record<Lang, Record<string, string>> = {
  en: {
    // Navbar
    'nav.features': 'Features',
    'nav.howItWorks': 'How it works',
    'nav.docs': 'Docs',
    'nav.github': 'GitHub',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Footer
    'footer.tagline': 'The Kubernetes of AI Agents. Orchestrate agent teams for any purpose, defined by documentation.',
    'footer.github': 'GitHub',
    'footer.docs': 'Documentation',
    'footer.roadmap': 'Roadmap',
    'footer.bookCall': 'Book a Call',
    'footer.helmcode': 'Helmcode.com',
    'footer.copyright': '2025 AgentCrew. Built by',
    'footer.openSource': 'Open Source',

    // Contact Form
    'contact.label': 'Contact',
    'contact.heading': "Let's",
    'contact.headingGradient': 'talk',
    'contact.subtitle': 'Have questions about AgentCrew? Want to discuss how AI agent teams can help your organization? Get in touch.',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'you@company.com',
    'contact.company': 'Company',
    'contact.companyOptional': '(optional)',
    'contact.companyPlaceholder': 'Your company',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us about your use case...',
    'contact.submit': 'Send Message',
    'contact.successTitle': 'Message sent!',
    'contact.successMessage': 'Thanks for reaching out. We will get back to you soon.',
    'contact.errorTitle': 'Something went wrong',
    'contact.errorMessage': 'Please try again or email us directly at hello+agentcrew@helmcode.com.',

    // Docs sidebar
    'docs.gettingStarted': 'Getting Started',
    'docs.overview': 'Overview',
    'docs.quickStart': 'Quick Start',
    'docs.configuration': 'Configuration',
    'docs.coreConcepts': 'Core Concepts',
    'docs.providers': 'Providers',
    'docs.skills': 'Skills',
    'docs.schedules': 'Schedules',
    'docs.architecture': 'Architecture',
  },
  es: {
    // Navbar
    'nav.features': 'Funcionalidades',
    'nav.howItWorks': 'Como funciona',
    'nav.docs': 'Docs',
    'nav.github': 'GitHub',
    'nav.contact': 'Contacto',
    'nav.getStarted': 'Comenzar',

    // Footer
    'footer.tagline': 'El Kubernetes de los Agentes IA. Orquesta equipos de agentes para cualquier proposito, definidos por documentacion.',
    'footer.github': 'GitHub',
    'footer.docs': 'Documentacion',
    'footer.roadmap': 'Hoja de Ruta',
    'footer.bookCall': 'Agendar Llamada',
    'footer.helmcode': 'Helmcode.com',
    'footer.copyright': '2025 AgentCrew. Creado por',
    'footer.openSource': 'Codigo Abierto',

    // Contact Form
    'contact.label': 'Contacto',
    'contact.heading': 'Hablemos',
    'contact.headingGradient': '',
    'contact.subtitle': 'Tienes preguntas sobre AgentCrew? Quieres saber como los equipos de agentes IA pueden ayudar a tu organizacion? Escribenos.',
    'contact.name': 'Nombre',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.email': 'Correo electronico',
    'contact.emailPlaceholder': 'tu@empresa.com',
    'contact.company': 'Empresa',
    'contact.companyOptional': '(opcional)',
    'contact.companyPlaceholder': 'Tu empresa',
    'contact.message': 'Mensaje',
    'contact.messagePlaceholder': 'Cuentanos sobre tu caso de uso...',
    'contact.submit': 'Enviar Mensaje',
    'contact.successTitle': 'Mensaje enviado!',
    'contact.successMessage': 'Gracias por escribirnos. Te responderemos pronto.',
    'contact.errorTitle': 'Algo salio mal',
    'contact.errorMessage': 'Por favor intenta de nuevo o escribenos a hello+agentcrew@helmcode.com.',

    // Docs sidebar
    'docs.gettingStarted': 'Primeros Pasos',
    'docs.overview': 'Resumen',
    'docs.quickStart': 'Inicio Rapido',
    'docs.configuration': 'Configuracion',
    'docs.coreConcepts': 'Conceptos Clave',
    'docs.providers': 'Proveedores',
    'docs.skills': 'Habilidades',
    'docs.schedules': 'Tareas Programadas',
    'docs.architecture': 'Arquitectura',
  },
};
