import React from 'react'
import  ReactDOM from 'react-dom/client'
// import  Counter from './counter'
// import  Picker from './picker'
// import  Onoff from './onoff'
import  Filter from './filter'




function App() {
return(
    <div>
        <Filter/>
    </div>
)

}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

