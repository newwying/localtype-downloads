document.querySelectorAll('.command button').forEach(button=>button.addEventListener('click',async()=>{const pre=button.parentElement.querySelector('pre');try{await navigator.clipboard.writeText(pre.textContent);button.textContent='已复制';}catch{pre.style.display='block';const selection=window.getSelection();const range=document.createRange();range.selectNodeContents(pre);selection.removeAllRanges();selection.addRange(range);button.textContent='已选中，请按 Ctrl+C / Command+C';}}));const guideToc=document.querySelector('.guide-toc details');if(guideToc&&!window.matchMedia('(max-width:900px)').matches)guideToc.open=true;function setGuideRoute(route){if(route!=='agy'&&route!=='codex')return;document.body.dataset.guideRoute=route;document.querySelectorAll('[data-guide-route]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.guideRoute===route)));}function revealGuideTarget(){let target=document.getElementById(location.hash.slice(1));if(!target)return;const legacyTarget=target.dataset.stepTarget;if(legacyTarget)target=document.getElementById(legacyTarget)||target;const route=target.closest('.route-agy,.route-codex');if(route)setGuideRoute(route.classList.contains('route-agy')?'agy':'codex');let parent=target.parentElement;while(parent){if(parent.tagName==='DETAILS')parent.open=true;parent=parent.parentElement;}requestAnimationFrame(()=>target.scrollIntoView());}setGuideRoute(document.body.dataset.guideRoute||'agy');document.querySelectorAll('[data-guide-route]').forEach(button=>button.addEventListener('click',()=>setGuideRoute(button.dataset.guideRoute)));const tocLinks=[...document.querySelectorAll('.guide-toc a[href^="#"]')];function markGuideToc(id){const active=document.getElementById(id);const matched=tocLinks.find(link=>link.getAttribute('href')==='#'+id);const current=matched||(active&&tocLinks.map(link=>[link,document.getElementById(link.getAttribute('href').slice(1))]).filter(([,target])=>target&&target.offsetTop<=active.offsetTop).pop()||[])[0];tocLinks.forEach(link=>link.setAttribute('aria-current',String(link===current)));}if(location.hash)markGuideToc(location.hash.slice(1));document.querySelectorAll('main [id]').forEach(section=>{if('IntersectionObserver'in window)new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)markGuideToc(entry.target.id)}),{rootMargin:'-20% 0px -70% 0px'}).observe(section);});window.addEventListener('hashchange',revealGuideTarget);revealGuideTarget();document.querySelectorAll('.comparison').forEach(panel=>{
  const panes=[...panel.querySelectorAll('.compare-scroll')];
  const expected=new WeakMap();
  const top=(item,pane)=>item.getBoundingClientRect().top-pane.getBoundingClientRect().top+pane.scrollTop;
  const move=(pane,value)=>{pane.scrollTop=value;expected.set(pane,pane.scrollTop);};
  const highlight=key=>{
    panel.querySelectorAll('.map-chip').forEach(chip=>{const selected=chip.dataset.map===key;chip.classList.toggle('active',selected);chip.setAttribute('aria-pressed',String(selected));});
    panel.querySelectorAll('.mapped').forEach(item=>item.classList.toggle('matched',item.dataset.map===key));
  };
  const focus=key=>{
    highlight(key);
    if(key==='all')return;
    panes.forEach(pane=>{const item=pane.querySelector(`[data-map="${key}"]`);move(pane,top(item,pane));});
  };
  panes.forEach(pane=>pane.addEventListener('scroll',()=>{
    if(expected.has(pane)){
      const value=expected.get(pane);expected.delete(pane);
      if(Math.abs(pane.scrollTop-value)<1)return;
    }
    const rows=[...pane.querySelectorAll('.mapped')];
    const current=rows.find(row=>top(row,pane)+row.offsetHeight>pane.scrollTop+2)||rows[rows.length-1];
    const fraction=Math.max(0,Math.min(1,(pane.scrollTop-top(current,pane))/current.offsetHeight));
    highlight(current.dataset.map);
    panes.filter(other=>other!==pane).forEach(other=>{
      const match=other.querySelector(`[data-map="${current.dataset.map}"]`);
      move(other,top(match,other)+fraction*match.offsetHeight);
    });
  },{passive:true}));
  panel.querySelectorAll('.map-chip').forEach(button=>button.addEventListener('click',()=>focus(button.dataset.map)));
  panel.querySelectorAll('.mapped').forEach(item=>{
    item.addEventListener('click',()=>{if(!window.getSelection().toString())focus(item.dataset.map);});
    item.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();focus(item.dataset.map);}});
  });
});