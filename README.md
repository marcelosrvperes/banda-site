# 🎵 SOUNDWAVE - Site da Banda

Site moderno, profissional e responsivo para a banda musical Soundwave, criado com HTML5, CSS3 e JavaScript puro.

## 📋 Conteúdo

- ✅ Homepage impactante com hero section
- ✅ Página de integrantes com bio
- ✅ Agenda de shows com datas e locais
- ✅ Galeria com filtros de fotos e vídeos
- ✅ Página de contato com formulário
- ✅ Design moderno com glassmorphism
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Menu hamburger para dispositivos móveis
- ✅ Animações suaves ao rolar
- ✅ Modo escuro elegante

## 🚀 Como Usar

### 1. Abrir no VS Code

```bash
# Clone ou baixe o repositório
# Abra a pasta no VS Code
code banda-site/
```

### 2. Instalar Live Server

- Abra VS Code
- Vá para Extensions (Ctrl+Shift+X)
- Pesquise por "Live Server"
- Instale a extensão da Ritchie Lui

### 3. Executar o Site

- Clique com botão direito no `index.html`
- Selecione "Open with Live Server"
- O navegador abrirá automaticamente em `http://localhost:5500`

## 📁 Estrutura do Projeto

```
banda-site/
├── index.html                 # Homepage
├── integrantes.html          # Página dos integrantes
├── agenda.html               # Agenda de shows
├── galeria.html              # Galeria de fotos e vídeos
├── contato.html              # Página de contato
├── css/
│   └── style.css            # Estilos CSS (responsivo e moderno)
├── js/
│   └── script.js            # Scripts JavaScript
├── imagens/
│   ├── banda/               # Fotos da banda
│   ├── shows/               # Fotos de shows
│   └── integrantes/         # Fotos dos integrantes
│       ├── vocal/
│       ├── guitarra/
│       ├── baixo/
│       ├── bateria/
│       └── gaita/
├── videos/
│   ├── clipes/              # Clipes oficiais
│   └── bastidores/          # Vídeos nos bastidores
└── README.md
```

## 🎨 Design e Visual

- **Tema**: Modo escuro elegante
- **Cores Principal**: Roxo, Rosa e Gradientes
- **Fonte**: Segoe UI e Georgia
- **Efeitos**: Glassmorphism, animações suaves, sombras
- **Responsividade**: Mobile-first com breakpoints em 768px e 480px

## 📝 Como Editar Conteúdos

### Mudar Nome da Banda

Abra qualquer arquivo HTML e substitua:
- `SOUNDWAVE` pelo nome da sua banda
- `♪` pelo símbolo/emoji desejado

### Editar Integrantes

No arquivo `integrantes.html`:

```html
<h3 class="member-name">NOME DO INTEGRANTE</h3>
<p class="member-instrument">INSTRUMENTO</p>
<p class="member-bio">BIO DO INTEGRANTE</p>
```

### Adicionar Shows

No arquivo `agenda.html`, copie um card de show e modifique:

```html
<div class="event-date">
  <div class="day">DD</div>
  <div class="month">MÊS</div>
</div>
<div class="event-info">
  <h3>NOME DO FESTIVAL</h3>
  <p><strong>Local:</strong> ENDEREÇO</p>
  <p><strong>Horário:</strong> HORÁRIO</p>
</div>
```

### Editar Contatos

No arquivo `contato.html`, substitua:

```html
<a href="mailto:contato@soundwave.com">contato@soundwave.com</a>
<a href="https://wa.me/5511999999999">(11) 9 9999-9999</a>
```

Por seus dados reais.

## 🖼️ Como Adicionar Imagens

### 1. Salve as Fotos

- Coloque fotos dos integrantes em: `imagens/integrantes/[instrumento]/`
- Coloque fotos da banda em: `imagens/banda/`
- Coloque fotos de shows em: `imagens/shows/`

### 2. Adicione no HTML

Nos arquivos HTML, procure pelos emojis (📷, 🎤, etc.) que servem como placeholders e adicione:

