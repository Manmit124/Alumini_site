// components/WorkExperienceForm.js

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const WorkExperienceForm = ({ onSave }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    position: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(formData);
    setFormData({
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
    });
  };

  return (
    <div>
      <h2 className=' text-slate-200'>Add Work Experience</h2>
      <div className=' flex flex-col gap-2 '>
        <Input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company Name"
        />
        <Input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          placeholder="Position"
        />
        <Input
          type="text"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          placeholder="Start Date"
        />
        <Input
          type="text"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          placeholder="End Date"
        />
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
