import React from "react";
import liveTrackingImg from '../../../assets/live-tracking.png';
import safeDeliveryImg from '../../../assets/safe-delivery.png';


const Support = () => {
  const cards = [
    {
      id: 1,
      img: liveTrackingImg,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      img: safeDeliveryImg,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 3,
      img: safeDeliveryImg,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <div className=" my-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-4">Our Support</h2>
        <p className="text-gray-700 text-sm md:text-base">
          Fast, reliable, and customer-friendly support to ensure your parcels reach safely and on time.
        </p>
      </div>

      <div className="space-y-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col md:flex-row items-center gap-5 bg-white p-10 rounded-lg shadow-md"
          >
            <div className="flex-shrink-0 md:border-r-2 md:border-dashed md:pr-5 pb-5 md:pb-0">
              <img src={card.img} alt={card.title} className="h-30 w-30" />
            </div>
            <div className="flex-1 space-y-2 text-center md:text-left">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;
