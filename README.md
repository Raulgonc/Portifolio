# Raul Gonçalves — Portfolio

> Portfólio pessoal desenvolvido com **Angular 19**, com estética retro-espacial inspirada em *Cowboy Bebop*. Projetos buscados em tempo real via API do GitHub.

---

## Visão Geral

Site de página única (SPA) que reúne apresentação pessoal, habilidades, projetos e contato. O design usa uma paleta de espaço profundo com destaques em âmbar, tipografia monospace e efeitos como scanlines e starfield animado no canvas.

**Preview:** `https://raulgonc.github.io/Portifolio/`

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Angular | 19 | Framework principal — Standalone Components, Signals |
| TypeScript | 5.x | Linguagem — tipagem estática em todo o projeto |
| SCSS | CSS3 | Estilização — design system com variáveis CSS nativas |
| Angular Router | 19 | Roteamento com lazy loading |
| HttpClient | 19 | Integração com API REST do GitHub |
| Canvas API | HTML5 | Starfield animado na seção Hero |
| Angular Forms | 19 | Formulário de contato com validação |
| Google Fonts | — | Orbitron · Space Mono · Bebas Neue |

---

## Seções

- **Hero** — Apresentação com starfield animado e nome em destaque
- **About** — Bio, localização e card terminal com `profile.json`
- **Skills** — Habilidades por categoria com barras de progresso
- **Projects** — Repositórios públicos buscados ao vivo da API do GitHub
- **Feito com** — Stack técnica usada na construção do próprio portfólio
- **Contact** — Formulário funcional via `mailto` + links sociais

---

## Estrutura

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── projects/
│   │   ├── tech-stack/
│   │   └── contact/
│   ├── pages/
│   │   └── home/
│   ├── services/
│   │   └── github.ts
│   ├── app.routes.ts
│   └── app.config.ts
├── styles.scss         ← design system global
└── index.html          ← SEO, Open Graph, fontes
```

---

## Rodando localmente

**Pré-requisitos:** Node.js 18+ e Angular CLI instalados.

```bash
# Clonar o repositório
git clone https://github.com/Raulgonc/Portifolio.git
cd Portifolio

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
ng serve
```

Acesse `http://localhost:4200`

---

## Build de produção

```bash
ng build
```

O output é gerado em `dist/portfolio/`.

---

## SEO

- `lang="pt-BR"` no HTML
- `meta description`, `keywords`, `author` e `robots`
- `link canonical`
- **Open Graph** — LinkedIn, WhatsApp, Facebook
- **Twitter/X Card** — summary_large_image

---

## Contato

- **Email:** raulgoncalves.oliveira21@gmail.com
- **GitHub:** [@Raulgonc](https://github.com/Raulgonc)
- **LinkedIn:** [raul-gonc-dev](https://www.linkedin.com/in/raul-gonc-dev/)

---

<p align="center">
  Desenvolvido por <strong>Raul Gonçalves</strong> — crafted somewhere in the solar system.
</p>
