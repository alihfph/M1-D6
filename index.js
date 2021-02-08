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

function imageClassId() {
  let imageId = document.getElementsByTagName('img');
  console.log(imageId)
  for (let i=0; i<imageId.length;i++){
    imageId[i].classList.toggle("invisible")

  }
}
function backgroundchange() {
    let backgroundColor= document.querySelector('body')
    console.log(backgroundColor)   
    backgroundColor.style.backgroundColor = "grey"; 
    }
function randomcolor() {
    const randomnumber = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + randomnumber.slice(0, 6);
    }
function colorprice() { 
    let prices = document.querySelectorAll('.colorChange')
    let chosenColor = randomcolor();
    for (let i=0;i<prices.length;i++) {
    prices[i].style.color = chosenColor;
    }
  }

    // function colorOfPrice() {
//     let priceColorChange =  document.querySelectorAll('.colorChange')
//     console.log(priceColorChange[0,1,2,3,4])
//     priceColorChange[0,1,2,3,4].style.color ="black"
//     if ( priceColorChange[0,1,2,3,4].style.color === "black") {
//     priceColorChange[0,1,2,3,4].style.color ='red';
//     }
//     }

   