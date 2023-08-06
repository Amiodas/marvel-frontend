import React from "react";

const ContactSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-16">
      <div className="flex items-center" data-aos="fade-right">
        <div className="px-6 md:px-0">
          <h3 className="text-3xl text-primary font-bold">Contact Us</h3>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            assumenda maxime. Cum aspernatur et, accusantium voluptas iure
            obcaecati labore in aperiam, eaque provident, animi rem. Doloribus
            distinctio esse laborum animi. Dolore quo tenetur adipisci illo.
            Magnam perferendis laborum nisi natus accusantium expedita unde
            atque molestias nemo nam? Ab animi sit aspernatur nostrum esse
            itaque soluta voluptatem. Quos nulla dicta officia!
          </p>
          <div>
            <div className="flex items-center space-x-5 mt-8">
              <img
                src="/src/assets/images/contact/Facebook.png"
                className="w-8 h-8 image-gray"
                alt=""
              />
              <img
                src="/src/assets/images/contact/WhatsApp.webp"
                className="w-10 h-10 image-gray"
                alt=""
              />
              <img
                src="/src/assets/images/contact/Instagram.jpg"
                className="w-8 h-8 image-gray"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center" data-aos="zoom-in">
        <div className="card shadow-lg p-10 w-96">
          <h3 className="text-xl font-bold mb-4 text-primary">
            Send us a message
          </h3>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input border border-gray-200 bg-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input border border-gray-200 bg-white"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                type="text"
                placeholder="Type here"
                className="textarea h-32 border border-gray-200 bg-white"
              />
            </div>
          </div>
          <div className="mt-8">
            <button className="btn btn-primary btn-block text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
