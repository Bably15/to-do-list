const form = document.querySelector(".taskName");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskData = document.querySelector("#exampleInput1").value;
    console.log(taskData);
    const taskList = document.querySelector("#task");
    taskList.insertAdjacentHTML("beforeEnd", `<li>${taskData}</li>`);
});
