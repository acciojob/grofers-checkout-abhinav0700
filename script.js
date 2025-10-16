const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with class 'price'
  let prices = document.querySelectorAll(".price");
  let sum = 0;

  // Loop through and sum up all prices
  for (let price of prices) {
    sum += parseFloat(price.innerText);
  }

  // Create or update a paragraph to display the total
  let totalElement = document.getElementById("ans");
  if (!totalElement) {
    totalElement = document.createElement("p");
    totalElement.id = "ans";
    document.body.appendChild(totalElement);
  }
  totalElement.innerText = `Total Price: ₹${sum.toFixed(2)}`;
};

getSumBtn.addEventListener("click", getSum);
