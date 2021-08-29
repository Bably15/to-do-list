const form = document.querySelector(".taskName");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskData = document.querySelector("#exampleInput1").value;
    console.log(taskData);
    const taskList = document.querySelector(".task");
    taskList.insertAdjacentHTML(
        "beforeEnd",
        `<li class="list-group-item me-4"><input class="form-check-input " type="checkbox" value="" aria-label="Checkbox for following text input">${taskData}</li>`
    );
});
