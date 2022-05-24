import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./Login_Modal.css";

export default function Login_Modal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="Queue_Modal" onClick={handleOpen}>Entrar na fila</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="Box_modal">
          {/* Criar formulário de login */}
            <Typography variant="h6" id="modal-modal-title">
                Entrar na Fila
            </Typography>
            <Typography variant="subtitle1" id="modal-modal-description">
                Para entrar na fila, você precisa preencher as informações abaixo.
            </Typography>
            <form>
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Telefone" />
                <button className="Queue_Confirm" type="submit">
                    Entrar
                </button>
            </form> 
        </Box>
      </Modal>
    </div>
  );
}
