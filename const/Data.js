import {
  AL,
  Banner_1,
  Banner_2,
  Bashkir,
  bukhara,
  iner,
  jalala,
  Kazahk,
  kazan,
  MiniBanner_1,
  MiniBanner_2,
} from "@/assets/assets";
import { ABOUT_ROUTE, CONTACT_ROUTE } from "@/utils/routes";

export const Home_Data = {
  hero_section: [
    {
      span: "Navigating Your Medical Journey",
      description:
        "At MedPath Overseas, we specialize in guiding aspiring doctors to secure affordable, high-quality medical education at top-ranked international universities. With years of experience, transparent advice, and personalized support, we make your MBBS journey smooth and successful.",
      images: [
        {
          src: Banner_1,
          alt: "Happy medical students graduating abroad",
        },
        {
          src: MiniBanner_1,
          alt: "Students in white coats at international medical university",
        },
      ],
      button: {
        label: "GET STARTED",
        link: "/get-started",
      },
    },
    {
      span: "Navigating Your Medical Journey",
      description:
        "In today’s world, medicine knows no borders — and neither should your education.At MedPath Overseas, we connect ambitious students to globally recognized MBBS programs that shape them into confident, internationally qualified doctors.",
      images: [
        {
          src: Banner_2,
          alt: "International medical students in classroom setting",
        },
        {
          src: MiniBanner_2,
          alt: "Young doctor receiving international medical degree",
        },
      ],
      button: {
        label: "GET STARTED",
        link: "/get-started",
      },
    },
  ],
  our_universities: {
    title: "Our University",
    universities: [
      {
        id: 0,
        title: "Al-Farabi Kazakh National University",
        image: {
          src: AL,
          alt: "Al-Farabi Kazakh National University",
        },
      },
      {
        id: 1,
        title: "Bashkir state medical University",
        image: {
          src: Bashkir,
          alt: "Bashkir state medical University",
        },
      },
      {
        id: 2,
        title: "Bukhara State Medical Institute",
        image: {
          src: bukhara,
          alt: "BUKHARA STATE MEDICAL INSTITUTE",
        },
      },
      {
        id: 3,
        title: "International School of Medicine",
        image: {
          src: iner,
          alt: "International School of Medicine",
        },
      },
      {
        id: 4,
        title: "Kazakh National Medical University",
        image: {
          src: Kazahk,
          alt: "Kazakh National Medical University",
        },
      },
      {
        id: 5,
        title: "Jalalabad state medical University",
        image: {
          src: jalala,
          alt: "Jalalabad state medical University",
        },
      },
      {
        id: 6,
        title: "Kazan state medical University",
        image: {
          src: kazan,
          alt: "Kazan state medical University",
        },
      },
    ],
  },
  about_section: {
    span: "About Us",
    title: "Welcome to MedPath",
    description_one:
      "Established in 2025, MBBS Consultancy is dedicated to helping Indian students fulfill their dream of becoming globally recognized doctors. As one of India’s leading facilitators of overseas medical education, we specialize in guiding aspiring medical students to pursue MBBS in top-ranked international universities recognized by the National Medical Commission (NMC), formerly known as the Medical Council of India (MCI).",
    description_two:
      "Our expert team offers comprehensive support throughout the entire journey—from personalized admission counseling to complete assistance during the admission process and beyond. With a student-first approach, we ensure a smooth and transparent experience from application to graduation. Additionally, we provide visa assistance, accommodation support, and post-arrival guidance, making the transition to studying abroad seamless and stress-free. Our mission is to offer affordable education options and unparalleled guidance, helping students realize their aspirations to become successful doctors in global healthcare systems.",
    lists: [
      {
        id: 0,
        title: "Expert Guidance: ",
        description:
          "Navigate abroad’s medical education with personalized expert advice.",
      },
      {
        id: 1,
        title: "Global Connections: ",
        description:
          "Access renowned universities worldwide for your MBBS studies.",
      },
      {
        id: 2,
        title: "Seamless Process: ",
        description:
          "Simplify your journey from application to cultural integration effortlessly.",
      },
    ],
  },
  google_testimonials_section: {
    title: "Google Testimonials",
    testimonials: [
      {
        name: "B. Bhuvanes War!",
        date: "2024-09-23",
        review:
          "Study Doctor keeps students and parents informed about the application process and progress",
        rating: 5,
        userimageString:
          "https://ui-avatars.com/api/?name=BhuvanesWar&size=200&rounded=true",
      },
      {
        name: "KAMARDEN Safi",
        date: "2024-09-22",
        review:
          "Genuine consultant for abroad medical education, trustable and official representative for abroad medical education for top universities.",
        rating: 5,
        userimageString:
          "https://ui-avatars.com/api/?name=KAMARDEN Safi&size=200&rounded=true",
      },
      {
        name: "G. Vijaya Rajsendhiran",
        date: "2024-09-22",
        review:
          "Good service. Has all the information regarding universities fees, course, offered etc",
        rating: 3,
        userimageString:
          "https://ui-avatars.com/api/?name=G. Vijaya Rajsendhiran&size=200&rounded=true",
      },
      {
        name: "B. Bhuvanes War!",
        date: "2024-09-23",
        review:
          "Study Doctor keeps students and parents informed about the application process and progress",
        rating: 2,
        userimageString:
          "https://ui-avatars.com/api/?name=BhuvanesWar&size=200&rounded=true",
      },
      {
        name: "KAMARDEN Safi",
        date: "2024-09-22",
        review:
          "Genuine consultant for abroad medical education, trustable and official representative for abroad medical education for top universities.",
        rating: 3,
        userimageString:
          "https://ui-avatars.com/api/?name=KAMARDEN Safi&size=200&rounded=true",
      },
      {
        name: "G. Vijaya Rajsendhiran",
        date: "2024-09-22",
        review:
          "Good service. Has all the information regarding universities fees, course, offered etc",
        rating: 1,
        userimageString:
          "https://ui-avatars.com/api/?name=G. Vijaya Rajsendhiran&size=200&rounded=true",
      },
    ],
  },
  consult_section: {
    title: "Consult With Our Expert",
    description:
      "Personalized guidance for your medical journey. Choose Study Doctor now",
    youtube_id: "NBDLr7I8eZM",
    button: {
      label: "GET STARTED",
      link: "/consult",
    },
  },
  our_services: {
    title: "Our Services",
    services: [
      {
        title: "Carrer Counselling",
      },
      {
        title: "Immigration Clearance",
      },
      {
        title: "University Selection & Admission",
      },
      {
        title: "Visa/Travel/Bank Loan Assistance",
      },
      {
        title: "MCI Approval",
      },
      {
        title: "Scholorship",
      },
      {
        title: "Documentation Verification",
      },
      {
        title: "Old Student Reference",
      },
      {
        title: "PG Admission",
      },
      {
        title: "UK Work Placment",
      },
    ],
  },
  why_us: {
    span: "WHY CHOOSE US",
    title:
      "Unlock Your Medical Dreams Abroad: Study Doctor, Your Trusted Companion.",
    description:
      "Discover your path to a medical career with Study Doctor. Benefit from expert guidance, a global network of top-tier universities, and comprehensive services tailored to your needs. Let us simplify your journey to studying MBBS abroad, ensuring a seamless transition and a rewarding educational experience.",
    button: {
      label: "Learn More",
      link: { ABOUT_ROUTE },
    },
    approved_by: [
      {
        title: "NMC Aproved",
        description:
          "Study Doctor: NMC Approved Education Consultant for Pursuing MBBS Abroad.",
        image: "https://example.com/images/nmc.jpg",
      },
      {
        title: "FMGE",
        description:
          "Unlock Your Global Medical Career: FMGE Preparation with Study Doctor.",
        image: "https://example.com/images/who.jpg",
      },
      {
        title: "Expert Guidance",
        description:
          "Navigate your medical education with seasoned professionals by your side.",
        image: "https://example.com/images/ministry.jpg",
      },
      {
        title: "Global Network",
        description:
          "Access top-notch medical universities worldwide through our extensive connections.",
        image: "https://example.com/images/ministry.jpg",
      },
      {
        title: "UNESCO Aproved",
        description:
          "Empowering Dreams: Study Doctor - Your Gateway to International Medical Education.",
        image: "https://example.com/images/ministry.jpg",
      },
      {
        title: "Carrer Counselling",
        description:
          "Unlock Your Medical Career: Study MBBS Abroad with Study Doctor!.",
        image: "https://example.com/images/ministry.jpg",
      },
      {
        title: "Comprehensive Services",
        description:
          "Enjoy seamless support from application to post-arrival, simplifying your journey.",
        image: "https://example.com/images/ministry.jpg",
      },
      {
        title: "Cultural Integration",
        description:
          "Embrace a smooth transition with our assistance in adapting abroad.",
        image: "https://example.com/images/ministry.jpg",
      },
    ],
  },

  Are_You_Ready: {
    title: "Are You Ready to Study MBBS Abroad?",
    description:
      "We're here to help you unlock your medical dreams abroad. Let's start by learning more about studying MBBS abroad, exploring popular countries, and understanding the benefits of our services.",
    button: {
      label: "Learn More",
      link: { ABOUT_ROUTE },
    },
  },

  trusted_logo: {
    image: "https://example.com/images/trusted_logo.jpg",
    alt: "Trusted Logo",
  },

  testimonials: {
    title: "Student Testimonial",
    entries: [
      {
        name: "Aarav Sharma",
        feedback:
          "MBBS Consultancy guided me with every step of the admission process. Their support, advice, and prompt responses helped me fulfill my dream of studying abroad. I truly recommend them to any aspiring medical student looking for genuine help.",
        image: "https://example.com/images/testimonial1.jpg",
        starRating: 5,
      },
      {
        name: "Priya Verma",
        feedback:
          "The consultants at MBBS Consultancy were incredibly patient and knowledgeable. They explained everything clearly, assisted with documentation, and offered motivation throughout the journey. I felt supported at every step, and I’m now pursuing my MBBS in Georgia successfully.",
        image: "https://example.com/images/testimonial2.jpg",
        starRating: 5,
      },
      {
        name: "Rahul Mehta",
        feedback:
          "I got admitted to a top medical university in Russia with their help. MBBS Consultancy’s transparent process, quick communication, and honest guidance made everything stress-free. I am very thankful to them for making my study-abroad dream happen.",
        image: "https://example.com/images/testimonial3.jpg",
        starRating: 4,
      },
      {
        name: "Sneha Kapoor",
        feedback:
          "MBBS Consultancy was always available to answer my questions and offer advice. They ensured I chose the right country and university. The entire process felt simple because of their clarity and professionalism. Truly grateful for their exceptional service and care.",
        image: "https://example.com/images/testimonial4.jpg",
        starRating: 4,
      },
      {
        name: "Karan Singh",
        feedback:
          "I’m really happy I chose MBBS Consultancy. Their team helped me complete all documentation and applications smoothly. I had no idea where to start, but their support helped me secure admission into a great university in Kazakhstan without stress.",
        image: "https://example.com/images/testimonial5.jpg",
        starRating: 5,
      },
      {
        name: "Meera Iyer",
        feedback:
          "With MBBS Consultancy, my application process became effortless. They clearly explained procedures, offered helpful tips, and checked on my progress. Their service is reliable and student-focused. I'm now studying MBBS in Uzbekistan with confidence and peace of mind.",
        image: "https://example.com/images/testimonial6.jpg",
        starRating: 4,
      },
    ],
  },
  countryItems: [
    { id: 1, label: "MBBS in Russia", href: "/countries/russia" },
    { id: 2, label: "MBBS in Kyrgyzstan", href: "/countries/kyrgyzstan" },
    { id: 3, label: "MBBS in Kazakhstan", href: "/countries/kazakhstan" },
    { id: 4, label: "MBBS IN Vietnam", href: "/countries/vietnam" },
    { id: 5, label: "MBBS IN Uzbekistan", href: "/countries/uzbekistan" },
  ],
};

export const daySchedules = {
  Sunday: "10:00AM - 5.00PM",
  Monday: "10:00AM - 8:00PM",
  Tuesday: "10:00AM - 8:00PM",
  Wednesday: "10:00AM - 8:00PM",
  Thursday: "10:00AM - 8:00PM",
  Friday: "10:00AM - 8:00PM",
  Saturday: "10:00AM - 8.00PM",
};

export const socialmediaLinks = {
  instagram: "https://www.instagram.com/medpathoverseas?igsh=MWRpaWZzaTdlcDN6",
  facebook: "https://www.facebook.com/medpathconsultancy",
  linkedin:
    "https://www.linkedin.com/company/medpath-overseas/posts/?feedView=all",
  youtube: "#",
  whatsapp: "https://wa.me/917305702699",
  email: "mailto:omedpath@gmail.com",
};
