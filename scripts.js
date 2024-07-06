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
        "Develop a budgeting tool"
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
