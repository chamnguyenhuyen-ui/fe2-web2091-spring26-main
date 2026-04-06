import { useContext } from "react";
import { UserContext } from "../context/UserContext"; 
import { Button, Avatar, Space } from "antd";

export default function Header() {
  const context = useContext(UserContext);

  if (!context) return null;

  const { user, setUser } = context;
  const handleLogin = () => {
    setUser({
      name: "Huyền Châm",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hcham",
    });
  };

  return (
    <header className="flex justify-between items-center p-4 bg-slate-800 text-white">
      <div className="font-bold text-xl">WEB2091</div>

      <div>
        {user ? (
          <Space size="middle">
            <Avatar src={user.avatar} />
            <span className="font-medium">{user.name}</span>
            <Button danger type="primary" onClick={() => setUser(null)}>
              Logout
            </Button>
          </Space>
        ) : (
          <Button type="primary" onClick={handleLogin}>
            Login giả lập
          </Button>
        )}
      </div>
    </header>
  );
}