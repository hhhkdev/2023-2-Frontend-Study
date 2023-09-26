# WIL2

# 8장: 함수

- 함수를 정의하는 방법 4가지

```jsx
// 1. 함수 선언문으로 정의하는 방법
function square(x) { return x*x; }

// 2. 함수 리터럴로 정의하는 방법
var square = function(x) { return x*x; };

// 3. Function 생성자로 정의하는 방법
var square = new Function("x", "return x*x");

// 4. 화살표 함수 표현식으로 정의하는 방법
var square = x => x*x;
```

**중첩 함수**

특정 함수 내부에 선언된 함수. 외부 함수의 최상위 레벨에서만 사용 가능.(`if`문 등 블록 안에서는 중첩함수를 사용할 수 없음.)

- 함수를 호출하는 방법 4가지

```jsx
// 1. 함수 호출
var $square = square(5);

// 2. 메서드 호출
obj.method = function() { ... };
obj.method();

// 3. 생성자 호출
var obj = new Object();

// 4. call, apply를 사용한 간접 호출
```

**즉시 실행 함수**

익명함수를 정의하고 곧바로 실행하는 함수. 

```jsx
// 즉시 실행 함수 만드는 방법
(function() { ... })();
(function() { ... }());

// 함수 정의식을 함수 값으로 바꾸는 방법
+function() { ... }()
```

**가변 길이 인수 목록(`Argument` 객체)**

프로퍼티: `length`(인수의 개수), `callee`(현재 실행되고 있는 함수의 참조)

**재귀함수**: 함수가 자기 자신을 호출하는 행위를 수행하는 함수

- 재귀호출은 반드시 멈춰야 함.
- 재귀호출로 간단하게 해결할 수 있을 때만 사용함.

## 8.5 프로그램 평가와 실행 과정

자바스크립트는 **싱글 스레드**.

`this` 값 - 함수가 호출되어 실행되는 시점에 결정됨.

**가비지 컬렉터**: 사용하지 않는 객체의 메모리 영역을 해제함. (다른 객체의 프로퍼티와 변수가 참조하지 않는 객체)

프로그램에서 객체를 생성하면 메모리 공간이 동적으로 확보됨.

예전: **참조 카운터 방식** / 최근: **마크 앤 스윕**

**클로저**

자기 자신이 정의된 환경에서 함수 안에 있는 자유 변수의 식별자 결정을 실행함.

**이름 공간**

변수 이름과 함수 이름을 한곳에 모아 두어 이름 충돌을 미리 방지하고, 변수와 함수를 쉽게 가져다 쓸 수 있는 매커니즘.

- 원래는 제공하지 않는 기능이지만 객체를 활용함.

```jsx
var Obj = Obj || {};
// 정의되어 있으면 그것을 사용하고 아니면 빈 객체를 할당함.
```

**Function 객체의 메서드**

`apply, call`: 첫 번째 인수는 함수의 `this`값. 두 번째 인수는 함수의 인수를 담은 배열.

**고차 함수:** 함수를 인수로 받는 함수 또는 함수를 반환하는 함수

**콜백 함수**: 다른 함수에 인수로 넘겨지는 함수

**화살표 함수 표현식**

```jsx
var square = x => x*x;

(x => x*x)(3); // 화살표 함수도 즉시 실행 함수로 사용할 수 있음.
```

- 함수 리터럴과 화살표 함수의 차이점

`this`의 값이 함수를 정의할 때 결정됨. / `argument` 변수가 없음.

생성자로 사용할 수 없음. / `yield` 키워드를 사용할 수 없음.

**나머지 매개변수**

```jsx
function f(a, b, **...args**) {
	console.log(a, b, args);
}
```

**이터레이션**

반복 처리 - 데이터 안의 요소를 연속적으로 꺼내는 행위

```jsx
var arr = [1, 2, 3];
arr.forEach(function(val) { console.log(val); });
```

**이터레이터** - 반복 처리가 가능한 객체. 반복기

**제너레이터**

- 반복 가능한 이터레이터를 값으로 반환함.
- 작업의 일시 정지와 재시작이 가능하며 자신의 상태를 관리함.

`function*`문으로 정의하며 하나 이상의 `yield` 표현식을 포함함.

제너레이터 종료하기: `return` 메서드

제너레이터 예외 던지기: `throw` 메서드

**템플릿 리터럴의 태그 함수**

태그 함수의 첫 번째 인수 - `callSite` 객체

- 동결되어 있음. `callSite` 객체는 캐시됨. `raw` 프로퍼티가 있음.

# 9장: 객체

- 객체 생성

```jsx
// 1. 객체 리터럴로 생성하는 방법
var card = { suit: "하트", rank: "A" };

// 2. 생성자로 생성하는 방법
function Card(suit, rank) {
	this.suit = suit;
	this.rank = rank;
}

// 3. Object.create로 생성하는 방법
var card = Object.create(Object.prototype, {
	suit: {
		value: "하트",
		writeable: true,
		enumerable: true,
		configurable: true
	}, ...
}
```

