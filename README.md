# 🌟 Felipe M. - Portfólio de Desenvolvedor

Um portfólio moderno e responsivo que showcasa seus projetos, habilidades e experiência como desenvolvedor full stack.

## ✨ Características

- ✅ Design moderno com gradientes e animações suaves
- ✅ Completamente responsivo (mobile, tablet, desktop)
- ✅ Menu de navegação interativo
- ✅ Seção de projetos em destaque com links para repositórios
- ✅ Catálogo de habilidades técnicas organizado por categoria
- ✅ Formulário de contato funcional
- ✅ Animações de scroll reveal
- ✅ Efeitos parallax na hero section
- ✅ Dark mode elegante com tema cyan/purple

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos responsivos com gradientes e animations
- **JavaScript Vanilla** - Interações e animações dinâmicas
- **Font Awesome** - Ícones
- **Responsividade** - Mobile-first approach

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html      # Arquivo HTML principal
├── styles.css      # Estilos CSS
├── script.js       # Interações JavaScript
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### 1. Localmente

```bash
# Clone o repositório
git clone https://github.com/FelipeM-F/FelipeM-F.git

# Navegue até a branch portfolio-site
git checkout portfolio-site

# Abra o arquivo index.html no seu navegador
# Você pode usar a extensão Live Server do VS Code
# ou simplesmente dar um duplo clique no arquivo
```

### 2. GitHub Pages

O portfólio está pronto para ser deployado no GitHub Pages:

1. Vá para as configurações do seu repositório
2. Navegue até **Pages** no menu lateral
3. Em **Source**, selecione a branch `portfolio-site`
4. Seu portfólio estará disponível em: `https://FelipeM-F.github.io`

### 3. Vercel

Você também pode fazer deploy no Vercel:

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório GitHub
4. Selecione a branch `portfolio-site`
5. Clique em "Deploy"

### 4. Netlify

Ou usando Netlify:

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "Add new site" → "Import an existing project"
3. Conecte seu GitHub
4. Selecione o repositório e a branch `portfolio-site`
5. Clique em "Deploy site"

## 📝 Personalização

### Editar Informações Pessoais

Abra `index.html` e procure por:

```html
<!-- Hero Section -->
<h1 class="hero-title">Felipe M.</h1>
<p class="hero-subtitle">Desenvolvedor Full Stack</p>

<!-- Social Links -->
<a href="https://github.com/FelipeM-F" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/seu-perfil" target="_blank">LinkedIn</a>
```

### Atualizar Email de Contato

Procure por `mailto:seu-email@example.com` e substitua pelo seu email.

### Adicionar/Remover Projetos

Na seção de **Projects**, adicione um novo card:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Nome do Projeto</h3>
        <div class="project-tags">
            <span class="tag">Tecnologia 1</span>
            <span class="tag">Tecnologia 2</span>
        </div>
    </div>
    <p class="project-description">
        Descrição do projeto...
    </p>
    <div class="project-links">
        <a href="seu-link" target="_blank">
            <i class="fab fa-github"></i> Código
        </a>
    </div>
</div>
```

### Mudar Cores

No arquivo `styles.css`, edite as variáveis de cor no `:root`:

```css
:root {
    --primary-color: #00d4ff;      /* Cyan */
    --secondary-color: #0a0e27;    /* Dark Blue */
    --accent-color: #7c3aed;       /* Purple */
    /* ... outras cores ... */
}
```

## 🎨 Paleta de Cores

- **Primária**: `#00d4ff` (Cyan)
- **Secundária**: `#0a0e27` (Dark Blue)
- **Acentuada**: `#7c3aed` (Purple)
- **Texto Claro**: `#e0e0e0`
- **Background**: Gradiente escuro

## 📱 Responsividade

O site é totalmente responsivo com breakpoints em:
- **Desktop**: 1200px
- **Tablet**: 768px
- **Mobile**: 480px

## 🔧 Recursos JavaScript

- Menu hambúrguer para mobile
- Navegação suave (smooth scroll)
- Intersection Observer para animações ao scroll
- Formulário de contato com validação
- Efeito parallax na hero
- Partículas flutuantes dinâmicas
- Active state na navegação baseado no scroll

## 📧 Formulário de Contato

O formulário é apenas um frontend. Para funcionalidade completa, você pode integrar com:
- **Formspree** - https://formspree.io
- **EmailJS** - https://www.emailjs.com
- **Backend próprio**

Exemplo com Formspree:

```html
<form action="https://formspree.io/f/seu-id" method="POST">
    <!-- campos do formulário -->
</form>
```

## 🔍 SEO

O site inclui meta tags para melhor SEO:
- Meta description
- Meta viewport para responsividade
- Semântica HTML5

Para melhorar ainda mais:
1. Adicione um `sitemap.xml`
2. Configure o `robots.txt`
3. Adicione schema.org estruturado

## 🌐 Hosting Gratuito

Opções para fazer deploy gratuitamente:
- **GitHub Pages** - Grátis com repositório público
- **Netlify** - Grátis com CI/CD
- **Vercel** - Grátis com deployments automáticos
- **Firebase Hosting** - Grátis com 5GB de storage

## 📊 Próximos Passos

- [ ] Integrar backend para formulário de contato
- [ ] Adicionar dark/light mode toggle
- [ ] Implementar blog ou seção de artigos
- [ ] Adicionar certificados e reconhecimentos
- [ ] Implementar busca de projetos
- [ ] Adicionar analytics (Google Analytics)
- [ ] Criar versão em inglês

## 🤝 Contribuições

Sinta-se livre para fazer um fork e criar pull requests com melhorias!

## 📄 Licença

Este projeto está sob a licença MIT. Veja LICENSE para mais detalhes.

## 👨‍💻 Autor

**Felipe M.**
- GitHub: [@FelipeM-F](https://github.com/FelipeM-F)
- Email: seu-email@example.com
- LinkedIn: [Felipe Fracasso](https://www.linkedin.com/in/felipefracasso/)

---

⭐ Se este portfólio foi útil, não esqueça de dar uma estrela!
