import React from 'react'

const ProjectCard = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover: shadow-[rgba(0,_0,_0,_0.24)_0px_3px_0px] transition-all ">
        <div className=" w-3/3 ">
          <img src={props.img} alt="img"/>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-lg text-center my-5">{props.title}</h3>
        <p className="text-lightText text-center md:text-start">Lorem ipsum dolor sit amet consectetur, adipisicing 
          elit.</p>
      </div>
    </div>
  )
}

export default ProjectCard
