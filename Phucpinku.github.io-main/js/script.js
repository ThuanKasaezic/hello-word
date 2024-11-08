

function upDate(previewPic){
    const imgDiv = "url(" + previewPic.src + ")";
    const img = document.getElementById("image");
    const altText = previewPic.alt;

    img.style.backgroundImage = imgDiv;
    img.textContent = altText;
       }
   
function unDo(){
    const img = document.getElementById("image");
    img.style.backgroundImage = '';
    img.textContent = 'Hover over an image below to display here.';     
       }
