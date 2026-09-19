const button = document.getElementById("theme-toggle");

// 读取之前保存的主题
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// 点击按钮
button.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    // 保存主题
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});