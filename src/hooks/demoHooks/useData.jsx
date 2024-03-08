import React from 'react';
import secureApi from '../../api/secureApi';
import { useQuery } from '@tanstack/react-query';

const useData = () => {
    const { refetch, data: users = [], isLoading, error } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await secureApi.get(`/users`);
            return response;
        },
    });

    return { users, refetch, isLoading, error };
};

export default useData;