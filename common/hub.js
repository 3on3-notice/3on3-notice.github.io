/* 가이드 페이지 맨 위에 붙는 공통 윗줄: 왼쪽 '공지 홈', 오른쪽 '가이드' 메뉴(site.js 목록).
   가이드 페이지는 <script src="/common/hub.js" defer></script> 한 줄만 넣는다. 언어는 그 페이지의 <html lang> 을 따라간다. */
(function () {
"use strict";
if (document.getElementById("hub")) return;
const LANG = { ko: "kr", en: "en", ja: "jp" };
const CSS = `
.hub{position:relative;z-index:60;background:#111;color:#E6E6E6;font:600 13.5px/1.2 "Pretendard Variable",Pretendard,-apple-system,BlinkMacSystemFont,"Malgun Gothic","Yu Gothic UI",sans-serif;letter-spacing:-.1px}
.hub *{box-sizing:border-box;margin:0;padding:0}
.hub a{color:inherit;text-decoration:none}
.hub-in{max-width:1180px;margin:0 auto;padding:0 20px;height:40px;display:flex;align-items:center;justify-content:space-between;gap:12px}
.hub-home{display:flex;align-items:center;gap:7px;min-width:0;white-space:nowrap}
.hub-home svg{width:18px;height:18px;flex:none}
.hub-home .hub-ar{width:15px;height:15px;color:#8A8A8A}
.hub-home:hover{color:#fff}
.hub-menu{position:relative}
.hub-menu summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:4px;padding:6px 10px;border-radius:6px;white-space:nowrap}
.hub-menu summary::-webkit-details-marker{display:none}
.hub-menu summary svg{width:14px;height:14px;transition:transform .15s}
.hub-menu[open] summary{background:#262626}
.hub-menu[open] summary svg{transform:rotate(180deg)}
.hub-menu summary:hover{background:#222}
.hub-list{position:absolute;right:0;top:calc(100% + 6px);width:280px;max-width:calc(100vw - 24px);background:#1C1C1C;border:1px solid #333;border-radius:12px;padding:6px;box-shadow:0 12px 32px rgba(0,0,0,.4)}
.hub-list a{display:block;padding:10px 12px;border-radius:8px;line-height:1.35;font-weight:700}
.hub-list a:hover{background:#2A2A2A}
.hub-list a.cur{color:#FF7A45}
.hub-list small{display:block;margin-top:3px;font-size:12px;font-weight:500;color:#8E8E8E}
.hub-list p{padding:10px 12px 4px;font-size:11.5px;font-weight:700;color:#7A7A7A;letter-spacing:.04em}
.hub-list hr{border:0;border-top:1px solid #2E2E2E;margin:6px 4px}
@media (max-width:759px){.hub-in{padding:0 12px 0 16px;height:38px}.hub{font-size:13px}}
`;
const BALL = `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#FF5A1F"/><g fill="none" stroke="#fff" stroke-width="2.4"><circle cx="16" cy="16" r="9"/><path d="M7 16h18M16 7v18M10 9.5c3 3.5 3 9.5 0 13M22 9.5c-3 3.5-3 9.5 0 13"/></g></svg>`;
const ARL = `<svg class="hub-ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>`;
const DOWN = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>`;

function siteList(cb) {
  if (window.SITE) return cb();
  const s = document.createElement("script");
  s.src = "/site.js?v=" + Date.now(); s.onload = cb; s.onerror = cb;
  document.head.appendChild(s);
}
const lang = () => LANG[(document.documentElement.lang || "en").slice(0, 2)] || "en";
const withLang = (path, L) => path + (path.includes("?") ? "&" : "?") + "lang=" + L;
const ymd = d => (d || "").replace(/-/g, ".");

function draw(bar) {
  const S = window.SITE || {}, L = lang(), tx = Object.assign({}, (S.text || {}).en, (S.text || {})[L]);
  const pages = (S.pages || []).filter(p => p && p.path && (p.kind || "guide") === "guide"), here = location.pathname;   // 메뉴엔 가이드만(영상·공지는 공지 홈 오른쪽 배너)
  const item = p => { const g = p[L] || p.en || {}, cur = here.startsWith(p.path);
    return `<a href="${withLang(p.path, L)}" class="${cur ? "cur" : ""}"${cur ? ' aria-current="page"' : ""}>${g.title || p.id}<small>${ymd(p.date)}</small></a>`; };
  const live = pages.filter(p => p.state !== "past"), past = pages.filter(p => p.state === "past");
  const wasOpen = bar.querySelector(".hub-menu[open]");
  bar.innerHTML = `<div class="hub-in">
    <a class="hub-home" href="${withLang("/", L)}">${ARL}${BALL}<span>3on3 FreeStyle · ${tx.home || "Home"}</span></a>
    <details class="hub-menu"${wasOpen ? " open" : ""}><summary>${tx.guides || "Guides"}${DOWN}</summary><div class="hub-list">
      ${live.map(item).join("")}
      ${past.length ? `<p>${tx.pastGuides || ""}</p>${past.map(item).join("")}` : ""}
      <hr><a href="${withLang("/", L)}#s-archive">${tx.pastNotices || ""}</a>
    </div></details></div>`;
}

siteList(() => {
  const st = document.createElement("style"); st.textContent = CSS; document.head.appendChild(st);
  const bar = document.createElement("div"); bar.className = "hub"; bar.id = "hub"; bar.setAttribute("role", "navigation");
  document.body.insertBefore(bar, document.body.firstChild);
  draw(bar);
  new MutationObserver(() => draw(bar)).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  document.addEventListener("click", e => { const m = bar.querySelector(".hub-menu[open]"); if (m && !m.contains(e.target)) m.removeAttribute("open"); });
});
})();
