alert('欢迎来到主页')

// 轮播图
!function(){
    const box=document.querySelector('.box')
    const ul=document.querySelector('.min')
    const li=document.querySelectorAll('.min li')
    const but_left=document.querySelector('.but_left')
    const but_right=document.querySelector('.but_right')
    const butul=document.querySelector('.but')
    const butli=document.querySelectorAll('.but li')
    //
    let index=0
    let time=2000
    let times=0
   
    // 复制一个节点 放到最后面去
    let useli=li[0].cloneNode(true)
    ul.appendChild(useli)
    // left 0,1,2,3,4,5,1 
    // right 0,4,3,2,1,
    // right 5,4,3,2,1,0,4
    function left(){
        index+=1
        ul.style.transition='left .5s linear'
        ul.style.left =`-${li[0].clientWidth*index}px`
        
        
        if(index==5){
            
           

           setTimeout(()=>{
            index=0
            ul.style.transition='none'
           
           ul.style.left =`-${li[0].clientWidth*index}px`
           },500)
           
        }
     
        document.querySelector('.ys').classList.remove('ys')
        butli[index-1].classList.add('ys')
     
    }
    function right(){

        if(index==0)
        {
            ul.style.transition='none'
           ul.style.left =`-${li[0].clientWidth*li.length}px`
           setTimeout(()=>{
            index=4
             ul.style.left =`-${li[0].clientWidth*index}px`
             
             ul.style.transition='left .5s linear'
           })
        }
        else{
            index--
            ul.style.left =`-${li[0].clientWidth*index}px`
        }
      
       
    }
   
    let js=setInterval(()=>{
        left()
    },1000)
    // 停止
 

    box.addEventListener('mouseenter',()=>{
       clearInterval(js)
       but_left.style.opacity='1'
       but_right.style.opacity='1'
       butul.style.opacity='1'
    })
    box.addEventListener('mouseleave',()=>{
        js=setInterval(()=>{
            left()
        },1000)
        console.log('打开');
        but_left.style.opacity='0'
        but_right.style.opacity='0'
        butul.style.opacity='0'

    })
    // 
    but_left.addEventListener('click',()=>{
        right()
    })
    but_right.addEventListener('click',()=>{
        left()
    })
    
    // 
    for(let i=0;i<butli.length;i++)
    {
        butli[i].addEventListener('mouseenter',function(){
            index=i
            left()
           
           
        })
    }

}()