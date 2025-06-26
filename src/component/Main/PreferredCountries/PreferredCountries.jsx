import { useState } from "react";
import { Trash2 } from "lucide-react";

const PreferredCountries = () => {
  const [countryInput, setCountryInput] = useState("");
  const [countries, setCountries] = useState([
    "Ethiopia",
    "USA",
    "Canada",
    "Australia",
    "Saudi Arabia",
    "UAE",
    "Norway",
    "Israel",
    "Italy",
    "Germany",
    "Ethiopia",
    "USA",
    "Canada",
    "Australia",
    "Saudi Arabia",
    "UAE",
    "Norway",
    "Israel",
    "Italy",
    "Germany",
    "Ethiopia",
    "USA",
    "Canada",
    "Australia",
    "Saudi Arabia",
    "UAE",
    "Norway",
    "Israel",
    "Italy",
    "Germany",
    "Ethiopia",
    "USA",
    "Canada",
    "Australia",
    "Saudi Arabia",
    "UAE",
    "Norway",
    "Israel",
    "Italy",
    "Germany",
    "Ethiopia",
    "USA",
    "Canada",
    "Australia",
    "Saudi Arabia",
    "UAE",
    "Norway",
    "Israel",
    "Italy",
    "Germany",
    "Ethiopia",
    "USA",
    "Canada",
    "Australia",
    "Saudi Arabia",
    "UAE",
    "Norway",
    "Israel",
    "Italy",
    "Germany",
    "Ethiopia",
    "USA",
    "Canada",
    "Australia",
    "Saudi Arabia",
    "UAE",
    "Norway",
    "Israel",
    "Italy",
    "Germany",
    "Ethiopia",
    "USA",
    "Canada",
    "Australia",
    "Saudi Arabia",
    "UAE",
    "Norway",
    "Israel",
    "Italy",
    "Germany",
    "Ethiopia",
    "USA",
    "Canada",
    "Australia",
    "Saudi Arabia",
    "UAE",
    "Norway",
    "Israel",
    "Italy",
    "Germany",
    "Ethiopia",
    "USA",
    "Canada",
    "Australia",
    "Saudi Arabia",
    "UAE",
    "Norway",
    "Israel",
    "Italy",
    "Germany",
    "Ethiopia",
    "USA",
    "Canada",
    "Australia",
    "Saudi Arabia",
    "UAE",
    "Norway",
    "Israel",
    "Italy",
    "Germany",
  ]);

  const handleAddCountry = () => {
    if (countryInput.trim() && !countries.includes(countryInput.trim())) {
      setCountries([...countries, countryInput.trim()]);
      setCountryInput("");
    } else if (countries.includes(countryInput.trim())) {
      alert("Country already exists!");
    }
  };

  const handleRemoveCountry = (index) => {
    setCountries(countries.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddCountry();
    }
  };

  return (
    <div className="w-full p-6">
      {/* Header */}
      <h1 className="text-xl font-medium text-gray-800 mb-6">
        Preferred Countries Editor
      </h1>

      {/* Add Country Section */}
      <div className="bg-white rounded-lg p-6 mb-6 max-w-sm">
        <h2 className="text-lg font-medium text-gray-800 mb-4">Add Country</h2>

        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">Country</label>
          <input
            type="text"
            value={countryInput}
            onChange={(e) => setCountryInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter country name"
          />
        </div>

        <button
          onClick={handleAddCountry}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-medium py-2 px-4 rounded transition-colors"
        >
          Add
        </button>
      </div>

      {/* Already Added Countries Section */}
      <div>
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          Already Added Countries
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-10 gap-3">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded p-3 flex items-center justify-between hover:shadow-sm transition-shadow"
            >
              <span className="text-sm text-gray-700 truncate flex-1 mr-2">
                {country}
              </span>
              <button
                onClick={() => handleRemoveCountry(index)}
                className="text-red-500 hover:text-red-700 transition-colors flex-shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreferredCountries;
