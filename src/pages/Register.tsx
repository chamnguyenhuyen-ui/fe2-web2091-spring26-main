import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useUserStore } from '../stores/useUserStore';

export const Register = () => {
  const login = useUserStore((state) => state.login);
  const { register, handleSubmit, reset } = useForm();

  const mutation = useMutation({
    // mutationFn: Nhận data từ form và đẩy lên server
    mutationFn: async (newUser: any) => {
      const response = await axios.post('http://localhost:3000/register', newUser);
      return response.data;
    },
    onSuccess: (data) => {
      alert('Đăng ký thành công!');
      // data trả về thường là { user: {...}, accessToken: "..." } 
      // hoặc chỉ là object user tùy server. Ở đây mình lấy data.user
      login(data.user || data); 
      reset(); // Xóa sạch form sau khi đăng ký
    },
    onError: (error: any) => {
      alert('Lỗi: ' + (error.response?.data || 'Không thể kết nối server'));
    }
  });

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Đăng ký tài khoản</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input {...register('username')} placeholder="Tên đăng nhập" required />
        <input {...register('email')} placeholder="Email" type="email" required />
        <input {...register('password')} placeholder="Mật khẩu" type="password" required />
        
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Đang xử lý...' : 'Đăng ký'}
        </button>
      </form>
    </div>
  );
};