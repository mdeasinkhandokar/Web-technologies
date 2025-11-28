const body=document.getElementById('body');
const button= document.querySelectorAll('li');


button.forEach(function(value){
    value.addEventListener('click',function(){
        let className=this.classList[0];
        let color='';
        if(className ==='red'){
            color='#c0392b';
        }
        if(className ==='green'){
            color='#27ae60';
        }

        if(className==='blue'){
            color ='#2980b9';
        }
        if(className==='pink'){
            color='#fd79a8';
        }
        if(className==='purple'){
            color='#6c5ce7';
        }

        body.style.backgroundColor=color;
    })
})