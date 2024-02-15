var n = document.getElementById('name');
n.addEventListener('keyup', ()=>{
    var nn = n.value;
    document.getElementById('name2').innerHTML=nn;

});

var d = document.getElementById('dic');
d.addEventListener('keyup', ()=>{
    var dd = d.value;
    document.getElementById('dic2').innerHTML=dd;

});

var i = document.getElementById('idn');
i.addEventListener('keyup', ()=>{
    var ii = i.value;
    document.getElementById('idn2').innerHTML=ii;

});
var b = document.getElementById('dob');
b.addEventListener('keyup', ()=>{
    var bb = b.value;
    document.getElementById('dob2').innerHTML=bb;

});

var p = document.getElementById('ph');
p.addEventListener('keyup', ()=>{
    var pp = p.value;
    document.getElementById('ph2').innerHTML=pp;

});

var e = document.getElementById('em');
e.addEventListener('keyup', ()=>{
    var ee = e.value;
    document.getElementById('em2').innerHTML=ee;

});

var uplodBtn=document.getElementById('uplodbtn');
var imageChos=document.getElementById('imgchos');

uplodBtn.onchange =()=>{
    var reader= new FileReader();
    reader.readAsDataURL(uplodBtn.files[0]);
    reader.onload =() =>{
        imageChos.setAttribute('src', reader.result);
    }
};


var uplodBto=document.getElementById('uplodbto');
var imageChosen=document.getElementById('imgchosen');

uplodBto.onchange =()=>{
    var reader= new FileReader();
    reader.readAsDataURL(uplodBto.files[0]);
    reader.onload =() =>{
        imageChosen.setAttribute('src', reader.result);
    }
};