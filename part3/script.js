let diary = "";
function saveHandler() {
  const date = new Date($("#date").val());
  const text = $("#text").val();
  const mood = $("#mood").val();
  const dateString = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  diary = `
    <a href="#0" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <small>${mood}</small>
        <small>${dateString}</small>
      </div>
      <h5 class="mb-1">${text}</h5>
    </a>
  ` + diary;
  $("#result").html(diary);
  localStorage.setItem("diary", diary);

  $("#date").val('');
  $("#text").val('');
  $("#mood").val('');
}

$(document).ready(function() {
  diary = localStorage.getItem("diary");
  if(diary === null) diary = "";
  $("#result").html(diary);
  $('#save').click(saveHandler)
});