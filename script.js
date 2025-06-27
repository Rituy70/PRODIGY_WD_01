
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    
    document.querySelectorAll(".faq-answer").forEach((ans) => {
      if (ans !== answer) ans.style.display = "none";
    });

    
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});


document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    if (card.textContent.includes("Counselling")) {
      document.getElementById("counsellingPopup").style.display = "flex";
    }
  });
});


document.querySelectorAll(".apply-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("popupForm").style.display = "flex";
  });
});

document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const overlay = btn.closest(".popup-overlay");
    if (overlay) overlay.style.display = "none";
  });
});


document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
