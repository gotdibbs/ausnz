import sanitizeHtml from 'sanitize-html';

export default function cleanHtml(theUncleanHTMLString) {
    return sanitizeHtml(
        theUncleanHTMLString,
        {
            allowedAttributes: {
                '*': ['href', 'align', 'alt', 'title', 'class']
            }
        }
    )
};