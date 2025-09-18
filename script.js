// Set the date we're counting down to
const countDownDate = new Date("Oct 25, 2025 10:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".countdown").innerHTML = "Event is Live!";
    }
}, 1000);

// Handle registration form submission
document.querySelector('#registration form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        fullName: document.getElementById('fullName').value,
        schoolName: document.getElementById('schoolName').value,
        city: document.getElementById('city').value,
        contactNumber: document.getElementById('contactNumber').value,
        emailAddress: document.getElementById('emailAddress').value,
        selectEvent: document.getElementById('selectEvent').value
    };

    // Use a placeholder URL. Replace this with your actual deployed API endpoint.
    const apiEndpoint = 'https://your-api-url.com/api/register'; 

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message || 'Registration successful!');
        this.reset();
    })
    .catch(error => {
        console.error('Error during registration:', error);
        alert('An error occurred during registration. Please try again.');
    });
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        contactName: document.getElementById('contactName').value,
        contactEmail: document.getElementById('contactEmail').value,
        contactPhone: document.getElementById('contactPhone').value,
        contactMessage: document.getElementById('contactMessage').value
    };

    // Use a placeholder URL. Replace this with your actual deployed API endpoint.
    const apiEndpoint = 'https://your-api-url.com/api/contact';

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message || 'Message sent successfully!');
        this.reset();
    })
    .catch(error => {
        console.error('Error sending message:', error);
        alert('An error occurred. Please try again.');
    });
});

// Theme toggle functionality (existing code, no changes needed)
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const toggleIcon = toggleButton.querySelector('i');

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleIcon.classList.replace('fa-sun', 'fa-moon');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    toggleIcon.classList.toggle('fa-sun', !isDarkMode);
    toggleIcon.classList.toggle('fa-moon', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
