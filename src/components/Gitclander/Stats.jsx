import React from 'react';
import "./git.css";

const Stats =() =>{
    return(
    <div id='stats'>

    <div id='stats__small'>
        <div className='streak lang_stats'>
            <a href="https://github.com/AtulSahu409" target="_blank">
                <img className='streak_img statsimg' src="https://github-readme-streak-stats.herokuapp.com?user=AtulSahu409&theme=radical&border_radius=4.6&theme=gruvbox_duo" alt="" />
            </a>
        </div>





        
        <div className='lang_stats'>


            <a href="https://github.com/AtulSahu409" target="_blank">
                <img className='lang_st_img statsimg' src="https://github-readme-stats.vercel.app/api?username=AtulSahu409&show_icons=true&theme=gruvbox_duo" alt="" />
            </a>
        </div>
        <div className='lang_stats'>
           
            <a href="https://github.com/AtulSahu409" target="_blank">
                <img className='lang_st_img statsimg' src="https://github-readme-stats.vercel.app/api/top-langs/?username=AtulSahu409&
                langs_count=8" alt="" />
            </a>

        </div>
        
    </div>



        </div>
    )
}
export default Stats