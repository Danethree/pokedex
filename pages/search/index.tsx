
import React,{useState} from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import SearchContent from '../../Components/SearchContent'

export default function search() {
    const [find,setFind] = useState<undefined>();
    const [text,setText] = useState<string>();
    
    return(
  
    <>
    <nav>
        <Header/>
    </nav>

   <main className = "m-10">
        <div>
            <SearchContent/>
        </div>
   </main>

    <footer>
        <Footer/>
    </footer>
    </>
)}