**프로토타입**

자바스크립트에서는 함수도 객체이므로 함수 객체가 기본적으로 `prototype` 프로퍼티를 가짐.

(인스턴스에 아무것도 정의하지 않더라도 처음부터 사용할 수 있는 것)

**내부 프로퍼티 `[[Prototype]]`**

기본적으로 `Object.protoype`을 가리킴.

**프로토타입 체인**

객체의 `__proto__` 프로퍼티는 그 객체에게 상속을 해 준 부모 객체를 가리킴.

`**constructor` 프로퍼티**: 함수 객체의 참조를 값으로 가짐.

## 9.9 JSON

자바스크립트 객체를 문자열로 표현하는 데이터 포맷 - 객체를 직렬화함.

(컴퓨터 메모리 속 객체를 똑같은 객체로 환원할 수 있는 문자열로 변환.)

**JSON.stringfy 메서드**: 인수로 받은 객체를 JSON 문자열로 반환.

```jsx
JSON.stringfy(value[, replacer[, space]])
```

- 두 번째 인수의 배열 요소와 이름이 같은 프로퍼티만 걸러짐
- 세 번째 인수로 지정한 문자로 들여씀.

**JSON.parse**: JSON 문자열을 자바스크립트 객체로 환원함.

```jsx
JSON.parse(text[, reviver])
```

- 첫 번째 인수는 객체로 환원하고자 하는 JSON 문자열을 지정함.
- 두 번째 인수는 프로퍼티의 키와 값을 인수로 받는 함수를 지정함.

**프로퍼티의 이름으로 심벌 사용하기**

```jsx
var obj = { [Symbol("heart")]: "A" };
```

명시적으로 객체의 프로퍼티를 숨길 수 있음.

# 10장: 배열의 다양한 기능

- `Array.prototype`의 주요 메소드

`shift`: 첫 번째 요소를 제거한 후 모든 배열 요소를 왼쪽으로 이동. 삭제된 값 반환.

`unshift`: 앞에 요소를 추가하고 모든 배열 요소를 오른쪽으로 이동. 배열 길이 반환.

`concat`: concatenate(사슬로 만들다, 연결하다), 배열을 펼쳐서 합침.

`slice`: 범위 안에 있는 요소를 반환함.

`forEach`: 인수로 받은 함수를 배열의 요소별로 한 번씩 실행함.

`map`: 인수로 받은 함수를 배열의 요소별로 한 번씩 실행하며 반환하여 새로운 배열을 생성함.

`reduce`: 배열 요소 하나를 함수로 처리한 후 그 반환값을 다음 번 요소 처리할 때 함수의 입력값으로 활용함.

**유사 배열 객체**

- 함수의 인수를 저장한 `Arguments` 객체
- `DOM`의 `document.getElementsByTagName` 메서드 등이 반환하는 `NodeList` 객체

**전개 연산자**

반복 가능한 객체 앞에 `...`을 표기하여 배열 리터럴, 함수의 인수 목록으로 펼칠 수 있음.

# 11장: 버그와 오류에 대처하는 방법

`Strict` 모드

버그를 최대한 발생시키지 않게 만들거나, 버그가 발생했을 때 즉시 알 수 있도록 언어의 사양을 더욱 엄격하게 제한함.

## 11.2 예외 처리

`throw` 문: 직접 예외를 만들어서 던짐.

`Error` 객체: 자바스크립트 인터프리터는 오류가 발생했을 때 오류에 따라 예외 객체를 던짐.

`try`/`catch`/`finally` 문

예외가 발생했을 때 그것을 잡아서 처리함. finally는 예외 처리 마지막에 반드시 실행됨.

# 12장: 정규 표현식

자바스크립트의 정규 표현식은 RegExp 객체로 표현함.

RegExp 생성자 또는 정규 표현식 리터럴로 생성함.

```jsx
var reg = new RegExp("ABC");
var reg = /ABC/;
```

- 문자 클래스

```jsx
/[A-Z]/ /* 전체 소문자 중 문자 한 개 */
/[ABCX-Z]/ /* ABCXYZ 중 문자 한 개 */
/[a-zA-Z0-9]/ /*모든 알파벳과 숫자 중 문자 한 개*/
```

- 부정 문자 클래스 `[^...]`
- 문자 클래스 단축 표기

```jsx
/* 임의의 문자 한 개 */: /./
/* 숫자와 숫자 외의 문자 */: /\d \D/
/* 단어와 단어 문자 외의 문자 */: /\w \W/
/* 공백 문자와 공백 문자 외의 문자 */: /\s \S/
```

- 반복 패턴

