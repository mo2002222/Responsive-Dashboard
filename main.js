let moodlight = document.getElementById("light");
let moodDark = document.getElementById("dark");
let aside =  document.querySelector('.aside');
let setting = document.querySelector('.setting');
let media= window.matchMedia('max-width','992px');
let exit = document.createElement('i');
let container = document.querySelector('.container'); 
// let media2 = window.matchMedia('max-width','600px');
moodlight.onclick = function(){
    if(!moodlight.classList.contains("active")){
        moodlight.classList.add("active");
        moodDark.classList.remove('active');
        // moodlight.style.color="white";
        moodDark.style.color="black";
        document.body.classList.toggle("dark-theme");
        document.getElementById("setting").style.color = "black";
    }
};
moodDark.onclick= ()=>{
    if(!moodDark.classList.contains("active")){
        moodDark.classList.add("active");
        moodlight.classList.remove("active");
        moodlight.style.color="white";
        document.body.classList.toggle("dark-theme");
        document.getElementById("setting").style.color = "white";
    }   
    
    
};

///////


let moodlight2 = document.getElementById("light-2");
let moodDark2 = document.getElementById("dark-2");

moodlight2.onclick = function(){
    if(!moodlight2.classList.contains("active")){
        moodlight2.classList.add("active");
        moodDark2.classList.remove('active');
        // moodlight.style.color="white";
        moodDark2.style.color="black";
        document.body.classList.toggle("dark-theme");
        document.getElementById("setting").style.color = "black";
        // if (media) {
        //     aside.style.background = 'red'
        // }
    }
    

};
moodDark2.onclick= ()=>{
    if(!moodDark2.classList.contains("active")){
        moodDark2.classList.add("active");
        moodlight2.classList.remove("active");
        moodlight2.style.color="white";
        document.body.classList.toggle("dark-theme");
        document.getElementById("setting").style.color = "white";
        
    }
    // if (media) {
    //     aside.style.background = 'green'
    //     console.log('dark');
    // }
};


//////////

setting.onclick= ()=>{
        aside.style.position='fixed';
        aside.style.zIndex ='1000';
        aside.style.left='0';
        aside.style.height='100vh';
        aside.style.width='50%';
        aside.style.padding='1rem';
        aside.style.display='block';
        aside.style.top='0';
        aside.style.background = '#fff'
        exit.className="fa-solid fa-xmark";
        aside.appendChild(exit);
        ////
        exit.style.position='absolute';
    exit.style.top='1rem';
    exit.style.right='.3rem';
    exit.style.fontSize='1.3rem';
    exit.style.cursor='pointer';
    exit.onclick=()=>{
        aside.style.display = 'none';
        document.body.removeChild(overlay);
    }
    /////
    let overlay = document.createElement('span');
    overlay.style.position = 'absolute';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.zIndex = '999';
    overlay.style.top = '0';
    overlay.style.background = '#57515182';
    document.body.appendChild(overlay);
    overlay.addEventListener("click",(e)=>{
        aside.style.display = "none";
        document.body.removeChild(overlay);
    }) 
    if (media) {
        if (moodDark2.classList.contains("active")) {
            aside.style.background = 'rgb(50 50 50)'
        }else{
            aside.style.background = '#fff'
        }
    }
};
