var products = [
  {
    product_id: 1,
    product_title: "Armani Black Suit Default",
    product_description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 115.0,
    img_url:
      "https://wpbingosite.com/wordpress/favita/wp-content/uploads/2018/10/Image-41-720x960.jpg",
    vendor: "Kira Coutoure",
    categories: "women",
    liked: { like_status: false, count: 30 },
  },
  {
    product_id: 2,
    product_title: "Armani Panel Blue Jean",
    product_description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 20.5,
    img_url:
      "https://wpbingosite.com/wordpress/favita/wp-content/uploads/2018/10/Image-2-720x960.jpg",
    vendor: "Armani Coutoure",
    categories: "women",
    liked: { like_status: false, count: 30 },
  },
  {
    product_id: 3,
    product_title: "Black Suit Default",
    product_description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 20.3,
    img_url:
      "https://wpbingosite.com/wordpress/favita/wp-content/uploads/2018/10/Image-41-720x960.jpg",
    vendor: "Kira Coutoure",
    categories: "women",
    liked: { like_status: false, count: 30 },
  },
  {
    product_id: 4,
    product_title: "DeFacto Sneakers",
    product_description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 30,
    img_url:
      "https://wpbingosite.com/wordpress/favita/wp-content/uploads/2019/03/Image-16-720x960.jpg",
    vendor: "Defacto",
    categories: "generic",
    liked: { like_status: false, count: 30 },
  },
  {
    product_id: 5,
    product_title: "Armani Black Suit Default",
    product_description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 115,
    img_url:
      "https://wpbingosite.com/wordpress/favita/wp-content/uploads/2019/03/Image-26-720x960.jpg",
    vendor: "Kira Coutoure",
    categories: "women",
    liked: { like_status: false, count: 30 },
  },
  {
    product_id: 6,
    product_title: "Armani Black Suit Default",
    product_description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 115,
    img_url:
      "https://wpbingosite.com/wordpress/favita/wp-content/uploads/2019/03/Image-10-720x960.jpg",
    vendor: "Kira Coutoure",
    categories: "women",
    liked: { like_status: false, count: 30 },
  },
  {
    product_id: 7,
    product_title: "Armani Black Suit Default",
    product_description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 115,
    img_url:
      "https://wpbingosite.com/wordpress/favita/wp-content/uploads/2018/10/Image-34-720x960.jpg",
    vendor: "Kira Coutoure",
    categories: "women",
    liked: { like_status: false, count: 30 },
  },
  {
    product_id: 8,
    product_title: "Armani Black Suit Default",
    product_description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 115,
    img_url:
      "https://wpbingosite.com/wordpress/favita/wp-content/uploads/2019/03/Image-3-720x960.jpg",
    vendor: "Kira Coutoure",
    categories: "women",
    liked: { like_status: false, count: 30 },
  },
  {
    product_id: 9,
    product_title: "Armani Black Suit Default",
    product_description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 115,
    img_url:
      "https://wpbingosite.com/wordpress/favita/wp-content/uploads/2019/03/Image-45-720x960.jpg",
    vendor: "Kira Coutoure",
    categories: "women",
    liked: { like_status: false, count: 30 },
  },
  {
    product_id: 10,
    product_title: "Armani Black Suit Default",
    product_description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 115,
    img_url:
      "https://wpbingosite.com/wordpress/favita/wp-content/uploads/2019/03/Image-26-720x960.jpg",
    vendor: "Kira Coutoure",
    categories: "women",
    liked: { like_status: false, count: 30 },
  },
  {
    product_id: 11,
    product_title: "Armani Black Suit Default",
    product_description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    price: 115,
    img_url:
      "https://wpbingosite.com/wordpress/favita/wp-content/uploads/2019/03/Image-10-720x960.jpg",
    vendor: "Kira Coutoure",
    categories: "women",
    liked: { like_status: false, count: 30 },
  },

];

products.push({
  product_id: 1,
  product_title: "Armani Black Suit Default",
  product_description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  price: 115,
  img_url:
    "https://wpbingosite.com/wordpress/favita/wp-content/uploads/2019/03/Image-45-720x960.jpg",
  vendor: "Kira Coutoure",
  categories: "women",
  liked: { like_status: false, count: 30 },
});
var productRend = document.getElementById("product_catalogs");
products.map((item, i) => {
  const ordered = document.createElement("div");
  ordered.className = "product_contain";
  ordered.id ="product"+item.product_id
  const newProduct = `
    <div class="products" onmouseover="showProductMenu()">
    <img src="${item.img_url}" alt="">
    <div class="products_icon_div">
        <div class="products_icon">
            <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="products_icon">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="products_icon">
            <i class="fa-solid fa-heart"></i>
        </div>
    </div>
    <button class="sec2_btn">Shop Now</button>
</div>
<h4>${item.product_title}</h4>
<p>$${item.price}</p>

`;
  ordered.innerHTML = newProduct;
  productRend.append(ordered);
});
