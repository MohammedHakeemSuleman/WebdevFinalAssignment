import { useEffect,useState } from "react";
document.addEventListener('DOMContentLoaded',inithemetoggle);

export function inithemetoggle(){
    const themetoggle = document.querySelector('.Toggle');
    const theme = localStorage.getItem('theme');

    if(theme === 'dark-mode')
    {
        document.body.classList.add('dark-mode');
    }
    if(themetoggle)
    {
        themetoggle.addEventListener('click', () =>{
            document.body.classList.toggle('dark-mode');

            if(document.body.classList.contains('dark-mode')){
                localStorage.setItem('theme', 'dark-mode');
            }
            else{
                localStorage.removeItem('theme');
            }
        });
    }
}


//if click change class of body to dark mode 
//then if they switch again go back to light mode

//but if we refresh page then ovs we cant save user 
//prefrence so 

///


///

export function inimenu(){
const menu = document.querySelector('.Men');
const A = document.getElementById("bars");
if(menu)
{
    const ismenuvisible = localStorage.getItem('Men') == 'true';
    A.style.display = ismenuvisible ? 'flex' : 'none';

    menu.addEventListener('click',() =>
    {
        document.body.classList.toggle('Men');
        if(A.style.display =='none' || A.style.display =='')
            {
            A.style.display = 'flex';
            localStorage.setItem('Men', 'true');
            }
            else{
                A.style.display = 'none';
                localStorage.removeItem('Men','false');
            }
    });
}

};









