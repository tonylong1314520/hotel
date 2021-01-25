var cartTotals = [];
var clickAmount2 = 0;
var clickAmount3 = 0;
var clickAmount4 = 0;
function addOne() {
  var x = document.getElementById('roomOne').value;
  var d = new Date();
  var y = x + " added on " + d;
  var newItem = document.createElement('li');
  document.getElementById('roomOne').value = "";
  var newText = document.createTextNode(y);
  if (clickAmount2 < 3) {
    clickAmount2++;
  newItem.appendChild(newText);
  var position = document.getElementById('listOne');
  position.appendChild(newItem);
  cartTotals.push(100);
  addTotal();
  }
  window.alert("$100 has been added to your bill, remove to refund your submission.");
}
function removeOne() {
  var thing = document.getElementById('removeOne').value;
  var x = thing - 1;
  var removeItem = document.getElementById('listOne').getElementsByTagName('li')[x];
  document.getElementById('removeOne').value = "";
  var containerElement = removeItem.parentNode;
  containerElement.removeChild(removeItem);
  cartTotals.push(-100);
  addTotal();
  clickAmount2--;
  window.alert("You have been refunded your full price.");
}

function addTwo() {
  var x = document.getElementById('roomTwo').value;
  var d = new Date();
  var y = x + " added on " + d;
  var newItem = document.createElement('li');
  document.getElementById('roomTwo').value = "";
  var newText = document.createTextNode(y);
  if (clickAmount3 < 3) {
    clickAmount3++;
  newItem.appendChild(newText);
  var position = document.getElementById('listTwo');
  position.appendChild(newItem);
  cartTotals.push(100);
  addTotal();
  }
  window.alert("$100 has been added to your bill, remove to refund your submission.");
}
function removeTwo() {
  var thing = document.getElementById('removeTwo').value;
  var x = thing - 1;
  var removeItem = document.getElementById('listTwo').getElementsByTagName('li')[x];
  document.getElementById('removeTwo').value = "";
  var containerElement = removeItem.parentNode;
  containerElement.removeChild(removeItem);
  cartTotals.push(-100);
  addTotal();
  clickAmount3--;
  window.alert("You have been refunded your full price.");
}
function addThree() {
  var x = document.getElementById('roomThree').value;
  var d = new Date();
  var y = x + " added on " + d;
  var newItem = document.createElement('li');
  document.getElementById('roomThree').value = "";
  var newText = document.createTextNode(y);
  if (clickAmount4 < 3) {
    clickAmount4++;
  newItem.appendChild(newText);
  var position = document.getElementById('listThree');
  position.appendChild(newItem);
  cartTotals.push(100);
  addTotal();
  }
  window.alert("$100 has been added to your bill, remove to refund your submission.");
}
function removeThree() {
  var thing = document.getElementById('removeThree').value;
  var x = thing - 1;
  var removeItem = document.getElementById('listThree').getElementsByTagName('li')[x];
  document.getElementById('removeThree').value = "";
  var containerElement = removeItem.parentNode;
  containerElement.removeChild(removeItem);
  cartTotals.push(-100);
  addTotal();
  clickAmount4--;
  window.alert("You have been refunded your full price.");
}
function addTotal() {
  var total = 0;
  for (var i = 0; i < cartTotals.length; i++) {
   var lmao = total += cartTotals[i];
  document.getElementById('grandTotal').innerHTML = "4.712% tax: $ " + ((total * 1.04712).toFixed(2));
}
}
function creditCard() {
  var youtube = document.getElementById('credit').value;
  document.getElementById('credit').value = "";
  if(youtube.length === 16) {
  document.getElementById('outcome').innerHTML = "The total above" + " is processed to the account # " + (youtube);
  }
  else {
    window.alert('INVALID CREDIT CARD NUMBER (16 digit credit card number)');
  }
}
