import avatar from '../assets/images/avatar.jpeg';
import hero from '../assets/images/hero.jpeg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://gurleenbatra.netlify.app',
    avatar: {
        src: avatar,
        alt: 'Gurleen Batra'
    },
    title: 'Hey welcome to my home on the internet (besides reddit ofc)',
    subtitle: 'Computer Engineering @ Purdue · Embedded Systems · Robotics · PCB Design · ECE Merit Scholar',
    description: 'Gurleen Batra',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Thoughts',
            href: '/blog'
        },
        {
            text: 'Women in STEM',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Projects',
            href: '/projects'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/gurleenbatra/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/gurleenkbatra/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/'
        }
    ],
    hero: {
        title: 'Gurleen Batra',
        text: "I'm **Gurleen Batra**, a Computer Engineering student at Purdue University specializing in **robotics, embedded systems, and PCB design**.\n\nI build hardware that moves and firmware that runs — from autonomous robotic hands and production GNSS firmware to custom multi-layer PCBs and Hardware-in-the-Loop test benches. Currently: Electronics Lead @ Autonomous Robotics Club · Undergraduate Researcher @ SoCET · ECE Merit Scholar.",
        image: {
            src: hero,
            alt: 'beautiful photo of gurleen batra in a black saree'
        },
        actions: [
            {
                text: 'Get in touch →',
                href: '/contact'
            },
            {
                text: 'View Projects →',
                href: '/projects'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'for gurleens thoughts.',
        text: 'one update per week. All the latest posts directly in your inbox.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
