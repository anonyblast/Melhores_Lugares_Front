import React from "react";
import "./Popup.css"


function Popup({props}){
    return(
        <div className="popup-surround">
            <div className="popup">
                <div className="titleCloseBtn">
                    <button onClick={() => props(false)}>X</button>
                </div>
                <div class="title">
                    <h1>Entre na nossa fila de espera</h1>
                </div>
                <div className="body">    
                    <div>
                        <label for="nome">Nome</label>
                    </div> 
                    <div className="margin-bottom">   
                        <input type="text" name="nome" placeholder="Nome"></input>
                    </div>
                    <div>
                        <label for="email">Email</label>
                    </div>
                    <div className="margin-bottom">    
                        <input type="text" name="email" placeholder="Email"></input>
                    </div>
                    <div>
                        <label for="qtdePessoas">Quantidade de pessoas</label>
                    </div>
                    <div>    
                        <input type="text" name="qtdePessoas" placeholder="Quantidade de pessoas"></input>
                    </div>
                </div>
                <div className="footer">
                    <button onClick={() => props(false)} id="cancelBtn">Cancelar</button>
                    <button onClick={enviarFila}>Enviar</button>
                </div>
            </div>
        </div>
    );
}

function enviarFila(){
    console.log("cliente enviado para a fila")
}

export default Popup