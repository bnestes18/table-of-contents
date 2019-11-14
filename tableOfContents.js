;(function () {
    
    let tableOfContents = document.querySelector('#table-of-contents');
    let h2Elements = Array.prototype.slice.call(document.querySelectorAll('h2'));
    
    // Formats id to display dashes
    let formatAttr = function (attr) {
        return attr.trim().replace(/\W+/g, '-');
    }

    // Check to see if any h2 elements exist
    if (h2Elements.length > 0) {

        // If so, inject h2 elements as anchor links into the DOM
        tableOfContents.innerHTML = '<h2>Table of Contents</h2>' +
        '<ol>' + h2Elements.map(function (h2Elem) {
            // check if h2 has an id
            // if not, (length === 0), then set the id to the name of the heading
                if (h2Elem.id.length === 0) {
                    h2Elem.setAttribute('id', h2Elem.textContent.toLowerCase());
                    h2Elem.id = formatAttr(h2Elem.id);
                }
                return '<li><a href="#'+ h2Elem.id +'">' + h2Elem.textContent + '</a></li>' 
                }).join(''); +
        '</ol>';      
         
    }
    
})();



            