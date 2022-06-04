/* Criar um componente que retorna um modal com uma animação e uma mensagem por 20 segundos */
import * as React from 'react';
import { ClassicSpinner } from "react-spinners-kit";
import "./CubeAnimationModal.css";

export default function CubeAnimationModal() {
    console.log('CubeAnimationModal');
    return (
        <div className='CubeAnimationDiv'>
            <h4>Parabéns, você entrou na fila!</h4>
            <p>As atualizações sobre sua posição na fila virão via email</p>
            <p><b>Verifique sua caixa de entrada no email informado</b></p>
            <ClassicSpinner size={100} color="#00c897" />
        </div>
    );
}
