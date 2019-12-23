window.onscroll = scrollAction;

window.onload = function() {
    //Fill current year in copyright
    var date = new Date();
    var copyright = "Copyright \u00A9 " + date.getFullYear() + " Antonio Ferreras. All Rights Reserved";

    document.getElementById("copyright").innerHTML = copyright;

    //Add title to images
    var screenshots = document.getElementsByClassName("screenshot");
    for(var i = 0;i < screenshots.length; i++) {
        screenshots[i].setAttribute("title", "Click to enlarge");
    }
};
//Whether mobile menu is open or not
var menuOpen = false;

function openMenu() {
    document.getElementById("menu-open").style.display = "none";
    document.getElementById("title").style.display = "none";
    document.getElementById("menu-close").style.display = "block";
    document.getElementById("menu-close").classList.add("fadingIn");
    var navbuttons = document.getElementsByClassName("nav-button");
    for(var i = 0; i<navbuttons.length; i++) {
        navbuttons[i].style.display = "inline";
        navbuttons[i].classList.add("fadingIn");
        navbuttons[i].classList.remove("fadingout");
    }
    menuOpen = true;

}

function closeMenu() {
    document.getElementById("menu-open").style.display = "block";
    document.getElementById("menu-open").classList.add("fadingIn");
    document.getElementById("title").style.display = "inline";
    document.getElementById("menu-close").style.display = "none";
    var navbuttons = document.getElementsByClassName("nav-button");
    for(var i = 0; i<navbuttons.length; i++) {
        navbuttons[i].style.display = "none";
        navbuttons[i].classList.remove("fadingIn");
        navbuttons[i].classList.add("fadingout");
    }
    menuOpen = false;
    
}

var lastPageYOffset = 0;
function scrollAction() {
    var dScroll = window.pageYOffset - lastPageYOffset;
    if(Math.abs(dScroll) > 110) {
        if(window.pageYOffset > 450) {
        
            if(dScroll > 0) {
                if(!menuOpen) {
                    document.getElementsByTagName("header")[0].classList.remove("focused");
                    document.getElementsByTagName("header")[0].classList.add("unfocused");
                }
            } else {
                document.getElementsByTagName("header")[0].classList.add("focused");
                document.getElementsByTagName("header")[0].classList.remove("unfocused");
            }
        } else if(!menuOpen){
            document.getElementsByTagName("header")[0].classList.add("focused");
            document.getElementsByTagName("header")[0].classList.remove("unfocused");
        }
        lastPageYOffset = window.pageYOffset;
    }
    
    
}

// var navbar = document.getElementById("navbar");
// var threshholdForScroll = navbar.offsetTop;

var homeText = document.getElementsByClassName("home-text");
var homeTextIndex = 0;

//Start with fading
homeText[0].classList.add("fadingIn");
homeText[0].classList.remove("fadingOut");

homeText[0].addEventListener("animationend", function() {
    if(homeText[0].classList.contains("fadingIn")) {//Just finished fading
        //Prepare to fade out in 1.7 seconds
        setTimeout(function () {
            homeText[0].classList.remove("fadingIn");
            homeText[0].classList.add("fadingOut");
        }, 1700);
    } else if(homeText[0].classList.contains("fadingOut")) {//Just finished fade out
        nextText();//Swtich to next text string
        homeText[0].classList.add("fadingIn");//Fade in animation plays
        homeText[0].classList.remove("fadingOut");
    }
    
});

function nextText() {
    homeTextIndex += 1;
    if(homeTextIndex > 3) {
        homeTextIndex = 0;
    }

    if(homeTextIndex == 0) {
        homeText[0].innerHTML = "Experience something new";
    } else if(homeTextIndex == 1) {
        homeText[0].innerHTML = "A different kind of MC shader";
    } else if(homeTextIndex == 2) {
        homeText[0].innerHTML = "A stylistic and unique shader";
    } else if(homeTextIndex == 3) {
        homeText[0].innerHTML = "Introducing, Vertigo by SNURFx";
    }
}