//  JSX ELEMENT TASK1
// import React from 'react';
// import  ReactDOM from 'react-dom';

// ReactDOM.render(
//   <>
//   <h1>Vaishnavi Deshpande shows favourite Netflix Services : </h1>
//   <p>This is all top netfix services </p>
//   <ol>
//     <li>Drak</li>
//     <li>Extra Curricular</li>
//     <li>My Holo Love</li>
//     <li>My first-2 Love</li>
//     <li>Mr Robot</li>

//   </ol>
//   </>,
//   document.getElementById("root"));


//JSX EXPRESSION :
// import React from 'react';
// import ReactDOM from 'react-dom';

// const flname="Vaishnavi Deshpande ";
// ReactDOM.render(
// <>
// <h1>My name is {flname}</h1>
// <p>My Lucky Number is {9+9} </p>
// </>,
// document.getElementById("root")
// );

//Tempalte Litrals
// import React from 'react';
// import ReactDOM from 'react-dom';

// const fname = "vaishnavi";
// const lname ="Deshpande" ;

// ReactDOM.render(
//   <>
//  <h1>{`my first name is ${fname} and my last name is ${lname}`}</h1>
//  <p>This is Tempalte Literals Example</p>
//   </>,
//   document.getElementById("root")
// );

//JSX Element task2 
// import React from  'react';
// import ReactDOM from 'react-dom';

// const name = "Vaishnavi Deshpande";
// const current_date = new Date().toLocaleDateString(); //to get current date
// const current_time = new Date().toLocaleTimeString(); //to get current time
//  ReactDOM.render(
//   <>
//     <h1>{`My Name is ${name}`}</h1>
//     <p>{`Today Date is ${current_date}`}</p>
//     <p>{`current time is ${current_time}`}</p>
    
//   </>,
//   document.getElementById("root")
//  );


//JSX Attribute Example :
// import React from 'react';
// import ReactDom from 'react-dom';

// const name = "Vaishnavi Deshpande";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/210/300";
// const img3= "https://picsum.photos/220/300";
// const img4= "https://picsum.photos/230/300";

// ReactDom.render(
//   <>
//     <h1 contentEditable="false">Hello , my name is {name}</h1>
//     <img src = {img1} alt ='random images' />
//     <img src = {img2} alt ='random images' />
//     <img src = {img3} alt ='random images' />
//     <a href='https://picsum.photos/' target='_loream' ><img src = {img4} alt ='random images' /></a>

//   </>,document.getElementById("root")
// );


//CSS Styling and importing css file 
// import React from 'react';
// import  ReactDOM from 'react-dom';
// import './index.css';
// ReactDOM .render(
// <>

//   <h1 className='heading'> This is CSS Example in react </h1>
//   <div className='div-1'>
//   <p className='paregraph'>This is an example of the importing external css file in React.....
//   Note : In react className is used to set the Styling on JSX element .. it can not used class because react already contain class name so you can use class then it gives error  
//   </p>
//   </div>
// </>,document.getElementById("root")
// );

//Inline Css Styling Example 
// import React from 'react';
// import ReactDom from 'react-dom';

// const heading={
// color: 'red',
// fontSize :'25px',
// textTransform:'capitalize',
// textAlign:'center'
// }

// ReactDom.render(
//   <>
//     <h1 style={heading}>Welcome</h1>
//   </>,
//   document.getElementById("root")
// );

//Challange 3 : Greeting Messages
// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";


// let current_date = new Date();
// current_date = current_date.getHours();
// let greeting =''
// const cssStyle ={};
// let greeting_text='';
// let greeting_msg='';
// const greeting_text_css={};
// const greeting_msg_css={};

// let backImg ={};
// if(current_date >=1 && current_date <12){
//   backImg.backgroundImage="url('https://wallpapercave.com/wp/CdBbiZ7.jpg')";
//   backImg.width='1355px';
//   backImg.height='622px';
//   backImg.marginTop ='-10px';
// }
//  else if(current_date >=12 && current_date < 19){
//  backImg.backgroundImage="url('https://wallpaperbat.com/img/406649-sun-desktop-wallpaper-top-free-sun-desktop-background.jpg')";
//  backImg.width='1350px';
//  backImg.height='615px';
//  backImg.marginTop ='-10px';
 
// }
// else{
//   backImg.backgroundImage="url('https://images2.alphacoders.com/100/100452.jpg')";
//   backImg.width='1355px';
//   backImg.height='622px';
//   backImg.marginTop ='-10px';
// }
// if(current_date >=1 && current_date<12){
//   greeting="Good Morning";
//   cssStyle.color="orange";
//   greeting_msg="Just a morning reminder that you make the world a better place!";
//   greeting_msg_css.color='green';
//   greeting_msg_css.fontFamily='Verdana';
//   greeting_msg_css.fontSize='20px';
//   greeting_msg_css.padding='5px';
//   greeting_msg_css.marginTop='20px'
//   greeting_text="For each new morning let there be flow of love.Let there be light of happiness in every direction.";
//   greeting_text_css.color="purple";
//   greeting_text_css.fontSize='20px';
//   greeting_text_css.fontWeight='100px' ;
//   greeting_text_css.marginTop='20px';
//   greeting_text_css.padding='5px';
//   greeting_text_css.fontFamily='Leelawadee';

// }else if(current_date >=12 && current_date < 19){
//   greeting="Good Afternoon";
//   cssStyle.color="brown";
//   greeting_msg="Good afternoon, enjoy this amazing afternoon. ...";
//   greeting_msg_css.color='yellow';
//   greeting_msg_css.fontFamily='Verdana';
//   greeting_msg_css.fontSize='20px';
//   greeting_msg_css.padding='5px';
//   greeting_msg_css.marginTop='20px';
//   greeting_text="Just as no one can possess an afternoon of rain beating against the window, or serenity of a sleeping child, or the magical moment when the waves break on the rocks.";
//   greeting_text_css.color="blue";
//   greeting_text_css.fontSize='19px';
//   greeting_text_css.fontWeight='100px' ;
//   greeting_text_css.fontFamily='Leelawadee';
// }
// else{
//   greeting ="Good Night";
//   cssStyle.color="yellow";
//   greeting_msg="I hope that your rest is awesome and deep.";
//   greeting_msg_css.color='cyan';
//   greeting_msg_css.fontFamily='Microsoft PhagsPa';
//   greeting_msg_css.fontSize='20px';
//   greeting_msg_css.padding='5px';
//   greeting_msg_css.marginTop='20px';
//   greeting_text="It's time to rest, you sleepy-head. Let's tuck yourself into your bed. May the moon and stars shine in your dreams and make them as sweet as you. Good night!!!";
//   greeting_text_css.color="pink";
//   greeting_text_css.fontSize='20px';
//   greeting_text_css.fontWeight='100px' ;
//   greeting_text_css.fontFamily='Leelawadee';

// }


// ReactDOM .render(
//   <>
//   <div style={backImg}>
  
//     <h1 className='heading'>Hello Sir ,<span style={cssStyle}> {greeting} </span><br></br>
//     <span style={greeting_msg_css}>{greeting_msg}</span>
//     <br></br> <span style={greeting_text_css}>{greeting_text}</span>
     
//     </h1>
//      </div>


//   </>,
//   document.getElementById("root")
// );

//React Component
import React from 'react';
import  ReactDOM from 'react-dom';
import './index.css';

import Greetingweb from './Greetingweb';
ReactDOM.render(
  <>
  <Greetingweb/>
  </>,document.getElementById("root")
);
ReactDOM.render(
  <>
    <h1>Hello World</h1>
  </>,document.getElementById("root1")
);