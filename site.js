/* 3on3 FreeStyle 공지 사이트 목록 — 공지 홈(/)이 중심이고, 가이드 페이지는 pages 에 한 줄씩 등록한다.
   등록하면 공지 홈 오른쪽의 돌아가는 가이드 배너와 모든 가이드 페이지 윗줄(common/hub.js) 메뉴에 함께 나온다.
   state: "live" = 지금 보여 줌 / "past" = 지난 가이드로 내림(주소는 그대로 살아 있음). 페이지를 지우지 말고 past 로 내린다.
   kind: "guide" 가이드(기본) / "video" 영상 / "notice" 공지 — 영상·공지도 오른쪽 배너에 함께 돈다(가이드 윗줄 메뉴엔 가이드만).
   유튜브 영상은 yt 에 영상 id 만 적으면 주소·썸네일이 만들어진다. 언어마다 주소가 다르면 kr/en/jp 안에 path.
   예) { id: "maint-video-1104", kind: "video", yt: "영상id", date: "2026-11-04", state: "live", kr: { title: "11/04 점검 영상" }, en: {…}, jp: {…} }
   예) { id: "court-summit", kind: "notice", path: "/court-summit/", art: "/court-summit/art.jpg", date: "…", state: "live", kr: {…}, en: {…}, jp: {…} } */
window.SITE = {
  text: {
    kr: { rail: "바로가기", kinds: { guide: "가이드", video: "영상", notice: "공지" }, watch: "영상 보기",
          home: "공지 홈", guides: "가이드", pastGuides: "지난 가이드", pastNotices: "지난 점검 안내", open: "보기", since: "게시",
          unit: "건", viewingPast: "지난 공지를 보고 있습니다", latest: "이번 주 공지 보기",
          cat: "공지", hl: "점검 하이라이트", relGuides: "관련 가이드", pastMaint: "지난 점검 안내", updatedOn: "업데이트",
          prevWeek: "이전 점검", nextWeek: "다음 점검", prevMonth: "이전 달", nextMonth: "다음 달", pickMonth: "달 고르기", thisWeek: "이번 주", viewing: "보는 중", count: "{n}건", count1: "1건", seeBanner: "배너 보기", seeScreen: "화면 보기",
          tags: { new: "신규", renew: "개편", change: "변경", event: "이벤트", end: "종료", reward: "지급", limit: "기한" } },
    en: { rail: "Quick Links", kinds: { guide: "Guide", video: "Video", notice: "Notice" }, watch: "Watch",
          home: "Notice Home", guides: "Guides", pastGuides: "Past Guides", pastNotices: "Past Maintenance Notices", open: "Open", since: "Posted",
          unit: "", viewingPast: "You are viewing a past notice", latest: "See this week's notice",
          cat: "Notice", hl: "Maintenance Highlights", relGuides: "Related Guides", pastMaint: "Past Maintenance Notices", updatedOn: "Updated",
          prevWeek: "Previous", nextWeek: "Next", prevMonth: "Previous month", nextMonth: "Next month", pickMonth: "Choose a month", thisWeek: "This week", viewing: "Viewing", count: "{n} notices", count1: "1 notice", seeBanner: "View banner", seeScreen: "View screen",
          tags: { new: "New", renew: "Renewal", change: "Change", event: "Event", end: "Ended", reward: "Reward", limit: "Deadline" } },
    jp: { rail: "クイックリンク", kinds: { guide: "ガイド", video: "動画", notice: "お知らせ" }, watch: "動画を見る",
          home: "お知らせホーム", guides: "ガイド", pastGuides: "過去のガイド", pastNotices: "過去のメンテナンスのご案内", open: "見る", since: "掲載",
          unit: "件", viewingPast: "過去のお知らせを表示しています", latest: "今週のお知らせを見る",
          cat: "お知らせ", hl: "メンテナンスハイライト", relGuides: "関連ガイド", pastMaint: "過去のメンテナンスのご案内", updatedOn: "更新",
          prevWeek: "前のメンテナンス", nextWeek: "次のメンテナンス", prevMonth: "前の月", nextMonth: "次の月", pickMonth: "月を選ぶ", thisWeek: "今週", viewing: "表示中", count: "{n}件", count1: "1件", seeBanner: "バナーを見る", seeScreen: "画面を見る",
          tags: { new: "新規", renew: "改編", change: "変更", event: "イベント", end: "終了", reward: "配布", limit: "期限" } }
  },
  pages: [
    { id: "video-1104", kind: "video", yt: "moRncSnZ8p4", date: "2026-11-04", state: "live",
      kr: { title: "11/4 업데이트 영상", desc: "JOY 와 함께 보는 11/4 업데이트 — 초월 8성 우마왕" },
      en: { title: "Nov 4 Update Video", desc: "JOY walks through the Nov 4 update — Ox Queen P8 Intensive" },
      jp: { title: "11/4 アップデート動画", desc: "JOY と見る 11/4 アップデート — 牛魔王の8星超越" } },
    // 접수 마감 11/13 23:59 PST 가 지나면 state: "past"
    { id: "court-summit-2026", kind: "notice", path: "https://docs.google.com/forms/d/e/1FAIpQLSeklphDfKUlZFsi2TQ8XRY5MychBJXMXICHXYn_T18xU3bOBg/viewform", art: "/img/banner/1104-court-summit-{L}.jpg", date: "2026-11-04", state: "live",
      kr: { title: "코트 서밋 2026 사전 질문" }, en: { title: "Court Summit 2026 Questions" }, jp: { title: "コートサミット2026 事前質問" } },
    { id: "pet", path: "/pet/", date: "2026-10-28", state: "live", color: "#FF6A1A", art: "/pet/pet_art.png",
      kr: { title: "펫 가이드", desc: "새로워진 펫 시스템 — 위치 · 능력 · 입양 · 조합을 한 곳에서" },
      en: { title: "Pet Guide", desc: "The renewed Pet System — where to find pets, abilities, adoption and combination" },
      jp: { title: "ペットガイド", desc: "改編されたペットシステム — 場所・能力・養子縁組・合成をまとめて確認" } }
  ]
};
