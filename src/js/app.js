import "../style/style.css";
import $ from "jquery";
import moment from "moment";
import "./component/nav-bar.js";
import "./component/show-date.js";
import "./component/title-content.js";
import main from "./main.js";

document.addEventListener("DOMContentLoaded", main);

var navbar = document.getElementsByClassName('navig')[0]

window.onscroll = function () {
    if (window.pageYOffset > 10) {
        navbar.style.background = "rgba(201, 23, 201, 0.685)";
    } else {
        navbar.style.background = "transparent";
    }
}

const displayDate = () => {
    moment.locale("id");
    $(".date").text(moment().format("LL"));
};

displayDate();