import React from 'react'

const SettingsTab = ({ formData, setFormData }) => {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
  return (
    <div>
    <label>Notification Preference</label>
    <div>
      <label>
        <input
          type="radio"
          name="notificationPreference"
          value="email"
          checked={formData.notificationPreference === "email"}
          onChange={handleInputChange}
        />
        Email
      </label>
      <label>
        <input
          type="radio"
          name="notificationPreference"
          value="sms"
          checked={formData.notificationPreference === "sms"}
          onChange={handleInputChange}
        />
        SMS
      </label>
      <label>
        <input
          type="radio"
          name="notificationPreference"
          value="none"
          checked={formData.notificationPreference === "none"}
          onChange={handleInputChange}
        />
        None
      </label>
    </div>
  </div>
  )
}

export default SettingsTab