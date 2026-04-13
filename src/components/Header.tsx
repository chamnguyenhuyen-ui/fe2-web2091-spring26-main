import { useUserStore } from '../stores/useUserStore';

export const Header = () => {
  // Lấy user và hàm logout từ Zustand store
  const { user, logout } = useUserStore();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f4f4f4' }}>
      <h3>My App</h3>
      
      <div>
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Email: <strong>{user.email}</strong></span>
            <span style={{ color: 'green' }}>(Đã đăng nhập)</span>
            <button onClick={() => {
              if(window.confirm('Bạn muốn đăng xuất?')) logout();
            }}>
              Đăng xuất
            </button>
          </div>
        ) : (
          <span style={{ color: 'red' }}>Chưa đăng nhập</span>
        )}
      </div>
    </nav>
  );
};