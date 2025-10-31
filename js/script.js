// Lista de habilidades
const skills = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React',
    'Node.js',
    'Git',
    'SQL',
    'Python',
    'Metodologias Ágeis'
];

// Função para adicionar habilidades dinamicamente
function addSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.textContent = skill;
        skillsContainer.appendChild(skillItem);
    });
}

// Função para adicionar animação ao scroll
function addScrollAnimation() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.5s ease-in-out';
        observer.observe(section);
    });
}

// Inicializar quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    addSkills();
    addScrollAnimation();
});

// Adicionar efeito de hover nos links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        e.target.style.transition = 'color 0.3s ease';
    });
});