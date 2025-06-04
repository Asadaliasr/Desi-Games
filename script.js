// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Game Play Buttons
const playButtons = document.querySelectorAll('.play-btn');
playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const game = button.closest('.game-card').querySelector('h3').textContent;
        const mode = button.classList.contains('ai') ? 'AI Mode' : 'Multiplayer Mode';
        alert(`Starting ${game} in ${mode}. (Demo: Would launch the game in real implementation)`);
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        }
    });
});
