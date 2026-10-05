/*
 * KNOWLEDGE BASE FOR THE CHAT
 * ---------------------------------------------------------------
 * This is the only file you need to edit to change what the chat says.
 *
 * Each entry has:
 *   keywords : words or phrases that trigger this answer (lowercase)
 *   answer   : the reply. Simple HTML like <a> and <strong> is fine.
 *   sources  : where the answer comes from, shown under the reply
 *   followUps: (optional) suggested next questions
 *
 * To add a topic, copy an entry, change it, and add a comma between entries.
 */

const PROFILE_EMAIL = "Neratldazam@gmail.com";

const SUGGESTED_QUESTIONS = [
    "Introduce yourself",
    "What's your best project?",
    "Do you do data analysis?",
    "What's your tech stack?",
    "Where are you based?",
];

const KNOWLEDGE = [
    {
        id: "intro",
        keywords: ["introduce", "who are you", "about you", "yourself", "tell me about", "hello", "hi", "hey", "summary", "background"],
        answer: "I'm Nerat Dazam, a data scientist based in Edinburgh with an MSc in Data Science from Heriot-Watt. My work covers data analysis and dashboards, machine learning models, and NLP and LLM applications. My main recent project is PidginNuance, a sentiment and emotion analysis system for Nigerian Pidgin that's live on AWS.",
        sources: ["CV", "About"],
        followUps: ["What's your best project?", "Do you do data analysis?"],
    },
    {
        id: "pidgin",
        keywords: ["pidgin", "pidginnuance", "best project", "favourite project", "favorite project", "proudest", "main project", "sentiment", "emotion", "nigerian"],
        answer: "PidginNuance is an end-to-end NLP pipeline for sentiment and emotion analysis in Nigerian Pidgin. It investigates how much sentiment signal you can recover from text alone versus emotional context, and fine-tunes transformer models on a culturally grounded 16-category emotion taxonomy. It's deployed on AWS EC2 with HTTPS. Try it at <a href=\"https://pidginnuance.com\" target=\"_blank\" rel=\"noopener\">pidginnuance.com</a> or read the <a href=\"https://github.com/Elilora/PidginNuance\" target=\"_blank\" rel=\"noopener\">code on GitHub</a>.",
        sources: ["PidginNuance README", "pidginnuance.com"],
        followUps: ["Do you do data analysis?", "What's your tech stack?"],
    },
    {
        id: "projects",
        keywords: ["projects", "portfolio", "work", "built", "show me", "what have you made", "examples"],
        answer: "Highlights: <strong>PidginNuance</strong> (NLP for Nigerian Pidgin, deployed on AWS), an <strong>Agric Yield Prediction Agent</strong> using AI agents, and <strong>YouSum</strong>, a Streamlit summarisation app. Earlier work covers spam detection, lung cancer and stroke classification, market basket analysis and a Spotify Power BI dashboard. All are in the <a href=\"#projects\">Projects section</a>.",
        sources: ["Projects section"],
        followUps: ["Tell me about PidginNuance", "Tell me about the agric agent"],
    },
    {
        id: "analysis",
        keywords: ["analysis", "analyst", "analytics", "data analysis", "dashboard", "dashboards", "power bi", "bi", "visualisation", "visualization", "reporting", "insights", "sql"],
        answer: "Yes. I built an interactive Power BI dashboard on Spotify streaming data covering listening habits, genres and artist trends, and a market basket analysis of grocery transactions that finds which products are bought together and segments customers by purchasing patterns. I work in SQL, Python, R, Excel, Power BI and Tableau.",
        sources: ["Projects section", "CV"],
        followUps: ["What's your tech stack?", "What's your best project?"],
    },
    {
        id: "dissertation",
        keywords: ["dissertation", "thesis", "masters research", "msc research", "hallucination", "rag", "retrieval", "question decomposition"],
        answer: "My MSc dissertation was <em>Evaluating the Impact of Question Decomposition and Web-Based RAG on Reducing Hallucination in LLM QA Systems</em>. It looked at whether breaking questions into sub-questions, and grounding answers in web retrieval, makes LLM answers more reliable. That's also why this chat shows a source under every answer.",
        sources: ["MSc dissertation, Heriot-Watt 2025"],
        followUps: ["Do you have LLM experience?", "Have you published anything?"],
    },
    {
        id: "llm",
        keywords: ["llm", "large language model", "genai", "generative", "langchain", "langgraph", "agents", "agentic", "openai", "gpt", "ai engineer"],
        answer: "Yes. My dissertation evaluated RAG and question decomposition for reducing LLM hallucination, I fine-tuned transformer models for PidginNuance, and I built an agent-based yield prediction assistant.",
        sources: ["CV", "Projects section"],
        followUps: ["What was your dissertation about?", "Tell me about the agric agent"],
    },
    {
        id: "agric",
        keywords: ["agric", "agriculture", "yield", "crop", "farm", "harvest"],
        answer: "The Agric Yield Prediction Agent uses AI agents to predict agricultural yield. The code is on <a href=\"https://github.com/Elilora/agri_yield_assistant\" target=\"_blank\" rel=\"noopener\">GitHub</a>.",
        sources: ["agri_yield_assistant README"],
    },
    {
        id: "publication",
        keywords: ["publication", "published", "paper", "springer", "journal", "research"],
        answer: "Yes. <em>Classification of Lung Cancer Datasets Using Computational Intelligence Techniques</em> was published by Springer in March 2022 (<a href=\"https://doi.org/10.1007/978-981-16-8484-5_44\" target=\"_blank\" rel=\"noopener\">DOI: 10.1007/978-981-16-8484-5_44</a>).",
        sources: ["Springer"],
        followUps: ["What was your dissertation about?"],
    },
    {
        id: "stack",
        keywords: ["stack", "skills", "tools", "languages", "technologies", "tech", "python", "r", "excel", "tableau", "langchain", "langgraph", "hugging face", "pandas", "scikit learn"],
        answer: "Python (pandas, NumPy, scikit-learn, SciPy), SQL, R and Excel day to day. For visualisation: Power BI, Tableau and Streamlit. For machine learning: classification, regression, clustering and ensemble methods with scikit-learn. For generative AI: RAG, agentic workflows and LLM evaluation with LangChain, LangGraph, DeepEval and Hugging Face. For data engineering: ETL pipelines, data validation, MongoDB, AWS (EC2, S3, Lambda) and Git.",
        sources: ["CV", "Skills section"],
        followUps: ["Do you have cloud experience?"],
    },
    {
        id: "cloud",
        keywords: ["cloud", "aws", "deploy", "deployment", "production", "mlops", "ec2", "s3", "lambda", "hosting", "etl", "pipeline", "pipelines"],
        answer: "I deployed PidginNuance on AWS EC2 with HTTPS, and I work with AWS services including EC2, S3 and Lambda. I use Git for version control and build ETL pipelines with automated data validation.",
        sources: ["CV", "pidginnuance.com"],
    },
    {
        id: "education",
        keywords: ["education", "degree", "university", "msc", "bsc", "study", "studied", "qualification", "heriot", "landmark"],
        answer: "MSc Data Science at Heriot-Watt University (2024 to 2025), funded by a competitive PTDF scholarship. BSc Computer Science at Landmark University (2017 to 2021).",
        sources: ["CV"],
        followUps: ["What was your dissertation about?"],
    },
    {
        id: "location",
        keywords: ["where", "location", "based", "live", "relocate", "relocation", "remote", "edinburgh", "scotland", "uk"],
        answer: "I'm based in Edinburgh and open to relocating anywhere in the UK.",
        sources: ["CV"],
        followUps: ["When can you start?", "How can I contact you?"],
    },
    {
        id: "availability",
        keywords: ["start", "available", "availability", "notice", "when can", "hire", "open to work", "looking"],
        answer: "I'm open to data science, data analyst, machine learning and AI engineering roles, and I can start with 4 weeks' notice.",
        sources: ["CV"],
        followUps: ["How can I contact you?"],
    },
    {
        id: "contact",
        keywords: ["contact", "email", "reach", "message", "linkedin", "get in touch", "call", "interview"],
        answer: "Email me at <a href=\"mailto:" + PROFILE_EMAIL + "\">" + PROFILE_EMAIL + "</a> or connect on <a href=\"https://linkedin.com/in/nerat-dazam/\" target=\"_blank\" rel=\"noopener\">LinkedIn</a>.",
        sources: ["Contact section"],
    },
    {
        id: "cv",
        keywords: ["cv", "resume", "résumé", "download"],
        answer: "You can <a href=\"assets/Nerat_Dazam_CV.pdf\" target=\"_blank\" rel=\"noopener\">download my CV here</a>.",
        sources: ["CV"],
    },
    {
        id: "summariser",
        keywords: ["yousum", "summarizer", "summariser", "summarization", "summarisation", "streamlit"],
        answer: "YouSum is a Streamlit app that condenses long documents into short summaries using NLP. <a href=\"https://github.com/Elilora/Summarizer/blob/master/streamlit_app.py\" target=\"_blank\" rel=\"noopener\">See the code</a>.",
        sources: ["Summarizer repo"],
    },
    {
        id: "health",
        keywords: ["lung", "cancer", "stroke", "healthcare", "medical", "health"],
        answer: "I've done two healthcare classification projects: lung cancer detection from CT scans (benign, malignant or normal) and stroke risk prediction from patient data. The lung cancer work also led to my Springer publication.",
        sources: ["Projects section", "Springer"],
    },
    {
        id: "hobbies",
        keywords: ["hobby", "hobbies", "fun", "free time", "outside work", "interests", "gardening"],
        answer: "Outside of work I love gardening and decorating.",
        sources: ["About"],
    },
];

const FALLBACK = {
    answer: "That isn't in what I've been given, so I won't guess. You can ask me about projects, skills, research or availability, or email me directly at <a href=\"mailto:" + PROFILE_EMAIL + "\">" + PROFILE_EMAIL + "</a>.",
    sources: [],
    followUps: ["What's your best project?", "What's your tech stack?"],
};

const GREETING = {
    answer: "Hi, I'm Nerat. Ask me about my projects, skills, research or availability, and I'll answer from my CV and project write-ups.",
    sources: [],
};
