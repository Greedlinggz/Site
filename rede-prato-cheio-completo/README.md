# Rede Prato Cheio — projeto acadêmico

Site estático com **10 páginas HTML independentes**. Não depende de IA nem de API.

## Executar
Abra `index.html` no navegador ou use Live Server no VS Code.

## Configurar o e-mail
O contato está configurado como `redepratocheio@gmail.com` em `config.js`. Para alterar, edite esse arquivo. Os formulários **abrem o aplicativo de e-mail do visitante**, que precisa clicar em Enviar. **Não existe banco de dados, protocolo real ou envio automático**. Para receber mensagens sem aplicativo de e-mail, será necessário integrar um serviço de formulários ou backend.

## Imagens
Crie/edite arquivos dentro da pasta `imagens/`. Para exibir uma imagem, use por exemplo `<img src="imagens/alimentos.jpg" alt="Cesta de alimentos" class="imagem-pagina">` no HTML desejado. O projeto original usa ícones SVG, e não fotos; portanto não há fotos existentes para substituir.

## Publicar no GitHub Pages
Crie um repositório, envie todos os arquivos da pasta (com `index.html` na raiz), vá a **Settings → Pages → Build and deployment → Deploy from a branch**, escolha `main` e `/ (root)` e salve.

## Importante
Os nomes de pontos de coleta, endereços, métricas, PIX e operações são exemplos do projeto original, **não foram verificados**. O site não presta serviços reais. Não publique dados pessoais de terceiros ou apresente cadastros como efetivamente recebidos.

## PIX demonstrativo

O texto `redepratocheio@gmail.com` é mostrado como **exemplo de chave PIX**, não foi validado como chave cadastrada. O botão de copiar PIX permanece desativado para evitar pagamentos reais em um projeto acadêmico.


## Envio real de formulários (FormSubmit)
Os formulários Doar, Receber ajuda e Contato usam o serviço externo FormSubmit (https://formsubmit.co/) para encaminhar mensagens a redepratocheio@gmail.com. No **primeiro envio**, abra essa caixa de entrada e clique no link de ativação enviado pelo FormSubmit. Sem essa confirmação, os envios não estarão plenamente operacionais. Depois publique no GitHub Pages e teste os três formulários com dados fictícios. Não é necessário informar senha do Gmail nem colocar credenciais no JavaScript. O serviço depende de internet e da disponibilidade e políticas do provedor; não há banco de dados nem garantia de entrega na caixa de entrada. Como o projeto é fictício, não solicite dados pessoais reais de pessoas em vulnerabilidade.


## Revisão visual (novembro de 2026)
Corrigido contraste da página Transparência no tema creme. Conferidos links e arquivos locais nas 10 páginas, além da sintaxe de app.js e config.js. O envio externo de e-mail requer internet e FormSubmit ativado; não foi testado remotamente nesta revisão.
