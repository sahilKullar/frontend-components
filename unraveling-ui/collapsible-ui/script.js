function handleClick(event) {
  let value = event.getAttribute("class") || "";
  value = value === "" ? "clicked" : "";
  event.setAttribute("class", value);
}

$(document).ready(function () {
  $("h1").prepend('<span class="node">-</span>');
  $("h1").click(function () {
    const node = $(this).children(".node");
    $(this)
      .next()
      .fadeToggle(500, "swing", function () {
        let mark = node.text();
        mark = mark === "-" ? "+" : "-";
        node.text(mark);
      });
  });
});
