// grab DOM elements
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
const descriptionInput = document.getElementById('description-input');
const characterDescription = document.getElementById('character-description');
const avatarSelect = document.getElementById('avatar-select');
const avatarDisplay = document.getElementById('avatar-display');
// set event listeners
nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value;
});

descriptionInput.addEventListener('input', () => {
    characterDescription.textContent = descriptionInput.value;
});


avatarSelect.addEventListener('change', () => {
    const src = '' + avatarSelect.value;
    avatarDisplay.src = src;
});

// Export button function
exportButton.addEventListener('click', async () => {
    const dataUrl = await domtoimage.toPng(card);
    const link = document.createElement('a');
    link.download = nameInput.value + '.png';
    link.href = dataUrl;
    link.click();
  });
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
