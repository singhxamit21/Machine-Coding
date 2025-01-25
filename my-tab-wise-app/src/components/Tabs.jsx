import React, { useState } from 'react';
import ProfileTab from './ProfileTab';

import SettingsTab from './SettingsTab';
import InterestTab from './InterestTab';

const Tabs = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        interests: [],
        notificationPreference: "email",
        country: "",
    });
    const [errors, setErrors] = useState({});

    const tabs = [
        { name: "Profile", component: ProfileTab },
        { name: "Interest", component: InterestTab },
        { name: "Settings", component: SettingsTab },
    ];

    const handleValidation = () => {
        const newErrors = {};
        if (currentTab === 0) {
            if (!formData.name) newErrors.name = "Name is required.";
            if (!formData.age || isNaN(formData.age)) newErrors.age = "Valid age is required.";
            if (!formData.email || !/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) newErrors.email = "Valid email is required.";
            if (!formData.country) newErrors.country = "Please select a country.";
        }

        if (currentTab === 1) {
            if (formData.interests.length === 0) newErrors.interests = "Select at least one interest.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (handleValidation()) {
            setCurrentTab((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setCurrentTab((prev) => prev - 1);
    };

    const handleSubmit = () => {
        if (handleValidation()) {
            alert("Form submitted successfully!\n" + JSON.stringify(formData, null, 2));
        }
    };

    const renderCurrentTab = () => {
        const CurrentTabComponent = tabs[currentTab].component;
        return (
            <CurrentTabComponent formData={formData} setFormData={setFormData} errors={errors} />
        );
    };

    return (
        <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-around", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        style={{ fontWeight: currentTab === index ? "bold" : "normal" }}
                        onClick={() => setCurrentTab(index)}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {renderCurrentTab()}

            <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
                {currentTab > 0 && <button onClick={handleBack}>Back</button>}
                {currentTab < tabs.length - 1 ? (
                    <button onClick={handleNext}>Next</button>
                ) : (
                    <button onClick={handleSubmit}>Submit</button>
                )}
            </div>
        </div>
    );
};

export default Tabs