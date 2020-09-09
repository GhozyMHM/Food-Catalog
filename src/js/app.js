import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";
import "./component/nav-bar.js";
import "./component/title-content.js";
import $ from "jquery";
import 'popper.js';
import "bootstrap/dist/js/bootstrap.min.js";
import main from "./main.js";

document.addEventListener("DOMContentLoaded", main);

$(document).ready(function () {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll > 10) {
            $(".navig").css("background", "#6da06e98");
        } else {
            $(".navig").css("background", "transparent");
        }
    })
})