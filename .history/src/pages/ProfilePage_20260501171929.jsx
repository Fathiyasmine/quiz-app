import { useEffect, useState } from "react";
import HeadProfile from "../components/profile/HeadProfil";
import AchievementProfil from "../components/profile/AchievementProfil";
import api from "../api";
import { useSettings } from "../context/SettingsContext";

const ProfilePage = () => {
  const { t, darkMode } = useSettings();
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
    // Mobile : stack vertical | Desktop : 2 colonnes
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 md:p-8">
      {/* Header — pleine largeur sur les deux */}
      <div className="md:rounded-3xl overflow-hidden md:shadow-sm mb-6">
        <HeadProfile stats={stats} />
      </div>

      {/* Contenu — 1 col mobile, 2 col desktop */}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-3">
          <AchievementProfil stats={stats} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
