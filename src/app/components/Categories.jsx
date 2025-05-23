"use client";

const categoryList = ["beauty", "fragrances", "furniture", "groceries"];

const Categories = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="w-[240px] bg-white p-4 border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-black mb-2">Sort by category</h1>
      <select
        value={selectedCategory || ""}
        onChange={(e) => onSelectCategory(e.target.value || null)}
        className="w-full p-2 bg-gradient-to-br from-purple-700/80 to-red-500/80 text-white rounded-md cursor-pointer"
      >
        <option className="text-black bg-white" value="">All categories</option>
        {categoryList.map((category) => (
          <option className="text-black bg-white" key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;

