function carouselButton(buttonId) {
    let otherButtons = []
    if (buttonId === 1) {
        otherButtons.push(2,3)
    } else if (buttonId === 2) {
        otherButtons.push(1,3)
    } else {
        otherButtons.push(2,1)
    }

    var carouselItem = document.querySelector("#carousel-" + buttonId).style
    var otherImgOne = document.querySelector("#carousel-" + otherButtons[0]).style
    var otherImgTwo = document.querySelector("#carousel-" + otherButtons[1]).style
    var buttonItem = document.querySelector("#button" + buttonId).style
    var otherBtnOne = document.querySelector("#button" + otherButtons[0]).style
    var otherBtnTwo = document.querySelector("#button" + otherButtons[1]).style

    carouselItem.height = "340px"
    otherImgOne.height = otherImgTwo.height = "300px"

    carouselItem.border = "solid 3px #BF5443"
    otherImgOne.border = otherImgTwo.border = "none"

    carouselItem.zIndex = "11"
    otherImgOne.zIndex = "10"
    otherImgTwo.zIndex = "9"

    carouselItem.opacity = "1"
    otherImgOne.opacity = otherImgTwo.opacity = "0.6"

    buttonItem.backgroundColor = "#BF5443"
    otherBtnOne.backgroundColor = otherBtnTwo.backgroundColor = "transparent"

}