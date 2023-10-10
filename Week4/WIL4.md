# WIL4

# `index.html`

- `**button` 태그의 `data-Type` 속성**

`data-*` 속성은 사용자 지정 데이터 특성으로, 특성 클래스를 형성하여 임의의 데이터를 스크립트로 HTML과 DOM 사이에서 교환하게 하는 방법.

JavaScript에서는 아래 예제처럼 접근 가능. 앞에 붙은 data를 빼고 camelCase로 변환시켜 접근함.

```html
<button type="button" id="btn" data-code-id="1234" data-type="b">버튼</button>
```

```jsx
var codeId = document.getElementById("btn").dataset.codeId;
var type = document.getElementById("btn").dataset.type;
```

- `**<meta>` 태그의 역할**
    - 검색 엔진을 위한 키워드를 정의하는 예제
    - 웹페이지에 대한 설명을 정의하는 예제
    - 문서의 저자를 정의하는 예제
    - 5초 뒤에 다른 페이지로 리다이렉트 시키는 예제
    - 모든 장치에서 웹사이트가 잘 보이도록 뷰포트를 설정하는 예제
    

# `style.css`

- 폰트를 프리텐다드로 설정하는 코드

```jsx
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

* {font-family: Pretendard,'Noto Sans KR', sans-serif;}
```

대신 기존의 @font-face 코드를 주석처리 함.

- `**vh`, `rem` 단위**
    - `**px**`: 가장 기본적인 단위. 픽셀 단위라는 고정값을 이용함.
    - **`em`**: 부모 요소를 기준으로 자식 요소의 크기를 결정함. (곱셈)
    - **`rem`**: (root em) 위 공식을 가장 최상단을 기준으로 맞추겠다는 소리. 모바일 환경의 접근성에서 유용함.
    - `**vh**`, `**vw**`: 뷰포트의 높이와 너비에 비례함. 반응형 페이지를 만들 때 유용함. 1vh는 실제 높이값의 1/100.

# `**script.js**`

- `addEventListener`

```jsx
eventTarget.addEventListener('eventType', function)
```

DOM 객체에서 이벤트가 발생한 경우 이벤트를 처리하는 오브젝트.

- `parseFloat`: 문자열을 실수로 변환하여 리턴함.