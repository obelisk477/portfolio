function carouselButton(buttonId) {
    let otherButtons = []
    if (buttonId === 1) {
        otherButtons.push(2,3)
    } else if (buttonId === 2) {
        otherButtons.push(1,3)
    } else {
        otherButtons.push(1,2)
    }

    console.log(otherButtons)

    var carouselItem = document.querySelector("#carousel-" + buttonId)
    var otherImgOne = document.querySelector("#carousel-" + otherButtons[0])
    var otherImgTwo = document.querySelector("#carousel-" + otherButtons[1])

    var buttonItem = document.querySelector("#button" + buttonId)
    var otherBtnOne = document.querySelector("#button" + otherButtons[0])
    var otherBtnTwo = document.querySelector("#button" + otherButtons[1])

    carouselItem.style.height = "340px"
    otherImgOne.style.height = "300px"
    otherImgTwo.style.height = "300px"

    carouselItem.style.border = "solid 2px #BF5443"
    otherImgOne.style.border = "none"
    otherImgTwo.style.border = "none"

    carouselItem.style.zIndex = "11"
    otherImgOne.style.zIndex = "10"
    otherImgTwo.style.zIndex = "10"

    carouselItem.style.opacity = "1"
    otherImgOne.style.opacity = "0.6"
    otherImgTwo.style.opacity = "0.6"

    buttonItem.style.backgroundColor = "#BF5443"
    otherBtnOne.style.backgroundColor = "transparent"
    otherBtnTwo.style.backgroundColor = "transparent"




}