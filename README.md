# Northern Whisper

Northern Whisper is a tech-driven newsletter designed to keep international students and work permit holders in Canada up-to-date with the latest immigration policies, changes, and essential updates. Our mission is to bridge the information gap by providing timely, accurate, and automated updates, ensuring you never miss out on important information.

## Features

- **Timely Updates**: Get the latest immigration and policy news directly in your inbox.
- **Accurate Information**: Reliable and well-researched updates that matter to you.
- **Tech-Driven**: Leveraging advanced technology to automate and streamline the newsletter process.
- **User-Friendly Interface**: Simple and intuitive design for easy navigation.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- Git

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/northern-whisper.git
   cd northern-whisper
   ```

2. **Install Dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add the necessary environment variables. Here is an example:

   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the Application:**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using yarn:

   ```bash
   yarn dev
   ```

   The application will start on `http://localhost:3000`.

## Deployment

To deploy the application, follow these steps:

1. **Build the Application:**

   Using npm:

   ```bash
   npm run build
   ```

   Or using yarn:

   ```bash
   yarn build
   ```

2. **Start the Application:**

   Using npm:

   ```bash
   npm start
   ```

   Or using yarn:

   ```bash
   yarn start
   ```

## Contributing

We welcome contributions to Northern Whisper! To contribute, please follow these steps:

1. **Fork the Repository:**

   Click the "Fork" button at the top right of this repository.

2. **Clone Your Fork:**

   ```bash
   git clone https://github.com/your-username/northern-whisper.git
   cd northern-whisper
   ```

3. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes:**

   Implement your feature or bug fix.

5. **Commit Your Changes:**

   ```bash
   git add .
   git commit -m "Add your commit message here"
   ```

6. **Push to Your Fork:**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request:**

   Go to the original repository and open a pull request with a description of your changes.

## Contact

For any inquiries, please contact us at [hello@northernwhisper.tech](mailto:hello@northernwhisper.tech).
