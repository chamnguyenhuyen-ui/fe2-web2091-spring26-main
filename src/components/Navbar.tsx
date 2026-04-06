// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";
// import { Button, Space } from "antd";

// export default function Navbar() {
//   const context = useContext(UserContext);
//   if (!context) return null;

//   const { user, setUser } = context;

//   return (
//     <nav className="bg-blue-600 text-white shadow-md h-16 flex items-center justify-between px-8">
//       <span className="text-xl font-bold">WEB2091 APP</span>

//       <div className="flex items-center">
//         {user ? (
//           /* Bài 3: Logout - Khi click thì setUser về null */
//           <Space size="middle">
//             <span className="font-medium text-white">Chào, {user.name}</span>
//             <Button size="small" onClick={() => setUser(null)}>
//               Logout
//             </Button>
//           </Space>
//         ) : (
//           /* Bài 2: Login giả lập - Click là cập nhật user ngay lập tức */
//           <Button 
//             ghost 
//             onClick={() => setUser({ name: "Huyền Châm" })}
//           >
//             Login Giả Lập
//           </Button>
//         )}
//       </div>
//     </nav>
//   );
// }