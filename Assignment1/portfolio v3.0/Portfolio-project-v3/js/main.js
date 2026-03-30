document.addEventListener("DOMContentLoaded", function () {
    initScrollProgress();
    initScrollSpy();
    initBackToTop();
    initProjectSearch();
    initCategoryFilter();
    initProjectSort();
    initTypingEffect();
    initSkillsFilter();
    // initFormAutoSave();
    initRecentlyViewed();
    initThemePersistence(); 
    renderSkill();


    renderProjects(projects);

});