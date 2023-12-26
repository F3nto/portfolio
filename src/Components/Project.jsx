import React from "react";

const Project = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-xl">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>

      <ul className="grid grid-cols-1 md:lg:grid-cols-2 gap-8 h-auto">
        {/* Project 1: Lupyo Gyi Pyo Khin Thar */}
        <li className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">
            Lupyo Gyi Pyo Khin Thar (Plants-Ecommerce)
          </h3>
          <p className="mb-4">
            Developed using the MERN (MongoDB, Express.js, React, Node.js)
            stack.
          </p>
          <p>Features:</p>
          <ul className="list-disc pl-6 mb-2">
            <li>User can access favorite items</li>
            <li>Authentication</li>
            <li>Product catalog</li>
            <li>Shopping cart</li>
            <li>Order processing</li>
          </ul>
          <p>
            In a digital landscape teeming with botanical wonders, "Lupyo Gyi
            Pyo Khin Thar" emerges as a pioneer, carving a niche in Myanmar's
            digital ecosystem. More than a platform, it's a testament to the
            harmony between technology and nature.
          </p>
        </li>

        {/* Project 2: Scent-Sense Fragrances */}
        <li className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">
            Scent-Sense Fragrances (Perfumes-Ecommerce)
          </h3>
          <p className="mb-4">
            "Scent-Sense Fragrance" is an immersive online platform designed to
            revolutionize the fragrance industry by providing a personalized and
            seamless shopping experience. Rooted in the MERN (MongoDB,
            Express.js, React, Node.js) stack.
          </p>
          <p>Implemented features:</p>
          <ul className="list-disc pl-6 mb-2">
            <li>
              Filters for different fragrance families, concentrations, and
              popular choices
            </li>
            <li>Seamless checkout process with multiple payment options</li>
          </ul>
          <p>
            From an elaborate business plan to user-centric functionalities, it
            aims to redefine how users explore and purchase fragrances.
          </p>
        </li>

        {/* Project 3: Hot-Book */}
        <li className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">
            Hot-Book (hotel-booking app)
          </h3>
          <p className="mb-4">
            Hot-Book is a cutting-edge React Native app designed to elevate the
            hotel booking process. Harnessing the power of Redux for seamless
            state management, Hot-Book offers a user-friendly interface and
            robust functionalities.
          </p>
          <p>
            Hot-Book leverages the power of Redux for efficient state
            management, ensuring a smooth and responsive user experience.
          </p>
        </li>

        {/* Project 4: Mobi-Shop */}
        <li className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">
            Mobi-Shop (food-ordering app)
          </h3>
          <p className="mb-4">
            Mobi Shopping, the go-to app for a delightful ecommerce food
            ordering experience. Crafted with user convenience in mind, Mobi
            Shopping blends cutting-edge technology with a passion for good
            food.
          </p>
          <p>
            Experience a curated dining adventure with personalized
            recommendations. Mobi Shopping learns your preferences, making each
            visit a tailored and enjoyable experience.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Project;
