import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Supriya Dutta",
  initials: "SD",
  url: "https://dillion.io",
  location: "Serampore , West Bengal, India",
  locationLink: "https://www.google.com/maps/place/serampore",
  description:
    "I’m currently studying Data Science with a strong interest in Machine Learning, Artificial Intelligence, and Data Analytics. I enjoy working with data, building models, and discovering insights that can make a real impact.",
  summary:
    "I’m currently pursuing a B.Sc. in Mathematics and an M.Sc. in Applied Mathematics. Alongside my studies, I’m focusing on Data Science to connect theory with real-world applications. My areas of interest include statistics, predictive modeling, deep learning, and data-driven decision making.I’m actively working on projects and expanding my skills to build a career in Data Science and AI.",
  avatarUrl: "/me.png",
  skills: [

    "Python",
    "R",
    "SQL",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "PyTorch",
    "TensorFlow",
    "Matplotlib",
    "Seaborn",
    "Jupyter Notebook",
    "Git & GitHub"


  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "supriyadutta.serampore@gmail.com",
    tel: "+91 9073159725",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SupriyaDutta01",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/supriya-dutta-221bb0353",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Serampore Malina Lahiri Boys' Academy",
      href: "/",
      degree: "Secondary (10th Grade) and Higher Secondary (12th Grade)",
      logoUrl: "/me.png",
      start: "2008",
      end: "2016",
    },
    {
      school: "Serampore College",
      href: "https://seramporecollegeerp.in/",
      degree: "B.Sc in Mathematics",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2020",
    },
    {
      school: "Rajabazar Science College",
      href: "https://www.caluniv.ac.in/campuses/campus-2.html",
      degree: "M.Sc in Applied Mathematics",
      logoUrl: "/ib.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Ramkrishna Mission Vivekananda Educational and Research Institute",
      href: "https://rkmvu.ac.in/",
      degree: "M.Sc in Big Data Analytics",
      logoUrl: "/ib.png",
      start: "2024",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Automated Code Documentation with Multi-Agent Systems",
      href: "",
      dates: "Aug 2025 – Present",
      active: true,
      description:
        "Developed a custom multi-agent LLM system (Reader, Searcher, Writer, Verifier, Orchestrator) with dependency-aware processing to automatically generate comprehensive, accurate code documentation, outperforming baseline methods.",
      technologies: [
        "Python",
        "Scikit-learn"
      ],
      links: [],
    },
    {
      title: "Multi-Agent LLMs for Code Extraction from Research Papers",
      href: "https://github.com/SupriyaDutta01/Multi-Agent-LLMs-for-Code-Extraction-from-Research-Papers",
      dates: "July 2025 – Present",
      active: true,
      description:
        "Implemented a multi-agent system using LLaMA 3 (via Ollama) to automatically convert research papers into Python code by designing custom Planner, Analyzer, and Coder agents.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Ollama"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SupriyaDutta01/Multi-Agent-LLMs-for-Code-Extraction-from-Research-Papers",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Automatic Dialect Recognition from Bengali Speech",
      href: "https://github.com/SupriyaDutta01/Automatic-Dialect-Recognition-from-Bengali-Speech",
      dates: "May 2025 – Present",
      active: true,
      description:
        "Created a Bengali dialect recognition dataset from consent-based phone call recordings, isolated speaker audio, grouped identical responses, extracted features (MFCC, FBANK, wav2vec2), and applied K-means clustering, where wav2vec2 showed the best dialect separation.",
      technologies: [
        "PyTorch",
        "Scikit-learn"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SupriyaDutta01/Automatic-Dialect-Recognition-from-Bengali-Speech",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Conditional Image Synthesis Using Gaussian-GAN",
      href: "https://github.com/SupriyaDutta01/Conditional-Image-Synthesis-Using-Gaussian-GAN",
      dates: "April 2025 – June 2025",
      active: true,
      description:
        "Implemented GauGAN from scratch with SPADE normalization and a variational encoder, trained on Facades and Pascal VOC datasets, using multi-loss optimization (GAN, KL, VGG, feature matching).",
      technologies: [
        "TensorFlow",
        "Keras",
        "Scikit-learn"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SupriyaDutta01/Conditional-Image-Synthesis-Using-Gaussian-GAN",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Automated Bird Species Detection",
      href: "https://github.com/SupriyaDutta01/Automated-Bird-Species-Detection",
      dates: "Mar 2024 – May 2025",
      active: true,
      description:
        "Benchmarked ResNet, EfficientNet, ViT, and Swin Transformer for bird classification on CUB-200-2011 datasets, where Swin Transformer performed best.",
      technologies: [
        "PyTorch",
        "Scikit-learn",
        "OpenCV"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SupriyaDutta01/Automated-Bird-Species-Detection",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Imbalance-Resilient Email Spam Classification Using Machine Learning",
      href: "https://github.com/SupriyaDutta01/Imbalance-Resilient-Email-Spam-Classification-Using-Machine-Learning",
      dates: "Dec 2024 – Mar 2025",
      active: true,
      description:
        "Addressed dataset imbalance with oversampling, class-weighting, and advanced text augmentation (BERT fill-mask, LLaMA paraphrasing, back-translation); improved robustness using Voting and Stacking ensembles.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Streamlit"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SupriyaDutta01/Imbalance-Resilient-Email-Spam-Classification-Using-Machine-Learning",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Music Popularity Prediction using Spotify Track Features",
      href: "https://github.com/SupriyaDutta01/Music-Popularity-Prediction-using-Spotify-Track-Features",
      dates: "Aug 2024 – Nov 2024",
      active: true,
      description:
        "Developed a two-stage hybrid classification–regression model using Spotify track features: classifiers for zero vs. non-zero popularity, followed by regressors for non-zero cases.",
      technologies: [
        "Python",
        "Numpy",
        "Pandas",
        "Scikit-learn"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SupriyaDutta01/Music-Popularity-Prediction-using-Spotify-Track-Features",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],
} as const;
