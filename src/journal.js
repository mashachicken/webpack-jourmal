let title = "First Test"
let body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate distinctio perspiciatis ducimus atque nam voluptas aspernatur sed, explicabo voluptatibus."

function Entries(title, body) {
  this.title = title;
  this.body = body;
};


Entries.prototype.wordsCount = function(){
  return entry.split('').length;
}

$(document).ready(function () {
  $('form#journal-entry').submit(function(event){
    event.preventDefault()
    const title = $('#title').val();
    const body = $('#body-entry').val();
    let entry = new Entries(title, body)
    console.log(entry)

  })
})