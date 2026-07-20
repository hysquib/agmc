import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, HelpCircle, Search, ArrowRight } from "lucide-react";
import { faqData } from "@/data/faq";

export function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaq = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 dark:bg-brand-950/50 rounded-full text-brand-600 dark:text-brand-300 text-sm font-medium mb-4">
          <HelpCircle className="w-4 h-4" />
          <span>帮助中心</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          常见问题
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          在这里你可以找到关于兑奖的常见问题解答
        </p>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="搜索问题..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all"
        />
      </div>

      <div className="space-y-3">
        {filteredFaq.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            没有找到相关问题，请尝试其他关键词
          </div>
        ) : (
          filteredFaq.map((item, index) => (
            <div
              key={index}
              className="card overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-gray-900 dark:text-white pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          没有找到你的问题？
        </p>
        <Link
          to="/about/contact"
          className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium transition-colors"
        >
          联系我们获取帮助
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
