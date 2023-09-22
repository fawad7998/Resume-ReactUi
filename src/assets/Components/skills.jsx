import React from "react";

function Skills() {
  return (
    <>
      <div className="cardd cd-1 w-full mt-4 hover:scale-105 duration-700 rounded-md">
        <div className="p-6 ">
          <h3 className="font-medium text-xl">Professional Skills</h3>
          <div className="flex w-full justify-between">
            <div className="w-full">
              <div>
                <h2 className="font- light pt-4">HTML</h2>
                <div className=" bg-neutral-200 dark:bg-neutral-600 cardd cd-1 w-1/1">
                  <div className="bg-blue-500  text-center text-xs font-medium leading-none text-primary-100 w-full">
                    100%
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font- light pt-4">JS</h2>
                <div className=" bg-neutral-200 dark:bg-neutral-600 cardd cd-1 w-1/1">
                  <div className="bg-blue-500  text-center text-xs font-medium leading-none text-primary-100 w-1/4">
                    20%
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font- light pt-4">CSS</h2>
                <div className=" bg-neutral-200 dark:bg-neutral-600 cardd cd-1 w-1/1">
                  <div className="bg-blue-500  text-center text-xs font-medium leading-none text-primary-100 w-3/4">
                    90%
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full ml-5">
              <div>
                <h2 className="font- light pt-4">Brain</h2>
                <div className=" bg-neutral-200 dark:bg-neutral-600 cardd cd-1 w-1/1">
                  <div className="bg-blue-500  text-center text-xs font-medium leading-none text-primary-100 w-full">
                    100%
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font- light pt-4">Node</h2>
                <div className=" bg-neutral-200 dark:bg-neutral-600 cardd cd-1 w-1/1">
                  <div className="bg-blue-500  text-center text-xs font-medium leading-none text-primary-100 w-1/2">
                    40%
                  </div>
                </div>
              </div>
              <div>
                <h2 className="font- light pt-4">React</h2>
                <div className=" bg-neutral-200 dark:bg-neutral-600 cardd cd-1 w-1/1">
                  <div className="bg-blue-500  text-center text-xs font-medium leading-none text-primary-100 w-3/4">
                    90%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
