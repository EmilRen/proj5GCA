// Get all needed dom elements
const form = document.getElementById('checkInForm');
const nameInput = document.getElementById('attendeeName');
const teamSelect = document.getElementById('teamSelect');
const attendeeCount = document.getElementById('attendeeCount');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

// Track attendance
let count = 0;
const maxCount = 50; // Set the maximum number of attendees

//Handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    if (count >= maxCount) {
        progressText.textContent = `Attendance goal reached: ${maxCount} attendees.`;
        return;
    }

    // Get the values from the form inputs
    const name = nameInput.value;
    const team = teamSelect.value;
    const teamName = teamSelect.selectedOptions[0].text; // Get the text of the selected option

    console.log(name, team, teamName); // Log the values to the console (for testing purposes)

    // Increment the attendance count
    count++;
    attendeeCount.textContent = count;

    //update progress bar
    const percentage = Math.round((count / maxCount) * 100);
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute('aria-valuenow', count);
    progressText.textContent = `${count} of ${maxCount} attendees checked in (${percentage}% of goal)`;

    //update team counter
    const teamCounter = document.getElementById(team + "Count");
    teamCounter.textContent = Number(teamCounter.textContent) + 1;

    // Show welcome message
    const message = `Welcome, ${name} from ${teamName}!`;
    console.log(message);

    form.reset(); // Reset the form inputs for the next attendee
});