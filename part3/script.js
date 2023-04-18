let diary = "";
let emoji = "";

function saveHandler() {
  const dateString = $("#date").val().replace(/-/g, "/"); // date YYYY/MM/DD 형태로 변경
  const text = $("#text").val();

  if(dateString === "" || text === "")return false;

  diary = `
    <a href="#0" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <small>${emoji}</small>
        <small>${dateString}</small>
      </div>
      <h5 class="mb-1">${text}</h5>
    </a>
  ` + diary;
  $("#result").html(diary);
  localStorage.setItem("diary", diary);

  $("#date").val('');
  $("#text").val('');
}
function emojiSelected(_, value) {
  const emojiFit = this.emojis.filter((ele, idx) => {
    if(idx+1 === Number(value)){
      return ele;
    }
  });
  emoji = emojiFit;
};

$(document).ready(function() {
  diary = localStorage.getItem("diary");
  if(diary === null) diary = "";
  $("#emoji").emoji({
    callback: emojiSelected
  });
  $("#result").html(diary);
  $('#save').click(saveHandler)
}); 