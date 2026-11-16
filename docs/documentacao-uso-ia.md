# Documentação do uso de Inteligência Artificial — Rede Prato Cheio

**Disciplina:** Desenvolvimento Front-End — Atividade A1 (2ª entrega)  
**Projeto:** Rede Prato Cheio  
**Data desta documentação:** 14/11/2026  
**Responsáveis:** preencher nomes e RA dos integrantes antes da entrega.

## 1. Objetivo e escopo
Esta documentação apresenta como ferramentas de IA podem apoiar o planejamento, a revisão e a documentação de um site acadêmico de ONG que conecta doadores de alimentos e roupas a pessoas em vulnerabilidade. O projeto analisado contém dez páginas HTML, folha de estilos, JavaScript e configuração de contato.

**Importante sobre rastreabilidade:** o ZIP fornecido não contém histórico verificável das conversas com IA, nem diário de bordo com os prompts originais. Os prompts da seção 3 são **modelos sugeridos para registrar e reproduzir revisões**, e NÃO transcrições de prompts efetivamente usados pela equipe. Substituir/complementar com registros reais antes da apresentação. Não atribuir à IA decisões ou alterações sem evidência.

## 2. Ferramentas e partes do projeto
- **Ferramenta de IA:** preencher nome, versão e datas reais das ferramentas usadas pela equipe.
- **Áreas passíveis de apoio:** estrutura das páginas, redação de conteúdo, responsividade CSS, validação dos formulários, revisão de acessibilidade, organização da documentação e identificação de limitações.
- **Decisão final:** a equipe é responsável por revisar o código, executar os testes e justificar escolhas técnicas.
- **Artefatos observados:** `index.html`, páginas temáticas, `style.css`, `app.js`, `config.js` e `README.md`.

## 3. Exemplos de prompts para uma revisão documentada (não históricos)

### Exemplo A — revisão de acessibilidade
**Prompt modelo:** “Analise o HTML e o CSS do site Rede Prato Cheio quanto a semântica, textos alternativos, foco visível, navegação por teclado, contraste e uso apropriado de ARIA. Aponte problemas concretos e explique cada recomendação.”

**Critério de aceitação:** adotar apenas sugestões verificadas em navegador e, quando aplicável, no W3C Validator e Lighthouse. **Resultado efetivo:** preencher após executar a revisão.

### Exemplo B — revisão de JavaScript
**Prompt modelo:** “Revise `app.js` e identifique como funcionam os eventos, a validação dos formulários e o envio externo. Compare com o requisito acadêmico de persistência usando localStorage, sem inventar funcionalidades existentes.”

**Resultado verificável na versão recebida:** há eventos e validação com `preventDefault()`, mas não foi identificado uso de `localStorage` em `app.js`. A persistência exigida pela atividade deve ser implementada e testada separadamente.

### Exemplo C — responsividade
**Prompt modelo:** “Avalie a organização visual das dez páginas em desktop e celular, com foco em menu, legibilidade, formulários e quebras de layout. Sugira mudanças mínimas que preservem a identidade visual.”

**Critério de aceitação:** capturas de tela em diferentes larguras e verificação de navegação. **Resultado efetivo:** preencher após revisão.

## 4. Registro de decisões e correções
| Item | Evidência no projeto recebido | Decisão / situação |
|---|---|---|
| Menu responsivo | `app.js` altera classe `open` e `aria-expanded` | Implementado no código; testar no celular |
| Validação de formulário | `app.js` usa `preventDefault()`, campos obrigatórios e classes de erro | Implementada no código; testar casos inválidos |
| Envio de formulário | `app.js` faz requisição ao FormSubmit | Depende de serviço externo e ativação; não presumir envio confirmado |
| Persistência | Não há `localStorage` em `app.js` | Pendente para cumprir a rubrica |
| Conteúdo institucional | README declara dados e pontos de coleta demonstrativos | Não apresentar dados fictícios como reais |
| Sugestões recusadas pela equipe | Não há histórico no ZIP | Preencher com exemplo real e justificativa |

## 5. Regras de uso responsável da IA
1. Não inserir senhas, chaves privadas, dados pessoais reais de beneficiários ou documentos sensíveis nos prompts.
2. Não publicar números de impacto, endereços, PIX ou operações fictícias como se fossem reais.
3. Não copiar trechos externos sem atribuição e não afirmar que testes foram executados sem evidências.
4. Revisar manualmente o código sugerido, compreender cada trecho e manter a equipe responsável pelo resultado.
5. Registrar data, ferramenta, prompt, resposta resumida, decisão de aceitar/rejeitar e evidência de teste.

## 6. Modelo de diário de uso de IA — preencher com fatos
| Data | Ferramenta | Prompt utilizado (texto real) | Resposta / sugestão | Aceito, adaptado ou rejeitado? | Justificativa e evidência |
|---|---|---|---|---|---|
| [data] | [ferramenta] | [prompt] | [resumo] | [decisão] | [commit, print ou teste] |
| [data] | [ferramenta] | [prompt] | [resumo] | [decisão] | [commit, print ou teste] |

## 7. Evidências e apresentação
Para o slide 10 (“Uso de IA”), selecionar **1 ou 2 prompts reais**, mostrar o resultado, o que foi revisado pela equipe e uma sugestão que foi recusada, explicando o motivo. Relacionar cada decisão a commits, arquivos modificados e prints quando possível.

**Capturas anexas:** a pasta `prints-desktop/` contém capturas locais das dez páginas. Elas documentam a aparência no navegador, mas não comprovam publicação HTTPS, integração externa ou testes de acessibilidade.

## 8. Limitações da documentação
Este documento foi elaborado a partir do código e do README fornecidos. Não comprova histórico de IA, autoria individual, commits, pull requests, deploy nem execução dos testes externos. A equipe deve completar essas evidências com registros próprios antes da entrega.
