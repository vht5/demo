if (window.flag === undefined) {
    window.flag = true;

    // record.txt
    let data = document.getElementById("data").innerHTML.split("<br>");
    document.getElementById("data").innerHTML = "";
    for(let i = 0; i < data.length - 1; i++) {
        if (true) {
            data[i] = data[i].replace("<b>", "")
            data[i] = data[i].replace("</b>", "")
            data[i] = data[i].replace("91.159.139.72", "192.168.36.59")
            data[i] = data[i].replace("tom", "GC")
            data[i] = data[i].replace(`<img onerror="console.log('1')" ;="" src="a">x`, "GC")
        // if (data[i].includes("91.159.139.72") === false && data[i].includes("192.168.92.202") === false) {
            document.getElementById("data").innerHTML += data[i] + "<br>";
        }
    }

}
