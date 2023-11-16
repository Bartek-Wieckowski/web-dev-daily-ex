import { FormProvider } from './FormContext';
import { ToastContainer } from 'react-toastify';

import Form from './Form';

const Exercise6 = () => {
  return (
    <FormProvider>
      <section className="bg-blue-100 text-black flex flex-col justify-center no_scroll">
        <div className="container mx-auto">
          <Form />
          <ToastContainer />
        </div>
      </section>
    </FormProvider>
  );
};

export default Exercise6;
