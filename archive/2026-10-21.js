// 공지 내용. 나중엔 구글 시트에서 읽어 오도록 바꾼다. 언어별로 칸 구성이 다를 수 있다.
// 칸은 sec(주제)로 묶는다: deadline 기한 / reward 보상·환급 / change 변경 사항. issues 는 확인된 이슈.
// deadline 은 UTC ISO. 크루 11/18 16:00 KST = 07:00Z, 펫 10/28 15:00 KST = 06:00Z
window.NOTICE = {
  updated: "2026-10-21",
  kr: {
    eyebrow: "3on3 FreeStyle · 10/21 정기 점검", title: ["금주 ", "업데이트 안내"],
    lead: "금번 점검과 함께 확인하셔야 할 안내를 한 곳에 모았습니다.",
    secs: { deadline: "기한 안내", reward: "보상 · 환급", change: "변경 사항", issues: "확인된 이슈" },
    left: "남음", ended: "종료", d: "일", h: "시간", m: "분",
    foot: "앞으로도 이용자분들께서 불편을 겪지 않도록 최선을 다하겠습니다. 감사합니다.",
    issuesEmpty: "현재 확인된 이슈가 없습니다.", st: { checking: "확인 중", planned: "수정 예정", fixed: "수정 완료" },
    issues: [
      { status: "planned", date: "10/21", text: "카밀라의 일부 특성(티키타카, 공간 확보)에서 발동 조건을 충족하지 않았는데도 발동 버프 아이콘이 뜨는 현상이 발견되었습니다. 해당 현상은 추후에 수정될 예정입니다." },
      { status: "fixed", date: "10/21", text: "인벤토리 내 장착한 의상을 포함한 일부 의상이 노출되지 않던 현상이 수정되었습니다." }
    ],
    cards: [
      { sec: "deadline", title: "크루 토큰",
        desc: "크루 시스템 개편으로 매달 지급되던 크루 토큰 보상이 이번 시즌을 끝으로 종료됩니다. 보유 중인 토큰은 기간 내 모두 사용해 주세요.",
        big: { k: "사용 기간", v: "~ 11/18 16:00 KST", deadline: "2026-11-18T07:00:00Z" } },
      { sec: "deadline", title: "펫 관련 아이템",
        desc: "10/28 정기 점검에서 펫 시스템이 개편되며, 이후에는 아래 아이템을 사용하실 수 없습니다.",
        big: { k: "사용 기한", v: "~ 10/28 15:00 KST", deadline: "2026-10-28T06:00:00Z" },
        items: ["펫 등급 업 아이템", "펫 효과 변경 티켓", "펫 외형 변경 티켓", "펫 이름 변경 티켓"],
        note: "개편 이후 남은 아이템은 인벤토리에서 판매하실 수 있습니다." },
      { sec: "reward", title: "크루 시즌 보상 정산",
        desc: "현재 크루 시즌이 조기 종료되어, 이번 시즌 크루 토큰 보상을 금일까지의 기록 기준으로 정산합니다.",
        rows: [["지급", "금일 점검 중", 1]] },
      { sec: "reward", title: "PlayStation 한국 스토어 차액 환급",
        desc: "가격이 변동된 기간 동안 대상 상품을 구매하신 분께 차액을 포인트로 환급해 드립니다. 불편을 드려 죄송합니다.",
        rows: [["대상 기간", "10/6(화) 09:00 ~ 10/21(수) 15:59 KST"], ["지급", "금일 점검 중", 1]],
        lbl: "환급 포인트 (상품 1개 구매당)",
        grid2: [["1,100 포인트", "190 P"], ["550 포인트", "220 P"], ["270 포인트", "70 P"], ["155 포인트", "50 P"], ["얼티밋 포인트 번들", "190 P"], ["프리미엄 포인트 번들", "90 P"], ["올타임 마스터 패스", "50 P"]] },
      { sec: "change", title: "캐릭터 특성 개선", wide: true,
        desc: "일부 캐릭터의 특성이 더욱 효과적으로 발동되도록 개선되었습니다.",
        chars: [["워커", "보디가드"], ["미카", "앵콜, 팬 서비스"], ["루더", "골밑의 제왕"], ["진저", "찬스메이커"]],
        note: "함께 수정: <b>제네사 '모드 강화'</b>의 3점슛 속도 및 원거리 덩크 모션 속도 증가 효과가 정상 적용됩니다." },
      { sec: "change", title: "펫 상점", wide: true,
        desc: "실버 · 골드 · 플래티넘 켄넬은 10/28 펫 시스템 개편 이후 판매가 종료됩니다." }
    ]
  },
  en: {
    eyebrow: "3on3 FreeStyle · 10/21 Scheduled Maintenance", title: ["Weekly ", "Update Notice"],
    lead: "Everything you need to know with this maintenance, all in one place.",
    secs: { deadline: "Deadlines", reward: "Rewards", change: "Changes", issues: "Known Issues" },
    left: "left", ended: "Ended", d: "d", h: "h", m: "m", foot: "Thank you.",
    issuesEmpty: "There are no known issues at this time.", st: { checking: "Investigating", planned: "Fix Scheduled", fixed: "Fixed" },
    issues: [
      { status: "planned", date: "10/21", text: "The activation buff icon of some of CAMILA's skills (TIKI-TAKA, FREE UP SPACE) appears even when their activation conditions have not been met. This issue will be fixed in a future update." },
      { status: "fixed", date: "10/21", text: "Fixed an issue where some costumes, including equipped costumes, were not displayed in the inventory." }
    ],
    cards: [
      { sec: "deadline", title: "Crew Tokens",
        desc: "With the Crew System Renewal, monthly Crew Token rewards end with this season. Please use all of your Crew Tokens within the period.",
        big: { k: "Usage Period", v: "~ 11/17 23:00 PST", deadline: "2026-11-18T07:00:00Z" } },
      { sec: "deadline", title: "Pet-related Items",
        desc: "The Pet System Renewal takes place during the 10/28 maintenance. After that, the items below can no longer be used.",
        big: { k: "Deadline", v: "~ 10/27 23:00 PDT", deadline: "2026-10-28T06:00:00Z" },
        items: ["Pet Prestige Up Item", "Pet Skill Change Ticket", "Pet Appearance Change Ticket", "Rename Ticket"],
        note: "Remaining items can be sold from your inventory after the renewal." },
      { sec: "reward", title: "Crew Season Rewards", wide: true,
        desc: "The current Crew Season ends early, so this season's Crew Token rewards are settled based on your records up to today.",
        rows: [["Distribution", "During today's maintenance", 1]] },
      { sec: "change", title: "Character Skill Improvements", wide: true,
        desc: "Some character skills have been improved to activate more effectively.",
        chars: [["WALKER", "Bodyguard"], ["MIKA", "Encore, Fan Service"], ["LUTHER", "The King Under the Basket"], ["GINGER", "Chance Maker"]],
        note: "Also fixed: the 3-point shot speed and Long Distance Dunk motion speed effects of <b>GENESA's 'Mode Reinforce'</b> are now properly applied." },
      { sec: "change", title: "Pet Shop", wide: true,
        desc: "Silver, Gold and Platinum Kennels will no longer be sold after the 10/28 Pet System Renewal." }
    ]
  },
  jp: {
    eyebrow: "3on3 FreeStyle · 10/21 定期メンテナンス", title: ["今週の", "アップデート"],
    lead: "今回のメンテナンスとあわせてご確認いただきたいご案内をまとめました。",
    secs: { deadline: "期限のご案内", reward: "報酬", change: "変更点", issues: "確認されている不具合" },
    left: "残り", ended: "終了", d: "日", h: "時間", m: "分", leftFirst: true, foot: "ありがとうございます。",
    issuesEmpty: "現在確認されている不具合はありません。", st: { checking: "確認中", planned: "修正予定", fixed: "修正済み" },
    issues: [
      { status: "planned", date: "10/21", text: "カミラの一部スキル（ティキタカ、空間確保）において、発動条件を満たしていないにもかかわらず発動バフアイコンが表示される現象が確認されました。本現象は今後修正される予定です。" },
      { status: "fixed", date: "10/21", text: "インベントリで、装着中の衣装を含む一部の衣装が表示されない問題を修正いたしました。" }
    ],
    cards: [
      { sec: "deadline", title: "クルートークン",
        desc: "クルーシステム改編により、毎月配布していたクルートークン報酬は今シーズンをもって終了します。お持ちのトークンは期間内にすべてご使用ください。",
        big: { k: "使用期間", v: "～ 11/18 16:00 KST", deadline: "2026-11-18T07:00:00Z" } },
      { sec: "deadline", title: "ペット関連アイテム",
        desc: "10/28の定期メンテナンスでペットシステムが改編され、以降は下記のアイテムをご使用いただけなくなります。",
        big: { k: "使用期限", v: "～ 10/28 15:00 KST", deadline: "2026-10-28T06:00:00Z" },
        items: ["ペットランクアップアイテム", "ペット効果変更チケット", "ペットの外見変更チケット", "ペットの名前変更チケット"],
        note: "改編後に残ったアイテムは、インベントリで売却できます。" },
      { sec: "reward", title: "クルーシーズン報酬の精算", wide: true,
        desc: "現在のクルーシーズンが早期終了となるため、今シーズンのクルートークン報酬を本日までの記録をもとに精算します。",
        rows: [["配布", "本日のメンテナンス中", 1]] },
      { sec: "change", title: "キャラクタースキル改善", wide: true,
        desc: "一部キャラクターのスキルがより効果的に発動するよう改善されました。",
        chars: [["ウォーカー", "ボディーガード"], ["ミカ", "アンコール、ファンサービス"], ["ルーサー", "ゴールポストの帝王"], ["ジンジャー", "チャンスメーカー"]],
        note: "あわせて修正：<b>ジェネーザ「モード強化」</b>の3ポイントシュート速度およびロングダンクのモーション速度増加効果が正常に適用されます。" },
      { sec: "change", title: "ペットショップ", wide: true,
        desc: "シルバー・ゴールド・プラチナケンネルは、10/28のペットシステム改編後に販売終了となります。" }
    ]
  }
};
