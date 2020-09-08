import "../style/style.css";
import "./component/nav-bar.js";
import "./component/show-date.js";
import "./component/title-content.js";
import $ from "jquery";
import moment from "moment";
import main from "./main.js";

document.addEventListener("DOMContentLoaded", main);

var navbar = document.getElementsByClassName('navig')[0]

window.onscroll = function () {
    if (window.pageYOffset > 10) {
        navbar.style.background = "#6da06e98";
    } else {
        navbar.style.background = "transparent";
    }
}

const displayDate = () => {
    moment.locale("id");
    $(".date").text(moment().format("LL"));
};

displayDate();