window.NOTICE = {
  updated: "2026-10-28",
  kr: {
    site: "펫 가이드", ribbon: "2026/10/28 업데이트", title: "펫 시스템 개편",
    lead: "새로워진 펫, 어디서 찾고 어떻게 키우는지 한 곳에서 확인하세요.",
    ended: "종료", foot: "앞으로도 이용자분들께서 불편을 겪지 않도록 최선을 다하겠습니다. 감사합니다.",
    st: { checking: "확인 중", planned: "수정 예정", fixed: "수정 완료" }, dl: { found: "확인일", fixed: "수정일" },
    issuesLabel: "확인된 이슈", issuesEmpty: "현재 확인된 이슈가 없습니다.",
    issues: [],
    ui: {
      search: "펫 이름·능력 검색", all: "전체", unit: "종",
      grade: { P: "플래티넘", G: "골드", S: "실버", B: "브론즈" },
      unique: "고유 능력", maxLv: "만렙", sub: "서브 능력", subUp: "서브 강화", feedExp: "재료 경험치", how: "얻는 방법",
      subsCan: "이 등급에 붙을 수 있는 서브 능력 {n}종 · 초기 수치", prev: "이전", next: "다음", close: "닫기", none: "없음", photo: "사진 준비 중", legacyPhoto: "※ 사진 속 펫은 개편 전부터 가지고 있던 펫이라, 기존 능력이 고유 능력으로 표시됩니다. 새로 얻는 펫의 고유 능력은 펫 정보에서 확인할 수 있습니다.", issues: "확인된 이슈",
      gradeInfo: {
        P: { sub: "3칸 (Lv.3 · 6 · 9 해금)", up: "Lv.12 · 15", how: "<b>골드 펫 조합</b>에 성공(25%)하면 얻을 수 있습니다." },
        G: { sub: "2칸 (Lv.3 · 6 해금)", up: "Lv.9", how: "<b>입양</b> 시 5% 확률(골드 15종 중 하나)로 나오거나, <b>실버 펫 조합</b>에 성공(40%)하면 얻을 수 있습니다." },
        S: { sub: "1칸 (Lv.3 해금)", up: "–", how: "<b>입양</b> 시 25% 확률(실버 4종 중 하나)로 나오거나, <b>브론즈 펫 조합</b>에 성공(60%)하면 얻을 수 있습니다." },
        B: { sub: "없음", up: "–", how: "<b>입양</b> 시 70% 확률(브론즈 6종 중 하나)로 나옵니다." } } },
    chapters: [
      { id: "overview", nav: "변경 펫 개요", title: "펫 시스템이 이렇게 바뀌었어요", q: "조건 없이 바로 발동하고, 키울수록 강해지고, 능력을 더 많이 장착할 수 있어요. 핵심 변경점 5가지를 먼저 확인해 보세요.",
        blocks: [
          {"type": "keys", "items": [["발동 조건 삭제", "장착만 하면 능력 상시 적용"], ["레벨업 성장", "레벨이 오를수록 고유 능력 상승"], ["서브 능력 최대 3개", "고유 능력 + 서브 능력 3개 장착"], ["펫 입양", "코인 · 포인트 모두 가능, 확률 동일"], ["펫 조합", "코인 · 포인트 모두 가능, 조합으로 플래티넘 펫 획득"]]},
          {"type": "compare", "eyebrow": "AT A GLANCE", "label": "기존 펫 vs 변경 펫 한눈에 보기", "head": ["구분", "기존 펫", "변경 펫"], "rows": [["능력 발동", "인게임 조건 충족 시에만 발동", "조건 없이 상시 적용"], ["능력 개수", "효과 1개", "고유 능력 1개 + 서브 능력 최대 3개"], ["능력 맞추기", "펫 효과 변경 티켓으로 원하는 효과에 맞춤", "펫마다 고유 능력 보유, 레벨업마다 수치 상승"], ["서브 능력", "없음", "등급별 범위에서 무작위로 부여, 펫 레벨에 따라 해금 및 수치 추가 상승"], ["획득처", "실버 · 골드 · 플래티넘 켄넬", "캐릭터 › 펫 › 펫 입양"], ["뽑기 재화", "켄넬별 지정 재화", "코인 · 포인트 모두 가능, 확률 동일"], ["플래티넘 획득", "골드 · 플래티넘 켄넬에서 확률 획득", "펫 조합으로 획득"]]} ] },

      { id: "where", nav: "펫 위치", title: "펫은 어디에 있나요?", q: "기존에 매니지먼트에서 이용하던 펫을 이제 캐릭터 메뉴에서 이용할 수 있습니다.",
        blocks: [
          { type: "steps", items: [
            ["캐릭터", "펫은 캐릭터 메뉴에서 확인할 수 있습니다. 로비 메뉴에서 캐릭터를 누릅니다.", "lobby"],
            ["펫", "펫을 장착할 캐릭터의 상세 페이지에서 펫 메뉴를 선택합니다.", "character"],
            ["펫 라인업", "펫 선택하기를 눌러 펫을 장착합니다.", "lineup"] ],
            before: "기존 위치: 매니지먼트 › 펫",
            note: "다른 캐릭터에 펫을 장착하려면 뒤로 버튼을 눌러 다른 캐릭터를 선택하거나, 상단 메뉴에서 캐릭터를 변경하세요." },
          { type: "alert", text: "<b>업데이트 이후 모든 펫의 장착이 해제되어 있습니다.</b> 펫 라인업에서 펫을 다시 장착해 주세요." },
          { type: "menu", label: "펫 메뉴 구성", items: [
            ["펫 라인업", "PET LINEUP", "캐릭터가 장착한 펫의 정보를 확인하고 레벨업할 수 있습니다."],
            ["펫 입양", "ADOPT PET", "코인 · 포인트 · 티켓으로 신규 펫을 뽑을 수 있습니다.", "system"],
            ["펫 하우스", "PET HOUSE", "현재 보유한 모든 펫을 확인하고, 장착 · 트레이닝 · 잠금 · 이별하기를 할 수 있습니다.", "system"],
            ["펫 조합", "PET COMBINATION", "보유한 펫을 조합하여 상위 등급 펫 획득에 도전할 수 있습니다.", "system"] ] } ] },

      { id: "system", nav: "펫 시스템 설명", title: "펫 시스템은 어떻게 되어 있나요?", q: "펫 메뉴의 각 화면에서 할 수 있는 것을 확인하세요.",
        blocks: [
          { type: "facts", label: "펫 라인업 — 이 캐릭터의 펫", photo: "lineup", marks: [[75.9, 25.0], null, [19.5, 86.5], null],
            text: "펫 라인업은 캐릭터가 장착한 펫의 정보를 확인하고 레벨업할 수 있는 공간입니다.", items: [
            ["화면 구성", "장착한 펫의 이름 · 등급 · 레벨 · 경험치와 고유 능력 · 서브 능력 수치를 확인할 수 있습니다. 아직 해금되지 않은 서브 능력 칸에는 해금 레벨이 표시됩니다."],
            ["펫 선택하기", "장착한 펫이 없으면 펫 선택하기로 펫 하우스에 가서 고르면 바로 장착됩니다. 보유한 펫이 없으면 펫 입양 버튼이 나옵니다."],
            ["펫 해제", "장착한 펫을 빼는 펫 해제에는 포인트가 필요합니다."],
            ["다른 캐릭터의 펫", "다른 캐릭터가 장착 중인 펫은 장착할 수 없습니다."] ] },
          { type: "bars", label: "펫 입양 — 신규 펫 뽑기", photo: "adopt",
            text: "펫 입양은 신규 펫을 뽑을 수 있는 영역입니다. 1회 뽑기와 10회 뽑기가 존재하며, 10회 뽑기는 포인트와 코인 중 하나를 선택해 뽑을 수 있습니다(코인 1회 2,000 · 10회 20,000 / 포인트 10회 10 포인트). 골드 펫 뽑기 티켓(1회 1장 · 10회 10장)으로도 입양할 수 있습니다.<br>펫 입양에서는 확률에 따라 브론즈/실버/골드 펫을 획득할 수 있습니다. 코인 · 포인트 · 티켓 어느 것으로 뽑아도 확률은 같고, 같은 등급의 펫은 모두 같은 확률로 나옵니다. 결과는 바로 표시되며, 아래 버튼으로 확률 페이지를 볼 수 있습니다.",
            items: [["브론즈", 70, "6종"], ["실버", 25, "4종"], ["골드", 5, "15종"], ["플래티넘", 0, ""]],
            note: ["펫 입양 위치: 캐릭터 › 펫 › 펫 입양. 기존 실버 · 골드 · 플래티넘 켄넬은 종료되었습니다.", "플래티넘 펫은 입양에서 나오지 않으며, 펫 조합으로 획득할 수 있습니다."] },
          { type: "facts", label: "펫 하우스 — 보유한 펫 관리", photo: "house", marks: [[22.3, 27.8], null],
            text: "펫 하우스는 현재 보유한 모든 펫을 확인할 수 있는 영역입니다.", items: [
            ["목록", "장착 중인 펫에는 장착한 캐릭터 얼굴이 표시되고, 필터로 등급별로 볼 수 있습니다."],
            ["장착 · 해제", "선택한 펫을 지금 캐릭터에 장착하거나 해제합니다. 다른 캐릭터가 장착 중인 펫은 트레이닝만 할 수 있습니다."] ] },
          {"type": "facts", "label": "펫 하우스 확장", "photo": "house_expand", "marks": [[20.3, 21.0], [55.0, 21.0], null, null], "items": [["보유 · 칸 수", "화면 위 CURRENT PET에 보유한 펫 수와 칸 수가 표시됩니다. 펫 하우스는 기본 200칸입니다."], ["확장 버튼", "PET HOUSE EXPANSION 버튼에 다음 확장으로 늘어나는 칸 수(20칸)와 비용이 표시됩니다. 누르면 확인 창이 나오고, 확장하면 20칸이 늘어납니다(예: 60/200 → 60/220)."], ["비용", "1~5단계 20 포인트 · 6~10단계 30 포인트 · 11~15단계 40 포인트"], ["최대", "15단계까지 확장해 최대 500칸"]]},
          { type: "facts", label: "이별하기 — 펫 판매", photo: "dismiss_btn", marks: [[27.1, 89.3], null, [36.4, 89.3], null], items: [
            ["이별하기 버튼", "하단의 이별하기 버튼으로 원하는 펫을 판매할 수 있습니다."],
            ["받는 코인", "판매 시 코인을 획득할 수 있습니다. 획득하는 코인은 펫 등급별로 다르며(브론즈 100 · 실버 300 · 골드 1,500 · 플래티넘 10,000 코인), 판매 시 나타나는 팝업에서도 확인할 수 있습니다."],
            ["모두 선택", "모두 선택으로 여러 마리를 한 번에 판매할 수 있습니다."],
            ["판매할 수 없는 펫", "장착 중이거나 잠근 펫은 판매할 수 없으며, 판매한 펫은 다시 쓸 수 없습니다."] ] },
          { type: "facts", label: "잠금 — 아끼는 펫 보호", photo: "lock", marks: [[12.4, 87.9], [32.0, 27.5]], items: [
            ["잠금 버튼", "하단의 잠금 버튼으로 현재 선택한 펫을 잠그거나 잠금 해제할 수 있습니다."],
            ["안전장치", "잠금 기능은 잠긴 펫이 일괄 판매되거나, 성장 재료로 소모되거나, 조합 재료에 포함되지 않도록 막아 주는 안전장치입니다. 잠긴 펫에는 자물쇠 표시가 붙으며, 잠가도 장착은 할 수 있습니다."] ] },
          { type: "facts", label: "펫 성장 — 트레이닝 버튼", photo: "training_entry", marks: [[36.5, 64.4], [92.8, 63.8]],
            text: "펫 성장은 펫 라인업 또는 펫 하우스에서 트레이닝 버튼을 눌러 진행할 수 있습니다. 우측 하단의 트레이닝 버튼을 누르면 해당 펫을 성장시킬 수 있는 화면으로 이동합니다.", items: [
            ["펫 라인업에서", "트레이닝을 누르면 현재 캐릭터가 장착한 펫을 성장시킬 수 있습니다."],
            ["펫 하우스에서", "트레이닝을 누르면 선택한 펫을 성장시킬 수 있습니다. 장착하지 않은 펫도 성장시킬 수 있습니다."] ] },
          { type: "facts", label: "트레이닝 화면 — 다른 펫을 재료로 레벨업", photo: "pet_detail", marks: [[18.6, 36.5], [65.4, 22.3], [18.0, 89.4], [70.2, 68.6], null, null, null],
            text: "트레이닝 버튼을 누르면 나타나는 화면입니다.", items: [
            ["레벨 · 고유 능력 · 서브 능력", "좌측에서 순서대로 레벨, 고유 능력, 서브 능력을 확인할 수 있습니다. 레벨은 성장시킬 펫의 현재 레벨입니다."],
            ["재료 목록", "우측은 펫을 성장시키기 위해 재료로 사용할 수 있는 펫을 리스트 형태로 보여주는 영역입니다. 우측에서 펫을 선택하면 해당 펫이 재료로 지정되며, 잠긴 펫은 선택할 수 없습니다. 장착 중인 펫도 재료로 쓸 수 없습니다."],
            ["재료 잠금", "재료 펫도 하단 버튼으로 잠그거나 잠금 해제할 수 있습니다."],
            ["자동 선택", "원하는 레벨까지 성장시키는 데 필요한 재료 펫을 자동으로 선택해 주는 편의 기능입니다. 낮은 등급 · 낮은 레벨부터 선택되며, 하나씩 뺄 수도 있습니다."],
            ["재료 비용 · 경험치", "재료 1마리당 100 코인이 들며, 재료로 쓴 펫의 등급에 따라 경험치 브론즈 10 · 실버 20 · 골드 50 · 플래티넘 200을 얻습니다."],
            ["키운 펫을 재료로", "기본 경험치에 그 펫에 투자된 경험치의 3%가 더해집니다."],
            ["만렙 초과분", "최대 레벨을 넘는 경험치는 적용되지 않습니다."] ] },
          { type: "facts", label: "서브 능력 등장 — 등급별 서브 능력 목록", photo: "subs", marks: [[5.5, 24.4], [79.7, 27.0]],
            text: "성장 페이지에서 서브 능력 등장 버튼을 누르면 등장할 수 있는 모든 서브 능력을 확인할 수 있습니다.", items: [
            ["등급별 목록", "해당 페이지에서는 펫 등급별로 등장할 수 있는 서브 능력을 확인할 수 있습니다. 예를 들어 플래티넘 펫을 성장시키는 중에 하단의 서브 능력 등장 버튼을 누르면, 플래티넘 등급에서 등장하는 서브 능력을 확인할 수 있습니다."],
            ["초기 수치", "목록의 수치는 초기 수치로, 슬롯 해금 시 적용되며 강화하면 수치가 상승합니다."] ] },
          { type: "facts", label: "펫 조합 — 같은 등급끼리 합쳐 상위 등급에 도전", photo: "combination", marks: [[20.7, 34.6], [65.5, 33.0], [79.3, 76.6], [64.3, 57.1], [26.7, 88.9]],
            text: "펫 조합에서는 보유한 펫을 조합하여 상위 등급 펫 획득에 도전할 수 있습니다.", items: [
            ["같은 등급끼리", "조합은 동일한 등급의 펫끼리만 가능합니다. 장착 중인 펫은 목록에 나오지 않습니다."],
            ["조합 슬롯", "조합할 펫을 선택한 뒤 처음 선택한 펫과 같은 등급의 펫을 조합 슬롯에 넣습니다."],
            ["필요한 재화", "슬롯에 넣으면 우측 하단에서 조합에 필요한 재화를 확인할 수 있습니다."],
            ["출현 확률", "재료를 다 채우면 결과로 나올 수 있는 등급과 확률이 표시됩니다."],
            ["일괄 조합", "등급을 골라 한 번에 조합하며, 낮은 등급부터 진행됩니다. 레벨이 낮은 펫부터 쓰고, 묶음(코인 5마리 · 포인트 2마리)을 채우지 못한 펫은 남습니다. 한 번에 최대 200마리까지 사용할 수 있습니다(코인 조합 최대 40회 · 포인트 조합 최대 100회)."] ] },
          { type: "facts", label: "사용 재화 변경 — 코인 · 포인트", photo: "combination_point", marks: [[83.6, 65.8], [72.1, 36.6], [82.4, 77.2]], items: [
            ["사용 재화 변경 버튼", "사용 재화 변경 버튼으로 조합에 사용할 재화를 바꿀 수 있습니다. 재화를 바꿔도 상위 등급 확률은 같습니다."],
            ["필요한 펫 수", "포인트로 조합하면 같은 등급의 펫이 2마리만 필요하지만, 코인으로 조합하면 5마리가 필요합니다."],
            ["비용", "필요한 마리 수와 함께 비용도 바뀝니다. 등급별 비용은 아래 표에서 확인할 수 있습니다."] ] },
          {"type": "table", "label": "펫 조합 확률 · 비용", "head": ["재료 등급", "상위 등급 확률", "코인 조합", "포인트 조합"], "rows": [["브론즈", "60%", "5마리 + 2,500 코인", "2마리 + 2 포인트"], ["실버", "40%", "5마리 + 4,000 코인", "2마리 + 4 포인트"], ["골드", "25%", "5마리 + 10,000 코인", "2마리 + 10 포인트"], ["플래티넘", "–", "5마리 + 10,000 코인", "2마리 + 10 포인트"]], "note": "재료로 쓴 펫은 모두 사라지고 새 펫 1마리가 Lv.1로 나옵니다. 성공하면 한 등급 위, 실패하면 같은 등급의 펫이 무작위로 나옵니다. 플래티넘끼리 조합하면 항상 플래티넘이 나오고 종류만 무작위로 정해집니다."} ] },

      { id: "ability", nav: "펫 능력 설명", title: "펫 능력은 어떻게 되어 있나요?", q: "고유 능력과 서브 능력이 어떻게 적용되고, 키울수록 어떻게 강해지는지 확인하세요.",
        blocks: [
          {"type": "duo", "eyebrow": "능력 발동", "label": "조건을 채울 필요가 없어요", "before": {"tag": "기존 펫", "flow": ["인게임 조건 충족", "효과 발동"], "note": "조건 미충족 시 효과 없음 → 경기 상황에 따라 효과를 못 받는 경우 발생"}, "after": {"tag": "변경 펫", "flow": ["펫 장착", "능력 상시 적용"], "check": "발동 조건 없음"}, "alert": "<b>이미 보유한 기존 펫도 동일하게 적용돼요.</b> 별도 작업 없이 모든 펫의 발동 조건이 사라져요."},
          { type: "facts", items: [
            ["등급", "브론즈 · 실버 · 골드 · 플래티넘 4단계. 등급이 높을수록 만렙과 서브 능력 개수가 늘어납니다."],
            ["고유 능력", "펫마다 다르며, 레벨업할 때마다 능력치가 상승합니다."],
            ["서브 능력", "특정 레벨에 도달하면 해금되는 특수 능력이며, 등급에 따라 서브 능력 개수가 다릅니다. 펫을 얻을 때 개수만큼 정해지고 해금되면 공개되어 적용되며, 한 펫에 같은 서브 능력이 두 번 붙지 않습니다."],
            ["서브 강화", "서브 능력이 모두 해금된 뒤 펫을 더 성장시키면, 특정 레벨에서 서브 능력 중 1개가 무작위로 강화됩니다. 플래티넘은 같은 서브 능력이 두 번 강화될 수 있습니다."], ["등급별 상승", "서브 능력의 처음 수치는 등급과 관계없이 같지만, 등급이 높을수록 강화 횟수가 많아 더 높게 오릅니다(실버 강화 없음 · 골드 Lv.9에 1회 · 플래티넘 Lv.12 · 15에 2회)."] ] },
          {"type": "table", "label": "등급별 한눈에 보기", "head": ["등급", "만렙", "서브 능력", "서브 해금", "서브 강화"], "rows": [["브론즈", "Lv.3", "0칸", "–", "–"], ["실버", "Lv.6", "1칸", "Lv.3", "–"], ["골드", "Lv.12", "2칸", "Lv.3 · 6", "Lv.9"], ["플래티넘", "Lv.15", "3칸", "Lv.3 · 6 · 9", "Lv.12 · 15"]]},
          {"type": "growth", "eyebrow": "능력 구조", "label": "키울수록 강해지고, 능력 칸이 늘어나요", "before": {"tag": "기존 펫", "k": "효과", "v": "효과 1개", "note": "효과는 1개뿐 · 원하는 효과는 펫 효과 변경 티켓으로 맞춰야 했음"}, "after": {"tag": "변경 펫", "pet": "블랙 사이버 드론", "lv": 8, "slots": [["고유 능력", "", "▲ 레벨업마다 상승"], ["서브 능력 1", "3점 슛 성공률", "Lv.3 해금"], ["서브 능력 2", "스틸 성공률", "Lv.6 해금"], ["서브 능력 3", "", "Lv.9 달성 시 해금"]]}, "roadmap": {"label": "레벨업 로드맵", "steps": [["Lv.1", "고유 능력 보유"], ["Lv.3", "서브 능력 1 해금"], ["Lv.6", "서브 능력 2 해금"], ["Lv.9", "서브 능력 3 해금"]], "note": "고유 능력 수치 — 레벨업할 때마다 상승"}, "note": "플래티넘 펫 예시이며, 서브 능력 종류는 예시입니다. 등급별 해금 · 강화 레벨은 위 표에서 확인할 수 있습니다."},
          {"type": "pools", "eyebrow": "서브 능력 등장 풀", "label": "등급이 높을수록 인기 스탯 위주로 등장해요", "tiers": {"S": "실버 · 전체 서브 능력 풀", "G": "골드 · 인기 스탯", "P": "플래티넘 · 최고 인기 스탯"}, "legend": [["S", "<b>실버</b> — 전체 서브 능력 중에서 무작위로 부여"], ["G", "<b>골드</b> — 인기 스탯 중에서 무작위로 부여"], ["P", "<b>플래티넘</b> — 그중 더 인기 있는 스탯 중에서 무작위로 부여"]], "foot": "⇒ 등급이 높을수록 풀이 좁아져 원하는 인기 스탯을 만날 가능성이 높아집니다."} ] },

      { id: "dex", nav: "펫 정보", title: "어떤 펫이 있나요?", q: "펫을 누르면 고유 능력과 얻는 방법을 볼 수 있습니다.",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "기존 펫 처리", title: "기존에 쓰던 펫과 아이템은 어떻게 되나요?", q: "개편 전에 가지고 있던 펫 · 아이템 · 보상이 어떻게 바뀌었는지 안내합니다.",
        blocks: [
          { type: "facts", label: "가지고 있던 펫", items: [
            ["종류 · 외형 · 등급", "그대로 유지됩니다."],
            ["레벨", "해당 등급의 최대 레벨이 됩니다."],
            ["능력", "개편 전에 가지고 있던 능력이 고유 능력 1개로 남으며, 서브 능력은 없습니다. 그래서 새로 얻는 같은 펫과 고유 능력이 다를 수 있습니다."],
            ["우편함 · 패키지 속 기존 펫", "받을 때 위와 같은 방식으로 바뀌어 지급됩니다."] ] } ] },

      { id: "events", nav: "한정 이벤트", title: "지금 어떤 이벤트가 진행 중인가요?", q: "10/28 업데이트와 함께 진행 중인 한정 이벤트를 모았습니다. 기간과 보상을 확인하고 참여해보세요!",
        blocks: [
          {"type": "event", "key": "pet_box", "label": "두근두근 플래티넘 펫 박스", "img": "img/events/pet_box_kr.jpg", "period": "10월 28일 - 11월 11일 16:59 KST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-11T07:59:00Z", "text": "26종의 플래티넘 펫 중 하나를 확정으로 획득하실 수 있습니다!<br>파격적인 가격으로 나만의 플래티넘 펫을 만나보세요!<br>누적 구매 보상도 놓치지 마세요!", "table": {"head": ["구매 개수", "보상", "수량"], "rows": [["2", "골드 펫 뽑기 티켓", "10"], ["4", "골드 펫 뽑기 티켓", "40"], ["6", "플래티넘 확정 펫 켄넬", "1"], ["8", "플래티넘 확정 펫 켄넬", "1"], ["10", "플래티넘 확정 펫 켄넬", "1"], ["12", "인기 플래티넘 펫 선택 상자", "1"]]}, "items": ["화이트 로봇청소기 10%", "캔디 피냐타 10%", "캐로봇 10%", "수비 코치 모노클 10%", "슈팅 코치 모노클 10%"], "note": "확률형 아이템입니다. 위 5종은 각 10%, 그 밖의 플래티넘 펫 21종은 각 2.38% 확률로 나옵니다."},
          {"type": "event", "key": "shopping_spree", "label": "쇼핑 스프리! 이벤트", "img": "img/events/shopping_spree_kr.jpg", "period": "10월 28일 - 11월 4일 16:59 KST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-04T07:59:00Z", "text": "이벤트 기간 동안 두근두근 플래티넘 펫 박스·펫 입양·펫 조합에 700P 이상 소비하면, 플래티넘 확정 펫 켄넬을 획득하실 수 있습니다!<br>지금 바로 참여해보세요!", "table": {"head": ["소비 포인트", "보상"], "rows": [["700P 이상", "플래티넘 확정 펫 켄넬 x1"]]}, "note": "보상은 11/4 점검 중 지급됩니다."} ] },

      { id: "faq", nav: "자주 묻는 질문", title: "자주 묻는 질문", q: "문의가 많은 내용을 모았습니다.",
        blocks: [
          { type: "faq", items: [
            ["기존에 갖고 있던 펫은 없어지나요? 능력은 그대로인가요?", "없어지지 않습니다. 기존 펫은 <b>등급과 외형이 그대로 유지</b>되고, 해당 등급의 <b>최대 레벨</b>이 됩니다. 자세한 내용은 '기존 펫 처리'에서 확인해 주세요."],
            ["서브 능력은 어떻게 정해지나요? 레벨을 올리면 오르나요?", "서브 능력은 <b>펫을 얻는 순간 칸 수만큼 정해지고</b>, 해금 레벨에 도달하면 공개되어 적용됩니다. 칸 수는 실버 1칸 · 골드 2칸 · 플래티넘 3칸이며 브론즈는 없습니다. 해금은 실버 Lv.3, 골드 Lv.3 · 6, 플래티넘 Lv.3 · 6 · 9입니다. <b>골드 Lv.9 · 플래티넘 Lv.12 · 15</b>에서는 열린 서브 능력 중 1개가 무작위로 강화됩니다(플래티넘은 같은 능력이 두 번 강화될 수도 있습니다). 한 펫에 같은 서브 능력은 두 번 붙지 않습니다."],
            ["고유 능력은 펫마다 정해져 있나요? 펫 레벨은 어떻게 올리나요?", "네, 고유 능력은 <b>펫마다 정해진 1개</b>이며 레벨이 오를 때마다 함께 오릅니다. 펫별 Lv.1 · 만렙 수치는 펫 도감에서 확인하실 수 있습니다. 레벨은 <b>다른 펫을 재료로 사용해</b> 올립니다. 재료 1마리당 100 코인이 들고, 재료 등급에 따라 경험치 10(브론즈) · 20(실버) · 50(골드) · 200(플래티넘)을 얻습니다. 만렙은 브론즈 Lv.3 · 실버 Lv.6 · 골드 Lv.12 · 플래티넘 Lv.15이며, 장착 중이거나 잠금한 펫은 재료로 쓸 수 없습니다."],
            ["업데이트 후 펫이 안 보여요. 어디서 장착하나요?", "기존 펫을 새 펫 시스템에 맞게 바꾸는 과정에서 <b>모든 펫의 장착이 해제</b>되었습니다. 펫은 그대로 있으니 <b>캐릭터 › 캐릭터 선택 › 펫 › 펫 라인업</b>에서 펫 선택하기를 눌러 다시 장착하시면 됩니다."],
            ["새 펫에는 3점 슛 성공률 능력이 없나요?", "고유 능력에는 3점 슛 성공률이 없지만, <b>서브 능력</b>으로는 실버 이상 어떤 펫이든 받을 수 있습니다. 서브 능력은 펫 등급에 따라 무작위로 붙는 범위가 다르며, 등급이 높을수록 인기 능력 위주로 나옵니다."],
            ["플래티넘 펫은 어떻게 얻나요?", "플래티넘 펫은 <b>펫 조합</b>으로 얻습니다. <b>골드 펫끼리 조합</b>하면 <b>25%</b> 확률로 플래티넘 펫을 얻고, 실패하면 무작위 골드 펫이 나옵니다. 골드 조합은 코인 조합 5마리 + 10,000 코인, 포인트 조합 2마리 + 10 포인트입니다. 재료로 쓴 펫은 모두 사라지고 새 펫 1마리가 Lv.1로 나오며, 장착 중이거나 잠금한 펫은 재료로 쓰이지 않습니다."],
            ["기존 펫 아이템(펫 효과 변경 티켓 등)은 어떻게 되나요?", "<b>펫 등급 업 아이템 · 펫 효과 변경 티켓 · 펫 외형 변경 티켓 · 펫 이름 변경 티켓</b>은 10/28 정기 점검 시작(15:00 KST) 이후 사용하실 수 없습니다. 남은 아이템은 인벤토리에서 판매하실 수 있습니다."],
            ["골드 펫 뽑기 티켓을 쓰면 무엇이 나오나요? 새 펫은 어떻게 얻나요?", "펫 입양에서 코인(1회 2,000 · 10회 20,000), 포인트(10회 10 포인트), 골드 펫 뽑기 티켓(1회 1장 · 10회 10장)으로 입양할 수 있습니다. <b>어떤 방법이든 확률은 같습니다</b>: 브론즈 70% · 실버 25% · 골드 5%입니다. 골드 펫은 실버 펫끼리 조합해 40% 확률로도 얻을 수 있습니다."] ] } ] }
    ]
  },

  en: {
    site: "Pet Guide", ribbon: "Oct 28, 2026 Update", title: "Pet System Renewal",
    lead: "Where to find your pets and how to raise them, all in one place.",
    ended: "Ended", foot: "Thank you.",
    st: { checking: "Investigating", planned: "Fix Scheduled", fixed: "Fixed" }, dl: { found: "Reported", fixed: "Fixed on" },
    issuesLabel: "Known Issues", issuesEmpty: "There are no known issues at this time.",
    issues: [],
    ui: {
      search: "Search by pet name or ability", all: "All", unit: " types",
      grade: { P: "Platinum", G: "Gold", S: "Silver", B: "Bronze" },
      unique: "Unique Ability", maxLv: "Max Level", sub: "Sub Ability", subUp: "Sub Ability Upgrade", feedExp: "EXP as Material", how: "How to Get",
      subsCan: "Sub Abilities this grade can get ({n}) · Initial Value", prev: "Previous", next: "Next", close: "Close", none: "None", photo: "Image coming soon", legacyPhoto: "※ The pet in this picture was obtained before the renewal, so its previous ability is shown as its Unique Ability. See Pet Info for the Unique Abilities of newly obtained pets.", issues: "Known Issues",
      gradeInfo: {
        P: { sub: "3 slots (unlocked at Lv.3 · 6 · 9)", up: "Lv.12 · 15", how: "You can get one by succeeding at a <b>Gold pet Combination</b> (25%)." },
        G: { sub: "2 slots (unlocked at Lv.3 · 6)", up: "Lv.9", how: "Appears through <b>Adoption</b> at a 5% rate (1 of 15 Gold pets), or by succeeding at a <b>Silver pet Combination</b> (40%)." },
        S: { sub: "1 slot (unlocked at Lv.3)", up: "–", how: "Appears through <b>Adoption</b> at a 25% rate (1 of 4 Silver pets), or by succeeding at a <b>Bronze pet Combination</b> (60%)." },
        B: { sub: "None", up: "–", how: "Appears through <b>Adoption</b> at a 70% rate (1 of 6 Bronze pets)." } } },
    chapters: [
      { id: "overview", nav: "Overview of Changes", title: "Here's How the Pet System Has Changed", q: "Abilities now work without conditions, grow stronger as you level up, and you can equip more of them. Check the 5 key changes first.",
        blocks: [
          {"type": "keys", "items": [["No Activation Conditions", "Abilities always apply once equipped"], ["Level-Up Growth", "Unique Ability rises as the pet levels up"], ["Up to 3 Sub Abilities", "Unique Ability + 3 Sub Abilities"], ["Adopt Pet", "Coins or Points, same rates"], ["Pet Combination", "Coins or Points, get Platinum pets by combining"]]},
          {"type": "compare", "eyebrow": "AT A GLANCE", "label": "Previous Pets vs New Pets", "head": ["Category", "Previous Pets", "New Pets"], "rows": [["Activation", "Only when in-game conditions were met", "Always active, no conditions"], ["Number of Abilities", "1 effect", "1 Unique Ability + up to 3 Sub Abilities"], ["Getting the One You Want", "Matched with Pet Skill Change Tickets", "Each pet has its own Unique Ability that rises every level"], ["Sub Abilities", "None", "Assigned at random from a pool by grade; unlocked and further boosted as the pet levels up"], ["Where to Get", "Silver · Gold · Platinum Kennels", "Characters › Pet › Adopt Pet"], ["Currency", "Set currency per Kennel", "Coins or Points, same rates"], ["Getting Platinum", "Chance from Gold · Platinum Kennels", "Pet Combination"]]} ] },

      { id: "where", nav: "Where to Find Pets", title: "Where are my pets?", q: "Pets that you used to access from Management are now available from the Characters menu.",
        blocks: [
          { type: "steps", items: [
            ["Characters", "Pets can be found in the Characters menu. Select Characters from the lobby menu.", "lobby"],
            ["Pet", "On the details page of the character you want to equip a pet on, select the Pet menu.", "character"],
            ["Pet Lineup", "Use Select Pet to equip a pet.", "lineup"] ],
            before: "Before: Management › Pet",
            note: "To equip a pet on another character, press the Back button and select another character, or change the character from the top menu." },
          { type: "alert", text: "<b>All pets have been unequipped with this update.</b> Please equip your pets again in PET LINEUP." },
          { type: "menu", label: "Pet Menu", items: [
            ["Pet Lineup", "PET LINEUP", "View and level up the pet equipped by your character."],
            ["Adopt Pet", "ADOPT PET", "Get new pets with Coins, Points or Tickets.", "system"],
            ["Pet House", "PET HOUSE", "View all the pets you own, and equip, train, lock or dismiss them.", "system"],
            ["Pet Combination", "PET COMBINATION", "Combine pets you own for a chance at a higher-grade pet.", "system"] ] } ] },

      { id: "system", nav: "Pet System", title: "How does the Pet System work?", q: "See what you can do on each Pet menu screen.",
        blocks: [
          { type: "facts", label: "Pet Lineup — This Character's Pet", photo: "lineup", marks: [[75.9, 25.0], null, [19.5, 86.5], null],
            text: "PET LINEUP is where you can view and level up the pet equipped by your character.", items: [
            ["Screen", "See your equipped pet's name, grade, level and EXP, and its Unique and Sub Ability values. Sub Ability slots not yet unlocked show the level at which they unlock."],
            ["Select Pet", "If no pet is equipped, use Select Pet to choose one in the Pet House and it is equipped right away. If you have no pets, an Adopt Pet button appears."],
            ["Unequip Pet", "Unequipping a pet requires Points."],
            ["Other Characters' Pets", "Pets equipped by another character can't be equipped."] ] },
          { type: "bars", label: "Adopt Pet — Get New Pets", photo: "adopt",
            text: "ADOPT PET is where you can get new pets. You can adopt 1 or 10 times, and for 10 adoptions you can choose to pay with either Points or Coins (Coins: 2,000 for 1 · 20,000 for 10 / Points: 10 Points for 10). You can also adopt with Gold Pet Adoption Tickets (1 Ticket per adoption · 10 Tickets for 10 adoptions).<br>Adoption gives Bronze, Silver or Gold pets based on the rates. The rates are the same whether you use Coins, Points or Tickets, and all pets within the same grade have an equal chance. Results are shown right away, and the button at the bottom opens the probability page.",
            items: [["Bronze", 70, "6 types"], ["Silver", 25, "4 types"], ["Gold", 5, "15 types"], ["Platinum", 0, ""]],
            note: ["Where to adopt: Characters › Pet › Adopt Pet. The previous Silver · Gold · Platinum Kennels have ended.", "Platinum pets are not available from Adoption and can be obtained through Pet Combination."] },
          { type: "facts", label: "Pet House — Manage Your Pets", photo: "house", marks: [[22.3, 27.8], null],
            text: "PET HOUSE is where you can view all the pets you currently own.", items: [
            ["List", "Equipped pets show the face of the character using them, and you can filter by grade."],
            ["Equip · Unequip", "Equip the selected pet to the current character or unequip it. Pets equipped by another character can only use Training."] ] },
          {"type": "facts", "label": "Pet House Expansion", "photo": "house_expand", "marks": [[20.3, 21.0], [55.0, 21.0], null, null], "items": [["Pets · Slots", "CURRENT PET at the top shows how many pets you own and your total slots. The Pet House starts with 200 slots."], ["Expansion Button", "The PET HOUSE EXPANSION button shows how many slots the next expansion adds (20) and its cost. Press it to open the confirmation; each expansion adds 20 slots (e.g. 60/200 → 60/220)."], ["Cost", "20 Points for levels 1–5 · 30 Points for levels 6–10 · 40 Points for levels 11–15"], ["Maximum", "Up to 500 slots after 15 expansions"]]},
          { type: "facts", label: "Dismiss Pet — Sell Pets", photo: "dismiss_btn", marks: [[27.1, 89.3], null, [36.4, 89.3], null], items: [
            ["DISMISS PET Button", "Use the DISMISS PET button at the bottom to sell the pets you choose."],
            ["Coins Received", "You receive Coins when you sell a pet. The amount differs by pet grade (Bronze 100 · Silver 300 · Gold 1,500 · Platinum 10,000 Coins) and is also shown in the pop-up that appears when you sell."],
            ["SELECT ALL", "Use SELECT ALL to sell several pets at once."],
            ["Pets You Can't Sell", "Equipped or locked pets can't be sold, and pets you sell can't be used again."] ] },
          { type: "facts", label: "Lock — Protect Your Favorite Pets", photo: "lock", marks: [[12.4, 87.9], [32.0, 27.5]], items: [
            ["LOCK Button", "Use the LOCK button at the bottom to lock or unlock the selected pet."],
            ["Safety Feature", "Locking keeps a pet from being sold in bulk, used up as a growth material, or added as a combination material. Locked pets show a lock icon and can still be equipped."] ] },
          { type: "facts", label: "Pet Growth — TRAINING Button", photo: "training_entry", marks: [[36.5, 64.4], [92.8, 63.8]],
            text: "You can raise pets by pressing the TRAINING button in PET LINEUP or PET HOUSE. Pressing the TRAINING button at the bottom right takes you to the screen where you can raise that pet.", items: [
            ["From PET LINEUP", "Press TRAINING to raise the pet equipped by the current character."],
            ["From PET HOUSE", "Press TRAINING to raise the selected pet. Pets that aren't equipped can be raised too."] ] },
          { type: "facts", label: "Training Screen — Level Up with Other Pets as Materials", photo: "pet_detail", marks: [[18.6, 36.5], [65.4, 22.3], [18.0, 89.4], [70.2, 68.6], null, null, null],
            text: "This screen appears when you press the TRAINING button.", items: [
            ["Level · Unique Ability · Sub Ability", "On the left, you can check the Level, Unique Ability and Sub Abilities in order. Level is the current level of the pet you are raising."],
            ["Material List", "The right side lists the pets you can use as materials to raise your pet. Select a pet there to set it as a material. Locked pets can't be selected, and equipped pets can't be used as materials either."],
            ["Locking Materials", "You can also lock or unlock material pets with the button at the bottom."],
            ["AUTO SELECT", "A convenient feature that automatically selects the material pets needed to reach the level you want. Lower grades and lower levels are selected first, and you can still remove them one by one."],
            ["Material Cost · EXP", "Each material pet costs 100 Coins and gives EXP based on its grade: Bronze 10 · Silver 20 · Gold 50 · Platinum 200."],
            ["Raised Pets as Materials", "3% of the EXP invested in that pet is added to its base EXP."],
            ["Over Max Level", "EXP exceeding the max level is not carried over."] ] },
          { type: "facts", label: "Available Sub Abilities — Sub Abilities by Grade", photo: "subs", marks: [[5.5, 24.4], [79.7, 27.0]],
            text: "Press the AVAILABLE SUB ABILITIES button on the growth screen to see all the Sub Abilities that can appear.", items: [
            ["List by Grade", "This page shows the Sub Abilities that can appear for each pet grade. For example, if you press the AVAILABLE SUB ABILITIES button at the bottom while raising a Platinum pet, you can see the Sub Abilities that appear for the Platinum grade."],
            ["Initial Value", "The values on the list are initial values. The initial value is applied when the slot is unlocked, and increases when the sub ability is upgraded."] ] },
          { type: "facts", label: "Pet Combination — Combine the Same Grade for a Chance at a Higher Grade", photo: "combination", marks: [[20.7, 34.6], [65.5, 33.0], [79.3, 76.6], [64.3, 57.1], [26.7, 88.9]],
            text: "In PET COMBINATION, you can combine pets you own for a chance to get a higher-grade pet.", items: [
            ["Same Grade Only", "Only pets of the same grade can be combined. Equipped pets don't appear in the list."],
            ["Combination Slots", "Select a pet to combine, then add pets of the same grade as the first one to the combination slots."],
            ["Required Currency", "Once pets are in the slots, the currency needed for the combination is shown at the bottom right."],
            ["Appearance Rate", "Once all slots are filled, the possible result grades and their rates are shown."],
            ["Combine All", "Choose grades to combine all at once, starting from the lowest grade. Lower-level pets are used first, and pets that can't fill a set (5 for Coins · 2 for Points) are kept. Up to 200 material pets can be used at once (40 Coin Combinations or 100 Point Combinations)."] ] },
          { type: "facts", label: "Change Currency — Coins · Points", photo: "combination_point", marks: [[83.6, 65.8], [72.1, 36.6], [82.4, 77.2]], items: [
            ["COMBINATION TYPE Button", "Use the COMBINATION TYPE button to change the currency used for the combination. The upgrade rate stays the same whichever currency you use."],
            ["Number of Pets Needed", "Combining with Points needs only 2 pets of the same grade, while combining with Coins needs 5."],
            ["Cost", "The cost changes along with the number of pets. See the table below for the cost by grade."] ] },
          {"type": "table", "label": "Pet Combination Rates · Costs", "head": ["Material Grade", "Upgrade Rate", "Coin Combination", "Point Combination"], "rows": [["Bronze", "60%", "5 pets + 2,500 Coins", "2 pets + 2 Points"], ["Silver", "40%", "5 pets + 4,000 Coins", "2 pets + 4 Points"], ["Gold", "25%", "5 pets + 10,000 Coins", "2 pets + 10 Points"], ["Platinum", "–", "5 pets + 10,000 Coins", "2 pets + 10 Points"]], "note": "All material pets are used up, and 1 new pet is obtained at Lv.1. On success you get a pet one grade higher; otherwise you get a random pet of the same grade. Combining Platinum pets always gives a Platinum pet of a random type."} ] },

      { id: "ability", nav: "Pet Abilities", title: "How do pet abilities work?", q: "See how Unique and Sub Abilities apply, and how they grow stronger as you raise your pet.",
        blocks: [
          {"type": "duo", "eyebrow": "Activation", "label": "No Conditions to Meet", "before": {"tag": "Previous", "flow": ["Meet in-game condition", "Effect activates"], "note": "No effect if the condition isn't met → you could miss the effect depending on the match"}, "after": {"tag": "New", "flow": ["Equip pet", "Ability always active"], "check": "No activation conditions"}, "alert": "<b>This also applies to pets you already own.</b> Activation conditions are removed from all pets automatically."},
          { type: "facts", items: [
            ["Grade", "4 grades: Bronze · Silver · Gold · Platinum. Higher grades have a higher max level and more Sub Abilities."],
            ["Unique Ability", "Differs for each pet, and its value increases every time the pet levels up."],
            ["Sub Ability", "Special abilities unlocked when the pet reaches certain levels. The number of Sub Abilities depends on the grade. They are decided when you obtain the pet and revealed and applied as they unlock, and the same Sub Ability never appears twice on one pet."],
            ["Sub Ability Upgrade", "Once all Sub Abilities are unlocked, raising the pet further upgrades 1 of its Sub Abilities, selected at random, at certain levels. On Platinum pets, the same Sub Ability can be upgraded twice."], ["Growth by Grade", "A Sub Ability starts at the same value regardless of grade, but higher grades get more upgrades, so it can rise higher (Silver: no upgrade · Gold: 1 upgrade at Lv.9 · Platinum: 2 upgrades at Lv.12 · 15)."] ] },
          {"type": "table", "label": "Grades at a Glance", "head": ["Grade", "Max Level", "Sub Ability Slots", "Slot Unlock Level", "Sub Ability Upgrade Level"], "rows": [["Bronze", "Lv.3", "0", "–", "–"], ["Silver", "Lv.6", "1", "Lv.3", "–"], ["Gold", "Lv.12", "2", "Lv.3 · 6", "Lv.9"], ["Platinum", "Lv.15", "3", "Lv.3 · 6 · 9", "Lv.12 · 15"]]},
          {"type": "growth", "eyebrow": "Ability Structure", "label": "Grows Stronger and Gains More Slots as It Levels Up", "before": {"tag": "Previous", "k": "Effect", "v": "1 effect", "note": "Only 1 effect · you had to use Pet Skill Change Tickets to get the one you wanted"}, "after": {"tag": "New", "pet": "블랙 사이버 드론", "lv": 8, "slots": [["Unique Ability", "", "▲ Rises every level"], ["Sub Ability 1", "3점 슛 성공률", "Unlocks at Lv.3"], ["Sub Ability 2", "스틸 성공률", "Unlocks at Lv.6"], ["Sub Ability 3", "", "Unlocks at Lv.9"]]}, "roadmap": {"label": "Level-Up Roadmap", "steps": [["Lv.1", "Unique Ability"], ["Lv.3", "Sub Ability 1 unlocks"], ["Lv.6", "Sub Ability 2 unlocks"], ["Lv.9", "Sub Ability 3 unlocks"]], "note": "Unique Ability value — rises with every level"}, "note": "Example of a Platinum pet; Sub Ability types are examples. See the table above for unlock and upgrade levels by grade."},
          {"type": "pools", "eyebrow": "Sub Ability Pools", "label": "Higher Grades Focus on Popular Stats", "tiers": {"S": "Silver · All Sub Abilities", "G": "Gold · Popular stats", "P": "Platinum · Most popular stats"}, "legend": [["S", "<b>Silver</b> — random from the full pool"], ["G", "<b>Gold</b> — random from the popular stats"], ["P", "<b>Platinum</b> — random from the most popular of those"]], "foot": "⇒ The higher the grade, the narrower the pool and the better your chance of getting a popular stat."} ] },

      { id: "dex", nav: "Pet Info", title: "What pets are there?", q: "Select a pet to see its unique ability and how to get it.",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "Existing Pets", title: "What happened to my existing pets and items?", q: "How the pets, items and rewards you had before the renewal have changed.",
        blocks: [
          { type: "facts", label: "Pets You Owned", items: [
            ["Type · Look · Grade", "Kept as they were."],
            ["Level", "Set to the max level of their grade."],
            ["Abilities", "The ability the pet had before the renewal remains as its 1 Unique Ability, with no Sub Abilities. This means its Unique Ability may differ from the same pet obtained newly."],
            ["Old Pets in Mail · Packages", "Converted the same way when you claim them."] ] } ] },

      { id: "events", nav: "Limited Events", title: "What events are on now?", q: "Limited-time events running with the Oct. 28th update. Check the period and rewards, and join before they end!",
        blocks: [
          {"type": "event", "key": "pet_box", "label": "Platinum Pet Surprise Box", "img": "img/events/pet_box_en.jpg", "period": "Oct. 28th - Nov. 10th 23:59 PST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-11T07:59:00Z", "text": "Get 1 of 26 Platinum Pets guaranteed!<br>Meet your own Platinum Pet at an amazing price!<br>Don't miss out on the cumulative purchase rewards too!", "table": {"head": ["Purchases", "Reward", "Quantity"], "rows": [["2", "Gold Pet Adoption Ticket", "10"], ["4", "Gold Pet Adoption Ticket", "40"], ["6", "Guaranteed Platinum Pet Kennel", "1"], ["8", "Guaranteed Platinum Pet Kennel", "1"], ["10", "Guaranteed Platinum Pet Kennel", "1"], ["12", "Top Platinum Pet Selectable Box", "1"]]}, "items": ["White Cleaner Bot 10%", "Candy Pinata 10%", "CarroBot 10%", "Defense Monocle 10%", "Shooting Monocle 10%"], "note": "Includes probability-based items. The 5 Pets above have a 10% chance each, and the other 21 Platinum Pets have a 2.38% chance each."},
          {"type": "event", "key": "shopping_spree", "label": "Shopping Spree! Event", "img": "img/events/shopping_spree_en.jpg", "period": "Oct. 28th - Nov. 3rd 23:59 PST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-04T07:59:00Z", "text": "Spend 700P or more on the Platinum Pet Surprise Box, Pet Adoption or Pet Combination during the event period and earn a Guaranteed Platinum Pet Kennel!<br>Join now and don't miss out!", "table": {"head": ["Points Spent", "Reward"], "rows": [["700P or more", "Guaranteed Platinum Pet Kennel x1"]]}, "note": "Rewards will be given during the Nov. 4th maintenance."} ] },

      { id: "faq", nav: "FAQ", title: "FAQ", q: "Answers to frequently asked questions.",
        blocks: [
          { type: "faq", items: [
            ["Will my existing pets disappear? Do they keep their abilities?", "No, they will not disappear. Your existing pets <b>keep their grade and appearance</b>, become the <b>max level</b> of their grade. See 'Existing Pets' for details."],
            ["How are Sub Abilities decided? Do they increase when my pet levels up?", "Sub Abilities are <b>decided the moment you obtain a pet</b>, one for each slot, and each one is revealed and applied when its slot unlocks. Silver pets have 1 slot, Gold pets 2 and Platinum pets 3 (Bronze pets have none). Slots unlock at Lv.3 for Silver, Lv.3 · 6 for Gold and Lv.3 · 6 · 9 for Platinum. At <b>Gold Lv.9 and Platinum Lv.12 · 15</b>, one unlocked Sub Ability is upgraded at random (on Platinum pets, the same one can be upgraded twice). The same Sub Ability never appears twice on one pet."],
            ["Is each pet's Unique Ability fixed? How do I level up my pets?", "Yes. Each pet has <b>1 fixed Unique Ability</b>, and its value increases with every level. You can check each pet's Lv.1 and max level values in the pet list on this page. To level up a pet, <b>use other pets as materials</b>. Each material pet costs 100 Coins and gives 10 (Bronze), 20 (Silver), 50 (Gold) or 200 (Platinum) EXP. Max level is Lv.3 for Bronze, Lv.6 for Silver, Lv.12 for Gold and Lv.15 for Platinum. Equipped or locked pets cannot be used as materials."],
            ["I can't see my pets after the update. Where do I equip them?", "While existing pets were converted to the new Pet System, <b>all pets were unequipped</b>. Your pets are still there — go to <b>[Characters] - [Select Character] - [Pet] - PET LINEUP</b> and select a pet to equip it again."],
            ["Do new pets have a 3 Point Shot Success Rate ability?", "3 Point Shot Success Rate is not among the Unique Abilities, but any pet of Silver grade or higher can get it as a <b>Sub Ability</b>. Sub Abilities are assigned at random from a range that depends on the pet's grade, and higher grades draw mainly from the most popular abilities."],
            ["How do I get Platinum pets?", "Platinum pets are obtained through <b>Pet Combination</b>. <b>Combine Gold pets</b> for a <b>25%</b> chance to get a Platinum pet; otherwise, you get a random Gold pet. Gold Combination costs 5 pets + 10,000 Coins (Coin Combination) or 2 pets + 10 Points (Point Combination). All material pets are used up, and 1 new pet is obtained at Lv.1. Equipped or locked pets are not used as material."],
            ["What happens to my old pet items (Pet Skill Change Ticket, etc.)?", "<b>Pet Prestige Up Item, Pet Skill Change Ticket, Pet Appearance Change Ticket and Rename Ticket</b> can no longer be used since the 10/28 maintenance began (10/27 23:00 PDT). Any remaining items can be sold from your inventory."],
            ["What do I get from a Gold Pet Adoption Ticket? How do I get new pets?", "You can adopt pets in ADOPT PET with Coins (2,000 for 1 · 20,000 for 10), Points (10 Points for 10) or Gold Pet Adoption Tickets (1 ticket per adoption · 10 tickets for 10). <b>The rates are the same for every method</b>: Bronze 70%, Silver 25%, Gold 5%. You can also get a Gold pet by combining Silver pets (40% chance)."] ] } ] }
    ]
  },

  jp: {
    site: "ペットガイド", ribbon: "2026/10/28 アップデート", title: "ペットシステム改編",
    lead: "新しくなったペットの場所と育て方を、ひとつのページでご確認いただけます。",
    ended: "終了", foot: "ありがとうございます。",
    st: { checking: "確認中", planned: "修正予定", fixed: "修正済み" }, dl: { found: "確認日", fixed: "修正日" },
    issuesLabel: "確認されている不具合", issuesEmpty: "現在確認されている不具合はありません。",
    issues: [],
    ui: {
      search: "ペット名・能力で検索", all: "すべて", unit: "種",
      grade: { P: "プラチナ", G: "ゴールド", S: "シルバー", B: "ブロンズ" },
      unique: "固有能力", maxLv: "最大レベル", sub: "サブ能力", subUp: "サブ能力強化", feedExp: "素材経験値", how: "入手方法",
      subsCan: "この等級に付く可能性のあるサブ能力 {n}種・初期数値", prev: "前へ", next: "次へ", close: "閉じる", none: "なし", photo: "画像準備中", legacyPhoto: "※ 写真のペットはリニューアル前から所持していたペットのため、以前の能力が固有能力として表示されています。新しく入手するペットの固有能力はペット情報で確認できます。", issues: "確認されている不具合",
      gradeInfo: {
        P: { sub: "3枠（Lv.3 · 6 · 9で解放）", up: "Lv.12 · 15", how: "<b>ゴールドペットの合成</b>に成功（25%）すると入手できます。" },
        G: { sub: "2枠（Lv.3 · 6で解放）", up: "Lv.9", how: "<b>養子縁組</b>で5%の確率（ゴールド15種のうち1体）で登場するほか、<b>シルバーペットの合成</b>に成功（40%）すると入手できます。" },
        S: { sub: "1枠（Lv.3で解放）", up: "–", how: "<b>養子縁組</b>で25%の確率（シルバー4種のうち1体）で登場するほか、<b>ブロンズペットの合成</b>に成功（60%）すると入手できます。" },
        B: { sub: "なし", up: "–", how: "<b>養子縁組</b>で70%の確率（ブロンズ6種のうち1体）で登場します。" } } },
    chapters: [
      { id: "overview", nav: "変更概要", title: "ペットシステムはこう変わりました", q: "条件なしですぐ発動し、育てるほど強くなり、より多くの能力を装着できます。まずは主な変更点5つをご確認ください。",
        blocks: [
          {"type": "keys", "items": [["発動条件の削除", "装着するだけで能力が常に適用"], ["レベルアップで成長", "レベルが上がるほど固有能力が上昇"], ["サブ能力最大3つ", "固有能力 + サブ能力3つを装着"], ["ペット養子縁組", "コイン・ポイントどちらも可能、確率は同じ"], ["ペット合成", "コイン・ポイントどちらも可能、合成でプラチナペットを獲得"]]},
          {"type": "compare", "eyebrow": "AT A GLANCE", "label": "以前のペット vs 新しいペット", "head": ["区分", "以前のペット", "新しいペット"], "rows": [["能力の発動", "ゲーム内の条件を満たした時のみ発動", "条件なしで常に適用"], ["能力の数", "効果1つ", "固有能力1つ + サブ能力最大3つ"], ["能力の合わせ方", "ペット効果変更チケットで希望の効果に変更", "ペットごとに固有能力があり、レベルアップごとに数値が上昇"], ["サブ能力", "なし", "等級別の範囲からランダムで付与、ペットのレベルに応じて解放・数値がさらに上昇"], ["入手先", "シルバー・ゴールド・プラチナケンネル", "キャラクター › ペット › ペット養子縁組"], ["ガチャの通貨", "ケンネルごとの指定通貨", "コイン・ポイントどちらも可能、確率は同じ"], ["プラチナの入手", "ゴールド・プラチナケンネルで確率入手", "ペット合成で入手"]]} ] },

      { id: "where", nav: "ペットの場所", title: "ペットはどこにありますか？", q: "これまでマネジメントで利用していたペットは、キャラクターメニューから利用できるようになりました。",
        blocks: [
          { type: "steps", items: [
            ["キャラクター", "ペットはキャラクターメニューで確認できます。ロビーメニューでキャラクターを選択します。", "lobby"],
            ["ペット", "ペットを装着するキャラクターの詳細ページで、ペットメニューを選択します。", "character"],
            ["ペットラインアップ", "ペットを選択から装着するペットを選びます。", "lineup"] ],
            before: "変更前：マネジメント › ペット",
            note: "他のキャラクターにペットを装着するには、戻るボタンを押して別のキャラクターを選択するか、上部メニューでキャラクターを変更してください。" },
          { type: "alert", text: "<b>アップデート後、すべてのペットの装着が解除されています。</b>ペットラインアップでペットを再度装着してください。" },
          { type: "menu", label: "ペットメニュー", items: [
            ["ペットラインアップ", "PET LINEUP", "キャラクターが装着しているペットの情報を確認し、レベルアップできます。"],
            ["ペット養子縁組", "ADOPT PET", "コイン・ポイント・チケットで新しいペットを引くことができます。", "system"],
            ["ペットハウス", "PET HOUSE", "所持しているすべてのペットを確認し、装着・トレーニング・ロック・お別れができます。", "system"],
            ["ペット合成", "PET COMBINATION", "所持しているペットを合成して、上位等級のペットの獲得に挑戦できます。", "system"] ] } ] },

      { id: "system", nav: "ペットシステム", title: "ペットシステムはどうなっていますか？", q: "ペットメニューの各画面でできることをご覧ください。",
        blocks: [
          { type: "facts", label: "ペットラインアップ — このキャラクターのペット", photo: "lineup", marks: [[75.9, 25.0], null, [19.5, 86.5], null],
            text: "ペットラインアップは、キャラクターが装着しているペットの情報を確認し、レベルアップできる場所です。", items: [
            ["画面", "装着中のペットの名前・等級・レベル・経験値と、固有能力・サブ能力の数値を確認できます。まだ解放されていないサブ能力の枠には解放レベルが表示されます。"],
            ["ペットを選択", "ペットを装着していない場合は、ペットを選択からペットハウスで選ぶとすぐに装着されます。ペットを持っていない場合は、ペット養子縁組ボタンが表示されます。"],
            ["ペット解除", "装着中のペットを外すペット解除にはポイントが必要です。"],
            ["他のキャラクターのペット", "他のキャラクターが装着中のペットは装着できません。"] ] },
          { type: "bars", label: "ペット養子縁組 — 新しいペットを引く", photo: "adopt",
            text: "ペット養子縁組は、新しいペットを引くことができる場所です。1回引きと10回引きがあり、10回引きはポイントとコインのどちらかを選んで引けます（コイン1回 2,000 · 10回 20,000 / ポイント10回 10ポイント）。ゴールドペット養子縁組チケット（1回1枚 · 10回10枚）でも養子縁組できます。<br>ペット養子縁組では、確率に応じてブロンズ/シルバー/ゴールドのペットを獲得できます。コイン・ポイント・チケットのどれで引いても確率は同じで、同じ等級のペットはすべて同じ確率で登場します。結果はすぐに表示され、下のボタンから確率ページを確認できます。",
            items: [["ブロンズ", 70, "6種"], ["シルバー", 25, "4種"], ["ゴールド", 5, "15種"], ["プラチナ", 0, ""]],
            note: ["ペット養子縁組の場所：キャラクター › ペット › ペット養子縁組。以前のシルバー・ゴールド・プラチナケンネルは終了しました。", "プラチナペットは養子縁組では登場せず、ペット合成で入手できます。"] },
          { type: "facts", label: "ペットハウス — 所持ペットの管理", photo: "house", marks: [[22.3, 27.8], null],
            text: "ペットハウスは、現在所持しているすべてのペットを確認できる場所です。", items: [
            ["一覧", "装着中のペットには装着しているキャラクターの顔が表示され、フィルターで等級別に見ることができます。"],
            ["装着・解除", "選んだペットを今のキャラクターに装着、または解除します。他のキャラクターが装着中のペットはトレーニングのみできます。"] ] },
          {"type": "facts", "label": "ペットハウス拡張", "photo": "house_expand", "marks": [[20.3, 21.0], [55.0, 21.0], null, null], "items": [["所持数・枠数", "画面上部のCURRENT PETに所持ペット数と枠数が表示されます。ペットハウスは基本200枠です。"], ["拡張ボタン", "PET HOUSE EXPANSIONボタンに次の拡張で増える枠数（20枠）と費用が表示されます。押すと確認画面が表示され、拡張すると20枠増えます（例：60/200 → 60/220）。"], ["費用", "1～5段階 20ポイント・6～10段階 30ポイント・11～15段階 40ポイント"], ["最大", "15段階まで拡張して最大500枠"]]},
          { type: "facts", label: "お別れ — ペットの売却", photo: "dismiss_btn", marks: [[27.1, 89.3], null, [36.4, 89.3], null], items: [
            ["お別れボタン", "下部のお別れボタンで、選んだペットを売却できます。"],
            ["獲得コイン", "売却するとコインを獲得できます。獲得できるコインはペットの等級によって異なり（ブロンズ100・シルバー300・ゴールド1,500・プラチナ10,000コイン）、売却時に表示されるポップアップでも確認できます。"],
            ["すべて選択", "すべて選択で複数のペットをまとめて売却できます。"],
            ["売却できないペット", "装着中またはロック中のペットは売却できず、売却したペットは再び使えません。"] ] },
          { type: "facts", label: "ロック — 大切なペットを守る", photo: "lock", marks: [[12.4, 87.9], [32.0, 27.5]], items: [
            ["ロックボタン", "下部のロックボタンで、選択中のペットをロック、またはロック解除できます。"],
            ["安全機能", "ロック機能は、ロックしたペットが一括売却されたり、育成の素材として消費されたり、合成の素材に含まれたりしないように守る安全機能です。ロックしたペットには鍵マークが付き、ロック中でも装着はできます。"] ] },
          { type: "facts", label: "ペットの育成 — トレーニングボタン", photo: "training_entry", marks: [[36.5, 64.4], [92.8, 63.8]],
            text: "ペットの育成は、ペットラインアップまたはペットハウスでトレーニングボタンを押して行えます。右下のトレーニングボタンを押すと、そのペットを育成できる画面に移動します。", items: [
            ["ペットラインアップから", "トレーニングを押すと、現在のキャラクターが装着しているペットを育成できます。"],
            ["ペットハウスから", "トレーニングを押すと、選んだペットを育成できます。装着していないペットも育成できます。"] ] },
          { type: "facts", label: "トレーニング画面 — 他のペットを素材にしてレベルアップ", photo: "pet_detail", marks: [[18.6, 36.5], [65.4, 22.3], [18.0, 89.4], [70.2, 68.6], null, null, null],
            text: "トレーニングボタンを押すと表示される画面です。", items: [
            ["レベル・固有能力・サブ能力", "左側で順にレベル、固有能力、サブ能力を確認できます。レベルは育成するペットの現在のレベルです。"],
            ["素材一覧", "右側には、ペットの育成に素材として使えるペットが一覧で表示されます。右側でペットを選ぶとそのペットが素材に指定されます。ロック中のペットは選択できず、装着中のペットも素材にできません。"],
            ["素材のロック", "素材のペットも下部のボタンでロック、またはロック解除できます。"],
            ["自動選択", "目標のレベルまで育成するのに必要な素材のペットを自動で選んでくれる便利な機能です。低い等級・低いレベルから選ばれ、1体ずつ外すこともできます。"],
            ["素材の費用・経験値", "素材1体につき100コインがかかり、素材にしたペットの等級に応じて経験値（ブロンズ 10 · シルバー 20 · ゴールド 50 · プラチナ 200）を獲得します。"],
            ["育成したペットを素材に", "基本経験値に、そのペットに投入した経験値の3%が加算されます。"],
            ["最大レベル超過分", "最大レベルを超えた経験値は適用されません。"] ] },
          { type: "facts", label: "登場サブ能力 — 等級別のサブ能力一覧", photo: "subs", marks: [[5.5, 24.4], [79.7, 27.0]],
            text: "育成画面で登場サブ能力ボタンを押すと、登場する可能性のあるすべてのサブ能力を確認できます。", items: [
            ["等級別の一覧", "このページでは、ペットの等級ごとに登場する可能性のあるサブ能力を確認できます。たとえばプラチナペットを育成中に下部の登場サブ能力ボタンを押すと、プラチナ等級で登場するサブ能力を確認できます。"],
            ["初期数値", "一覧の数値は初期数値です。初期数値は枠の解放時に適用され、強化すると数値が上昇します。"] ] },
          { type: "facts", label: "ペット合成 — 同じ等級同士で上位等級に挑戦", photo: "combination", marks: [[20.7, 34.6], [65.5, 33.0], [79.3, 76.6], [64.3, 57.1], [26.7, 88.9]],
            text: "ペット合成では、所持しているペットを合成して上位等級のペットの獲得に挑戦できます。", items: [
            ["同じ等級同士のみ", "合成は同じ等級のペット同士でのみ可能です。装着中のペットは一覧に表示されません。"],
            ["合成スロット", "合成するペットを選んだ後、最初に選んだペットと同じ等級のペットを合成スロットに入れます。"],
            ["必要な通貨", "スロットに入れると、右下で合成に必要な通貨を確認できます。"],
            ["出現確率", "材料をすべて入れると、結果として出る可能性のある等級と確率が表示されます。"],
            ["一括合成", "等級を選んでまとめて合成します。低い等級から順に進み、レベルの低いペットから使います。セット（コイン5体・ポイント2体）に満たないペットは残ります。一度に最大200体まで使用できます（コイン合成最大40回 · ポイント合成最大100回）。"] ] },
          { type: "facts", label: "使用通貨の変更 — コイン・ポイント", photo: "combination_point", marks: [[83.6, 65.8], [72.1, 36.6], [82.4, 77.2]], items: [
            ["使用通貨変更ボタン", "使用通貨変更ボタンで、合成に使う通貨を変更できます。通貨を変えても上位等級の確率は同じです。"],
            ["必要なペットの数", "ポイントで合成すると同じ等級のペットが2体だけで済みますが、コインで合成すると5体必要です。"],
            ["費用", "必要な体数とともに費用も変わります。等級別の費用は下の表でご確認いただけます。"] ] },
          {"type": "table", "label": "ペット合成の確率・費用", "head": ["材料の等級", "上位等級の確率", "コイン合成", "ポイント合成"], "rows": [["ブロンズ", "60%", "5体 + 2,500コイン", "2体 + 2ポイント"], ["シルバー", "40%", "5体 + 4,000コイン", "2体 + 4ポイント"], ["ゴールド", "25%", "5体 + 10,000コイン", "2体 + 10ポイント"], ["プラチナ", "–", "5体 + 10,000コイン", "2体 + 10ポイント"]], "note": "材料にしたペットはすべて消え、新しいペット1体がLv.1で登場します。成功すると1つ上の等級、失敗すると同じ等級のペットがランダムに登場します。プラチナ同士を合成すると必ずプラチナが登場し、種類だけがランダムに決まります。"} ] },

      { id: "ability", nav: "ペットの能力", title: "ペットの能力はどうなっていますか？", q: "固有能力とサブ能力がどう適用され、育てるほどどう強くなるかをご確認ください。",
        blocks: [
          {"type": "duo", "eyebrow": "能力の発動", "label": "条件を満たす必要はありません", "before": {"tag": "以前のペット", "flow": ["ゲーム内の条件を満たす", "効果が発動"], "note": "条件を満たさないと効果なし → 試合の状況によって効果を受けられないことがありました"}, "after": {"tag": "新しいペット", "flow": ["ペットを装着", "能力が常に適用"], "check": "発動条件なし"}, "alert": "<b>すでにお持ちの以前のペットにも同様に適用されます。</b>特別な操作なしで、すべてのペットの発動条件がなくなります。"},
          { type: "facts", items: [
            ["等級", "ブロンズ・シルバー・ゴールド・プラチナの4段階。等級が高いほど最大レベルとサブ能力の数が増えます。"],
            ["固有能力", "ペットごとに異なり、レベルアップするたびに能力値が上昇します。"],
            ["サブ能力", "特定のレベルに到達すると解放される特殊能力で、等級によってサブ能力の数が異なります。ペットを入手した時点で数だけ決まり、解放されると公開・適用されます。1体のペットに同じサブ能力が2つ付くことはありません。"],
            ["サブ能力強化", "サブ能力がすべて解放された後もペットを育成すると、特定のレベルでサブ能力のうち1つがランダムに強化されます。プラチナは同じサブ能力が2回強化されることもあります。"], ["等級による上昇", "サブ能力の初期数値は等級に関係なく同じですが、等級が高いほど強化回数が多く、より高く上がります（シルバー：強化なし・ゴールド：Lv.9で1回・プラチナ：Lv.12・15で2回）。"] ] },
          {"type": "table", "label": "等級別一覧", "head": ["等級", "最大レベル", "サブ能力の枠", "枠の解放レベル", "サブ能力強化レベル"], "rows": [["ブロンズ", "Lv.3", "0", "–", "–"], ["シルバー", "Lv.6", "1", "Lv.3", "–"], ["ゴールド", "Lv.12", "2", "Lv.3 · 6", "Lv.9"], ["プラチナ", "Lv.15", "3", "Lv.3 · 6 · 9", "Lv.12 · 15"]]},
          {"type": "growth", "eyebrow": "能力の構成", "label": "育てるほど強くなり、能力の枠が増えます", "before": {"tag": "以前のペット", "k": "効果", "v": "効果1つ", "note": "効果は1つだけ・希望の効果にはペット効果変更チケットで合わせる必要がありました"}, "after": {"tag": "新しいペット", "pet": "블랙 사이버 드론", "lv": 8, "slots": [["固有能力", "", "▲ レベルアップごとに上昇"], ["サブ能力1", "3점 슛 성공률", "Lv.3で解放"], ["サブ能力2", "스틸 성공률", "Lv.6で解放"], ["サブ能力3", "", "Lv.9到達で解放"]]}, "roadmap": {"label": "レベルアップロードマップ", "steps": [["Lv.1", "固有能力"], ["Lv.3", "サブ能力1 解放"], ["Lv.6", "サブ能力2 解放"], ["Lv.9", "サブ能力3 解放"]], "note": "固有能力の数値 — レベルアップするたびに上昇"}, "note": "プラチナペットの例で、サブ能力の種類は例です。等級別の解放・強化レベルは上の表でご確認いただけます。"},
          {"type": "pools", "eyebrow": "サブ能力の出現範囲", "label": "等級が高いほど人気の能力が中心に出現します", "tiers": {"S": "シルバー・全サブ能力", "G": "ゴールド・人気の能力", "P": "プラチナ・最も人気の能力"}, "legend": [["S", "<b>シルバー</b> — 全体からランダムで付与"], ["G", "<b>ゴールド</b> — 人気の能力からランダムで付与"], ["P", "<b>プラチナ</b> — その中でもさらに人気の能力からランダムで付与"]], "foot": "⇒ 等級が高いほど範囲が狭まり、希望する人気の能力に出会える可能性が高くなります。"} ] },

      { id: "dex", nav: "ペット情報", title: "どんなペットがいますか？", q: "ペットを選ぶと、固有能力と入手方法を確認できます。",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "既存ペットの扱い", title: "以前のペットとアイテムはどうなりましたか？", q: "改編前にお持ちだったペット・アイテム・報酬の扱いをご案内します。",
        blocks: [
          { type: "facts", label: "お持ちだったペット", items: [
            ["種類・外見・等級", "そのまま維持されます。"],
            ["レベル", "その等級の最大レベルになります。"],
            ["能力", "リニューアル前に持っていた能力が固有能力1つとして残り、サブ能力はありません。そのため、新しく入手した同じペットとは固有能力が異なる場合があります。"],
            ["メールボックス・パッケージ内の以前のペット", "受け取り時に同じ方法で変換されて付与されます。"] ] } ] },

      { id: "events", nav: "期間限定イベント", title: "今どんなイベントが開催中ですか？", q: "10/28アップデートとともに開催中の期間限定イベントをまとめました。期間と報酬を確認して、ぜひ参加してください！",
        blocks: [
          {"type": "event", "key": "pet_box", "label": "ドキドキプラチナペットボックス", "img": "img/events/pet_box_jp.jpg", "period": "10月28日 - 11月11日 16:59 JST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-11T07:59:00Z", "text": "26種のプラチナペットから1体を確定でゲット！<br>破格の価格で自分だけのプラチナペットに出会おう！<br>累計購入報酬もお見逃しなく！", "table": {"head": ["購入数", "報酬", "数量"], "rows": [["2", "ゴールドペット養子縁組チケット", "10"], ["4", "ゴールドペット養子縁組チケット", "40"], ["6", "プラチナ確定ペットケンネル", "1"], ["8", "プラチナ確定ペットケンネル", "1"], ["10", "プラチナ確定ペットケンネル", "1"], ["12", "人気プラチナペット選択ボックス", "1"]]}, "items": ["ホワイトロボット掃除機 10%", "キャンディピニャータ 10%", "CarroBot 10%", "Defense Monocle 10%", "Shooting Monocle 10%"], "note": "確率型アイテムを含みます。上記5種はそれぞれ10%、その他のプラチナペット21種はそれぞれ2.38%の確率で登場します。"},
          {"type": "event", "key": "shopping_spree", "label": "ショッピングスプリー！イベント", "img": "img/events/shopping_spree_jp.jpg", "period": "10月28日 - 11月4日 16:59 JST", "start": "2026-10-28T11:00:00Z", "deadline": "2026-11-04T07:59:00Z", "text": "ドキドキプラチナペットボックス・ペット養子縁組・ペット合成で700P以上消費すると、プラチナ確定ペットケンネルをゲット！<br>今すぐ参加しよう！", "table": {"head": ["消費ポイント", "報酬"], "rows": [["700P以上", "プラチナ確定ペットケンネル x1"]]}, "note": "報酬は11/4のメンテナンス中に配布されます。"} ] },

      { id: "faq", nav: "よくある質問", title: "よくある質問", q: "お問い合わせの多い内容をまとめました。",
        blocks: [
          { type: "faq", items: [
            ["今まで持っていたペットはなくなりますか？能力はそのままですか？", "なくなりません。既存のペットは<b>ランクと外見がそのまま維持</b>され、その等級の<b>最大レベル</b>になります。詳しくは「既存ペットの扱い」をご確認ください。"],
            ["サブ能力はどのように決まりますか？レベルを上げると上がりますか？", "サブ能力は<b>ペットを獲得した瞬間にスロット数だけ決まり</b>、解放レベルに達すると公開・適用されます。スロット数はシルバー1・ゴールド2・プラチナ3で、ブロンズにはありません。解放はシルバーLv.3、ゴールドLv.3・6、プラチナLv.3・6・9です。<b>ゴールドLv.9・プラチナLv.12・15</b>では、解放済みのサブ能力から1つがランダムに強化されます（プラチナは同じ能力が2回強化されることもあります）。1体のペットに同じサブ能力が2つ付くことはありません。"],
            ["固有能力はペットごとに決まっていますか？ペットのレベルはどう上げますか？", "はい、固有能力は<b>ペットごとに決まった1つ</b>で、レベルが上がるたびに一緒に上がります。ペットごとのLv.1・最大レベルの数値はペット図鑑でご確認いただけます。レベルは<b>他のペットを素材にして</b>上げます。素材1体につき100コインがかかり、素材のランクに応じて経験値10（ブロンズ）・20（シルバー）・50（ゴールド）・200（プラチナ）を獲得します。最大レベルはブロンズLv.3・シルバーLv.6・ゴールドLv.12・プラチナLv.15で、装着中またはロック中のペットは素材にできません。"],
            ["アップデート後、ペットが見当たりません。どこで装着しますか？", "既存のペットを新しいペットシステムに合わせて変更する過程で、<b>すべてのペットの装着が解除</b>されました。ペットはそのまま残っていますので、<b>[キャラクター] - [キャラクター選択] - [ペット] - ペットラインアップ</b>で装着するペットを選んで再度装着してください。"],
            ["新しいペットには3点シュートの成功率の能力はありませんか？", "固有能力に「3点シュートの成功率上昇」はありませんが、<b>サブ能力</b>としてはシルバー以上のどのペットにも付く可能性があります。サブ能力は等級によってランダムに付く範囲が異なり、等級が高いほど人気の能力が中心になります。"],
            ["プラチナペットはどうやって入手しますか？", "プラチナペットは<b>ペット合成</b>で入手します。<b>ゴールドペット同士を合成</b>すると<b>25%</b>の確率でプラチナペットを獲得でき、失敗するとランダムなゴールドペットになります。ゴールドの合成はコイン合成が5体＋10,000コイン、ポイント合成が2体＋10ポイントです。素材にしたペットはすべてなくなり、新しいペット1体がLv.1で出ます。装着中またはロック中のペットは素材に使われません。"],
            ["既存のペットアイテム（ペット効果変更チケットなど）はどうなりますか？", "<b>ペットランクアップアイテム・ペット効果変更チケット・ペットの外見変更チケット・ペットの名前変更チケット</b>は、10/28の定期メンテナンス開始（15:00 KST）以降ご使用いただけません。残ったアイテムはインベントリで売却できます。"],
            ["ゴールドペット養子縁組チケットを使うと何が出ますか？新しいペットはどうやって入手しますか？", "ペットの養子縁組では、コイン（1回2,000・10回20,000）、ポイント（10回10ポイント）、ゴールドペット養子縁組チケット（1回1枚・10回10枚）で養子縁組できます。<b>どの方法でも確率は同じです</b>：ブロンズ70%・シルバー25%・ゴールド5%です。ゴールドペットはシルバーペット同士の合成（40%）でも入手できます。"] ] } ] }
    ]
  }
};
