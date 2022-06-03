// grab DOM elements
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');


// set event listeners
nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value;
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
