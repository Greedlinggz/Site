# Rede Prato Cheio — projeto acadêmico

Site estático com **11 páginas HTML independentes**. Não depende de IA nem de API.

## Executar
Abra `index.html` no navegador ou use Live Server no VS Code.

## Estrutura
- 10 páginas HTML com navegação compartilhada.
- css/style.css: cores, layout e adaptação a telas pequenas.
- js/script.js: validação e simulação do formulário.
- docs/: documentação da atividade e guia de publicação.

## Configurar o e-mail
O contato está configurado como `redepratocheio@gmail.com` em `config.js`. Para alterar, edite esse arquivo. Os formulários **abrem o aplicativo de e-mail do visitante**, que precisa clicar em Enviar. **Não existe banco de dados, protocolo real ou envio automático**. Para receber mensagens sem aplicativo de e-mail, será necessário integrar um serviço de formulários ou backend.

## Imagens
Crie/edite arquivos dentro da pasta `imagens/`. Para exibir uma imagem, use por exemplo `<img src="imagens/alimentos.jpg" alt="Cesta de alimentos" class="imagem-pagina">` no HTML desejado. O projeto original usa ícones SVG, e não fotos; portanto não há fotos existentes para substituir.

## Importante
Os nomes de pontos de coleta, endereços, métricas, PIX e operações são exemplos do projeto original. O site não presta serviços reais. Não publique dados pessoais de terceiros ou apresente cadastros como efetivamente recebidos.

## PIX demonstrativo

O texto `redepratocheio@gmail.com` é mostrado como **exemplo de chave PIX**, não foi validado como chave cadastrada. O botão de copiar PIX permanece desativado para evitar pagamentos reais em um projeto acadêmico.


## Rascunhos no dispositivo
Na página `doacoes-ong.html`, cada formulário pode salvar rascunhos localmente mediante ativação explícita. Os dados ficam no navegador atual, a autorização de contato não é salva e o rascunho pode ser apagado manualmente; após o envio simulado, ele é removido automaticamente. Evite ativar em dispositivos compartilhados.

## GitHub Pages

Envie o conteúdo deste pacote para a raiz do repositório. Em Settings > Pages, escolha Deploy from a branch, main e /(root). Consulte docs/guia_github.txt para o passo a passo e a colaboração com o grupo.

## Equipe 
Arthur Hudson Alves Toledo  - 47437057
Pietro Dimitri Caires de Melo  - 47338873
Aryslan da Costa Macedo  - 47441534
Arthur Prado braz  - 47397560
Geovanny Almeida dos Santos  - 46885269

