import * as MODEL from "../model/model.js";

//adds nav listeners,
function initial() {
  console.log("");
  $("nav a").click(function (e) {
    let btnId = this.id;
    let contentId = btnId + "Content";

    //updates hero image and page content
    $(".hero");

    //update the nav bar
    updateNav(btnId);

    $(".page-name").html(btnId);

    MODEL.getPageContent(contentId, addContentListener);
  });
}

function addContentListener() {
  // console.log('add');

  $("#app .gallery a").click(function (e) {
    let pageId = this.id;

    MODEL.getPageContent("emptyEvent");
    generateEventEntry(pageId);
  });

  $("#app .blog a").click(function (e) {
    let pageId = this.id;

    MODEL.getPageContent("emptyEntry");
    generateBlogEntry(pageId);
  });
}

function generateBlogEntry(pageId) {
  let dateId = pageId;
  let monthId = dateId.substring(0, 3);
  let dayId = dateId.substring(dateId.length - 2);

  //update date on blog entry
  //day
  $("#day").html(dayId);
  //month
  $("#month").html(monthId);
}

function generateEventEntry(pageId) {
  let colorId = pageId;

  let colors = ["yellow", "pink", "green", "purple", "teal"];

  let eventNumbers = ["1.", "2.", "3.", "4.", "5."];

  let eventTitles = [
    "food festival",
    "dee-jay",
    "speech",
    "open foodfest",
    "international",
  ];

  let indexId = colors.indexOf(colorId);

  //update banner image
  $(".event-header").attr("id", colorId);

  //update event header on event page
  $("#number").html(eventNumbers[indexId]);
  $("#event").html(eventTitles[indexId]);
}

function updateNav(btnId) {
  if (btnId == "home") {
    //hero container
    $(".heroContainer").removeClass("hero");
    $(".heroContainer").addClass("hero");

    //update colors
    $(".black").addClass("white");
    $(".black").removeClass("black");

    //update logo
    $(".blk").addClass("wht");
    $(".blk").removeClass("blk");

    //show intro
    $("div.introContainter").show();
  } else {
    //hero container
    $(".heroContainer").removeClass("hero");

    //update colors
    $(".white").addClass("black");
    $(".white").removeClass("white");

    //update logo
    $(".wht").addClass("blk");
    $(".wht").removeClass("wht");

    //hide intro
    $("div.introContainter").hide();
  }
}

$(document).ready(function () {
  initial();
  // touring();
  MODEL.getPageContent("homeContent", addContentListener);
});
