/* 프리스타일 도감 — 카드 하나 = 모션 하나. 누르면 변경 전·후 영상을 나란히 보여 준다.
   code: 스킬 코드(영상 파일 이름과 같음) / cat: jump 점프슛 · layup 레이업 · dunk 덩크 (개편 후 사이클 3개 기준)
   was: 개편 전 이름(이름이 바뀐 경우) / isNew: 개편 때 새로 나온 모션(변경 전 영상 없음)
   영상: video/before/<code>.mp4 (기존 영상) · video/after/<code>.mp4 (새 영상), 썸네일: img/thumb/<code>.jpg
   이름 = 게임 텍스트(조각 아이템 이름에서 '조각'을 뺀 것, 2026-11-17 확인). 신규 3종 한글·영문은 기획 확정(11/18), 일본어는 공식 이름이 없어 임시 표기(확인되면 교체). */
window.FREESTYLES = [
  { code: 30006, cat: "jump",  kr: "360도 스크류 슛", en: "360 Screw Shot", jp: "360スクリューショット", isNew: true },   // 한글 확정(11/18), 일본어는 임시 표기
  { code: 30001, cat: "jump",  kr: "무릎 지옥", was: { kr: "무릎 차기" }, en: "Knee Hell", jp: "膝地獄", before: [["mid_spd", "+9.6%"], ["tp_spd", "+8%"]] },
  { code: 30002, cat: "jump",  kr: "스파이크 슛", en: "Spike shot", jp: "スパイクシュート", before: [["mid_blk", "+1.5%"], ["tp_blk", "+1.5%"]] },
  { code: 30003, cat: "jump",  kr: "퀵 포인트1", en: "Quick Point1", jp: "クイックポイント1", before: [["mid_def", "+0.36%"], ["tp_def", "+0.18%"]], grp: "quick" },
  { code: 30004, cat: "jump",  kr: "퀵 포인트2", en: "Quick Point2", jp: "クイックポイント2", before: [["mid_def", "+0.36%"], ["tp_def", "+0.18%"]], grp: "quick" },
  { code: 30005, cat: "jump",  kr: "비하인드 슛", en: "Behind Shot", jp: "ビハインドシュート", before: [["mid_def", "+0.36%"], ["tp_def", "+0.18%"]] },
  { code: 32006, cat: "layup", kr: "언더레그 레이업", en: "Under-the-Leg Layup", jp: "アンダーザレッグレイアップ", isNew: true },   // 한글 확정(11/18), 일본어는 임시 표기
  { code: 31001, cat: "layup", kr: "360도 레이업", en: "360 Layup", jp: "360度レイアップ", before: [["sl_blk", "+1.5%"]] },
  { code: 31002, cat: "layup", kr: "퀵 레이업", en: "Quick Layup", jp: "クイックレイアップ", before: [["sl_def", "+0.54%"]] },
  { code: 31003, cat: "layup", kr: "백패스 페이크 레이업", en: "Fake Back Pass Layup", jp: "バックパスフェイクレイアップ", before: [["sl_def", "+0.54%"]] },
  { code: 32001, cat: "layup", kr: "에어포인트", en: "Air Point", jp: "エアポイント", before: [["ll_blk", "+1.5%"]] },
  { code: 32002, cat: "layup", kr: "720도 레이업", en: "720 Layup", jp: "720度レイアップ", before: [["ll_blk", "+1.5%"]] },
  { code: 32003, cat: "layup", kr: "소프트 터치", en: "Soft Touch", jp: "ソフトタッチ", before: [["ll_def", "+0.54%"]] },
  { code: 32004, cat: "layup", kr: "투핸드 레이업", en: "Two-Handed Layup", jp: "ツーハンドレイアップ", before: [["ll_blk", "+1.5%"]] },
  { code: 32005, cat: "layup", kr: "트리플 클러치", en: "Triple Clutch", jp: "トリプルクラッチ", before: [["ll_blk", "+1.5%"]] },
  { code: 34006, cat: "dunk",  kr: "360도 허니딥", en: "360 Honey Dip", jp: "360ハニーディップ", isNew: true },   // 한글 확정(11/18), 일본어는 임시 표기
  { code: 33001, cat: "dunk",  kr: "레이업 덩크", en: "Layup Dunk", jp: "レイアップダンク", before: [["sd_spd", "+4.8%"]] },
  { code: 33002, cat: "dunk",  kr: "투핸드 파워슬램", en: "Two-Handed Power Slam", jp: "ツーハンドパワースラム", before: [["sd_spd", "+4.8%"]] },
  { code: 33003, cat: "dunk",  kr: "원핸드슬램", en: "One-Handed Slam", jp: "ワンハンドスラム", before: [["sd_spd", "+4.8%"]] },
  { code: 33004, cat: "dunk",  kr: "허니딥", en: "Honey Dip", jp: "ハニーディップ", before: [["sd_def", "+0.54%"]] },
  { code: 33005, cat: "dunk",  kr: "수박깨기", en: "Melon Smasher", jp: "メロン割り", before: [["sd_def", "+0.54%"]] },
  { code: 34001, cat: "dunk",  kr: "키스더림", en: "Kiss the Rim", jp: "キスドリム", before: [["ld_def", "+0.54%"]] },
  { code: 34002, cat: "dunk",  kr: "메테오잼", en: "Meteor Jam", jp: "メテオジャム", before: [["ld_spd", "+4.8%"]] },
  { code: 34003, cat: "dunk",  kr: "가위치기", en: "Scissors Throw", jp: "ハサミ打ち", before: [["ld_spd", "+4.8%"]] },
  { code: 34004, cat: "dunk",  kr: "함정카드", en: "Trap Card", jp: "罠カード", before: [["ld_blk", "+1.5%"]] },
  { code: 34005, cat: "dunk",  kr: "720도 덩크", en: "720 Dunk", jp: "720度ダンク", before: [["ld_spd", "+4.8%"]] }
];

