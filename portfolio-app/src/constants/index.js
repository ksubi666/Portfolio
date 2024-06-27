import { Mail, BookCopy, Phone } from 'lucide-react';
import upwork from '../assets/upwork.png';
// Icons title
import jsIcon from '../assets/icons/javscript.png';
import tsIcon from '../assets/icons/typescript.png';
import reactIcon from '../assets/icons/react.png';
import nextIcon from '../assets/icons/nextjs.png';
import nodeIcon from '../assets/icons/nodejs.png';
import exIcon from '../assets/icons/express.png';
import nestIcon from '../assets/icons/nest.png';
import socketIcon from '../assets/icons/socket.png';
import postIcon from '../assets/icons/postgresql.png';
import mongoIcon from '../assets/icons/mongodb.png';
import sassIcon from '../assets/icons/sass.png';
import tailwindIcon from '../assets/icons/tailwindcss.png';
import figmaIcon from '../assets/icons/figma.png';
import cypressIcon from '../assets/icons/cypress.png';
import storyIcon from '../assets/icons/storybook.png';
import gitIcon from '../assets/icons/git.png';
// Menu
export const menuItems = ['About', 'Work', 'Testimonials', 'Contact'];
// aboutData
export const aboutText = [
  "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me",
  "I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more",
  'When Im not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.',
  'I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.',
  'Finally, some quick bits about me.',
];
// exprierence

export const CardItems = [
  {
    icon: upwork,
    present: 'Nov 2021 - Present',
    title: 'Sr. Frontend Developer',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Ut pretium arcu et massa semper, id fringilla leo semper.',
      'Sed quis justo ac magna.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    icon: upwork,
    present: 'Jul 2017 - Oct 2021',
    title: 'Sr. Frontend Developer',
    text: [
      'Sed quis justo ac magna.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed quis justo ac magna.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ],
  },
  {
    icon: upwork,
    present: 'Dec 2015 - May 2017',
    title: 'Full Stack Developer',
    text: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
  },
];
// icon title
export const iconsT = [
  { icons: jsIcon, title: 'Javascript' },
  { icons: tsIcon, title: 'Typescript' },
  { icons: reactIcon, title: 'React' },
  { icons: nextIcon, title: 'Next.js' },
  { icons: nodeIcon, title: 'Node.js' },
  { icons: exIcon, title: 'Express.js' },
  { icons: nestIcon, title: 'Nest.js' },
  { icons: socketIcon, title: 'Socket.io' },
  { icons: postIcon, title: 'PostgreSQL' },
  { icons: mongoIcon, title: 'MongoDB' },
  { icons: sassIcon, title: 'Sass/Scss' },
  { icons: tailwindIcon, title: 'Tailwindcss' },
  { icons: figmaIcon, title: 'Figma' },
  { icons: cypressIcon, title: 'Cypress' },
  { icons: storyIcon, title: 'Storybook' },
  { icons: gitIcon, title: 'Git' },
];
export const buttons = [
  'React',
  'Next.js',
  'Typescript',
  'Nest.js',
  'PostgreSQL',
  'Tailwindcss',
  'Figma',
  'Cypress',
  'Storybook',
  'Git',
];
export const footersvg = (
  <svg
    width="37"
    height="36"
    viewBox="0 0 37 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.5 14H16.5C15.3954 14 14.5 14.8954 14.5 16V26C14.5 27.1046 15.3954 28 16.5 28H26.5C27.6046 28 28.5 27.1046 28.5 26V16C28.5 14.8954 27.6046 14 26.5 14Z"
      stroke="#4B5563"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5 22C9.4 22 8.5 21.1 8.5 20V10C8.5 8.9 9.4 8 10.5 8H20.5C21.6 8 22.5 8.9 22.5 10"
      stroke="#4B5563"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export const contact = [
  { icon: <Mail />, email: 'reachsagarshah@gmail.com', boxIcon: <BookCopy /> },
  { icon: <Phone />, email: '+91 8980500565', boxIcon: <BookCopy /> },
];
