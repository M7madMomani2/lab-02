'use struct';

let hKeyword = [];
const page1Json =[];
const page2Json =[];
const pageAllJson =[];

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


Horns.prototype.toHtml=function(){
  let template = $('#horns-template').html();
  let html =Mustache.runder(template,this);
  return html ;
};

$(document).ready(function(){

  const ajaxSettings = {
    method : 'get',
    dataType: 'json'
  };



  {
    $.ajax('./data/page-1.json',ajaxSettings)
      .then(data =>{
        data.forEach(element => {
          page1Json.push(element);
          pageAllJson.push(element);
          new Horns(element);

        });
      });


    $.ajax('./data/page-2.json',ajaxSettings)
      .then(data =>{
        data.forEach(element => {
          page2Json.push(element);
          pageAllJson.push(element);

        });
      });

  }





  $('#sel').on('click' , function(){
    const hValue = $('#sel').val();
    $('.container').empty();
    page2Json.forEach(element => {
      if (hValue ==='default'){
        new Horns(element);
      }

      else if (element.keyword === hValue){
        new Horns(element);
      }
    });
  })





  $('#pageSel').on('click' , function(){
    const pValue = $('#pageSel').val();

    if (pValue === 'Page1'){
      $('.container').empty();
      page1Json.forEach(element => {
        new Horns(element);
      });

      $('#sel').on('click' , function(){
        const hValue = $('#sel').val();
        $('.container').empty();
        page1Json.forEach(element => {
          if (hValue ==='default'){
            new Horns(element);
          }

          else if (element.keyword === hValue){
            new Horns(element);
          }
        });
      })



    }
    else if (pValue === 'Page2'){
      $('.container').empty();

      page2Json.forEach(element => {
        new Horns(element);
      });

      $('#sel').on('click' , function(){
        const hValue = $('#sel').val();
        $('.container').empty();
        page2Json.forEach(element => {
          if (hValue ==='default'){
            new Horns(element);
          }

          else if (element.keyword === hValue){
            new Horns(element);
          }
        });
      })
    }
    else {
      $('.container').empty();

      page1Json.forEach(element => {
        new Horns(element);
      });
      page2Json.forEach(element => {
        new Horns(element);
      });


      $('#sel').on('click' , function(){
        const hValue = $('#sel').val();
        $('.container').empty();
        pageAllJson.forEach(element => {
          if (hValue ==='default'){
            new Horns(element);
          }

          else if (element.keyword === hValue){
            new Horns(element);
          }
        });
      })
    }



  });

});

















// $('#sel').on('click' , function(){
//   const hValue = $('#sel').val();
//   $('.container').empty();
//   data.forEach(element => {
//     if (hValue ==='default'){
//       new Horns(element);
//     }

//     else if (element.keyword === hValue){
//       new Horns(element);
//     }
//   });
// })
