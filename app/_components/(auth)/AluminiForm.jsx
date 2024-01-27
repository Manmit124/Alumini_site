"use client"

import React, { useState } from 'react';

const AlumniForm = () => {
  // State variables to hold form data
  const [name, setName] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [major, setMajor] = useState('');
  const [degree, setDegree] = useState('');
  const [university, setUniversity] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [comments, setComments] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions like sending data to a server here
    // For now, let's just log the data
    console.log({
      name,
      gradYear,
      email,
      phoneNumber,
      major,
      degree,
      university,
      workExperience,
      skills,
      comments
    });
    // Reset form fields after submission
    setName('');
    setGradYear('');
    setEmail('');
    setPhoneNumber('');
    setMajor('');
    setDegree('');
    setUniversity('');
    setWorkExperience('');
    setSkills('');
    setComments('');
  };

  return (
    <div>
      <h2>Alumni Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Graduation Year:</label>
          <input
            type="text"
            value={gradYear}
            onChange={(e) => setGradYear(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Major:</label>
          <input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
          />
        </div>
        <div>
          <label>Degree:</label>
          <input
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>
        <div>
          <label>University:</label>
          <input
            type="text"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
        </div>
        <div>
          <label>Work Experience:</label>
          <textarea
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)}
          />
        </div>
        <div>
          <label>Skills:</label>
          <textarea
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
        <div>
          <label>Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AlumniForm;
