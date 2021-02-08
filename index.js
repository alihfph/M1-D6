function selectFirstHeading() {
    let firstHeading = document.querySelector('h1')
    console.log(firstHeading)
    firstHeading.innerText = "This is the Amanon"    
}


function changefooter() {
    let footeraddress = document.querySelector('footer')
    console.log(footeraddress)
    footeraddress.innerText = "Clinton Road, 80807, Basenf"
}

function AmazonClassId() {
  let amazonId = document.querySelectorAll('a');
  console.log(amazonId)
  element.classList.add("amazonId");
}

function imagClassId() {
  let imageId = document.querySelectorAll('img');
  console.log(imageId)
  element.classList.add("imageID");
  imageId.style.visibility = 'visible'
}
function backgroundchange() {
    let backgroundColor= document.querySelector('body')
    console.log(backgroundColor)   
    backgroundColor.style.backgroundColor = "grey"; 
    }
function colorOfPrice() {
    let priceColorChange =  document.querySelectorAll('colorChange')
    console.log(priceColorChange)

    if ( priceColorChange[0].style.color = "blue") {
    priceColorChange[0].style.color = "yellow";
    }
    }
   