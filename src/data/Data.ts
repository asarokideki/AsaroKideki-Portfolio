type Category = {
    id: number
    category: string
}

type Skills = {
    id: number
    title: string
    image: string
}

type WorkHistories = {
    id: number
    company: string
    term: string
    role: string
}

type ProjectList = {
    id: number
    image: string
    role: string
    title: string
    summary: string
    parentID: number,
    url: string
}

export const category: Category[] = [
    {
        id: 0,
        category: "About me"
    },
    {
        id: 1,
        category: "Education"
    },
    {
        id: 2,
        category: "Skills"
    },
    {
        id: 3,
        category: "Work Histories"
    },
    {
        id: 4,
        category: "CV"
    }
]

export const skills: Skills[] = [
    {
        id: 0,
        title: "HTML",
        image: "/image/skills/HTML.png"
    },
    {
        id: 1,
        title: "CSS",
        image: "/image/skills/CSS.png"
    },
    {
        id: 2,
        title: "Bootstrap",
        image: "/image/skills/Bootstrap.png"
    },
    {
        id: 3,
        title: "Tailwind CSS",
        image: "/image/skills/TailwindCSS.png"
    },
    {
        id: 4,
        title: "MUI",
        image: "/image/skills/MUI.png"
    },
    {
        id: 5,
        title: "JavaScript",
        image: "/image/skills/JavaScript.png"
    },
    {
        id: 6,
        title: "TypeScript",
        image: "/image/skills/TypeScript.png"
    },
    {
        id: 7,
        title: "PHP",
        image: "/image/skills/PHP.png"
    },
    {
        id: 8,
        title: "Laravel",
        image: "/image/skills/Laravel.png"
    },
    {
        id: 9,
        title: "React",
        image: "/image/skills/React.png"
    },
    {
        id: 10,
        title: "React Native",
        image: "/image/skills/React.png"
    },
    {
        id: 11,
        title: "NextJS",
        image: "/image/skills/NextJS.png"
    },
    {
        id: 12,
        title: "Angular",
        image: "/image/skills/Angular.png"
    },
    {
        id: 13,
        title: "Vue",
        image: "/image/skills/VueJS.png"
    },
    {
        id: 14,
        title: "NuxtJS",
        image: "/image/skills/NuxtJS.png"
    }
]

export const workhistories: WorkHistories[] = [
    {
        id: 0,
        company: "Kita Osaka | Toyonaka",
        term: "Jun, 2016 - Feb, 2019",
        role: "Senior Front-End Developer",
    },
    {
        id: 1,
        company: "Senda Japan | Tokyo | Remote",
        term: "Feb, 2020 - Apr, 2024",
        role: "Senior Front-End Developer",
    }
]