```jsx
/(){m, n}/ /* 최소 m번, 최대 n번 반복 */
/(){n,}/ /* 바로 앞의 요소를 최소 n번 반복 */
/(){n}/ /* 바로 앞의 요소를 n번 반복 */
/()?/ /*바로 앞의 요소를 최소 0번, 최대 1번 반복*/
/()+/ /*바로 앞의 요소를 최소 한 번 이상 반복*/
/()*/ /*바로 앞으로 요소를 최소 0번 반복*/
```

- 그룹화: 괄호로 묶어서 부분적으로 그룹화 가능.

## 12.3 패턴 매칭을 하는 문자열 메소드

`search`: 정규 표현식 객체와 일치한 최초 문자열의 첫 번째 문자 위치를 반환.

`replace`: 첫 번째 인수로 받은 식과 일치하는 문자열을 검색하고 두 번째 인수로 치환함.

(`g` 플래그를 설정하면 모두 치환함.)

# 13장: 웹 브라우저의 객체

- 웹 브라우저에서 자바스크립트가 하는 일

(1) 웹 페이지의 `Document` 객체 제어(HTML 요소와 CSS 스타일 작업)

(2) 웹 페이지의 `Window` 객체 제어 및 브라우저 제어 / (3) 웹 페이지에서 발생하는 이벤트 처리

(4) `HTTP`를 이용한 통신 제어

- HTML에 자바스크립트를 삽입하는 방법

```html
// 1. script 요소의 내용물로 작성하기(인라인 스크립트)
<script>
	console.log("Hello");
<script>

// 2. 외부 파일 읽어 들이기(외부 스크립트)
<script src="../scripts/sample.js"></script>

// 3. 이벤트 처리기 속성에 작성하기
<input type="button" value="click" onclick="console.log('Hello!');">

// 4. JavaScript: URL(자바스크립트 의사 프로토콜)
<a href="javascript: console.log('I\'m pretty good!);">
	What's going on?
</a>
```

# 14장: 문서 제어

**DOM 트리**

웹 페이지 내용은 `Document` 객체가 관리함.

웹 브라우저가 웹 페이지를 읽어 들이면 렌더링 엔진은 웹 페이지의 HTML 문서 구문을 해석하고 `Document` 객체에서 문서 내용을 관리하는 **DOM 트리**라고 하는 객체의 트리 구조를 만듦.

- **문서 노드**: 전체 문서를 가리키는 `Document` 객체. document를 참조함.
- **HTML 요소 노드**: HTML 요소를 가리키는 객체
- **텍스트 노드**: 텍스트를 가리키는 객체

```jsx
// 1. id 속성으로 노드 가져오기
document.getElementById($ID);

// 2. 요소의 이름으로 노드 가져오기
document.getElementsByTagName($TagName);

// 3. class 속성 값으로 노드 가져오기
document.getElementsByClassName($ClassName);

// 4. name 속성 값으로 노드 가져오기
document.getElementsByName($Name);

// 5. CSS 선택자로 노드 가져오기
document.querySelectorAll($Selector);
document.querySelector($Selector);
```

## 14.3 속성 값의 읽기와 쓰기

```jsx
// 1. 요소 객체의 프로퍼티로 요소의 속성을 읽고 쓰기
obj.$AttributeName

// 2. 속성 값 가져오기
obj.getAttribute($AttributeName)

// 3. 속성 값 설정하기
obj.setAttribute($AttributeName, $AttribueValue)

// 4. 속성이 있는지 확인하기
obj.hasAttribute($AttributeName)

// 5. 속성 삭제하기
obj.removeAttribute($AttributeName)
```

## 14.5 노드 생성/삽입/삭제하기

```jsx
// 노드 생성하기
var element = document.createElement($ElementName);
var textnode = decument.createTextNode($Text);

// 노드 삽입하기
$ElementNode.appendChild($TargetNode)
$ElementNode.insertBefore($TargetNode, $ChildNode)

// 노드 삭제하기
$Node.removeChild($ChildNode)

// 노드 치환하기
$Node.replaceChild($NewNode, $ChildNode)
node.parentNode.replaceChild(newnode, node);
```

# 15장: 이벤트 처리

- 이벤트 처리기를 등록하는 방법

```jsx
// 1. HTML 요소의 이벤트 처리기 속성에 설정하는 방법
<input type="button" onclick="changeColor();"/>

// 2. DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정하는 방법
var btn = document.getElementById("button");
btn.onclick = changeColor();

// 3. addEventListener 메서드를 사용하는 방법
var btn = document.getElementById("button");
btn.addEventListener("click", changeColor, false);
```

**`Promise`의 기본**

```java
var promise = new Promise(function(resolve, reject) { ... });

// Promise를 종료시키는 메서드
promise.then(onFullfilled);

// Promise를 실패로 처리하는 메서드
promise.catch(onRejected);

promise.then(onFullfilled, onRejected);

// 비동기 처리 여러 개를 병렬로 실행하기
Promise.all(iterable);

// 가장 먼저 종료한 Promise 객체의 결과만 반환함.
Promise.race(iterable);
```