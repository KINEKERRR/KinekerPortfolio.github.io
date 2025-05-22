const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
});

window.addEventListener("DOMContentLoaded", () => {
  toggleBtn.textContent = "🌙";

  document.querySelectorAll(".hide-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.style.display = "none";
    });
  });

  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("comment-list");
  const addCommentBtn = document.getElementById("add-comment");

  if (commentInput && commentList && addCommentBtn) {
    addCommentBtn.addEventListener("click", () => {
      const text = commentInput.value.trim();
      if (text !== "") {
        const li = document.createElement("li");
        li.textContent = text;
        commentList.prepend(li);
        commentInput.value = "";
      }
    });
  }
});

document.querySelectorAll('.toggle-details, .toggle-article').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.classList.toggle('hidden');
    button.textContent = content.classList.contains('hidden') ? 'Подробнее' : 'Скрыть';
  });
});
