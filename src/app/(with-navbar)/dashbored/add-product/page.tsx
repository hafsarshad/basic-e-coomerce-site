'use client';
import { useState } from 'react';

export default function AddProductPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) return alert('Please upload an image');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('color', color);
    formData.append('price', price);
    formData.append('image', image);

    const res = await fetch('/api/products', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto" encType="multipart/form-data">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="block mb-2 p-2 border rounded w-full"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="block mb-2 p-2 border rounded w-full"
      />

      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={e => setColor(e.target.value)}
        className="block mb-2 p-2 border rounded w-full"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(e.target.value)}
        className="block mb-2 p-2 border rounded w-full"
        min="0"
      />

      <input
        type="file"
        accept="image/*"
        onChange={e => {
          const file = e.target.files?.[0];
          if (file) setImage(file);
        }}
        className="block mb-4"
      />

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        type="submit"
      >
        Save Product
      </button>
    </form>
  );
}



// 'use client';

// import { useState } from 'react';

// export default function AddProductPage() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [color, setColor] = useState('');
//   const [price, setPrice] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const res = await fetch('/api/products', {
//       method: 'POST',
//       body: JSON.stringify({ title, description, color, price }),
//       headers: { 'Content-Type': 'application/json' },
//     });
//     const data = await res.json();
//     alert(data.message);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6 max-w-lg mx-auto">
//       <h2 className="text-xl font-semibold mb-4">Add Product</h2>

//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//         className="block mb-2 p-2 border rounded w-full"
//       />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={e => setDescription(e.target.value)}
//         className="block mb-2 p-2 border rounded w-full"
//       />

//       <input
//         type="text"
//         placeholder="Color"
//         value={color}
//         onChange={e => setColor(e.target.value)}
//         className="block mb-2 p-2 border rounded w-full"
//       />

//       <input
//         type="number"
//         placeholder="Price"
//         value={price}
//         onChange={e => setPrice(e.target.value)}
//         className="block mb-4 p-2 border rounded w-full"
//         min="0"
//       />

//       <button
//         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//         type="submit"
//       >
//         Save Product
//       </button>
//     </form>
//   );
// }
