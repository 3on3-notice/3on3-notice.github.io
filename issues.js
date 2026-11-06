/* 확인된 이슈 목록 — 한 곳에서 관리한다. 주별 공지(data.js · archive/*.js)는 issues 에 { id: "..." } 만 적는다.
   고쳐지면 여기서 그 이슈의 status 를 "fixed" 로, fixed 에 수정일(M/D)을, 언어별 fixedText 에 '수정되었습니다' 문장을 넣는다.
   그러면 그 이슈를 실은 모든 주의 페이지(이번 주 · 지난 주)가 함께 '수정 완료'로 바뀐다.
   status: checking 확인 중 / planned 수정 예정 / fixed 수정 완료 / notice 공지(버그가 아닌 안내 — 보상 일정 등). 지우지 않는다(지난 공지가 이 목록을 본다).
   확인일(found)로부터 14일 지난 이슈는 화면이 그 주 목록에서 자동으로 내린다. */
window.ISSUES = {
  "crew-season-oct-reward": { found: "11/6", status: "notice", fixed: "",
    kr: { text: "10월 크루 시즌 보상이 지급되지 않은 오류 현상이 확인되었습니다. 크루 보상과 개인 보상은 다음 점검 시(11/11) 우편을 통해 지급해 드릴 예정입니다. 이용에 불편을 드려 죄송합니다.", fixedText: "" },
    en: { text: "We have confirmed an issue where the October Crew Season rewards were not delivered. Both crew and individual rewards will be sent by mail during the next maintenance (Nov 11th). We apologize for the inconvenience.", fixedText: "" },
    jp: { text: "10月クルーシーズンの報酬が支給されていない不具合が確認されました。クルー報酬および個人報酬は次回のメンテナンス時（11/11）にメールにて支給いたします。ご迷惑をおかけし、申し訳ございません。", fixedText: "" } },
  "pet-box-cumulative-reward": { found: "11/4", status: "notice", fixed: "",
    kr: { text: "두근두근 플래티넘 펫 박스 누적 구매 보상이 처음 설계와 다르게 1주 더 길게 안내되었습니다. 잘못 안내된 만큼, 남은 1주분의 보상은 다음 점검 시 지급해 드릴 예정입니다.<br>※ 이미 수령하신 보상은 중복 지급되지 않습니다.<br>※ 두근두근 플래티넘 펫 박스는 구매 제한이 15회이며, 현재까지 누적 구매하신 수량만큼 차감됩니다. 구매 전 잔여 구매 가능 횟수를 확인해 주시기 바랍니다.", fixedText: "" },
    en: { text: "The cumulative purchase rewards for the Platinum Pet Surprise Box were announced with a period one week longer than originally designed. Since the period was announced incorrectly, the rewards for the remaining one week will be provided during the next maintenance.<br>※ Rewards you have already received will not be given again.<br>※ The Platinum Pet Surprise Box has a purchase limit of 15 times, and the quantity you have purchased so far counts toward this limit. Please check your remaining purchase count before purchasing.", fixedText: "" },
    jp: { text: "ドキドキプラチナペットボックスの累計購入報酬につきまして、当初の設計とは異なり、期間が1週間長くご案内されておりました。誤ったご案内となってしまったため、残り1週間分の報酬は次回のメンテナンス時に支給いたします。<br>※すでに受け取られた報酬は重複して支給されません。<br>※ドキドキプラチナペットボックスの購入制限は15回で、これまでに累計購入された数量分が差し引かれます。ご購入前に残りの購入可能回数をご確認ください。", fixedText: "" } },
  "pet-lineup-image": { found: "10/28", status: "planned", fixed: "",
    kr: { text: "게임 - 커리어 모드 - 펫 라인업에서 장착한 펫의 이미지가 노출되지 않는 현상이 발견되었습니다. 펫 효과는 정상적으로 적용되며, 장착한 펫은 펫 라인업 화면 오른쪽의 텍스트로 확인하실 수 있습니다. 해당 현상은 차주 점검 시 수정될 예정입니다.", fixedText: "" },
    en: { text: "We have found an issue where the image of your equipped pet is not displayed in Game > Career Mode > Pet Lineup. Pet effects are applied normally, and you can check which pet you have equipped in the text on the right side of the Pet Lineup screen. This issue will be fixed during next week's maintenance.", fixedText: "" },
    jp: { text: "ゲーム - キャリアモード - ペットラインアップにて、装着中のペットの画像が表示されない現象が確認されました。ペットの効果は正常に適用され、装着中のペットはペットラインアップ画面右側のテキストでご確認いただけます。本現象は次回の定期メンテナンスにて修正される予定です。", fixedText: "" } },
  "camila-buff-icon": { found: "10/21", status: "planned", fixed: "",   // 11/04 '특성 아이콘 UI 오류 수정'이 이 건인지 기록으로 확인 안 됨 — 확인되면 fixed·날짜만 바꾼다(fixedText 준비됨)
    kr: { text: "카밀라의 일부 특성(티키타카, 공간 확보)에서 발동 조건을 충족하지 않았는데도 발동 버프 아이콘이 뜨는 현상이 발견되었습니다. 해당 현상은 추후에 수정될 예정입니다.", fixedText: "카밀라의 일부 특성(티키타카, 공간 확보)에서 발동 조건을 충족하지 않았는데도 발동 버프 아이콘이 뜨던 현상이 수정되었습니다." },
    en: { text: "The activation buff icon of some of CAMILA's skills (TIKI-TAKA, FREE UP SPACE) appears even when their activation conditions have not been met. This issue will be fixed in a future update.", fixedText: "Fixed an issue where the activation buff icon of some of CAMILA's skills (TIKI-TAKA, FREE UP SPACE) appeared even when their activation conditions had not been met." },
    jp: { text: "カミラの一部スキル（ティキタカ、空間確保）において、発動条件を満たしていないにもかかわらず発動バフアイコンが表示される現象が確認されました。本現象は今後修正される予定です。", fixedText: "カミラの一部スキル（ティキタカ、空間確保）において、発動条件を満たしていないにもかかわらず発動バフアイコンが表示される不具合を修正しました。" } }
};
