import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ContentContainer from './components/ContentContainer'
import { GlobalStyle } from './components/styles/GlobalStyle'

function App() {
    return (
        <>
            <GlobalStyle />
            <Header></Header>
            <ContentContainer></ContentContainer>
            <Footer></Footer>
        </>
    )
}

export default App
