import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./Header";

function Footer(){
    return(
        <footer>
        2023 shin development
        </footer>
    )
}
function MainContent(){
    return(
        <div>
            <h1>Reason why I love React</h1>
            <ol>
                <li>get job</li>
                <li>really get job</li>
                <li>hopefully get job fast</li>
            </ol>
        </div>
    )
}
function Page(){
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = createRoot(document.getElementById("root"))
root.render(Page)

// ReactDOM.createRoot(document.getElementById("root")).render(<Page />)