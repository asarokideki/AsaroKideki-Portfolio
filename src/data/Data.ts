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
    // {
    //     id: 4,
    //     category: "CV"
    // }
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
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
        id: 10,
        title: "React Native",
        image: "/image/skills/React.png"
    },
    {
        id: 11,
        title: "Next.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
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
    },
    {
        id: 15,
        title: "WordPress",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg"
    },
    {
        id: 16,
        title: "Express",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
    },
    {
        id: 17,
        title: "NodeJS",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
    },
]

export const workhistories: WorkHistories[] = [
    {
        id: 0,
        company: "Kita Osaka | Toyonaka",
        term: "May, 2018 - Feb, 2022",
        role: "Junior Full Stack Developer",
    },
    {
        id: 1,
        company: "Senda Japan | Tokyo | Remote",
        term: "Feb, 2022 - Jun, 2025",
        role: "Senior Full Stack Developer",
    }
]

export const projectlists: ProjectList[] = [
    {
        id: 0,
        image: "/image/WorkHistory/Careful mail order.png",
        role: "Front-End Development",
        title: "Careful Mail Order",
        summary: "summary1",
        parentID: 0,
        url: "https://www.teinei.co.jp"
    },
    {
        id: 1,
        image: "/image/WorkHistory/HAKU Takatsuki store.png",
        role: "Front-End Development",
        title: "HAKU Takatsuki store",
        summary: "summary2",
        parentID: 0,
        url: "https://whitening-haku-takatsuki.machi-deza.com"
    },
    {
        id: 2,
        image: "/image/WorkHistory/Vodafone.png",
        role: "Front-End Development",
        title: "Vodafone",
        summary: "summary3",
        parentID: 0,
        url: "https://www.vodafone.com.au"
    },
    {
        id: 3,
        image: "/image/WorkHistory/100 Tokyo.png",
        role: "Full-Stack Development",
        title: "100 Tokyo",
        summary: "summary4",
        parentID: 0,
        url: "http://100tokyo.jp"
    },
    {
        id: 4,
        image: "/image/WorkHistory/Hako.png",
        role: "Full-Stack Development",
        title: "Hako Rental Car",
        summary: "summary5",
        parentID: 1,
        url: "https://hakoren.com"
    },
    {
        id: 5,
        image: "/image/WorkHistory/KKHS.png",
        role: "Front-End Development",
        title: "K&K&H&School",
        summary: "summary6",
        parentID: 1,
        url: "https://k-k-h-s.com"
    },
    {
        id: 6,
        image: "/image/WorkHistory/Makuhari.png",
        role: "Front-End Development",
        title: "Makuhari Bay Park",
        summary: "summary7",
        parentID: 1,
        url: "https://makuhari-shika.yukenkai.com"
    },
    {
        id: 7,
        image: "/image/WorkHistory/zoff.png",
        role: "Front-End Development",
        title: "Zoff",
        summary: "summary8",
        parentID: 1,
        url: "https://www.zoff.com"
    },
]
