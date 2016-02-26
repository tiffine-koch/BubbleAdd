'use strict';

$(document).ready(init);
var number = 3;
function init() {
  console.log('readddddy');
  $('#outerHolder').on('click', '.cup', clickCup);
  $('#outerHolder').on('dblclick', '.holder', clickHolder);
  // $('#outerHolder').on('dblclick', '.cup', moveIt);
  $('#addCup').on('click', addCup);
}

function clickHolder(event) {
  // if( $('selected').length ) {
  ('.selected').appendTo($(this));
  ('.selected').removeClass('selected');
    // console.log('lol');
  // }
}

function addCup() {
  var numCups = $('#numCups').val();
  var $cups = [];

  for(var i = 0; i < numCups; i++) {
    var $cup = $('<div>').addClass('cup').css('background-color', randColor());
    $cup.text(++number);
    $cups.push($cup);
    }
  $('#left').append($cups);
}
function randColor() {
  return '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
}

function clickCup() {
  event.stopPropagation();
  var $this = $(this);
  var wasSelected = $(this).hasClass('selected');

  $('cup').removeClass('selected');
  if(!wasSelected) {
    $this.addClass('selected');
  }

  var $destination = $this.parent().siblings();
  var $cup = $this.detach();
  $destination.append($cup);
}
// function clickCup() {
//   var $this = $(this);
//   var $destination = $this.parent().siblings();
//   var $cup = $this.detach();
//   $destination.append($cup);
// }
// function clickCup() {
//   console.log('cup left clicked alright');
//   var $target = $(this);
//   $target.addClass('red');
//   var $detached = $(this).detach();
//   $('#right').append($detached);
// }


function moveIt() {
  console.log('cup right again son');
  var $target = $(this);
  $target.addClass('grey');
  var $detached = $(this).detach();
  $('#left').append($detached);
}
