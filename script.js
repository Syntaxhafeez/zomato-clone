// Select radio buttons and the input field
    const emailRadio = document.querySelector('input[name="contact"][value="Email"]');
    const phoneRadio = document.querySelector('input[name="contact"][value="Phone"]');
    const inputField = document.querySelector('.input-group input[type="text"]');

    // Function to change the placeholder based on the selected radio button
    function updatePlaceholder() {
        if (phoneRadio.checked) {
            inputField.placeholder = "Enter your Phone Number";
        } else {
            inputField.placeholder = "Enter your Email";
        }
    }

    // Event listeners for the radio buttons
    emailRadio.addEventListener('change', updatePlaceholder);
    phoneRadio.addEventListener('change', updatePlaceholder);
