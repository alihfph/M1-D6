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
    let backgroundColor= document.body.style.backgroundColor = "red"; 
    console.log(backgroundColor)   
    }