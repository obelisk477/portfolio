function carouselButton(buttonId) {
    let otherButtons = buttonId === 1 ? [2,3] : buttonId === 2 ? [1,3] : [1,2]

    var carouselItemStyles = document.querySelector("#carousel-" + buttonId).style
    var buttonItemStyles = document.querySelector("#button" + buttonId).style

    Object.assign(carouselItemStyles, {height: "340px", border: "solid 3px #BF5443", opacity: "1"})
    buttonItemStyles.backgroundColor = "#BF5443"
    
    otherButtons.forEach((otherButtonId) => {
        const otherCarouselItem = document.querySelector(`#carousel-${otherButtonId}`).style
        const otherButtonItem = document.querySelector(`#button${otherButtonId}`).style

        Object.assign(otherCarouselItem, {height: "300px", border: "none", opacity: "0.4"})
        Object.assign(otherButtonItem, {backgroundColor: "transparent"})
    })

}