setInterval(() =>{
  for(const x of document.querySelectorAll('div[aria-label^="Following"]')){
    x.click();
    const confirmationButton = document.querySelector('div[data-testid="confirmationSheetConfirm"]');
    confirmationButton.click();
    }
  window.scrollTo(0, document.body.scrollHeight);
}, 10000)