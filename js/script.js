

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
svg = document.querySelector('.svg');




svg.addEventListener('click',function(){
    if(hot.classList.contains('hide__elem')){
        hot.classList.remove('hide__elem');
        cold.classList.add('hide__elem');
        hot.classList.add('show__elem');
        path.style.fill = '#ffb903';
        polygon.style.fill = '#0d8fe3';
    }
    else if(hot.classList.contains('show__elem')){
        hot.classList.remove('show__elem');
        hot.classList.add('hide__elem');
        cold.classList.remove('hide__elem')
        cold.classList.add('show__elem'); 
        path.style.fill = '#0d8fe3';
        polygon.style.fill = '#ffb903'; 
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




    

