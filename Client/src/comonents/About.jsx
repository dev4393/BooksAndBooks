import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './Services/validationSchema';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg p-8 my-4 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-700">Contact Us</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            {...register('name')}
            className="w-full p-2 mt-1 text-gray-900 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register('email')}
            className="w-full p-2 mt-1 text-gray-900 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register('password')}
            className="w-full p-2 mt-1 text-gray-900 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
        </div>

        <button type="submit" className="w-full p-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
