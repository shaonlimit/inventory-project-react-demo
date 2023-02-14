import React from 'react';
import Invoice from './components/Invoice/Invoice';
import Vendor from './components/Vendor/Vendor';

function App() {
  return (
    <>
      <main>
        <Vendor />
        <Invoice />
      </main>
    </>
  );
}

export default App;
