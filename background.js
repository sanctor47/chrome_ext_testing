console.log("From Background")
// API for get requests
let fetchRes = fetch(
    "https://jsonplaceholder.typicode.com/todos/1");

// fetchRes is the promise to resolve
// it by using.then() method
fetchRes.then(res =>
    res.json()).then(d => {
        console.log(d)
    })

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if (/^https:\/\/www\.google/.test(current_tab_info.url)) {
            chrome.tabs.insertCSS(null, { file: './styles.css' })
            chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log("Injected"))
        }
    })
})

