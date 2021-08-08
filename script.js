 const buttons = document.querySelectorAll('.ripple')

 buttons.forEach(button => {
     button.addEventListener('click', function (event){

        const x = event.clientX
        const y = event.clientY

        const buttonTop = event.target.offsetTop
        const buttonLeft = event.target.offsetLeft
        

        const xInside = x - buttonLeft 
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle-ripple')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

         this.appendChild(circle)

        //Remove span after 0.5s 
        setTimeout(() => circle.remove(), 5000);
     })
 });