

const vnutrOtdelka = document.querySelector('.vnutr__otdelka'),
vnutrUpper = document.querySelector('.vnutr__upper'),
vnutrTreugolnik = document.querySelector('.vnutr__treugolnik'),
vnutrP = document.querySelector('.vnutr__p'),
vneshOtdelka = document.querySelector('.vnesh__otdelka'),
vneshUpper = document.querySelector('.vnesh__upper'),
vneshTreugolnik = document.querySelector('.vnesh__treugolnik'),
vneshP = document.querySelector('.vnesh__p'),
vynosOtdelka = document.querySelector('.vynos__otdelka'),
vynosUpper = document.querySelector('.vynos__upper'),
vynosTreugolnik = document.querySelector('.vynos__treugolnik'),
vynosP = document.querySelector('.vynos__p'),
kryshaOtdelka = document.querySelector('.krysha__otdelka'),
kryshaUpper = document.querySelector('.krysha__upper'),
kryshaTreugolnik = document.querySelector('.krysha__treugolnik'),
kryshaP = document.querySelector('.krysha__p'),
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
costHot = document.querySelector('.cost__value__hot');

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

// function done(){
//     if(derevo.classList.contains('active')){
//         alumine.classList.remove('active');
//         plast.classList.remove('active');
//         france.classList.remove('active');
//         without.classList.remove('active');
//     }
    // else if(alumine.classList.contains('active')){
    //     derevo.classList.remove('active');
    //     plast.classList.remove('active');
    //     france.classList.remove('active');
    //     without.classList.remove('active');
    // }
    // else if(plast.classList.contains('active')){
    //     derevo.classList.remove('active');
    //     alumine.classList.remove('active');
    //     france.classList.remove('active');
    //     without.classList.remove('active');
    // }
    // else if(france.classList.contains('active')){
    //     derevo.classList.remove('active');
    //     alumine.classList.remove('active');
    //     without.classList.remove('active');
    //     plast.classList.remove('active');
    // }
//     else if(without.classList.contains('active')){
//         alumine.classList.remove('active');
//         plast.classList.remove('active');
//         france.classList.remove('active');
//         derevo.classList.remove('active');
//     }
// }







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



vneshOtdelka.addEventListener('mouseout', function() {
 vneshUpper.style.opacity = '0%';
 vneshTreugolnik.style.opacity = '0%';
 vneshP.style.color = '#000000';});


vneshOtdelka.addEventListener ('mouseover', function() { 
    vneshUpper.style.opacity = '100%';
    vneshTreugolnik.style.opacity = '100%';
    vneshP.style.color = '#0085db';
});

    

 vynosOtdelka.addEventListener('mouseover', function() {
    vynosUpper.style.opacity = '100%';
    vynosTreugolnik.style.opacity = '100%';
    vynosP.style.color = '#0085db';
});

vynosOtdelka.addEventListener('mouseout', function() {
    vynosUpper.style.opacity = '0%';
    vynosTreugolnik.style.opacity = '0%';
    vynosP.style.color = '#000000';
 });

 kryshaOtdelka.addEventListener('mouseover', function() {
    kryshaUpper.style.opacity = '100%';
    kryshaTreugolnik.style.opacity = '100%';
    kryshaP.style.color = '#0085db';
    
});

kryshaOtdelka.addEventListener('mouseout', function() {
    kryshaUpper.style.opacity = '0%';
    kryshaTreugolnik.style.opacity = '0%';
    kryshaP.style.color = '#000000';
 });




    

