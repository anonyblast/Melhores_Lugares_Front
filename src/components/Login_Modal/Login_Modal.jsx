import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import "./Login_Modal.css";
import CubeAnimationModal from "../CubeAnimationModal/CubeAnimationModal";
import { useForm } from 'react-hook-form';


export default function Login_Modal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {handleSubmit, formState} = useForm();
  const {isSubmitting} = formState;

  function SetTimeToAnimation(values) {
    console.log(values);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        handleClose();
        resolve();
      }, 10000);
    });
  }

  const validationsLogin = yup.object().shape({
    name: yup
    .string()
    .required("*Nome é obrigatório"),
    email: yup
    .string()
    .email("*email inválido")
    .required("*O email é obrigatório"),
    people_quantity: yup
      .number()
      .required("*Quantidade de pessoas é obrigatória"),
  });

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
           <Formik
            initialValues={{}}
            onSubmit={handleSubmit(SetTimeToAnimation)}
            validationSchema={validationsLogin}
            >
              <Form>
             {isSubmitting ? <CubeAnimationModal /> : ""}
                <div className="form-group">
                  <Field name="email" className="form-field" placeholder="Email para se atualizar :)" />
                  <ErrorMessage
                    component="span"
                    name="email"
                    className="form-error"
                  />
                  <Field name="name" className="form-field" placeholder="Nome pra gente te achar :D" />
                  <ErrorMessage
                    component="span"
                    name="name"
                    className="form-error"
                  />
                </div>
                <div className="form-group">
                  <Typography variant="subtitle1" id="modal-modal-description1">
                    Selecione a quantidade de pessoas que irão ser atendidas.
                  </Typography>
                  <Field type="number" name="people_quantity" className="form-field" id="form-field-number" placeholder="1" min="1" max="4" />
                    <ErrorMessage
                      component="span"
                      name="people_quantity"
                      className="form-error"
                    />
                </div>
                {/* Quando clicar no botão, mostrar a animação de loading */}
                <button disabled={isSubmitting} className="Queue_Confirm" type="submit">
                  Entrar na Fila
                </button>
              </Form> 
           </Formik>
        </Box>
      </Modal>
    </div>
  );
}
