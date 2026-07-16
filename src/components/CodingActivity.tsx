import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink, Flame, Trophy, Code2, GitFork, Star, Users } from "lucide-react";

const GITHUB_USERNAME = "Akshat-Gupta-2005";
const LEETCODE_USERNAME = "Akshat-Gupta-2005";

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalContributions: number;
}

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  totalQuestions: number;
  ranking: number;
  acceptanceRate: number;
}

// Donut chart for LeetCode problem distribution
const DonutChart = ({
  easy,
  medium,
  hard,
  total,
}: {
  easy: number;
  medium: number;
  hard: number;
  total: number;
}) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const easyPct = (easy / total) * 100;
  const mediumPct = (medium / total) * 100;
  const hardPct = (hard / total) * 100;

  const easyLen = (easyPct / 100) * circumference;
  const mediumLen = (mediumPct / 100) * circumference;
  const hardLen = (hardPct / 100) * circumference;

  const easyOffset = 0;
  const mediumOffset = -easyLen;
  const hardOffset = -(easyLen + mediumLen);

  return (
    <div className="relative w-36 h-36 mx-auto">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        {/* Background ring */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth="10"
        />
        {/* Easy */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#22c55e"
          strokeWidth="10"
          strokeDasharray={`${easyLen} ${circumference - easyLen}`}
          strokeDashoffset={easyOffset}
          className="transition-all duration-1000"
        />
        {/* Medium */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="10"
          strokeDasharray={`${mediumLen} ${circumference - mediumLen}`}
          strokeDashoffset={mediumOffset}
          className="transition-all duration-1000"
        />
        {/* Hard */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#ef4444"
          strokeWidth="10"
          strokeDasharray={`${hardLen} ${circumference - hardLen}`}
          strokeDashoffset={hardOffset}
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold">{total}</span>
        <span className="text-xs text-muted-foreground">Solved</span>
      </div>
    </div>
  );
};

// Stat box with icon
const StatBox = ({
  icon: Icon,
  label,
  value,
  color = "text-primary",
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color?: string;
}) => (
  <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
    <Icon className={`h-5 w-5 ${color} shrink-0`} />
    <div className="min-w-0">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-semibold text-sm truncate">{value}</p>
    </div>
  </div>
);

// Skeleton loader
const SkeletonCard = () => (
  <Card className="p-6 shadow-soft">
    <div className="animate-pulse space-y-4">
      <div className="h-6 bg-muted rounded w-1/3" />
      <div className="grid grid-cols-2 gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-14 bg-muted rounded-lg" />
        ))}
      </div>
      <div className="h-32 bg-muted rounded" />
    </div>
  </Card>
);

