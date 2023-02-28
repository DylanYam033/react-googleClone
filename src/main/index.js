import React from 'react';
import './main.css';

function Main(){
    return(
        <main className='main-container'>
            <section className='main-logo'>
                <img src='https://i.ibb.co/YLzBZL1/pngwing-com.png' alt=''></img>
            </section>

            <section className='main-input'>
                <div className='main-input-container'>
                <span class="material-symbols-outlined">search</span>
                    <input></input>
                    <span class="material-symbols-outlined">mic</span>
                </div>
            </section>

            <section className='main-buttons'>
                <div>
                    <button> Buscar con Google</button>
                </div>
                <div>
                    <button><a target={'_blank'} href='https://dylanyam033.github.io/blogDylan/'> Me siento con suerte</a></button>
                </div>
            </section>
        </main>
    );
};

export {Main};