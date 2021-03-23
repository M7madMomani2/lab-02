'use struct';

const page1Json =[];
const page2Json =[];
const pageAllJson =[];

let tempId='#horns-template';


function Horns(hornsTyp){
  for (let horn in hornsTyp ){
    this[horn] = hornsTyp[horn];
  }
}
Horns.prototype.toHtml=function(){

  let template = $(tempId).html();
  console.log(this);
  let html =Mustache.runder(template,this);
  return html ;
};
Horns.prototype.runder = function(){
  console.log(this);
  $('.container').append(this.toHtml());
};





$(document).ready(function(){

  const ajaxSettings = {
    method : 'get',
    dataType: 'json'
  };

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








