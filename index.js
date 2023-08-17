// 変数
let unko = 'Hello World';

// unko = 'Hello Word2';

// 定数（文字列を書き換えたくないとき）
const bigUnko = 'He..Hell...Hello World';

// 配列
let inoki = ['いーち', 'にーい', 'さーん', 'ダー！！'];

// ループ文
// let index = 0;
// while(index < inoki.length){
//   // 繰り返したい命令
//   console.log(inoki[index]);
//   index++; //数字を１つ足していく


// }

// if(inoki.length > 5){
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ・・・'); //[5]にはまらなかったら
// }

// 関数
const test = (arg) => {
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ・・・'); //[5]にはまらなかったら
  }
};

// オブジェクト（データの塊）
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello World');
  }
};

// console.log(window);// windowはブラウザの情報を取得する

// window.alert('unko!');

document.getElementsByTagName('button')[0].addEventListener('click',() => {
  //命令を書く
  window.alert('unko!!!');
});