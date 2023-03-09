import { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render(){
  return (
   <>
   <footer class="bg-[#002242] dark:bg-gray-900">
    <div class="container px-12 py-16 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">

        <div>
                <p class="font-semibold text-white hover:text-[#8B8000] dark:text-white">Quick Link</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <Link to="" class=" transition-colors duration-300 hover:text-white text-[#8B8000] hover:underline ">Home</Link>
                    <Link to="" class=" transition-colors duration-300 hover:text-white text-[#8B8000] hover:underline ">Who We Are</Link>
                    <Link to="" class=" transition-colors duration-300 hover:text-white  text-[#8B8000] hover:underline ">Our Philosophy</Link>
                </div>
            </div>
            <div>
                <p class="font-semibold text-white">Afiliets</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <Link to="" class="text-[#8B8000] transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">Retail & E-Commerce</Link>
                    <Link to="" class="text-[#8B8000] transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">Information Technology</Link>
                    <Link to="" class="text-[#8B8000] transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">Finance & Insurance</Link>
                </div>
            </div>


            <div class="sm:col-span-2">
                <h1 class="max-w-lg text-xl font-semibold tracking-tight text-[#8B8000] xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>

                <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#8B8000]  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-[#8B8000]" placeholder="Email Address"/>
            
                    <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#8B8000] rounded-lg hover:bg-white hover:text-[#8B8000] focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div>
            </div>

            

            
        </div>
        
        <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700"></hr>
        <div>
        <p className='text-white text-center'>
            @<span className='text-[#8B8000]'>2023</span> IphoneHub Store 
        </p>

        </div>
        
    </div>
</footer>
  
   
   </>
  );
}
}

export default Footer;
