const getPackageBtn = document.getElementById('getPackageBtn');
const endBtn = document.getElementById('endBtn');
const getAnotherPackageBtn = document.getElementById('getAnotherPackageBtn');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const inputs = document.querySelector('.inputs');
const inputs__phone = document.getElementById('phone');
const inputs__code = document.getElementById('code');
const info__error = document.querySelector('.info--error');

getPackageBtn.addEventListener('click', start);
getAnotherPackageBtn.addEventListener('click', getAnotherPackage);
endBtn.addEventListener('click', goToStart);

let step = 0;

function start(){
    if(step==0){
        inputs.classList.remove('hidden');
        step++;
    }
    else if(step==1){
        if(checkPackageValues()){
            hideError();
            getPackage();
        }
        else{
            showError();
        }
    }
    
}

function goToStart(){
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
    inputs__phone.value = '';
    inputs__code.value = '';
    inputs.classList.add('hidden');
    step = 0;
}

function getAnotherPackage(){
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
    inputs__phone.value = '';
    inputs__code.value = '';
    step = 1;
}

function checkPackageValues(){
    return /^\d+$/.test(inputs__phone.value) && inputs__phone.value.length === 9 && /^\d+$/.test(inputs__code.value) && inputs__code.value.length === 4;
}

function getPackage(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function showError(){
    info__error.textContent = "Ups! Z naszych wyliczeń wychodzi, że podałeś błędne dane. Spróbuj ponownie! (Numer telefonu składa się z 9 cyfr, a kod odbioru z 4 cyfr)";
}
function hideError(){
    info__error.textContent = "";
}