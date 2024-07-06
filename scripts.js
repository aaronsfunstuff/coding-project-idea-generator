document.addEventListener('DOMContentLoaded', () => {
    const codingIdeas = [
    "Build a to-do list application",
    "Create a weather forecasting website",
    "Develop a personal blog",
    "Make a calculator app",
    "Design a portfolio website",
    "Create a simple chat application",
    "Build a game like Tic-Tac-Toe",
    "Make a notes app",
    "Create a quiz app",
    "Develop a budgeting tool",
    "Create a recipe manager app",
    "Build a workout tracker",
    "Develop a movie recommendation system",
    "Create a task manager with Pomodoro timer",
    "Build a travel itinerary planner",
    "Make a habit tracker",
    "Create a meditation timer",
    "Develop a book reading log",
    "Build a music playlist creator",
    "Make a flashcard learning app",
    "Create a job application tracker",
    "Develop a personal finance tracker",
    "Build a weight loss tracker",
    "Make a sleep tracker",
    "Create a garden planner app",
    "Develop a shopping list app",
    "Build a pet care tracker",
    "Make a home inventory manager",
    "Create a wedding planner app",
    "Develop a language learning app",
    "Build a study planner",
    "Make a gratitude journal",
    "Create a baby milestone tracker",
    "Develop a fitness challenge tracker",
    "Build a car maintenance log",
    "Make a meal planner",
    "Create a travel expense tracker",
    "Develop a volunteer hours tracker",
    "Build a craft project organizer",
    "Make a gift list manager",
    "Create a movie watchlist",
    "Develop a daily affirmation app",
    "Build a blog post idea generator",
    "Make a photography portfolio",
    "Create a music practice log",
    "Develop a cleaning schedule manager",
    "Build a home workout generator",
    "Make a fishing log",
    "Create a hiking trail finder",
    "Develop a meditation guide app",
    "Build a road trip planner",
    "Make a cocktail recipe app",
    "Create a pet adoption finder",
    "Develop a party planner app",
    "Build a skincare routine tracker",
    "Make a birthday reminder app",
    "Create a packing list generator",
    "Develop a daily horoscope app",
    "Build a financial goal tracker",
    "Make a family tree creator",
    "Create a daily motivation app",
    "Develop a random act of kindness generator",
    "Build a charity donation tracker",
    "Make a book recommendation system",
    "Create a weekend project planner",
    "Develop a sustainable living guide",
    "Build a coffee brewing log",
    "Make a cheese tasting journal",
    "Create a wine tasting notes app",
    "Develop a homebrewing tracker",
    "Build a smart home control panel",
    "Make a plant watering reminder",
    "Create a food expiration tracker",
    "Develop a kitchen inventory manager",
    "Build a holiday gift planner",
    "Make a daily challenge app",
    "Create a mental health tracker",
    "Develop a cooking techniques guide",
    "Build a local event finder",
    "Make a movie marathon planner",
    "Create a board game score tracker",
    "Develop a hiking gear checklist",
    "Build a recipe ingredient substitution guide",
    "Make a virtual bookshelf",
    "Create a podcast episode tracker",
    "Develop a carpool organizer",
    "Build a virtual scrapbook",
    "Make a digital detox planner",
    "Create a personal manifesto app",
    "Develop a daily journal",
    "Build a gratitude habit builder",
    "Make an eco-friendly tips app"
];

    const generateIdeaBtn = document.getElementById('generateIdeaBtn');
    const codingIdea = document.getElementById('codingIdea');
    const saveIdeaBtn = document.getElementById('saveIdeaBtn');
    const shareIdeaBtn = document.getElementById('shareIdeaBtn');
    const toggleDarkModeBtn = document.getElementById('toggleDarkModeBtn');
    const savedIdeasList = document.getElementById('savedIdeasList');

    let savedIdeas = JSON.parse(localStorage.getItem('savedIdeas')) || [];

    function displaySavedIdeas() {
        savedIdeasList.innerHTML = '';
        savedIdeas.forEach(idea => {
            const li = document.createElement('li');
            li.textContent = idea;
            li.classList.toggle('dark-mode', document.body.classList.contains('dark-mode'));
            savedIdeasList.appendChild(li);
        });
    }

    generateIdeaBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * codingIdeas.length);
        codingIdea.textContent = codingIdeas[randomIndex];
        saveIdeaBtn.style.display = 'inline-block';
        shareIdeaBtn.style.display = 'inline-block';
    });

    saveIdeaBtn.addEventListener('click', () => {
        const idea = codingIdea.textContent;
        if (idea && !savedIdeas.includes(idea)) {
            savedIdeas.push(idea);
            localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
            displaySavedIdeas();
        }
    });

    shareIdeaBtn.addEventListener('click', () => {
        const idea = codingIdea.textContent;
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(idea)}`;
        window.open(shareUrl, '_blank');
    });

    toggleDarkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.container').classList.toggle('dark-mode');
        document.querySelectorAll('button').forEach(button => button.classList.toggle('dark-mode'));
        document.querySelectorAll('li').forEach(li => li.classList.toggle('dark-mode'));
    });

    displaySavedIdeas();
});
