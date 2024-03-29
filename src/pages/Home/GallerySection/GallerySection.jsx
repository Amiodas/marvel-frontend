import React from "react";

const GallerySection = () => {
  return (
    <div className="my-16 pb-0 lg:pb-16">
      <div data-aos="fade-down">
        <h3 className="text-4xl font-bold text-center text-primary">Gallery</h3>
        <div className="flex justify-center text-center mx-auto mt-5 mb-10">
          <p className="text-gray-600 w-3/4 lg:w-1/2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            sunt dicta illum? Qui illo est nulla laborum ipsa deleniti obcaecati
            in eligendi sed, at illum perferendis accusamus, sequi voluptate
            molestiae.
          </p>
        </div>
      </div>
      <div className="flex justify-center" data-aos="fade-right">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="./images/gallery/gallery_01.jpg"
              className="w-96 lg:w-96 h-64 image-gray"
              alt=""
            />
          </div>
          <div>
            <img
              src="./images/gallery/gallery_02.jpg"
              className="w-96 h-64 image-gray"
              alt=""
            />
          </div>
          <div>
            <img
              src="./images/gallery/gallery_03.jpg"
              className="w-96 h-64 image-gray"
              alt=""
            />
          </div>
          <div>
            <img
              src="./images/gallery/gallery_04.png"
              className="w-96 h-64 image-gray"
              alt=""
            />
          </div>
          <div>
            <img
              src="./images/gallery/gallery_05.jpg"
              className="w-96 h-64 image-gray"
              alt=""
            />
          </div>
          <div>
            <img
              src="./images/gallery/gallery_06.jpg"
              className="w-96 h-64 image-gray"
              alt=""
            />
          </div>
          <div>
            <img
              src="./images/gallery/gallery_07.jpg"
              className="w-96 h-64 image-gray"
              alt=""
            />
          </div>
          <div>
            <img
              src="./images/gallery/gallery_08.jpg"
              className="w-96 h-64 image-gray"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
