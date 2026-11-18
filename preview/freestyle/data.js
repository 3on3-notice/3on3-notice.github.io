/* 프리스타일 가이드 문구 — 단원(chapters) 순서가 화면 순서다. 블록 형식은 펫 가이드와 같다(keys · compare · steps · facts · alert · deadline · dex …).
   출처: 기획서 「프리스타일 시스템 개편」 문서 모음(개발 문서 11/17·BM 밸런스 11/17·인게임 밸런스 11/17)·기획팀 답변(11/13)·사용자 확정(11/18: 강화 비용·확률 통일·구매가 통일·티켓 지급 수량)·점검 공지 v12 명칭.
   2026-11-18 최신화: 페이크 규칙 정정, 신규 3종 한글 이름, 티켓 지급 기준. 같은 날 패치노트 1.1.219.1 에 맞춤(사용자 지시) — 명칭 '리뉴얼', 구매 32,000코인, 포인트 강화 10포인트, 코인 확률, 타입별 10칸, 장착 가능 회수 표. 레벨별 능력치·모션별 Lv.1 전후는 인게임 밸런스 v11(11/17) 값. JP 추가(2026-11-17) — 용어는 펫 가이드·게임 텍스트(LOC_JPN)를 따름, 신규 3종 이름은 임시 표기. */
