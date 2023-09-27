let itemList = [];

// 로컬 스토리지에서 값을 불러와 화면에 그려줌.
const renderTodoItem = () => {
    const savedTodo = localStorage.getItem("itemList");

    const todoList = document.getElementById("todo-list");
    const doneList = document.getElementById("done-list");

    // 덮어쓰지 않도록 초기화
    todoList.innerHTML = "";
    doneList.innerHTML = ""; // innerHTML이 어떤 프로퍼티인지 알아보기.

    // 데이터가 존재하는지 확인
    if (savedTodo) {
        itemList = JSON.parse(savedTodo);
        
        itemList.forEach((savedItem) => {
            const item = document.createElement("li");
            
            // HTML에 새로운 요소를 추가하는 코드
            const itemText = document.createElement("span");
            itemText.className = "item-text";
            itemText.addEventListener("click", toggleItem);
            itemText.innerText = savedItem.text; // 각각의 프로퍼티/메소드가 어떤 역할인지 알아보기.

            const deleteButton = document.createElement("button");
            deleteButton.className = "delete-button";
            deleteButton.addEventListener("click", removeItem);
            deleteButton.innerText = "❌";

            item.appendChild(itemText);
            item.appendChild(deleteButton);

            if (!savedItem.isDone) {
                todoList.appendChild(item); // 요소에 appendChild를 하여 자식요소를 추가함.
                // deleteButton.appendChild(todoList);
            } else {
                doneList.appendChild(item);
                // deleteButton.appendChild(item);
            }
        });
    }
}