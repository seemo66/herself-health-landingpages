export default function MembershipCard({ membership }) {
  return (
    <div className="w-full border border-black rounded-lg bg-[#FFF5EC] px-[21px] py-[21px] lg:flex-1 lg:px-[64px] lg:py-[64px] lg:items-center lg:text-center lg:flex lg:flex-col lg:min-w-[475px]">
      {/* Badge */}
      <p className="font-medium text-pink text-[23px] mb-2">{membership.badge}</p>
      {/* Title */}
      <h3 className="font-medium text-darkPink text-[35px] mb-6 leading-10 whitespace-pre-line">
        {membership.title}
      </h3>
      {/* Price */}
      <p className="font-bold text-darkPink text-[20px] leading-[20px]">{membership.priceLabel}</p>
      <h4 className="font-bold text-pink text-[30px] leading-[30px] mb-2">{membership.price}</h4>
      {/* Intro price */}
      <p className="font-medium text-darkPink text-[20px] leading-[28px]">
        <em>{membership.introLabel}</em>
      </p>
      <p className="font-medium text-darkPink text-[23px] leading-[33px] line-through">
        {membership.introPrice}
      </p>
      {membership.bonus && (
        <p className="font-medium text-darkPink text-[20px] leading-[28px]">
          Bonus: {membership.bonus}
        </p>
      )}
      {/* Description */}
      <p className="font-bold text-darkPink text-[20px] leading-[20px] mt-8">Description</p>
      <p className="font-medium text-darkPink text-[20px] leading-[25px] lg:mb-5">
        {membership.description}
      </p>
    </div>
  );
}
