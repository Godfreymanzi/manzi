import { Component } from "react";
import { Link } from "react-router-dom";
import { BsPhoneFlip } from "react-icons/bs";

class NavBar extends Component{
    render(){
        return(
            <>
            <nav class="bg-[#002242] p-2 mt-0 fixed w-full z-10 top-0">
        <div class="container mx-auto flex flex-wrap items-center">
		    <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
				<Link class="text-[#8B8000] no-underline hover:text-white hover:no-underline" to="">
					<span class="text-2xl pl-2 flex"><BsPhoneFlip className="text-white my-1 text-4xl"/>  IphoneHub Store</span>
				</Link> 
            </div>
			<div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
				<ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
				  <li class="mr-3">
					<Link className="inline-block py-2 px-4 text-white cursor-pointer hover:text-[#C7BC3C] no-underline" to="/">Home</Link>
				  </li>
                  <li class="mr-3">
					<Link className="inline-block py-2 px-4 text-white hover:text-[#8B8000] no-underline" to="/store">Store</Link>
				  </li>

                  <li class="mr-3">
					<Link className="inline-block py-2 px-4 text-white no-underline hover:text-[#8B8000] " to="">Active</Link>
				  </li>
                  <li class="mr-3">
					<Link className="inline-block hover:text-[#8B8000] py-2 px-4 text-white no-underline" to="/login">Login <span className="text-[#8B8000]">|</span> SignUp</Link>
				  </li>
				</ul>
			</div>
        </div>
    </nav>



            </>
        )
    }
}

export default NavBar;