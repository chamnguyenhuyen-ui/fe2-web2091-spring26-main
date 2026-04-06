import { useMutation, useQueryClient } from '@tanstack/react-query';

const updateStory = async (data: any) => {
  const response = await fetch(`http://localhost:3000/stories/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data), 
  });

  return response.json();
};

export const useUpdateStory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateStory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stories'] });
      
      alert("Sửa truyện thành công rồi!");
    }
  });
};