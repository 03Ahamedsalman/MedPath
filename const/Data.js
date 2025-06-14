import { Banner_1, MiniBanner_1 } from "@/assets/assets";
import { ABOUT_ROUTE, CONTACT_ROUTE } from "@/utils/routes";

export const Home_Data = {
  hero_section: [
    {
      span: "Navigating Your Medical Journey",
      title: "Pursue MBBS Abroad | Build a Global Medical Career",
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
      title: "MBBS | GLOBAL | FUTURE",
      description:
        "In today’s world, medicine knows no borders — and neither should your education.At MedPath Overseas, we connect ambitious students to globally recognized MBBS programs that shape them into confident, internationally qualified doctors.",
      images: [
        {
          src: Banner_1,
          alt: "International medical students in classroom setting",
        },
        {
          src: MiniBanner_1,
          alt: "Young doctor receiving international medical degree",
        },
      ],
      button: {
        label: "GET STARTED",
        link: "/get-started",
      },
    },
  ],
  about_section: {
    span: "About Us",
    title: "Welcome to MedPath",
    description_one:
      "Established in 2025, MBBS Consultancy is dedicated to helping Indian students fulfill their dream of becoming globally recognized doctors. As one of India’s leading facilitators of overseas medical education, we specialize in guiding aspiring medical students to pursue MBBS in top-ranked international universities recognized by the National Medical Commission (NMC), formerly known as the Medical Council of India (MCI).",
    description_two:
      "Our expert team offers comprehensive support throughout the entire journey—from personalized admission counseling to complete assistance during the admission process and beyond. With a student-first approach, we ensure a smooth and transparent experience from application to graduation. Additionally, we provide visa assistance, accommodation support, and post-arrival guidance, making the transition to studying abroad seamless and stress-free. Our mission is to offer affordable education options and unparalleled guidance, helping students realize their aspirations to become successful doctors in global healthcare systems.",
    image: "https://example.com/images/about.jpg",
  },
  popular_countries: [
    {
      name: "Russia",
      description:
        "Study MBBS in Russia at top universities with affordable tuition fees and high-quality education.",
      image: "https://example.com/images/russia.jpg",
      button: {
        button_text: "Explore Russia",
        button_link: ABOUT_ROUTE,
      },
    },
    {
      name: "Ukraine",
      description:
        "Pursue your medical degree in Ukraine, known for its excellent medical programs and international recognition.",
      image: "https://example.com/images/ukraine.jpg",
      button: {
        button_text: "Explore Ukraine",
        button_link: ABOUT_ROUTE,
      },
    },
    {
      name: "Kazakhstan",
      description:
        "Experience world-class medical education in Kazakhstan with a focus on practical training and research.",
      image: "https://example.com/images/kazakhstan.jpg",
      button: {
        button_text: "Explore Kazakhstan",
        button_link: ABOUT_ROUTE,
      },
    },
  ],
  our_services: {
    title: "Our Services",
    services: [
      {
        title: "Free Personal Counselling",
        description:
          "Our expert counsellors help you through the finding out your best option from various countries and universities for your MBBS abroad.",
        image: "https://example.com/images/counseling.jpg",
      },
      {
        title: "Visa",
        description:
          "At MBBS Abroad Ahmedabad, we understand that the process of studying abroad involves more than just securing admission to a medical university.",
        image: "https://example.com/images/admission.jpg",
      },
      {
        title: "Complete Admission Assistance",
        description:
          "After the selection of the university, our team will take you through the admission process and share the details.",
        image: "https://example.com/images/visa.jpg",
      },
      {
        title: "Travel Assistance",
        description:
          "We provide comprehensive travel assistance, ensuring a smooth journey from India to your chosen destination.",
        image: "https://example.com/images/travel.jpg",
      },
      {
        title: "Accommodation",
        description:
          "We assist in finding suitable accommodation options that meet your needs and budget.",
        image: "https://example.com/images/accommodation.jpg",
      },
      {
        title: "Post Arrival Guidance",
        description:
          "Our support continues even after you arrive, helping you settle in and adapt to your new environment.",
        image: "https://example.com/images/post_arrival.jpg",
      },
    ],
  },
  free_demo_section: {
    title: "Book a Free Demo Session",
    description:
      "Join our free demo session to learn more about studying MBBS abroad. Our experts will guide you through the process, answer your questions, and help you understand the opportunities available.",
    image: "https://example.com/images/demo.jpg",
    button: {
      button_text: "Book Now",
      button_link: ABOUT_ROUTE,
    },
  },
  top_universities: {
    title: "Top Universities to Study Abroad",
    russia: [
      {
        name: "Kazakh National Medical University",
        description:
          "One of the leading medical universities in Kazakhstan, known for its high academic standards and research opportunities.",
        image: "https://example.com/images/kazakh_university.jpg",
      },
      {
        name: "Tashkent Medical Academy",
        description:
          "A prestigious institution in Uzbekistan offering a wide range of medical programs with international recognition.",
        image: "https://example.com/images/tashkent_university.jpg",
      },
    ],
    ukraine: [
      {
        name: "Kharkiv National Medical University",
        description:
          "A top-ranked medical university in Ukraine, known for its comprehensive medical programs and research facilities.",
        image: "https://example.com/images/kharkiv_university.jpg",
      },
      {
        name: "Lviv National Medical University",
        description:
          "Renowned for its quality education and international collaborations, Lviv National Medical University offers a vibrant learning environment.",
        image: "https://example.com/images/lviv_university.jpg",
      },
    ],
    kazakhstan: [
      {
        name: "Al-Farabi Kazakh National University",
        description:
          "One of the largest and most prestigious universities in Kazakhstan, offering a wide range of medical programs.",
        image: "https://example.com/images/al_farabi_university.jpg",
      },
      {
        name: "Astana Medical University",
        description:
          "A leading medical institution in Kazakhstan, known for its innovative teaching methods and research initiatives.",
        image: "https://example.com/images/astana_university.jpg",
      },
    ],
    india: [
      {
        name: "All India Institute of Medical Sciences (AIIMS)",
        description:
          "AIIMS is one of the most prestigious medical institutions in India, known for its excellence in medical education and research.",
        image: "https://example.com/images/aiims.jpg",
      },
      {
        name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
        description:
          "PGIMER is a leading medical and research institution in India, offering advanced medical education and training.",
        image: "https://example.com/images/pgimer.jpg",
      },
    ],
  },
  elgibility: [
    {
      title: "Eligibility Criteria for MBBS Programs Abroad",
      description:
        "At MBBS Consultancy, we help students meet all the necessary qualifications to pursue their dream of studying MBBS in top international medical universities. Here are the key eligibility requirements for Indian students:",
      criteria: [
        [
          "1. Academic Qualifications",
          "To apply for an MBBS program abroad, students must have completed their 12th grade with Physics, Chemistry, and Biology (PCB) as core subjects. A minimum of 50% marks in PCB is generally required. Some universities may have higher cutoffs, so we guide you based on the specific university criteria.",
        ],
        [
          "2. NEET Qualification",
          "Indian students must have a valid NEET score to be eligible for MBBS admission abroad. This is a mandatory requirement by the National Medical Commission (NMC) to pursue MBBS outside India.",
        ],
        [
          "3. Age Requirement",
          "Applicants must be at least 17 years of age at the time of admission. Some countries may also have an upper age limit of 25 years, so it’s important to verify age-related eligibility based on your preferred destination.",
        ],
        [
          "4. English Language Proficiency",
          "Most of our partner universities offer MBBS programs in English and do not require IELTS or TOEFL scores. If your previous education was in English, you’re generally exempt from any language proficiency test. We ensure that you only take what’s necessary, avoiding unnecessary exams.",
        ],
        [
          "5. Passport and Visa Requirements",
          "To pursue MBBS abroad, having a valid passport is essential. You must also fulfill the visa requirements of the country where you plan to study. This usually includes providing documents like your university admission letter, proof of financial stability, and health insurance. The visa process varies by country, but at MBBS Consultancy, we guide you every step of the way to ensure a smooth and successful application.",
        ],
        [
          "6. Health and Medical Fitness",
          "Some countries require a medical fitness certificate or a health check-up before issuing a student visa or confirming university admission. This may include basic medical tests and proof of necessary vaccinations. As your trusted MBBS consultants, we assist you in meeting all health and fitness requirements to avoid last-minute issues.",
        ],
        [
          "By fulfilling these final criteria, you’ll be fully prepared to begin your MBBS journey in one of the world’s top NMC and WHO-approved medical universities. MBBS Consultancy is here to make the process easy, efficient, and worry-free!",
        ],
      ],
    },
  ],
  accompalishments: {
    span: "Are You Ready to Pursue Your MBBS Abroad?",
    title: "Our Accomplishments",
    description:
      "Get Free MBBS Consultation For Featured. Top Universities in Abroad",
    description_two:
      "Get Unlimited Access to 2,000+ of Top Universities for your MBBS Career across All Countries. Contact us now",
    button_one: {
      button_text_one: "Get Started",
      button_link_one: ABOUT_ROUTE,
    },
    button_two: {
      button_text_two: "Contact Us",
      button_link_two: CONTACT_ROUTE,
    },

    achievements: [
      {
        title: "3.9k+",
        description: "Successfully Graduated",
        image: "https://example.com/images/admissions.jpg",
      },
      {
        title: "15.8k+",
        description: "Applications Completed",
        image: "https://example.com/images/guidance.jpg",
      },
      {
        title: "97.5+",
        description: "Satisfaction Rate",
        image: "https://example.com/images/network.jpg",
      },
      {
        title: "100.2k+",
        description: "Students Community",
        image: "https://example.com/images/network.jpg",
      },
    ],
  },
  //   why_us: {
  //     span: "WHY CHOOSE US",
  //     title:
  //       "Unlock Your Medical Dreams Abroad: Study Doctor, Your Trusted Companion.",
  //     description:
  //       "Discover your path to a medical career with Study Doctor. Benefit from expert guidance, a global network of top-tier universities, and comprehensive services tailored to your needs. Let us simplify your journey to studying MBBS abroad, ensuring a seamless transition and a rewarding educational experience.",
  //     approved_by: [
  //       {
  //         name: "National Medical Commission (NMC)",
  //         description:
  //           "Recognized by the NMC, ensuring compliance with Indian medical education standards.",
  //         image: "https://example.com/images/nmc.jpg",
  //       },
  //       {
  //         name: "World Health Organization (WHO)",
  //         description:
  //           "Affiliated with WHO, guaranteeing global recognition of your medical degree.",
  //         image: "https://example.com/images/who.jpg",
  //       },
  //       {
  //         name: "Ministry of Education",
  //         description:
  //           "Approved by the Ministry of Education, ensuring quality education and support.",
  //         image: "https://example.com/images/ministry.jpg",
  //       },
  //     ],
  //   },
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
    { label: "MBBS in Russia", href: "/countries/russia" },
    { label: "MBBS in Kyrgyzstan", href: "/countries/kyrgyzstan" },
    { label: "MBBS in Kazakhstan", href: "/countries/kazakhstan" },
    { label: "PG in UK", href: "/countries/uk" },
    { label: "PG in USA", href: "/countries/usa" },
    { label: "PG in Canada", href: "/countries/canada" },
    { label: "PG in Australia", href: "/countries/australia" },
  ],
};

export const daySchedules = {
  Sunday: "Closed",
  Monday: "10:00AM - 8:00PM",
  Tuesday: "10:00AM - 8:00PM",
  Wednesday: "10:00AM - 8:00PM",
  Thursday: "10:00AM - 8:00PM",
  Friday: "10:00AM - 8:00PM",
  Saturday: "10:00AM - 5.00PM",
};

export const socialmediaLinks = {
  instagram: "https://www.instagram.com/medpathoverseas?igsh=MWRpaWZzaTdlcDN6",
  facebook: "https://www.facebook.com/medpathconsultancy",
  linkedin:
    "https://www.linkedin.com/company/medpath-overseas/posts/?feedView=all",
  youtube: "https://www.youtube.com/@medpathoverseas",
  whatsapp: "https://wa.me/917305702699",
  email: "mailto:omedpath@gmail.com",
};