export const projectlists: ProjectList[] = [
    {
        id: 0,
        image: "/image/WorkHistory/Careful mail order.png",
        role: "Front-End Development",
        title: "Careful Mail Order",
        summary: "I developed a responsive and user-friendly e-commerce front- end using React.js, Tailwind CSS, and Redux. I implemented key features such as dynamic product catalogs,secure user authentication, and a smooth checkout process, ensuring optimal performance through lazy loading and asset optimization. I also integrated RESTful APIs for seamless data fetching and ensured cross - browser compatibility with thorough testing.",
        parentID: 0,
        url: "https://www.teinei.co.jp"
    },
    {
        id: 1,
        image: "/image/WorkHistory/HAKU Takatsuki store.png",
        role: "Front-End Development",
        title: "HAKU Takatsuki store",
        summary: "I created a responsive e-commerce platform using Next.js and Tailwind CSS enhanced with Hooks functions for state management. Key achievements include implementing a dynamic product catalog, strong user authentication and a streamlined payment process, optimizing performance with lazy loading and efficient API integration, and rigorous testing to ensure smooth functionality across a variety of browsers.",
        parentID: 0,
        url: "https://whitening-haku-takatsuki.machi-deza.com"
    },
    {
        id: 2,
        image: "/image/WorkHistory/Vodafone.png",
        role: "Front-End Development",
        title: "Vodafone",
        summary: "My responsibility in the Vodafone project was to handle both frontend and backend.On the front end, the user interface was designed using HTML, CSS, and JavaScript frameworks, TypeScript such as React.js or Angular to ensure responsiveness and cross- browser compatibility.On the back end, server - side logic was written in languages ​​such as Node.js or Python.We built and managed the database, developed APIs for seamless data integration, and also handled deployment, testing, and maintenance using tools such as Git for version control and cloud platforms for hosting. This holistic approach enables end - to - end development of powerful, scalable web solutions.",
        parentID: 0,
        url: "https://www.vodafone.com.au"
    },
    {
        id: 3,
        image: "/image/WorkHistory/100 Tokyo.png",
        role: "Full-Stack Development",
        title: "100 Tokyo",
        summary: "100 Tokyo is a curated cultural guide that showcases the most fascinating and unique aspects of Japan's capital city. Based on research conducted among Tokyo residents, we carefully selected places that inspire us in design, fashion, technology, art, food, architecture and tourism, creating a new way to perceive the city and a vibrant, modern city that is evolving at every moment, creating a Tokyo trip filled with creativity and excitement.",
        parentID: 0,
        url: "http://100tokyo.jp"
    },
    {
        id: 4,
        image: "/image/WorkHistory/Hako.png",
        role: "Full-Stack Development",
        title: "Hako Rental Car",
        summary: "The purpose of developing the Rent Car booking website is to provide users with an easy and efficient platform to browse, compare, and book rental cars online. It simplifies the booking process, offering a wide selection of vehicles, transparent pricing, and secure transactions, all designed to enhance the user's rental experience.",
        parentID: 1,
        url: "https://hakoren.com"
    },
    {
        id: 5,
        image: "/image/WorkHistory/KKHS.png",
        role: "Front-End Development",
        title: "K&K&H&School",
        summary: "The “K & K” in K & K Heart School stands for “Nursing and Care” or “Mind and Body” and symbolizes our commitment to nurturing both knowledge and heart. The site’s goal was to support those studying nursing and care by providing an education that goes beyond the exam and imparting lifelong values ​​and compassion, while sharing the principles of friendship and fostering connection that underpin our educational philosophy. The project used YouTube, Site Kit, RSS, and Open Graph to improve both the user experience and site performance. YouTube integration made it easy to embed videos and expand audience reach, while Site Kit provided insights directly on the website from Google tools like Analytics and Search Console, RSS feeds allowed users to subscribe to content updates to stay informed, and Open Graph optimized the sharing of content on social media to improve visibility and engagement.",
        parentID: 1,
        url: "https://k-k-h-s.com"
    },
    {
        id: 6,
        image: "/image/WorkHistory/Makuhari.png",
        role: "Front-End Development",
        title: "Makuhari Bay Park",
        summary: "Makutahari Bay Park is a hospital that is open on Sundays and has a large children’s area, making it convenient for parents with children to visit. The site has a unique design and attractive structure, and the front-end and back-end aspects are very cleanly developed, making it very user-friendly. The site also integrates Google Maps into the website, which provides several benefits, including accurate and up-to-date geographic data, customization options, and seamless integration with other Google services. The friendly interface, real-time data, and global reach enhance user trust and experience, while improving local search visibility, giving businesses an SEO advantage.",
        parentID: 1,
        url: "https://makuhari-shika.yukenkai.com"
    },
    {
        id: 7,
        image: "/image/WorkHistory/zoff.png",
        role: "Front-End Development",
        title: "Zoff",
        summary: "The Zoff online store is designed to provide a seamless shopping experience featuring easy navigation, secure payment options, and a wide range of products with fast shipping. With a focus on user-friendliness, the site is optimized for both desktop and mobile, allowing customers to shop from anywhere. This project used GSAP, Google Tag Manager, and Nginx to improve performance, analytics, and user engagement. GSAP was used to provide smooth and efficient animations to improve the user experience. Google Tag Manager was used to simplify the management of tracking codes and marketing tags without changing the site code. Nginx was also used to provide high-performance web serving and load balancing to ensure fast and reliable website delivery.",
        parentID: 1,
        url: "https://www.zoff.com"
    },
]