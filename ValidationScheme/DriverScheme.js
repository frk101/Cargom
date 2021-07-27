import * as Yup from "yup";

export default Yup.object().shape({
  EmailAddress: Yup.string()
    .min(1, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!")
    .required("Boş geçilemez"),
  PhoneNumber: Yup.string()
    .min(15, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!")
    .required("Boş geçilemez"),
  Firstname: Yup.string()
    .min(1, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!")
    .required("Boş geçilemez"),
  Lastname: Yup.string()
    .min(1, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!")
    .required("Boş geçilemez"),
  IdentityNumber: Yup.string()
    .min(11, "Boş geçilemez!")
    .max(11, "Hatalı giriş yaptınız!")
    .required("Boş geçilemez"),
});
