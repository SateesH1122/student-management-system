document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const studentsContainer = document.getElementById("studentsContainer");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = form.fullName.value;
    const email = form.email.value;
    const gender = form.gender.value;
    const website = form.website.value;
    const skills = Array.from(form.skills)
      .filter((skillCheckbox) => skillCheckbox.checked)
      .map((skillCheckbox) => skillCheckbox.value)
      .join(", ");

    const studentCard = document.createElement("div");
    studentCard.classList.add("student-card");
    studentCard.innerHTML = `
    <h3>${fullName}</h3>
    <p>Email: ${email}</p>
    <p>Gender: ${gender}</p>
    <p>Website: <a href="${website}" target="_blank">${website}</a></p>
    <p>Skills: ${skills}</p>
  `;

    studentsContainer.appendChild(studentCard);
    form.reset();
  });
});
