import React from "react";

function Greetingweb(){
    let current_date = new Date(2023,11,30,15);
    current_date = current_date.getHours();
    let greeting =''
    const cssStyle ={};
    let greeting_text='';
    let greeting_msg='';
    let greeting_morn_img='';
    let greeting_morn_img1='';
    let greeting_morn_img2='';
    let greeting_morn_img3='';
    let gm_last_msg='';
    let ga_last_msg='';
    const greeting_morn__img_css={};
    const greeting_morn__img_css1={};
    const greeting_morn__img_css2={};
    const greeting_morn__img_css3={};

    const greeting_text_css={};
    const greeting_msg_css={};
   
    let backImg ={};
if(current_date >=1 && current_date <12){
  backImg.backgroundImage="url('https://wallpapers.com/images/featured/sunrise-6tlr4cfeg3q0al8n.jpg')";
  backImg.width='1366px';
  backImg.height='641.9px';
  backImg.marginTop ='-19px';
   backImg.marginLeft='-8px';

}
else if(current_date >=12 && current_date < 19){
backImg.backgroundImage="url('https://wallpaperbat.com/img/406649-sun-desktop-wallpaper-top-free-sun-desktop-background.jpg')";
backImg.width='1366px';
backImg.height='641.9px';
backImg.marginTop ='-19px';
 backImg.marginLeft='-8px';

}

else{
    backImg.backgroundImage="url('https://images2.alphacoders.com/100/100452.jpg')";
    backImg.width='1366px';
    backImg.height='641.9px';
    backImg.marginTop ='-19px';
     backImg.marginLeft='-8px';
  }

  if(current_date >=1 && current_date<12){
    greeting="Good Morning";
    cssStyle.color="purple";
    cssStyle.marginTop='-10px';
    greeting_msg="Just a morning reminder that you make the world a better place!";
    greeting_msg_css.color='black';
    greeting_msg_css.fontFamily='Verdana';
    greeting_msg_css.fontSize='25px';
    greeting_msg_css.padding='1px';
    greeting_msg_css.marginTop='20px';

    greeting_text="For each new morning let there be flow of love.Let there be light of happiness in every direction.";
    greeting_text_css.color="green";
    greeting_text_css.fontSize='20px';
    greeting_text_css.fontWeight='100px' ;
    greeting_text_css.marginTop='20px';
    greeting_text_css.padding='1px';
    greeting_text_css.fontFamily='Leelawadee';


    greeting_morn_img=<img src="https://i.pinimg.com/originals/6c/cd/da/6ccdda441b6c12a4efb75f8c2036c857.jpg" width={240} height={240}/>
    greeting_morn_img1=<img src="https://i.pinimg.com/736x/d8/40/53/d8405390b25ebc0a87626ef5940a20c0.jpg" width={240} height={240}/>
    greeting_morn_img2=<img src="https://i.pinimg.com/originals/81/dc/3f/81dc3f9652894aaf68441f3194414285.jpg" width={240} height={240}/>
    greeting_morn_img3=<img src="https://www.argucom.in/wp-content/uploads/2022/09/Good-Morning-Messages-In-Marathi.webp" width={240} height={240}/>
    greeting_morn__img_css.marginLeft='-90px';
    greeting_morn__img_css1.marginLeft='5px';
    greeting_morn__img_css2.marginLeft='10px';
    greeting_morn__img_css3.marginLeft='15px';
    
    gm_last_msg=<span className="gm_marquee">Rise and shine! Shine and rise! Let Mr. Sunshine in your eyes!</span>;
  
  }else if(current_date >=12 && current_date < 19){
    greeting="Good Afternoon";
    cssStyle.color="brown";
    greeting_msg="Good afternoon, enjoy this amazing afternoon. ...";
    greeting_msg_css.color='yellow';
    greeting_msg_css.fontFamily='Verdana';
    greeting_msg_css.fontSize='25px';
    greeting_msg_css.padding='5px';
    greeting_msg_css.marginTop='20px';
    greeting_text="Just as no one can possess an afternoon of rain beating against the window, or serenity of a sleeping child, or the magical moment when the waves break on the rocks.";
    greeting_text_css.color="pink";
    greeting_text_css.fontSize='19px';
    greeting_text_css.fontWeight='100px' ;
    greeting_text_css.fontFamily='Leelawadee';
    greeting_morn_img=<img src="https://www.unigreet.com/wp-content/uploads/2019/10/Afternoon-love-Marathi-1024x968.jpg" width={240} height={240}/>
    greeting_morn_img1=<img src="https://www.goodafternoonimages.com/images/quotes/english/general/good-afternoon-positive-vibes-quotes-52650-302031.jpg" width={240} height={240}/>
    greeting_morn_img2=<img src="https://www.goodafternoonimages.com/images/quotes/english/general/happy-good-afternoon-messge-52650-315759.jpg" width={240} height={240}/>
    greeting_morn_img3=<img src="https://www.majhimarathi.com/wp-content/uploads/2022/02/Good-Afternoon-SMS-Marathi.jpg" width={240} height={240}/>
    greeting_morn__img_css.marginLeft='-90px';
    greeting_morn__img_css1.marginLeft='5px';
    greeting_morn__img_css2.marginLeft='10px';
    greeting_morn__img_css3.marginLeft='15px';
    ga_last_msg=<span className="ga_marquee">I wish you a peaceful and productive afternoon</span>;
  
}
  else{
    greeting ="Good Night";
    cssStyle.color="yellow";
    greeting_msg="I hope that your rest is awesome and deep.";
    greeting_msg_css.color='cyan';
    greeting_msg_css.fontFamily='Microsoft PhagsPa';
    greeting_msg_css.fontSize='25px';
    greeting_msg_css.padding='5px';
    greeting_msg_css.marginTop='20px';
    greeting_text="It's time to rest, you sleepy-head. Let's tuck yourself into your bed. May the moon and stars shine in your dreams and make them as sweet as you. Good night!!!";
    greeting_text_css.color="pink";
    greeting_text_css.fontSize='20px';
    greeting_text_css.fontWeight='100px' ;
    greeting_text_css.fontFamily='Leelawadee';
    greeting_morn_img=<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWsnzUY1M3kYHRg0Ora69H_S5HV-yScj4CjA&usqp=CAU" width={240} height={240}/>
    greeting_morn_img1=<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvVSAnGONoWNnruSQ5WQ2CeWwbv7uZy8B7A&usqp=CAU" width={240} height={240}/>
    greeting_morn_img2=<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlxu6nhOLKVYb3t318Xs7XKqkmdIbd6agpMg&usqp=CAU" width={240} height={240}/>
    greeting_morn_img3=<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKetQQj-IR0FrsqMF3k209263uYvDIIiW_eg&usqp=CAU" width={240} height={240}/>
    greeting_morn__img_css.marginLeft='-90px';
    greeting_morn__img_css1.marginLeft='5px';
    greeting_morn__img_css2.marginLeft='10px';
    greeting_morn__img_css3.marginLeft='15px';
    ga_last_msg=<span className="gm_marquee">"The best bridge between despair and hope is a good night's sleep."</span>;

  }

   return(
    <>
  <div style={backImg}>
    
    <h1 className='heading'><span style={cssStyle}> {greeting} </span><br></br>

     <br></br>
    <span style={greeting_msg_css}>{greeting_msg}</span>


    <br></br> <span style={greeting_text_css}>{greeting_text}</span>
    <br></br><br></br>
    <span style={greeting_morn__img_css}>{ greeting_morn_img}</span>
    <span style={greeting_morn__img_css1}> { greeting_morn_img1} </span> 
    <span style={greeting_morn__img_css2}>{ greeting_morn_img2}</span>
    <span style={greeting_morn__img_css3}>{ greeting_morn_img3}</span><br></br>
    <span> {gm_last_msg} {ga_last_msg}</span>
    </h1>
     </div>
    </>
   )
    
}
 export default Greetingweb;