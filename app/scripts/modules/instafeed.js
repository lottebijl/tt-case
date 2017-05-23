var userFeed = new Instafeed({
    get: 'user',
    userId: '12995750',
    clientId:'3f82142d11d34cef993bfb28ed7999bf',
    accessToken:'12995750.3f82142.11735348fac24d63830286e5b8acb790',
    template: '<div class="columns small-24 large-8"><div class="instafeed__item"><a href="{{link}}"><img src="{{image}}" /></a><div class="instafeed__content"><span>{{likes}} likes</span><p>{{caption}}</p></div></div></div>',
    after: function() {
        console.log('after');
    },
    success: function() {
        console.log('success');
    }
});
userFeed.run();

// https://api.instagram.com/oauth/authorize/?client_id=3f82142d11d34cef993bfb28ed7999bf&redirect_uri=https://github.com/lottebijl/tt-case&response_type=token