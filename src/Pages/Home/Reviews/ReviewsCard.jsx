import React from "react";

const ReviewsCard = ({ review }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:max-w-md lg:max-w-lg bg-white rounded-2xl shadow p-4 md:p-6">
        <div className="text-2xl md:text-3xl text-teal-400 mb-3">❝</div>

        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {review.review}
        </p>

        <div className="border-t border-dashed border-teal-400 my-4" />

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-teal-700 flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src={review.user_photoURL}
              alt={review.userName}
            />
          </div>

          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">
              {review.userName}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 truncate">
              {review.user_email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
