# To-Do Application

This is a simple To-Do application built with React and Bootstrap. The app allows users to add, search, toggle, and delete tasks. All tasks are stored in localStorage, ensuring they persist even after refreshing the browser.

## Features

- **Add Todos**: Create new to-dos with a title, description, and optional labels.
- **Search Todos**: Search for to-dos based on labels.
- **Toggle Todos**: Mark to-dos as completed or not completed.
- **Delete Todos**: Remove unwanted to-dos.
- **Persistent Storage**: The app uses `localStorage` to store the to-dos, so your data remains even after refreshing or closing the app.

## Technologies Used

- **React.js**: The core library used to build the application.
- **Bootstrap**: Used for styling the form and UI components.
- **UUID**: Used for generating unique IDs for each to-do item.
- **localStorage**: Used for persisting to-dos across page reloads.

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/masudiharikrishna/todos-application.git
    cd todo-application
    ```

2. **Install dependencies**:

    Ensure you have [Node.js](https://nodejs.org/) installed. Then, in the project directory, run:

    ```bash
    npm install
    ```

3. **Start the development server**:

    Run the following command to start the React development server:

    ```bash
    npm start
    ```

    This will launch the app in your default browser at `http://localhost:3000`.

## Usage

### Adding a Todo

- Fill out the **Title**, **Description**, and **Labels** in the form.
- Click **Add Todo** to create a new task.
- If the Title or Description fields are empty, an error message will be shown.

### Searching Todos

- Use the search bar to filter todos by their labels. The search is case-insensitive.

### Toggling a Todo

- Click on a to-do item to toggle its completed status.

### Deleting a Todo

- Click the **Delete** button next to a to-do item to remove it from the list.

### Persistent Storage

- All to-do items are saved in the browser's `localStorage`. This ensures that the to-dos persist even after the page is refreshed.

## Code Explanation

### State Management

The main state for the application is managed in the `Homepage` component. The state includes:

- `title`: The title of the to-do item.
- `text`: The description of the to-do item.
- `label`: The labels associated with the to-do item.
- `todoList`: The list of all to-dos.

### Components

- `Homepage`: The main container for the application logic and rendering.
- `TodoItem`: A child component responsible for displaying individual to-do items and handling toggle and delete actions.

### Adding Todos

The `addtodo` method creates a new to-do item if both the title and description are filled. If not, an error message is displayed. The new item is pushed into the `todoList` state.

### Search Functionality

The `filteredTodos` variable filters the `todoList` based on the search input. It checks if any of the labels in a to-do item match the search query.

### Local Storage

The `componentDidMount` method retrieves the to-dos from `localStorage`, and `componentDidUpdate` saves the updated `todoList` to `localStorage` whenever there is a change.

## Future Enhancements

Some possible improvements could include:

- Adding more features like due dates and priority levels for each to-do.
- Sorting to-dos based on completion, priority, or due date.
- Adding user authentication and cloud storage for syncing tasks across devices.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

This `README.md` gives a comprehensive overview of your application, including its features, installation instructions, usage, and code structure.