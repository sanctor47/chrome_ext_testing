const options = {};

// Initialize the form with the user's option settings
chrome.storage.local.get('options', (data) => {
  Object.assign(options, data.options);
  optionsForm.debug.checked = Boolean(options.debug);;
  console.log(data)
});

// Immediately persist options changes
optionsForm.debug.addEventListener('change', (event) => {
  options.debug = event.target.checked;
  chrome.storage.local.set({options});
  console.log(options)
});