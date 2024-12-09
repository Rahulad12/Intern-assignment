# Multi-Step OTP Verification

Multi-Step OTP Verification is a web-based application designed for user registration and business verification through a multi-step form process with OTP verification. This project aims to provide a smooth user experience with features like a dynamic progress bar, responsive design, and error handling.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [What is Static OTP?](#what-is-static-otp)
- [License](#license)

## Features
- **Multi-Step Form**: Guide users through a step-by-step registration process.
- **OTP Verification**: Verify user identity using a One-Time Password.
- **Dynamic Progress Bar**: Track user progress through the form.
- **Responsive Layout**: Works seamlessly on desktop and mobile devices.
- **Form Validation**: Includes validation and error handling for a better user experience.
- **Customizable**: Adaptable for various business verification and onboarding processes.

## Tech Stack
- **Frontend**: React.js
- **Styling**: CSS Grid, Tailwind CSS
- **Logic and Interactivity**: JavaScript (ES6)
- **Routing**: React Router
- **Package Manager**: npm

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Steps to run the project locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rahulad12/Intern-assignment.git
   cd Intern-assignment
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the project:**
   ```bash
   npm start
   ```
4. **Access the application:**
   Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

## Usage

1. Start the application and follow the on-screen instructions to complete the multi-step form.
2. Use the OTP `123456` for verification during the test process.
3. Navigate through the form using the **Next** and **Previous** buttons.

## What is Static OTP?

**Static OTP (One-Time Password)** refers to a fixed, pre-set code used for authentication. Unlike dynamic OTPs that change with each session, static OTPs remain constant. In this project, the static OTP `123456` is used to simulate user verification. This approach is useful for testing purposes but is less secure compared to dynamic OTPs.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

