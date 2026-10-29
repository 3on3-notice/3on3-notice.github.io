// 공지 내용. 나중엔 구글 시트에서 읽어 오도록 바꾼다. 언어별로 칸 구성이 다를 수 있다.
// 칸은 sec(주제)로 묶는다: deadline 기한 / reward 보상·환급 / change 변경 사항. issues 는 확인된 이슈.
// deadline 은 UTC ISO. 토큰 11/18 16:00 KST = 07:00Z
// 10/28 출처: 10/28 정기 점검 공지, 커리어 모드 펫 이미지 공지, 베스트 셀러 팬 박스 구성품 변경 공지, 펫 퀵 가이드
// 이벤트·신상품(로그인·접속 유지·쇼핑 스프리·5성 완성 DLC·카드팩)은 배너·공지 몫이라 칸에 넣지 않는다. 토큰 기한은 아직 남아 이어 둔다.
window.NOTICE = {
  updated: "2026-10-29",
  kr: {
    eyebrow: "3on3 FreeStyle · 10/28 정기 점검", title: ["금주 ", "업데이트 안내"],
    lead: "금번 점검과 함께 확인하셔야 할 안내를 한 곳에 모았습니다.",
    secs: { deadline: "기한 안내", reward: "보상 · 환급", change: "변경 사항", issues: "확인된 이슈" },
    left: "남음", ended: "종료", d: "일", h: "시간", m: "분",
    foot: "앞으로도 이용자분들께서 불편을 겪지 않도록 최선을 다하겠습니다. 감사합니다.",
    issuesEmpty: "현재 확인된 이슈가 없습니다.", st: { checking: "확인 중", planned: "수정 예정", fixed: "수정 완료" }, added: "추가", dl: { found: "확인일", fixed: "수정일" },
    issues: [
      { status: "planned", date: "10/28", text: "게임 - 커리어 모드 - 펫 라인업에서 장착한 펫의 이미지가 노출되지 않는 현상이 발견되었습니다. 펫 효과는 정상적으로 적용되며, 장착한 펫은 펫 라인업 화면 오른쪽의 텍스트로 확인하실 수 있습니다. 해당 현상은 차주 점검 시 수정될 예정입니다." },
      { status: "planned", date: "10/21", text: "카밀라의 일부 특성(티키타카, 공간 확보)에서 발동 조건을 충족하지 않았는데도 발동 버프 아이콘이 뜨는 현상이 발견되었습니다. 해당 현상은 추후에 수정될 예정입니다." }
    ],
    cards: [
      { sec: "deadline", title: "토큰",
        desc: "크루 시스템 개편으로 매달 지급되던 토큰 보상이 이번 시즌을 끝으로 종료됩니다. 보유 중인 토큰은 기간 내 모두 사용해 주세요.",
        big: { k: "사용 기간", v: "~ 11/18 16:00 KST", deadline: "2026-11-18T07:00:00Z" },
        add: [{ date: "10/22", text: "아케이드 모드 랭킹 보상에 포함된 토큰도 코인으로 교체됩니다." }] },
      { sec: "reward", title: "이벤트 보상 지급",
        desc: "아래 이벤트의 보상이 지급되었습니다.",
        items: ["바스키 콜렉트 이벤트", "카밀라 초월 미션"],
        rows: [["지급", "10/28 점검 중", 1]] },
      { sec: "change", title: "펫 시스템 개편", wide: true,
        desc: "펫 시스템이 새롭게 개편되었습니다. 등급·능력·입양·조합 등 달라진 내용은 펫 가이드에서 한눈에 확인하실 수 있습니다.",
        rows: [["기존 위치", "매니지먼트 › 펫"], ["변경 위치", "캐릭터 › 캐릭터 선택 › 펫", 1]],
        note: "업데이트 이후 모든 펫의 장착이 해제되어 있으니, 새로운 메뉴에서 펫을 다시 장착해 주시기 바랍니다.",
        link: { text: "펫 가이드 보기", href: "https://3on3-notice.github.io/pet/?lang=kr" } },
      { sec: "change", title: "베스트 셀러 팬 박스 구성품 변경", wide: true,
        desc: "펫 시스템 개편에 따라 베스트 셀러 팬 박스의 기존 펫 보상이 아래와 같이 변경되었습니다.",
        swap: [{ g: "플래티넘", rows: [["토끼 우주인 UFO", "페이 구미호 헤어"], ["캔디 피냐타", "구미호 의상"], ["화이트 로봇청소기", "구미호 꼬리"]] },
               { g: "골드", rows: [["골드 펫 뽑기 티켓", "10000 코인"], ["펫 효과 변경 티켓", "선택형 능력 카드 실버 박스 티켓 x5"]] }],
        note: "이미 이벤트를 진행 중인 분들께도 동일하게 적용되며, 획득 확률은 변경되지 않습니다." },
      { sec: "change", title: "포인트 2배 기회 초기화",
        desc: "550 포인트를 2회 구매하시면, 다음 1,100 포인트 구매 시 2배 혜택을 다시 받으실 수 있습니다.",
        note: "이미 1,100 포인트 2배 혜택을 받으신 분만 해당되며, 기존 진행도는 초기화되지 않습니다." },
      { sec: "change", title: "로코 실속 팩",
        desc: "로코 실속 팩의 판매가 종료되었습니다." },
      { sec: "change", title: "버그 수정 및 기능 개선", wide: true,
        list: ["캐릭터/크루 메뉴 최적화", "로비플레이 캐릭터 체험 8성 재능 적용"] }
    ]
  },
  en: {
    eyebrow: "3on3 FreeStyle · 10/28 Scheduled Maintenance", title: ["Weekly ", "Update Notice"],
    lead: "Everything you need to know with this maintenance, all in one place.",
    secs: { deadline: "Deadlines", reward: "Rewards", change: "Changes", issues: "Known Issues" },
    left: "left", ended: "Ended", d: "d", h: "h", m: "m", foot: "Thank you.",
    issuesEmpty: "There are no known issues at this time.", st: { checking: "Investigating", planned: "Fix Scheduled", fixed: "Fixed" }, added: "Added", dl: { found: "Reported", fixed: "Fixed on" },
    issues: [
      { status: "planned", date: "10/28", text: "We have found an issue where the image of your equipped pet is not displayed in Game > Career Mode > Pet Lineup. Pet effects are applied normally, and you can check which pet you have equipped in the text on the right side of the Pet Lineup screen. This issue will be fixed during next week's maintenance." },
      { status: "planned", date: "10/21", text: "The activation buff icon of some of CAMILA's skills (TIKI-TAKA, FREE UP SPACE) appears even when their activation conditions have not been met. This issue will be fixed in a future update." }
    ],
    cards: [
      { sec: "deadline", title: "Tokens",
        desc: "With the Crew System Renewal, monthly Token rewards end with this season. Please use all of your Tokens within the period.",
        big: { k: "Usage Period", v: "~ 11/17 23:00 PST", deadline: "2026-11-18T07:00:00Z" },
        add: [{ date: "10/22", text: "Tokens included in Arcade Mode ranking rewards will also be replaced with Coins." }] },
      { sec: "reward", title: "Event Reward Distribution",
        desc: "Rewards for the events below have been distributed.",
        items: ["Basky Collect Event", "CAMILA Intensive Mission"],
        rows: [["Distribution", "During the 10/28 maintenance", 1]] },
      { sec: "change", title: "Pet System Renewal", wide: true,
        desc: "The Pet System has been renewed. See the Pet Guide for everything that has changed, including grades, abilities, adoption and combination.",
        rows: [["Before", "Management › Pet"], ["Now", "Characters › Select Character › Pet", 1]],
        note: "All pets have been unequipped with this update. Please equip your pets again in the new menu.",
        link: { text: "View Pet Guide", href: "https://3on3-notice.github.io/pet/?lang=en" } },
      { sec: "change", title: "Best Seller Fan Box Item Change", wide: true,
        desc: "With the Pet System Renewal, the pet rewards in the Best Seller Fan Box have been changed as follows.",
        swap: [{ g: "Platinum", rows: [["Rabbit Alien UFO", "Fei's Nine-tailed Fox Hair"], ["Candy Pinata", "Nine-tailed Fox Outfit"], ["White Robot Cleaner", "Nine-tailed Fox Tail"]] },
               { g: "Gold", rows: [["Gold Pet Adoption Ticket", "10000 Coins"], ["Pet Skill Change Ticket", "Selectable Ability Card Silver Box Ticket x5"]] }],
        note: "This change also applies to players who are already participating in the event, and the draw rates remain the same." },
      { sec: "change", title: "Point Double Bonus Reset",
        desc: "Buy 550 Points twice to unlock double points on your next 1,100 Point purchase.",
        note: "Applies only to those who have already received the 1,100 Point double bonus. Your existing progress will not be reset." },
      { sec: "change", title: "Loco Value Pack",
        desc: "Sales of the Loco Value Pack have ended." },
      { sec: "change", title: "Bug Fixes & Improvements", wide: true,
        list: ["Optimized the Character/Crew menu", "Applied P8 Talents to the character trial in Lobby Play"] }
    ]
  },
  jp: {
    eyebrow: "3on3 FreeStyle · 10/28 定期メンテナンス", title: ["今週の", "アップデート"],
    lead: "今回のメンテナンスとあわせてご確認いただきたいご案内をまとめました。",
    secs: { deadline: "期限のご案内", reward: "報酬", change: "変更点", issues: "確認されている不具合" },
    left: "残り", ended: "終了", d: "日", h: "時間", m: "分", leftFirst: true, foot: "ありがとうございます。",
    issuesEmpty: "現在確認されている不具合はありません。", st: { checking: "確認中", planned: "修正予定", fixed: "修正済み" }, added: "追加", dl: { found: "確認日", fixed: "修正日" },
    issues: [
      { status: "planned", date: "10/28", text: "ゲーム - キャリアモード - ペットラインアップにて、装着中のペットの画像が表示されない現象が確認されました。ペットの効果は正常に適用され、装着中のペットはペットラインアップ画面右側のテキストでご確認いただけます。本現象は次回の定期メンテナンスにて修正される予定です。" },
      { status: "planned", date: "10/21", text: "カミラの一部スキル（ティキタカ、空間確保）において、発動条件を満たしていないにもかかわらず発動バフアイコンが表示される現象が確認されました。本現象は今後修正される予定です。" }
    ],
    cards: [
      { sec: "deadline", title: "トークン",
        desc: "クルーシステム改編により、毎月配布していたトークン報酬は今シーズンをもって終了します。お持ちのトークンは期間内にすべてご使用ください。",
        big: { k: "使用期間", v: "～ 11/18 16:00 KST", deadline: "2026-11-18T07:00:00Z" },
        add: [{ date: "10/22", text: "アーケードモードのランキング報酬に含まれるトークンも、コインに置き換えられます。" }] },
      { sec: "reward", title: "イベント報酬の配布",
        desc: "下記イベントの報酬を配布いたしました。",
        items: ["バスキーコレクトイベント", "カミラ超越ミッション"],
        rows: [["配布", "10/28のメンテナンス中", 1]] },
      { sec: "change", title: "ペットシステムの改編", wide: true,
        desc: "ペットシステムが改編されました。等級・能力・入手・合成など変更内容は、ペットガイドでひと目でご確認いただけます。",
        rows: [["変更前", "マネジメント › ペット"], ["変更後", "キャラクター › キャラクター選択 › ペット", 1]],
        note: "アップデート後、すべてのペットの装着が解除されていますので、新しいメニューからペットを再度装着してください。",
        link: { text: "ペットガイドを見る", href: "https://3on3-notice.github.io/pet/?lang=jp" } },
      { sec: "change", title: "ベストセラー ファンボックスの構成品変更", wide: true,
        desc: "ペットシステムの改編に伴い、ベストセラー ファンボックスのペット報酬が下記のとおり変更されました。",
        swap: [{ g: "プラチナ", rows: [["ウサギの宇宙飛行士UFO", "ペイ九尾の狐ヘア"], ["キャンディピニャータ", "九尾の狐衣装"], ["ホワイトロボット掃除機", "九尾の狐のしっぽ"]] },
               { g: "ゴールド", rows: [["ゴールドペット養子縁組チケット", "10000コイン"], ["ペット効果変更チケット", "選択式能力カードシルバーボックスチケット x5"]] }],
        note: "すでにイベントを進行中の方にも同様に適用され、獲得確率に変更はありません。" },
      { sec: "change", title: "ポイント2倍チャンスリセット",
        desc: "550ポイントを2回購入すると、次回1,100ポイント購入時のポイント2倍チャンスがリセットされます。",
        note: "すでに1,100ポイントの2倍特典を受けた方のみ対象で、既存の進行状況はリセットされません。" },
      { sec: "change", title: "ロコお得パック",
        desc: "ロコお得パックの販売は終了しました。" },
      { sec: "change", title: "バグ修正および機能改善", wide: true,
        list: ["キャラクター/クルーメニューの最適化", "ロビープレイのキャラクター体験に8星の才能を適用"] }
    ]
  }
};
