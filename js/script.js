

const vnutrOtdelka = document.querySelector('.vnutr__otdelka'),
upperVnutr = document.querySelector('.upper__vnutr'),
vnutrP = document.querySelector('.vnutr__p'),
vneshOtdelka = document.querySelector('.vnesh__otdelka'),
upperVnesh = document.querySelector('.upper__vnesh'),
vneshP = document.querySelector('.vnesh__p'),
vynosOtdelka = document.querySelector('.vynos__otdelka'),
upperVynos = document.querySelector('.upper__vynos'),
vynosP = document.querySelector('.vynos__p'),
kryshaOtdelka = document.querySelector('.krysha__otdelka'),
upperKrysha = document.querySelector('.upper__krysha'),
kryshaP = document.querySelector('.krysha__p'),
imgPrimer = document.querySelector('.img__primer'),
cost1 = document.querySelector('.cost1'),
cost2 = document.querySelector('.cost2'),
cost3 = document.querySelector('.cost3'),
cost4 = document.querySelector('.cost4'),
cost5 = document.querySelector('.cost5'),
img1 = document.querySelector('.img1'),
img2 = document.querySelector('.img2'),
img3 = document.querySelector('.img3'),
img4 = document.querySelector('.img4'),
img5 = document.querySelector('.img5'),
material1 = document.querySelector('.material1'),
material2 = document.querySelector('.material2'),
material3 = document.querySelector('.material3'),
material4 = document.querySelector('.material4'),
material5 = document.querySelector('.material5'),
arrow = document.querySelector('.arrow-6'),
cold = document.querySelector('.cold'),
hot = document.querySelector('.hot'),
polygon = document.querySelector('.polygon'),
path = document.querySelector('.path'),
polygon1 = document.querySelector('.polygon1'),
arrowfixed = document.querySelector('.arrow-6-pl-fixed'),
arrowpl = document.querySelector('arrow-6-pl'),
svg = document.querySelector('.svg'),
blockDerevo = document.querySelector('.block__derevo'),
derevo = document.querySelector('.type__derevo'),
blockAlumine = document.querySelector('.block__alumine'),
alumine = document.querySelector('.type__alumine'),
blockPlast = document.querySelector('.block__plast'),
plast = document.querySelector('.type__plast'),
blockFrance = document.querySelector('.block__france'),
france = document.querySelector('.type__france'),
blockWithout = document.querySelector('.block__without'),
without = document.querySelector('.type__without'),
imageCold = document.querySelector('.primer__image__cold'),
imageHot = document.querySelector('.primer__image__hot'),
costCold = document.querySelector('.cost__value__cold'),
costHot = document.querySelector('.cost__value__hot'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
firstPhoto = document.querySelector('.container__first'),
secondPhoto = document.querySelector('.container__second'),
threePhoto = document.querySelector('.container__three'),
fourPhoto = document.querySelector('.container__four'),
fivePhoto = document.querySelector('.container__five'),
sixPhoto = document.querySelector('.container__six'),
sevenPhoto = document.querySelector('.container__seven'),
eightPhoto = document.querySelector('.container__eight'),
numberInput = document.querySelector('.number'),
nameInput = document.querySelector('.name'),
numberInput1 = document.querySelector('.number1'),
nameInput1 = document.querySelector('.name1'),
numberInput2 = document.querySelector('.number2'),
nameInput2 = document.querySelector('.name2'),
firstPhotoPC = document.querySelector('.first__photo__PC'),
secondPhotoPC = document.querySelector('.second__photo__PC'),
threePhotoPC = document.querySelector('.three__photo__PC'),
fourPhotoPC = document.querySelector('.four__photo__PC'),
fivePhotoPC = document.querySelector('.five__photo__PC'),
sixPhotoPC = document.querySelector('.six__photo__PC'),
sevenPhotoPC = document.querySelector('.seven__photo__PC'),
eightPhotoPC = document.querySelector('.eight__photo__PC'),
sliderPC = document.querySelector('.slider__For__PC'),
prevPC = document.querySelector('.prev__PC'),
nextPC = document.querySelector('.next__PC'),
closeBtn = document.querySelector('.cl-btn-6');

const DATA = [firstPhoto,secondPhoto,threePhoto,fourPhoto,fivePhoto,sixPhoto,sevenPhoto,eightPhoto];
const DATAPC = [firstPhotoPC,secondPhotoPC,threePhotoPC,fourPhotoPC,fivePhotoPC,sixPhotoPC,sevenPhotoPC,eightPhotoPC];   
window.addEventListener('resize',
    function razmerscreen(){
    if(screen.width <= 767){
        hot.classList.add('hide__elem');
    }
    else if(screen.width > 768){
        hot.classList.remove('hide__elem');
        cold.classList.remove('hide__elem');
        hot.classList.remove('show__elem');
        cold.classList.remove('show__elem');
    }
});
if(screen.width <= 767){
    hot.classList.add('hide__elem');
}
else if(screen.width > 768){
    hot.classList.remove('hide__elem');
    cold.classList.remove('hide__elem');
    hot.classList.remove('show__elem');
    cold.classList.remove('show__elem');
}

let numberPC = 0;
prevPC.style.display='none';
function firstHide(){
    for(let n = 0;n<8;n++){
        DATAPC[n].style.display = 'none';
    }
}
firstHide();
function pcSliderHideNext(i){
    i--;
    DATAPC[i].style.animation='sliderhide 2s ease 1 alternate forwards';
    DATAPC[i].style.display='none';
}

function pcSliderHidePrev(i){
    i++;
    DATAPC[i].style.animation='sliderhide 2s ease 1 alternate forwards';
    DATAPC[i].style.display='none';
}

function pcSliderShow(i){
    if(i == 0){
        prevPC.style.display = 'none';
        DATAPC[i].style.display = 'block';
        DATAPC[i].style.animation = 'slidershow 2s ease 1 alternate forwards';
    }
    else if(i == 7){
        nextPC.style.display = 'none';
        DATAPC[i].style.display = 'block';
        DATAPC[i].style.animation = 'slidershow 2s ease 1 alternate forwards';
    }
    else{
        prevPC.style.display = 'block';
        nextPC.style.display = 'block';
        DATAPC[i].style.display = 'block';
        DATAPC[i].style.animation = 'slidershow 2s ease 1 alternate forwards';
    }
}
prevPC.addEventListener('click',function(){
    numberPC--;
    pcSliderHidePrev(numberPC);
    pcSliderShow(numberPC);
});
nextPC.addEventListener('click',function(){
    numberPC++;
    pcSliderHideNext(numberPC);
    pcSliderShow(numberPC);
});
function showPCSlider(i){
    sliderPC.style.display='grid';
    DATAPC[i].style.display = 'block';
}
function hidePCSlider(){
    sliderPC.style.display = 'none';
    for(let n = 0;n<8;n++){
        DATAPC[n].style.display = 'none';
    }
}
closeBtn.addEventListener('click',function(){
    hidePCSlider();
});
firstPhoto.addEventListener('click',function(){
    numberPC=0;
    showPCSlider(numberPC);
});
secondPhoto.addEventListener('click',function(){
    numberPC=1;
    showPCSlider(numberPC);
});
threePhoto.addEventListener('click',function(){
    numberPC=2;
    showPCSlider(numberPC);
});
fourPhoto.addEventListener('click',function(){
    numberPC=3;
    showPCSlider(numberPC);
});
fivePhoto.addEventListener('click',function(){
    numberPC=4;
    showPCSlider(numberPC);
});
sixPhoto.addEventListener('click',function(){
    numberPC=5;
    showPCSlider(numberPC);
});
sevenPhoto.addEventListener('click',function(){
    numberPC=6;
    showPCSlider(numberPC);
});
eightPhoto.addEventListener('click',function(){
    numberPC=7;
    showPCSlider(numberPC);
});


derevo.classList.add('active');

blockDerevo.addEventListener('click',function(){
    derevo.classList.add('active');
    imageCold.style.backgroundImage = 'url(../img/derevocold.png)';
    imageHot.style.backgroundImage = 'url(../img/derevohot.png)';
    alumine.classList.remove('active');
    plast.classList.remove('active');
    france.classList.remove('active');
    without.classList.remove('active');
    costCold.textContent = '2600';
    costHot.textContent= '4000';
});

blockAlumine.addEventListener('click',function(){
    alumine.classList.add('active');
    imageCold.style.backgroundImage = 'url(../img/aluminecold.jpg)';
    imageHot.style.backgroundImage = 'url(../img/aluminehot.jpg)';
    derevo.classList.remove('active');
    plast.classList.remove('active');
    france.classList.remove('active');
    without.classList.remove('active');
    costCold.textContent = '4500';
    costHot.textContent= '6000';
});
blockPlast.addEventListener('click',function(){
    plast.classList.add('active');
    imageCold.style.backgroundImage = 'url(../img/plastcold.jpg)';
    imageHot.style.backgroundImage = 'url(../img/plasthot.jpg)';
    derevo.classList.remove('active');
    alumine.classList.remove('active');
    france.classList.remove('active');
    without.classList.remove('active');
    costCold.textContent = '6500';
    costHot.textContent= '8000';
});
blockFrance.addEventListener('click',function(){
    france.classList.add('active');
    imageCold.style.backgroundImage = 'url(../img/francecold.jpg)';
    imageHot.style.backgroundImage = 'url(../img/francehot.jpg)';
    derevo.classList.remove('active');
    alumine.classList.remove('active');
    without.classList.remove('active');
    plast.classList.remove('active');
    costCold.textContent = '8500';
    costHot.textContent= '10000';
});
blockWithout.addEventListener('click',function(){
    without.classList.add('active');
    imageCold.style.backgroundImage = 'url(../img/vynoscold.jpg)';
    imageHot.style.backgroundImage = 'url(../img/vynoshot.jpg)';
    alumine.classList.remove('active');
    plast.classList.remove('active');
    france.classList.remove('active');
    derevo.classList.remove('active');
    costCold.textContent = '10500';
    costHot.textContent= '12000';
});

if(hot.classList.contains('hide__elem')){
    polygon.style.fill = '#ffb903';
    polygon1.style.fill = '#ffb903';
}
svg.addEventListener('click',function(){
    
    if(hot.classList.contains('hide__elem')){
        hot.classList.remove('hide__elem');
        cold.classList.add('hide__elem');
        hot.classList.add('show__elem');
        path.style.fill = '#ffb903';
        polygon.style.fill = '#0d8fe3';
        polygon1.style.fill = '#0d8fe3';
    }
    else if(hot.classList.contains('show__elem')){
        hot.classList.remove('show__elem');
        hot.classList.add('hide__elem');
        cold.classList.remove('hide__elem')
        cold.classList.add('show__elem'); 
        path.style.fill = '#0d8fe3';
        polygon.style.fill = '#ffb903';
        polygon1.style.fill = '#ffb903'; 
    }
});

svg.addEventListener('mouseover',function(){
    
    if (hot.classList.contains('show__elem')){
        path.style.fill = '#ffb903';
        polygon.style.fill = '#0d8fe3';
    }
    if (hot.classList.contains('hide__elem')){
        path.style.fill = '#0d8fe3';
        polygon.style.fill = '#ffb903';
    }
});
svg.addEventListener('mouseout',function(){
    if (hot.classList.contains('show__elem')){
        path.style.fill = '#ffb903';
        polygon.style.fill = '#0d8fe3';
    }
    if (hot.classList.contains('hide__elem')){
        path.style.fill = '#0d8fe3';
        polygon.style.fill = '#ffb903';
    }
});

vnutrOtdelka.classList.add('active__otdelka');
upperVnutr.style.opacity = '100%';
vnutrP.classList.remove('otdelka__p');
vnutrP.classList.add('active__p');

function activeOtdelka(otdelka,upper,p){
    otdelka.classList.add('active__otdelka')
    upper.style.opacity = '100%';
    p.classList.remove('otdelka__p');
    p.classList.add('active__p');
    
}

function onlyOne(otdelka,upper,p){
    otdelka.classList.remove('active__otdelka');
    otdelka.classList.remove('navedenie__otdelka');
    upper.style.opacity = '0%';
    p.classList.remove('active__p');
    p.classList.add('otdelka__p');
}

function navedenie(otdelka,upper,p){
    otdelka.classList.add('navedenie__otdelka');
    upper.style.opacity = '100%';
    p.classList.remove('otdelka__p');
    p.classList.add('active__p');
}

function otvedenie(otdelka,upper,p){
    otdelka.classList.remove('navedenie__otdelka');
    upper.style.opacity = '0%';
    p.classList.remove('active__p');
    p.classList.add('otdelka__p');
}

vnutrOtdelka.addEventListener('click',function(){
    onlyOne(vneshOtdelka,upperVnesh,vneshP);
    onlyOne(vynosOtdelka,upperVynos,vynosP);
    onlyOne(kryshaOtdelka,upperKrysha,kryshaP);
    activeOtdelka(vnutrOtdelka,upperVnutr,vnutrP);
    imgPrimer.src=('../img/image-01.png');
    cost1.textContent='600';
    cost2.textContent='750';
    cost3.textContent='800';
    cost4.textContent='1250';
    cost5.textContent='1650';
    img4.src=('../img/laminat.png');
    img5.src=('../img/forest.png');
    material4.textContent='Настил пола из ламината';
    material5.textContent='Настил пола из дерева';
    
});

vneshOtdelka.addEventListener('click',function(){
    onlyOne(vnutrOtdelka,upperVnutr,vnutrP);
    onlyOne(vynosOtdelka,upperVynos,vynosP);
    onlyOne(kryshaOtdelka,upperKrysha,kryshaP);
    activeOtdelka(vneshOtdelka,upperVnesh,vneshP);
    imgPrimer.src=('../img/vneshotd.jpg');
    cost1.textContent='700';
    cost2.textContent='850';
    cost3.textContent='900';
    cost4.textContent='1350';
    cost5.textContent='1750';
    img4.src=('../img/siding.jpg');
    img5.src=('../img/profnastil.jpg');
    material4.textContent='Сайдинг';
    material5.textContent='Профнастил';
    
});

vynosOtdelka.addEventListener('click',function(){
    onlyOne(vnutrOtdelka,upperVnutr,vnutrP);
    onlyOne(vneshOtdelka,upperVnesh,vneshP);
    onlyOne(kryshaOtdelka,upperKrysha,kryshaP);
    activeOtdelka(vynosOtdelka,upperVynos,vynosP);
    imgPrimer.src=('../img/vynosotd.jpg');
    img4.src=('../img/siding.jpg');
    img5.src=('../img/profnastil.jpg');
    cost1.textContent='800';
    cost2.textContent='950';
    cost3.textContent='1000';
    cost4.textContent='1450';
    cost5.textContent='1850';
});

kryshaOtdelka.addEventListener('click',function(){
    onlyOne(vnutrOtdelka,upperVnutr,vnutrP);
    onlyOne(vneshOtdelka,upperVnesh,vneshP);
    onlyOne(vynosOtdelka,upperVynos,vynosP);
    activeOtdelka(kryshaOtdelka,upperKrysha,kryshaP);
    imgPrimer.src=('../img/kryshaotd.jpg');
    img4.src=('../img/siding.jpg');
    img5.src=('../img/profnastil.jpg');
    cost1.textContent='900';
    cost2.textContent='1050';
    cost3.textContent='1100';
    cost4.textContent='1550';
    cost5.textContent='1950';
});

vnutrOtdelka.addEventListener('mouseover',function(){
    navedenie(vnutrOtdelka,upperVnutr,vnutrP);
});
vnutrOtdelka.addEventListener('mouseout',function(){
    if(vnutrOtdelka.classList.contains('active__otdelka')){
        activeOtdelka(vnutrOtdelka,upperVnutr,vnutrP);
    }
    else{
        otvedenie(vnutrOtdelka,upperVnutr,vnutrP);
    }
});

vneshOtdelka.addEventListener('mouseover',function(){
    navedenie(vneshOtdelka,upperVnesh,vneshP);
});
vneshOtdelka.addEventListener('mouseout',function(){
    if(vneshOtdelka.classList.contains('active__otdelka')){
        activeOtdelka(vneshOtdelka,upperVnesh,vneshP);
    }
    else{
        otvedenie(vneshOtdelka,upperVnesh,vneshP);
    }
});

vynosOtdelka.addEventListener('mouseover',function(){
    navedenie(vynosOtdelka,upperVynos,vynosP);
});
vynosOtdelka.addEventListener('mouseout',function(){
    if(vynosOtdelka.classList.contains('active__otdelka')){
        activeOtdelka(vynosOtdelka,upperVynos,vynosP);
    }
    else{
        otvedenie(vynosOtdelka,upperVynos,vynosP);
    }
});

kryshaOtdelka.addEventListener('mouseover',function(){
    navedenie(kryshaOtdelka,upperKrysha,kryshaP);
});
kryshaOtdelka.addEventListener('mouseout',function(){
    if(kryshaOtdelka.classList.contains('active__otdelka')){
        activeOtdelka(kryshaOtdelka,upperKrysha,kryshaP);
    }
    else{
        otvedenie(kryshaOtdelka,upperKrysha,kryshaP);
    }
});
prev.style.display='none';
let result = 0;
let number = 0;
function sliderhidenext(i){
    i -= 1;
    let photos = DATA[i];
    photos.style.animation = 'sliderhide 2s ease 1 alternate forwards';
    photos.style.display = 'none';
    console.log(photos);
}
function sliderhideprev(i){
    i += 1;
    let photos = DATA[i];
    photos.style.animation = 'sliderhide 2s ease 1 alternate forwards';
    photos.style.display = 'none';
    console.log(photos);
    
    console.log(number);
}
function slidershow(prv,nx,i){
    if(i>0 && i<7){
    prv.style.display = 'block';
    nx.style.display = 'block';
    let photo = DATA[i];
    photo.style.display = 'block';
    photo.style.animation = 'slidershow 2s ease 1 alternate forwards';
    console.log(photo);}
    else if(i==0){
    prv.style.display = 'none';
    let photo = DATA[i];
    photo.style.display = 'block';
    photo.style.animation = 'slidershow 2s ease 1 alternate forwards';
    console.log(photo);
    }
    else{
    nx.style.display = 'none';
    let photo = DATA[i];
    photo.style.display = 'block';
    photo.style.animation = 'slidershow 2s ease 1 alternate forwards';
    console.log(photo);
    }
}

next.addEventListener('click',function(){
    result +=1;
    number +=1;
    console.log(result);
    sliderhidenext(number);
    slidershow(prev,next,result);
    console.log(result);
});

prev.addEventListener('click',function(){
    result -=1;
    number -=1;
    console.log(number);
    sliderhideprev(number);
    slidershow(prev,next,result);
    console.log(number);
});


nameInput.addEventListener('keyup',function(){
    nameInput.value = nameInput.value.replace(/[0-9,-.,:+/*]/, '');
});

nameInput.addEventListener('input',function(){
    nameInput.value = nameInput.value.replace(/[0-9,-.,:+/*]/g, '');
});

nameInput1.addEventListener('keyup',function(){
    nameInput1.value = nameInput1.value.replace(/[0-9,-.,:+/*]/, '');
});

nameInput1.addEventListener('input',function(){
    nameInput1.value = nameInput1.value.replace(/[0-9,-.,:+/*]/g, '');
});

nameInput2.addEventListener('keyup',function(){
    nameInput2.value = nameInput2.value.replace(/[0-9,-.,:+/*]/, '');
});

nameInput2.addEventListener('input',function(){
    nameInput2.value = nameInput2.value.replace(/[0-9,-.,:+/*]/g, '');
});

numberInput.addEventListener('keyup',function(){
    numberInput.value = numberInput.value.replace(/[a-z,A-Z,а-я,А-Я,.,:/*]/, '');
});

numberInput.addEventListener('input',function(){
    numberInput.value = numberInput.value.replace(/[a-z,A-Z,а-я,А-Я,.,:/*]/g, '');
});

numberInput1.addEventListener('keyup',function(){
    numberInput1.value = numberInput1.value.replace(/[a-z,A-Z,а-я,А-Я,.,:/*]/, '');
});

numberInput1.addEventListener('input',function(){
    numberInput1.value = numberInput1.value.replace(/[a-z,A-Z,а-я,А-Я,.,:/*]/g, '');
});

numberInput2.addEventListener('keyup',function(){
    numberInput2.value = numberInput2.value.replace(/[a-z,A-Z,а-я,А-Я,.,:/*]/, '');
});

numberInput2.addEventListener('input',function(){
    numberInput2.value = numberInput2.value.replace(/[a-z,A-Z,а-я,А-Я,.,:/*]/g, '');
});