/* 능력치(화면 표시값) — 출처: 기획서 「인게임 밸런스」 v11(2026-11-17), 이름은 게임 텍스트(텍스트 참조: 중거리 슛·3점 슛·골밑/원거리 레이업·덩크 + 수비저항·블록저항·모션빠르기).
   before = 개편 전 Lv.1 (위 목록의 각 모션; 원거리 덩크 모션빠르기 336 은 게임 화면 대조로 ×0.825 — 메테오잼 Lv.3 원값 24 = +19.8%, 11/18), after = 개편 후 Lv.1 (같은 타입이면 모두 같음, 퀵포인트1·2만 기존 유지) */
window.FS_STAT = {
  hold: false,   // 11/18 기획서(웹 가이드용 기획서)에 모션별 Lv.1~5 이전·이후 표가 올라와 공개. true 면 영상 창에 안 보임
  names: {
    mid_def: { kr: "중거리 슛 수비 저항", en: "Mid Range Shot Defense Resist", jp: "ミドルシュート守備抵抗" },
    tp_def:  { kr: "3점 슛 수비 저항", en: "3 Point Shot Defense Resist", jp: "3点シュート守備抵抗" },
    mid_spd: { kr: "중거리 슛 모션 빠르기", en: "Mid Range Shot Release Speed", jp: "ミドルシュートモーション速度" },
    tp_spd:  { kr: "3점 슛 모션 빠르기", en: "3 Point Shot Release Speed", jp: "3点シュートモーション速度" },
    mid_blk: { kr: "중거리 슛 블록 저항", en: "Mid Range Shot Block Resist", jp: "ミドルシュートブロック抵抗" },
    tp_blk:  { kr: "3점 슛 블록 저항", en: "3 Point Shot Block Resist", jp: "3点シュートブロック抵抗" },
    sl_blk:  { kr: "골밑 레이업 블록 저항", en: "Short Distance Layup Block Resist", jp: "ショートレイアップブロック抵抗" },
    ll_blk:  { kr: "원거리 레이업 블록 저항", en: "Long Distance Layup Block Resist", jp: "ロングレイアップブロック抵抗" },
    sl_def:  { kr: "골밑 레이업 수비 저항", en: "Short Distance Layup Defense Resist", jp: "ショートレイアップ守備抵抗" },
    ll_def:  { kr: "원거리 레이업 수비 저항", en: "Long Distance Layup Defense Resist", jp: "ロングレイアップ守備抵抗" },
    sd_spd:  { kr: "골밑 덩크 모션 빠르기", en: "Short Distance Dunk Speed", jp: "ショートダンクモーション速度" },
    sd_def:  { kr: "골밑 덩크 수비 저항", en: "Short Distance Dunk Defense Resist", jp: "ショートダンク守備抵抗" },
    ld_def:  { kr: "원거리 덩크 수비 저항", en: "Long Distance Dunk Defense Resist", jp: "ロングダンク守備抵抗" },
    ld_spd:  { kr: "원거리 덩크 모션 빠르기", en: "Long Distance Dunk Speed", jp: "ロングダンクモーション速度" },
    ld_blk:  { kr: "원거리 덩크 블록 저항", en: "Long Distance Dunk Block Resist", jp: "ロングダンクブロック抵抗" }
  },
  /* 레벨별 표(영상 창): 출처 = 기획서 '웹 가이드용 기획서'의 이전(CHARACTER_SKILL_STATIC)·이후(밸런스 v11) 모션별·등급별 표, 11/18.
     old = 리뉴얼 전: [능력치, Lv.1 값] — Lv.N = Lv.1 값 × N (기획서 표와 같음), u = Lv.1~5 사용 횟수 */
  old: {
    30001: { s: [["mid_spd", 9.6], ["tp_spd", 8]], u: [2, 3, 3, 4, 5] },
    30002: { s: [["mid_blk", 1.5], ["tp_blk", 1.5]], u: [2, 3, 3, 4, 5] },
    30003: { s: [["mid_def", 0.36], ["tp_def", 0.18]], u: [1, 2, 3, 3, 4] },
    30004: { s: [["mid_def", 0.36], ["tp_def", 0.18]], u: [1, 2, 3, 3, 4] },
    30005: { s: [["mid_def", 0.36], ["tp_def", 0.18]], u: [2, 3, 3, 4, 5] },
    31001: { s: [["sl_blk", 1.5]], u: [2, 3, 3, 4, 5] },
    31002: { s: [["sl_def", 0.54]], u: [2, 3, 3, 4, 5] },
    31003: { s: [["sl_def", 0.54]], u: [2, 3, 3, 4, 5] },
    32001: { s: [["ll_blk", 1.5]], u: [2, 3, 3, 4, 5] },
    32002: { s: [["ll_blk", 1.5]], u: [2, 3, 3, 4, 5] },
    32003: { s: [["ll_def", 0.54]], u: [2, 3, 3, 4, 5] },
    32004: { s: [["ll_blk", 1.5]], u: [2, 3, 3, 4, 5] },
    32005: { s: [["ll_blk", 1.5]], u: [2, 3, 3, 4, 5] },
    33001: { s: [["sd_spd", 4.8]], u: [2, 3, 3, 4, 5] },
    33002: { s: [["sd_spd", 4.8]], u: [2, 3, 3, 4, 5] },
    33003: { s: [["sd_spd", 4.8]], u: [2, 3, 3, 4, 5] },
    33004: { s: [["sd_def", 0.54]], u: [2, 3, 3, 4, 5] },
    33005: { s: [["sd_def", 0.54]], u: [2, 3, 3, 4, 5] },
    34001: { s: [["ld_def", 0.54]], u: [2, 3, 3, 4, 5] },
    34002: { s: [["ld_spd", 4.8]], u: [2, 3, 3, 4, 5] },
    34003: { s: [["ld_spd", 4.8]], u: [2, 3, 3, 4, 5] },
    34004: { s: [["ld_blk", 1.5]], u: [2, 3, 3, 4, 5] },
    34005: { s: [["ld_spd", 4.8]], u: [2, 3, 3, 4, 5] }
  },
  /* 리뉴얼 후: 타입별 [능력치, Lv.1~5 값], u = Lv.1~5 장착 가능 회수 */
  neu: {
    jump:  { s: [["tp_def", [3, 4.8, 5.7, 6.6, 8.1]], ["mid_def", [3, 4.8, 5.76, 6.6, 8.16]]], u: [1, 1, 2, 2, 3] },
    quick: { s: [["mid_def", [0.36, 0.72, 1.08, 1.44, 1.8]], ["tp_def", [0.18, 0.36, 0.54, 0.72, 0.9]]], u: [1, 1, 2, 2, 3] },
    layup: { s: [["ll_blk", [10, 25, 30, 40, 50]], ["sl_blk", [10, 25, 30, 40, 50]]], u: [1, 1, 2, 2, 3] },
    dunk:  { s: [["sd_spd", [4.8, 8.4, 10.2, 13.8, 17.4]], ["ld_def", [2.7, 6.3, 11.7, 18.9, 22.5]]], u: [1, 1, 2, 2, 3] }
  },
  after: {
    jump:  [["mid_def", "+3%"], ["tp_def", "+3%"]],
    quick: [["mid_def", "+0.36%"], ["tp_def", "+0.18%"]],
    layup: [["sl_blk", "+10%"], ["ll_blk", "+10%"]],
    dunk:  [["sd_spd", "+4.8%"], ["ld_def", "+2.7%"]]
  }
};
