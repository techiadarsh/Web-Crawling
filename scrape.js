const ex = require('express');
const os = require('osmosis');
const website = 'http://www.uread.com/architecture/97';
console.log('Scraping '   + website)
const headingLocation = '.list-view-books';

os
.get(website)
.find(headingLocation)
.set(
{
'title': '.title',
'disc' :'.cover-discount-tag' ,
'cover'  : ' .cover a@href' ,
'status': '.action .available-stock' ,
'lang' : '.price-attrib .attributes tr[3] .attributes-title',
'publisher' : ' .product-summary .author-publisher .a ',
'category': '.related-categories a',
'price': '.price-attrib .price .sell',
'amazon' : ' .list-view-books .action .action-btns a:first@href' ,
'pub-year' : ' .search-results .left-column .search-criteria ul[5] li[2] ',
'author-name' : '.product-summary .author-publisher a'
})
.data(function(d) {
    console.log(d)})

