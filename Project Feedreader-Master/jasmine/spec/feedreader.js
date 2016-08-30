/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
/* This is our first test suite - a test suite just contains
 * a related set of tests. This suite is all about the RSS
 * feeds definitions, the allFeeds variable in our application.
 */
describe('RSS Feeds', function() {
/* This is our first test - it tests to make sure that the
 * allFeeds variable has been defined and that it is not
 * empty. Experiment with this before you get started on
 * the rest of this project. What happens when you change
 * allFeeds in app.js to be an empty array and refresh the
 * page?
 */
     it('AllFeeds variables are defined', function() {
     expect(allFeeds).toBeDefined();
     });

    /* each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('Each Feed has a URL defined', function() {
     allFeeds.forEach(function(feed) {
     expect(feed.url).toBeDefined();
     expect(feed.url).not.toBe('');
      });
     });

    /* loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('Each Feed has a name defined', function() {
        allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe('');    
        });
      });
});


describe('The menu', function() {
/* ensures the menu element is
 * hidden by default. You'll have to analyze the HTML and
 * the CSS to determine how we're performing the
 * hiding/showing of the menu element.
 */
        var body = $('body'),
        menuIcon = $('.menu-icon-link');
            it('Menu element is hidden by default', function() {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        /* 
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it("It changes visibility when the menu link is clicked", function() {
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).not.toBe(true);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
         });
});
    

describe('Initial Entries', function() {
/* A test that ensures when the loadFeed
 * function is called and completes its work, there is at least
 * a single .entry element within the .feed container.
 * Remember, loadFeed() is asynchronous so this test will require
 * the use of Jasmine's beforeEach and asynchronous done() function.
 */
    beforeEach(function(done) {
        loadFeed(0, function() {
        done();
        });
    });
    it('It have at least one entry', function(done) {
          var numEntry = $('.feed .entry').length;
          expect(numEntry).toBeGreaterThan(0);
          done();
        });
  });
    

/* A test that ensures when a new feed is loaded
 * by the loadFeed function that the content actually changes.
 * Remember, loadFeed() is asynchronous.
 */
describe('New Feed Selection', function() {
    var currcontent;
    beforeEach(function(done) {
      currvalue = $('.feed').html();
      loadFeed(1, function() {
        done();
      });
    });
    it('Changes content actually display', function(done) {
        var newFeedvalue = $('.feed').html();
        expect(currvalue).not.toBe(newFeedvalue);
        done();
    });
  });
}());