const CodingActivity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats | null>(null);
  const [githubLoading, setGithubLoading] = useState(true);
  const [leetcodeLoading, setLeetcodeLoading] = useState(true);
  const [githubError, setGithubError] = useState(false);
  const [leetcodeError, setLeetcodeError] = useState(false);

  // Fetch GitHub stats
  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        // Fetch user profile
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userRes.ok) throw new Error("GitHub API error");
        const user = await userRes.json();

        // Fetch repos to calculate total stars
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
        );
        const repos = await reposRes.json();
        const totalStars = Array.isArray(repos)
          ? repos.reduce((sum: number, repo: any) => sum + (repo.stargazers_count || 0), 0)
          : 0;

        // Try to get contribution count from the contributions API
        let totalContributions = 0;
        try {
          const contribRes = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
          );
          if (contribRes.ok) {
            const contribData = await contribRes.json();
            totalContributions = contribData.total?.lastYear || contribData.total?.["lastYear"] || 0;
          }
        } catch {
          // Contribution count is optional, don't fail the whole thing
        }

        setGithubStats({
          public_repos: user.public_repos,
          followers: user.followers,
          following: user.following,
          totalStars,
          totalContributions,
        });
      } catch (err) {
        console.error("GitHub fetch error:", err);
        setGithubError(true);
      } finally {
        setGithubLoading(false);
      }
    };

    fetchGitHub();
  }, []);

  // Fetch LeetCode stats
  useEffect(() => {
    const fetchLeetCode = async () => {
      try {
        // Fetch solved problem breakdown
        const solvedRes = await fetch(
          `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}/solved`
        );
        if (!solvedRes.ok) throw new Error("LeetCode API error");
        const solvedData = await solvedRes.json();

        // Fetch profile for ranking
        let ranking = 0;
        try {
          const profileRes = await fetch(
            `https://alfa-leetcode-api.onrender.com/${LEETCODE_USERNAME}`
          );
          if (profileRes.ok) {
            const profileData = await profileRes.json();
            ranking = profileData.ranking || 0;
          }
        } catch {
          // ranking is optional
        }

        setLeetcodeStats({
          totalSolved: solvedData.solvedProblem || 0,
          easySolved: solvedData.easySolved || 0,
          mediumSolved: solvedData.mediumSolved || 0,
          hardSolved: solvedData.hardSolved || 0,
          totalEasy: solvedData.easyQuestions || 800,
          totalMedium: solvedData.mediumQuestions || 1700,
          totalHard: solvedData.hardQuestions || 750,
          totalQuestions: solvedData.totalQuestions || 3250,
          ranking,
          acceptanceRate: 0,
        });
      } catch (err) {
        console.error("LeetCode fetch error:", err);
        setLeetcodeError(true);
      } finally {
        setLeetcodeLoading(false);
      }
    };

    fetchLeetCode();
  }, []);

  return (
    <section id="coding activity" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Coding{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Activity
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My real-time coding activity across platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {githubLoading ? (
              <SkeletonCard />
            ) : githubError ? (
              <Card className="p-6 shadow-soft text-center">
                <p className="text-muted-foreground">Unable to load GitHub stats</p>
              </Card>
            ) : githubStats ? (
              <Card className="p-6 shadow-soft hover:shadow-glow transition-all h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-gray-800 to-gray-600 shadow-lg">
                      <Github className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">GitHub</h3>
                  </div>
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <StatBox
                    icon={Code2}
                    label="Repositories"
                    value={githubStats.public_repos}
                  />
                  <StatBox
                    icon={Star}
                    label="Total Stars"
                    value={githubStats.totalStars}
                    color="text-yellow-500"
                  />
                  <StatBox
                    icon={Users}
                    label="Followers"
                    value={githubStats.followers}
                  />
                  <StatBox
                    icon={GitFork}
                    label="Contributions"
                    value={
                      githubStats.totalContributions > 0
                        ? githubStats.totalContributions.toLocaleString()
                        : "—"
                    }
                    color="text-green-500"
                  />
                </div>

                {/* Contribution Heatmap */}
                <div className="rounded-lg overflow-hidden bg-secondary/30 p-3">
                  <p className="text-xs text-muted-foreground mb-2 text-center">
                    Contribution Activity (Last Year)
                  </p>
                  <img
                    src={`https://ghchart.rshah.org/26a641/${GITHUB_USERNAME}`}
                    alt="GitHub Contribution Chart"
                    className="w-full dark:brightness-90 dark:contrast-125"
                    loading="lazy"
                  />
                </div>
              </Card>
            ) : null}
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {leetcodeLoading ? (
              <SkeletonCard />
            ) : leetcodeError ? (
              <Card className="p-6 shadow-soft text-center">
                <p className="text-muted-foreground">Unable to load LeetCode stats</p>
              </Card>
            ) : leetcodeStats ? (
              <Card className="p-6 shadow-soft hover:shadow-glow transition-all h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg">
                      <Trophy className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">LeetCode</h3>
                  </div>
                  <a
                    href={`https://leetcode.com/u/${LEETCODE_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Donut Chart */}
                <DonutChart
                  easy={leetcodeStats.easySolved}
                  medium={leetcodeStats.mediumSolved}
                  hard={leetcodeStats.hardSolved}
                  total={leetcodeStats.totalSolved}
                />

                {/* Difficulty Breakdown */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-green-500" />
                      <span>Easy</span>
                    </div>
                    <span className="font-semibold">
                      {leetcodeStats.easySolved}
                      <span className="text-muted-foreground font-normal">
                        /{leetcodeStats.totalEasy}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-amber-500" />
                      <span>Medium</span>
                    </div>
                    <span className="font-semibold">
                      {leetcodeStats.mediumSolved}
                      <span className="text-muted-foreground font-normal">
                        /{leetcodeStats.totalMedium}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span>Hard</span>
                    </div>
                    <span className="font-semibold">
                      {leetcodeStats.hardSolved}
                      <span className="text-muted-foreground font-normal">
                        /{leetcodeStats.totalHard}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Ranking */}
                {leetcodeStats.ranking > 0 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Global Ranking</span>
                      <span className="font-semibold">
                        #{leetcodeStats.ranking.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </Card>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodingActivity;
