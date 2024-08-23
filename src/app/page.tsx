import SearchForm from "@/components/SearchForm/SearchForm";
import { trending_data } from "@/data/trending";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#003B95]">
      <section className="p-6 max-w-7xl mx-auto">
        <h2 className="text-white  leading-7 text-4xl lg:text-5xl font-semibold p-2">Find your Next Stay</h2>
        <h3 className="text-white p-2 font-semibold lg:text-lg">
            Search low prices on hotels, homes and much more... 
        </h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4"> 
        <SearchForm />
      </section>

      <section className="bg-white max-w-7xl mx-auto rounded-t-lg p-6 mt-10"> {/* Trending section */}
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">
            Most popular destinations in the world
          </p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll max-w-7xl mx-auto">
          {trending_data.map((item) => (
            <div key={item.id} className="flex flex-col items-start space-y-2 cursor-pointer shrink-0">
              <div className="relative w-60 h-60 rounded-lg">
                  <Image
                    src={item.src}
                    alt={item.title}  
                    layout="fill"
                    className="rounded-lg object-cover"              
                  />
              </div>
                
              <h3 className="font-semibold ">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.location}</p>
              <p className="font-light text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
