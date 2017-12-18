

var client = ShopifyBuy.buildClient({
  apiKey: '676011ab181e44f8f08183567c6bb8a9',
  domain: 'embeds.myshopify.com',
  appID: '6'
});

var $product = $('#product');
var $cart = $('#cart');
var $total = $('#total');
var $checkout = $('#checkout');

client.createCart().then(function(cart){
  $total.text(cart.subtotal)

  client.fetchProduct('').then(function(product){
    console.log(product)
  })
})
