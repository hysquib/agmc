import { Link } from "react-router-dom";
import { Trophy, ArrowRight, BookOpen, Award } from "lucide-react";

export function IntroductionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 dark:bg-brand-950/50 rounded-full text-brand-600 dark:text-brand-300 text-sm font-medium mb-4">
          <Trophy className="w-4 h-4" />
          <span>快速开始</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          什么是 AGMC
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          了解 AGMC 数学竞赛的背景、宗旨和特色
        </p>
      </div>

      <div className="prose-custom">
        <h2>竞赛简介</h2>
        <p>
          AGMC（Advanced Global Mathematics Competition）是一项面向全球青少年的高水平数学竞赛，
          旨在激发学生对数学的兴趣，培养数学思维能力，发掘优秀数学人才。
        </p>
        <p>
          竞赛题目兼具趣味性和挑战性，涵盖代数、几何、数论、组合数学等多个领域，
          全面考察学生的数学素养和解决问题的能力。
        </p>

        <h2>竞赛宗旨</h2>
        <ul>
          <li>激发青少年对数学的学习兴趣和探索热情</li>
          <li>培养逻辑思维、创新思维和批判性思维能力</li>
          <li>为全球数学爱好者提供交流和展示的平台</li>
          <li>发现和培养具有数学天赋的优秀人才</li>
        </ul>

        <h2>参赛对象</h2>
        <p>
          竞赛面向全球中小学生开放，根据年龄和年级分为不同组别，确保竞赛的公平性和挑战性。
        </p>

        <h2>奖项设置</h2>
        <p>
          竞赛设置多个奖项等级，包括特等奖、一等奖、二等奖、三等奖和优秀奖，
          每位获奖者都将获得精美的奖牌、证书和丰厚的奖品。
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <Link
            to="/guide/awards"
            className="card p-6 group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center mb-4 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30 transition-colors">
              <Award className="w-6 h-6 text-brand-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
              查看奖项设置
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              了解各奖项等级和奖品详情
            </p>
            <span className="inline-flex items-center text-brand-500 text-sm font-medium">
              了解详情
              <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </Link>

          <Link
            to="/guide/redemption"
            className="card p-6 group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center mb-4 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30 transition-colors">
              <BookOpen className="w-6 h-6 text-brand-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
              兑奖流程指南
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              快速了解兑奖的完整步骤
            </p>
            <span className="inline-flex items-center text-brand-500 text-sm font-medium">
              了解详情
              <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
