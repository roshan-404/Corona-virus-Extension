replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/covid-19/gi)) {
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(/(covid-19)/gi, '<span class="rainbow">$1</span>')
            element.replaceWith(newElement)

            // element.parentElement.remove()
        }
        // element.textContent = element.textContent.replace(/coronavirus/gi, '')
        
    }
}