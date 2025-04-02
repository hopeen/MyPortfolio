/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tan Hoe Ping",
  title: "Hi, I'm Hoe Ping",
  subTitle: emoji(
    "An aspiring Full Stack Software Developer 🚀 having 1 year of experience in building extensive Web solutions using JavaScript / Reactjs / Nodejs / React Native and endless cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hopeen",
  linkedin: "https://www.linkedin.com/in/hoepingtan/",
  gmail: "hopeen1610@gmail.com",
  whatsapp: "https://wa.link/zsaqfi",
  instagram: "https://www.instagram.com/hopeen_/",
  // gitlab: "https://gitlab.com/hopeen",
  //facebook: "https://www.facebook.com/hoeping",
  // medium: "https://medium.com/@hopeen",
  // stackoverflow: "https://stackoverflow.com/users/10422806/hopeen",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Tech Stack",
  subTitle: "INSPIRED FULL STACK DEVELOPER WHO WISHES TO MASTER EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop interactive Front-End / User Interfaces for your web applications"),
    emoji("⚡ Progressive Web Applications ( PWA )"),
    emoji("⚡ Integration of third party services such as Firebase & AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Swinburne University of Technology",
      logo: require("./assets/images/swinburne-university-of-technology-logo.png"),
      subHeader: "Bachelor of Computer Science in Collaboration with Swinburne University of Technology",
      duration: "June 2022 - March 2025",
      desc: "3.43 CGPA",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "INTI International College Subang",
      logo: require("./assets/images/intiLogo.png"),
      subHeader: "Diploma in Computer Science",
      duration: "April 2020 - Dec 2021",
      desc: "3.5 CGPA",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development & Implementation",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    },
    {
      Stack: "Database Architecture",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Intern",
      company: "Daythree",
      companylogo: require("./assets/images/daythreeLogo.jpg"),
      date: "January 2025 – April 2025",
      desc: '"Service From the Heart"',
      descBullets: [
        "Collaborate with Web Development Team to design, develop and test extensively software solutions using React framework, PHP, Javascript and MySQL stack.",
        "Developing and refining internal tools to enhance data management and user interactions.",
        "Assisting in optimizing system processes to improve performance and scalability.",
        "Implementing dynamic features to enhance user experience and workflow automation.",
        "Identifying and resolving technical issues in ensuring smooth platform operations.",
        "Collaborating with cross-functional teams to support project deployment and testing."
      ]
    },
    {
      role: "IT Specialist Intern",
      company: "DYODD",
      companylogo: require("./assets/images/dyoddLogo.png"),
      date: "Jan 2022 – April 2022",
      desc: '"Do Your Own Due Diligence"',
      descBullets: [
        "Install and maintain hardware and software components on computer workstations and IT equipment.",
        "Translated product databases onto new platforms that facilitates daily operations.",
        "Developed and maintained scripts to automate business processes.",
        "Demonstrated successful problem-solving expertise to quickly resolve software issues and ensure operational efficiency.",
        "Provided customer support and resolved issues regarding customer concerns in a timely matter.",
        "Collaborated closely with software development teams to conceptualize and redesign the landing pages of e-commerce website."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};


const bigProjects = {
  title: "Projects",
  subtitle: "EMPLOYERS PROJECTS AND COMPANIES THAT I CONTRIBUTED TO THEIR SYSTEM SOLUTIONS",
  projects: [
    {
      image: require("./assets/images/dhlLogo.webp"),
      projectName: "AI Chatbot Assistant for Project Hardware Cost Estimation | DHL IT Services (ITS)",
      projectSubtitle: "April - November 2024",
      projectDesc: [
        "Developed an interactive AI chatbot assistant interface using React framework, Flask and Python stack.",
        "Designed and deployed secure database structures using Firebase, ensuring data integrity and scalability.",
        "Integrated AI-powered responses by implementing and training OpenAI (GPT 4o-mini) model with LlamaIndex for analyzing hardware data.",
        "Ensured responses are fast and accurate, and the ability to provide intelligent recommendations based on specific user needs and contexts.",
        "Collaborated with the DHL ITS team in a 2-week Agile sprint cycle, iterating on product solutions for enhanced performance.",
        "Prepared comprehensive documentations, user guides and presentations to align stakeholders and support smooth implementation."
      ],
      footerLink: [
        {
          name: "Video Demonstration",
          url: "https://drive.google.com/file/d/1TN5lVzQGc7CLeu0PNpfxVHjUFlStidBQ/view?usp=sharing"
        },
        {
          name: "Final Video Presentation",
          url: "https://drive.google.com/file/d/1Qbnn1i8_zKlFsh2PHdkLIMjRjVR88-cQ/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  subtitle:
    "Achievements, Certifications and Awards!",

  achievementsCards: [
    {
      title: "Cisco Python Essentials",
      subtitle:
        "Foundational Python programming skills covering core concepts such like data types, control structures, functions, and object-oriented programming.",
      image: require("./assets/images/cisco_logo.jpeg"),
      imageAlt: "Cisco Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/9975ef1e-741c-4c85-a364-41c7770801a6/public_url"
        }
      ]
    },
    {
      title: "Cisco Introduction to Cybersecurity",
      subtitle:
        "Introductory knowledge of cybersecurity, including the global implications of cyber threats on industries, and why cybersecurity is a growing profession.",
      image: require("./assets/images/cisco_logo.jpeg"),
      imageAlt: "Cisco Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/60c05aa6-4257-45dc-b3b0-d6b35753be86/public_url"
        }
      ]
    },
    {
      title: "Accenture Digital Skills: Artificial Intelligence",
      subtitle:
        "Enhanced Understanding and Application of AI in the industry. Produce action plan to hone and adapt skills for the future.",
      image: require("./assets/images/accenture_logo.png"),
      imageAlt: "Accenture Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.futurelearn.com/certificates/2ep6tzo"
        }
      ]
    },
    {
      title: "Accenture Digital Skills: User Experience",
      subtitle:
        "Fundamentals of User Experience (UX) design and its impact on business success to design and create intuitive and user-centered digital experiences.",
      image: require("./assets/images/accenture_logo.png"),
      imageAlt: "Accenture Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.futurelearn.com/certificates/3yo5r0o"
        }
      ]
    },
    {
      title: "HackerRank SQL Basic",
      subtitle: "Completed Certifcation from HackerRank for SQL Fundamentals.",
      image: require("./assets/images/hackerrank_logo.jpeg"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {
          name: "Ceritification",
          url: "https://www.hackerrank.com/certificates/44980893390d"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to teach and share with others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a project in mind? My Inbox is open for all!",
  number: "+60-187863911",
  email_address: "hopeen1610@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
