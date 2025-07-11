document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const rating = document.querySelector('input[name="rating"]:checked')?.value;

  alert(`Thank you, ${name} from ${city}, for rating us ${rating} star(s)! Your feedback has been recorded.`);

  this.reset();
});
