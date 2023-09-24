const block = document.querySelector(".block__item_wrapper");
const blockDeleteTotal = document.querySelectorAll(
  "[data-action='delete-total']"
);

const cards = [
  { flowerName: "Rose", price: 25.99 },
  { flowerName: "Tulip", price: 12.49 },
  { flowerName: "Sunflower", price: 18.75 },
];

class CardBuilder {
  render() {
    let card = "";
    cards.forEach(({ flowerName, price }) => {
      card += `
        <div class="block__item">
          <div class="block__img_wrapper">
            <img
              src="img/close-up-of-tulips-blooming-in-field-royalty-free-image-1584131603.jpg"
              alt=""
              class="block__img"
            />
          </div>
          <div class="block__cta">
            <div class="block__cta_start">
              <h2 class="block__title">${flowerName}</h2>
              <p class="block__price">${price}</p>
            </div>
            <p class="block__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Tempora eaque beatae quaerat at perferendis fuga qui veniam
              iusto excepturi? Quisquam?
            </p>
            <div class="block__btn_wrapper">
              <button class="block__btn" data-action="add" data-price="${price}">add to cart</button>
              <button class="block__btn" data-action="delete" data-price="${price}">delete</button>
            </div>
          </div>
        </div>
      `;
    });

    block.innerHTML = card;
  }

  addition(price) {
    const cartPrice = document.querySelector(".block__card_price-number");
    const currentTotal = parseFloat(cartPrice.innerHTML) || 0;
    const newTotal = currentTotal + price;
    cartPrice.innerHTML = newTotal.toFixed(2);
  }

  delete(price) {
    const cartPrice = document.querySelector(".block__card_price-number");
    const currentTotal = parseFloat(cartPrice.innerHTML) || 0;
    let newTotal = currentTotal - price;
    cartPrice.innerHTML = newTotal.toFixed(2);
    if (newTotal < 0) {
      newTotal = 0;
      cartPrice.innerHTML = newTotal.toFixed(2);
    }
  }
  deleteTotal() {
    const cartPrice = document.querySelector(".block__card_price-number");
    const currentPrice = 0;
    cartPrice.innerHTML = currentPrice.toFixed(2);
  }
}

const cardPage = new CardBuilder();
cardPage.render();

const blockAddButtons = document.querySelectorAll("[data-action='add']");
const blockDeleteButtons = document.querySelectorAll("[data-action='delete']");

blockAddButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const price = parseFloat(button.getAttribute("data-price"));
    cardPage.addition(price);
  });
});

blockDeleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const price = parseFloat(button.getAttribute("data-price"));
    cardPage.delete(price);
  });
});

blockDeleteTotal.forEach((button) => {
  button.addEventListener("click", () => {
    cardPage.deleteTotal();
  });
});
