import { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');
  const [errors, setErrors] = useState({});

  // Validate form inputs
  const validateForm = () => {
    let formErrors = {};
    if (!title) formErrors.title = 'Title is required.';
    if (!ingredients) formErrors.ingredients = 'Ingredients are required.';
    if (!preparation) formErrors.preparation = 'Preparation steps are required.';
    if (ingredients.split('\n').length < 2) formErrors.ingredients = 'Please list at least two ingredients.';

    return formErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // Here you can post the form data to an API or store it locally
      console.log('Form submitted:', { title, ingredients, preparation });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-semibold">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-lg font-semibold">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="List ingredients (one per line)"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div>
          <label htmlFor="preparation" className="block text-lg font-semibold">Preparation Steps</label>
          <textarea
            id="preparation"
            value={preparation}
            onChange={(e) => setPreparation(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Describe the preparation steps"
          />
          {errors.preparation && <p className="text-red-500 text-sm">{errors.preparation}</p>}
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
