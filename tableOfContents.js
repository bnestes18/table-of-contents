;(function () {
    
    let tableOfContents = document.querySelector('#table-of-contents');
    let h2Elements = Array.prototype.slice.call(document.querySelectorAll('h2'));


    // Check to see if any h2 elements exist
    if (h2Elements.length > 0) {
        // If so, inject h2 elements as anchor links into the DOM
        tableOfContents.innerHTML = '<h2>Table of Contents</h2>' +
        '<ol>' + h2Elements.map(function (h2Elem) {
                    return '<li><a href="#'+ h2Elem.id +'">' + h2Elem.textContent + '</a></li>'
                }).join('') +
        '</ol>';

    }
})(document);



            