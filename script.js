// Render the editable content from content.js into the page.
const content = window.portfolioContent;
if (!content) {
    throw new Error('Não foi possível carregar o conteúdo do portfólio (content.js).');
}

function createElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
}

function createContentLink(link, className) {
    const anchor = createElement('a', className);
    const url = link.homeUrl || link.url;
    anchor.href = url;
    if (url.startsWith('http')) {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
    }

    if (link.icon) {
        anchor.appendChild(createElement('i', link.icon));
    }
    if (link.label) {
        anchor.appendChild(document.createTextNode(` ${link.label}`));
    }
    return anchor;
}

function renderPortfolioContent() {
    document.title = `${content.name} - Portfólio de Projetos`;
    document.querySelector('meta[name="description"]').content = content.intro;
    document.getElementById('nav-logo-name').textContent = content.name;
    document.getElementById('profile-name').textContent = content.name;
    document.getElementById('profile-role').textContent = content.role;
    document.getElementById('profile-intro').textContent = content.intro;
    document.getElementById('contact-heading').textContent = content.contact.heading;
    document.getElementById('contact-description').textContent = content.contact.description;

    const aboutText = document.getElementById('about-text');
    content.about.forEach(paragraph => {
        aboutText.appendChild(createElement('p', '', paragraph));
    });

    const stats = document.getElementById('about-stats');
    content.stats.forEach(stat => {
        const item = createElement('div', 'stat');
        item.appendChild(createElement('h3', '', stat.value));
        item.appendChild(createElement('p', '', stat.label));
        stats.appendChild(item);
    });

    const socialLinks = document.getElementById('social-links');
    content.socialLinks.forEach(link => {
        const anchor = createContentLink(link);
        anchor.setAttribute('aria-label', link.label);
        socialLinks.appendChild(anchor);
    });

    const projects = document.getElementById('projects-grid');
    content.projects.forEach(project => {
        const card = createElement('div', 'project-card');
        const header = createElement('div', 'project-header');
        const tags = createElement('div', 'project-tags');
        header.appendChild(createElement('h3', '', project.name));
        project.technologies.forEach(technology => {
            tags.appendChild(createElement('span', 'tag', technology));
        });
        header.appendChild(tags);
        card.appendChild(header);
        card.appendChild(createElement('p', 'project-description', project.description));

        const links = createElement('div', 'project-links');
        project.links.forEach(link => {
            links.appendChild(createContentLink(link));
        });
        card.appendChild(links);
        projects.appendChild(card);
    });

    const skills = document.getElementById('skills-grid');
    content.skillCategories.forEach(category => {
        const item = createElement('div', 'skill-category');
        const heading = createElement('h3');
        heading.appendChild(createElement('i', category.icon));
        heading.appendChild(document.createTextNode(` ${category.name}`));
        item.appendChild(heading);

        const skillItems = createElement('div', 'skill-items');
        category.skills.forEach(skill => {
            skillItems.appendChild(createElement('div', 'skill-item', skill));
        });
        item.appendChild(skillItems);
        skills.appendChild(item);
    });

    const contactMethods = document.getElementById('contact-methods');
    content.socialLinks.forEach(link => {
        const method = createElement('div', 'contact-method');
        method.appendChild(createElement('i', link.icon));

        const details = createElement('div');
        details.appendChild(createElement('h4', '', link.label));
        const anchor = createElement('a', '', link.text);
        anchor.href = link.url;
        if (link.url.startsWith('http')) {
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';
        }
        details.appendChild(anchor);
        method.appendChild(details);
        contactMethods.appendChild(method);
    });

    const footerLinks = document.getElementById('footer-links');
    content.socialLinks.forEach(link => {
        const anchor = createElement('a', '', link.label);
        anchor.href = link.url;
        if (link.url.startsWith('http')) {
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';
        }
        footerLinks.appendChild(anchor);
    });
    document.getElementById('footer-copyright').textContent =
        `© ${new Date().getFullYear()} ${content.name} | Todos os direitos reservados.`;
}

renderPortfolioContent();

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 20, 25, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(15, 20, 25, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards and skill categories
document.querySelectorAll('.project-card, .skill-category, .stat').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Parallax effect on hero section
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (hero) {
        hero.style.backgroundPosition = `0px ${scrollPosition * 0.5}px`;
    }
});

// Add scroll reveal animation
const revealElements = document.querySelectorAll('section h2');
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});

// Typing effect for subtitle (optional)
function typeEffect(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Enhanced project card interactivity
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#00d4ff';
            link.style.textDecoration = 'underline';
        } else {
            link.style.color = '';
            link.style.textDecoration = '';
        }
    });
});

// Create floating particles effect (optional)
function createParticles() {
    const container = document.querySelector('.hero');
    if (!container) return;
    
    for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 300 + 100 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `radial-gradient(circle, rgba(${Math.random() * 255}, ${Math.random() * 100}, 255, 0.1), transparent)`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.filter = 'blur(40px)';
        particle.style.animation = `float ${20 + Math.random() * 10}s ease-in-out infinite`;
        particle.style.zIndex = '-1';
        
        container.appendChild(particle);
    }
}

// Add float animation to styles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) translateX(0px);
        }
        25% {
            transform: translateY(-20px) translateX(20px);
        }
        50% {
            transform: translateY(-40px) translateX(-20px);
        }
        75% {
            transform: translateY(-20px) translateX(20px);
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

// Smooth loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Add accessibility features
const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            link.click();
        }
    });
});

// Log portfolio load
console.log('%c🚀 Welcome to my portfolio!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cFeel free to explore my projects and get in touch!', 'color: #7c3aed; font-size: 14px;');
