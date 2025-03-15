import { Link } from "react-router-dom"
import LoginForm from "../components/LoginForm"
import { Navigation } from "../components/Navigation"


function LoginPage() {
  return (
    <>
    <Navigation/>
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-pink-600">Elegance Beauty Parlour</h1>
          <h2 className="text-2xl font-semibold text-gray-900">Welcome back</h2>
          <p className="text-gray-600">Enter your credentials to sign in to your account</p>
        </div>
        <LoginForm />
        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-gray-900 underline underline-offset-4 hover:text-pink-600">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </>

  )
}

export default LoginPage

