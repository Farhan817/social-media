import * as Yup from 'yup';

export const postFormSchema= Yup.object({
      content: Yup.string().required("Content is required"),
    })