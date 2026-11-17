# Registro de validação W3C — Rede Prato Cheio

## 1. Informações gerais
- Projeto: Rede Prato Cheio
- Data da validação: 16/11/2026
- Validador: W3C Nu Html Checker (validator.w3.org/nu/)
- Método: envio direto dos arquivos HTML locais à API do validador
- Resultado geral: 11/11 arquivos receberam resposta HTTP 200; foram encontrados 9 erros e 0 avisos
- Respostas originais em JSON: [validacao-w3c-resultados.json](./validacao-w3c-resultados.json)

## 2. Arquivos avaliados
- index.html
- alimentos.html
- como-funciona.html
- contato.html
- doacoes-ong.html
- doar.html
- duvidas.html
- pontos-de-coleta.html
- receber-ajuda.html
- roupas.html
- transparencia.html

## 3. Resultado consolidado
| Arquivo | Erros | Avisos |
|---|---:|---:|
| alimentos.html | 1 | 0 |
| como-funciona.html | 1 | 0 |
| contato.html | 1 | 0 |
| doacoes-ong.html | 0 | 0 |
| doar.html | 1 | 0 |
| duvidas.html | 1 | 0 |
| index.html | 0 | 0 |
| pontos-de-coleta.html | 1 | 0 |
| receber-ajuda.html | 1 | 0 |
| roupas.html | 1 | 0 |
| transparencia.html | 1 | 0 |

Os nove erros reportados são do mesmo tipo: um título `<h3>` vem diretamente após um `<h1>`, pulando o nível `<h2>`. O resultado detalhado de cada arquivo, incluindo as mensagens e localizações retornadas pelo checker, está no JSON vinculado acima.

## 4. Observação
Este registro documenta a execução atual e não representa uma validação sem erros. Foi executado o Nu Html Checker para HTML; a validação dos arquivos CSS externos está registrada em [evidencias_validacao_w3c_css.md](./evidencias_validacao_w3c_css.md).
