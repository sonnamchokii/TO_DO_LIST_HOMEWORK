let trainees = [];

// Load saved data when page loads
window.onload = function () {
    const saved = localStorage.getItem("trainees");
    if (saved) {
        trainees = JSON.parse(saved);
        trainees.forEach(name => createListItem(name));
        updateCount();
    }
};

// Save to localStorage
function saveData() {
    localStorage.setItem("trainees", JSON.stringify(trainees));
}

// Update count
function updateCount() {
    document.getElementById("count").textContent = trainees.length;
}

// Add name
function addName() {
    const input = document.getElementById("nameInput");
    const name = input.value.trim();

    if (name === "") {
        alert("Enter a name");
        return;
    }

    trainees.push(name);
    saveData();

    createListItem(name);
    updateCount();

    input.value = "";
}

// Create list item
function createListItem(name) {
    const li = document.createElement("li");
    li.textContent = name;

    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.className = "remove-btn";

    btn.onclick = function () {
        li.remove();

        trainees = trainees.filter(n => n !== name);
        saveData();
        updateCount();
    };

    li.appendChild(btn);
    document.getElementById("list").appendChild(li);
}

// Clear all
function clearAll() {
    trainees = [];
    saveData();

    document.getElementById("list").innerHTML = "";
    updateCount();
}

// Live clock
setInterval(() => {
    const now = new Date();
    document.getElementById("time").textContent = now.toLocaleTimeString();
}, 1000);