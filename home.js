<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});
</script>

const searchInput = document.getElementById("search-input")
const list = document.getElementById("list")
const listItems = list.getElementsByTagName("h3");

searchInput.addEventListener("list", function (e) {
const listTerm = e.target.value.toLowerCase();
for (let i = 0; i < listItems.length; i++) {
const text = listItems[i].textContent.toLowerCase();
if (text.includes (listTerm)) {
listItems[i].style.display = "block";
} else {
listItems[i].style.display = "none";
}
}
});

