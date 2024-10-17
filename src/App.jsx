
import Navbar from "./compenants/Navbar.jsx"
import styled, { ThemeProvider }  from "styled-components";
import {BrowserRouter} from "react-router-dom"
import {darkTheme} from "./utils/Themes.jsx"
import Hero  from "./compenants/sections/Hero.jsx";
import Skills from "./compenants/sections/Skills.jsx";
import Experience from "./compenants/sections/Experience.jsx";
import Education from "./compenants/sections/Education.jsx";
import StarCanvas from "./compenants/canvas/Stars.jsx";
import Projects from "./compenants/sections/Project.jsx";
import Contact  from "./compenants/sections/Contact.jsx";
import Footer from "./compenants/sections/Footer.jsx";
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;



function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
    
        <Body>
          <StarCanvas/>
        
        
            
              <Hero />
           
                <Skills />
                <Projects />
            <Education/>
          <Experience />

          <Contact />
         <Footer />

        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;