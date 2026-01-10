import { Star, AccessTime, Article } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const QuizCard=({quiz})=>{
    const navigate=useNavigate();
    return(
        <div onClick={()=>navigate(`/quiz/${quiz.id}`)}
        className="bg-white rounded-lg"
    )
}