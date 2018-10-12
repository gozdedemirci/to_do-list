function newItem() {
  var item = document.getElementById("to_do").value;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("• " + item));
  ul.appendChild(li);
  // görevin üstüne basıldığında silmesi
  document.getElementById("to_do").value = "";
  li.onclick = removeItem;
}
// enter'a basıldığında görevi eklemesi.
document.body.onkeyup = function(e) {
  if (e.which === 13 && this.value !== "") {
    newItem();
  }
};

function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
}

  if ($.trim(item) == '' ){
    $('.message').text('Waiting for data input');
  }
  //If not empty then store data
  else {
    $.jStorage.set(item);
    clear_all();
    $('.message').html(
      "Item saved."
    );
  }
// localstorage
function item() {
if ( item === 'get' ) {
if ( localStorage.getItem('content') !== null ) {
document.querySelector('.to_do').innerHTML = localStorage.getItem('content');
				}
			} 
else if ( item === 'update' ) {
var str = document.querySelector('.to_do').innerHTML;
				localStorage.setItem('content', str);
			}
		}
app.init();
