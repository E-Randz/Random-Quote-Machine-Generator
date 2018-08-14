$( window ).ready(function(event){

  retrieveQuote(event);

function changeTweetLink(author, quote){
  let newQuote = encodeURIComponent(jQuery(quote).text());
  let newAuthor = encodeURIComponent(author);
  $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?text=" + newQuote + "%0A" + "%7E " + newAuthor + "%0A" + "&hashtags=quotes");
}

function retrieveQuote(e) {
  if(e.preventDefault){
     e.preventDefault();
  }
    $.ajax( {
      url: ' https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#author').text(post.title);
        $('#text').html(post.content);

        changeTweetLink(post.title, post.content);
      },
      fail: function() {
        $('#text').text("It appears something has gone wrong with the generator. Please refresh the page.")
      },
      cache: false
    });
  }



$('#new-quote').on('click', retrieveQuote);







});



