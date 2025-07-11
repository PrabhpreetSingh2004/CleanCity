const categories = ["Books", "Electronics", "Furniture", "Clothing"];
const locations = ["Chandigarh", "Delhi", "Mumbai", "Ludhiana"];
const productNames = {
  Books: ["Harry Potter Set", "NCERT Physics", "Comics Bundle", "Cookbook Deluxe", "SAT Prep Guide"],
  Electronics: ["Sony Headphones", "Mi Power Bank", "Used Laptop", "Bluetooth Speaker", "Smart Watch"],
  Furniture: ["Wooden Chair", "Sofa Set", "Study Table", "Dining Table", "Bookshelf"],
  Clothing: ["Men’s Jacket", "Women’s Kurti", "Denim Jeans", "Traditional Wear", "T-Shirts Combo"]
};

let allProducts = [];

function generateProducts(count = 50) {
  const products = [];
  for (let i = 0; i < count; i++) {
    const cat = categories[Math.floor(Math.random() * categories.length)];
    const loc = locations[Math.floor(Math.random() * locations.length)];
    const name = productNames[cat][Math.floor(Math.random() * productNames[cat].length)];
    const priceVal = "₹" + (Math.floor(Math.random() * 3000) + 100);
    const product = {
      name,
      category: cat,
      location: loc,
      price: priceVal,
      priceValue: parseInt(priceVal.replace(/[^\d]/g, '')),
      rating: (Math.random() * 2 + 3).toFixed(1),
      discount: Math.floor(Math.random() * 50),
      img: `images/${cat.toLowerCase()}${(i % 5) + 1}.jpg`,
      description: `This is a gently used ${name} available for sale in ${loc}. Great condition and best value!`
    };
    products.push(product);
  }
  return products;
}

function displayProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  list.forEach((p, idx) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p><strong>${p.price}</strong></p>
      <p>📍 ${p.location}</p>
      <p class="rating">⭐ ${p.rating}</p>
      <p>🧾 ${p.discount}% off</p>
      <button class="contact-btn">Chat with Seller</button>
    `;
    card.onclick = () => showProductDetails(p);
    grid.appendChild(card);
  });
}

function filterProducts() {
  const search = document.getElementById("searchBar").value.toLowerCase();
  const selectedLoc = document.getElementById("locationSelector").value;
  const selectedCats = Array.from(document.querySelectorAll('.sidebar input[type="checkbox"]:checked')).map(i => i.value);
  const selectedPrice = document.querySelector('input[name="price"]:checked')?.value;
  const selectedDiscount = parseInt(document.querySelector('input[name="discount"]:checked')?.value || 0);

  const [minPrice, maxPrice] = selectedPrice ? selectedPrice.split('-').map(Number) : [0, Infinity];

  const filtered = allProducts.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search);
    const matchLoc = selectedLoc ? p.location === selectedLoc : true;
    const matchCat = selectedCats.length ? selectedCats.includes(p.category) : true;
    const matchPrice = p.priceValue >= minPrice && p.priceValue <= maxPrice;
    const matchDiscount = p.discount >= selectedDiscount;
    return matchSearch && matchLoc && matchCat && matchPrice && matchDiscount;
  });

  displayProducts(filtered);
}

function shuffleListings() {
  allProducts = generateProducts();
  displayProducts(allProducts);
}

function showProductDetails(product) {
  const modal = document.getElementById("productModal");
  const modalContent = document.getElementById("modalDetails");
  modalContent.innerHTML = `
    <h2>${product.name}</h2>
    <img src="${product.img}" style="width:100%; max-height:200px; object-fit:cover; margin-bottom:10px;">
    <p><strong>Price:</strong> ${product.price}</p>
    <p><strong>Location:</strong> ${product.location}</p>
    <p><strong>Discount:</strong> ${product.discount}%</p>
    <p><strong>Rating:</strong> ⭐ ${product.rating}</p>
    <p>${product.description}</p>
    <button class="contact-btn">Chat with Seller</button>
  `;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}

allProducts = generateProducts();
displayProducts(allProducts);
