let tooltip = document.getElementById("tooltip");
let mon = document.getElementById("mon");
let tue = document.getElementById("tue");
let wed = document.getElementById("wed");
let thu = document.getElementById("thu");
let fri = document.getElementById("fri");
let sat = document.getElementById("sat");
let sun = document.getElementById("sun");
let charts = document.querySelectorAll(".chart");
let spends = document.getElementById("spends");

mon.onmouseover = function() {
    tooltip.style.left = "-3%"
    tooltip.style.top = "39%"
    tooltip.classList.add("transition")
    tooltip.classList.add("opacity-tool")
    spends.innerText = "17.45$"
}

tue.onmouseover = function() {
    tooltip.style.left = "12%"
    tooltip.style.top = "18%"
    tooltip.classList.add("transition")
    tooltip.classList.add("opacity-tool")
    spends.innerText = "34.91$"
}

wed.onmouseover = function() {
    tooltip.style.left = "27%"
    tooltip.style.top = "-2%"
    tooltip.classList.add("transition")
    tooltip.classList.add("opacity-tool")
    spends.innerText = "52.36$"
}

thu.onmouseover = function() {
    tooltip.style.left = "42%"
    tooltip.style.top = "25%"
    tooltip.classList.add("transition")
    tooltip.classList.add("opacity-tool")
    spends.innerText = "31.07$"
}

fri.onmouseover = function() {
    tooltip.style.left = "56%"
    tooltip.style.top = "34%"
    tooltip.classList.add("transition")
    tooltip.classList.add("opacity-tool")
    spends.innerText = "23.39$"
}

sat.onmouseover = function() {
    tooltip.style.left = "71%"
    tooltip.style.top = "11%"
    tooltip.classList.add("transition")
    tooltip.classList.add("opacity-tool")
    spends.innerText = "43.28$"
}

sun.onmouseover = function() {
    tooltip.style.left = "86%"
    tooltip.style.top = "30%"
    tooltip.classList.add("transition")
    tooltip.classList.add("opacity-tool")
    spends.innerText = "25.28$"
}

charts.forEach((charts) => {
    charts.addEventListener("mouseleave", function() {
        tooltip.classList.remove("opacity-tool")
    })
})


// mon.onmouseleave = function() {
//     tooltip.classList.remove("mon")
// }

// tue.onmouseover = function() {
//     tooltip.classList.add("tue")
// }

// tue.onmouseleave = function() {
//     tooltip.classList.remove("tue")
// }