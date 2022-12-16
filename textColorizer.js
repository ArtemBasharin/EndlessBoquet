function highlight(lineLength, colors, overlap) {
  var textBlocks = document.getElementsByClassName("highlight");
  for (var i = 0; i < textBlocks.length; i++) {
    var textBlockContent = textBlocks[i].textContent;
    var re = new RegExp(".{1," + lineLength + "}", "g");
    textBlockContent = textBlockContent.match(re);
    textBlocks[i].innerHTML = "";
    for (var j = 0; j < textBlockContent.length; j++) {
      var span = document.createElement("span");
      span.textContent = textBlockContent[j];
      span.style.backgroundColor = colors[j % colors.length];
      span.style.padding = overlap + "em 0";
      textBlocks[i].appendChild(span);
    }
  }
}
highlight(
  8, //
  ["rgba(255, 253, 9,.9)", "rgba(254, 123, 252,.9)", "rgba(110, 102, 237,.9)"],
  0.2
);
