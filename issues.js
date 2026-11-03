/* 확인된 이슈 목록 — 한 곳에서 관리한다. 주별 공지(data.js · archive/*.js)는 issues 에 { id: "..." } 만 적는다.
   고쳐지면 여기서 그 이슈의 status 를 "fixed" 로, fixed 에 수정일(M/D)을, 언어별 fixedText 에 '수정되었습니다' 문장을 넣는다.
   그러면 그 이슈를 실은 모든 주의 페이지(이번 주 · 지난 주)가 함께 '수정 완료'로 바뀐다.
   status: checking 확인 중 / planned 수정 예정 / fixed 수정 완료. 지우지 않는다(지난 공지가 이 목록을 본다). */
window.ISSUES = {
  "pet-lineup-image": { found: "10/28", status: "planned", fixed: "",
    kr: { text: "게임 - 커리어 모드 - 펫 라인업에서 장착한 펫의 이미지가 노출되지 않는 현상이 발견되었습니다. 펫 효과는 정상적으로 적용되며, 장착한 펫은 펫 라인업 화면 오른쪽의 텍스트로 확인하실 수 있습니다. 해당 현상은 차주 점검 시 수정될 예정입니다.", fixedText: "" },
    en: { text: "We have found an issue where the image of your equipped pet is not displayed in Game > Career Mode > Pet Lineup. Pet effects are applied normally, and you can check which pet you have equipped in the text on the right side of the Pet Lineup screen. This issue will be fixed during next week's maintenance.", fixedText: "" },
    jp: { text: "ゲーム - キャリアモード - ペットラインアップにて、装着中のペットの画像が表示されない現象が確認されました。ペットの効果は正常に適用され、装着中のペットはペットラインアップ画面右側のテキストでご確認いただけます。本現象は次回の定期メンテナンスにて修正される予定です。", fixedText: "" } },
  "camila-buff-icon": { found: "10/21", status: "planned", fixed: "",
    kr: { text: "카밀라의 일부 특성(티키타카, 공간 확보)에서 발동 조건을 충족하지 않았는데도 발동 버프 아이콘이 뜨는 현상이 발견되었습니다. 해당 현상은 추후에 수정될 예정입니다.", fixedText: "" },
    en: { text: "The activation buff icon of some of CAMILA's skills (TIKI-TAKA, FREE UP SPACE) appears even when their activation conditions have not been met. This issue will be fixed in a future update.", fixedText: "" },
    jp: { text: "カミラの一部スキル（ティキタカ、空間確保）において、発動条件を満たしていないにもかかわらず発動バフアイコンが表示される現象が確認されました。本現象は今後修正される予定です。", fixedText: "" } }
};
