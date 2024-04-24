let currentPoint = 1


document.getElementById("next").onclick = function(){
    if (currentPoint !== 4){
        currentPoint = currentPoint + 1
    }
    switch (currentPoint){
        case 1:
            document.getElementById("preview").style.backgroundColor = "rgb(207, 207, 207)"
            document.getElementById("next").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("first-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("second-circle").style.borderColor = "rgb(207, 207, 207)"
            document.getElementById("third-circle").style.borderColor = "rgb(207, 207, 207)"
            document.getElementById("fourth-circle").style.borderColor = "rgb(207, 207, 207)"
            document.getElementById("road-to-the-second").style.backgroundColor = "rgb(207, 207, 207)"
            document.getElementById("road-to-the-third").style.backgroundColor = "rgb(207, 207, 207)"
            document.getElementById("road-to-the-fourth").style.backgroundColor = "rgb(207, 207, 207)"
            break
        case 2:
            document.getElementById("preview").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("next").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("first-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("second-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("third-circle").style.borderColor = "rgb(207, 207, 207)"
            document.getElementById("fourth-circle").style.borderColor = "rgb(207, 207, 207)"
            document.getElementById("road-to-the-second").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("road-to-the-third").style.backgroundColor = "rgb(207, 207, 207)"
            document.getElementById("road-to-the-fourth").style.backgroundColor = "rgb(207, 207, 207)"

            break
        case 3:
            document.getElementById("preview").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("next").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("first-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("second-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("third-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("fourth-circle").style.borderColor = "rgb(207, 207, 207)"
            document.getElementById("road-to-the-second").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("road-to-the-third").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("road-to-the-fourth").style.backgroundColor = "rgb(207, 207, 207)"

            break
        case 4:
            document.getElementById("preview").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("next").style.backgroundColor = "rgb(207, 207, 207)"
            document.getElementById("first-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("second-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("third-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("fourth-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("road-to-the-second").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("road-to-the-third").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("road-to-the-fourth").style.backgroundColor = "rgb(29, 145, 199)"

            break
    }
}

document.getElementById("preview").onclick = function(){
    if (currentPoint !== 1){
    currentPoint = currentPoint - 1
    }
    switch (currentPoint){
        case 1:
            document.getElementById("preview").style.backgroundColor = "rgb(207, 207, 207)"
            document.getElementById("next").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("first-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("second-circle").style.borderColor = "rgb(207, 207, 207)"
            document.getElementById("third-circle").style.borderColor = "rgb(207, 207, 207)"
            document.getElementById("fourth-circle").style.borderColor = "rgb(207, 207, 207)"
            document.getElementById("road-to-the-second").style.backgroundColor = "rgb(207, 207, 207)"
            document.getElementById("road-to-the-third").style.backgroundColor = "rgb(207, 207, 207)"
            document.getElementById("road-to-the-fourth").style.backgroundColor = "rgb(207, 207, 207)"
            break
        case 2:
            document.getElementById("preview").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("next").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("first-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("second-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("third-circle").style.borderColor = "rgb(207, 207, 207)"
            document.getElementById("fourth-circle").style.borderColor = "rgb(207, 207, 207)"
            document.getElementById("road-to-the-second").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("road-to-the-third").style.backgroundColor = "rgb(207, 207, 207)"
            document.getElementById("road-to-the-fourth").style.backgroundColor = "rgb(207, 207, 207)"

            break
        case 3:
            document.getElementById("preview").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("next").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("first-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("second-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("third-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("fourth-circle").style.borderColor = "rgb(207, 207, 207)"
            document.getElementById("road-to-the-second").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("road-to-the-third").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("road-to-the-fourth").style.backgroundColor = "rgb(207, 207, 207)"

            break
        case 4:
            document.getElementById("preview").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("next").style.backgroundColor = "rgb(207, 207, 207)"
            document.getElementById("first-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("second-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("third-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("fourth-circle").style.borderColor = "rgb(29, 145, 199)"
            document.getElementById("road-to-the-second").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("road-to-the-third").style.backgroundColor = "rgb(29, 145, 199)"
            document.getElementById("road-to-the-fourth").style.backgroundColor = "rgb(29, 145, 199)"

            break
    }
 
}

