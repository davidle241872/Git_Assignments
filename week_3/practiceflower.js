function showContent() {
    let temp = document.getElementsByTagName("template")[0];
    let clone = temp.content.cloneNode(true);
    document.body.appendChild(clone);
  }