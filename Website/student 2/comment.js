//js for the Feedback form
const submitButton = document.querySelector('#submit-btn');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#Phone');
const emailInput = document.querySelector('#email');
const feedBack = document.querySelector('#feedback');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    validateForm();
});

function submitForm() {
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const emojiInput = document.querySelector('.emoji > div[style="transform: scale(1.6);"]');

    const subject = 'AZ Music Feedback';

    const emailBody =
        `Name: ${nameInput.value}%0D%0A` +
        `Phone: ${phoneInput.value}%0D%0A` +
        `Email: ${emailInput.value}%0D%0A` +
        `Gender: ${genderInput.value}%0D%0A` +
        `Emoji: ${emojiInput.textContent}%0D%0A` +
        `feedback: ${feedBack.value}`;

    window.location.href = `mailto:tariq.ramzeen@gmail.com,
    chulan.shammika@gmail.com,
    sanuka.jayasinghe@gmail.com,
    sarangi.perera@gmail.com?subject=${subject}&body=${emailBody}`;

    const popup = document.getElementById('popup');
    popup.style.display = 'block';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 8000);
}

const emojis = document.querySelectorAll('.emoji > div')
emojis.forEach((emoji) => {
    emoji.addEventListener('click', () => {
        emojis.forEach((emoji) => {
            emoji.style.transform = 'none';
        });
        emoji.style.transform = 'scale(1.6)';
    });
})

function validateForm() {

    if (nameInput.value.trim() === '') {
        alert('Name should not be empty');
        return;
    }
    else if (!/^[a-zA-Z]/.test(nameInput.value)) {
        alert('Name should not contain numbers or special characters');
        return;
    }
    else if (phoneInput.value.trim() === '') {
        alert('Phone number should not be empty');
        return;
    }
    else if (isNaN(phoneInput.value) || phoneInput.value.length !== 10) {
        alert('Phone number should be 10 integers long and should not contain letters');
        return;
    }
    else if (emailInput.value.trim() === '') {
        alert('Email should not be empty');
        return;
    }
    else if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        alert('Email should contain @ and .');
        return;
    }
    else if (feedBack.value.trim() === '') {
        alert('Feedback should not be empty');
        return;
    }

    submitForm();
}