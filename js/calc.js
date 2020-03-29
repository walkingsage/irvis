const closebtn = document.querySelector('.close-btn-6'),
calculator = document.querySelector('.main__calculator'),
btncold = document.querySelector('.button__cold'),
btnhot = document.querySelector('.button__hot'),
alumineCalc = document.getElementById('alumine__calc'),
plastCalc = document.getElementById('plast__calc'),
franceCalc = document.getElementById('france__calc'),
vynosnoeCalc = document.getElementById('vynosnoe__calc'),
derevoCalc = document.getElementById('derevo__calc'),
coldCalc = document.getElementById('cold__calc'),
hotCalc = document.getElementById('hot__calc'),
vnutrOtdCalc = document.getElementById('vnutr__otd__calc'),
vneshOtdelkaCalc = document.getElementById('vnesh__otd__calc'),
vynosOsteklCalc = document.getElementById('vynos__ostekl__calc'),
kryshaBalkonCalc = document.getElementById('krysha__balkon__calc'),
vagonkaCalc = document.getElementById('vagonka__calc'),
plastVagonkaCalc = document.getElementById('plast__vagonka__calc'),
pvhPanelCalc = document.getElementById('pvh__panel__calc'),
laminatCalc = document.getElementById('laminat__calc'),
derevoNastilCalc = document.getElementById('derevo__nastil__calc'),
sidingCalc = document.getElementById('siding__calc'),
profnastilCalc = document.getElementById('profnastil__calc'),
ploshyadCalc = document.getElementById('ploshyad__calc'),
priceCalc = document.querySelector('.price__calc'),
priceSaleCalc = document.querySelector('.price__sale__calc'),
raschet = document.querySelector('.raschet');

const DATACALC = {
    derevoOstekl : [1,1],
    alumineOstekl : [1.8,1.5],
    osteklRamami : [3.2,2.8],
    franceOstekl : [4.8,4.05],
    vynosOstekl : [6,5.25],
    vagongaMat : [600,700,800,900],
    plastVagonkaMat : [750,850,950,1050],
    pvhPanelMat : [800,900,1000,1100],
    laminatMat : [1250,0,1450,0],
    derevonastilMat : [1650,0,1850,0],
    sidingMat : [0,1350,1450,1550],
    profnastilMat : [0,1750,1850,1950]
};


function typeind(){
    let y = 0,
    x = 1,
    z = 0,
    vag = 0,
    plvag = 0,
    panpvh = 0,
    pollam = 0,
    polder = 0,
    sid = 0,
    nasprof = 0,
    plosh = ploshyadCalc.value;
    result = 0;
    coldCalc.checked?x=1:hotCalc.checked?x=0:alert('Выберите тип: холодное или теплое!!!');
    derevoCalc.checked?y=DATACALC.derevoOstekl[x]:alumineCalc.checked?y=DATACALC.alumineOstekl[x]:plastCalc.checked?y=DATACALC.osteklRamami[x]:franceCalc.checked?y=DATACALC.franceOstekl[x]:vynosnoeCalc.checked?y=DATACALC.vynosOstekl[x]:alert('Выберите тип остекления!!!');
    vnutrOtdCalc.checked?z=0:vneshOtdelkaCalc.checked?z=1:vynosOsteklCalc.checked?z=2:kryshaBalkonCalc.checked?z=3:alert('Выберите вид работ!!!');
    vagonkaCalc.checked?vag = DATACALC.vagongaMat[z]:vag = 0;
    plastVagonkaCalc.checked?plvag = DATACALC.plastVagonkaMat[z]: plvag = 0;
    pvhPanelCalc.checked?panpvh = DATACALC.pvhPanelMat[z]: panpvh = 0;
    laminatCalc.checked?pollam = DATACALC.laminatMat[z]: pollam = 0;
    derevoNastilCalc.checked? polder = DATACALC.derevonastilMat[z]:polder = 0;
    sidingCalc.checked? sid = DATACALC.sidingMat[z]:sid = 0;
    profnastilCalc.checked? nasprof = DATACALC.profnastilMat[z]: nasprof = 0;
    plosh>0?plosh = ploshyadCalc.value:alert('Укажите площать помещения!!!');

    result=((vag*plosh)+(plvag*plosh)+(panpvh*plosh)+(pollam*plosh)+(polder*plosh)+(sid*plosh)+(nasprof*plosh))*y;

    priceCalc.textContent = Math.round(result) + ' руб.';
    priceSaleCalc.textContent= Math.round(result*0.6) + ' руб.';
}
raschet.addEventListener('click',function(){
    typeind();
});

