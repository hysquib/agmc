import { FileText, User, Home, CreditCard, CheckCircle } from "lucide-react";

export function MaterialsPage() {
  const materials = [
    {
      icon: User,
      title: "身份证明",
      description: "有效身份证件原件扫描件或照片",
      note: "支持身份证、护照、学生证等",
      required: true,
    },
    {
      icon: FileText,
      title: "获奖证明",
      description: "获奖证书或获奖名单截图",
      note: "需包含姓名、参赛编号、奖项等级",
      required: true,
    },
    {
      icon: Home,
      title: "收货地址",
      description: "详细的收货地址和联系人信息",
      note: "确保地址准确，奖品寄出后无法修改",
      required: true,
    },
    {
      icon: CreditCard,
      title: "银行账户",
      description: "奖学金类奖项需提供银行账户信息",
      note: "仅特等奖和一等奖需要",
      required: false,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          所需材料
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          兑奖前请准备好以下材料，以便顺利完成兑奖申请
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {materials.map((item, index) => (
          <div key={item.title} className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950/50 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-brand-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  {item.required ? (
                    <span className="px-2 py-0.5 text-xs font-medium bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 rounded">
                      必需
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 rounded">
                      可选
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  {item.description}
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  {item.note}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-6 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800/50">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/50 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">
              材料要求
            </h3>
            <ul className="space-y-2 text-sm text-green-700 dark:text-green-300/80">
              <li>所有证件照片需清晰可辨，确保文字和头像完整</li>
              <li>文件格式支持 JPG、PNG，单张大小不超过 5MB</li>
              <li>请确保提交的信息与参赛报名时一致</li>
              <li>未成年人需由监护人代办，并提供监护人身份证明</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
