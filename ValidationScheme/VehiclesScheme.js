import * as Yup from "yup";

export default Yup.object().shape({
  VehicleTypeId: Yup.number().typeError("Boş geçilemez!").required("Boş geçilemez").positive("Boş geçilemez").integer("Boş geçilemez"),
  VehicleBrandId: Yup.number().typeError("Boş geçilemez!").required("Boş geçilemez").positive("Boş geçilemez").integer("Boş geçilemez"),
  VehicleModelId: Yup.number("Boş geçilemez!").typeError("Boş geçilemez!").required("Boş geçilemez!").positive("Boş geçilemez!").integer("Boş geçilemez!"),
  Plate: Yup.string().min(1, "Boş geçilemez!").max(50, "Hatalı giriş yaptınız!").required("Boş geçilemez"),
  Desi: Yup.number("Boş geçilemez").typeError("Boş geçilemez!"),
});
