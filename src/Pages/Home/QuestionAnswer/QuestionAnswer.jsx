import React from "react";

const QuestionAnswer = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-sm text-gray-700 ">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your
          body with ease!
        </p>
      </div>
      <div className="mt-10 space-y-4 max-w-6xl mx-auto">
        <div className="collapse collapse-arrow bg-[#2B828210] border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
           How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#2B828210] border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-sm">
           Yes, our service is designed to be safe, convenient, and accessible for people of all ages and body types.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#2B828210] border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-sm">
        
           When used correctly, it can help support your back and encourage better posture, contributing to reduced discomfort over time.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#2B828210] border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-sm">
        
           Yes — it includes smart features such as gentle vibration alerts to remind you to correct your posture throughout the day.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-[#2B828210] border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-sm">
        
          You will be notified via email as soon as the product is back in stock. Make sure you sign up for alerts.
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
