import { Star, AccessTime, Article } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const QuizCard=({quiz})=>{
    const navigate=useNavigate();
    return(
        <div onClick={()=>navigate(`/quiz/${quiz.id}`)}
        className="bg-white rounded-lg border-blue-400 p-4 mb-4 cursor-pointer hover:shadow-lg transition"
    )
}