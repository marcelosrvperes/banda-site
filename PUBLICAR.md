# Site Os Pampeiros — Como Atualizar e Publicar

## Links do projeto

| | Link |
|---|---|
| **Site ao vivo** | https://brilliant-selkie-2c7db8.netlify.app |
| **GitHub** | https://github.com/marcelosrvperes/banda-site |
| **Netlify** | https://app.netlify.com/projects/brilliant-selkie-2c7db8 |

> **Dica:** Você pode trocar o nome do site no Netlify para algo mais bonito.
> No painel: **Site configuration → Site details → Change site name**
> Sugestão: `ospampeiros` → ficaria `https://ospampeiros.netlify.app`

---

## Como atualizar o site

Toda vez que mudar qualquer arquivo (HTML, CSS, JS, imagem), faça isso no PowerShell:

```powershell
cd "g:\Meu Drive\00-2026\20-Banda\banda-site"

git add .
git commit -m "Descrição do que mudei"
git push origin main
```

O Netlify detecta automaticamente o push e publica em menos de 1 minuto.

---

## O que editar para manter o site atualizado

### Dados dos integrantes (bio, instrumento, foto)
Arquivo: `js/integrantes-data.js`

Cada integrante tem esse formato:
```js
{
  nome: "Alze",
  instrumento: "Vocal e Violão",
  bio: "Texto de apresentação aqui.",
  redes: { instagram: "https://instagram.com/ospampeiros" },
  foto: "imagens/integrantes/Alze/20250824_161743.jpg"
}
```

### Fotos do slideshow do hero (tela inicial)
No mesmo arquivo `js/integrantes-data.js`, array `fotosHero`:
```js
const fotosHero = [
  "imagens/banda/foto1.jpg",
  "imagens/banda/foto2.jpg",
  ...
];
```

### Fotos do carrossel e da faixa rolante (marquee)
Array `fotosBanda` no mesmo arquivo.

### Fotos da galeria
No arquivo `galeria.html`, os arrays:
- `galeriaShows` — fotos de apresentações
- `galeriaBastidores` — fotos de bastidores
- `galeriaVideos` — arquivos .mp4

### Adicionar uma nova foto
1. Coloque o arquivo em `imagens/banda/` (ou subpasta adequada)
2. Adicione o caminho no array correspondente em `js/integrantes-data.js` ou `galeria.html`
3. Suba para o GitHub (o `git push` acima)

### Adicionar um show na agenda
Abra `agenda.html` e substitua o bloco de "Sem shows confirmados" pelo card do show:
```html
<div class="card event-card fade-in">
  <div class="event-date">
    <div class="day">15</div>
    <div class="month">AGO</div>
  </div>
  <div class="event-info">
    <h3>Nome do Evento</h3>
    <p><strong>Local:</strong> Nome do local, Cidade - Estado</p>
    <p><strong>Horário:</strong> 20:00</p>
  </div>
</div>
```

---

## Estrutura das pastas

```
banda-site/
├── index.html          ← Página inicial
├── integrantes.html    ← Página dos integrantes
├── agenda.html         ← Agenda de shows
├── galeria.html        ← Galeria de fotos e vídeos
├── contato.html        ← Formulário de contato
├── css/
│   └── style.css       ← Todos os estilos visuais
├── js/
│   ├── script.js       ← Slideshow, carrossel, lightbox, etc.
│   └── integrantes-data.js ← DADOS DA BANDA (edite aqui)
└── imagens/
    ├── banda/          ← Fotos do grupo (shows, ensaios)
    └── integrantes/    ← Uma foto por integrante
        ├── Alze/
        ├── Edu/
        ├── Damião/
        ├── Jones/
        ├── Marcelo/
        └── Tadeu/
```

---

## Dúvidas frequentes

**O site não atualizou depois do push?**
Aguarde 1-2 minutos e recarregue. Se ainda não atualizou, vá em
**Netlify → Deploys** e veja se aparece algum erro.

**Esqueci o que mudar?**
Abra o arquivo, salve com Ctrl+S, e o VS Code mostra as diferenças em azul na barra lateral.

**Quero trocar o domínio para ospampeiros.com.br?**
No Netlify: **Domain management → Add domain**. Compre o domínio em qualquer registradora (ex: registro.br) e aponte o DNS para o Netlify. Custa ~R$50/ano.
