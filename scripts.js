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

    generateIdeaBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * codingIdeas.length);
        codingIdea.textContent = codingIdeas[randomIndex];
    });
});
