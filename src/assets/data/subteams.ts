import { SubteamInfo } from 'src/app/pages/index/subteam/subteam.component';

export const SUBTEAMS: SubteamInfo[] = [
  {
    subteam: 'Science',
    index: 0,
    topics: [
      {
        name: 'Physics',
        description:
          'Learn physics concepts easily with our easy to use and effective kits',
        icon: 'fas fa-cogs',
      },
      {
        name: 'Chemistry',
        description:
          'Get tutored or help others with various chemistry concepts',
        icon: 'fas fa-flask',
      },
      {
        name: 'Biology',
        description:
          'Work with other students on projects or research programs based on biology concepts',
        icon: 'fas fa-heartbeat',
      },
    ],
  },
  {
    subteam: 'Technology',
    index: 1,
    topics: [
      {
        name: 'Programming',
        description:
          'Learn how to code and sharpen your programming skills with our various workshops and activities',
        icon: 'fas fa-code',
      },
      {
        name: 'Projects',
        description:
          'Showcase and prove your skills with guided projects that are bound to impress anyone',
        icon: 'fab fa-codepen',
      },
      {
        name: 'Robotics',
        description:
          'Create and build robots with our easy to use kits and activities.',
        icon: 'fas fa-robot',
      },
    ],
  },
  {
    subteam: 'Engineering',
    index: 2,
    topics: [
      {
        name: 'Engineering Design',
        description:
          'Design objects, prototyps, robots, and much more using computer aided design software',
        icon: 'fas fa-desktop',
      },
      {
        name: 'Projects',
        description:
          'Showcase and prove your skills with guided research projects that are bound to impress anyone',
        icon: 'fas fa-project-diagram',
      },
      {
        name: 'Make',
        description:
          'Learn to turn your designs into actual objects through 3D printing or machining',
        icon: 'fas fa-hammer',
      },
    ],
  },
  {
    subteam: 'Art',
    index: 3,
    topics: [
      {
        name: 'Projects',
        description: 'Expand your creativity with our guided projects',
        icon: 'fas fa-folder-open',
      },
      {
        name: 'Workshops',
        description:
          'Learn new art styles and techniques by workshops hosted by our talented team',
        icon: 'fas fa-paint-brush',
      },
      {
        name: 'Expertise',
        description:
          "Need help with a project you're working on? Need expertise on a topic? Get help, or help others, with anything related to art",
        icon: 'fas fa-info',
      },
    ],
  },
  {
    subteam: 'Math',
    index: 4,
    topics: [
      {
        name: 'All Levels',
        description:
          'Right from elementary school math to advanced calculus, learn and get help with any topic you want',
        icon: 'fas fa-users',
      },
      {
        name: 'Projects',
        description:
          'Showcase and prove your skills with guided research projects that are bound to impress anyone.',
        icon: 'fas fa-tasks',
      },
      {
        name: 'Tutoring',
        description:
          'Need help with a math concept? Need expertise on a topic? Get help, or help others, with anything related to math',
        icon: 'fas fa-question',
      },
    ],
  },
];
