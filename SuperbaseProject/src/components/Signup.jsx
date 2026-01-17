import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const naviga
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const email = formData.get('email');
      const password = formData.get('password');
    /**
    Challenge:
    * 1) Call 'signUpNewUser', passing in the email and password as parameters.
        Destructure the response into 3 parts (HINT: check the 'signUpNewUser' 
        function definition)
    * 2) Handle errors by returning the error using the Error constructor
    * 3) Handle success (checking 2 parts of the response) by navigating to
        '/dashboard' and appropriately returning
    * 4) Handle any other cases as a final fallback	
    */
    const { 
        success,
        data,
        error : signUpError
    } = await signUpNewUser(email, password);

    if (signUpError) {
        return new Error(signUpError)
    }

    if (success) {
        
    }

    },
    null
  );

    return (
        <>
            <h1 className="landing-header">Paper Like A Boss</h1>
            <div className="sign-form-container">
                <form
                    action={submitAction}
                    aria-label="Sign up form"
                    aria-describedby="form-description"
                >
                    <div id="form-description" className="sr-only">
                        Use this form to create a new account. Enter your email and
                        password.
                    </div>

                    <h2 className="form-title">Sign up today!</h2>
                    <Link to="/" className="form-link"><p>
                        Already have an account?{' '}
                        Sign in
                    </p></Link>

                    <label htmlFor="email">Email</label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder=""
                        required
                        aria-required="true"
                    //aria-invalid=
                    //aria-describedby=
                    //disabled=
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        id="password"
                        placeholder=""
                        required
                        aria-required="true"
                    //aria-invalid=
                    //aria-describedby=
                    //disabled=
                    />

                    <button
                        type="submit"
                        className="form-button"
                    //disabled=
                    //aria-busy=
                    >
                        Sign Up
                        {/*'Signing up...' when pending*/}
                    </button>

                    {/* Error message */}
                </form>
            </div>
        </>
    );
};

export default Signup;
