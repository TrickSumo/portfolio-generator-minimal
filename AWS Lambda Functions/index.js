const logo = document.getElementById("logo");


logo.style.backgroundColor="rgb(224, 198, 151)";
logo.style.display="inline-block";
logo.style.border="6px";
logo.style.borderRadius="9px";

const btn=document.getElementById('btn');
btn.style.float = "right";
btn.style.backgroundColor = "rgb(230, 31, 177)";

const photo=document.getElementById('photo');
photo.style.border = "5px solid #555";
photo.style.borderRadius = "50%";


const card=document.getElementById("card");
card.style = `background-color: rgb(150, 100, 100);

                    display:flex;
                    
                    margin:5px;
                    align-items=center;

                    border-radius:10px;`;


const card1=document.getElementById("card1");
card1.style = `background-color: rgb(224, 198, 151);
                
flex-basis: 33%;

                    float:left;
                    
                    margin:5px;

                    border-radius:10px;`;

const card2=document.querySelector(".card2");
card2.style = `background: rgb(151, 209, 224);
flex-basis: 33%;
       
        
        margin:5px;
        border-radius:10px;`;


const card3=document.getElementById("card3");
card3.style = `background: rgb(224, 151, 170);
flex-basis: 33%;
       
        width:32%;
        margin:5px;
        border-radius:10px;`;

const footer = document.getElementById("footer");


footer.style =  `background: rgb(134, 138, 138);
        
        height: 30px;`;



btn.addEventListener('click', enableDark);

var count =0;
function enableDark() {

        count++;

        body = document.getElementById("body");
        caption = document.getElementById("figcaption");

        if(count%2!=0) {

                
                body.style = "background-color:rgb(58, 7, 60);";
                photo.style.backgroundColor = " rgb(134, 138, 138)";
            
                
                caption.style = ` background-color: rgb(134, 138, 138);
                            color:black;
                            width:150px;
                            font-style: bold;`;

                btn.innerHTML = "Light Mode";
                btn.style.backgroundColor = "white";


        }

        else {


               
                body.style = "background-color:white;";
                photo.style.backgroundColor = " white";
            
                
                caption.style = ` background-color: white;
                            color:black;
                            width:150px;
                            font-style: bold;`;

                btn.innerHTML = "Dark Mode";
                btn.style.backgroundColor = "rgb(230, 31, 177)";


        }

        



        
        

console.log(count);
    


}