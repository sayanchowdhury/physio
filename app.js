const els={
  home:document.getElementById("home"),
  cards:document.getElementById("cards"),
  pageTitle:document.getElementById("pageTitle"),
  subtitle:document.getElementById("subtitle"),
  backLink:document.getElementById("backLink"),
  routineControls:document.getElementById("routineControls"),
  sectionSelect:document.getElementById("sectionSelect"),
  langSelect:document.getElementById("langSelect"),
  resetBtn:document.getElementById("resetBtn"),
  printBtn:document.getElementById("printBtn"),
  progressWrap:document.getElementById("progressWrap"),
  progressText:document.getElementById("progressText"),
  progressBar:document.getElementById("progressBar"),
  safetyText:document.getElementById("safetyText"),
  langLabel:document.getElementById("langLabel"),
  sectionLabel:document.getElementById("sectionLabel"),
  showImagesToggle:document.getElementById("showImagesToggle"),
  showImagesLabel:document.getElementById("showImagesLabel"),
};

function esc(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function doneKey(rid,iid){return `physio:routine:${rid}:done:${iid}`}
function setShowImages(on){localStorage.setItem("physio:showImages", on?"1":"0")}
function getShowImages(){return localStorage.getItem("physio:showImages")!=="0"}

function route(){
  const hash=location.hash||"#/";
  const m=hash.match(/^#\/routine\/([^/]+)$/);

  els.pageTitle.textContent=t("app.title");
  els.safetyText.textContent=t("safety");
  els.langLabel.textContent=t("label.language");
  els.sectionLabel.textContent=t("label.section");
  els.showImagesLabel.textContent=t("label.showPictures");
  els.printBtn.textContent=t("btn.print");
  els.resetBtn.textContent=t("btn.resetRoutine");
  els.backLink.textContent="← "+t("app.selectRoutine");

  if(!m) return renderHome();
  const routine=ROUTINES.find(r=>r.id===m[1]);
  if(!routine) return renderHome("Routine not found");
  renderRoutine(routine);
}

window.addEventListener("hashchange",route);
window.addEventListener("load",()=>{
  const stored=localStorage.getItem("physio:lang");
  setLang(stored||"en"); // default EN
  els.langSelect.value=getLang();

  els.langSelect.addEventListener("change",()=>{setLang(els.langSelect.value); route();});
  els.showImagesToggle.checked=getShowImages();
  els.showImagesToggle.addEventListener("change",()=>{setShowImages(els.showImagesToggle.checked); route();});
  els.printBtn.addEventListener("click",()=>window.print());
  route();
});

function renderHome(msg){
  els.subtitle.textContent=msg?msg:t("app.selectRoutine");
  els.backLink.classList.add("hidden");
  els.routineControls.classList.add("hidden");
  els.progressWrap.classList.add("hidden");
  els.cards.classList.add("hidden");
  els.home.classList.remove("hidden");

  els.home.innerHTML=`<div class="routines">
    ${ROUTINES.map(r=>`
      <a class="routineCard" href="#/routine/${r.id}">
        <div class="routineTitle">${esc(t(r.titleKey))}</div>
        <div class="routineMeta">${esc(t(r.patientKey))}</div>
      </a>`).join("")}
  </div>`;
}

function renderRoutine(r){
  els.subtitle.textContent=t(r.patientKey);
  els.backLink.classList.remove("hidden");
  els.routineControls.classList.remove("hidden");
  els.progressWrap.classList.remove("hidden");
  els.cards.classList.remove("hidden");
  els.home.classList.add("hidden");

  els.sectionSelect.innerHTML=r.sections.map(s=>`<option value="${s.id}">${esc(t(s.nameKey))}</option>`).join("");

  const prefsKey=`physio:routine:${r.id}:prefs`;
  const prefs=JSON.parse(localStorage.getItem(prefsKey)||"{}");
  els.sectionSelect.value=prefs.section||r.sections[0].id;

  const rerender=()=>{
    localStorage.setItem(prefsKey,JSON.stringify({section:els.sectionSelect.value}));
    const sec=r.sections.find(s=>s.id===els.sectionSelect.value);
    renderCards(r,sec);
    updateProgress(r);
  };

  els.sectionSelect.onchange=rerender;
  els.resetBtn.onclick=()=>{
    if(!confirm("Reset all ticks for this routine?")) return;
    r.sections.forEach(sec=>sec.items.forEach(it=>localStorage.removeItem(doneKey(r.id,it.id))));
    rerender();
  };

  rerender();
}

function renderCards(r,sec){
  const showImages=getShowImages();
  els.cards.innerHTML=sec.items.map(it=>{
    const checked=localStorage.getItem(doneKey(r.id,it.id))==="1";
    return `<div class="card">
      <div class="cardTop">
        <div>
          <div class="title">${esc(t(it.nameKey))}</div>
          <div class="meta">${esc(it.dosage||"")}</div>
        </div>
        <label class="tick">
          <input type="checkbox" data-item="${it.id}" ${checked?"checked":""}/>
          <span>${esc(t("btn.done"))}</span>
        </label>
      </div>
      ${showImages&&it.img?`<div class=\"media\"><img src=\"${esc(it.img)}\" alt=\"${esc(t(it.nameKey))}\" loading=\"lazy\"/></div>`:""}
      <div class="lang"><p>${esc(t(it.howKey))}</p></div>
    </div>`;
  }).join("");

  els.cards.querySelectorAll('input[type="checkbox"]').forEach(cb=>{
    cb.addEventListener("change",()=>{
      localStorage.setItem(doneKey(r.id,cb.dataset.item), cb.checked?"1":"0");
      updateProgress(r);
    });
  });
}

function updateProgress(r){
  const items=r.sections.flatMap(s=>s.items);
  const done=items.filter(it=>localStorage.getItem(doneKey(r.id,it.id))==="1").length;
  const total=items.length||1;
  els.progressText.textContent=t("ui.completed",{done,total:items.length});
  els.progressBar.style.width=`${Math.round((done/total)*100)}%`;
}
