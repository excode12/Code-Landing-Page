# CODE - Consortium of Digital Engineers

This repository contains the source code for the official website of the Consortium of Digital Engineers (CODE), a digital agency specializing in web development, product design, and creating engaging digital experiences.

## Project Overview

This is a static, single-page website designed to showcase the services, projects, and team behind CODE. The site is built with HTML, CSS, and vanilla JavaScript, and it features a clean, modern design with smooth animations and interactive elements.

### Features

*   **Responsive Design**: The website is fully responsive and optimized for various screen sizes, from mobile devices to desktops.
*   **Animated Elements**: The site uses the AOS (Animate On Scroll) library to animate elements as they scroll into view.
*   **Interactive UI Components**:
    *   A hamburger menu for easy navigation on mobile devices.
    *   An accordion-style FAQ section.
    *   An animated, shuffling carousel for client testimonials.

## Setup and Usage

To view the website locally, you can follow these simple steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate to the project directory**:
    ```bash
    cd your-repo-name
    ```
3.  **Open `index.html` in your browser**:
    You can open the `index.html` file directly in your web browser to view the site. Alternatively, you can use a local web server for a more realistic development environment. If you have Python installed, you can run a simple server with the following command:
    ```bash
    python -m http.server
    ```
    Then, open your browser and go to `http://localhost:8000`.

## File Structure

The repository is organized as follows:

```
.
├── Assets/             # Contains all static assets like images, icons, and logos.
├── app.js              # The main JavaScript file for interactive functionalities.
├── index.html          # The main HTML file for the website's content and structure.
├── style.css           # The main CSS file for styling the website.
└── README.md           # This file, providing an overview of the project.
```

### Key Files

*   **`index.html`**: The entry point of the website, containing the HTML structure of all sections.
*   **`style.css`**: The stylesheet responsible for the website's visual appearance, including layout, colors, and fonts.
*   **`app.js`**: This file contains the JavaScript code that powers the interactive features of the site. The code is well-documented with JSDoc comments.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
