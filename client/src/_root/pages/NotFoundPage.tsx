// function NotFoundPage() {
//   return (
//     <>
//       <section className="text-gray-600 body-font">
//         <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//           <img
//             className="lg:w-1/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
//             alt="hero"
//             src="https://dummyimage.com/600x600"
//           />
//           <div className="text-center lg:w-2/3 w-full">
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ex-text-white">
//               404 NOT FOUND
//             </h1>
//             <p className="mb-8 leading-relaxed">
//               Meggings kinfolk echo park stumptown DIY, kale chips beard
//               jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
//               godard disrupt ramps hexagon mustache umami snackwave tilde
//               chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
//               mlkshk freegan photo booth af fingerstache pitchfork.
//             </p>
//             <div className="flex justify-center">
//               <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                 Home
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default NotFoundPage;

import React, { useState } from "react";

const NotFoundPage: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageTempUrl, setImageTempUrl] = useState<string | null>(null);

  const handleImageFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;

    if (target.files && target.files[0]) {
      const file = target.files[0];
      setImageFile(file);
      if (!imageFile) null; // Update image file state

      try {
        const url = URL.createObjectURL(file);
        setImageTempUrl(url); // Set temporary URL with potential error handling
      } catch (error) {
        console.error("Error creating temporary URL:", error);
        // Handle the error gracefully, e.g., display an error message to the user
      }
    }

    // Access and potentially use imageTempUrl (avoid recursive call)
    console.log(imageTempUrl); // Use imageTempUrl for preview or processing
  };

  return (
    <div className="p-4">
      <input
        type="file"
        accept="image/*"
        onInput={handleImageFileInput}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      {imageTempUrl && (
        <div className="mt-4">
          <img
            src={imageTempUrl}
            alt="Uploaded Preview"
            className="max-w-full h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default NotFoundPage;
