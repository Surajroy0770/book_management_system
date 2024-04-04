import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from 'axios';

export const Delete = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const DeleteData = async () => {
            try {
                const response = await axios.delete(`http://localhost:8000/api/delete/book/${id}`, {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" }
                });
                toast.success(response.data.message);
                navigate('/books');
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
        DeleteData();
    }, []);

    return null;
}
