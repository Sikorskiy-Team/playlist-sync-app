import React from "react"
import Background from "../../images/Background"

import { StartSection }from "./startnow.styles.js"



const StartNow = () => {
    return(
        <div>
            <StartSection>
                    <div className = "imgBackground">
                        <div className = "text1">
                                <p>TRANSFER YOUR PLAYLISTS AND FAVORITES</p>
                        </div>
                        <div className = "text 2">
                                <p>top wasting your time transferring music data between <br> different streaming platforms, let CubeMusic do the job!</p>
                        </div>
                        <div className = "buttonStart">
                                <a href = "#">Start Now</a>
                        </div>
                    </div>
            </StartSection>
        </div>
    )
}