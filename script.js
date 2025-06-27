// Accordion toggle for FAQ
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    // Collapse all other answers
    document.querySelectorAll(".faq-answer").forEach((ans) => {
      if (ans !== answer) ans.style.display = "none";
    });

    // Toggle this one
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

// Counselling card opens popup
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    if (card.textContent.includes("Counselling")) {
      document.getElementById("counsellingPopup").style.display = "flex";
    }
  });
});

// Apply Now buttons open internship application form
document.querySelectorAll(".apply-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("popupForm").style.display = "flex";
  });
});

// Close buttons in both popups
document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const overlay = btn.closest(".popup-overlay");
    if (overlay) overlay.style.display = "none";
  });
});

// Toggle FAQ answers on click (duplicate — consider removing if not needed)
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
