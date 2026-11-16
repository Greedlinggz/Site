# Acessibilidade — Rede Prato Cheio

O site original foi preservado, incluindo o tema creme. Os recursos opcionais foram adicionados a **todas as 11 páginas HTML** e também à página única `doacoes-ong.html`.

## Como usar

1. Abra `index.html` e clique em **♿ Acessibilidade**, no canto inferior direito.
2. Use **A+ / A−** para mudar a fonte (de 100% a 150%).
3. Ative **Alto contraste**, **Destacar links** e/ou **Reduzir animações** conforme sua preferência.
4. Clique em **Ler o conteúdo** para usar a voz disponível no navegador (quando compatível). Se houver texto selecionado, somente a seleção será lida.
5. Clique em **Restaurar padrão** para retornar ao visual original. As preferências são guardadas **somente neste navegador**, caso o armazenamento esteja disponível.

## Acessibilidade pelo teclado

- `Tab` e `Shift + Tab`: navegar entre elementos e links.
- `Enter` ou `Espaço`: ativar botões.
- `Esc`: fechar o painel de acessibilidade e o menu de navegação móvel.
- `Setas`, `Home` e `End`: trocar entre abas de doação e ajuda.
- **Ir para o conteúdo**: aparece ao pressionar `Tab` no início da página.

## Ajustes técnicos

- Páginas internas agora têm um título principal `h1`; o visual foi mantido.
- Indicadores de foco, descrições de campos, erros e informações sobre resultados dos filtros de cidade.
- Compatibilidade com as preferências do sistema para redução de animações (`prefers-reduced-motion`).
- Leitura de conteúdo usando `speechSynthesis` do navegador, sem dependência de biblioteca externa no código do site; vozes disponíveis variam entre dispositivos.
- A barra pode ser usada sem conta e não salva dados dos formulários.

> Observação: os dados, endereços e serviços exibidos no projeto continuam sendo **demonstrativos**. A inclusão dos recursos não é uma certificação de conformidade integral com as diretrizes WCAG e não substitui testes com leitores de tela e pessoas usuárias.
