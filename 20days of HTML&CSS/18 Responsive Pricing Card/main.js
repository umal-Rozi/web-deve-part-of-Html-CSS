const checkbox=document.getElementById('checkbox');
const Professional=document.getElementById('Professional');
const basic=document.getElementById('basic');
const master=document.getElementById('master');

checkbox.addEventListener('click',()=>{
    basic.textContent=basic.textContent==='$199.99' ? '$19.99' : '$199.99';
    Professional.textContent=Professional.textContent=== '$249.99' ?  '$24.99':'$249.99';
    master.textContent=master.textContent=== '$399.99' ?  '$39.99':'$399.99';

})