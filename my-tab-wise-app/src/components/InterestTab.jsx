import React from 'react'

const InterestTab = ({ formData, setFormData, errors }) => {
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        const updatedInterests = checked
          ? [...formData.interests, name]
          : formData.interests.filter((interest) => interest !== name);
        setFormData({ ...formData, interests: updatedInterests });
      };
    
  return (
    <div>
      <label>Interests</label>
      <div>
        <label>
          <input
            type="checkbox"
            name="Reading"
            checked={formData.interests.includes("Reading")}
            onChange={handleCheckboxChange}
          />
          Reading
        </label>
        <label>
          <input
            type="checkbox"
            name="Traveling"
            checked={formData.interests.includes("Traveling")}
            onChange={handleCheckboxChange}
          />
          Traveling
        </label>
        <label>
          <input
            type="checkbox"
            name="Coding"
            checked={formData.interests.includes("Coding")}
            onChange={handleCheckboxChange}
          />
          Coding
        </label>
      </div>
      {errors.interests && <p style={{ color: 'red' }}>{errors.interests}</p>}
    </div>
  )
}
export default InterestTab