function languageSwitch(){
const translations = {
    en: {
        name: "Jeevan NS",
        role: "Full-Stack Developer | MERN Enthusiast | Competitive Programmer",
        viewProjects: "View Projects",
        downloadResume: "Download Resume",
        projectsTitle: "My Projects"
    },

    hi: {
        name: "जीवन एनएस",
        role: "फुल-स्टैक डेवलपर | MERN उत्साही | प्रतिस्पर्धी प्रोग्रामर",
        viewProjects: "प्रोजेक्ट देखें",
        downloadResume: "रिज़्यूमे डाउनलोड करें",
        projectsTitle: "मेरे प्रोजेक्ट"
    },

    kn: {
        name: "ಜೀವನ್ ಎನ್ ಎಸ್",
        role: "ಫುಲ್-ಸ್ಟ್ಯಾಕ್ ಡೆವಲಪರ್ | MERN ಆಸಕ್ತಿ | ಸ್ಪರ್ಧಾತ್ಮಕ ಪ್ರೋಗ್ರಾಮರ್",
        viewProjects: "ಪ್ರಾಜೆಕ್ಟ್‌ಗಳನ್ನು ನೋಡಿ",
        downloadResume: "ರಿಜ್ಯೂಮ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
        projectsTitle: "ನನ್ನ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳು"
    }
};

const switcher = document.getElementById("language-switch");

switcher.addEventListener("change", () => {
    const lang = switcher.value;
    changeLanguage(lang);
    localStorage.setItem("lang", lang);
});

function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-key]");

    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = translations[lang][key];
    });
}
}