```html
<img src="imagens/integrantes/vocal/nome.jpg" alt="Nome do integrante">
```

### 3. Otimize as Imagens

Use ferramentas como:
- [TinyPNG](https://tinypng.com/) - Comprime sem perder qualidade
- [ImageOptim](https://imageoptim.com/) - Otimiza automaticamente

## 🎥 Como Adicionar Vídeos

### Embedar do YouTube

```html
<iframe width="100%" height="600" src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" allowfullscreen></iframe>
```

### Embedar do Spotify

```html
<iframe src="https://open.spotify.com/embed/track/TRACK_ID" 
  width="100%" height="380" frameborder="0" allowtransparency="true" 
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
</iframe>
```

## 📱 Recursos Mobile

- ✅ Menu hamburger automático em telas pequenas
- ✅ Botões e cards otimizados para touch
- ✅ Texto responsivo com `clamp()`
- ✅ Grid flexível que se adapta
- ✅ Imagens que escalam automaticamente

## 🌐 Publicar no GitHub Pages

### 1. Criar Repositório

```bash
# No GitHub, crie um novo repositório chamado:
# username.github.io
# (substitua username pelo seu username do GitHub)
```

### 2. Clonar e Colocar Arquivos

```bash
git clone https://github.com/username/username.github.io.git
# Copie os arquivos da pasta banda-site
# para o repositório clonado
```

### 3. Fazer Push

```bash
cd username.github.io
git add .
git commit -m "Primeiro commit - Site Soundwave"
git push origin main
```

### 4. Ativar GitHub Pages

- Vá para Settings do repositório
- Role até "GitHub Pages"
- Selecione "main" como branch
- A URL será: `https://username.github.io`

## 🛠️ Funcionalidades JavaScript

- ✅ Menu mobile responsivo
- ✅ Efeito scroll no header
- ✅ Animações ao rolar a página
- ✅ Lightbox para galeria
- ✅ Botão "voltar ao topo"
- ✅ Validação de formulário
- ✅ Lazy loading de imagens
- ✅ Contador de visitantes

## 💾 Arquivos CSS

O `style.css` está organizado em seções:

- Variáveis CSS
- Header e navegação
- Seções principais
- Cards e componentes
- Seções específicas
- Animações
- Responsividade
- Utilitários

## 📊 SEO Básico

- ✅ Meta tags descritivas
- ✅ Títulos e descriptions em cada página
- ✅ Estrutura HTML semântica
- ✅ Favicon customizado
- ✅ Links internos bem estruturados

## 🔐 Dicas de Segurança

- Não compartilhe dados sensíveis no GitHub
- Use variáveis de ambiente para dados confidenciais
- Valide todos os formulários no frontend e backend
- Use HTTPS quando possível

## 🐛 Troubleshooting

### O site não carrega o CSS ou JS

- Verifique se os caminhos estão corretos
- Use caminhos relativos: `css/style.css`
- Não use `c:/users/...`

### Imagens não aparecem

- Verifique se o caminho está correto
- Use caminhos relativos: `imagens/foto.jpg`
- Verifique a extensão do arquivo (.jpg, .png, etc)

### Menu não funciona no mobile

- Verifique se o JS foi carregado
- Abra o console (F12) e procure por erros
- Teste em outro navegador

## 📚 Recursos Úteis

- [MDN Web Docs](https://developer.mozilla.org/) - Documentação HTML/CSS/JS
- [CSS Tricks](https://css-tricks.com/) - Dicas de CSS
- [Unsplash](https://unsplash.com/) - Fotos gratuitas
- [Pexels](https://www.pexels.com/) - Mais fotos gratuitas

## 📞 Suporte

Para dúvidas ou sugestões:
- 📧 Email: contato@soundwave.com
- 📱 WhatsApp: (11) 9 9999-9999
- 📸 Instagram: @soundwave

## 📄 Licença

Todos os direitos reservados © 2026 Soundwave

---

**Desenvolvido com ❤️ usando HTML5, CSS3 e JavaScript puro**
