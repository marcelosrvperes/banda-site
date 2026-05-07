# 🚀 Como Publicar o Site (GitHub + Netlify)

## Passo 1: GitHub (Controle de Versão)

### 1.1 Criar conta (se não tiver)
- Acesse [github.com](https://github.com)
- Clique em "Sign up"
- Complete o cadastro

### 1.2 Instalar Git
- Download: [git-scm.com](https://git-scm.com)
- Instale com as opções padrão

### 1.3 Criar repositório no GitHub
- Faça login em [github.com](https://github.com)
- Clique no "+" > "New repository"
- Nome: `banda-site`
- Deixe como "Public"
- Clique "Create repository"

### 1.4 Fazer upload do site para GitHub (no Terminal)
Abra o PowerShell na pasta `banda-site`:

```powershell
# Iniciar Git nesta pasta
git init

# Adicionar arquivo de configuração do usuário
git config user.name "Seu Nome"
git config user.email "seu.email@example.com"

# Adicionar todos os arquivos
git add .

# Criar o primeiro commit
git commit -m "Initial commit - Site da Banda"

# Conectar com o repositório no GitHub (copie a URL que aparece em github.com)
git remote add origin https://github.com/SEUNOME/banda-site.git
git branch -M main

# Enviar para GitHub
git push -u origin main
```

---

## Passo 2: Netlify (Publicar o Site)

### 2.1 Acessar Netlify
- Vá em [netlify.com](https://netlify.com)
- Clique em "Sign up"
- Escolha "GitHub" para conectar

### 2.2 Conectar com GitHub
- Autorize Netlify acessar seu GitHub
- Clique "Create site from Git"
- Selecione o repositório `banda-site`

### 2.3 Configurar Deploy
- **Build command**: deixe em branco (site estático)
- **Publish directory**: `.` (raiz)
- Clique "Deploy"

### 2.3 Seu site está ONLINE! 🎉
- Netlify gera uma URL automaticamente (tipo: `https://seusite-12345.netlify.app`)
- Sempre que você fizer `git push`, o site atualiza automaticamente

---

## Passo 3: Adicionar Domínio Personalizado (Opcional)

No painel do Netlify:
1. Vá em "Domain settings"
2. Clique "Add custom domain"
3. Digite seu domínio (ex: minhabanda.com.br)
4. Configure os DNS records conforme Netlify indicar

---

## Passo 4: Atualizar o Site

Quando quiser fazer mudanças:

```powershell
# 1. Edite os arquivos
# 2. Salve as mudanças
# 3. Commit e push:

git add .
git commit -m "Descrição da mudança"
git push origin main

# Pronto! Netlify atualiza sozinho em segundos
```

---

## ⚠️ Importante: Não incluir no GitHub

- ✅ Já temos `.gitignore` configurado
- Não envie: `node_modules`, `dist`, `.env`

---

**Dúvidas?** Me avise e te ajudo com cada passo! 🎵
