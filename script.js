// change css using jquery
// $("#txt").css({ color: "blue", fontSize: "25px" });

// 4 / 2 = 2
// 4 / 3 = 1 R1

// 4 % 2 = 0
// 4 % 3 = 1

// 2 % 2 = 0
// 3 % 2 = 1

// if a number is even then % with 2 will return 0
// otherwise if a number is odd then % with 2 will return 1

$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = amOrPm(h);
    color(m);
    backgroundColor(m);
    h = convertHours(h);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    $("#txt").html(h + ":" + m + ":" + s + ampm)
    setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
  }

  function convertHours(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
  }

  function amOrPm(i) {
    if (i < 12) {
        return "AM";
    } else {
        return "PM";
    }
  }

  function color(i) {
    if (i % 2 === 0) {
      $("#txt").css({ color: "blue"});
  }
    else {
      $("#txt").css({ color: "red"});
  }
}

  function backgroundColor(i) {
    if (i % 5 === 0) {
      $("body").css({ backgroundColor: "pink"});
  }
    else {
      $("body").css({ backgroundColor: "orange"});
  }
}

  var fontSize = ["12px", "14px"]
// $("body").css("font-size", fontSize[0])

  function FontSize(i) {
    if (i % 5 === 0) {
      $("body").css({ fontSize: fontSize[0]});
  }
    else {
      $("body").css({ backgroundColor: "blue"});
  }
}

  


  startTime();
});
