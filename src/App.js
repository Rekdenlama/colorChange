import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Input from './Input';
import Footer from './Footer';



function App() {
  const [input,setInput]=useState('');

 
  return (
    <div className='App'>
      <Header />
      <Content
        input={input}/>
      <Input 
        input={input}
        setInput={setInput}
      />
      <Footer />
    </div>
  );
}

export default App;
