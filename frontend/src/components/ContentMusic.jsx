import React from 'react'
import styled from 'styled-components'
import { FaStop, FaPlay, FaFastForward, FaFastBackward } from 'react-icons/fa'

const MusicDiv = styled.div`
    background: #189ab4;
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .title {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        font-size: 25px;
        width: 20%;
    }
    .play-buttons {
        display: flex;
        justify-content: space-evenly;
        width: 15%;
        font-size: 35px;
    }
`

function ContentMusic() {
    return (
        <MusicDiv>
            <div className="title">With a Smile - Eraseheads</div>
            <div className="play-buttons">
                <FaFastBackward />
                <FaPlay />
                <FaStop />
                <FaFastForward />
            </div>
        </MusicDiv>
    )
}

export default ContentMusic
