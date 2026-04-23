# RGO Vision — Site de Negócio

> Site institucional e portfólio técnico da marca **RGO Vision**, desenvolvido em **Angular 21**. Duas audiências, três páginas, toggle **PT/EN** e catálogo de serviços com formulário de orçamento.

---

## Sobre o projeto

A RGO Vision é um estúdio de web design e desenvolvimento. Este site tem dois objetivos simultâneos:

- **Capturar clientes freelance** — catálogo de serviços com preços fixos e formulário de orçamento
- **Atrair recrutadores e oportunidades técnicas** — portfólio de desenvolvedor com stack, projetos e currículo

---

## Páginas

| Rota | Audiência | Conteúdo |
|------|-----------|----------|
| `/` | Geral | Hero institucional, sobre a empresa e fundador, formulário de contato |
| `/clientes` | Clientes | Catálogo de 5 serviços com preços, banner de projeto personalizado, formulário de orçamento |
| `/dev` | Recrutadores | Bio, foto, stack técnica, projetos, timeline de experiência, educação, idiomas e download de CV |

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Angular | 21 | Framework — Standalone Components, Signals, lazy routing |
| TypeScript | 5.x | Linguagem — tipagem estática em todo o projeto |
| SCSS | CSS3 | Design system com variáveis CSS (paleta laranja quente) |
| Angular Router | 21 | 3 rotas com lazy loading |
| Angular Signals | 21 | i18n PT/EN reativo sem biblioteca externa |
| Angular Forms | 21 | Formulários de contato e orçamento com validação |
| tsParticles | 3.x | Animação de partículas no hero (estilo PS3) |
| Google Fonts | — | Inter · JetBrains Mono |

---

## Estrutura

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          ← logo, links, toggle PT/EN
│   │   ├── hero/            ← animação tsParticles, logo, tagline
│   │   ├── about/           ← sobre a empresa + card do fundador
│   │   └── contact/         ← formulário com abas: mensagem / orçamento
│   ├── pages/
│   │   ├── home/            ← / — página principal
│   │   ├── clientes/        ← /clientes — catálogo e orçamento
│   │   └── dev/             ← /dev — portfólio técnico
│   ├── services/
│   │   └── language.service.ts  ← ~150 chaves PT/EN via Signals
│   ├── app.routes.ts
│   └── app.config.ts
├── styles.scss              ← design system global
├── index.html               ← SEO, Open Graph, Schema.org
public/
├── Logo_semFundo.png
├── Foto_profissional.jpeg
└── cv-raul-goncalves.pdf
```

---

## Serviços (catálogo)

| Serviço | Preço | Prazo |
|---------|-------|-------|
| Landing Page | R$ 699 | 5–7 dias úteis |
| Site Institucional | R$ 1.799 | 10–15 dias úteis |
| E-commerce | R$ 2.999 | 15–25 dias úteis |
| Redesign de Site | R$ 999 | 7–10 dias úteis |
| Manutenção Mensal | R$ 399/mês | Contrato |

*Cotação em USD disponível para clientes internacionais.*

---

## Rodando localmente

**Pré-requisitos:** Node.js 18+ e Angular CLI instalados.

```bash
git clone https://github.com/Raulgonc/Portifolio.git
cd Portifolio
npm install
ng serve
```

Acesse `http://localhost:4200`

---

## Build de produção

```bash
ng build
```

Output gerado em `dist/portfolio/`.

---

## Contato

- **Email:** raulgonc4@gmail.com
- **GitHub:** [@Raulgonc](https://github.com/Raulgonc)
- **LinkedIn:** [raul-gonc-dev](https://www.linkedin.com/in/raul-gonc-dev/)

---

<p align="center">
  Desenvolvido por <strong>Raul Gonçalves</strong> · RGO Vision · São Paulo, Brasil
</p>
