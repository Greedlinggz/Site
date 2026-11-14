(function(){
 const email=(window.SITE_CONFIG&&window.SITE_CONFIG.email||'').trim();
 const configurado=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)&&!email.includes('EXEMPLO.COM');
 document.querySelectorAll('[data-email]').forEach(a=>{a.textContent=configurado?email:'E-mail ainda não configurado';a.href=configurado?'mailto:'+email:'#';});
 document.querySelectorAll('[data-email-button]').forEach(a=>{a.href=configurado?'mailto:'+email:'#';if(!configurado)a.textContent='Configure o e-mail em config.js';});
 const burger=document.getElementById('burger'),menu=document.getElementById('menu');
 burger?.addEventListener('click',()=>{let aberto=menu.classList.toggle('open');burger.setAttribute('aria-expanded',String(aberto));});
 menu?.querySelectorAll('a').forEach(a=>{if(a.getAttribute('href')===location.pathname.split('/').pop()||(!location.pathname.split('/').pop()&&a.getAttribute('href')==='index.html'))a.setAttribute('aria-current','page');});
 document.querySelectorAll('.stats .num').forEach(n=>n.textContent=Number(n.dataset.target).toLocaleString('pt-BR'));
 document.querySelectorAll('.bar i,.trk i').forEach(n=>n.style.width=n.dataset.w+'%');
 document.querySelectorAll('.chip').forEach(chip=>chip.addEventListener('click',()=>{document.querySelectorAll('.chip').forEach(c=>c.setAttribute('aria-pressed','false'));chip.setAttribute('aria-pressed','true');document.querySelectorAll('.ponto').forEach(p=>p.hidden=chip.dataset.cidade!=='todos'&&p.dataset.cidade!==chip.dataset.cidade);}));
 const tabs=[document.getElementById('aba-doar'),document.getElementById('aba-receber')],panels=[document.getElementById('painel-doar'),document.getElementById('painel-receber')];
 function show(i){tabs.forEach((t,j)=>{if(t)t.setAttribute('aria-selected',String(i===j));if(panels[j])panels[j].hidden=i!==j;});}
 tabs.forEach((t,i)=>t?.addEventListener('click',()=>show(i)));
 if(location.pathname.endsWith('receber-ajuda.html'))show(1);
 document.querySelectorAll('#formDoar,#formReceber,#formContato').forEach(form=>form.addEventListener('submit',async e=>{
 e.preventDefault();
 const campos=[...form.querySelectorAll('input:not([type=checkbox]),select,textarea')];
 const req=form.id==='formDoar'?['nome','tel','tipo','qtd','cidade']:form.id==='formReceber'?['nome','tel','cidade','pessoas','necessidade']:['nome','email','mensagem'];
 let ok=true;
 campos.forEach(c=>{let bad=req.includes(c.name)&&!c.value.trim();if(c.name==='tel'&&c.value.replace(/\D/g,'').length<10)bad=true;if(c.name==='pessoas'&&c.value&&(Number(c.value)<1||Number(c.value)>20))bad=true;if(c.type==='email'&&c.value&&!c.validity.valid)bad=true;c.closest('.campo')?.classList.toggle('invalido',bad);if(bad)ok=false;});
 const lgpd=form.querySelector('input[type=checkbox]');if(lgpd&&!lgpd.checked){alert('Autorize o contato antes de continuar.');return;}
 if(!ok){form.querySelector('.campo.invalido input,.campo.invalido select,.campo.invalido textarea')?.focus();return;}
 if(!configurado){alert('E-mail de destino não configurado.');return;}
 const tipo=form.id==='formDoar'?'Proposta de doação':form.id==='formReceber'?'Pedido de ajuda':'Mensagem de contato';
 const botao=form.querySelector('[type=submit]');const anterior=botao.textContent;
 const status=form.querySelector('.form-status');
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