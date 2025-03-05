import React from 'react'
import {Task} from "@/typs/@types"
import done from "@/../public/imgs/done_not/done.png";
import not from "@/../public/imgs/done_not/not.webp";
import Image from 'next/image';
const all = async() => {
     let  atasks:Task[] ;
      try{
      const data =await fetch('https://jsonplaceholder.typicode.com/todos', {
          method: 'GET',
          cache: 'no-store'
      });
      atasks   = await data.json();
      const g = atasks.map(task => {
        console.log(
          task.userId,
          task.id,
          task.title,
          task.completed,
        )
      }) ;
      console.log(g);
      // console.log("data = "+ data);
      // const tasks: task[] = [...data]
      } catch (err) {
        console.error('Error fetching tasks:', err);
        return null;
      }
  return (
    <div>
          <div className="bg-black py-20 lg:py-[120px] overflow-hidden relative z-10">
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-white">
            Tasks list 
          </h2>
          <p className="text-white leading-relaxed font-light text-xl mx-auto pb-2">
            Keep track of your tasks with ease.
          </p>
        </header>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {atasks.splice(0,21).map((tech, index) => (
            <div
              key={index}
              className="w-full bg-gray-900 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center"
            >
              <div className="mb-8">
                <div >
                  <Image 
                    src={tech.completed ?
                      done : not}
                    width={500}
                    height={500} alt={''}                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">{tech.title}</p>
                <p className="text-base text-gray-400 font-normal">
                  ________________________________________
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  )
}

export default all
