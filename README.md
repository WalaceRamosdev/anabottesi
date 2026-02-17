# Ana Bottesi | Psicanalista

Este é o site institucional e blog da psicanalista **Ana Bottesi**, desenvolvido com foco em alta conversão, performance excepcional e design premium.

## 🚀 Tecnologias Utilizadas

- **Astro.js v5**: Framework para sites estáticos de altíssima velocidade.
- **GSAP (GreenSock)**: Biblioteca de animações profissionais e fluidas.
- **TailwindCSS v4**: Estilização moderna e eficiente.
- **Markdown (MDX)**: Sistema de gerenciamento de conteúdo para o blog via arquivos locais.

## 📁 Estrutura do Projeto

- `/src/pages`: Rotas do site (Home e Blog).
- `/src/components`: Componentes reutilizáveis (Hero, Sobre, Especialidades, etc.).
- `/src/layouts`: Estrutura base das páginas.
- `/src/content`: Postagens do blog em arquivos `.md`.
- `/src/styles`: Estilos globais e configurações de tema.

## � Como Adicionar Novos Posts

1. Crie um novo arquivo `.md` na pasta `src/content/posts/`.
2. Adicione o cabeçalho (Frontmatter):
   ```markdown
   ---
   title: "Seu Título Aqui"
   description: "Um resumo breve e persuasivo"
   publishDate: 2024-02-17
   image: "/images/seu-card.jpg" (opcional)
   ---
   ```
3. Escreva seu conteúdo abaixo usando Markdown.

## 🛠️ Comandos Disponíveis

| Comando | Ação |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento local. |
| `npm run build` | Gera o build de produção (pasta `/dist`). |
| `npm run preview` | Visualiza o site gerado localmente. |
| `npx astro sync` | Atualiza as definições de tipo do TypeScript. |

## 📐 Padrões de Design

O design utiliza tons terrosos e suaves para transmitir acolhimento e profissionalismo. As animações são disparadas conforme a rolagem da página (ScrollTrigger), garantindo que o usuário seja guiado pela jornada de transformação.
