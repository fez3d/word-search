// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery

function search() {
  let param = $(".js-search-input").val();
  if(param != ""){
    $.ajax({
      url: `/users?search=${param}`,
      success: function(response) {
        $(".js-users-content").empty()
        $(".js-users-content").html(response.attachment_partial);
      }
    });
  } else {
    $(".js-users-content").empty()
  }
}

function cardSelected() {
  event.preventDefault();
  $(".oxxo-img").attr("src", "assets/purple_oxxo.png");
  $(".oxxo-container").css("background-color", "white");
  $(".spei-img").attr("src", "assets/purple_spei.png");
  $(".spei-container").css("background-color", "white");
  $(".card-img").attr("src", "assets/white_card.png");
  $(".card-container").css("background-color", "#A119FF");
}

function oxxoSelected() {
  event.preventDefault();
  $(".card-img").attr("src", "assets/purple_card.png");
  $(".card-container").css("background-color", "white");
  $(".spei-img").attr("src", "assets/purple_spei.png");
  $(".spei-container").css("background-color", "white");
  $(".oxxo-img").attr("src", "assets/white_oxxo.png");
  $(".oxxo-container").css("background-color", "#A119FF");
}

function speiSelected() {
  event.preventDefault();
  $(".card-img").attr("src", "assets/purple_card.png");
  $(".card-container").css("background-color", "white");
  $(".oxxo-img").attr("src", "assets/purple_oxxo.png");
  $(".oxxo-container").css("background-color", "white");
  $(".spei-img").attr("src", "assets/white_spei.png");
  $(".spei-container").css("background-color", "#A119FF");
}
