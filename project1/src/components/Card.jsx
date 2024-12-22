import React from "react";

const Card = (props) => {
  return (
    <div>
      <figure className="md:flex rounded-xl p-8 md:p-0 bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={props.image}
          alt="Photo by Ann Bugaichuk from Pexels"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut
              vel rerum suscipit! Voluptatem quia minus assumenda unde quasi
              cupiditate officiis ab maiores exercitationem nesciunt. Recusandae
              eaque ratione quae consequatur?
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{props.name}</div>
            <div className="text-slate-700 dark:text-slate-500">
              {props.title}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
