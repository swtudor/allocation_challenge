'use strict';
const isValid = function(num){
  let test = /[a-zA-Z+]/;
  if(num.match(test)){
    alert( num + ' is an invalid input. You must re-load form and enter only integers!');
  }
}

const findTotal = function(dep, devs, qas, mgrs){
  let developers = 1000;
  let testers = 500;
  let managers = 300;

  if(dep){
    developers = devs * developers;
    testers = qas * testers;
    managers = managers * mgrs;
    return testers + developers + managers;

  } else if (!dep){
    developers = devs * developers;
    testers = qas * testers;
    return testers + developers + managers;
  }
}

let test = findTotal(false, 5, 3, 2);
console.log('TEST= '+ test);

const updateTotal = function(tot){
  $('#total').empty();
  $('#total').append(
    `<h2 id="total">Total monthly allocation: $`+ tot + `</h2>`
  );
}

//console.log('Expect: 7100. Got: ' + findTotal('true', 5, 3 , 2));

$(document).ready(function(){
  $('#form').on('click', function(){
    let dev = $('#devs').val();
    let tstr = $('#testers').val();
    let mg = $('#mgrs').val();
    let boss = $('#hasMgr').is(":checked");
      if(boss){
        $('#myCollapse').collapse('show');
      }else if(!boss){
        $('#myCollapse').collapse('hide');
        $('#mgrs').empty();
      }
    console.log('Values are: \nDev: '+ dev + '\nTester: '+ tstr + '\nMgr= '+mg + '\nBoss= '+boss);
    console.log('TOTAL: '+ total);

    $('#calculate').on('click', function(){
      isValid(dev);
      isValid(tstr);
      isValid(mg);

      let total = findTotal(boss, dev, tstr, mg);
      updateTotal(total);
      //console.log('TOTAL post calc: '+ total);
      console.log('Total should be 77,500 for false, 70 devs, 15 testers, 0 mgrs: ' + total);
      console.log('Total should be 26,500 for true, 15 devs, 20 testers, 5 mgrs: ' + total);
    });
  });
  $('#clear').on('click', function(){
    $('#myCollapse').collapse('hide');
    updateTotal(0);
    $('#form')[0].reset();
  });


});
