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
    subtitle: 'amalgation of my personal exploration of AI, automation and a professional display of my technical projects and career milestones',
    description: 'Discover thoughts on AI, automation, technical projects and everything I want to share',
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
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'Dribbble',
            href: 'https://dribbble.com/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/gurleenkbatra/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Gurleen Batra',
        text: "I'm **Gurleen Batra**, a computer engineering student at Purdue University, dedicating my life to automation.\nI am committed to not only technically developing the most needed technologies but also addressing the economic, philosophical and sociological aspects of these changes.",
        image: {
            src: hero,
            alt: 'beautiful photo of gurleen batra in a black saree'
        },
        actions: [
            {
                text: 'I say hi back. Get in touch.',
                href: '/contact'
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
