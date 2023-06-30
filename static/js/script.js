async function postData(url = "", data = {}) {
  const responce = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return responce.json();
}

var sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", async function () {
  questionInput = document.getElementById("questionInput").value;
  document.getElementById("questionInput").value = "";
  document.querySelector(".right1").style.display = "block";
  document.querySelector(".right").style.display = "none";

  question1.innerHTML = questionInput;
  question2.innerHTML = questionInput;

  let result = await postData("/api", { question: questionInput });
  solution.innerHTML = result.answer;
});
