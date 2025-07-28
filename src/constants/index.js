import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting visually appealing and responsive user interfaces. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React and Tailwind CSS. I specialize in building interactive and accessible UI components, collaborating with cross-functional teams, and optimizing performance to enhance user experience. My goal is to leverage my frontend expertise to deliver engaging web applications that align with business goals and provide seamless usability.`;

export const ABOUT_TEXT = `I am a frontend developer skilled in HTML, CSS, JavaScript, and React, currently pursuing a degree in Artificial Intelligence and Machine Learning at Rajarajeswari College of Engineering. I am passionate about building responsive and user-friendly web interfaces. Alongside frontend development, I am focusing on backend API development and exploring machine learning. I am also learning SQL for database management, have intermediate knowledge of Python, and am a beginner in Java. My goal is to become a well-rounded full stack developer with a strong grasp of both software development and intelligent systems.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Software intern",
    company: "SKILLQUEST LEARNINGS",
    description: `Currently working on backend development tasks including integrating RESTful APIs, handling data operations using SQL, and building server-side logic with Python.`,
    technologies: ["Tailwind Css", "React.js", "Javascript", "SQL"],
  },
  {
    year: "2024 - 2023",
    role: "Frontend Developer intern",
    company: "Kirabiz Technologies",
    description: `Designed and developed user interfaces for web applications using HTML CSS and JS. Worked closely with backend developers to integrate frontend components with RESTFul APIs. Implemented responsive designs and optimized frontend performance. and also built a basic E-commerce website  using html, css, js`,
    technologies: ["HTML", "CSS", "js", "mySQL"],
  },
  {
    year: "2023 - 2024",
    role: "Machine Learning Intern",
    company: "Prinston Smart Engineers",
    description: "Worked on developing and testing ML models for predictive analytics using real-world datasets. Assisted in data preprocessing, model tuning, and deployment tasks.",
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow", "PostgreSQL"]
  },
  {
    year: "2023 - 2024",
    role: "Finance Intern",
    company: "BB Advisory",
    description: `Worked on stock market analysis, learned investment strategies, intraday trading, and interpreted candlestick patterns and technical indicators for decision-making."`,
    technologies: ["candlestick patterns", "TradingView", "Technical Indicators", "Intraday Trading", "Investment Strategies", "Stock Market Analysis"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A responsive frontend e-commerce web application built with HTML, CSS, and JavaScript. It allows users to browse products, add them to a shopping cart, and view the cart summary. Designed with a clean UI and deployed on GitHub Pages.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://swatikonnuri3.github.io/ecommerce-website-project/index.html",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "Javascript", "React.js"],
    link:"",
  },
  {
    title: "Coffee Shop Sales Analysis",
    image: project2,
    description:
      "Analyzed sales data from a coffee shop using Python to uncover key business insights. Performed data cleaning, feature engineering, and visualizations. Prepared the dataset for future machine learning applications like sales forecasting and customer segmentation using tools like Pandas, Matplotlib, and Seaborn.",
    technologies: ["Python", "pandas", "Seaborn", "Matplotlib"],
    link:"",
  },
  {
    title: "VTU Exam Assistant using Python & NLP",
    image: project4,
    description:
      "This project uses NLP to help VTU students prepare for exams by extracting important questions, summaries, and key concepts from academic PDF notes. Built with Python libraries like PyMuPDF, spaCy, and NLTK, it turns unstructured text into focused, exam-relevant insights.",
    technologies: ["Python", "NLP", "PyMuPDF", "NLTK", "TextRank"],
    link:""
  },
];

export const CONTACT = {
  address: "Mysore Road, Bangalore, Karnataka, India",
  GitHub: "https://github.com/swatikonnuri3",
  email: "swatik@gmail.com",
};
