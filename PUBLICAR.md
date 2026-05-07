## 📱 PUBLICAR O SITE - PASSO A PASSO

Você precisa fazer 3 coisas em ordem:

---

## PASSO 1️⃣: Criar Conta no GitHub (GRÁTIS)

### Acesse github.com
1. Abra o navegador: https://github.com
2. Clique no botão **"Sign up"** (canto superior direito)
3. Preencha com:
   - **Email**: seu email (exemplo: seuemail@gmail.com)
   - **Senha**: crie uma senha forte
   - **Username**: escolha um nome (exemplo: ospampeiros)
4. Clique **"Create account"**
5. Confirme o email que será enviado

### Criar o primeiro Repositório
1. Depois de confirmado, clique no **"+"** (canto superior direito)
2. Escolha **"New repository"**
3. Preencha com:
   - **Repository name**: `banda-site`
   - **Description**: (opcional) "Site oficial de Os Pampeiros"
   - **Public**: ✅ (deixe selecionado)
4. Clique **"Create repository"**
5. **Copie a URL que aparece** (será tipo: `https://github.com/SEUUSERNAME/banda-site.git`)

---

## PASSO 2️⃣: Enviar o Site para GitHub

### Instale Git (se não tiver)
1. Abra: https://git-scm.com/download/win
2. Clique em "Download" (versão 64-bit)
3. Execute o instalador, deixe as opções padrão

### Enviar arquivos do site (no PowerShell)
Abra o PowerShell **na pasta banda-site** e execute os comandos:

```powershell
# Verificar se Git está instalado
git --version

# Entrar na pasta
cd "g:\Meu Drive\00-2026\20-Banda\banda-site"

# Iniciar Git
git init

# Configurar seu nome e email
git config user.name "Seu Nome"
git config user.email "seuemail@gmail.com"

# Adicionar todos os arquivos
git add .

# Criar o primeiro commit
git commit -m "Primeiro upload - Site Os Pampeiros"

# Conectar com GitHub (USE A URL QUE VOCÊ COPIOU)
git remote add origin https://github.com/SEUUSERNAME/banda-site.git

# Enviar para GitHub
git branch -M main
git push -u origin main
```

**Resultado**: Seu site estará no GitHub!

---

## PASSO 3️⃣: Criar Conta no Netlify (GRÁTIS)

1. Abra: https://netlify.com
2. Clique **"Sign up"** (canto superior direito)
3. Escolha **"GitHub"** (para conectar)
4. Autorize Netlify acessar seu GitHub
5. Escolha **"banda-site"** na lista
6. Clique **"Deploy site"**

**Resultado**: Seu site estará ONLINE! 🎉
- URL tipo: `https://seus-pampeiros-12345.netlify.app`
- Sempre que fizer `git push`, atualiza automaticamente!

---

## ✅ Pronto!

Seu site estará em:
- GitHub: https://github.com/SEUUSERNAME/banda-site
- **SITE AO VIVO**: https://seus-pampeiros-12345.netlify.app

---

## 🔄 Para Atualizar o Site (depois)

Sempre que precisar atualizar:

```powershell
# 1. Edite os arquivos no VS Code
# 2. Salve tudo
# 3. No PowerShell:

git add .
git commit -m "Descrição da mudança"
git push origin main

# Pronto! Em alguns segundos Netlify atualiza sozinho 🚀
```

---

**Precisa de ajuda em algum passo? Me avisa!** 💪
