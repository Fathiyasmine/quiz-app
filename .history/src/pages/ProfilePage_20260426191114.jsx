import { useEffect, useState } from "react";
import HeadProfile from "../components/profile/HeadProfil";
import AchievementProfil from "../components/profile/AchievementProfil";
import api from "../api";

const ProfilePage = () => {
  const [stats, setStats] = useState({
    totalQuizzes: 0,
    totalPoints: 0,
    avgScore: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get("/results/me");
        const results = response.data;

        const totalQuizzes = results.length;

        const totalPoints = results.reduce((sum, r) => sum + r.score * 10, 0);

        const avgScore =
          totalQuizzes === 0
            ? 0
            : Math.round(
                results.reduce((sum, r) => sum + (r.score / r.total) * 100, 0) /
                  totalQuizzes,
              );

        setStats({ totalQuizzes, totalPoints, avgScore });
      } catch (error) {
        console.error("Erreur stats:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <HeadProfile stats={stats} />
      <AchievementProfil stats={stats} />
    </div>
  );
};

export default ProfilePage;
