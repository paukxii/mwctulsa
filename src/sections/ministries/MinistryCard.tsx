interface Ministry {
  ministry: {
    name: string;
    image: string;
    image_rotation: string;
    note?: string;
    verse?: string;
    goals?: string;
    alt?: string;
  };
}

export default function MinistryCard({ ministry }: Ministry) {
  return (
    <div className=" bg-no-repeat bg-cover bg-local bg-center mx-auto text-left">
      <div className="px-3 pt-3 h-[420px] lg:h-[765px] mx-auto rounded-3xl">
        <h1 className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent text-center text-[30px] lg:text-[50px] py-5 font-normal">
          {ministry.name}
        </h1>
        <img
          src={ministry.image}
          className="w-full mb-2 rounded-2xl"
          alt={ministry.name}
        />
        <p className="font-thin w-full text-slate-600">{ministry?.note}</p>
        <p className="font-light italic relative text-slate-500">
          {ministry?.verse}
        </p>
        {ministry?.goals && (
          <ul>
            {ministry?.goals.split(",").map((goal, index) => (
              <li key={index}>
                <p className="font-light mt-2 text-[14px] leading-[12px] md:text-[16px] md:leading-[22px] text-slate-500">
                  {goal}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
