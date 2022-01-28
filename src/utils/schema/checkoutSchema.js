import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("O campo nome obrigatório"),
  cpf: yup.number().required("O campo CPF obrigatório"),
  email: yup.string().email().required("O campo e-mail obrigatório"),
  cep: yup.string().required("O campo CEP obrigatório"),
  cel: yup.string().required("O campo CEL obrigatório"),
  address: yup.string().required("O campo endereço obrigatório"),
  city: yup.string().required("O campo cidadde obrigatório"),
  state: yup.string().required("O campo estado obrigatório"),
});

// complete_name
// cpf
// email
// cep
// cel
// address
// city
// state
