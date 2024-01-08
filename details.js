var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')
var preBut = document.querySelector('.pre')
var nextBut = document.querySelector('.next')

var currentIndex = 0;
function updateImageByIndex(index){
    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('active')
    })
    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')

}



listImg.forEach((imgElement, index)=>{
    imgElement.addEventListener('click',e=>{
        imgFeature.style.opacity='0';
        

        setTimeout(()=>{
            updateImageByIndex(index)
            imgFeature.style.opacity='1';
        },400)
    })
})


preBut.addEventListener('click', e=>{
    if(currentIndex==0){
        currentIndex = listImg.length-1;
    }else{
        currentIndex--;
    }
    

    imgFeature.style.animation=''
    setTimeout(()=>{
        updateImageByIndex(currentIndex)
        imgFeature.style.animation='slideLeft 0.5s ease-in-out forwards'
    },100)
    

})

nextBut.addEventListener('click', e=>{
    if(currentIndex==listImg.length-1){
        currentIndex = 0
    }else{
        currentIndex++;
    }
    imgFeature.style.animation=''
    setTimeout(()=>{
        updateImageByIndex(currentIndex)
        imgFeature.style.animation='slideRight 0.5s ease-in-out forwards'
    },100)

})
updateImageByIndex(0)



//  -----------------------------quantity button-------------------------------------------------------------------------------------
function increaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    quantityInput.stepUp(); 
}

function decreaseQuantity() {
    var quantityInput = document.getElementById('quantity');
    quantityInput.stepDown(); 
}



//-----------------popup--------------------------------------------------------------------------------------------------
document.querySelectorAll('.img-feature').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup span').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
}

//-----------------------zoom image --------------------------------------------------------------------------------------

const imageContainers = document.querySelectorAll('.image_rating_list_container .img_rating_detail img');
let selectedImage = null;

imageContainers.forEach(image => {
    image.addEventListener('click', function() {
        const imagePath = this.getAttribute('src');
        const zoomedContainer = document.querySelector('.image_rating_zoom');
        const zoomedImage = zoomedContainer.querySelector('.image_rating_zoom_detail img');
        
        // Kiểm tra xem hình ảnh đã được chọn trước đó chính là hình ảnh đang được click
        if (selectedImage === this) {
            // Nếu là hình ảnh đã được chọn, ẩn phần image_rating_zoom_detail
            zoomedContainer.style.display = 'none';
            selectedImage = null; // Đặt lại giá trị của selectedImage
        } else {
            // Nếu không, hiển thị hình ảnh được chọn trong phần image_rating_zoom_detail
            zoomedContainer.style.display = 'block';
            zoomedImage.setAttribute('src', imagePath);
            selectedImage = this; // Lưu trữ hình ảnh đã chọn vào biến selectedImage
        }
    });
});

