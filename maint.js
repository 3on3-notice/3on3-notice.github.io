/* 공지 홈 화면 그리기 — 점검 안내를 위에서 아래로 읽어 내려가는 기사형으로.
   순서: 제목 → 점검 후 추가 안내(확인된 이슈) → 점검 하이라이트 → 영역별 변경(secs 순서) → 관련 가이드 → 지난 점검 안내.
   내용: data.js(이번 주) 또는 archive/<날짜>.js(?week=날짜) · 가이드 목록: site.js · 지난 공지 목록: archive/index.js · 확인된 이슈: issues.js
   예전 형식(sec: deadline/reward/change, tag 없음)도 그대로 그린다 — 단원은 secs 순서로 만들고, tag 가 없으면 sec 에서 정한다. */
(function () {
"use strict";
const qs = new URLSearchParams(location.search);
const W = qs.get("week"), WEEK = W && /^\d{4}-\d{2}-\d{2}$/.test(W) ? W : "";
const V = "?v=" + Date.now();
let wait = 4;
const done = () => { if (--wait === 0) start(); };
function load(src, ok, bad) { const s = document.createElement("script"); s.src = src + V; s.onload = ok; s.onerror = bad || ok; document.head.appendChild(s); }
load(WEEK ? "archive/" + WEEK + ".js" : (window.NOTICE_SRC || "data.js"), done, () => { if (WEEK) location.search = ""; else done(); });
load(window.SITE_SRC || "site.js", done);
load(window.ARCHIVE_SRC || "archive/index.js", done);
load("issues.js", done);

/* 그림 기호(선 아이콘). 단원·카드는 sec → 없으면 tag 기호를 쓴다 */
const P = {
  issues: '<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>',
  system: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  shop: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
  event: '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  fix: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
  character: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  limit: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  reward: '<path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
  change: '<path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.5 9a9 9 0 0 1 14.9-3.4L23 10M1 14l4.6 4.4A9 9 0 0 0 20.5 15"/>',
  end: '<circle cx="12" cy="12" r="10"/><path d="M4.9 4.9l14.2 14.2"/>',
  new: '<path d="M12 5v14M5 12h14"/>',
  ball: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18M6 5.5c3 3.5 3 9.5 0 13M18 5.5c-3 3.5-3 9.5 0 13"/>'
};
P.deadline = P.limit; P.renew = P.change; P.hl = '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>'; P.guides = '<path d="M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2zM22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8z"/>'; P.archive = '<path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4"/>';
const ico = k => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[k] || P.ball}</svg>`;
const ARR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const TAG_ORDER = ["limit", "new", "renew", "change", "event", "end", "reward"];
const TAG_OF_SEC = { deadline: "limit", reward: "reward", change: "change" };

function start() {
const N = window.NOTICE || {}, S = window.SITE || {}, AR = window.ARCHIVE || [];
const SHOT = qs.has("shot");
if (SHOT) document.documentElement.classList.add("shot");
const LANGS = ["kr", "en", "jp"].filter(l => N[l]);
const HTML_LANG = { kr: "ko", en: "en", jp: "ja" }, LANG_NAME = { kr: "KR", en: "EN", jp: "JP" };
const SITE_NAME = { kr: "3on3 FreeStyle 공지", en: "3on3 FreeStyle Notice", jp: "3on3 FreeStyle お知らせ" };
const $ = s => document.querySelector(s);
const pick = () => { const q = qs.get("lang"); if (N[q]) return q;
  const n = (navigator.language || "en").toLowerCase(); const g = n.startsWith("ko") ? "kr" : n.startsWith("ja") ? "jp" : "en"; return N[g] ? g : LANGS[0]; };
let L = pick();
const TX = () => { const a = (S.text || {}).en || {}, b = (S.text || {})[L] || {}; return Object.assign({}, a, b, { tags: Object.assign({}, a.tags, b.tags) }); };
// 오른쪽 배너 항목: kind = guide(가이드, 기본) / video(영상) / notice(공지). yt 에 유튜브 영상 id 만 적으면 주소·썸네일을 만든다.
// 언어별 주소가 다르면 kr/en/jp 안에 path. 바깥 주소(https://…)는 새 탭으로 열고 lang 을 붙이지 않는다.
const pathOf = p => (p[L] && p[L].path) || p.path || (p.yt ? "https://www.youtube.com/watch?v=" + p.yt : "");
const isExt = u => /^https?:/.test(u);
const pages = () => (S.pages || []).filter(p => p && pathOf(p));
const pageOf = id => pages().find(p => p.id === id);
const hrefOf = p => { const u = pathOf(p); return isExt(u) ? u : u + (u.includes("?") ? "&" : "?") + "lang=" + L; };
const pageArt = p => ((p[L] && p[L].art) || p.art || "").replace("{L}", L) || (p.yt ? `https://i.ytimg.com/vi/${p.yt}/mqdefault.jpg` : "");   // art 의 {L} 은 언어
const extAttr = p => isExt(pathOf(p)) ? ' target="_blank" rel="noopener"' : "";
const ymd = d => (d || "").replace(/^(\d{4})-(\d{2})-(\d{2})$/, "$1.$2.$3");
const tagOf = c => c.tag || TAG_OF_SEC[c.sec] || "change";
const artOf = c => c.img || (c.link && c.link.page && pageArt(pageOf(c.link.page) || {})) || "";
const icon = c => { const a = artOf(c); return a ? `<img src="${a}" alt="" loading="lazy">` : ico(P[c.sec] ? c.sec : tagOf(c)); };
const dd = dl => dl ? `<em class="dd" data-dl="${dl}"></em>` : "";
const linkOf = c => {   // page: site.js 의 id 로 주소를 찾는다(가이드 주소가 바뀌어도 공지는 그대로). 없으면 href
  if (!c.link) return null; const p = c.link.page && pageOf(c.link.page), href = p ? hrefOf(p) : c.link.href;
  return href ? { href, text: c.link.text || "" } : null; };
/* 지난 점검 안내: 목록은 점검 날짜(m) 순서로 옛날 → 최근. 가장 늦은 판 = 기본 주소에 뜨는 이번 주 */
const mOf = a => a.m || a.d;
const ARS = AR.slice().sort((a, b) => mOf(a) < mOf(b) ? -1 : mOf(a) > mOf(b) ? 1 : (a.d < b.d ? -1 : 1));
const LATEST = ARS.length ? ARS[ARS.length - 1].d : N.updated, CUR = WEEK || LATEST;
const weekHref = a => a.d === LATEST ? `?lang=${L}` : `?week=${a.d}&lang=${L}`;
const monthName = m => { const [y, mo] = m.split("-").map(Number);
  try { return new Intl.DateTimeFormat({ kr: "ko-KR", en: "en-US", jp: "ja-JP" }[L] || "en-US", { year: "numeric", month: "long" }).format(new Date(y, mo - 1, 1)); }
  catch (_) { return y + "." + String(mo).padStart(2, "0"); } };
// 누르면 크게 뜨는 그림: 주소의 {L} 은 언어(kr/en/jp)로 바꾼다
const popSrc = src => String(src || "").replace(/\{L\}/g, L);
const ZOOM = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg>';
const esc = v => String(v || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const popAttr = (src, cap) => `data-pop="${esc(popSrc(src))}" data-cap="${esc(cap)}"`;
// 확인된 이슈: 주별 공지는 id 만 적고 상태·문장은 issues.js 한 곳에서. 거기서 fixed 로 바꾸면 이번 주·지난 주 페이지가 함께 '수정 완료'
const resolveIssue = x => { const g = x && x.id && (window.ISSUES || {})[x.id]; if (!g) return x;
  const lt = g[L] || g.en || {}, fixed = g.status === "fixed";
  return { status: g.status, found: g.found, date: fixed ? (g.fixed || g.found) : g.found, text: (fixed && lt.fixedText) || lt.text || "", pop: g.pop }; };
// 확인일(M/D)로부터 14일 이상 지난 이슈는 목록에서 내린다(11/03 사용자 "괜한 혼란 안 불러오게"). 기준일은 그 주 공지 날짜 — 지난 공지는 그때 모습 그대로
const ISSUE_DAYS = 14;
const issueOld = x => { const m = String(x.found || x.date || "").match(/(\d{1,2})\/(\d{1,2})/); const base = new Date((N.updated || "") + "T00:00:00");
  if (!m || isNaN(base)) return false;
  let y = base.getFullYear(); if (+m[1] > base.getMonth() + 1) y--;   // 12/30 확인 → 1/6 공지면 지난해
  return (base - new Date(y, +m[1] - 1, +m[2])) / 864e5 >= ISSUE_DAYS; };
const countTx = n => { const tx = TX(); return ((n === 1 && tx.count1) || tx.count || "{n}").replace("{n}", n); };

/* 변경 카드 하나: 머리(아이콘·태그·제목) → 설명 → 기간 → 전⇒후 → 묶음별 전⇒후 → 목록 → ※ → 바로가기 → 날짜별 덧붙임 */
function block(c, i, t) {
  if (!c.title && c.list) return `<ul class="dots plain" id="c-${i}">${c.list.map(x => `<li>${x}</li>`).join("")}</ul>`;
  const tx = TX(), g = tagOf(c), b = c.big;
  const ban = c.pop ? `<button type="button" class="pc-ban" ${popAttr(c.pop, c.title)}><img src="${esc(popSrc(c.pop))}" alt="" loading="lazy"><span class="zoom">${ZOOM}${tx.seeBanner || ""}</span></button>` : "";
  let h = `<article class="pc" id="c-${i}" style="--c:var(--t-${g})"><header class="pc-h"><span class="pc-ic${artOf(c) ? " pic" : ""}">${icon(c)}</span><div class="pc-t"><span class="tag">${tx.tags[g] || g}</span><h3>${c.title || ""}</h3></div>${ban}</header>`;
  if (c.desc) h += `<p class="ctx">${c.desc}</p>`;
  if (b) h += `<div class="when"><span>${b.k || ""}</span><b>${b.v || ""}</b>${dd(b.deadline)}</div>`;
  const arrow = (from, to) => `<span class="was">${from}</span><i aria-hidden="true">⇒</i><strong>${to}</strong>`;
  if (c.chg) h += `<ul class="chg">${c.chg.map(r => `<li>${r.k ? `<b>${r.k}</b>: ` : ""}${arrow(r.from, r.to)}</li>`).join("")}</ul>`;
  if (c.swap) h += c.swap.map(s => `<h4>${s.g || ""}</h4><ul class="chg">${(s.rows || []).map(r => `<li>${arrow(r[0], r[1])}</li>`).join("")}</ul>`).join("");
  if (c.items) h += c.items.some(x => x && x.pop)   // 항목에 배너가 있으면 누르는 칸으로
    ? `<ul class="pops">${c.items.map(x => !x || !x.pop ? `<li><span class="pop-chip plain">${typeof x === "string" ? x : (x && x.t) || ""}</span></li>`   // 배너 없는 항목은 누르지 않는 칸
        : `<li><button type="button" class="pop-chip" ${popAttr(x.pop, x.t)}><img src="${esc(popSrc(x.pop))}" alt="" loading="lazy"><span>${x.t || ""}</span>${ZOOM}</button></li>`).join("")}</ul>`
    : `<ul class="dots">${c.items.map(x => `<li>${typeof x === "string" ? x : x.t || ""}</li>`).join("")}</ul>`;
  if (c.rows) h += `<ul class="dots">${c.rows.map(r => `<li><b>${r[0]}</b>: ${r[2] ? `<strong>${r[1]}</strong>` : r[1]}</li>`).join("")}</ul>`;
  if (c.lbl) h += `<h4>${c.lbl}</h4>`;
  if (c.grid2) h += `<ul class="dots">${c.grid2.map(r => `<li><b>${r[0]}</b>: <strong>${r[1]}</strong></li>`).join("")}</ul>`;
  if (c.chars) h += `<ul class="dots">${c.chars.map(r => `<li><b>${r[0]}</b>: ${r[1]}</li>`).join("")}</ul>`;
  if (c.list) h += `<ul class="dots">${c.list.map(x => `<li>${x}</li>`).join("")}</ul>`;
  if (c.note) h += `<p class="note">※ ${c.note}</p>`;
  const lk = linkOf(c);
  if (lk) h += `<a class="lnk" href="${lk.href}">${lk.text}${ARR}</a>`;
  if (c.add) h += c.add.map(a => `<p class="addn"><span>${a.date} ${t.added || ""}</span>${a.text}</p>`).join("");
  return h + "</article>";
}
// 점검 후 추가 안내: 날짜별로 묶고 줄마다 상태
function updatesHTML(t, is) {
  if (!is.length) return `<div class="mp"><p class="mp-empty">${t.issuesEmpty || ""}</p></div>`;
  const by = []; is.forEach(x => { let g = by.find(y => y.d === x.date); if (!g) by.push(g = { d: x.date, xs: [] }); g.xs.push(x); });
  const st = t.st || {};
  const see = x => x.pop ? `<button type="button" class="iss-pop" ${popAttr(x.pop, "")}>${ZOOM}${TX().seeScreen || ""}</button>` : "";
  return `<div class="mp">${by.map(g => `<div class="mp-g"><h3>${g.d || ""}</h3>${g.xs.map(x => `<div class="mp-r"><span class="sb ${x.status || ""}">${st[x.status] || x.status || ""}</span><div><p>${x.text || ""}</p>${see(x)}</div></div>`).join("")}</div>`).join("")}</div>`;
}
// 점검 하이라이트: 큰 칸(hl) + 태그별 아이콘 줄. 큰 칸은 누르면 아래 카드로, 칸 안 버튼은 가이드로 바로(11/03)
function highlightHTML(t, cards) {
  const tx = TX(), tt = Array.isArray(t.title) ? t.title : [t.title || "", ""];
  const named = cards.map((c, i) => ({ c, i })).filter(x => x.c.title);
  const big = named.filter(x => x.c.hl), rest = named.filter(x => !x.c.hl);
  const groups = TAG_ORDER.concat(rest.map(x => tagOf(x.c)).filter(g => !TAG_ORDER.includes(g)))
    .filter((g, k, a) => a.indexOf(g) === k).map(g => ({ g, xs: rest.filter(x => tagOf(x.c) === g) })).filter(x => x.xs.length);
  const tile = x => `<li><a href="#c-${x.i}"><span class="hl-ic${artOf(x.c) ? " pic" : ""}">${icon(x.c)}</span><span class="hl-n">${x.c.title}</span>${dd(x.c.big && x.c.big.deadline)}</a></li>`;
  return `<div class="hl"><div class="hl-no"><b>${tt[0].trim()}</b><span>${tt[1] || ""}</span></div><div class="hl-grid${big.length ? "" : " solo"}">` +
    big.map(x => { const lk = linkOf(x.c);
      const art = artOf(x.c), ban = !art && x.c.pop ? popSrc(x.c.pop) : "";   // 그림이 없으면 그 카드의 배너를 큰 칸 위에 깐다(11/04)
      return `<div class="hl-big" style="--c:var(--t-${tagOf(x.c)})"><a class="hl-hit" href="#c-${x.i}" aria-label="${x.c.title}"></a>${art ? `<img src="${art}" alt="" loading="lazy">` : ban ? `<img class="ban" src="${esc(ban)}" alt="" loading="lazy">` : `<span class="hl-bi">${icon(x.c)}</span>`}<span class="tag">${tx.tags[tagOf(x.c)] || ""}</span><b>${x.c.title}</b>${lk ? `<a class="hl-go" href="${lk.href}">${lk.text}${ARR}</a>` : ""}</div>`; }).join("") +
    `<div class="hl-gs">${groups.map(x => `<div class="hl-g" style="--c:var(--t-${x.g})"><p class="hl-gk">${ico(x.g)}${tx.tags[x.g] || x.g}</p><ul>${x.xs.map(tile).join("")}</ul></div>`).join("")}</div></div></div>`;
}
// 오른쪽 작은 돌아가는 배너(좁은 화면은 첫 화면 안). site.js 에 쌓인 가이드·영상·공지를 최근 게시 순으로(지난 항목은 뒤)
function railHTML() {
  const tx = TX(), byDate = (a, b) => (b.date || "").localeCompare(a.date || "");
  const ps = pages().filter(p => p.state !== "past").sort(byDate).concat(pages().filter(p => p.state === "past").sort(byDate));
  if (!ps.length) return "";
  const kinds = tx.kinds || {};
  return `<p class="gr-k">${tx.rail || tx.guides || ""}<span class="gr-n"></span></p><div class="gr-vp">${ps.map((p, i) => { const g = p[L] || p.en || {}, k = p.kind || "guide", art = pageArt(p);
    return `<a class="gr-s gr-${k}${i ? "" : " on"}" href="${hrefOf(p)}"${extAttr(p)} style="--g:${p.color || "var(--or)"}"><span class="gr-art">${art ? `<img src="${art}" alt="" loading="lazy">` : ""}${k === "video" ? PLAY : ""}</span><span class="gr-t"><small>${p.state === "past" ? (tx.pastGuides || "") : (kinds[k] || "")}</small><b>${g.title || p.id}</b><em>${(k === "video" ? tx.watch : tx.open) || ""}${ARR}</em></span></a>`; }).join("")}</div>` +
    (ps.length > 1 ? `<div class="gr-dots">${ps.map((_, i) => `<button type="button" data-i="${i}" aria-label="${i + 1}"></button>`).join("")}</div>` : "");
}
const PLAY = `<i class="gr-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></i>`;
let RAIL_T = 0, RAIL_HOLD = false, RAIL_FIT = null;
function railWire() {
  const gr = $("#gr"); clearInterval(RAIL_T); if (!gr) return;
  gr.hidden = !gr.innerHTML;
  const ss = [...gr.querySelectorAll(".gr-s")], ds = [...gr.querySelectorAll(".gr-dots button")], n = gr.querySelector(".gr-n");
  if (!ss.length) return;
  let i = 0;
  const show = k => { i = (k + ss.length) % ss.length;
    ss.forEach((s, j) => { const on = j === i; s.classList.toggle("on", on); if (on) { s.removeAttribute("aria-hidden"); s.removeAttribute("tabindex"); } else { s.setAttribute("aria-hidden", "true"); s.setAttribute("tabindex", "-1"); } });
    ds.forEach((d, j) => d.classList.toggle("on", j === i)); if (n) n.textContent = ss.length > 1 ? `${i + 1} / ${ss.length}` : ""; fit(); };
  // 그림 칸은 그림 비율 그대로(빈 띠 없음) — 배너마다 높이가 달라 보이는 칸 높이를 지금 항목에 맞춘다
  const vp = gr.querySelector(".gr-vp"), fit = () => { if (vp && ss[i]) vp.style.height = ss[i].offsetHeight + "px"; };
  gr.querySelectorAll(".gr-art img").forEach(im => im.addEventListener("load", fit));
  window.removeEventListener("resize", RAIL_FIT); RAIL_FIT = fit; window.addEventListener("resize", fit);
  ds.forEach((d, j) => d.addEventListener("click", () => show(j)));
  show(0);
  if (ss.length > 1 && !SHOT && !matchMedia("(prefers-reduced-motion: reduce)").matches)
    RAIL_T = setInterval(() => { if (!RAIL_HOLD && !document.hidden) show(i + 1); }, 4500);
}
// 지난 점검 안내: 달별 줄(왼쪽 옛날 → 오른쪽 최근). 좌우 버튼은 한 달씩, 아래 스크롤 바는 달을 골라 바로, 폰은 손가락으로 밀기
function archiveHTML() {
  const tx = TX(), ym = a => mOf(a).slice(0, 7), months = [...new Set(ARS.map(ym))], last = months.length - 1;
  const card = a => { const now = a.d === LATEST, cur = a.d === CUR;
    return `<li><a class="wk${cur ? " cur" : ""}" href="${weekHref(a)}"${cur ? ' aria-current="page"' : ""}><b>${a[L] || a.en || a.d}</b><span>${ymd(mOf(a))}</span>${now || cur ? `<em>${now ? tx.thisWeek : tx.viewing}</em>` : ""}</a></li>`; };
  const shortM = m => { const [y, mo] = m.split("-").map(Number);
    try { return new Intl.DateTimeFormat({ kr: "ko-KR", en: "en-US", jp: "ja-JP" }[L] || "en-US", { month: "short" }).format(new Date(y, mo - 1, 1)); } catch (_) { return String(mo); } };
  const few = months.length <= 12;   // 12달 이하면 달마다 글자(폰에선 하나 걸러), 넘으면 양 끝(해.달) + 해가 바뀌는 1월(해)
  const tick = (m, i) => { const lab = few ? shortM(m) : i === 0 || i === last ? m.replace("-", ".") : m.endsWith("-01") && i > 1 && i < last - 1 ? m.slice(0, 4) : "";
    return `<span${few && (last - i) % 2 ? ' class="alt"' : ""} style="left:${last ? (i / last * 100).toFixed(3) : 50}%"${lab ? ` data-l="${lab}"` : ""}></span>`; };
  const chev = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  return `<div class="ar"><div class="ar-bar"><button type="button" class="ar-btn" data-step="-1" aria-label="${tx.prevMonth}">${chev("M15 6l-6 6 6 6")}</button><p class="ar-now" aria-live="polite"><b></b><span></span></p><button type="button" class="ar-btn" data-step="1" aria-label="${tx.nextMonth}">${chev("M9 6l6 6-6 6")}</button></div>` +
    `<div class="ar-track" tabindex="0">${months.map(m => { const xs = ARS.filter(a => ym(a) === m);
      return `<div class="ar-mon" data-n="${xs.length}"><p class="ar-ml">${monthName(m)}</p><ul>${xs.map(card).join("")}</ul></div>`; }).join("")}</div>` +
    (last > 0 ? `<div class="ar-scrub"><input type="range" class="ar-range" min="0" max="${last}" step="1" value="${last}" aria-label="${tx.pickMonth}"><div class="ar-ticks" aria-hidden="true">${months.map(tick).join("")}</div></div>` : "") + `</div>`;
}
function archiveWire() {
  const ar = $(".ar"); if (!ar) return;
  const track = ar.querySelector(".ar-track"), range = ar.querySelector(".ar-range"), mons = [...ar.querySelectorAll(".ar-mon")];
  const nowB = ar.querySelector(".ar-now b"), nowS = ar.querySelector(".ar-now span"), btns = ar.querySelectorAll(".ar-btn");
  const padL = () => parseFloat(getComputedStyle(track).paddingLeft) || 0;
  let at = -1, lock = 0;
  const show = i => { if (i === at) return; at = i;
    nowB.textContent = mons[i].querySelector(".ar-ml").textContent; nowS.textContent = countTx(+mons[i].dataset.n);
    if (range) range.value = i; btns[0].disabled = i <= 0; btns[1].disabled = i >= mons.length - 1;
    mons.forEach((m, k) => m.classList.toggle("on", k === i)); };
  const go = (i, smooth) => { i = Math.max(0, Math.min(mons.length - 1, i)); lock = Date.now() + (smooth ? 700 : 150);
    track.scrollTo({ left: mons[i].offsetLeft - padL(), behavior: smooth && !SHOT ? "smooth" : "auto" }); show(i); };
  // 손으로 밀면: 왼쪽 끝에 걸린 달을 표시(맨 끝까지 밀었으면 마지막 달)
  track.addEventListener("scroll", () => { if (Date.now() < lock) return;
    const x = track.scrollLeft + padL() + 8; let i = 0; mons.forEach((m, k) => { if (m.offsetLeft <= x) i = k; });
    if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 2) i = mons.length - 1;
    show(i); }, { passive: true });
  btns.forEach(b => b.addEventListener("click", () => go(at + +b.dataset.step, true)));
  if (range) range.addEventListener("input", () => go(+range.value, false));
  const cur = ar.querySelector(".wk.cur");
  go(cur ? mons.indexOf(cur.closest(".ar-mon")) : mons.length - 1, false);
}

function render() {
  const t = N[L]; if (!t) return;
  const tx = TX();
  document.documentElement.lang = HTML_LANG[L] || "ko";
  const site = t.site || SITE_NAME[L] || SITE_NAME.en;
  const tt = Array.isArray(t.title) ? t.title : [t.title || "", ""];
  document.title = site + " · " + tt.join("");
  $("#site").textContent = site;
  $("#langs").innerHTML = LANGS.map(l => `<button type="button" data-l="${l}" lang="${HTML_LANG[l]}" class="${l === L ? "on" : ""}" aria-pressed="${l === L}">${LANG_NAME[l]}</button>`).join("");
  $("#cat").textContent = tx.cat || "";
  $("#ribbon").textContent = String(t.eyebrow || "").replace(/^3on3 FreeStyle\s*[·・]\s*/i, "");
  $("#upd").textContent = N.updated ? `${tx.updatedOn || ""} ${ymd(N.updated)}` : "";
  $("#title").innerHTML = tt[0] + (tt[1] ? "<b>" + tt[1] + "</b>" : "");
  $("#lead").textContent = t.lead || "";
  const past = $("#past");
  past.hidden = !WEEK;
  // 지난 공지를 볼 때: 안내 + 이번 주로 + 이전·다음 점검으로 한 칸씩
  const older = WEEK && ARS.filter(a => a.d < WEEK).pop(), newer = WEEK && ARS.find(a => a.d > WEEK);
  const pn = (a, cls, label, dir) => `<${a ? `a href="${weekHref(a)}"` : "span"} class="pn ${cls}${a ? "" : " off"}">${dir < 0 ? "‹" : ""}<span><small>${label}</small>${a ? `<b>${a[L] || a.en || a.d}</b>` : ""}</span>${dir > 0 ? "›" : ""}</${a ? "a" : "span"}>`;
  past.innerHTML = WEEK ? `<p class="msg">${tx.viewingPast || ""} <a href="?lang=${L}">${tx.latest || ""} →</a></p><div class="pns">${pn(older, "older", tx.prevWeek, -1)}${pn(newer, "newer", tx.nextWeek, 1)}</div>` : "";

  const cards = t.cards || [], is = (t.issues || []).map(resolveIssue).filter(x => !issueOld(x)), secs = t.secs || {};
  const areas = Object.keys(secs).filter(s => s !== "issues" && cards.some(c => c.sec === s));
  cards.forEach(c => { if (c.sec && !secs[c.sec] && !areas.includes(c.sec)) areas.push(c.sec); });   // secs 에 없는 sec 도 버리지 않는다
  const name = s => secs[s] || s;
  const sec = (id, title, body, cls) => `<section class="ch${cls ? " " + cls : ""}" id="s-${id}" data-tab aria-labelledby="h-${id}"><div class="art"><h2 id="h-${id}"><span class="h2-ic">${ico(id)}</span>${title}</h2>${body}</div></section>`;
  const tabs = [["issues", secs.issues || ""], ["hl", tx.hl]].concat(areas.map(s => [s, name(s)]));
  $("#gnb").setAttribute("aria-label", secs.nav || "Sections");
  $("#tabs").innerHTML = tabs.map(([id, label]) => `<a href="#s-${id}" data-id="s-${id}">${label}${id === "issues" && is.length ? `<em>${is.length}</em>` : ""}</a>`).join("");
  $("#main").innerHTML =
    sec("issues", secs.issues || "", updatesHTML(t, is), "ch-mp") +
    sec("hl", tx.hl, highlightHTML(t, cards)) +
    areas.map(s => sec(s, name(s), cards.map((c, i) => c.sec === s ? block(c, i, t) : "").join(""))).join("") +
    (ARS.length > 1 || WEEK ? `<section class="ch ch-archive" id="s-archive" aria-labelledby="h-archive"><div class="art"><h2 id="h-archive"><span class="h2-ic">${ico("archive")}</span>${tx.pastMaint}</h2>${archiveHTML()}</div></section>` : "");
  $("#foot").innerHTML = `<div class="art">${t.foot ? `<p class="bye">${t.foot}</p>` : ""}<p>© JOYCITY · 3on3 FreeStyle</p></div>`;
  $("#gr").innerHTML = railHTML();
  tick(); SPY = null; spy(); tabFade(); archiveWire(); railWire();
}

/* 기한 표시(D-N / 종료) */
function tick() {
  const t = N[L] || {};
  document.querySelectorAll("[data-dl]").forEach(el => {
    const d = new Date(el.dataset.dl); if (isNaN(d)) { el.textContent = ""; return; }
    const ms = d - Date.now();
    el.textContent = ms > 0 ? "D-" + Math.ceil(ms / 864e5) : (t.ended || "");
    el.classList.toggle("end", ms <= 0);
  });
}

/* 스크롤 따라 현재 단원 탭 표시 */
let SPY = null, spyRaf = 0;
function spy() {
  spyRaf = 0;
  const secs = document.querySelectorAll(".ch[data-tab]"); if (!secs.length) return;
  const top = $("#gnb").offsetHeight + 24;
  let cur = "";
  secs.forEach(s => { if (s.getBoundingClientRect().top - top <= 0) cur = s.id; });
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4 && scrollY > 0) cur = secs[secs.length - 1].id;
  if (cur === SPY) return; SPY = cur;
  const tabs = $("#tabs");
  tabs.querySelectorAll("a").forEach(a => { const on = a.dataset.id === cur; a.classList.toggle("on", on); if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
  const on = tabs.querySelector("a.on");
  if (on && tabs.scrollWidth > tabs.clientWidth) tabs.scrollTo({ left: on.offsetLeft - (tabs.clientWidth - on.offsetWidth) / 2, behavior: SHOT ? "auto" : "smooth" });
}
function tabFade() {
  const t = $("#tabs"), g = $("#gnb");
  g.classList.toggle("more-l", t.scrollLeft > 2);
  g.classList.toggle("more-r", t.scrollLeft + t.clientWidth < t.scrollWidth - 2);
}
addEventListener("scroll", () => { if (!spyRaf) spyRaf = requestAnimationFrame(spy); }, { passive: true });
addEventListener("resize", () => { SPY = null; spy(); tabFade(); });
$("#tabs").addEventListener("scroll", tabFade, { passive: true });

/* 언어 바꾸기: 맨 위에서 다시 시작, ?week 는 그대로 */
$("#langs").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b || b.dataset.l === L || !N[b.dataset.l]) return;
  L = b.dataset.l;
  const p = new URLSearchParams(location.search); p.set("lang", L);
  try { history.replaceState(null, "", location.pathname + "?" + p.toString()); } catch (_) {}
  render(); scrollTo({ top: 0, left: 0, behavior: "auto" });
});

