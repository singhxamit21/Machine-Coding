import React from 'react'

const ProfileTab = ({ formData, setFormData, errors }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

      <label>Age</label>
      <input
        type="text"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
      />
      {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      <label>Country</label>
      <select
        name="country"
        value={formData.country}
        onChange={handleInputChange}
      >
        <option value="">Select a country</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">UK</option>
        <option value="Australia">Australia</option>
      </select>
      {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
    </div>
  )
}

export default ProfileTab