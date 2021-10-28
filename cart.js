const orderArray = []; // [itemName, itemPrice, itemImage, itemNumber]

function orderCart(itemName, itemPrice, itemImage) {

// check if item existed in the array
let i = 0;
let hasOrdered = false;
while (i < orderArray.length) {
  if (orderArray[i][0] === itemName) {
    hasOrdered = true;
    orderArray[i][3]++; 
    //console.log(orderArray[i]);

  const itemSpan = document.getElementById('amount of ' + itemName);
  itemSpan.innerText = parseInt(itemSpan.innerText) + 1; //increment

  totalItems();
  totalCost();
    break;
  }
  i++;
}
//console.log(hasOrdered);

if (hasOrdered === false) {
  const newOrder = [];
  newOrder.push(itemName, itemPrice, itemImage, 1);
  orderArray.push(newOrder);

  const orderList = document.getElementById('orderlist');

  // Append child <li> tag to OrderList
  const orderItem = newItemInCart(itemName, itemPrice, itemImage);
  const orderButton = changeQuantityButton(itemName, 1);
  orderList.appendChild(orderItem);
  orderList.appendChild(orderButton);
  console.log(orderArray);
}

//console.log(orderArray);

totalItems();
totalCost();
};

function newItemInCart(itemName, itemPrice, itemImage) {
// Create the <li> tag
const orderItem = document.createElement('li');
orderItem.className = "d-flex justify-content-between align-items-center";

const orderItemPriceSpan = document.createElement('span');
const orderItemLeftSpan = document.createElement('span');
// Create text node with item name and price
const orderItemName = document.createTextNode('  ' + itemName);
const orderItemPrice = document.createTextNode(itemPrice);
// Image
const orderItemImgTag = document.createElement('img');
orderItemImgTag.src = itemImage;
orderItemImgTag.className="w-25 rounded border";

// Add text color to price
orderItemPriceSpan.className = 'text-danger';
orderItemPriceSpan.appendChild(orderItemPrice);

// Add name and price to the item
orderItemLeftSpan.appendChild(orderItemImgTag);
orderItemLeftSpan.appendChild(orderItemName);
orderItem.appendChild(orderItemLeftSpan);
orderItem.appendChild(orderItemPriceSpan);

return orderItem;
};

function changeQuantityButton(itemName, itemAmount) {
// Button
const decrementButton = document.createElement('button');
const incrementButton = document.createElement('button');
const decrementButtonText = document.createTextNode('-');
const incrementButtonText = document.createTextNode('+');

const amountItemSpan = document.createElement('span');
amountItemSpan.className ="fw-bold ms-3";
amountItemSpan.id = 'amount of ' + itemName;
//console.log(amountItemSpan);
const amountItemText = document.createTextNode(itemAmount);
//amountItemSpan.id = 
amountItemSpan.appendChild(amountItemText);


decrementButton.onclick = function() {
  const itemSpan = document.getElementById('amount of ' + itemName);
  itemSpan.innerText = parseInt(itemSpan.innerText) - 1; //decrement

  let i = 0;
  while (i < orderArray.length) {
    if (orderArray[i][0] === itemName) {
      orderArray[i][3]--;
      totalItems();
      totalCost();
      break;
    }
    i++;
  }

  if (itemSpan.innerText === '0') {
    deleteItem(itemName);
  }
};

incrementButton.onclick = function() {
  const itemSpan = document.getElementById('amount of ' + itemName);
  itemSpan.innerText = parseInt(itemSpan.innerText) + 1; //increment        

  let i = 0;
  while (i < orderArray.length) {

    console.log('debug');
    console.log(itemName);
    console.log(orderArray[i][0]);
    if (orderArray[i][0] === itemName) {
      orderArray[i][3]++;
      totalItems();
      totalCost();
      break;
    }
    i++;
  }

  if (itemSpan.innerText === '0') {
    //console.log('deleteItem');
    deleteItem(itemName);
  }
};


const orderButton = document.createElement('span');
  orderButton.className ="d-flex justify-content-center align-items-center";

  decrementButton.className = 'btn btn-outline-danger px-3 ms-3';
  incrementButton.className = 'btn btn-outline-danger px-3 ms-3';
  decrementButton.appendChild(decrementButtonText);
  incrementButton.appendChild(incrementButtonText);

  orderButton.appendChild(decrementButton)
  orderButton.appendChild(amountItemSpan);
  orderButton.appendChild(incrementButton);

  totalItems();
  totalCost();

  return orderButton;
};

function totalItems() {
  document.getElementById('totalitems').innerText = orderArray.length;
  };

  function totalCost() {
  if (orderArray.length === 0) {
    document.getElementById('totalcost').innerText = 0;
  }
  else {
    let totalPrice = 0;
    let i = 0;
    while (i < orderArray.length) {
      totalPrice += (orderArray[i][1] * orderArray[i][3]); // price * quantity
      i++;
    }
    if (totalPrice <= 0) {
      totalPrice = 0;
    }
    document.getElementById('totalcost').innerText = totalPrice.toFixed(2);

  }
};

function clearCart() {
  let orderList = document.getElementById('orderlist');
  orderList.innerHTML = '';
  orderArray.length = 0;
  i = 0;
  totalItems();
  totalCost();
};

function deleteItem(itemName) {
//console.log('delete');

  let i = 0;
  var indexNum = -1;

  while (i < orderArray.length) {
    if (orderArray[i][0] === itemName) {
      totalItems();
      totalCost();
      indexNum = i;
      break;
    }
    i++;
  }

  orderArray.splice(indexNum, 1);

  const orderList = document.getElementById('orderlist');
    //orderList.splice(indexNum, 1);
  orderList.innerHTML = '';

  orderArray.forEach( (order) => {
      //console.log(0);
      const orderItem = newItemInCart(order[0], order[1], order[2]);
      const orderButton = changeQuantityButton(order[0], order[3]);
      orderList.appendChild(orderItem);
      orderList.appendChild(orderButton);
      console.log(orderArray);
    }
  );

  console.log(orderArray);
  console.log(orderList);
  totalItems();
  totalCost();
};

