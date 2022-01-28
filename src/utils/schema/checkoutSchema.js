import * as yup from "yup";

yup.addMethod(yup.string, "validateCPF", function (errorMessage) {
  return this.test(`test-validate-cpf`, errorMessage, function (value) {
    const { path, createError } = this;
    let cpf = value;

    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf == "") return false;

    if (
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999"
    ) {
      return createError({ path, message: errorMessage });
    }

    let add = 0;
    for (var i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
      return createError({ path, message: errorMessage });

    add = 0;
    for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
      return createError({ path, message: errorMessage });

    return true;
  });
});

yup.addMethod(yup.string, "validateCEP", function (errorMessage) {
  return this.test(`test-validate-cep`, errorMessage, function (value) {
    const { path, createError } = this;
    let cep = value;
    cep = cep.replace(/[^\d]+/g, "");
    const regexCep = /^[0-9]{5}(-|)[0-9]{3}$/;

    if (
      cep == "00000000" ||
      cep == "11111111" ||
      cep == "22222222" ||
      cep == "33333333" ||
      cep == "44444444" ||
      cep == "55555555" ||
      cep == "66666666" ||
      cep == "77777777" ||
      cep == "88888888" ||
      cep == "99999999"
    ) {
      return createError({ path, message: errorMessage });
    }

    if (regexCep.test(cep)) {
      return true;
    }

    return createError({ path, message: errorMessage });
  });
});

yup.addMethod(yup.string, "validateCEL", function (errorMessage) {
  return this.test(`test-validate-cel`, errorMessage, function (value) {
    const { path, createError } = this;
    let cel = value;

    const regexCel = /^\([0-9]{2}\)\ [0-9]{5}-[0-9]{4}$/;

    if (
      cel == "(00) 00000-0000" ||
      cel == "(11) 11111-1111" ||
      cel == "(22) 22222-2222" ||
      cel == "(33) 33333-3333" ||
      cel == "(44) 44444-4444" ||
      cel == "(55) 55555-5555" ||
      cel == "(66) 66666-6666" ||
      cel == "(77) 77777-7777" ||
      cel == "(88) 88888-8888" ||
      cel == "(99) 99999-9999"
    ) {
      return createError({ path, message: errorMessage });
    }

    if (regexCel.test(cel)) {
      return true;
    }

    return createError({ path, message: errorMessage });
  });
});

export const schema = yup.object().shape({
  name: yup.string().required("O campo nome obrigatório"),
  cpf: yup
    .string()
    .validateCPF("Insira um CPF válido")
    .required("O campo CPF obrigatório"),
  email: yup
    .string()
    .email("O campo e-mail deve ser um email válido")
    .required("O campo e-mail obrigatório"),
  cep: yup
    .string()
    .validateCEP("Insira um CEP válido")
    .required("O campo CEP obrigatório"),
  cel: yup
    .string()
    .validateCEL("Insira um celular válido")
    .required("O campo celular obrigatório"),
  address: yup.string().required("O campo endereço obrigatório"),
  city: yup.string().required("O campo cidadde obrigatório"),
  state: yup.string().required("O campo estado obrigatório"),
});
