<script>
        // Set the date we're counting down to
        const countDownDate = new Date("Oct 25, 2025 10:00:00").getTime();

        // Update the countdown every 1 second
        const countdownFunction = setInterval(() => {

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the countdown date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Get the HTML elements and update their content
            document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
            document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
            document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
            document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

            // If the countdown is over, write some text 
            if (distance < 0) {
                clearInterval(countdownFunction);
                document.querySelector(".countdown").innerHTML = "Event is Live!";
            }
        }, 1000);
    </script>

    <script>
        // Handle form submission to Google Forms
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const fullName = document.getElementById('fullName').value;
            const schoolName = document.getElementById('schoolName').value;
            const city = document.getElementById('city').value;
            const contactNumber = document.getElementById('contactNumber').value;
            const emailAddress = document.getElementById('emailAddress').value;
            const selectEvent = document.getElementById('selectEvent').selectedOptions[0].text;
            
            // Create Google Form URL with pre-filled data using your actual entry IDs
            const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScCoRs4qTSrS6tRn9bPr-wvV8PK__XGk-WHOV4Dtvdha2Gjdg/viewform';
            
            // Create URL with pre-filled parameters using your entry IDs
            const params = new URLSearchParams({
                'usp': 'pp_url',
                'entry.190724952': fullName,         // Full Name field
                'entry.786790121': schoolName,       // School/College Name field
                'entry.1748774961': city,            // City field
                'entry.1381997137': contactNumber,   // Contact Number field
                'entry.1853064802': emailAddress,    // Email Address field
                'entry.1123236580': selectEvent      // Select Event field
            });
            
            const prefilledUrl = `${baseUrl}?${params.toString()}`;
            
            // Open pre-filled Google Form in new tab
            window.open(prefilledUrl, '_blank');
            
            // Show success message
            alert('Thank you for your interest! Please complete your registration in the new tab that just opened with your information pre-filled.');
            
            // Reset form
            this.reset();
        });
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js" crossorigin="anonymous"></script>
    <script>
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
    </script>
    <script>
        // Handle registration form submission to Google Forms
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const fullName = document.getElementById('fullName').value;
            const schoolName = document.getElementById('schoolName').value;
            const city = document.getElementById('city').value;
            const contactNumber = document.getElementById('contactNumber').value;
            const emailAddress = document.getElementById('emailAddress').value;
            const selectEvent = document.getElementById('selectEvent').selectedOptions[0].text;
            
            // Create Google Form URL with pre-filled data using your actual entry IDs
            const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScCoRs4qTSrS6tRn9bPr-wvV8PK__XGk-WHOV4Dtvdha2Gjdg/viewform';
            
            // Create URL with pre-filled parameters using your entry IDs
            const params = new URLSearchParams({
                'usp': 'pp_url',
                'entry.190724952': fullName,         // Full Name field
                'entry.786790121': schoolName,       // School/College Name field
                'entry.1748774961': city,            // City field
                'entry.1381997137': contactNumber,   // Contact Number field
                'entry.1853064802': emailAddress,    // Email Address field
                'entry.1123236580': selectEvent      // Select Event field
            });
            
            const prefilledUrl = `${baseUrl}?${params.toString()}`;
            
            // Open pre-filled Google Form in new tab
            window.open(prefilledUrl, '_blank');
            
            // Show success message
            alert('Thank you for your interest! Please complete your registration in the new tab that just opened with your information pre-filled.');
            
            // Reset form
            this.reset();
        });
    </script>
    <script>
        // Handle contact form submission to Google Forms
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const contactName = document.getElementById('contactName').value;
            const contactEmail = document.getElementById('contactEmail').value;
            const contactPhone = document.getElementById('contactPhone').value;
            const contactMessage = document.getElementById('contactMessage').value;
            
            // Create Google Form URL with pre-filled data
            const contactBaseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd4jqSrLf69lL0O5IocdxuTo0MUWRefRRR8AsX3I4cby2lYyA/viewform';
            
            // Create URL with pre-filled parameters
            const contactParams = new URLSearchParams({
                'usp': 'pp_url',
                'entry.1626472689': contactName,     
                'entry.919477960': contactEmail,    
                'entry.781559451': contactPhone,    
                'entry.1523325656': contactMessage  
            });
            
            const contactPrefilledUrl = `${contactBaseUrl}?${contactParams.toString()}`;
            
            // Open pre-filled Google Form in new tab
            window.open(contactPrefilledUrl, '_blank');
            
            // Show success message
            alert('Thank you for reaching out! Please complete your message in the new tab that just opened with your information pre-filled.');
            
            // Reset form
            this.reset();
        });
    
