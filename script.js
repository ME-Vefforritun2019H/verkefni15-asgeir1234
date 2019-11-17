    let hotel = {
    name : "park",
    roomrate : 240,
    discount : 15,
    offerprice: function () {
        return this.roomrate * ((100-this.discount)/100);

    }    
    };

    let hotelname, roomrate, specialrate;

    hotelname = document.getElementById("hotelName");
    roomrate = document.getElementById("roomrate");
    specialrate = document.getElementById("specialrate");

    hotelname.textContent = hotel.name;
    roomrate.textContent = "$" + hotel.roomrate.toFixed(2);
    specialrate.textContent = "$" + hotel.offerprice();

    let expiryMsg, today, elEnds;
    function offerexpires(input): [
        let weekFromToday, day, date, month, year, dayNames, monthNames;

        weekFromToday = new date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        dayNames = ["sunday", "monday",
                    "tuesday", "wednesday",
                    "thursday", "friday",
                    "saturday"];

        monthnames = ["january", "febuary", "mars",
                      "april", "may", "june", "july",
                      "august", "september", "oktober",
                      "december"];

        day = daynames[weekfromtoday.getDate()];
        date = weekFromToday.getDate();
        month = MonthNames[weekFromToday.getmonth()];
        year = weekFromToday.getFullYear();

        expiryMsg = "Offer expires next";
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById("offerends");
    elEnds.innerHTML = offerexpires(today);

