/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/*
 $(".img-thumbnail").click(function(){
 console.log(this.id);
 
 let popup_box = document.createElement("span");
 popup_box.id="popup_box";
 
 let popup = document.createElement("img");
 popup.src = "images/" + this.alt.toLowerCase() + "_large.jpg";
 popup.id = 'popup_img';
 var pic_id = document.getElementById(this.id);
 pic_id.insertAdjacentElement('afterend', popup_box);
 popup_box.insertAdjacentElement('afterend', popup);
 
 $('#popup_img').click(function(){
 var popup_box = document.getElementById("popup_box");
 var pic_id = document.getElementById("popup_img");
 popup_box.remove();
 pic_id.remove();
 });
 
 });
 */

$(document).ready(function () {
    onClick();
    activateMenu();
});

function onClick() {
    var thumbnail = document.getElementsByClassName("img-thumbnail");
    if (thumbnail !== null) {
        for (var i = 0; i < thumbnail.length; i++) {
            thumbnail[i].addEventListener("click", popup);
        }
    }
}

function popup(e) {
    var display = document.getElementById("popup");
    if (display === null) {
        display = document.createElement("span");
        display.id = "popup";
        display.setAttribute("class", "img-popup");

        var thumbnail = e.target;
        var thumbnail_img = thumbnail.src;

        var popup_img = thumbnail_img.replace("_small", "_large");
        display.innerHTML = "<img src=" + popup_img + ">";

        thumbnail.insertAdjacentElement("afterend", display);

        $(".img-popup").click(function (e) {
            $(".img-thumbnail").show();
            e.stopPropagation();
        });

        $(".img-thumbnail").click(function (e) {
            e.stopPropagation();
        });
        
        $(".img-popup").click(function (e) {
            e.stopPropagation();
        });

       
    } else {
        $(document).click(function () {
            $(".img-popup").remove();
        });
    }
}

/*
 * This function toggles the nav menu active/inactive status as
 * different pages are selected. It should be called from $(document).ready()
 * or whenever the page loads.
 */
function activateMenu()
{
    var current_page_URL = location.href;
    $(".navbar-nav a").each(function ()
    {
        var target_URL = $(this).prop("href");
        if (target_URL === current_page_URL)
        {
            $('nav a').parents('li, ul').removeClass('active');
            $(this).parent('li').addClass('active');
            return false;
        }
    });
}
