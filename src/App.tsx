
import './App.css'
import Navbar from './components/custom-components/navbar/Navbar'
import Top_Header from './components/custom-components/navbar/top-header/Top_Header'

const App = () => {
  return (
    <div className='relative'>
      <div className="h-screen absolute left-2 top-0 bottom-0 flex items-center w-80">
        <Navbar />
      </div>
      <div className="h-screen absolute right-2 top-0 bottom-0  w-80">
      <Top_Header/>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Other content */}
      </div>
    </div>
  )
}

export default App

