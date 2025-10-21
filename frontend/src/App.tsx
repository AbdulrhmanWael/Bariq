import React from 'react';
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> 

      {/* HOME */}
      <main className="flex-grow pt-20 px-5">
        <h1 className="text-3xl text-center mt-10 text-pink-500">مرحباً بك في موقع BARIQ</h1>
        <p className="text-center mt-5">هنا سيكون محتوى الصفحة الرئيسي</p>
      </main>

      <Footer /> 
    </div>
  );
}


export default App;
