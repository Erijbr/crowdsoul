// // import {MantineProvider} from "@mantine/core";
// // import {Notifications} from "@mantine/notifications";
// // import {customTheme} from "./theme";
// // import MontserratFont from "./fonts/MontserratFont";

// // import './App.css'
// // import {RouterProvider} from "react-router-dom";
// // import router from "./routes";

// // function App() {
// //     return (
// //         <>
// //             <MantineProvider theme={customTheme}>
// //                 <RouterProvider router={router}/>
// //                 <MontserratFont/>
// //                 <Notifications/>
// //             </MantineProvider>
// //         </>
// //     )
// // }

// // export default App

// import { MantineProvider } from "@mantine/core";
// import { Notifications } from "@mantine/notifications";
// import { customTheme } from "./theme";
// import MontserratFont from "./fonts/MontserratFont";
// import { RouterProvider, useNavigate } from "react-router-dom";
// import router from "./routes";

// import './App.css';
// import { useEffect } from "react";

// function AssistanceButton() {
//   const navigate = useNavigate();

//   const goToChatbot = () => {
//     navigate("/chatbot"); // <-- Assure-toi que la route existe
//   };

//   return (
//     <button id="assistance-btn" onClick={goToChatbot}>
//       💬
//     </button>
//   );
// }

// function App() {
//   return (
//     <MantineProvider theme={customTheme}>
//       <RouterProvider router={router} />
//       <MontserratFont />
//       <Notifications />
//       <AssistanceButton /> {/* <-- le bouton est visible sur toutes les pages */}
//     </MantineProvider>
//   );
// }

// export default App;
// import { RouterProvider, useNavigate } from "react-router-dom";

// import { MantineProvider } from "@mantine/core";
// import { Notifications } from "@mantine/notifications";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { customTheme } from "./theme";
// import MontserratFont from "./fonts/MontserratFont";
// import router from "./routes";

// import Home from "./pages/Home";
// import Chatbot from "./pages/Chatbot";
// // Importe d'autres pages si nécessaire

// import './App.css';
// // import { useNavigate } from "react-router-dom";

// // Bouton d'assistance
// function AssistanceButton() {
//   const navigate = useNavigate();

//   const goToChatbot = () => {
//     navigate("/chatbot"); // Assure-toi que cette route est définie
//   };

//   return (
//     <button id="assistance-btn" onClick={goToChatbot}>
//       💬
//     </button>
//   );
// }

// function App() {
//   return (
//     <MantineProvider theme={customTheme}>
//       <BrowserRouter>
//         <MontserratFont />
//         <Notifications />
        
//         <RouterProvider router={router}/>

//         <AssistanceButton /> {/* Le bouton sera visible sur toutes les pages */}
//       </BrowserRouter>
//     </MantineProvider>
//   );
// }

// export default App;
import { RouterProvider, useNavigate } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { customTheme } from "./theme";
import MontserratFont from "./fonts/MontserratFont";
import router from "./routes"; // créé via `createBrowserRouter`
import './App.css';

// Ce bouton sera utilisé dans une route rendue par RouterProvider
// function AssistanceButton() {
//   const navigate = useNavigate();

//   return (
//     <button id="assistance-btn" onClick={() => navigate("/chatbot")}>
//       💬
//     </button>
//   );
// }

function App() {
  return (
    <MantineProvider theme={customTheme}>
      <MontserratFont />
      <Notifications />
      <RouterProvider router={router} />
      {/* ❌ PAS de AssistanceButton ici : il doit être dans les éléments rendus par RouterProvider */}
    </MantineProvider>
  );
}

export default App;
