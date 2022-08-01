import { useRef, useState } from 'react';
import Input from '../../components/Input';

const LoginForm = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const validation = () => {
    setEmailError(() => !Boolean(emailRef.current.value));
    setPasswordError(() => !Boolean(passwordRef.current.value));
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <Input
          ref={emailRef}
          id="username"
          label="Username"
          error={emailError ? 'Please choose username.' : ''}
          placeholder="Username"
          type="text"
        />
      </div>
      <div className="mb-6">
        <Input
          ref={passwordRef}
          id="password"
          label="Password"
          error={passwordError ? 'Please choose password.' : ''}
          placeholder="******************"
          type="password"
        />
      </div>
      <div className="flex items-center justify-end">
        <button
          className="bg-blue bg-blue-500 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={validation}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
