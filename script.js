const infoDiv = document.querySelector("#info");
const buttons = document.querySelectorAll(".btn");
const data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        },
        "className": "work"
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        },
        "className": "play"
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        },
        "className": "study"
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        },
        "className": "exercise"
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        },
        "className": "social"
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        },
        "className": "self-care"
    }
]


display("weekly");

for (let btn of buttons) {
    btn.addEventListener("click", function () {
        let btnText = btn.textContent.toLowerCase();
        document.querySelector(".btn.active").classList.remove("active");
        btn.classList.add("active");
        display(btnText);
    });
}

function display(filter) {

    infoDiv.innerHTML = "";
    data.forEach(element => {

        let div = `
            <div class="info-container ${element.className}">
                  <div class="info-content">
                    <div class="info-title">
                      <p>${element.title}</p>
                      <img src="./images/icon-ellipsis.svg" alt="icon-ellipsis">
                    </div>
                    <div class="info-times">
                      <h2>${element.timeframes[filter].current}hrs</h2>
                      <span>Last Week - ${element.timeframes[filter].previous}hrs</span>
                  
                    </div>
                  </div>
                </div>
            `;

        infoDiv.insertAdjacentHTML("beforeend", div);

    });
}






