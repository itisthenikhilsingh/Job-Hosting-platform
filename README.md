# Web Hiring Platform Application

## Objective
This project is a fully functional, user-friendly React application designed to streamline the hiring process. It allows administrators to manage job postings, track candidate applications, and create job-specific assessments. Through this platform, admins can post jobs, view candidate details, and assign custom assessments for open positions.

## Features & Requirements

### 1. Dashboard for Managing Job Postings
- *Job Management Page*: Provides a page for administrators to monitor and edit job postings.
- *Job Listings*: Each job posting displays:
  - *Job Title*
  - *Job Description*
  - *Number of Candidates Applied*
- *Admin Actions*: Admins can add, edit, or delete job postings as needed.

### 2. Candidate Tracking & Details Page
- *Candidate List*: Clicking on a job posting shows a list of candidates who have applied, including:
  - *Candidate Name*
  - *Resume Link* (upload/download functionality)
  - *Application Date*
  - *Application Status* (e.g., "Under Review", "Interview Scheduled", etc.)
- *Candidate Details*: Clicking on a candidate's name opens a detailed view with:
  - *Profile Information*: Name, email, contact details, skills, and experience
  - *Resume Preview* (if possible) or download link
  - *Status Update Option* for application tracking

### 3. Job-Specific Test/Assessment Creation
- *Assessment Page*: Admins can create unique assessments for each job, with functionalities to:
  - *Select a Job* from a dropdown list
  - *Create Multiple-Choice Questions* for each job
  - *Edit Questions and Answers*
- *Distinct Assessments*: Each job has a unique assessment, ensuring that no two jobs share the same test.

### 4. User Interface & User Experience
- *Responsive Design*: The application is fully responsive, optimized for both desktop and mobile users.
- *Intuitive UI*: Built with user-friendliness and a clean, organized layout in mind.
- *State Management*: Uses Redux to handle app performance and data efficiently.
- *Routing*: Uses React Router for easy navigation across different sections (Job Postings, Candidates, Assessments).
- *UI Library*: Uses Material-UI for a consistent and professional interface.

### 5. Data Handling
- *Data Persistence*: Although persistence isn't mandatory, local storage or mock APIs can simulate data storage. Optionally, a basic backend can be implemented for actual data handling.

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher recommended)
- NPM package manager

## How to Run the Application

### 1. Run the React Application 

First step to clone the repository then

```bash
# Install frontend dependencies
npm install

# Start the frontend development server
npm start

# Install json-server globally
npm install -g json-server

# Start json-server and watch for changes in the index.json file
json-server --watch index.json --port 5000


Vercel link : (live hosting) 
https://job-hosting-platform-plum.vercel.app/
