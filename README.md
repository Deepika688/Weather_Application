
# Weather Application

It shows the weather conditions of every city in the world. Create a user-friendly weather application that provides real-time
weather forecasts and information. Users can input their location or allow the app to access their GPS data for accurate weather
updates. The app will display current conditions, hourly and daily forecasts, and relevant weather details, ensuring a seamless and
informative weather experience. Technology Used: HTML, CSS, JavaScript 


#API Reference

The weather application uses the OpenWeatherMap API to fetch weather information. Below are the details of the endpoints used:

#Base URL
```http
  http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}

```
Get Current Weather Data
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|q | `string` | Required. City name (e.g., q=London) |
|lat | `string` | Latitude for location-based search (optional) |
|lon | `string` | Longitude for location-based search (optional) |
|applid | `string` | Required.  OpenWeatherMap API key|
|units | `string` | Units of measurement (e.g., metric for Celsius)|

Get Hourly Forecast

```http
 GET /forecast

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `q`      | `string` | Required. City name (e.g., q=Paris)|
| `appid`      | `string` |Required.  OpenWeatherMap API key|
| `units`      | `string` | Units of measurement (e.g., imperial for Fahrenheit) |

Sample Response

{
  "weather": [
    {
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "main": {
    "temp": 15.0,
    "humidity": 72
  },
  "wind": {
    "speed": 3.5
  }
}



#Authors

Deepika Solanki: Developer and maintainer. 
- [@GitHub Profile](https://github.com/Deepika688/Weather_Application)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
|Primary Color | [#1E90FF] (Sky Blue) |
|Background Color | ![#F0F8FF](Light Blue) |
|Text Color| [#333333](Dark Gray) |



## Demo

https://www.veed.io/view/efd184f7-82e1-44e0-ab44-db22f3dfb5b3?panel=share


## Documentation

Weather_Application/
├── public/
│   ├── index.html
│   ├── images/
│   │   └── (image files)
│   └── video/
│       └── (demo video file)
├── src/
│   ├── components/
│   │   ├── WeatherCard.js
│   │   └── SearchBar.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md


File Descriptions : 

public/index.html: The main HTML file that loads the application.
public/images/: Contains images used in the application (e.g., weather icons).
public/video/: Contains the demo video of the application.
src/components/: Contains React components like WeatherCard and SearchBar for rendering weather data and search functionality.
src/App.js: The main application component that manages state and renders child components.
src/index.js: The entry point for the React application, rendering the App component.
src/styles.css: Contains the CSS styles for the application.


API Interaction: 

The application interacts with the OpenWeatherMap API to fetch weather data. Here's how it works:

User Input: The user enters a city name in the SearchBar component.
API Request: Upon submission, the application constructs the API URL using the entered city name and the user's 
API key. The request format is:
http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}



Fetching Data: The application uses the Fetch API to send a GET request to the OpenWeatherMap endpoint.

Processing Response: On receiving the response, the application extracts relevant data such as temperature, humidity, and weather conditions.

Rendering Data: The fetched data is passed to the WeatherCard component, which displays the weather information in a user-friendly format.


Data Handling :

The application maintains state using React's useState and useEffect hooks. When the user submits a city name, a new API request is made, and the component state is updated with the new weather data.


## FAQ

#### How do I get an API key?

Sign up at OpenWeatherMap

#### Why isn’t my location loading? 

Ensure GPS permission is granted in your browser settings.



## Features

- Real-time Weather Data Retrieval: Fetches the latest weather information for any city.
- Search Functionality by City Name: Allows users to input a city name for specific weather data.
- GPS-Based Location Detection: Automatically detects the user's location for accurate weather updates.
- Comprehensive Weather Display: Shows current weather conditions, temperature, humidity, and wind speed.
- Voice Feedback: Provides weather updates in both male and female voices, enhancing accessibility.
- Weather Video Display: Visual representation of weather conditions through engaging video content.



## 🛠 Skills
- Languages: Java, JavaScript
- Web Technologies: HTML, CSS, React

- Tools: Git, GitHub, Visual Studio Code

## Installation

Clone the repository:

```bash
 git clone https://github.com/Deepika688/Weather_Application.git

```


 Navigate to the project directory and install dependencies using:
 ```bash
 npm install

```


Start the application:
```bash
 npm Start

