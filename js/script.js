const orderArray = []; // [itemName, itemPrice, itemImage, itemNumber]

    function checkEmptyOrder(){
        if(orderArray.length != '0'){
            const href = "payment.html";//find url
            const b = document.getElementById('totalcost1').innerText;
            console.log(b);
            var url = 'file:///C:/Users/Duy%20Hung/eclipse-workspace-1/Clone_website/payment.html?totalcost1=' + encodeURIComponent(b); 
            window.location.href=url;
        }
        else window.alert("Order is empty!!! Please choose a product");  
    }

    function deleteCheckOut(){
      document.getElementById('checkoutList').innerHTML=" ";
    }
    
    function newLiTag(itemName, itemPrice, itemImage, itemQuantity) { // same as newItemInCart() but different display structure.
      // Create the <li> tag
      const orderItem = document.createElement('li');
      orderItem.className = "d-flex justify-content-between align-items-center";
      orderItem.style.margin = "10px";
      const orderItemPriceSpan = document.createElement('span');
      const orderItemLeftSpan = document.createElement('span');
      const orderItemQuantitySpan = document.createElement('span');
      orderItemQuantitySpan.className= "col-md-1 ";
      orderItemQuantitySpan.style.textAlign= "right";
      // Create text node with item name and price
      const orderItemName = document.createTextNode('  ' + itemName);
      orderItemName.className = "col-md-6"
      const totalPrice = parseFloat(itemPrice)*parseFloat(itemQuantity);
      const orderItemPrice = document.createTextNode(' $'+ totalPrice);
      //Quantity
      const orderItemQuantity = document.createTextNode('x' + itemQuantity);
      // Image
      const orderItemImgTag = document.createElement('img');
      orderItemImgTag.src = itemImage;
      orderItemImgTag.className="w-25 rounded border col-md-3";
      // Add text color to price
      orderItemPriceSpan.className = "text-danger col-md-2";
      orderItemPriceSpan.style.textAlign= "right";
      orderItemPriceSpan.appendChild(orderItemPrice);
      orderItemQuantitySpan.appendChild(orderItemQuantity);
      // Add name and price to the item    
      orderItem.appendChild(orderItemImgTag);
      orderItem.appendChild(orderItemName);
      orderItem.appendChild(orderItemQuantitySpan);
      orderItem.appendChild(orderItemPriceSpan);
      
      return orderItem;
    };

    function totalItems1() {
        document.getElementById('totalitems1').innerText = orderArray.length;
      };
  
      function totalCost1() {
        if (orderArray.length === 0) {
          document.getElementById('totalcost1').innerText = 0;
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
          var price = ' $'+totalPrice.toFixed(2);
          document.getElementById('totalcost1').innerText = price;
        
        }
      };

    function checkOutOrder(){
      const list = document.getElementById('checkoutList');  
      
      if(orderArray != null){
        orderArray.forEach( (order) => {
          const orderItem = newLiTag(order[0], order[1], order[2], order[3]);
          list.appendChild(orderItem);
        });
      }
      totalItems1();
      totalCost1();
      
    };

    function orderCart(itemName, itemPrice, itemImage) {

      // check if item existed in the array
      let i = 0;
      let hasOrdered = false;
      while (i < orderArray.length) {
        if (orderArray[i][0] === itemName) {
          hasOrdered = true;
          orderArray[i][3]++; 
          console.log(orderArray[i]);

          const itemSpan = document.getElementById('amount of ' + itemName);
          itemSpan.innerText = parseInt(itemSpan.innerText) + 1; //increment

          totalItems();
          totalCost();
          break;
        }
        i++;
      }// duyet trong orderArray
      //console.log(hasOrdered);

      if (hasOrdered === false) {
        const newOrder = [];
        newOrder.push(itemName, itemPrice, itemImage, 1);
        orderArray.push(newOrder);

        const orderList = document.getElementById('orderlist');

        // Append child <li> tag to OrderList
        const orderItem = newItemInCart(itemName, itemPrice, itemImage);
        const orderButton = changeQuantityButton(itemName);
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
      const orderItemPrice = document.createTextNode(' $'+itemPrice);
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

    function changeQuantityButton(itemName) {
      // Button
      const decrementButton = document.createElement('button');
      const incrementButton = document.createElement('button');
      const decrementButtonText = document.createTextNode('-');
      const incrementButtonText = document.createTextNode('+');

      const amountItemSpan = document.createElement('span');
      amountItemSpan.className ="fw-bold ms-3";
      amountItemSpan.id = 'amount of ' + itemName;
      //console.log(amountItemSpan);
      const amountItemText = document.createTextNode('1');
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
          if (orderArray[i][0] === itemName) {
            orderArray[i][3]++;
            console.log(orderArray);
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
            orderArray[i][3]++;
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
        const orderButton = changeQuantityButton(itemName);
        orderList.appendChild(orderItem);
        orderList.appendChild(orderButton);
        // console.log(orderArray);
      }
      );

      console.log(orderArray);
      //console.log(orderList);
      totalItems();
      totalCost();
    }