import { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
class Login extends Component {
  render(){
  return (
   <>
  <header class="max-w-lg mx-auto">
        <Link href="#">
            <h1 class="text-4xl font-bold text-white text-center">Startup</h1>
        </Link>
    </header>

    <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
            <h3 class="font-bold text-2xl text-[#8B8000]">Welcome to Login</h3>
            <p class="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section class="mt-10">
            <form class="flex flex-col" method="POST" action="#">
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
                    <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#8B8000] transition duration-500 px-3 pb-3"/>
                </div>
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                    <input type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-[#8B8000] transition duration-500 px-3 pb-3"/>
                </div>
                <div class="flex justify-end">
                    <Link to="" class="text-sm  hover:text-purple-700 hover:underline mb-6">Forgot your password?</Link>
                </div>
                <button class="bg-[#002242] hover:bg-[#8B8000] text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
            </form>
        </section>
    </main>

    <div class="max-w-lg mx-auto text-center mt-12 mb-6">
        <p class="text-white">Don't have an account? <Link to="" class="font-bold hover:underline">Sign up</Link>.</p>
    </div>
   
   </>
  );
}
}

export default Login;
