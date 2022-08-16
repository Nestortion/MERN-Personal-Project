import React from 'react'
import ContentForm from './ContentForm'
import PersonTable from './PersonTable'
import ContentMusic from './ContentMusic'
import { StyledContentContainer } from './styles/StyledContentContainer'

function ContentContainer() {
    return (
        <StyledContentContainer>
            <div class="first-row">
                <ContentForm />
                <PersonTable />
            </div>
            <ContentMusic />
        </StyledContentContainer>
    )
}

export default ContentContainer
