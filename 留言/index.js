// 发言功能
let arr=[]
// 修改时间
function gettime(a)
{
    let currentDate = new Date(a);
    let year = currentDate.getFullYear();
    let month = (currentDate.getMonth() + 1);
    let day = currentDate.getDate();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();
    hour=hour>9?hour:'0'+hour
    minute=minute>9?minute:'0'+minute
    second = second>9?second:'0'+second
    return `${year}年${month}月${day}日${hour}:${minute}:${second}`
}
// 更新数据
function setsj()
{ 
    
    arr=JSON.stringify(arr)
    localStorage.setItem('sju',arr)
    
}
// 读取数据
function getsj(){
    if(localStorage.getItem('sju'))
    {
        arr=JSON.parse(localStorage.getItem('sju')) 
    }
}
// 添加数据
function addsj(name,pr,data){
   
    arr.unshift(
        {
            name,
            pr,
            data
        }
    )

}
// 遍历数据
function blsj()
{
    const xr=document.querySelector('.liuyb')
    let str=''
    for(let i=0;i<arr.length;i++)
    {
        str+=`    <div class="pk">
        <div class="tx" style="background:url('./头像.webp') no-repeat;
           background-size: 100% 100%;
        
        "></div>
         <div class="prnr">
                 <h3>${arr[i].name}</h3>
                 <div>
                 ${arr[i].pr}
                 </div>
                 <span class="sc${i}" style='
                 position: absolute;
                 bottom: 0;
                 right: 0;
                 background: #4c9dba;
                 padding: 10px;
                 font-size: 5px; '>删除</span>
                 <span class="fssj">${gettime(arr[i].data)}</span>
               
         </div>
    
    
     </div>`
    //  删除事件
        
    }
    
    xr.innerHTML=str

    
   
}
// 添加删除事件
function remove(){
    for(let i=0;i<arr.length;i++)
    {
        document.querySelector(`.sc${i}`).addEventListener('click',function(){
        
            arr.splice(i,1)
            blsj()
            remove()
            setsj()
            location.reload()
            
        })

    
    }
}

// 读取
getsj()
//遍历
blsj()
// 删除
remove()
const xieru=document.querySelector('.tjsj')
const xm=document.querySelector('.xm')
const dh=document.querySelector('.dh')
const lyan=document.querySelector('.lyan')
xieru.addEventListener('click',function(e) {
    let name=''
    let ly=''
    let dhl=''
   if(!(lyan.value==''||xm.value==''))
   {
    ly=lyan.value
    name=xm.value
    dhl=dh.value
    // 读取数据
    getsj()
    // 添加数据
    addsj(name+dhl,ly,Date.now())
 
    // 遍历数据
    blsj()

    // 存储数据
    setsj()
    // 清空输入框
     
    location.reload()
   }
   else{
 
    alert('姓名或者留言未填写')
   }
 
    
})

// 删除有BUG 刷新一次才能删除一次