'use strict';
//分割代入
//基本形
const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log('基本形----------------');
console.log(red);//one
console.log(yellow);//two
console.log(green);//three
//宣言だけ先にするこの場合はlet
console.log('先に宣言----------------');
let a, b;
[a, b] = [1, 2];
console.log(a);
console.log(b);
//デフォルト値変更
console.log('デフォルト値変更----------------');
let c, d;
[ c = 5, d = 7 ] = [1, 2];
console.log(a);
console.log(b);

//値を入れ替える
console.log('値の入替----------------');
let e = 1;
let f = 100;
[e, f] = [f, e];//逆になる
console.log(e);
console.log(f);

const arrA = [1, 2, 3];
[arrA[0], arrA[1]] = [arrA[1], arrA[0]];
console.log(arrA);//[ 2, 1, 3 ]

//関数から返された配列のparse
console.log('関数から返された配列のparse----------------');
const funcA = () => {
  return [1, 2];
}

let g, h;
[g, h] = funcA();
console.log(g);
console.log(h);

//戻り値を無視する
console.log('戻り値を無視する----------------');
const funcB = () => {
  return [1, 2, 3];
}

const[i, , j] = funcB();
console.log(i);//1
console.log(j);//3

const[, k, ] = funcB();
console.log(k);//2 配列の2つ目の数値を取り出し

const[, , ] = funcB();//全て無視する

//配列の残りの部分を変数に割り当てる
console.log('配列の残りの部分を割り当て----------------');
const [l, ...m] = [1, 2, 3];
//const [l, ...m], = [1, 2, 3];右側の配列の括弧の後にコンマあるとエラーになるので注意

console.log(l);
console.log(m);