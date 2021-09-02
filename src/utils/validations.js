export const ValidateEmail = (email) => {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailFormat.test(email)) {
    return true;
  } else {
    return false;
  }
};

export const StringEmpty = (stringVal) => {
  console.log("valllllllll", stringVal);
  if (stringVal === "") {
    return true;
  } else {
    return false;
  }
};

export const CompareEquals = (value1, value2) => {
  if (value1 === value2) {
    return true;
  } else {
    return false;
  }
};
