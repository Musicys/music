const fhdb=document.querySelector('.fh')
const fh=document.querySelector('.daoh')
fhdb.addEventListener('click', function(){
    window.scroll(0,0)
})
window.addEventListener('scroll', function(){
    if(this.scrollY>100)
    {
        fh.style.opacity='1';
        console.log('1');
    }
    else{
        fh.style.opacity='0'
    }
})
// 时间
const sjxs=document.querySelector('.time')

setInterval(()=>{
    let time=new Date()
    sjxs.innerText=time.toLocaleTimeString();
  
},1000)