import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
     {
      id: 1,
      text: "delectus aut autem",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "quis ut nam facilis et officia qui",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "fugiat veniam minus",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 4,
      text: "et porro tempora",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 5,
      text: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 6,
      text: "qui ullam ratione quibusdam voluptatem quia omnis",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks();
  //     setTasks(tasksFromServer);
  //   };

  //   getTasks();
  // }, []);

  // fetch tasks
  // const fetchTasks = async () => {
  //   const res = await fetch("http://localhost:5000/tasks");
  //   const data = await res.json();

  //   return data;
  // };

  // const deleteTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: "DELETE",
  //   });
  //   res.status === 200
  //     ? setTasks(tasks.filter((task) => task.id !== id))
  //     : alert("Error Deleting This Task");
  // };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // const toggleReminder = async (id) => {
  //   const taskToToggle = await fetchTasks(id);
  //   const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

  //   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(updTask),
  //   });

  //   const data = await res.json();

  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, reminder: data.reminder } : task
  //     )
  //   );
  // };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (task) => {
    // const res = await fetch("http://localhost:5000/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(task),
    // });

    // const data = await res.json();

    // setTasks([...tasks, data]);

    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                <Header
                  onAdd={() => setShowAddTask(!showAddTask)}
                  showAdd={showAddTask}
                />
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No tasks!"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
          <Footer />
      </div>
    </Router>
  );
};

export default App;
