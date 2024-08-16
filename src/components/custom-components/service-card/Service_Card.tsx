interface Service {
    title: string;
    image: string;
    services?: string[];
  }
const Service_Card = ({ service }:{service:Service}) => {
    return (
  
        <div className="p-5 bg-white rounded-md hover:border-2 hover:border-[#1697BA] hover:shadow-xl">
          <div className="item">
            <div className="">
              <figure className="icon flex justify-center items-center">
                <img
                  src={service?.image}
                  alt="image"
                  className="h-20 w-20  border-2 rounded-full p-1 border-[#1697BA]"
                />
              </figure>
              <h3 className="overflow-hidden text-ellipsis whitespace-nowrap font-bold text-2xl text-center">{service.title}</h3>
              <ul>
                {service.services?.map((item, index :number) => (
                  <li key={index} className="flex gap-2 items-center hover:underline cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4 text-[#1697BA]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                    <span className="text-sm overflow-hidden text-ellipsis whitespace-nowrap">  {item}</span>
                  
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
  
    );
  };
  
  export default Service_Card;
  