window.NOTICE = {
  updated: "2026-11-18",
  kr: {
    site: "프리스타일 가이드", ribbon: "2026/11/18 업데이트", title: "프리스타일 시스템 리뉴얼",
    lead: "원하는 프리스타일 모션을 바로 구매하고, 원하는 순서로 장착해 보세요! 바뀐 모션은 영상으로 비교해 보실 수 있습니다.",
    ended: "종료",
    ui: {
      search: "프리스타일 이름 검색", all: "전체", unit: "종",
      cat: { jump: "점프슛", layup: "레이업", dunk: "덩크" },
      before: "변경 전", after: "변경 후", isNew: "신규", newOnly: "새로 추가된 프리스타일로, 변경 전 영상이 없습니다.",
      was: "이전 이름", replay: "처음부터 같이 보기", slow: "느리게", normal: "보통 속도",
      videoNote: "연습장에서 촬영한 미리보기 영상으로, 실제 경기 화면과 다를 수 있습니다.",
      prev: "이전", next: "다음", close: "닫기", none: "없음", photo: "사진 준비 중", mock: "개발 중 화면",
      noResult: "검색된 프리스타일이 없습니다.", dialog: "프리스타일 변경 비교", tabs: "단원 메뉴", compareHint: "누르면 영상 · 능력치 비교", statTitle: "레벨별 능력치 · 횟수", lv: "레벨", useOld: "사용 횟수", useNew: "장착 가능 회수", statDunk: "덩크 능력치는 거리에 따라 하나만 적용됩니다. 골밑 덩크는 모션 빠르기, 원거리 덩크는 수비 저항이 적용됩니다."
    },
    chapters: [
      { id: "overview", nav: "바뀌는 점", title: "프리스타일이 이렇게 바뀝니다", q: "팩 · 조각 · 티켓 없이 원하는 프리스타일을 바로 구매하고, 점프슛 · 레이업 · 덩크별로 원하는 순서에 장착하실 수 있습니다.",
        blocks: [
          { type: "keys", items: [
            ["바로 구매", "원하는 프리스타일을 코인으로 구매해 Lv.1 로 획득"],
            ["프리스타일 사이클", "점프슛 · 레이업 · 덩크별로 원하는 슬롯 · 순서에 장착"],
            ["Lv.5 까지 강화", "포인트 또는 코인으로 강화, 실패해도 레벨 유지"],
            ["신규 프리스타일 3종", "360도 스크류 슛 · 언더레그 레이업 · 360도 허니딥"] ] },
          { type: "compare", eyebrow: "AT A GLANCE", label: "기존 vs 변경 한눈에 보기", head: ["구분", "기존", "변경"], rows: [
            ["획득 방법", "실버 · 골드 · 플래티넘 팩 → 조각 → 합성", "원하는 프리스타일을 코인으로 바로 구매", "up"],
            ["강화", "조각 합성", "포인트 또는 코인으로 Lv.5 까지 강화, 성공 확률은 화면에서 확인", "change"],
            ["레벨 안전", "원하는 조각이 팩에서 나와야 성장 가능", "실패해도 레벨이 내려가거나 프리스타일이 사라지지 않아 언제든 다시 도전 가능", "keep"],
            ["장착", "정해진 순서대로, 모션별 사용 횟수만큼 사용", "점프슛 · 레이업 · 덩크 사이클의 원하는 슬롯 · 순서에 배치", "up"],
            ["레이업 · 덩크 구분", "골밑용 · 원거리용 모션이 따로 있음", "모션 하나로 골밑 · 원거리 모두 발동", "change"],
            ["페이크", "다음 모션으로 넘어감", "넘어가지 않음 (실제로 슛해야 슬롯 사용)", "change"],
            ["경기 중 확인", "–", "슛 직후 방금 사용한 모션(NOW) · 다음 모션(NEXT) 표시", "up"] ] },
          { type: "facts", label: "어디에 있나요?", items: [
            ["메뉴 위치", "캐릭터 › 캐릭터 선택 › 프리스타일 모션"],
            ["처음 들어가면", "사용법 가이드가 자동으로 재생됩니다."] ] },
          { type: "table", label: "메뉴 3개", text: "",
            head: ["화면", "할 수 있는 것"],
            rows: [["모션 사이클", "보유한 프리스타일 확인, 사이클 슬롯 장착 · 해제 · 초기화, 순서 설정 (처음 열리는 화면)"], ["모션 구매", "프리스타일 코인 구매, 타입별 보기, 미리보기 영상"], ["모션 강화", "프리스타일을 선택해 포인트 또는 코인으로 강화"]],
            note: ["모션 사이클 · 모션 강화 화면 하단의 '웹 가이드' 버튼을 누르면 이 가이드를 보실 수 있습니다."] } ] },

      { id: "buy", nav: "구매", title: "프리스타일은 어떻게 획득하나요?", q: "팩을 열어 조각을 모을 필요 없이, 원하는 프리스타일을 골라 바로 구매하실 수 있습니다.",
        blocks: [
          { type: "facts", photo: "buy", items: [
            ["구매 가격", "Lv.1 프리스타일은 32,000코인으로 구매하실 수 있으며, 모든 프리스타일의 가격이 같습니다."],
            ["획득 레벨", "구매하면 Lv.1 프리스타일 모션을 획득할 수 있으며, 이후 강화를 통해 Lv.5 까지 올리실 수 있습니다."],
            ["구매 단위", "프리스타일은 캐릭터별로 구매하며, 현재 선택한 캐릭터가 획득합니다."],
            ["보유한 프리스타일", "구매 목록에 구매 불가로 표시됩니다."],
            ["보기 필터", "전체 · 점프슛 · 레이업 · 덩크 탭으로 나누어 보실 수 있습니다."],
            ["판매 종료", "프리스타일 팩 · 조각 · 티켓"] ] },
          { type: "facts", photo: "shop", label: "상점에서도 구매", items: [
            ["위치", "상점 › 프리스타일 모션에서도 같은 가격으로 구매하실 수 있습니다."] ] },
          { type: "facts", photo: "confirm", label: "구매 확인", items: [
            ["확인 창", "구매 전에 프리스타일 이름, 가격, 획득할 캐릭터가 한 번 더 표시됩니다."] ] },
          { type: "facts", photo: "autoequip", label: "빈 슬롯에 바로 장착", items: [
            ["빈 슬롯이 있으면", "구매 직후 사이클의 빈 슬롯에 장착할지 확인합니다. 확인을 누르면 가장 앞의 빈 슬롯 1개에 장착됩니다."],
            ["취소하거나 빈 슬롯이 없으면", "보유만 되며, 모션 사이클에서 직접 장착하실 수 있습니다."] ] } ] },

      { id: "cycle", nav: "사이클", title: "사이클은 어떻게 사용하나요?", q: "점프슛 · 레이업 · 덩크마다 사이클이 하나씩 있으며, 슬롯에 장착한 순서대로 경기에서 발동합니다.",
        blocks: [
          { type: "facts", photo: "cycle", label: "사이클 3개 (타입마다 10슬롯)", items: [
            ["점프슛 사이클", "점프슛 프리스타일만 장착할 수 있습니다."],
            ["레이업 사이클", "레이업 프리스타일만 장착할 수 있습니다."],
            ["덩크 사이클", "덩크 프리스타일만 장착할 수 있습니다."],
            ["빈 슬롯", "장착할 프리스타일이 없으면 일반 모션이 적용됩니다."] ] },
          { type: "facts", photo: "order", label: "순서 정하기", items: [
            ["배치", "슬롯 1개에는 프리스타일 1개만 장착할 수 있으며, 원하는 순서로 배치하실 수 있습니다."],
            ["장착 가능 회수", "같은 프리스타일을 다른 슬롯에도 장착하려면 강화로 장착 가능 회수를 늘려야 합니다. 레벨별 회수는 <a href=\"#enhance\">강화</a> 단원의 '레벨별 능력치 · 장착 가능 회수' 표에서 확인하실 수 있습니다."] ] },
          { type: "facts", label: "사이클 관리", items: [
            ["타입 변경", "L1 · R1 (키보드 Q · W)로 점프슛 · 레이업 · 덩크 사이클을 변경합니다."],
            ["장착", "'사이클 관리'에서 슬롯을 고르고 목록에서 프리스타일을 선택한 뒤 '모션 장착'을 누르면 장착됩니다. 현재 장착된 모션과 선택한 모션을 나란히 비교하실 수 있습니다."],
            ["선택 가능 N", "해당 프리스타일을 추가로 장착할 수 있는 슬롯 수입니다."],
            ["해제 · 초기화", "'모션 해제'는 해당 슬롯을 일반 모션으로 되돌리고, '장착 초기화'는 현재 타입의 모든 슬롯을 한 번에 해제합니다."],
            ["목록 순서", "레벨이 높은 순, 선택 가능 수가 많은 순, 최근 획득한 순으로 정렬됩니다."] ] },
          { type: "facts", label: "프리스타일 모션 적용 규칙", items: [
            ["순서", "사이클의 슬롯 순서대로 발동합니다."],
            ["페이크", "페이크를 사용해도 다음 슬롯으로 넘어가지 않습니다."],
            ["사용", "실제로 슛을 해야 해당 슬롯이 사용됩니다. 슛 도중 패스 · 더블 클러치도 사용한 것으로 처리되며, 스킬 슛은 슬롯을 사용하지 않습니다."],
            ["모두 사용한 뒤", "마지막 슬롯까지 사용하면 이후에는 일반 모션이 적용되고, 사용한 슬롯은 사이클 표시에서 어둡게 바뀝니다(처음부터 반복되지 않음). 로비 연습에서는 처음부터 계속 반복됩니다."],
            ["NOW · NEXT 표시", "슛 직후 방금 사용한 모션(NOW)과 다음에 발동할 모션(NEXT)이 경기 화면 우측 하단에 표시됩니다."] ] } ] },

      { id: "enhance", nav: "강화", title: "강화는 어떻게 하나요?", q: "포인트 또는 코인으로 Lv.5 까지 강화하실 수 있습니다. 레벨이 오를수록 능력치와 장착 가능 회수가 올라갑니다.",
        blocks: [
          { type: "facts", photo: "enhance", items: [
            ["성공하면", "다음 레벨로 오르며, 정해진 만큼 능력치가 상승합니다(무작위 아님)."],
            ["실패하면", "현재 레벨이 유지되며, 사용한 재화만 소모됩니다."],
            ["Lv.5 가 되면", "더 이상 강화할 수 없습니다. 다른 프리스타일을 선택해 주세요."],
            ["이벤트 기간", "강화 비용 할인이나 성공 확률 추가 이벤트가 진행될 수 있습니다."],
            ["강화 티켓", "포인트 강화 1회를 대신할 수 있는 티켓이며, 성공 확률은 포인트 강화와 같습니다. 지급 기준은 <a href=\"#legacy\">기존 보유자</a> 단원에서 확인하실 수 있습니다."] ] },
          { type: "table", label: "강화 비용 · 성공 확률", text: "",
            head: ["강화", "포인트 강화<br><small>1회 10포인트</small>", "코인 강화<br><small>1회 20,000코인</small>"],
            rows: [["Lv.1 → Lv.2", "30%", "20%"], ["Lv.2 → Lv.3", "20%", "10%"], ["Lv.3 → Lv.4", "10%", "3.3%"], ["Lv.4 → Lv.5", "5%", "1.3%"]],
            note: ["모든 프리스타일에 동일하게 적용됩니다. 강화 티켓은 포인트 강화와 같은 확률이 적용됩니다."] },
          { type: "facts", photo: "enhanim", label: "강화 연출", items: [
            ["연출 스킵", "강화 연출은 우측 상단의 SKIP 버튼으로 건너뛰실 수 있습니다."] ] },
          { type: "facts", photo: "enhresult", label: "강화 결과", items: [
            ["성공하면", "상승한 장착 가능 회수와 능력치가 표시됩니다."],
            ["자동 닫힘", "확인을 누르지 않아도 5초 후 자동으로 닫힙니다. '앞으로 연출 스킵'을 선택하면 다음부터 연출을 건너뜁니다."] ] },
          { type: "table", label: "레벨별 능력치 · 장착 가능 회수", text: "같은 타입의 프리스타일은 모두 능력치가 같습니다. 능력치는 중첩되지 않으며, 현재 레벨의 값이 해당 프리스타일로 슛할 때만 적용됩니다.",
            head: ["레벨", "점프슛<br><small>중거리 슛 · 3점 슛 수비 저항</small>", "레이업<br><small>골밑 · 원거리 레이업 블록 저항</small>", "덩크<br><small>골밑 덩크 모션 빠르기 · 원거리 덩크 수비 저항</small>", "장착 가능 회수"],
            rows: [["Lv.1", "+3% · +3%", "+10%", "+4.8% · +2.7%", "1회"], ["Lv.2", "+4.8% · +4.8%", "+25%", "+8.4% · +6.3%", "1회"], ["Lv.3", "+5.76% · +5.7%", "+30%", "+10.2% · +11.7%", "2회"], ["Lv.4", "+6.6% · +6.6%", "+40%", "+13.8% · +18.9%", "2회"], ["Lv.5", "+8.16% · +8.1%", "+50%", "+17.4% · +22.5%", "3회"]],
            note: ["퀵 포인트1 · 2는 기존 능력치가 그대로 유지됩니다(Lv.1 중거리 슛 수비 저항 +0.36% · 3점 슛 수비 저항 +0.18% → Lv.5 +1.8% · +0.9%).", "덩크는 거리에 따라 능력치가 하나만 적용됩니다. 골밑 덩크는 모션 빠르기, 원거리 덩크는 수비 저항이 적용됩니다.", "슛 성공률은 모든 프리스타일 · 모든 레벨에서 캐릭터의 슛 성공률이 그대로 적용됩니다(배율 100%)."] },
          { type: "table", label: "리뉴얼 전과 달라진 점 (Lv.5 기준)", grid: true, text: "능력치 종류가 바뀐 프리스타일과 사용 횟수 변화를 정리했습니다.",
            head: ["프리스타일", "능력치", "리뉴얼 전", "리뉴얼 후"],
            rows: [["무릎 지옥", "중거리 슛 모션 빠르기", "+48%", "–"], ["", "3점 슛 모션 빠르기", "+40%", "–"], ["", "3점 슛 수비 저항", "–", "+8.1%"], ["", "중거리 슛 수비 저항", "–", "+8.16%"], ["레이업 덩크 · 투핸드 파워슬램 · 원핸드슬램", "골밑 덩크 모션 빠르기", "+24%", "+17.4%"], ["", "원거리 덩크 수비 저항", "–", "+22.5%"], ["메테오잼 · 가위치기 · 720도 덩크", "원거리 덩크 모션 빠르기", "+24%", "–"], ["", "원거리 덩크 수비 저항", "–", "+22.5%"], ["", "골밑 덩크 모션 빠르기", "–", "+17.4%"], ["모든 프리스타일", "Lv.5 사용 횟수", "5회 (퀵 포인트 4회)", "3회"]],
            note: ["줄어든 능력치 대신 다른 능력치가 새로 추가되거나 크게 상승했습니다.", "일부 레이업은 새로운 모션 적용으로 블록 가능 시간이 변경되었습니다. 투핸드 레이업 · 퀵 레이업 · 소프트 터치는 길어지고 360도 레이업 · 트리플 클러치는 짧아졌으며, 블록 저항은 최대 +50%까지 상승했습니다."] } ] },

      { id: "dex", nav: "프리스타일별 변화", title: "프리스타일별로 무엇이 바뀌었나요?", q: "프리스타일을 누르면 변경 전 · 후 영상과 레벨별 능력치 · 장착 가능 회수를 함께 비교해 보실 수 있습니다.",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "기존 보유자", title: "보유하고 있던 프리스타일은 어떻게 되나요?", q: "리뉴얼 전에 보유하고 계셨던 프리스타일과 아이템의 변경 사항을 안내해 드립니다.",
        blocks: [
          { type: "alert", text: "<b>보유하고 있던 프리스타일은 현재 레벨을 유지한 채 신규 시스템으로 이전됩니다.</b> Lv.2 였다면 Lv.2 로 시작해 Lv.3 부터 이어서 강화하실 수 있습니다." },
          { type: "facts", photo: "sell", items: [
            ["강화 티켓 지급", "점검 시작 시점에 보유한 Lv.2 이상 프리스타일 1개(캐릭터별)마다 아래 표의 수량을 합산해 지급해 드립니다."],
            ["지급 방법", "인벤토리로 바로 지급되며, 안내 메일도 함께 발송됩니다."],
            ["능력치 · 장착 가능 회수", "이미 강화한 프리스타일에도 새 능력치와 레벨별 새 장착 가능 회수가 적용됩니다."],
            ["남은 조각 · 티켓", "더 이상 사용할 수 없으며, 매니지먼트 › 인벤토리에서 아래 표의 가격으로 판매하실 수 있습니다."],
            ["보유한 팩", "계속 사용할 수 있지만, 팩에서 획득한 조각은 사용할 수 없습니다(코인으로 판매 가능)."] ],
            note: "레벨별 능력치와 장착 가능 회수는 <a href=\"#enhance\">강화</a> 단원의 '레벨별 능력치 · 장착 가능 회수' 표를 참고해 주세요." },
          { type: "table", label: "강화 티켓 지급 수량", text: "",
            head: ["보유 레벨", "1개당 지급 수량"],
            rows: [["Lv.1", "없음"], ["Lv.2", "4장"], ["Lv.3", "12장"], ["Lv.4", "30장"], ["Lv.5", "60장"]],
            note: [] },
          { type: "table", label: "판매 가격", text: "",
            head: ["항목", "1개당 가격"],
            rows: [["조각", "500코인"], ["조각 티켓", "500코인"], ["실버 티켓", "2,000코인"], ["골드 티켓", "3,000코인"]],
            note: [] } ] },

      { id: "faq", nav: "자주 묻는 질문", title: "자주 묻는 질문", q: "문의가 많은 내용을 모았습니다.",
        blocks: [
          { type: "faq", items: [
            ["보유하고 있던 조각은 어떻게 되나요?", "프리스타일을 코인으로 직접 구매하고 강화하는 방식으로 바뀌어, 조각은 더 이상 사용할 수 없습니다. 캐릭터별로 보유한 조각은 <b>매니지먼트 › 인벤토리</b>에서 코인으로 판매하실 수 있으며, 가격은 <a href=\"#legacy\">기존 보유자</a> 단원의 표에서 확인하실 수 있습니다."],
            ["리뉴얼 전에 레벨을 올려 둔 프리스타일은 보상이 있나요?", "네, 있습니다. 점검 시작 시점에 보유한 프리스타일의 레벨에 따라 <b>모션 강화 티켓</b>이 인벤토리로 지급되며, 안내 메일도 함께 발송됩니다. 지급 수량은 <a href=\"#legacy\">기존 보유자</a> 단원의 표에서 확인하실 수 있습니다. 강화 티켓은 포인트 강화 1회를 대신해 사용하실 수 있습니다."],
            ["Lv.2 였던 프리스타일을 새 시스템에서 이어서 강화할 수 있나요?", "네. 레벨이 그대로 유지되므로 Lv.2 로 시작해 Lv.3 부터 이어서 강화하실 수 있습니다."],
            ["보유하고 있던 프리스타일에도 새 능력치가 적용되나요?", "네. 이미 강화한 프리스타일도 새 능력치로 바뀌며, 장착 가능 회수도 레벨별 새 기준이 적용됩니다."],
            ["강화에 실패하면 프리스타일이 사라지나요?", "아니요. 강화에 실패해도 현재 레벨이 유지됩니다."],
            ["여러 캐릭터에서 사용하려면 어떻게 하나요?", "프리스타일은 캐릭터별로 구매하셔야 합니다."],
            ["페이크를 사용하면 다음 슬롯으로 넘어가나요?", "아니요. 실제로 슛을 해야 해당 슬롯이 사용됩니다."],
            ["구매한 프리스타일이 사이클에 장착되지 않았습니다.", "사이클에 빈 슬롯이 없으면 보유만 됩니다. 모션 사이클에서 직접 장착해 주세요."],
            ["더 이상 강화할 수 없다고 표시됩니다.", "최고 레벨(Lv.5)에 도달한 프리스타일입니다. 다른 프리스타일을 선택해 주세요."] ] } ] }
    ]
  },
  en: {
    site: "Freestyle Guide", ribbon: "Updated Nov. 18th, 2026", title: "Freestyle System Renewal",
    lead: "Buy the Freestyle you want and set it in the order you want. Compare the updated motions side by side.",
    ended: "Ended",
    ui: {
      search: "Search Freestyles", all: "All", unit: "",
      cat: { jump: "Jump Shot", layup: "Layup", dunk: "Dunk" },
      before: "Before", after: "After", isNew: "New", newOnly: "This is a new Freestyle, so there is no 'before' video.",
      was: "Previous name", replay: "Replay together", slow: "Slow", normal: "Normal speed",
      videoNote: "Preview footage recorded in the practice court. It may differ from actual matches.",
      prev: "Previous", next: "Next", close: "Close", none: "None", photo: "Image coming soon", mock: "In development",
      noResult: "No Freestyles found.", dialog: "Freestyle comparison", tabs: "Sections", compareHint: "Tap to compare video and stats", statTitle: "Stats and limits by level", lv: "Level", useOld: "Times Used", useNew: "Equip Limit", statDunk: "Only one dunk stat applies, depending on distance: Short Distance Dunk Speed for short distance dunks and Long Distance Dunk Defense Resist for long distance dunks."
    },
    chapters: [
      { id: "overview", nav: "What's New", title: "Here's How Freestyle Is Changing", q: "No more packs, pieces or tickets. Buy the Freestyle you want and set your own order for Jump Shot, Layup and Dunk.",
        blocks: [
          { type: "keys", items: [
            ["Buy Directly", "Pick a Freestyle and get it at Lv.1 with Coins"],
            ["Freestyle Cycle", "A separate cycle for Jump Shot, Layup and Dunk, in any slot and order"],
            ["Level Up to Lv.5", "Enhance with Points or Coins. Your level stays even if it fails"],
            ["3 New Freestyles", "360 Screw Shot · Under-the-Leg Layup · 360 Honey Dip"] ] },
          { type: "compare", eyebrow: "AT A GLANCE", label: "Before vs After", head: ["", "Before", "After"], rows: [
            ["How to get", "Silver · Gold · Platinum Packs → Pieces → Combine", "Pick a Freestyle and buy it with Coins", "up"],
            ["Enhancement", "Combine Pieces", "Points or Coins up to Lv.5, success rate shown on screen", "change"],
            ["Level safety", "You had to wait until the right pieces came out of packs", "Even if an enhancement fails, the level never drops and the Freestyle never disappears, so you can try again anytime", "keep"],
            ["Equipping", "Fixed order, by use count", "Place them in any slot and order in each cycle", "up"],
            ["Layup / Dunk types", "Separate Short and Long Distance motions", "One motion works at both distances", "change"],
            ["Shot fakes", "Move on to the next motion", "Don't use a slot. Only actual shots do", "change"],
            ["In-match", "–", "NOW (just used) and NEXT shown right after each shot", "up"] ] },
          { type: "facts", label: "Where to find it", items: [
            ["Menu", "Characters › select a character › Freestyle Motion"],
            ["First visit", "A how-to guide plays automatically."] ] },
          { type: "table", label: "3 menus", text: "",
            head: ["Screen", "What you can do"],
            rows: [["Motion Cycle", "See your Freestyles, equip · unequip · reset slots and set the order (opens first)"], ["Purchase Motion", "Buy Freestyles with Coins, filter by type and watch previews"], ["Motion Enhancement", "Pick a Freestyle and enhance it with Points or Coins"]],
            note: ["Press the Web Guide button on the Motion Cycle or Motion Enhancement screen to open this guide."] } ] },

      { id: "buy", nav: "Buy", title: "How do I get Freestyles?", q: "No need to open packs and collect pieces. Just pick the Freestyle you want.",
        blocks: [
          { type: "facts", photo: "buy", items: [
            ["Price", "Lv.1 Freestyles cost 32,000 Coins, the same for every Freestyle."],
            ["Starting level", "You get it at Lv.1 and can enhance it up to Lv.5."],
            ["Per character", "Bought separately for each character. The character you have selected gets it."],
            ["Freestyles you own", "Shown as unavailable in the purchase list."],
            ["Browse", "Use the All · Jump Shot · Layup · Dunk tabs."],
            ["Removed", "Freestyle Packs · Pieces · Tickets"] ] },
          { type: "facts", photo: "shop", label: "Buy in the Shop too", items: [
            ["Where", "You can also buy them in Shop › Freestyle Motion for the same price."] ] },
          { type: "facts", photo: "confirm", label: "Purchase check", items: [
            ["Confirm window", "Before you buy, the Freestyle, its price and the character who gets it are shown once more."] ] },
          { type: "facts", photo: "autoequip", label: "Equip to an empty slot", items: [
            ["If a slot is empty", "Right after buying, you are asked whether to equip it to an empty slot in your Cycle. Confirm to put it in the first empty slot."],
            ["If you cancel or no slot is empty", "You just own it. Equip it yourself in the Cycle."] ] } ] },

      { id: "cycle", nav: "Cycle", title: "How does the Cycle work?", q: "Jump Shot, Layup and Dunk each have a cycle, and Freestyles come out in the order of the slots.",
        blocks: [
          { type: "facts", photo: "cycle", label: "3 Cycles (10 slots each)", items: [
            ["Jump Shot Cycle", "Jump Shot Freestyles only."],
            ["Layup Cycle", "Layup Freestyles only."],
            ["Dunk Cycle", "Dunk Freestyles only."],
            ["Empty slot", "Your default motion is used."] ] },
          { type: "facts", photo: "order", label: "Set Your Order", items: [
            ["Placement", "Each slot holds one Freestyle. Arrange them in any order you like."],
            ["Equip Limit", "To equip the same Freestyle in more slots, enhance it to raise its Equip Limit. The limit at each level is in the \"Stats and Equip Limit by level\" table in <a href=\"#enhance\">Enhance</a>."] ] },
          { type: "facts", label: "Manage Cycle", items: [
            ["Switch type", "Use L1 · R1 (Q · W on keyboard) to switch between the Jump Shot, Layup and Dunk cycles."],
            ["Equip", "In Manage Cycle, pick a slot, choose a Freestyle from the list and press Equip Motion. The equipped motion and the one you chose are shown side by side."],
            ["Selectable N", "How many more slots that Freestyle can go into."],
            ["Unequip · Reset", "Unequip Motion puts that slot back to the default motion. Reset Equipment clears every slot of the current type at once."],
            ["List order", "Sorted by highest level, then most selectable, then most recently obtained."] ] },
          { type: "facts", label: "Freestyle Motion Rules", items: [
            ["Order", "Freestyles come out in slot order."],
            ["Shot fakes", "Shot fakes don't use a slot."],
            ["Use", "A slot is only used when you actually shoot. Passing or double clutching mid-shot also counts as used. Skill shots don't use slots."],
            ["After one round", "Once the last slot is used, your default motion is used and the used slots turn dark in the cycle display (the cycle doesn't repeat). In lobby practice, the cycle keeps repeating."],
            ["NOW · NEXT", "Right after each shot, the motion you just used (NOW) and the next one (NEXT) are shown at the bottom right of the screen."] ] } ] },

      { id: "enhance", nav: "Enhance", title: "How does Enhancement work?", q: "Enhance up to Lv.5 with Points or Coins. Higher levels give better stats and more cycle slots.",
        blocks: [
          { type: "facts", photo: "enhance", items: [
            ["Success", "Level up with fixed stat gains, not random."],
            ["Failure", "Your level stays; only the currency is used."],
            ["At Lv.5", "It can't be enhanced any further. Please select another Freestyle."],
            ["During events", "Enhancement discounts or bonus success rates may apply."],
            ["Motion Enhancement Ticket", "Can be used in place of Points for one enhancement, with the same success rate. See <a href=\"#legacy\">Current Owners</a> for who receives them."] ] },
          { type: "table", label: "Cost and success rate", text: "",
            head: ["Enhancement", "Point Enhancement<br><small>10 Points per try</small>", "Coin Enhancement<br><small>20,000 Coins per try</small>"],
            rows: [["Lv.1 → Lv.2", "30%", "20%"], ["Lv.2 → Lv.3", "20%", "10%"], ["Lv.3 → Lv.4", "10%", "3.3%"], ["Lv.4 → Lv.5", "5%", "1.3%"]],
            note: ["The same for every Freestyle. Motion Enhancement Tickets use the Point Enhancement rate."] },
          { type: "facts", photo: "enhanim", label: "Enhancement animation", items: [
            ["Skip", "You can skip the enhancement animation with SKIP at the top right."] ] },
          { type: "facts", photo: "enhresult", label: "Enhancement result", items: [
            ["On success", "The raised Equip Limit and stats are shown."],
            ["Closes by itself", "It closes after 5 seconds even if you don't press Confirm. Choose Skip Animation to skip it from then on."] ] },
          { type: "table", label: "Stats and Equip Limit by level", text: "Freestyles of the same type have the same stats. Stats don't stack: only your current level applies, and only while shooting with that Freestyle.",
            head: ["Level", "Jump Shot<br><small>Mid Range · 3 Point Shot Defense Resist</small>", "Layup<br><small>Short · Long Distance Layup Block Resist</small>", "Dunk<br><small>Short Distance Dunk Speed · Long Distance Dunk Defense Resist</small>", "Equip Limit"],
            rows: [["Lv.1", "+3% · +3%", "+10%", "+4.8% · +2.7%", "1"], ["Lv.2", "+4.8% · +4.8%", "+25%", "+8.4% · +6.3%", "1"], ["Lv.3", "+5.76% · +5.7%", "+30%", "+10.2% · +11.7%", "2"], ["Lv.4", "+6.6% · +6.6%", "+40%", "+13.8% · +18.9%", "2"], ["Lv.5", "+8.16% · +8.1%", "+50%", "+17.4% · +22.5%", "3"]],
            note: ["Quick Point1 · 2 keep their previous stats (Lv.1 Mid Range Shot Defense Resist +0.36% · 3 Point Shot Defense Resist +0.18% → Lv.5 +1.8% · +0.9%).", "Dunks apply one stat by distance: Short Distance Dunk Speed for short distance dunks, Long Distance Dunk Defense Resist for long distance dunks.", "Shot success rate is your character's own rate for every Freestyle at every level (multiplier 100%)."] },
          { type: "table", label: "What changed from before (at Lv.5)", grid: true, text: "Freestyles whose stat types changed, and the change in use count.",
            head: ["Freestyle", "Stat", "Before", "After"],
            rows: [["Knee Hell", "Mid Range Shot Release Speed", "+48%", "–"], ["", "3 Point Shot Release Speed", "+40%", "–"], ["", "3 Point Shot Defense Resist", "–", "+8.1%"], ["", "Mid Range Shot Defense Resist", "–", "+8.16%"], ["Layup Dunk · Two-Handed Power Slam · One-Handed Slam", "Short Distance Dunk Speed", "+24%", "+17.4%"], ["", "Long Distance Dunk Defense Resist", "–", "+22.5%"], ["Meteor Jam · Scissors Throw · 720 Dunk", "Long Distance Dunk Speed", "+24%", "–"], ["", "Long Distance Dunk Defense Resist", "–", "+22.5%"], ["", "Short Distance Dunk Speed", "–", "+17.4%"], ["All Freestyles", "Lv.5 use count", "5 times (Quick Point 4)", "3 slots"]],
            note: ["Where a stat went down, another stat was added or raised a lot.", "Some layups have new motions, so their block window changed. Two-Handed Layup, Quick Layup and Soft Touch got longer, while 360 Layup and Triple Clutch got shorter, and Block Resist now goes up to +50%."] } ] },

      { id: "dex", nav: "By Freestyle", title: "What changed for each Freestyle?", q: "Select a Freestyle to compare its before and after videos, stats by level and Equip Limit.",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "Current Owners", title: "What happens to my Freestyles?", q: "How the Freestyles and items you had before the Renewal will change.",
        blocks: [
          { type: "alert", text: "<b>Your Freestyles move to the new system at their current level.</b> A Lv.2 Freestyle starts at Lv.2, and you can keep enhancing it from there." },
          { type: "facts", photo: "sell", items: [
            ["Motion Enhancement Tickets", "For each Lv.2+ Freestyle you owned when the maintenance began (per character), the tickets in the table below are added up and sent."],
            ["Where you get them", "Sent straight to your Inventory, with a notification mail."],
            ["Stats · Equip Limit", "Freestyles you already upgraded also get the new stats and the new Equip Limit for their level."],
            ["Leftover Pieces · Tickets", "They can no longer be used. Sell them in Management › Inventory for the prices in the table below."],
            ["Packs you own", "You can still open them, but the pieces from them can't be used (sell them for Coins)."] ],
            note: "For stats and Equip Limit at each level, see the \"Stats and Equip Limit by level\" table in <a href=\"#enhance\">Enhance</a>." },
          { type: "table", label: "Motion Enhancement Tickets granted", text: "",
            head: ["Level you had", "Tickets per Freestyle"],
            rows: [["Lv.1", "None"], ["Lv.2", "4"], ["Lv.3", "12"], ["Lv.4", "30"], ["Lv.5", "60"]],
            note: [] },
          { type: "table", label: "Selling prices", text: "",
            head: ["Item", "Price each"],
            rows: [["Piece", "500 Coins"], ["Freestyle Piece Ticket", "500 Coins"], ["Freestyle Silver Ticket", "2,000 Coins"], ["Freestyle Gold Ticket", "3,000 Coins"]],
            note: [] } ] },

      { id: "faq", nav: "FAQ", title: "FAQ", q: "Answers to frequently asked questions.",
        blocks: [
          { type: "faq", items: [
            ["What happens to the pieces I had?", "Freestyles are now bought and enhanced with Coins, so pieces can no longer be used. The pieces each character had can be sold for Coins in <b>Management › Inventory</b>. See <a href=\"#legacy\">Current Owners</a> for the prices."],
            ["Do I get anything for Freestyles I upgraded before the Renewal?", "Yes. <b>Motion Enhancement Tickets</b> are sent to your Inventory based on the level of each Freestyle you owned when the maintenance began, with a notification mail. See <a href=\"#legacy\">Current Owners</a> for the amounts. Each ticket can be used in place of one Point Enhancement."],
            ["Can I keep enhancing a Lv.2 Freestyle in the new system?", "Yes. Its level stays the same, so it starts at Lv.2 and you can enhance it from Lv.3 on."],
            ["Do the new stats apply to Freestyles I already own?", "Yes. Freestyles you already upgraded get the new stats, and their Equip Limit also follows the new rule for each level."],
            ["Will my Freestyle disappear if an enhancement fails?", "No. It keeps its current level."],
            ["How do I use a Freestyle on more than one character?", "Freestyles are bought separately for each character."],
            ["Does a fake move on to the next slot?", "No. The slot is used only when you actually shoot."],
            ["The Freestyle I bought isn't in my Cycle.", "If there is no empty slot in your Cycle, you just own it. Equip it yourself in the Cycle."],
            ["It says I can't enhance any further.", "That Freestyle is at the highest level (Lv.5). Please select another Freestyle."] ] } ] }
    ]
  },
  jp: {
    site: "フリースタイルガイド", ribbon: "2026/11/18 アップデート", title: "フリースタイルシステムリニューアル",
    lead: "欲しいフリースタイルをすぐに購入し、好きな順番で装着しましょう。変わったモーションは動画で見比べられます。",
    ended: "終了",
    ui: {
      search: "フリースタイル名で検索", all: "すべて", unit: "種",
      cat: { jump: "ジャンプシュート", layup: "レイアップ", dunk: "ダンク" },
      before: "変更前", after: "変更後", isNew: "新規", newOnly: "新しく追加されたフリースタイルのため、変更前の動画はありません。",
      was: "以前の名前", replay: "最初から一緒に見る", slow: "スロー", normal: "通常速度",
      videoNote: "練習場で撮影したプレビュー動画のため、実際の試合画面とは異なる場合があります。",
      prev: "前へ", next: "次へ", close: "閉じる", none: "なし", photo: "画像準備中", mock: "開発中の画面",
      noResult: "該当するフリースタイルがありません。", dialog: "フリースタイル変更比較", tabs: "目次", compareHint: "タップで動画・能力値を比較", statTitle: "レベル別の能力値・回数", lv: "レベル", useOld: "使用回数", useNew: "装着可能回数", statDunk: "ダンクの能力値は距離に応じて1つだけ適用されます。ショートダンクはモーション速度、ロングダンクは守備抵抗です。"
    },
    chapters: [
      { id: "overview", nav: "変更点", title: "フリースタイルはこう変わります", q: "パック・ピース・チケットなしで欲しいフリースタイルをすぐに購入し、ジャンプシュート・レイアップ・ダンクごとに好きな順番で装着します。",
        blocks: [
          { type: "keys", items: [
            ["すぐに購入", "欲しいフリースタイルを選んでコインで購入、Lv.1 で獲得"],
            ["フリースタイルサイクル", "ジャンプシュート・レイアップ・ダンクごとに、好きな枠・順番で装着"],
            ["Lv.5 まで強化", "ポイントまたはコインで強化、失敗してもレベルはそのまま"],
            ["新規フリースタイル3種", "360スクリューショット・アンダーザレッグレイアップ・360ハニーディップ"] ] },
          { type: "compare", eyebrow: "AT A GLANCE", label: "変更前・変更後", head: ["", "変更前", "変更後"], rows: [
            ["入手方法", "シルバー・ゴールド・プラチナパック → ピース → 合成", "欲しいフリースタイルを選んでコインで購入", "up"],
            ["強化", "ピース合成", "ポイントまたはコインで Lv.5 まで、成功確率は画面で確認", "change"],
            ["レベルの安心", "欲しいピースがパックから出るまで待つ必要があった", "失敗してもレベルが下がったりフリースタイルが消えたりしないので、いつでも再挑戦できる", "keep"],
            ["装着", "使用回数による固定順", "サイクルごとに好きな枠・順番に配置", "up"],
            ["レイアップ・ダンクの区分", "ショート用・ロング用のモーションが別々", "1つのモーションでショート・ロング両方に対応", "change"],
            ["フェイク", "次のモーションに進む", "進まない。実際にシュートした時だけ枠を使用", "change"],
            ["試合中", "–", "シュートの直後に今（NOW）・次（NEXT）のモーションを表示", "up"] ] },
          { type: "facts", label: "どこにありますか", items: [
            ["メニュー", "キャラクター › キャラクター選択 › フリースタイルモーション"],
            ["初めて入ると", "使い方ガイドが自動で再生されます。"] ] },
          { type: "table", label: "メニュー3つ", text: "",
            head: ["画面", "できること"],
            rows: [["モーションサイクル", "所持フリースタイルの確認、サイクル枠への装着・解除・初期化、順番の設定（最初に開く画面）"], ["モーション購入", "フリースタイルをコインで購入、タイプ別の表示、プレビュー動画"], ["モーション強化", "フリースタイルを選んでポイントまたはコインで強化"]],
            note: ["モーションサイクル・モーション強化画面の「Webガイド」ボタンを押すと、このガイドが開きます。"] } ] },

      { id: "buy", nav: "購入", title: "フリースタイルはどうやって手に入れますか？", q: "パックを開けてピースを集める必要はありません。欲しいフリースタイルを選ぶだけです。",
        blocks: [
          { type: "facts", photo: "buy", items: [
            ["購入価格", "Lv.1 フリースタイルは 32,000コインで、すべてのフリースタイルが同じ価格です。"],
            ["最初のレベル", "Lv.1 で入手し、Lv.5 まで強化できます。"],
            ["キャラクターごと", "キャラクターごとに購入します。選択中のキャラクターが受け取ります。"],
            ["所持しているフリースタイル", "購入リストで購入不可と表示されます。"],
            ["絞り込み", "すべて・ジャンプシュート・レイアップ・ダンクのタブで分けて見られます。"],
            ["廃止", "フリースタイルパック・ピース・チケット"] ] },
          { type: "facts", photo: "shop", label: "ショップでも購入", items: [
            ["場所", "ショップ › フリースタイルモーションでも同じ価格で購入できます。"] ] },
          { type: "facts", photo: "confirm", label: "購入の確認", items: [
            ["確認画面", "購入前に、フリースタイル名・価格・受け取るキャラクターがもう一度表示されます。"] ] },
          { type: "facts", photo: "autoequip", label: "空き枠にすぐ装着", items: [
            ["空き枠があるとき", "購入直後に、サイクルの空き枠に装着するか確認されます。確認すると、いちばん前の空き枠1つに入ります。"],
            ["キャンセルしたとき・空き枠がないとき", "所持のみとなります。サイクルで直接装着してください。"] ] } ] },

      { id: "cycle", nav: "サイクル", title: "サイクルはどう動きますか？", q: "ジャンプシュート・レイアップ・ダンクごとにサイクルがあり、枠の順番どおりにフリースタイルが出ます。",
        blocks: [
          { type: "facts", photo: "cycle", label: "3つのサイクル（タイプごとに10枠）", items: [
            ["ジャンプシュートサイクル", "ジャンプシュートのフリースタイルのみ装着できます。"],
            ["レイアップサイクル", "レイアップのフリースタイルのみ装着できます。"],
            ["ダンクサイクル", "ダンクのフリースタイルのみ装着できます。"],
            ["空いている枠", "基本モーションが出ます。"] ] },
          { type: "facts", photo: "order", label: "順番を決める", items: [
            ["配置", "1つの枠にはフリースタイルを1つだけ入れられ、好きな順番に配置できます。"],
            ["装着可能回数", "同じフリースタイルを複数の枠に入れるには、強化で装着可能回数を増やします。レベルごとの回数は<a href=\"#enhance\">「強化」</a>の「レベル別の能力値・装着可能回数」の表にあります。"] ] },
          { type: "facts", label: "サイクル管理", items: [
            ["タイプの切り替え", "L1・R1（キーボードは Q・W）でジャンプシュート・レイアップ・ダンクのサイクルを切り替えます。"],
            ["装着", "「サイクル管理」で枠を選び、リストからフリースタイルを選んで「モーション装着」を押します。装着中のモーションと選んだモーションが並んで表示されます。"],
            ["選択可能 N", "そのフリースタイルをあと何枠に入れられるかです。"],
            ["解除・初期化", "「モーション解除」はその枠を基本モーションに戻し、「装着初期化」は今のタイプの枠をまとめて空にします。"],
            ["リストの順番", "レベルが高い順、選択可能数が多い順、最近入手した順に並びます。"] ] },
          { type: "facts", label: "フリースタイルモーション適用ルール", items: [
            ["順番", "枠の順番どおりにフリースタイルが出ます。"],
            ["フェイク", "フェイクでは次の枠に進みません。"],
            ["使用", "実際にシュートしたときだけ枠を使います。シュート中のパス・ダブルクラッチも使用扱いです。スキルシュートでは使いません。"],
            ["1周したら", "最後の枠を使った後は基本モーションが出て、使い終わった枠はサイクル表示で暗くなります（サイクルは繰り返しません）。ロビーの練習ではサイクルが最初から繰り返されます。"],
            ["NOW · NEXT", "シュートの直後に、今使ったモーション（NOW）と次のモーション（NEXT）が試合画面の右下に表示されます。"] ] } ] },

      { id: "enhance", nav: "強化", title: "強化はどう行いますか？", q: "ポイントまたはコインで Lv.5 まで強化します。レベルが上がるほど能力値が上がり、装着できる枠も増えます。",
        blocks: [
          { type: "facts", photo: "enhance", items: [
            ["成功すると", "レベルが上がり、能力値が決まった分だけ上がります（ランダムではありません）。"],
            ["失敗すると", "レベルはそのままで、使った通貨のみ消費されます。"],
            ["Lv.5 になると", "これ以上強化できません。別のフリースタイルを選んでください。"],
            ["イベント期間", "強化費用の割引や成功確率の追加が付くことがあります。"],
            ["強化チケット", "ポイント強化1回の代わりに使えるチケットで、成功確率もポイント強化と同じです。配布の基準は<a href=\"#legacy\">「既存の所持者」</a>にあります。"] ] },
          { type: "table", label: "強化費用・成功確率", text: "",
            head: ["強化", "ポイント強化<br><small>1回 10ポイント</small>", "コイン強化<br><small>1回 20,000コイン</small>"],
            rows: [["Lv.1 → Lv.2", "30%", "20%"], ["Lv.2 → Lv.3", "20%", "10%"], ["Lv.3 → Lv.4", "10%", "3.3%"], ["Lv.4 → Lv.5", "5%", "1.3%"]],
            note: ["すべてのフリースタイル共通です。強化チケットはポイント強化と同じ確率です。"] },
          { type: "facts", photo: "enhanim", label: "強化演出", items: [
            ["スキップ", "強化演出は右上の SKIP でスキップできます。"] ] },
          { type: "facts", photo: "enhresult", label: "強化結果", items: [
            ["成功すると", "上がった装着可能回数と能力値が表示されます。"],
            ["自動で閉じる", "確認を押さなくても5秒後に閉じます。「今後演出をスキップ」を選ぶと、次から演出をスキップします。"] ] },
          { type: "table", label: "レベル別の能力値・装着可能回数", text: "同じタイプのフリースタイルは能力値が同じです。能力値は累積せず、現在のレベルの値のみ、そのフリースタイルでシュートする間だけ適用されます。",
            head: ["レベル", "ジャンプシュート<br><small>ミドル・3点シュート守備抵抗</small>", "レイアップ<br><small>ショート・ロングレイアップブロック抵抗</small>", "ダンク<br><small>ショートダンクモーション速度・ロングダンク守備抵抗</small>", "装着可能回数"],
            rows: [["Lv.1", "+3% · +3%", "+10%", "+4.8% · +2.7%", "1枠"], ["Lv.2", "+4.8% · +4.8%", "+25%", "+8.4% · +6.3%", "1枠"], ["Lv.3", "+5.76% · +5.7%", "+30%", "+10.2% · +11.7%", "2枠"], ["Lv.4", "+6.6% · +6.6%", "+40%", "+13.8% · +18.9%", "2枠"], ["Lv.5", "+8.16% · +8.1%", "+50%", "+17.4% · +22.5%", "3枠"]],
            note: ["クイックポイント1・2は既存の能力値を維持します（Lv.1 ミドルシュート守備抵抗 +0.36%・3点シュート守備抵抗 +0.18% → Lv.5 +1.8%・+0.9%）。", "ダンクは距離ごとに1つだけ適用されます: ショートダンクはモーション速度、ロングダンクは守備抵抗。", "シュート成功率は、すべてのフリースタイル・すべてのレベルでキャラクターのシュート成功率そのままです（倍率100%）。"] },
          { type: "table", label: "リニューアル前からの変化（Lv.5 基準）", grid: true, text: "能力値の種類が変わったフリースタイルと、使用回数の変化です。",
            head: ["フリースタイル", "能力値", "リニューアル前", "リニューアル後"],
            rows: [["膝地獄", "ミドルシュートモーション速度", "+48%", "–"], ["", "3点シュートモーション速度", "+40%", "–"], ["", "3点シュート守備抵抗", "–", "+8.1%"], ["", "ミドルシュート守備抵抗", "–", "+8.16%"], ["レイアップダンク・ツーハンドパワースラム・ワンハンドスラム", "ショートダンクモーション速度", "+24%", "+17.4%"], ["", "ロングダンク守備抵抗", "–", "+22.5%"], ["メテオジャム・ハサミ打ち・720度ダンク", "ロングダンクモーション速度", "+24%", "–"], ["", "ロングダンク守備抵抗", "–", "+22.5%"], ["", "ショートダンクモーション速度", "–", "+17.4%"], ["すべてのフリースタイル", "Lv.5 の使用回数", "5回（クイックポイント 4回）", "3枠"]],
            note: ["下がった能力値の代わりに、別の能力値が新しく付いたり大きく上がったりしています。", "一部のレイアップは新しいモーションになり、ブロックされうる時間が変わりました。ツーハンドレイアップ・クイックレイアップ・ソフトタッチは長く、360度レイアップ・トリプルクラッチは短くなり、ブロック抵抗は最大 +50% まで上がりました。"] } ] },

      { id: "dex", nav: "フリースタイル別の変化", title: "フリースタイルごとに何が変わりましたか？", q: "フリースタイルを選ぶと、変更前・後の動画とレベル別の能力値・装着可能回数を比べられます。",
        blocks: [ { type: "dex" } ] },

      { id: "legacy", nav: "既存の所持者", title: "持っていたフリースタイルはどうなりますか？", q: "リニューアル前に持っていたフリースタイルとアイテムがどう変わるかをご案内します。",
        blocks: [
          { type: "alert", text: "<b>お持ちのフリースタイルは、レベルそのままで新しいシステムに移行されます。</b> Lv.2 だったものは Lv.2 から始まり、Lv.3 以降も続けて強化できます。" },
          { type: "facts", photo: "sell", items: [
            ["強化チケットの配布", "メンテナンス開始時点でお持ちだった Lv.2 以上のフリースタイル1つ（キャラクターごと）につき、下の表の枚数を合算して配布します。"],
            ["受け取り場所", "インベントリに直接届き、お知らせメールも送信されます。"],
            ["能力値・装着可能回数", "すでに強化していたフリースタイルにも、新しい能力値とレベルごとの新しい装着可能回数が適用されます。"],
            ["残ったピース・チケット", "今後は使用できません。マネジメント › インベントリで下の表の価格で売却できます。"],
            ["お持ちのパック", "引き続き開封できますが、パックから出たピースは使用できません（コインに売却可能）。"] ],
            note: "レベルごとの能力値と装着可能回数は<a href=\"#enhance\">「強化」</a>の「レベル別の能力値・装着可能回数」の表をご覧ください。" },
          { type: "table", label: "強化チケットの配布枚数", text: "",
            head: ["お持ちだったレベル", "1つあたりの配布"],
            rows: [["Lv.1", "なし"], ["Lv.2", "4枚"], ["Lv.3", "12枚"], ["Lv.4", "30枚"], ["Lv.5", "60枚"]],
            note: [] },
          { type: "table", label: "売却価格", text: "",
            head: ["アイテム", "1個あたりの価格"],
            rows: [["ピース", "500コイン"], ["ピースチケット", "500コイン"], ["シルバーチケット", "2,000コイン"], ["ゴールドチケット", "3,000コイン"]],
            note: [] } ] },

      { id: "faq", nav: "よくある質問", title: "よくある質問", q: "お問い合わせの多い内容をまとめました。",
        blocks: [
          { type: "faq", items: [
            ["持っていたピースはどうなりますか？", "フリースタイルはコインで直接購入・強化する方式になったため、ピースは使用できなくなりました。キャラクターごとにお持ちのピースは<b>マネジメント › インベントリ</b>でコインに売却でき、価格は<a href=\"#legacy\">「既存の所持者」</a>の表にあります。"],
            ["リニューアル前にレベルを上げていたフリースタイルに補償はありますか？", "あります。メンテナンス開始時点でお持ちのフリースタイルのレベルに応じて<b>モーション強化チケット</b>がインベントリに配布され、お知らせメールも送信されます。配布枚数は<a href=\"#legacy\">「既存の所持者」</a>の表にあります。チケットはポイント強化1回の代わりに使えます。"],
            ["Lv.2 だったフリースタイルは新システムで続けて強化できますか？", "はい。レベルはそのまま維持されるので、Lv.2 から始まり Lv.3 以降も続けて強化できます。"],
            ["お持ちのフリースタイルにも新しい能力値が適用されますか？", "はい。すでに強化していたフリースタイルも新しい能力値になり、サイクルに入れられる装着可能回数もレベルごとの新しい基準に変わります。"],
            ["強化に失敗するとフリースタイルは消えますか？", "いいえ。レベルはそのまま維持されます。"],
            ["複数のキャラクターで使うには？", "フリースタイルはキャラクターごとに購入します。"],
            ["フェイクを使うと次の枠に進みますか？", "いいえ。実際にシュートしたときだけ、その枠が使われます。"],
            ["購入したフリースタイルがサイクルに装着されていません。", "サイクルに空き枠がない場合は所持のみとなります。サイクルで直接装着してください。"],
            ["これ以上強化できないと表示されます。", "最高レベル（Lv.5）に達したフリースタイルです。別のフリースタイルを選んでください。"] ] } ] }
    ]
  }
};
