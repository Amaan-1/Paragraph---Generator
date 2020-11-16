function para_show() {
    var input = [];
    for (var i = 1; i <= 6; i++) {
        input.push(document.getElementById("thing-" + i).value);
    }
    var stop = input.join(". ");
    console.log(stop);
    document.getElementById("para-show-1").innerHTML = stop;
}

function para_show_2() {
    var input_2 = [];
    for (var j = 1; j <= 6; j++) {
        input_2.push(document.getElementById("stuff-" + j).value);
    }
    var stop_2 = input_2.join(". ");
    console.log(stop_2);
    document.getElementById("para-show-2").innerHTML = stop_2;
}
