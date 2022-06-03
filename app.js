// grab DOM elements


// set event listeners
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
