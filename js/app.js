'use struct';

const page1Json =[];
const page2Json =[];
const pageAllJson =[];
let hKeyword =[];
let hKeyword2 =[];
let hKeywordAll =[];

let tempId='#horns-template';

function Horns(hornsTyp){
  for (let horn in hornsTyp ){
    this[horn] = hornsTyp[horn];
  }
  this.runder();
}

Horns.prototype.toHtml=function(){

  let template = $(tempId).html();
  let html =Mustache.render(template,this);
  return html ;
};

Horns.prototype.runder = function(){
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
        // new Horns(element);

        if (!(hKeyword.includes(element.keyword))){
          hKeyword.push(element.keyword);
          hKeywordAll.push(element.keyword);
          const selectOp =$('<option></option>').text(element.keyword);
          selectOp.attr('value',`${element.keyword}`);
          $('#sel').append(selectOp);
        }

      });

 
      page1Json.sort((a,b)=>{
        if (a.title >b.title){
          return 1;
        }
        if (b.title >a.title){
          return -1;
        }
      })
      page1Json.forEach(element => {
        new Horns(element);
      });

    });


  $.ajax('./data/page-2.json',ajaxSettings)
    .then(data =>{
      data.forEach(element => {
        page2Json.push(element);
        pageAllJson.push(element);
        if (!(hKeyword2.includes(element.keyword))){
          hKeyword2.push(element.keyword);
          if(!(hKeywordAll.includes(element.keyword))){
            hKeywordAll.push(element.keyword);
          }
        }
      });
      pageAllJson.sort((a,b)=>{
        if (a.title >b.title){
          return 1;
        }
        if (b.title >a.title){
          return -1;
        }
      })
    });

  $('#sel').on('click' , function(){
    const hValue = $('#sel').val();
    let T = $('#horns-template').clone();
    $('.container').empty();
    $('.container').append(T);

    page1Json.forEach(element => {
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


      $('#pageSel').on('click',function(){
        let result=$('#pageSel').val();
        if (result === 'byName'){
          page1Json.sort((a,b)=>{
            if (a.title >b.title){
              return 1;
            }
            if (b.title >a.title){
              return -1;
            }
          })
        }

        else if (result === 'byHorns'){
          page1Json.sort((a,b)=>{
            if (a.horns >b.horns){
              return 1;
            }
            if (b.horns >a.horns){
              return -1;
            }
          });

        }

      });






      $('#sel').empty();
      let T = $('#horns-template').clone();
      $('.container').empty();
      $('.container').append(T);
      let selectOp1 =$('<option></option>').text('Filter by Keyword');
      selectOp1.attr('value',`default`);
      $('#sel').append(selectOp1);
      hKeyword.forEach(element => {
        const selectOp =$('<option></option>').text(element);
        selectOp.attr('value',`${element}`);
        $('#sel').append(selectOp);
      });

      page1Json.forEach(element => {
        new Horns(element);
      });

      $('#sel').on('click' , function(){
        const hValue = $('#sel').val();
        let T = $('#horns-template').clone();
        $('.container').empty();
        $('.container').append(T);
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


      $('#pageSel').on('click',function(){
        let result=$('#pageSel').val();
        if (result === 'byName'){
          page2Json.sort((a,b)=>{
            if (a.title >b.title){
              return 1;
            }
            if (b.title >a.title){
              return -1;
            }
          })
        }

        else if (result === 'byHorns'){
          page2Json.sort((a,b)=>{
            if (a.horns >b.horns){
              return 1;
            }
            if (b.horns >a.horns){
              return -1;
            }
          });

        }

      });






      $('#sel').empty();
      let T = $('#horns-template').clone();
      $('.container').empty();
      $('.container').append(T);
      let selectOp1 =$('<option></option>').text('Filter by Keyword');
      selectOp1.attr('value',`default`);
      $('#sel').append(selectOp1);
      hKeyword2.forEach(element => {
        const selectOp =$('<option></option>').text(element);
        selectOp.attr('value',`${element}`);
        $('#sel').append(selectOp);
      });


      page2Json.forEach(element => {
        new Horns(element);
      });

      $('#sel').on('click' , function(){
        const hValue = $('#sel').val();
        let T = $('#horns-template').clone();
        $('.container').empty();
        $('.container').append(T);
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

      let result=$('#pageSel').val();
      if (result === 'byName'){
        pageAllJson.sort((a,b)=>{
          if (a.title >b.title){
            return 1;
          }
          if (b.title >a.title){
            return -1;
          }
        })
      }

      else if (result === 'byHorns'){
        pageAllJson.sort((a,b)=>{
          if (a.horns >b.horns){
            return 1;
          }
          if (b.horns >a.horns){
            return -1;
          }
        });

      }


      $('#sel').empty();
      let T = $('#horns-template').clone();
      $('.container').empty();
      $('.container').append(T);
      let selectOp1 =$('<option></option>').text('Filter by Keyword');
      selectOp1.attr('value',`default`);
      $('#sel').append(selectOp1);
      hKeywordAll.forEach(element => {
        const selectOp =$('<option></option>').text(element);
        selectOp.attr('value',`${element}`);
        $('#sel').append(selectOp);
      });


      pageAllJson.forEach(element => {
        new Horns(element);
      });

      $('#sel').on('click' , function(){
        const hValue = $('#sel').val();
        let T = $('#horns-template').clone();
        $('.container').empty();
        $('.container').append(T);
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


  $('#pageSel').on('click',function(){
    let result=$('#pageSel').val();
    if (result === 'byName'){
      page1Json.sort((a,b)=>{
        if (a.title >b.title){
          return 1;
        }
        if (b.title >a.title){
          return -1;
        }
      })
    }

    else if (result === 'byHorns'){
      page1Json.sort((a,b)=>{
        if (a.horns >b.horns){
          return 1;
        }
        if (b.horns >a.horns){
          return -1;
        }
      });

    }

  });









});
