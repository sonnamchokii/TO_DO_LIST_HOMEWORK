let count = 0;

function updateCount() {
    document.getElementById("count").textContent = count;
}

function addName() {
    const input = document.getElementById("nameInput");
    const name = input.value.trim();

    if (name === "") {
        alert("Enter a name");
        return;
    }

    const li = document.createElement("li");
    li.textContent = name;

    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.className = "remove-btn";

    btn.onclick = function () {
        li.remove();
        count--;
        updateCount();
    };

    li.appendChild(btn);
    document.getElementById("list").appendChild(li);

    input.value = "";

    count++;
    updateCount();
}