import * as Yup from "yup";

export default Yup.object().shape({
  firstName: Yup.string()
    .min(1, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!")
    .required("Boş geçilemez"),
  lastName: Yup.string()
    .min(1, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!")
    .required("Boş geçilemez"),
  phone: Yup.string()
    .min(15, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!")
    .required("Boş geçilemez"),
    isTaxPlayer: Yup.boolean(),
   
    companyName: Yup.string()
    .min(1, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!"),
    
    taxOffice: Yup.string()
    .min(6, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!"),
    
    taxNumber: Yup.string()
    .min(10, "Boş geçilemez!")
    .max(50, "Hatalı giriş yaptınız!"),
  
});
