// grab DOM elements
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
const descriptionInput = document.getElementById('description-input');
const characterDescription = document.getElementById('character-description');
const avatarSelect = document.getElementById('avatar-select');
const avatarDisplay = document.getElementById('avatar-display');
const themeSelect = document.getElementById('theme-select');
const themeDisplay = document.getElementById('theme-display');
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

themeSelect.addEventListener('change', () => {
    const src = '' + themeSelect.value;
    themeDisplay.src = src;
});

// Export button function
const exportCharacter = document.getElementById('export-character');
const characterOutput = document.getElementById('character-output');
exportCharacter.addEventListener('click', async () => {
    const dataUrl = await domtoimage.toPng(characterOutput);
    const link = document.createElement('a');
    link.download = nameInput.value + '.png';
    link.href = dataUrl;
    link.click();
});
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
