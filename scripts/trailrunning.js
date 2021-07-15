function fun(){  
   document.getElementById("myForm").reset(); 
}

const images = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if(entry.intersectionRatio > 0){
          entry.target.style.animation = 'anim1 0.5s forwards ease-out';
      }

      else{
         entry.target.style.animation = 'none';
       }
   })
})

images.forEach(image => {
   observer.observe(image)
})