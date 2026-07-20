import {
  FileCheck,
  Upload,
  ShieldCheck,
  Package,
  Send,
  UserCheck,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

interface TimelineStepProps {
  step: number;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
  isLast?: boolean;
}

function TimelineStep({ step, icon: Icon, title, description, details, isLast }: TimelineStepProps) {
  return (
    <div className="relative pl-16 pb-12 last:pb-0">
      {!isLast && (
        <div className="absolute left-[30px] top-16 bottom-0 w-0.5 bg-gradient-to-b from-brand-200 to-transparent dark:from-brand-800" />
      )}

      <div className="absolute left-0 top-0 w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-brand-500/30">
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center text-xs font-bold text-brand-500 border-2 border-brand-500">
          {step}
        </span>
        <Icon className="w-7 h-7 text-white" />
      </div>

      <div className="card p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400"
            >
              <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function RedemptionPage() {
  const steps = [
    {
      icon: FileCheck,
      title: "确认获奖资格",
      description: "在官方网站查询获奖名单，确认本人获奖信息。",
      details: [
        "登录 AGMC 官方网站，进入获奖查询页面",
        "输入参赛编号和姓名查询获奖结果",
        "确认获奖等级和个人信息准确无误",
        "保存或截图获奖证明页面",
      ],
    },
    {
      icon: UserCheck,
      title: "准备兑奖材料",
      description: "根据奖项等级准备相应的兑奖所需材料。",
      details: [
        "有效身份证件（身份证/护照/学生证）",
        "获奖证明截图或电子版",
        "收货地址及联系方式",
        "银行卡信息（奖学金类奖项）",
      ],
    },
    {
      icon: Upload,
      title: "提交兑奖申请",
      description: "在线填写兑奖申请表并上传所需材料。",
      details: [
        "访问兑奖申请页面，填写个人基本信息",
        "上传身份证及获奖证明材料",
        "确认收货地址和联系方式",
        "提交申请并记录申请编号",
      ],
    },
    {
      icon: ShieldCheck,
      title: "等待审核",
      description: "组委会将在3-5个工作日内完成审核。",
      details: [
        "审核时间：提交后 3-5 个工作日",
        "可通过申请编号查询审核进度",
        "如材料不全，工作人员会联系补充",
        "审核结果将通过邮件/短信通知",
      ],
    },
    {
      icon: Package,
      title: "奖品发放",
      description: "审核通过后，奖品将在7-15个工作日内发出。",
      details: [
        "实物奖品：快递配送，提供物流单号",
        "奖学金：银行转账，请注意查收",
        "电子证书：发送至注册邮箱",
        "偏远地区可能稍有延迟",
      ],
    },
    {
      icon: Send,
      title: "确认收货",
      description: "收到奖品后，请及时确认并反馈。",
      details: [
        "收到奖品后请检查包装是否完好",
        "核对奖品种类和数量",
        "如有问题请在7天内联系客服",
        "欢迎分享你的获奖喜悦~",
      ],
    },
  ];

  const notes = [
    "兑奖有效期为获奖名单公布之日起30天内，逾期视为自动放弃",
    "请确保提交的个人信息真实有效，如有虚假将取消获奖资格",
    "奖学金涉及的个人所得税由获奖者承担",
    "奖品一经发出，非质量问题不予退换",
    "如遇特殊情况，请及时联系组委会说明",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 dark:bg-brand-950/50 rounded-full text-brand-600 dark:text-brand-300 text-sm font-medium mb-4">
          <FileCheck className="w-4 h-4" />
          <span>兑奖指南</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          兑奖流程
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          按照以下步骤操作，即可顺利完成兑奖。整个流程大约需要 10 分钟。
        </p>
      </div>

      <div className="mb-16">
        {steps.map((step, index) => (
          <TimelineStep
            key={step.title}
            step={index + 1}
            icon={step.icon}
            title={step.title}
            description={step.description}
            details={step.details}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>

      <div className="card p-6 md:p-8 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/50">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-3">
              注意事项
            </h3>
            <ul className="space-y-2">
              {notes.map((note, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-amber-700 dark:text-amber-300/80"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
