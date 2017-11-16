﻿
using TicketWebsite.Common;

namespace TicketWebsite.Views
{
    class ProductCard:ComponentBase
    {

        

        protected override  string Template =>
            @"
<div class='ui card post-37 product type-product status-publish has-post-thumbnail product_cat-tools product_tag-amazon first instock shipping-taxable product-type-external'>
  <div class='ui fluid image'>
    <a href='https://chap.website/shop1/product/affiliate-product/' class='woocommerce-LoopProduct-link'>
      <img width='300' height='300'
           src='{Binding ProductCardImagePath}'
           class='attachment-shop_catalog size-shop_catalog wp-post-image'
           srcset='//chap.website/shop1/wp-content/uploads/sites/44/2017/05/felix-russell-saw-167176-300x300.jpg 300w, //chap.website/shop1/wp-content/uploads/sites/44/2017/05/felix-russell-saw-167176-150x150.jpg 150w, //chap.website/shop1/wp-content/uploads/sites/44/2017/05/felix-russell-saw-167176-180x180.jpg 180w, //chap.website/shop1/wp-content/uploads/sites/44/2017/05/felix-russell-saw-167176-600x600.jpg 600w'
           sizes='(max-width: 300px) 100vw, 300px' />
    </a>
  </div>
  <div class='content'>
    <div class='header'>
      <a href='https://chap.website/shop1/product/affiliate-product/'
         class='ui tiny header woocommerce-LoopProduct-link'>
        Affiliate product
      </a>
    </div>
    <div class='meta'>
      <a href='https://chap.website/shop1/product-category/tools/' rel='tag'>Tools</a>
    </div>
    <div class='star-rating'>
      <span style='width:20%'>Rated <strong class='rating'>1.00</strong> out of 5</span>
    </div>
  </div>
  <div class='extra content'>
    <div class='ui medium header'>
      <span class='woocommerce-Price-amount amount'>
        <span class='woocommerce-Price-currencySymbol'>£</span>15.00
      </span>
    </div>
  </div>
  <a class='ui bottom attached medium button button product_type_external' rel='nofollow' href='https://amazon.com'
     data-quantity='1' data-product_id='37' data-product_sku=''>
    <i class='add icon'></i>Buy from Amazon
  </a>
</div>

";

        
        

    }
}