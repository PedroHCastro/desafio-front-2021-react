const objMonth = {
  "01": "janeiro",
  "02": "fevereiro",
  "03": "março",
  "04": "abril",
  "05": "maio",
  "06": "junho",
  "07": "julho",
  "08": "agosto",
  "09": "setembro",
  10: "outubro",
  11: "novembro",
  12: "dezembro",
};

export const formatDate = (dateString) => {
  const partsDate = dateString.split("-");
  const formatedDate = `${partsDate[2]} de ${objMonth[partsDate[1]]}, ${
    partsDate[0]
  }`;

  return formatedDate;
};

export const formatMoney = (money) => {
  return money.replace(".", ",");
};
