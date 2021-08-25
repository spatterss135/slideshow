const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

let bubbles = document.querySelectorAll('.bubble')
i = 0
bubbles[0].textContent =  '●'
let firstImage = document.querySelector('.image')
firstImage.setAttribute('src', images[0])

let nextButton = document.querySelector('.next')
nextButton.addEventListener('click', function() {
    if (i<images.length-1) {
    i++
    firstImage.setAttribute('src', images[i])
    bubbles[i].textContent =  '●'
    for (j=0; j<images.length; j++){
        if (j != i){
            bubbles[j].textContent = '○'
        }
    }
    }
})

let prevButton = document.querySelector('.previous')
prevButton.addEventListener('click', function() {
    if (i>0) {
    i--
    firstImage.setAttribute('src', images[i])
    bubbles[i].textContent =  '●'
    for (j=0; j<images.length; j++){
        if (j != i){
            bubbles[j].textContent = '○'
        }
    }
    }
})

for (x=0; x<bubbles.length; x++)
{
    bubbles[x].addEventListener('click', function(e) {
        y = Number(String(e.target.id).slice(-1))
        i = y
        bubbles[y].textContent = '●'
        firstImage.setAttribute('src', images[y])
        for (x1=0; x1<bubbles.length; x1++) {
            if (x1 != y) {
                bubbles[x1].textContent = '○'
            }
        }

}
)
}