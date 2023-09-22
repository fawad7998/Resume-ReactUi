import React from 'react'
import Nav from '../Components/Nav'

function Eduu() {
  return (
    <>
    <Nav />
    <div className="w-full rounded-md">
        <div className="py-4 px-7">
          <h2 className="text-xl font-medium ">About Me</h2>
          <p className="font-light pt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
            quibusdam cum aliquam error, ea possimus, esse ipsa nulla eligendi
            voluptas odio sit perferendis rem ut voluptatum. Odio, unde? Enim,
            eligendi.
          </p>
        </div>
        <hr className=" bg-gray-700 " />
        <div className="px-7 pb-8 flex ">
          <div >
            <div>
              <span className=" flex pt-4 font-medium">
                Adress : <h6 className="font-light">Lahore</h6>
              </span>

              <span className=" flex pt-4 font-medium">
                Email :<h6 className="font-light">xyz@gmail.com</h6>
              </span>
              <span className=" flex pt-4 font-medium">
                Phone :
                <h6 className="font-light">2732347473487</h6>
              </span>
            </div>
          </div>
          <div >
            <div className="pl-24">
              <span className=" flex pt-4 font-medium">
                Adress : <h6 className="font-light">Lahore</h6>
              </span>

              <span className=" flex pt-4 font-medium">
                Email : <h6 className="font-light">xyz@gmail.com</h6>
              </span>
              <span className=" flex pt-4 font-medium">
                Phone : 
                <h6 className="font-light">2732347473487</h6>
              </span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Eduu
