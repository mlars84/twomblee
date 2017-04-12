var annoysCounter = 0;
var annoyanceThreshold = 23;

$( document ).ready( function(){
  $( '#clickyButton' ).on( 'click', function(){
    annoysCounter++;
    // append to annoysBucket by id
    if( annoysCounter < annoyanceThreshold ){
      $( '#annoysBucket' ).append( "<img src='https://s-media-cache-ak0.pinimg.com/564x/43/7b/9b/437b9bbf3fde6d6a331b52bf6c422850.jpg'>" );
    }
    else{
      $( '#annoysBucket' ).append( "<img src='https://img.memesuper.com/94048fb72ea8c8021649e336e086c4cd_full-resolution-meme-cry-face_720-480.jpeg'>" );
    }
  });
});
