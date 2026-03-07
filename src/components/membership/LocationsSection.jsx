// LocationSection component
// Displays a list of clinic locations with addresses
export default function LocationSection() {
  return (
    <section className="max-w-[1728px] bg-pink pb-[35px] pt-0 px-[30px]">
      {/* Section Heading */}
      <h2 className="font-reckless text-[40px] text-white md:text-center lg:text-[60px]">
        Locations
      </h2>

      {/* Locations List */}
      <ul
        className="flex flex-col font-untitled text-[18px] lg:text-[20px] text-white leading-7 mt-6
                   md:text-center md:flex-row md:flex-wrap md:gap-12 md:justify-center 
                   md:leading-8"
      >
        {/* Highland Park */}
        <li className="mb-[25px]">
          <span className="font-medium text-[22px] lg:text-[24px]">Highland Park:</span>
          <br />
          2004 Ford Pkwy,
          <br />
          St Paul, MN 55116
        </li>

        {/* Crystal */}
        <li className="mb-[25px]">
          <span className="font-medium text-[22px] lg:text-[24px]">Crystal:</span>
          <br />
          5200 Douglas Dr N,
          <br />
          Minneapolis, MN 55429
        </li>

        {/* Eagan */}
        <li className="mb-[25px]">
          <span className="font-medium text-[22px] lg:text-[24px]">Eagan:</span>
          <br />
          2000 Rahncliff Ct #400,
          <br />
          Eagan, MN 55122
        </li>

        {/* Lyndale */}
        <li className="mb-[25px]">
          <span className="font-medium text-[22px] lg:text-[24px]">
            Lyndale (South Minneapolis):
          </span>
          <br />
          5450 Lyndale Avenue S,
          <br />
          Minneapolis, MN 55419
        </li>

        {/* Rosedale */}
        <li className="mb-[25px]">
          <span className="font-medium text-[22px] lg:text-[24px]">Rosedale:</span>
          <br />
          2401 Fairview Ave N #145,
          <br />
          Roseville, MN 55113
        </li>
      </ul>
    </section>
  );
}
