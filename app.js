const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", event => {
        const answer = question.children[1];
        question.classList.toggle("activeQuestion");
        if (question.classList.contains("activeQuestion")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
        questions.forEach(q => {
            if (q !== question) {
                const a = q.children[1];
                q.classList.remove("activeQuestion");
                a.style.maxHeight = 0;
            };
        });

    });
});