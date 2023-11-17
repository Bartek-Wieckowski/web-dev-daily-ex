import { useForm } from './FormContext';
import { ToastContainer } from 'react-toastify';
import Form from './Form';
import UserSimplePanel from './UserSimplePanel';

const SmallApp = () => {
  const { logged, user } = useForm();
  return (
    <section className="bg-blue-100 text-black flex flex-col justify-center no_scroll">
      <div className="container mx-auto">
        {logged || user.rememberMe === true ? <UserSimplePanel /> : <Form />}
        <ToastContainer />
      </div>
    </section>
  );
};

export default SmallApp;
