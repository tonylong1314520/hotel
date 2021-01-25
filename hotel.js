function addOne() {
	var totals = 0;
  var x = document.getElementById('roomOne').value;
  document.getElementById('roomOne').value = "";
  var d = new Date();
  var y = x + " added on " + d;
  var newItem = document.createElement('li');
  var newText = document.createTextNode(y);
  newItem.appendChild(newText);
  var position = document.getElementById('listOne');
  position.appendChild(newItem);
  totals = x * 100;
  document.getElementById('grandTotal').innerHTML = "4.712% tax: $ " + ((totals * 1.04712).toFixed(2));
  window.alert(x + " guests has been added to your bill.");
}
//unfinished function
function removeOne() {
	let totals = 0;
  let num = [];
	let x = 0;
    window.alert(document.getElementById('grandTotal').value);
  if (document.getElementById('removeOne').value != "") {
  	x = document.getElementById('removeOne').value;
    document.getElementById('removeOne').value = "";
  } else if (document.getElementById('listTwo').value != "") {
  	x = document.getElementById('listTwo').value;
    document.getElementById('listTwo').value = "";
  } else {
  	x = document.getElementById('listThree').value;
    document.getElementById('listThree').value = "";
  }
  let y = document.getElementById('grandTotal').innerHTML;
  for(let i = 0; i < y.length; i++) {
  	if(y[i] >= 0) {
    	num.push(y[i]);
    }
  } 
  document.getElementById('grandTotal').innerHTML = "4.712% tax: $ " + ((totals * 1.04712).toFixed(2));
  window.alert("You have removed guests.");
}

function creditCard() {
  var youtube = document.getElementById('credit').value;
  document.getElementById('credit').value = "";
  if(youtube.length === 16) {
  document.getElementById('outcome').innerHTML = "The total above" + " is processed to the account # " + (youtube);
  }
  else {
    window.alert('INVALID CREDIT CARD NUMBER');
  }
}
