const os = require('osmosis');
const website = 'http://www.uread.com/architecture/97';
console.log('Scraping '   + website)
const headingLocation = '.list-view-books';

os
.get(website)
.find(headingLocation)
.set({'title': '.title',
'language' : 'attributes.attributes-head',
' disc' :'.cover-discount-tag' ,
'price': '.price-attrib',
'status': '.action' ,
 'category': '.related-categories' ,
 'AuthorName':'.author-publisher',
 'amazon': '.action-btns'})

.data(function(d) {
    console.log(d)})