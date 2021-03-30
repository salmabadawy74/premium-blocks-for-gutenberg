jQuery(document).ready(function($) {
    const $person = $(".premium-person");
  
    const addFontToHead = fontFamily => {
      const head = document.head;
      const link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css?family=" +
        fontFamily.replace(/\s+/g, "+") +
        ":" +
        "regular";
      head.appendChild(link);
    };
  
    $person.map((index, person) => {
      let $person = $(person),
        titleFont = $person.find(".premium-person__title").css("font-family"),
        descFont = $person.find(".premium-person__desc").css("font-family");
  
      addFontToHead(titleFont);
      addFontToHead(descFont);
    });
  });
  