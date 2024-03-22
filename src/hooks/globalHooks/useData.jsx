import React from 'react';
import secureApi from '../../api/secureApi';
import { useQuery } from '@tanstack/react-query';

const useData = (url) => {
    const { refetch, data: responseData = [], isLoading, error } = useQuery({
        queryKey: ['responseData'],
        queryFn: async () => {
            const response = await secureApi.get(url);
            return response; // Assuming response.data contains the actual data
        },
    });

    return { responseData, refetch, isLoading, error };
};

export default useData;
