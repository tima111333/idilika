function handleButtonClick(){
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    var li = document.createElement("li");
    li.innerHTML = songName;
    var ul = document.getElementById("playlist");
    ul.appendChild(li);
  }

   function init(){
     var button = document.getElementById("addButton");
     button.onclick = handleButtonClick;
   }