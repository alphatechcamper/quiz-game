const question = 'ゲーム史上、最も売れたゲーム機は次のうちどれ？';
const answers = [
  'スーパーファミコン',
  'プレイステーション',
  'ニンテンドーDS',
  'ニンテンドースイッチ'
];
const correct = 'ニンテンドーDS';
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題分、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question ;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
    if(correct === e.target.textContent) { //target:クリックされたボタン
      window.alert('正解！');
    } else {
      window.alert('不正解！');
    }
};

// ボタンをクリックしたら正誤判定
let handerIndex = 0;
while (handerIndex < buttonLength) {
  $button[handerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handerIndex++;
}