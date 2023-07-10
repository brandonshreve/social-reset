setInterval(() =>{
    for(const x of document.querySelectorAll('div[data-testid="unlike"]')){
      x.click();
      }
    window.scrollTo(0, document.body.scrollHeight);
  }, 10000)