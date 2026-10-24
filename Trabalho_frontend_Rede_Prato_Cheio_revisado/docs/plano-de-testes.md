# Plano de testes — Rede Prato Cheio

| ID | Teste | Procedimento | Resultado esperado | Evidência |
|---|---|---|---|---|
| T01 | Página inicial | Abrir `index.html` | Carrega sem erro e mostra conteúdo principal | Captura de tela |
| T02 | Navegação | Clicar em todos os itens do menu | Cada link abre a página correta | Checklist |
| T03 | CSS | Abrir cada página | Estilos carregam em todas as páginas | Capturas |
| T04 | Responsividade | Testar tela estreita e desktop | Conteúdo sem rolagem horizontal indevida | Capturas |
| T05 | Teclado | Usar Tab, Shift+Tab e Enter | Foco visível e links acessíveis | Registro manual |
| T06 | Formulário obrigatório | Enviar sem preencher | Navegador impede envio e identifica campos | Captura |
| T07 | E-mail | Inserir e-mail inválido | Validação do navegador sinaliza o campo | Captura |
| T08 | Telefone | Inserir caractere não permitido | `pattern` sinaliza valor inválido | Captura |
| T09 | Multimídia | Abrir página de mídia | Controles e alternativa textual aparecem; mídia real depende dos arquivos adicionados | Captura |
| T10 | Iframe | Abrir página de mídia com internet | Conteúdo externo carrega ou link alternativo funciona | Captura |
| T11 | HTML | Validar todas as páginas no W3C Validator | Corrigir erros e guardar relatório final | Relatórios |
| T12 | Acessibilidade | Revisar alt, labels, títulos, contraste e teclado | Itens revisados e pendências documentadas | Checklist |
| T13 | Deploy | Acessar URL pública Railway | Site e recursos carregam com HTTPS | URL e captura |
| T14 | Maiúsculas/caminhos | Testar imagens e links no servidor | Nenhum caminho quebrado | Checklist |

## Validação W3C
A equipe deve enviar cada página ao https://validator.w3.org/ e anexar os resultados. Não marcar como aprovado antes de executar os testes.

## Observação
O formulário não envia dados a um servidor. O teste confirma a validação no navegador, não a recepção de mensagens.
