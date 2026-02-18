# Planejamento Estratégico de Sitemap - Psicanalista Ana Bottesi

Este documento detalha a arquitetura de informação e estratégia de SEO para dominar o posicionamento local em São Paulo e expandir a autoridade digital.

## 1. Visão Geral da Estratégia

O objetivo é criar uma estrutura "Hub and Spoke" (Cubo e Raios), onde a página "Atendimento em São Paulo" serve como o centro de autoridade regional, conectando-se a páginas específicas de bairros/cidades (raios) e apoiada por conteúdo de blog de alta relevância.

**Pilares:**
1.  **Localização:** Dominar buscas como "Psicanalista em [Cidade/Bairro]".
2.  **Temática:** Dominar buscas como "Psicanálise para [Problema]".
3.  **Autoridade:** Responder dúvidas fundamentais sobre a psicanálise.

---

## 2. Hierarquia Visual do Sitemap

### Nível 1: Institucional (Base)
*   `/` (Home - Foco: Conversão imediata e Posicionamento Geral)
*   `/sobre` (Autoridade Pessoal e Método)
*   `/especialidades` (Hub de Serviços)
*   `/psicanalise-funciona` (Educativo / Quebra de Objeções)
*   `/contato` (Conversão Final)

### Nível 2: Expansão Geográfica (SEO Local)
*   `/atendimento/sao-paulo` (**Página Pilar Regional** - Foco: Estado de SP e Atendimento Online)
    *   `/atendimento/sao-paulo/capital` (Foco: Bairros nobres e centro expandido)
    *   `/atendimento/sao-paulo/campinas`
    *   `/atendimento/sao-paulo/sao-jose-dos-campos`
    *   `/atendimento/sao-paulo/ribeirao-preto`
    *   `/atendimento/sao-paulo/santos`
    *   `/atendimento/online` (Foco: Brasil e Expatriados)

### Nível 3: Conteúdo de Blog (SEO Temático)
*   `/blog` (Hub de Conteúdo)
    *   **Categoria: Emoções Intensas**
        *   `/blog/ansiedade-e-emocoes/como-lidar-com-crises-de-ansiedade`
        *   `/blog/ansiedade-e-emocoes/sintomas-de-burnout-em-mulheres`
    *   **Categoria: Autoconhecimento**
        *   `/blog/autoconhecimento/o-que-e-a-sombra-na-psicanalise`
        *   `/blog/autoconhecimento/como-desenvolver-amor-proprio`
    *   **Categoria: Relacionamentos**
        *   `/blog/relacionamentos/ciclo-da-dependencia-emocional`
        *   `/blog/relacionamentos/como-sair-de-um-relacionamento-abusivo`
    *   **Categoria: Psicanálise Explicada**
        *   `/blog/psicanalise/diferenca-entre-psicologo-e-psicanalista`
        *   `/blog/psicanalise/como-funciona-analise-online`

### Nível 4: Páginas de Confiança (EAT)
*   `/faq` (Perguntas Frequentes)
*   `/depoimentos` (Prova Social)
*   `/politica-de-privacidade`
*   `/termos-de-uso`

---

## 3. Lógica de URL e SEO

*   **URLs Amigáveis:** Curtas, com palavras-chave, sem datas.
    *   *Bom:* `/atendimento/sao-paulo`
    *   *Ruim:* `/page?id=123` ou `/atendimento-sp-2024`
*   **Breadcrumbs (Trilhas de Migalhas):** Essencial para o Google entender a estrutura.
    *   `Home > Atendimento > São Paulo > Capital`
*   **Schema Markup:** Todas as páginas locais devem ter o schema `LocalBusiness` ou `Physician` com a área de atendimento específica.

---

## 4. Plano de Implementação Técnica

1.  **Atualmente:** O sitemap técnico (`sitemap-index.xml`) é gerado automaticamente pelo Astro com base nas páginas existentes em `src/pages`.
2.  **Futuro:** Para criar as páginas de cidades sem duplicar código manualmente, utilizaremos **Rotas Dinâmicas** do Astro (ex: `src/pages/atendimento/[cidade].astro`).
3.  **Blog:** O blog já utiliza coleções de conteúdo (`src/content/posts`), o que facilita a criação de novas categorias e posts sem mexer no código.

---

## 5. Lista de URLs Prioritárias para Criação (Próximos Passos)

1.  `https://anabottesi.com.br/atendimento/sao-paulo` (Urgente)
2.  `https://anabottesi.com.br/psicanalise-funciona` (Educativo)
3.  `https://anabottesi.com.br/faq` (Dúvidas)
4.  `https://anabottesi.com.br/atendimento/online` (Escala)
