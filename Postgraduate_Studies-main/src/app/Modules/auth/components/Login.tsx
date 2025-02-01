/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
// import { useNavigate } from 'react-router-dom';
import { LoginModelForm } from '../../../interfaces/_authModels';
import { useLoginStore } from '../../../Store/auth/authStore';
import { getUserByToken, login } from '../../../Apis/authApis';

export function Login() {
  const { updateUserData } = useLoginStore();
  // const navigate = useNavigate();
  const {
    handleSubmit,
  } = useForm<LoginModelForm>({
    criteriaMode: 'all',
  });
  const onSubmit = async (values: LoginModelForm) => {
    try {
      const { data: auth } = await login(values);
      if (auth.statusCode !== 200) {
        toast.warning(auth.message);
      } else {
        localStorage.setItem('token', auth?.data.token);
        const { data: tokenData } = await getUserByToken();
        if (tokenData) {
          localStorage.setItem('UserData', JSON.stringify(tokenData));
          updateUserData({ ...tokenData });
          // navigate('/', {
          //   replace: true,
          // });
          window.location.reload();
        }
      }
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <form
      className="form w-100"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      id="kt_login_signin_form"
    >
   
    </form>
  );
}