/* 그림 창: [data-pop] 을 누르면 크게, 바깥·×·Esc 로 닫기 */
const LB = document.createElement("div");
LB.className = "lb"; LB.hidden = true; LB.setAttribute("role", "dialog"); LB.setAttribute("aria-modal", "true");
LB.innerHTML = '<button type="button" class="lb-x" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button><figure><img alt=""><figcaption></figcaption></figure>';
document.body.appendChild(LB);
let lbFrom = null;
const lbClose = () => { LB.hidden = true; document.documentElement.classList.remove("lb-on"); if (lbFrom) lbFrom.focus(); };
document.addEventListener("click", e => {
  const b = e.target.closest("[data-pop]");
  if (b && !LB.contains(b)) { lbFrom = b; LB.querySelector("img").src = b.dataset.pop; LB.querySelector("figcaption").textContent = b.dataset.cap || "";
    LB.hidden = false; document.documentElement.classList.add("lb-on"); LB.querySelector(".lb-x").focus(); return; }
  if (!LB.hidden && (e.target === LB || e.target.closest(".lb-x"))) lbClose();
});
addEventListener("keydown", e => { if (e.key === "Escape" && !LB.hidden) lbClose(); });
const GR = $("#gr");
if (GR) ["mouseenter", "focusin"].forEach(ev => GR.addEventListener(ev, () => RAIL_HOLD = true));
if (GR) ["mouseleave", "focusout"].forEach(ev => GR.addEventListener(ev, () => RAIL_HOLD = false));

/* 맨 위 · 맨 아래 버튼 */
const jTop = $("#jTop"), jBot = $("#jBot");
function jumpVis() { const y = scrollY, max = document.documentElement.scrollHeight - innerHeight; jTop.hidden = y < 300; jBot.hidden = y > max - 300; }
jTop.onclick = () => scrollTo({ top: 0, behavior: "smooth" });
jBot.onclick = () => scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
addEventListener("scroll", jumpVis, { passive: true }); addEventListener("resize", jumpVis);

render(); jumpVis(); setInterval(tick, 60000);
if (location.hash && !SHOT) { const el = document.getElementById(decodeURIComponent(location.hash.slice(1))); if (el) el.scrollIntoView(); }
}
})();
