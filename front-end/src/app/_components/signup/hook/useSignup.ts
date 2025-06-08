import { useFormik } from "formik";
import { SignupSchema } from "./SignupSchema";
import { post } from "../../../client/client";
import { endpoints } from "../../../_utils/endpoints";
import { SignUpType } from "../../../_utils/types";
import { useRouter } from "next/navigation";

const useSignup = () => {
  const router = useRouter();
  const InitialValues: SignUpType = {
      wallet_address: "",
      username: "",
      bio: "",
      profile_pic_url: "",
    }

  const formik = useFormik({
    initialValues: InitialValues,
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      handelSubmit(values);
    },
  });

  const handelSubmit = (values: SignUpType) => {
    post(endpoints.userCreate, values)
      .then((res) => {
        router.push("/login");
      })
      .catch((e) => {
        window.alert("Something went wrong");
      });
  };

  return [{ formik }, {}];
};
export default useSignup;
