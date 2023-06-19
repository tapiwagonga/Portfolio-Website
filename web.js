// JavaScript code
const noteForm = document.getElementById('note-form');
const noteText = document.getElementById('note-text');
const noteResponse = document.getElementById('note-response');

noteForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the note text
  const note = noteText.value;

  // Perform any necessary validation on the note text

  // Simulate sending the note to a server
  // Replace this with your actual server-side code or API call
  setTimeout(() => {
    // Display the response
    noteResponse.textContent = 'Thank you for your note!';

    // Clear the textarea
    noteText.value = '';
  }, 1000);
});
