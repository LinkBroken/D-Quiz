
!["Banner"](/src/app/banner.PNG)
# d-quiz

`d-quiz` is a trivia application that presents trivia questions as facts rather than as traditional questions. The application fetches trivia data from an API and displays it, making it a unique tool for learning trivia in a more fact-based format.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetches trivia data from an external API.
- Displays trivia data as facts rather than questions.
- Uses Redux for state management.
- Written in React with TypeScript for better development experience and type safety.

## Technologies

- **React**: Front-end library for building user interfaces.
- **TypeScript**: Superset of JavaScript adding static types.
- **Redux Toolkit**: Toolkit for easier Redux setup and usage.
- **RTK Query**: Data fetching library.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or Yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/linkbroken/d-quiz.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd d-quiz
   ```

3. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Create a `.env` file in the root of the project to add your environment variables.** For example:

   ```env
   REACT_APP_API_URL=https://api.example.com/trivia
   ```

5. **Start the development server:**

   ```bash
   npm start
   # or
   yarn start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

After starting the development server, navigate to `http://localhost:3000` in your browser. You will see trivia facts displayed on the page.

### Component Overview

- **`Questions` Component**: Fetches trivia data and displays it. Uses Redux to manage and store trivia facts.

### API Integration

The trivia data is fetched from an API endpoint defined in your `.env` file under the `REACT_APP_API_URL` variable. Ensure this endpoint provides the correct data format expected by the application.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**

   ```bash
   git checkout -b feature/my-new-feature
   ```

3. **Make your changes and commit them:**

   ```bash
   git add .
   git commit -m "Add some feature"
   ```

4. **Push your branch to GitHub:**

   ```bash
   git push origin feature/my-new-feature
   ```

5. **Open a pull request** to the `main` branch of the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify the README to better fit any additional features or specific instructions relevant to your project.