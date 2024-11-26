import "./Calculadora.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { React,useState,useEffect } from "react";

export default function Calculadora() {

  const[num,setNum] = useState(0)
  const[numvelho,setNumvelho] = useState(0)
  const [operator, setOperator] = useState();

  useEffect((valor) => {
    const initializeAsync = async (valor) => {
      setNum(valor);
      setNumvelho(valor);
      setOperator();
    };
    initializeAsync(0);
  }, []);


  function clearWindow(e)
  {
    setNum(0);
  }

  function InputNum(e){
    var value = e.target.value;
    if(num == "0")
    {
      setNum(value);
    }
    else{
      setNum(num + value);
    }
    setNumvelho(num + value);
  }

  function calcular()
  {
    if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

    return (
        <div>
          <Box m={5} />
          <Container maxWidth="xs" className="wrapper">
            <div>
              <Box m={12} />
              <h1 className="result">{num}</h1>
              <button className="cinza_claro" onClick={clearWindow}>AC</button>
              <button className="cinza_claro">+/-</button>
              <button className="cinza_claro">%</button>
              <button className="laranja">÷</button>
              <button value={7} className="cinza" onClick={InputNum}>7</button>
              <button value={8} className="cinza" onClick={InputNum}>8</button>
              <button value={9} className="cinza" onClick={InputNum}>9</button>
              <button className="laranja">×</button>
              <button value={4} className="cinza" onClick={InputNum}>4</button>
              <button value={5} className="cinza" onClick={InputNum}>5</button>
              <button value={6} className="cinza" onClick={InputNum}>6</button>
              <button className="laranja">-</button>
              <button value={1} className="cinza" onClick={InputNum}>1</button>
              <button value={2} className="cinza" onClick={InputNum}>2</button>
              <button value={3} className="cinza" onClick={InputNum}>3</button>
              <button className="laranja">+</button>
              <button value={0} className="zero_buttom">0</button>
              <button className="cinza">,</button>
              <button className="laranja">=</button>
            </div>
          </Container>
        </div>
      );
}