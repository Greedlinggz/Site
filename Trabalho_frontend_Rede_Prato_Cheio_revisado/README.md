# Rede Prato Cheio — Front-End

Site acadêmico sobre sustentabilidade e impacto social, com foco em doações responsáveis de alimentos e roupas.

## Estrutura
- `index.html`: página inicial (na raiz, requisito para a publicação).
- Nove páginas adicionais: `sobre.html`, `projetos.html`, `impacto.html`, `acessibilidade.html`, `galeria.html`, `midia.html`, `noticias.html`, `contato.html` e `orcamento_hospedagem.html`.
- `css/estilo.css`: folha de estilos compartilhada.
- `js/script.js`: validação complementar do formulário.
- `img/`: imagem fornecida no projeto original.
- `assets/`: arquivos opcionais de áudio/vídeo.
- `docs/`: escopo, diário de bordo, orçamento e plano de testes.

## Executar localmente
Abra `index.html` no navegador. Para testar como servidor local, use a extensão Live Server do VS Code.

## Publicar no GitHub
1. Crie um repositório e mantenha estes arquivos diretamente na raiz do repositório.
2. Faça commit e push para a branch `main`.
3. Confira se `index.html`, `css/`, `js/`, `img/` e `docs/` aparecem na raiz.

## Publicar no Railway
1. Entre no Railway usando GitHub e crie um projeto a partir do repositório.
2. Confirme que o serviço usa a raiz do repositório e reconhece `index.html`.
3. Em Settings > Networking, gere um domínio público.
4. Verifique o deploy e os logs; teste todas as páginas e os caminhos de CSS/imagens.
5. Vincule domínio próprio apenas se necessário, copiando os registros indicados pelo Railway.

## Limitações conhecidas
- O formulário valida os campos no navegador, mas não envia nem armazena os dados. Um back-end ou serviço de formulários é necessário para receber mensagens.
- `assets/campanha.mp4` e `assets/mensagem.mp3` são espaços reservados: adicione arquivos próprios/autorizados se desejar ativar a mídia.
- Os pontos de coleta, nomes de integrantes, dados de impacto e preços do orçamento precisam ser confirmados pela equipe antes da entrega.
