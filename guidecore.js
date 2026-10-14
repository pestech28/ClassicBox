function getdb(chvalue) {
    const chdb = getchinfo();
    chnum = ""
    if (chvalue < 10) {
        chnum = "0" + chvalue
    }
    if (chvalue >= 10) {
        chnum = chvalue
    }
    channelname.innerText = chdb[chvalue][0]
    channeldesc.innerText = chdb[chvalue][1] 
}

function getcurpath() {
    let fullurl = window.location.toString();
    urlbox = fullurl.split("#");
    let cururl = urlbox[1];
    return cururl;
}

function getpos(cururl) {
    pos = 0;
    const channels = getchannels();
    for (let i = 0; i < channels.length; i++) {
     if (channels[i].includes(cururl)) {
        pos = i
     }
    }
    return pos;
} 

function addprev() {
    cururl = getcurpath();
    cururl = cururl.toString();
    if (cururl.includes(".m3u8")) {
        target = "miniprv.html#" + cururl;
        uib.innerHTML = '<iframe src="' + target + '" style="width: 100%; height: 198px; border: none;""></iframe>'
    }
    if (!cururl.includes(".m3u8")) {
        target = cururl;
        uib.innerHTML = '<iframe src="' + target + '" style="width: 100%; height: 198px; border: none;""></iframe>'
    }
}

function addclock() {
    const now = new Date();
    let hours = now.getHours(); 
    let minutes = now.getMinutes();
    if (minutes < 30) {
        curmin = "00";
        curtime = hours + ":" + curmin;
        time1.innerText = curtime;
    }
    if (minutes >= 30) {
        curmin = "30";
        curtime = hours + ":" + curmin;
        time1.innerText = curtime;
    }
    newmin = minutes + 30
    if (newmin < 30) {
        curmin = "00";
        curtime = hours + ":" + curmin;
        time2.innerText = curtime;
    }
    if (newmin >= 30) {
        curmin = "30";
        curtime = hours + ":" + curmin;
        time2.innerText = curtime;
    }
    if (newmin > 59) {
        curmin = "00";
        hours += 1
        curtime = hours + ":" + curmin;
        time2.innerText = curtime;
        newmin = 0;
    }
    if (hours > 23) {
        hours = 0;
        curtime = hours + ":" + curmin;
        time1.innerText = curtime;
    }
    newmin += 30
    if (newmin < 30) {
        curmin = "00";
        curtime = hours + ":" + curmin;
        time3.innerText = curtime;
    }
    if (newmin >= 30) {
        curmin = "30";
        curtime = hours + ":" + curmin;
        time3.innerText = curtime;
    }
    if (newmin > 59) {
        curmin = "00";
        hours += 1
        curtime = hours + ":" + curmin;
        time3.innerText = curtime;
        newmin = 0;
    }
    if (hours > 23) {
        hours = 0;
        curtime = hours + ":" + curmin;
        time1.innerText = curtime;
    }
    newmin += 30
    if (newmin < 30) {
        curmin = "00";
        curtime = hours + ":" + curmin;
        time4.innerText = curtime;
    }
    if (newmin >= 30) {
        curmin = "30";
        curtime = hours + ":" + curmin;
        time4.innerText = curtime;
    }
    if (newmin > 59) {
        curmin = "00";
        hours += 1
        curtime = hours + ":" + curmin;
        time4.innerText = curtime;
        newmin = 0;
    }
    if (hours > 23) {
        hours = 0;
        curtime = hours + ":" + curmin;
        time1.innerText = curtime;
    }
}

function addguide() {
    channelbox.innerHTML = "";
    const chdb = getchinfo();
    for (let i = 0; i < channels.length; i++) {
        if (channels[i] == "index.html") {
            console.log("Dummy channel skipped");
        } 
        else if (channels[i] == "index4.html") {
            console.log("Dummy channel skipped");
        } 
        else {
            channelbox.innerHTML += '<tr>' +
    '<td class="channamebox"><a style="color: black; width: 6%; max-height: 48px;" href="' + channels[i] + '">' + i + '<br>' + chdb[i][0] + '</a></td>' +
    '<td class="chandescbox"><a class="navico" style="color: inherit; display: block; width: 100%; height: 48px;" href="' + channels[i] + '">' + chdb[i][1] + '</a></td>' +
'</tr>';

        }
    }
}