function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();


  const images = document.querySelectorAll('.gallery-item img');
  let imgSrc;
  // Get images src on click
  images.forEach(function(img) {
    img.addEventListener('click', function(event) {
        imgSrc = event.target.src;
    });
  });

  // Creating the modal
  let imgModal = function(src) {
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');
    // Add the modal to the main section of the parent element
    document.querySelector('.body').append(modal);
    // Add image to modal
    const newImage = document.createElement('img');
    newImage.setAttribute('src', src);
    modal.append(newImage);
  }