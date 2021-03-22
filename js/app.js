'use struct';

let hKeyword = [];

function Horns(hornsTyp){
  this.image_url=hornsTyp.image_url;
  this.title=hornsTyp.title;
  this.description=hornsTyp.description;
  this.keyword=hornsTyp.keyword;
  this.horns=hornsTyp.horns;
  this.runder();
}
Horns.prototype.runder = function(){
  const cardEl =$('<div></div>').attr('class', 'card');
  const titleEl =$('<h2></h2>').text(this.title);
  const imageEl =$('<img></img>').attr('src',this.image_url);
  const descriptionEl =$('<p></p>').text(this.description);
  const hornsEl =$('<h3></h3>').text(`horns : ${this.horns}`);

  if (!(hKeyword.includes(this.keyword))){


    const selectOp =$('<option></option>').text(this.keyword);
    selectOp.attr('value',`${this.keyword}`);
    $('#sel').append(selectOp);



    hKeyword.push(this.keyword);
  }


  cardEl.append(titleEl);
  cardEl.append(imageEl);
  cardEl.append(descriptionEl);
  cardEl.append(hornsEl);
  $('.container').append(cardEl);

};

$(document).ready(function(){

  const ajaxSettings = {
    method : 'get',
    dataType: 'json'
  };

  $.ajax('./data/page-1.json',ajaxSettings)
    .then(data =>{
      data.forEach(element => {
        new Horns(element);

      });



      $('#sel').on('click' , function(){
        const hValue = $('#sel').val();
        $('.container').empty();
        data.forEach(element => {
          if (hValue ==='default'){
            new Horns(element);
          }

          else if (element.keyword === hValue){
            new Horns(element);
          }
        });
      })


    });

});
