# WIL3

투두리스트를 구현해보는 실습을 진행함. 주어진 화면을 보고 같은 기능을 구현함.

## `script.js`

- **innerHTML과 innerText의 차이점**

`innerText`는 요소의 Text 값만 가져오지만, `innerHTML`은 요소의 HTML이나 XML을 가져옴. 

```jsx
element.innerText = "<div style='color:red;'>A</div>"
element.innerHTML = "<div style='color:red;'>A</div>"
```

두 코드는 거의 같지만, 위 코드는 문자 그대로를 출력하는 반면에 아래 코드는 빨간색 A을 출력하는 것을 볼 수 있음.

즉, 요소에 직접 접근하여 변경시킬 수 있는 것은 동일하지만 방식의 차이가 있음. 

- **`createElement`, `appendChild`**

요소를 직접 생성하고, 부모노드에 자식노드를 추가시키는 메서드.

이 두 메서드를 통해 동적으로 웹페이지를 만들 수 있음.

추가로 `setAttribute`를 통해 요소에 속성도 추가할 수 있음.

- **event.preventDefault**

```
1. a 태그를 눌렀을 때도 href 링크로 이동하지 않게 할 경우
2. form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고 싶을 경우 (submit은 작동)
```

## `style.css`

- css 선택자

```css
* { margin: 0; text-decoration: none;} /*전체 선택자*/
p { background: yellowgreen; color: darkgreen; } /*태그 선택자*/

.class1 { background: darkgreen; color: yellowgreen; } /*클래스 선택자*/
div.class2 { background: yellowgreen; color: darkgreen; }

#id1 { background: darkgreen; color: yellowgreen; } /*ID 선택자*/
div#id2 { background: yellowgreen; color: darkgreen; }

section ul { border: 1px dotted black; } /*하위 선택자 - 모든 하위 요소*/
section>ul { border: 1px dotted black; } /*자식 선택자 - 바로 하위 요소만*/
```

참고 링크: [https://www.nextree.co.kr/p8468/](https://www.nextree.co.kr/p8468/)