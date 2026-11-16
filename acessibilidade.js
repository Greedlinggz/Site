/* Recursos opcionais; sem bibliotecas ou envio de dados. */
(function () {
  'use strict';
  const root = document.documentElement;
  const chave = 'redePratoCheio:acessibilidade:v1';
  const padrao = { fonte: 100, contraste: false, links: false, movimento: false };
  let opcoes = { ...padrao };
  try {
    const guardado = JSON.parse(localStorage.getItem(chave) || 'null');
    if (guardado && typeof guardado === 'object') {
      opcoes.fonte = [100, 110, 120, 130, 140, 150].includes(guardado.fonte) ? guardado.fonte : 100;
      opcoes.contraste = guardado.contraste === true;
      opcoes.links = guardado.links === true;
      opcoes.movimento = guardado.movimento === true;
    }
  } catch (_) { /* Armazenamento pode estar bloqueado; o site continua funcionando. */ }

  // Aplica preferências no elemento raiz para manter o fundo creme quando não ativado.
  function aplicar() {
    root.style.fontSize = opcoes.fonte + '%';
    root.classList.toggle('alto-contraste', opcoes.contraste);
    root.classList.toggle('destacar-links', opcoes.links);
    root.classList.toggle('reduzir-animacoes', opcoes.movimento);
    try { localStorage.setItem(chave, JSON.stringify(opcoes)); } catch (_) { /* opcional */ }
  }
  aplicar();

  // Marcadores semânticos para melhorar a leitura com tecnologias assistivas.
  const main = document.querySelector('main#conteudo');
  if (main) main.setAttribute('tabindex', '-1');
  document.querySelectorAll('svg:not([aria-label]):not([role="img"])').forEach(svg => {
    svg.setAttribute('aria-hidden', 'true'); svg.setAttribute('focusable', 'false');
  });
  document.querySelectorAll('.campo').forEach((caixa, i) => {
    const input = caixa.querySelector('input,select,textarea');
    if (!input) return;
    const erro = caixa.querySelector('.erro');
    const dica = caixa.querySelector('.hint');
    const descreve = (input.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean);
    if (erro) { if (!erro.id) erro.id = 'acessibilidade-erro-' + i; descreve.push(erro.id); }
    if (dica) { if (!dica.id) dica.id = 'acessibilidade-dica-' + i; descreve.push(dica.id); }
    if (descreve.length) input.setAttribute('aria-describedby', [...new Set(descreve)].join(' '));
    if (input.required || ['nome', 'tel', 'tipo', 'qtd', 'cidade', 'pessoas', 'necessidade', 'email', 'mensagem'].includes(input.name)) {
      input.setAttribute('aria-required', 'true');
    }
    const atualizar = () => {
      if (caixa.classList.contains('invalido')) input.setAttribute('aria-invalid', 'true');
      else input.removeAttribute('aria-invalid');
    };
    atualizar();
    new MutationObserver(atualizar).observe(caixa, { attributes: true, attributeFilter: ['class'] });
    input.addEventListener('input', () => {
      if (caixa.classList.contains('invalido')) caixa.classList.remove('invalido');
      input.removeAttribute('aria-invalid');
    });
    input.addEventListener('change', () => {
      if (caixa.classList.contains('invalido')) caixa.classList.remove('invalido');
      input.removeAttribute('aria-invalid');
    });
  });

  // Consentimento do formulário: o erro é anunciado e removido após a correção.
  for (const id of ['dLgpd', 'rLgpd']) {
    const campo = document.getElementById(id);
    if (!campo) continue;
    const erro = campo.closest('.campo')?.querySelector('.erro');
    if (erro) {
      if (!erro.id) erro.id = id + '-erro';
      campo.setAttribute('aria-describedby', erro.id);
      campo.setAttribute('aria-required', 'true');
    }
    campo.addEventListener('change', () => {
      if (campo.checked) {
        campo.removeAttribute('aria-invalid');
        if (erro) erro.style.display = 'none';
      }
    });
  }

  // Navegação completa das abas pelo teclado (setas, Início e Fim).
  const abas = [...document.querySelectorAll('[role="tablist"] [role="tab"]')];
  if (abas.length) {
    const atualizarAbas = () => abas.forEach(aba => {
      aba.tabIndex = aba.getAttribute('aria-selected') === 'true' ? 0 : -1;
    });
    atualizarAbas();
    abas.forEach((aba, i) => {
      aba.addEventListener('click', atualizarAbas);
      aba.addEventListener('keydown', e => {
        let seguinte;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') seguinte = (i + 1) % abas.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') seguinte = (i - 1 + abas.length) % abas.length;
        else if (e.key === 'Home') seguinte = 0;
        else if (e.key === 'End') seguinte = abas.length - 1;
        else return;
        e.preventDefault(); abas[seguinte].click(); abas[seguinte].focus();
      });
    });
  }
  // Estado do menu é anunciado por leitores de tela; Esc fecha o menu móvel.
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');
  if (burger && menu) {
    const atualizarMenu = () => {
      burger.setAttribute('aria-expanded', String(menu.classList.contains('open')));
      burger.setAttribute('aria-label', menu.classList.contains('open') ? 'Fechar menu' : 'Abrir menu');
    };
    burger.addEventListener('click', atualizarMenu);
    menu.addEventListener('click', e => {
      if (e.target.closest('a')) { menu.classList.remove('open'); atualizarMenu(); }
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open'); atualizarMenu(); burger.focus();
      }
    });
    atualizarMenu();
  }

  // Painel compartilhado por todas as páginas, inclusive a página única demonstrativa.
  const widget = document.createElement('aside');
  widget.className = 'a11y-widget';
  widget.setAttribute('aria-label', 'Ferramentas de acessibilidade');
  widget.innerHTML = `
    <div id="painel-acessibilidade" class="a11y-panel" hidden aria-labelledby="titulo-acessibilidade">
      <div class="a11y-top"><h2 id="titulo-acessibilidade">Acessibilidade</h2><button type="button" class="a11y-close" id="fechar-acessibilidade" aria-label="Fechar painel de acessibilidade">✕ Fechar</button></div>
      <p>Personalize a leitura desta página. As opções ficam salvas neste navegador.</p>
      <div class="a11y-actions">
        <button type="button" id="fonte-menor" aria-label="Diminuir o tamanho do texto">A− Diminuir</button>
        <button type="button" id="fonte-maior" aria-label="Aumentar o tamanho do texto">A+ Aumentar</button>
        <button type="button" id="contraste" aria-pressed="false">Alto contraste</button>
        <button type="button" id="links" aria-pressed="false">Destacar links</button>
        <button type="button" id="movimento" aria-pressed="false" class="a11y-wide">Reduzir animações</button>
        <button type="button" id="ler-pagina" class="a11y-wide">🔊 Ler o conteúdo</button>
        <button type="button" id="restaurar" class="a11y-wide">Restaurar padrão</button>
      </div>
      <p class="a11y-help">Use Tab para navegar, Enter para ativar botões e Esc para fechar este painel.</p>
    </div>
    <button type="button" class="a11y-trigger" aria-controls="painel-acessibilidade" aria-expanded="false" id="abrir-acessibilidade">♿ Acessibilidade</button>
    <span class="a11y-status" id="status-acessibilidade" role="status" aria-live="polite" aria-atomic="true"></span>`;
  document.body.appendChild(widget);
  const el = id => widget.querySelector('#' + id);
  const abrir = el('abrir-acessibilidade');
  const painel = el('painel-acessibilidade');
  const status = el('status-acessibilidade');
  const aviso = mensagem => { status.textContent = mensagem; };
  const atualizar = () => {
    el('fonte-menor').disabled = opcoes.fonte <= 100;
    el('fonte-maior').disabled = opcoes.fonte >= 150;
    for (const [id, key] of [['contraste', 'contraste'], ['links', 'links'], ['movimento', 'movimento']]) {
      el(id).setAttribute('aria-pressed', String(opcoes[key]));
    }
  };
  function alternarPainel(visivel, devolverFoco = false) {
    painel.hidden = !visivel;
    abrir.setAttribute('aria-expanded', String(visivel));
    if (visivel) el('fechar-acessibilidade').focus();
    else if (devolverFoco) abrir.focus();
  }
  abrir.addEventListener('click', () => alternarPainel(painel.hidden, !painel.hidden));
  el('fechar-acessibilidade').addEventListener('click', () => alternarPainel(false, true));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !painel.hidden) { alternarPainel(false, true); }
  });
  document.addEventListener('pointerdown', event => {
    if (!painel.hidden && !widget.contains(event.target)) alternarPainel(false);
  });
  el('fonte-menor').addEventListener('click', () => { opcoes.fonte = Math.max(100, opcoes.fonte - 10); aplicar(); atualizar(); aviso('Texto ajustado para ' + opcoes.fonte + '%'); });
  el('fonte-maior').addEventListener('click', () => { opcoes.fonte = Math.min(150, opcoes.fonte + 10); aplicar(); atualizar(); aviso('Texto ajustado para ' + opcoes.fonte + '%'); });
  for (const [id, chaveOpcao, rotulo] of [['contraste', 'contraste', 'Alto contraste'], ['links', 'links', 'Destaque de links'], ['movimento', 'movimento', 'Redução de animações']]) {
    el(id).addEventListener('click', () => {
      opcoes[chaveOpcao] = !opcoes[chaveOpcao]; aplicar(); atualizar();
      aviso(rotulo + (opcoes[chaveOpcao] ? ' ativado' : ' desativado'));
    });
  }
  el('restaurar').addEventListener('click', () => {
    opcoes = { ...padrao }; aplicar(); atualizar(); pararLeitura(); aviso('Preferências restauradas.');
  });

  // Leitura opcional usando o mecanismo nativo de voz do navegador (não envia texto a serviços externos pelo site).
  const botaoLeitura = el('ler-pagina');
  const sintese = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window ? window.speechSynthesis : null;
  let lendo = false;
  let trechos = [];
  let indice = 0;
  if (!sintese) { botaoLeitura.hidden = true; }
  function pararLeitura() {
    lendo = false; trechos = []; indice = 0;
    if (sintese) sintese.cancel();
    botaoLeitura.textContent = '🔊 Ler o conteúdo';
    botaoLeitura.setAttribute('aria-pressed', 'false');
  }
  function falarProximo() {
    if (!lendo || !sintese) return;
    if (indice >= trechos.length) { pararLeitura(); aviso('Leitura concluída.'); return; }
    const fala = new SpeechSynthesisUtterance(trechos[indice++]);
    fala.lang = 'pt-BR'; fala.rate = 0.92;
    fala.onend = falarProximo;
    fala.onerror = () => { pararLeitura(); aviso('Não foi possível continuar a leitura neste navegador.'); };
    sintese.speak(fala);
  }
  botaoLeitura.addEventListener('click', () => {
    if (!sintese) return;
    if (lendo) { pararLeitura(); aviso('Leitura interrompida.'); return; }
    const selecao = window.getSelection ? String(window.getSelection()).trim() : '';
    const texto = (selecao || (main ? main.innerText : '')).replace(/\s+/g, ' ').trim().slice(0, 22000);
    if (!texto) { aviso('Não há conteúdo disponível para leitura.'); return; }
    // Frases curtas evitam falhas de narração em algumas versões do navegador.
    trechos = texto.match(/.{1,170}(?:[.!?;,]\s|\s|$)/g) || [texto];
    indice = 0; lendo = true;
    botaoLeitura.textContent = '■ Parar leitura';
    botaoLeitura.setAttribute('aria-pressed', 'true');
    aviso(selecao ? 'Lendo o texto selecionado.' : 'Lendo o conteúdo principal.');
    sintese.cancel(); falarProximo();
  });
  window.addEventListener('pagehide', pararLeitura);
  atualizar();

  // Resultado dos filtros de cidade comunicado sem deslocar o foco de quem usa teclado.
  const filtros = document.querySelector('.filtros');
  const pontos = [...document.querySelectorAll('.ponto[data-cidade]')];
  if (filtros && pontos.length) {
    const resultado = document.createElement('p');
    resultado.className = 'a11y-results'; resultado.setAttribute('role', 'status');
    resultado.setAttribute('aria-live', 'polite');
    filtros.insertAdjacentElement('afterend', resultado);
    const informarPontos = () => {
      const chip = filtros.querySelector('.chip[aria-pressed="true"]');
      const cidade = chip ? chip.dataset.cidade : 'todos';
      const total = pontos.filter(p => cidade === 'todos' || p.dataset.cidade === cidade).length;
      resultado.textContent = total + (total === 1 ? ' ponto de coleta encontrado' : ' pontos de coleta encontrados') + (cidade !== 'todos' ? ' em ' + cidade : '') + '.';
    };
    filtros.addEventListener('click', e => { if (e.target.closest('.chip')) informarPontos(); });
    informarPontos();
  }
})();
