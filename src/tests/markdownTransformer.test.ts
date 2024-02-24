/*
    - The markdown transformer when given a text without links, should return the same text.
    - The markdown transformer when given a text with a link, when given a text with a link, should return the visible text with anchor refering to URL.
    - The markdown transformer when given a text with two different links, should return the same text if ePub/Pdf output.
    - The markdown transformer when given a text with a link, should return the text with link using anchor annotation and a page footer with a reference to the anchor pointing to URL if paper output.
    - The markdown transformer when given a text with a two different links, should return the text with links using anchor annotations and two anchor entries in page footer pointing to each URL.
    - The markdown transformer when given a text with a two equal links, should return the text with links using anchor annotations and only one anchor entry in page footer pointing to the URL.
    - The markdown transformer when given a text with a two equal links and a different link, should return the text with links using anchor annotations and two anchor entries in page footer pointing to the URL.
    - The markdown transformer when given a text with a two equal links and two different link, should return the text with links using anchor annotations and three anchor entries in page footer pointing to the URL.
*/

import { MarkdownTransformer } from '../core/markdownTransformer'

describe('The Markdown Transformer..', () => {
    
	it('when given a text without links, should return the same text.', () => {
        const someText = 'Some text without links.';
        const markdownTransformer = new MarkdownTransformer();
        
        const result = markdownTransformer.transform(someText);

        expect(result).toBe(someText);    
    });

    it('when given a text with a link, should return the visible text with anchor referring to URL.', () => {
        const someText = '[This book](http://codigosostenible.com)';
        const expectedTransformedText = 'This book[^anchor1]\r\n[^anchor1]: http://codigosostenible.com'
        const markdownTransformer = new MarkdownTransformer();
        
        const result = markdownTransformer.transform(expectedTransformedText);

        expect(result).toBe(someText);
    });
});

