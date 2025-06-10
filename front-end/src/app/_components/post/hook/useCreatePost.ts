import { useFormik } from "formik";
import { postFormSchema } from "./PostFormSchema";
import { endpoints } from "../../../_utils/endpoints";
import { post } from "../../../client/client";
import { postFormType } from "../../../_utils/types";

const useCreatePost = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      
      content: "",
    },
    validationSchema: postFormSchema,
    onSubmit: (values) => {
      handelSubmit(values);
      // close after submit
    },
  });

  const handelSubmit = (values: postFormType) => {
    const payload={
      wallet_address:localStorage.getItem("wallet"),
      content:values.content
    }
    post(endpoints.posts, payload)
      .then((res) => {
        onClose();
      })
      .catch((e) => {
        window.alert("Something went wrong");
      });
  };

  return [{ formik }, {}];
};
export default useCreatePost;
