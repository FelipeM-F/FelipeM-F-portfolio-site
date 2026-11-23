// Edite este arquivo para atualizar as informações exibidas no portfólio.
window.portfolioContent = {
    name: 'Felipe M.',
    role: 'Desenvolvedor Full Stack',
    intro: 'Criando aplicações web modernas e robustas com Java, TypeScript, React e PHP',
    about: [
        'Sou um desenvolvedor full stack apaixonado por criar soluções tecnológicas inovadoras. Com experiência em múltiplas linguagens e frameworks, trabalho para transformar ideias em aplicações funcionais e elegantes.',
        'Minha jornada inclui participação em bootcamps renomados, desenvolvimento de aplicações mobile com Angular/Ionic, e contribuições em projetos open source. Estou sempre aprendendo novas tecnologias e melhores práticas de desenvolvimento.',
        'Quando não estou codificando, posso estar participando de hackathons, estudando design patterns ou explorando novas ferramentas de desenvolvimento.'
    ],
    stats: [
        { value: '20+', label: 'Projetos Completos' },
        { value: '5+', label: 'Linguagens' },
        { value: '10+', label: 'Tecnologias' }
    ],
    socialLinks: [
        {
            
            text: 'github.com/FelipeM-F',
            url: 'https://github.com/FelipeM-F',
            icon: 'fab fa-github'
        },
        {
            
            text: 'LinkedIn Profile',
            url: 'https://www.linkedin.com/in/felipefracasso/',
            icon: 'fab fa-linkedin'
        },
        {
            
            text: 'felipefracasso@example.com',
            url: 'mailto:felipefracasso@example.com',
            homeUrl: '#contact',
            icon: 'fas fa-envelope'
        }
    ],
    contact: {
        heading: 'Vamos conversar!',
        description: 'Sou sempre aberto a novas oportunidades, colaborações e conversas sobre tecnologia. Sinta-se livre para entrar em contato comigo através de qualquer um dos canais abaixo.'
    },
    projects: [
        {
            name: 'App Currículo',
            technologies: ['TypeScript', 'Angular', 'Ionic'],
            description: 'Aplicativo mobile para cadastro e gerenciamento de currículos. Usuários podem cadastrar seus currículos e aprovadores podem revisar candidaturas.',
            links: [
                { label: 'Código', url: 'https://github.com/FelipeM-F/appCurriculo', icon: 'fab fa-github' }
            ]
        },
        {
            name: 'Delta G CRUD',
            technologies: ['React', 'PHP', 'CodeIgniter'],
            description: 'Sistema completo de cadastro de alunos. Frontend moderno com React e backend robusto com PHP CodeIgniter 4 e MySQL.',
            links: [
                { label: 'Código', url: 'https://github.com/FelipeM-F/delta_G_CRUD', icon: 'fab fa-github' }
            ]
        },
        {
            name: 'Spring Boot CRUD',
            technologies: ['Java', 'Spring Boot', 'OAuth2'],
            description: 'Aplicação CRUD com Spring Boot 3.3.2, autenticação OAuth2 via GitHub, Spring Security e integração com MySQL. Documentação com Swagger.',
            links: [
                { label: 'Código', url: 'https://github.com/FelipeM-F/Design-Patterns-com-Java', icon: 'fab fa-github' }
            ]
        },
        {
            name: 'GlascBet Hackathon',
            technologies: ['JavaScript', 'Frontend', 'Hackathon'],
            description: 'Plataforma de apostas online em partidas de League of Legends.',
            links: [
                { label: 'Código', url: 'https://github.com/FelipeM-F/Hackaton', icon: 'fab fa-github' }
            ]
        },
        {
            name: 'Full Stack Open',
            technologies: ['React', 'Node.js', 'MongoDB'],
            description: 'Soluções e exercícios do curso Full Stack Open da Universidade de Helsinki. Aprendizado prático de tecnologias modernas de desenvolvimento.',
            links: [
                { label: 'Código', url: 'https://github.com/FelipeM-F/FullStackOpenHsk', icon: 'fab fa-github' }
            ]
        },
        {
            name: 'Banco Digital OOP',
            technologies: ['Java', 'OOP', 'Patterns'],
            description: 'Lab de criação de um banco digital utilizando Java com foco em Orientação a Objetos e design patterns.',
            links: [
                { label: 'Código', url: 'https://github.com/FelipeM-F/lab-banco-digital-oo', icon: 'fab fa-github' }
            ]
        }
    ],
    skillCategories: [
        {
            name: 'Backend',
            icon: 'fas fa-code',
            skills: ['Java', 'PHP', 'Spring Boot', 'Node.js', 'CodeIgniter']
        },
        {
            name: 'Frontend',
            icon: 'fas fa-palette',
            skills: ['React', 'TypeScript', 'Angular', 'JavaScript', 'HTML/CSS']
        },
        {
            name: 'Mobile',
            icon: 'fas fa-mobile-alt',
            skills: ['Ionic', 'React Native', 'Flutter', 'Android']
        },
        {
            name: 'Banco de Dados',
            icon: 'fas fa-database',
            skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase']
        },
        {
            name: 'Ferramentas',
            icon: 'fas fa-wrench',
            skills: ['Git', 'Docker', 'CI/CD', 'Postman', 'Swagger']
        },
        {
            name: 'Conceitos',
            icon: 'fas fa-lightbulb',
            skills: ['Design Patterns', 'OOP', 'REST API', 'Testes']
        }
    ]
};
