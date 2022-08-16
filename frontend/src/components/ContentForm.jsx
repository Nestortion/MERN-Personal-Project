import React from 'react'
import { StyledContent } from './styles/StyledContent'
import { FaUser } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function ContentForm() {
    return (
        <StyledContent>
            <form>
                <div class="header">
                    <h1>Create a person</h1>

                    <FaUser />
                </div>
                <div class="input-text">
                    <h3>Person Name</h3>
                    <div className="input-placeholder">
                        <input type="text"></input>
                    </div>
                </div>
                <div class="input-text">
                    <h3>Person Age</h3>
                    <div className="input-placeholder">
                        <input type="text"></input>
                    </div>
                </div>
                <div class="input-text">
                    <h3>Person Nationality</h3>
                    <div className="input-placeholder">
                        <input type="text"></input>
                    </div>
                </div>
                <div class="input-text">
                    <h3>Person Contact</h3>
                    <div className="input-placeholder">
                        <input type="text"></input>
                    </div>
                </div>
                <div className="img-upload">
                    <button className="btn">Upload Image ID</button>
                    <div>
                        <img
                            src=""
                            onError={(event) =>
                                (event.target.style.display = 'none')
                            }
                        />
                        <FaUser fill="#05445e" />
                    </div>
                </div>
                <button className="btn btn-large">Submit</button>
            </form>
        </StyledContent>
    )
}

export default ContentForm
