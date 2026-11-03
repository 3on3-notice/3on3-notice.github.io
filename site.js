/* 3on3 FreeStyle 공지 사이트 목록 — 공지 홈(/)이 중심이고, 가이드 페이지는 pages 에 한 줄씩 등록한다.
   등록하면 공지 홈 오른쪽의 돌아가는 가이드 배너와 모든 가이드 페이지 윗줄(common/hub.js) 메뉴에 함께 나온다.
   state: "live" = 지금 보여 줌 / "past" = 지난 가이드로 내림(주소는 그대로 살아 있음). 페이지를 지우지 말고 past 로 내린다. */
window.SITE = {
  text: {
    kr: { home: "공지 홈", guides: "가이드", pastGuides: "지난 가이드", pastNotices: "지난 점검 안내", open: "보기", since: "게시",
          unit: "건", viewingPast: "지난 공지를 보고 있습니다", latest: "이번 주 공지 보기",
          cat: "공지", hl: "점검 하이라이트", relGuides: "관련 가이드", pastMaint: "지난 점검 안내", updatedOn: "업데이트",
          prevWeek: "이전 점검", nextWeek: "다음 점검", prevMonth: "이전 달", nextMonth: "다음 달", pickMonth: "달 고르기", thisWeek: "이번 주", viewing: "보는 중", count: "{n}건", seeBanner: "배너 보기", seeScreen: "화면 보기",
          tags: { new: "신규", renew: "개편", change: "변경", end: "종료", reward: "지급", limit: "기한" } },
    en: { home: "Notice Home", guides: "Guides", pastGuides: "Past Guides", pastNotices: "Past Maintenance Notices", open: "Open", since: "Posted",
          unit: "", viewingPast: "You are viewing a past notice", latest: "See this week's notice",
          cat: "Notice", hl: "Maintenance Highlights", relGuides: "Related Guides", pastMaint: "Past Maintenance Notices", updatedOn: "Updated",
          prevWeek: "Previous", nextWeek: "Next", prevMonth: "Previous month", nextMonth: "Next month", pickMonth: "Choose a month", thisWeek: "This week", viewing: "Viewing", count: "{n} notices", count1: "1 notice", seeBanner: "View banner", seeScreen: "View screen",
          tags: { new: "New", renew: "Renewal", change: "Change", end: "Ended", reward: "Reward", limit: "Deadline" } },
    jp: { home: "お知らせホーム", guides: "ガイド", pastGuides: "過去のガイド", pastNotices: "過去のメンテナンスのご案内", open: "見る", since: "掲載",
          unit: "件", viewingPast: "過去のお知らせを表示しています", latest: "今週のお知らせを見る",
          cat: "お知らせ", hl: "メンテナンスハイライト", relGuides: "関連ガイド", pastMaint: "過去のメンテナンスのご案内", updatedOn: "更新",
          prevWeek: "前のメンテナンス", nextWeek: "次のメンテナンス", prevMonth: "前の月", nextMonth: "次の月", pickMonth: "月を選ぶ", thisWeek: "今週", viewing: "表示中", count: "{n}件", seeBanner: "バナーを見る", seeScreen: "画面を見る",
          tags: { new: "新規", renew: "改編", change: "変更", end: "終了", reward: "配布", limit: "期限" } }
  },
  pages: [
    { id: "pet", path: "/pet/", date: "2026-10-28", state: "live", color: "#FF6A1A", art: "/pet/pet_art.png",
      kr: { title: "펫 가이드", desc: "새로워진 펫 시스템 — 위치 · 능력 · 입양 · 조합을 한 곳에서" },
      en: { title: "Pet Guide", desc: "The renewed Pet System — where to find pets, abilities, adoption and combination" },
      jp: { title: "ペットガイド", desc: "改編されたペットシステム — 場所・能力・養子縁組・合成をまとめて確認" } }
  ]
};
