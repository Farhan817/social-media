import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  wallet_address: Yup.string().required('Wallet ID is required'),
  username: Yup.string().required('Username is required'),
  bio: Yup.string(),
  profile_pic_url: Yup.string().url('Enter a valid URL')
});

