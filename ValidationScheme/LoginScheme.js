import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string(),
  password: Yup.string()
    .min(1, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!")
    .required("Boş geçilemez"),
});
