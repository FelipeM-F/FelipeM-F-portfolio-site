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

### Editar Informações e Projetos

Edite `content.js` para atualizar nome, descrição, redes sociais, textos da seção
"Sobre", estatísticas, projetos e habilidades. Não é necessário alterar a estrutura
do `index.html`.

Para adicionar um projeto, copie um dos objetos da lista `projects` em
`content.js` e atualize `name`, `technologies`, `description` e `links`. Para
atualizar uma rede social ou email, altere a entrada correspondente em
`socialLinks`; os links da página inicial, da seção de contato e do rodapé usam
essa mesma lista.

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
- Links diretos de contato por email, GitHub e LinkedIn
- Efeito parallax na hero
- Partículas flutuantes dinâmicas
- Active state na navegação baseado no scroll

## 📧 Contato

A seção de contato apresenta links diretos para email, GitHub e LinkedIn.

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
- GitHub: [@seuGit](https://github.com/seuGit)
- Email: seu-email@example.com
- LinkedIn: [Seu Linkedin](https://www.linkedin.com/in/seulinkedin/)

---

⭐ Se este portfólio foi útil, não esqueça de dar uma estrela!