```


 
## Optimizations

- Improved performance by caching API responses.
- Optimized for mobile devices using responsive design principles.
## Tech Stack

**Client:**
- HTML: Markup language for structuring web pages. 

- CSS: Stylesheet language for designing the layout and appearance of web pages.

- JavaScript: For adding interactivity and handling client-side logic.

- Bootstrap: CSS framework for responsive web design and pre-built components.

**Server:** 
- Node.js: A JavaScript runtime built on Chrome's V8 engine, used to build the backend API and handle server-side logic.

-Express.js: A web application framework for Node.js, used to simplify server-side routing and middleware handling.


## Other Common Github Profile Sections
👩‍💻 I'm currently working on...
- Expanding my real-time weather monitoring application and adding new features.
- Improving a quiz application project with advanced JavaScript techniques.

🧠 I'm currently learning...
- Cloud services for data engineering like Google Cloud Platform (GCP) and AWS.
- Optimizing database queries and performance tuning in SQL.

👯‍♀️ I'm looking to collaborate on...
- Open-source projects related to real-time data processing and streaming.
- Web development projects that involve JavaScript and full-stack development.

🤔 I'm looking for help with...
- Implementing machine learning models in real-time data processing systems.
- Fine-tuning cloud architecture for scalability and cost optimization.
💬 Ask me about...
- Java, Data Structures & Algorithms, and Object-Oriented Programming.
- How to build a real-time weather monitoring system.
- My experience with SQL databases and web development (HTML, CSS, JavaScript).

📫 How to reach me...
- Email: d.4.deepikasolanki@gmail.com
- LinkedIn: https://www.linkedin.com/in/deepika-solanki-b9b20b247/
😄 Pronouns...
- She/Her

⚡️ Fun fact...
- I love coding challenges and have solved over 900 problems across platforms like GeeksforGeeks, HackerRank, CodeChef, and LeetCode!


## Tech Stack

**Client:**
- HTML: Markup language for structuring web pages. 

- CSS: Stylesheet language for designing the layout and appearance of web pages.

- JavaScript: For adding interactivity and handling client-side logic.

- Bootstrap: CSS framework for responsive web design and pre-built components.

**Server:** 
- Node.js: A JavaScript runtime built on Chrome's V8 engine, used to build the backend API and handle server-side logic.

- Express.js: A web application framework for Node.js, used to simplify server-side routing and middleware handling.


# Hi, I'm Deepika! 👋


## Lessons Learned

During the development of the Weather Monitoring Application, I learned a lot about building and managing real-time data processing systems. Integrating technologies like Node.js, Kafka, Flink, and Cassandra was a significant challenge, but it helped me strengthen my understanding of distributed systems and stream processing. I particularly enjoyed working with Apache Kafka for real-time data ingestion and configuring Flink to handle stream processing, which taught me the intricacies of event-time processing. Implementing a responsive UI using HTML, CSS, JavaScript, and Bootstrap enhanced my front-end skills, and ensuring scalability with Cassandra deepened my knowledge of NoSQL databases. Debugging issues with data ingestion and processing required persistence, and using monitoring tools like Grafana for visualization helped me improve performance and troubleshooting. Overall, this project was a great learning experience in both back-end and front-end development, and it strengthened my ability to build scalable, real-time applications.


## Roadmap

- Phase 1: Planning and Requirements Gathering

Define Project Goals:

Identify the main features and objectives (e.g., real-time weather data monitoring, visualization).
Understand the technologies required (Node.js, Kafka, Flink, Cassandra, etc.).
Research and Select Tools:

Choose the tech stack: Frontend (HTML, CSS, JavaScript, Bootstrap), Backend (Node.js, Express.js), Streaming (Kafka, Flink), Database (Cassandra), Visualization (Grafana).
Set up GitHub Repository:

Create a GitHub repository for version control and collaboration.
Define the project structure and plan for future updates. 

- Initial Setup and Backend Development

Set Up Backend Server (Node.js + Express):

Create a Node.js project.
Set up basic routes and API endpoints for data ingestion and weather monitoring.
Implement Kafka for Data Ingestion:

Set up Apache Kafka for streaming real-time weather data.
Create producers to collect data and send it to the Kafka topics.
Develop Data Processing with Flink:

Configure Apache Flink for stream processing.
Implement rollups and aggregates (e.g., calculating average temperature, wind speed, etc.).
Set Up Cassandra for Data Storage:

Configure Cassandra to store processed weather data.
Ensure the database can scale to handle real-time data.

- Phase 3: Frontend Development

Design the User Interface:

Use HTML, CSS, JavaScript, and Bootstrap to design a responsive and user-friendly interface.
Implement real-time data visualization components (charts, tables, etc.).
API Integration:

Connect the frontend to the backend APIs.
Ensure weather data is fetched and displayed dynamically.
Implement User Interactions:

Add functionality for users to filter data (e.g., weather by region, date).

- Phase 4: Visualization and Monitoring
Set Up Grafana for Data Visualization:

Connect Grafana to the Cassandra database.
Create dashboards to visualize real-time weather data (e.g., temperature trends, humidity levels).
Configure Alerts and Monitoring:

Set up alerts in Grafana to notify users of significant weather events.

- Phase 5: Testing and Optimization
Unit and Integration Testing:

Write tests for backend API routes, Kafka ingestion, and Flink processing.
Test frontend components and ensure data visualization works as expected.
Performance Optimization:

Analyze the performance of Kafka, Flink, and Cassandra to ensure scalability.
Fine-tune the UI to improve load times and responsiveness.
Debugging and Troubleshooting:

Identify and resolve issues (e.g., data ingestion errors, visualization problems).
- Phase 6: Deployment and Maintenance
Containerize the Application:

Use Docker to containerize the Node.js backend, Kafka, Flink, Cassandra, and Grafana.
Create a docker-compose.yml file to manage all containers.
Deploy the Application:

Deploy the application on cloud platforms (e.g., AWS, GCP, Azure) or local servers.
Monitor and Update:

Continuously monitor system performance and logs.
Roll out updates and new features as needed.

- Phase 7: Documentation and Future Enhancements
Create Comprehensive Documentation:

Write detailed instructions in the README (project setup, build, running instructions).
Document any technical decisions and challenges faced.
Future Enhancements:

Add new features like more detailed weather forecasts, enhanced data visualization, or user notifications for severe weather events.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Deepika688/Weather_Application.git

```

Go to the project directory

```bash
  cd Weather_Application

```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Run Application

This command will launch the server on port 3000.

#Access the Application

- Open your web browser.
- Go to http://localhost:3000 to view the application.

- Open your browser and navigate to http://localhost:3000.



## Conclusion

The Weather Monitoring Application was a great learning experience in building a full-stack application from scratch. It not only provides real-time weather updates but also incorporates features like voice feedback and mobile responsiveness, ensuring a smooth and accessible user experience. This project has helped me gain valuable skills in web development, API integration, and scalable design.

