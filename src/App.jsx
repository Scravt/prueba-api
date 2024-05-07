import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("hola");

  useEffect(() => {
    fetch('https://chat-ia-python-env.onrender.com/chat/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: "de que trata el texto" }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(responseData => {
        console.log('Estado:', responseData.status);
        console.log('Respuesta:', responseData.respuesta.answer);
        setData(responseData.respuesta.answer);  
      })
      .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
      });
  }, []);

  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