derevoCalc.addEventListener('click',function(){
    if(derevoCalc.checked == true){
        plastCalc.checked=false;
        alumineCalc.checked=false;
        franceCalc.checked=false;
        vynosnoeCalc.checked=false;
        hotCalc.checked=false;
        coldCalc.checked=false;
        vneshOtdelkaCalc.checked=false;
        vynosOsteklCalc.checked=false;
        kryshaBalkonCalc.checked=false;
        vnutrOtdCalc.checked=false;
        vagonkaCalc.checked=false;
        plastVagonkaCalc.checked=false;
        pvhPanelCalc.checked=false;
        laminatCalc.checked=false;
        derevoNastilCalc.checked=false;
        sidingCalc.checked=false;
        profnastilCalc.checked=false;
    }
});

alumineCalc.addEventListener('click',function(){
    if(alumineCalc.checked == true){
        plastCalc.checked=false;
        franceCalc.checked=false;
        vynosnoeCalc.checked=false;
        derevoCalc.checked=false;
        coldCalc.checked=false;
        vneshOtdelkaCalc.checked=false;
        vynosOsteklCalc.checked=false;
        kryshaBalkonCalc.checked=false;
        vnutrOtdCalc.checked=false;
        vagonkaCalc.checked=false;
        plastVagonkaCalc.checked=false;
        pvhPanelCalc.checked=false;
        laminatCalc.checked=false;
        derevoNastilCalc.checked=false;
        sidingCalc.checked=false;
        profnastilCalc.checked=false;
    }
});

plastCalc.addEventListener('click',function(){
    if(plastCalc.checked == true){
        alumineCalc.checked=false;
        franceCalc.checked=false;
        vynosnoeCalc.checked=false;
        derevoCalc.checked=false;
        coldCalc.checked=false;
        vneshOtdelkaCalc.checked=false;
        vynosOsteklCalc.checked=false;
        kryshaBalkonCalc.checked=false;
        vnutrOtdCalc.checked=false;
        vagonkaCalc.checked=false;
        plastVagonkaCalc.checked=false;
        pvhPanelCalc.checked=false;
        laminatCalc.checked=false;
        derevoNastilCalc.checked=false;
        sidingCalc.checked=false;
        profnastilCalc.checked=false;
    }
});

franceCalc.addEventListener('click',function(){
    if(franceCalc.checked == true){
        plastCalc.checked=false;
        alumineCalc.checked=false;
        vynosnoeCalc.checked=false;
        derevoCalc.checked=false;
        coldCalc.checked=false;
        vneshOtdelkaCalc.checked=false;
        vynosOsteklCalc.checked=false;
        kryshaBalkonCalc.checked=false;
        vnutrOtdCalc.checked=false;
        vagonkaCalc.checked=false;
        plastVagonkaCalc.checked=false;
        pvhPanelCalc.checked=false;
        laminatCalc.checked=false;
        derevoNastilCalc.checked=false;
        sidingCalc.checked=false;
        profnastilCalc.checked=false;
    }
});

vynosnoeCalc.addEventListener('click',function(){
    if(vynosnoeCalc.checked == true){
        franceCalc.checked=false;
        plastCalc.checked=false;
        alumineCalc.checked=false;
        derevoCalc.checked=false;
    }
});

coldCalc.addEventListener('click',function(y){
        hotCalc.checked=false;
});

hotCalc.addEventListener('click',function(y){
        coldCalc.checked=false;
});

vnutrOtdCalc.addEventListener('click',function(){
    vneshOtdelkaCalc.checked=false;
    vynosOsteklCalc.checked=false;
    kryshaBalkonCalc.checked=false;
    sidingCalc.disabled = true;
    profnastilCalc.disabled = true;
    laminatCalc.disabled = false;
    derevoNastilCalc.disabled = false;
});
vneshOtdelkaCalc.addEventListener('click',function(){
    vnutrOtdCalc.checked=false;
    vynosOsteklCalc.checked=false;
    kryshaBalkonCalc.checked=false;
    laminatCalc.disabled = true;
    derevoNastilCalc.disabled = true;
    sidingCalc.disabled = false;
    profnastilCalc.disabled = false;
});
vynosOsteklCalc.addEventListener('click',function(){
    vneshOtdelkaCalc.checked=false;
    vneshOtdelkaCalc.checked=false;
    kryshaBalkonCalc.checked=false;
    laminatCalc.disabled = false;
    derevoNastilCalc.disabled = false;
    sidingCalc.disabled = false;
    profnastilCalc.disabled = false;
});
kryshaBalkonCalc.addEventListener('click',function(){
    vneshOtdelkaCalc.checked=false;
    vynosOsteklCalc.checked=false;
    vynosOsteklCalc.checked=false;
    laminatCalc.disabled = true;
    derevoNastilCalc.disabled = true;
    sidingCalc.disabled = false;
    profnastilCalc.disabled = false;
});


btncold.addEventListener('click',function(){
    calculator.style.display = 'block';
});

btnhot.addEventListener('click',function(){
    calculator.style.display = 'block';
});

closebtn.addEventListener('click',function(){
    calculator.style.display = 'none';
});

