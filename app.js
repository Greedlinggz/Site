(function(){
 if(document.body.dataset.appMode==='rascunhos-only'){
  function configurarRascunho(formId, toggleId, limparId, statusId, nome, sucessoId){
   const form=document.getElementById(formId),toggle=document.getElementById(toggleId),botaoLimpar=document.getElementById(limparId),status=document.getElementById(statusId);
   const chave='redePratoCheio:rascunho:'+nome+':v1';

   function informar(mensagem){status.textContent=mensagem;}
   function obterCampos(){
    const dados={};
    form.querySelectorAll('input[name],select[name],textarea[name]').forEach(campo=>{
     if(campo.type==='checkbox'||campo.type==='radio'||campo.type==='password')return;
     dados[campo.name]=campo.value;
    });
    return dados;
   }
   function apagar(mensagem){
    try{
     localStorage.removeItem(chave);
     toggle.checked=false;
     if(mensagem)informar(mensagem);
     return true;
    }catch(error){
     toggle.checked=false;
     informar('Não foi possível apagar o rascunho salvo neste navegador.');
     return false;
    }
   }
   function salvar(){
    try{
     localStorage.setItem(chave,JSON.stringify({ativado:true,campos:obterCampos()}));
     return true;
    }catch(error){
     toggle.checked=false;
     try{
      localStorage.removeItem(chave);
      informar('Não foi possível salvar o rascunho neste navegador. Os campos continuam na tela, mas não serão recuperados após recarregar.');
     }catch(erroAoApagar){
      informar('Não foi possível salvar nem apagar o rascunho neste navegador. Use “Apagar rascunho salvo” e tente novamente.');
     }
     return false;
    }
   }

   try{
    const salvo=localStorage.getItem(chave);
    if(salvo){
     const rascunho=JSON.parse(salvo);
     if(rascunho&&rascunho.ativado===true&&rascunho.campos&&typeof rascunho.campos==='object'){
      toggle.checked=true;
      form.querySelectorAll('input[name],select[name],textarea[name]').forEach(campo=>{
       if(campo.type==='checkbox'||campo.type==='radio'||campo.type==='password')return;
       if(Object.prototype.hasOwnProperty.call(rascunho.campos,campo.name)&&typeof rascunho.campos[campo.name]==='string'){
        campo.value=rascunho.campos[campo.name];
       }
      });
      informar('Rascunho recuperado deste dispositivo. A autorização de contato precisa ser marcada novamente.');
     }
    }
   }catch(error){
    toggle.checked=false;
    informar('Não foi possível recuperar o rascunho. Você pode continuar preenchendo o formulário normalmente.');
   }

   form.addEventListener('input',event=>{if(toggle.checked&&event.target!==toggle)salvar();});
   form.addEventListener('change',event=>{if(toggle.checked&&event.target!==toggle)salvar();});
   toggle.addEventListener('change',()=>{
    if(toggle.checked){
     if(salvar())informar('Salvamento automático ativado neste navegador.');
    }else{
     apagar('Rascunho apagado e salvamento automático desativado.');
    }
   });
   botaoLimpar.addEventListener('click',()=>apagar('Rascunho apagado. Os campos preenchidos permanecem na tela.'));
   form.addEventListener('submit',()=>{
    const sucesso=document.getElementById(sucessoId);
    if(sucesso&&sucesso.classList.contains('show'))apagar('Rascunho apagado após o envio simulado.');
   });
  }

  configurarRascunho('formDoar','salvarRascunhoDoar','limparRascunhoDoar','statusRascunhoDoar','doacao','okDoar');
  configurarRascunho('formReceber','salvarRascunhoReceber','limparRascunhoReceber','statusRascunhoReceber','ajuda','okReceber');
  return;
 }

 const email=(window.SITE_CONFIG&&window.SITE_CONFIG.email||'').trim();
 const configurado=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)&&!email.includes('EXEMPLO.COM');
 document.querySelectorAll('[data-email]').forEach(a=>{a.textContent=configurado?email:'E-mail ainda não configurado';a.href=configurado?'mailto:'+email:'#';});
 document.querySelectorAll('[data-email-button]').forEach(a=>{a.href=configurado?'mailto:'+email:'#';if(!configurado)a.textContent='Configure o e-mail em config.js';});
 const burger=document.getElementById('burger'),menu=document.getElementById('menu');
 burger?.addEventListener('click',()=>{
  const aberto=menu.classList.toggle('open');
  burger.setAttribute('aria-expanded',String(aberto));
  burger.setAttribute('aria-label',aberto?'Fechar menu':'Abrir menu');
 });
 menu?.addEventListener('click',e=>{
  if(e.target.closest('a')&&menu.classList.contains('open')){
   menu.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Abrir menu');
  }
 });
 document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&menu?.classList.contains('open')){
   menu.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Abrir menu');burger.focus();
  }
 });
 menu?.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===location.pathname.split('/').pop()||(!location.pathname.split('/').pop()&&a.getAttribute('href')==='index.html'))a.setAttribute('aria-current','page');});
 document.querySelectorAll('.stats .num').forEach(n=>n.textContent=Number(n.dataset.target).toLocaleString('pt-BR'));
 document.querySelectorAll('.bar i,.trk i').forEach(n=>n.style.width=n.dataset.w+'%');
 document.querySelectorAll('.chip').forEach(chip=>chip.addEventListener('click',()=>{document.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed','false'));chip.setAttribute('aria-pressed','true');document.querySelectorAll('.ponto').forEach(p=>p.hidden=chip.dataset.cidade!=='todos'&&p.dataset.cidade!==chip.dataset.cidade);}));
 const tabs=[document.getElementById('aba-doar'),document.getElementById('aba-receber')],panels=[document.getElementById('painel-doar'),document.getElementById('painel-receber')];
 function show(i){tabs.forEach((t,j)=>{
  if(t){t.setAttribute('aria-selected',String(i===j));t.tabIndex=i===j?0:-1;}
  if(panels[j])panels[j].hidden=i!==j;
 });}
 tabs.forEach((t,i)=>t?.addEventListener('click',()=>show(i)));
 if(location.pathname.endsWith('receber-ajuda.html'))show(1);
 document.querySelectorAll('#formDoar,#formReceber,#formContato').forEach(form=>form.addEventListener('submit',async e=>{
 e.preventDefault();
 const campos=[...form.querySelectorAll('input:not([type=checkbox]),select,textarea')];
 const status=form.querySelector('.form-status');
 const req=form.id==='formDoar'?['nome','tel','tipo','qtd','cidade']:form.id==='formReceber'?['nome','tel','cidade','pessoas','necessidade']:['nome','email','mensagem'];
 let ok=true;
 campos.forEach(c=>{
  let bad=req.includes(c.name)&&!c.value.trim();
  if(c.name==='tel'&&c.value.replace(/\D/g,'').length<10)bad=true;
  if(c.name==='pessoas'&&c.value&&(Number(c.value)<1||Number(c.value)>20))bad=true;
  if(c.type==='email'&&c.value&&!c.validity.valid)bad=true;
  c.closest('.campo')?.classList.toggle('invalido',bad);
  if(bad)c.setAttribute('aria-invalid','true');else c.removeAttribute('aria-invalid');
  if(bad)ok=false;
 });
 const lgpd=form.querySelector('input[type=checkbox]');
 if(lgpd){
  lgpd.setAttribute('aria-invalid',String(!lgpd.checked));
  const avisoConsentimento=lgpd.closest('.campo')?.querySelector('.erro');
  if(avisoConsentimento)avisoConsentimento.style.display=lgpd.checked?'none':'block';
 }
 if(!ok || (lgpd&&!lgpd.checked)){
  if(status){status.textContent=!ok?'Confira os campos destacados e tente novamente.':'É necessário autorizar o contato antes de enviar.';status.style.color='#b3261e';}
  (form.querySelector('.campo.invalido input,.campo.invalido select,.campo.invalido textarea')||(lgpd&&!lgpd.checked?lgpd:null))?.focus();
  return;
 }
 if(!configurado){if(status)status.textContent='E-mail de destino não configurado.';return;}
 const tipo=form.id==='formDoar'?'Proposta de doação':form.id==='formReceber'?'Pedido de ajuda':'Mensagem de contato';
 const botao=form.querySelector('[type=submit]');const anterior=botao.textContent;
 botao.disabled=true;botao.textContent='Enviando...';if(status){status.textContent='Enviando sua mensagem...';status.style.color='var(--cinza)';}
 const dados=new FormData(form);dados.set('_subject',tipo+' — Rede Prato Cheio');dados.set('_captcha','true');dados.set('_template','table');
 try{
  const resposta=await fetch('https://formsubmit.co/ajax/'+encodeURIComponent(email),{method:'POST',body:dados,headers:{Accept:'application/json'}});
  const json=await resposta.json();
  if(!resposta.ok||json.success===false||json.success==='false')throw Error(json.message||'O serviço não confirmou o envio.');
  if(status){status.textContent='Solicitação enviada ao serviço. Se este for o primeiro uso, confirme a ativação recebida no Gmail do projeto. Após a ativação, os próximos envios serão encaminhados normalmente.';status.style.color='var(--verde)';}
  form.reset();
 }catch(err){if(status){status.textContent='Não foi possível enviar. Verifique sua conexão ou escreva diretamente para '+email+'. '+(err.message||'');status.style.color='#b3261e';}}
 finally{botao.disabled=false;botao.textContent=anterior;}
 }));
 const pix=document.getElementById('copiarPix');if(pix){pix.disabled=true;pix.textContent='PIX indisponível';}
})();