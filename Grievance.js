document.getElementById('grievance-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate the form (basic example)
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const location = document.getElementById('location').value.trim();
    const description = document.getElementById('description').value.trim();

    if (!name || !email || !location || !description) {
        alert('Please fill out all required fields.');
        return;
    }

    alert('Grievance submitted successfully!');

    // Here, you could add functionality to send the form data to the server using fetch or XMLHttpRequest.
    this.submit();
});
