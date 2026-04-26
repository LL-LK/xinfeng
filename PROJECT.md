# 红色记忆 - H5项目完整文档

## 一、项目概述

这是一个红色旅游抗日主题的H5交互体验项目，通过沉浸式信封交互让用户体验革命先辈在历史关键时刻的抉择。

### 基本信息

- **项目名称**: red-tourism-h5
- **技术栈**: React 19 + TypeScript + Vite + Framer Motion
- **目标设备**: 移动端（自适应全屏）
- **项目路径**: `f:\红旅\xinfeng`

***

## 二、项目结构

```
xinfeng/
├── public/
│   └── assets/                   # 图片资源（呐喊者、燃灯者、织网者、摆渡者、潜火者）
├── src/
│   ├── components/
│   │   ├── Envelope.tsx          # 信封组件（单个信封的视觉和交互）
│   │   ├── EnvelopeScreen.tsx    # 第一屏：5个信封展示
│   │   ├── LetterViewer.tsx      # 第二屏：翻页查看信件内容
│   │   ├── LetterScreen.tsx      # 第三屏：书信感言
│   │   └── StampScreen.tsx       # 第四屏：盖章纪念
│   ├── App.tsx                   # 主应用（状态管理和页面路由）
│   ├── main.tsx                  # 应用入口
│   ├── types.ts                  # TypeScript类型定义
│   ├── data.ts                   # 核心数据（信封内容、策略配置）
│   └── index.css                 # 全局样式
├── index.html                    # HTML入口
├── package.json                  # 项目配置和依赖
├── vite.config.ts                # Vite构建配置
└── tsconfig.json                 # TypeScript配置
```

***

## 三、H5内容与流程

### 完整交互流程

```
信封选择 → 翻页查看信件 → 策略选择 → 书信感言 → 盖章纪念
(5个)    (4页内容)    (3个选项)  (输入感想)  (动画展示)
```

### 第一屏：信封选择界面

- **背景**: 深红色渐变（#5C0000 → #8B0000）
- **布局**: 上3下2共5个信封，使用图片作为封面
  - 上排：呐喊者、燃灯者、织网者
  - 下排：摆渡者、潜火者
- **标题**: "红色记忆" + "点击信封开启历史时刻"
- **交互**: 点击信封，其他信封渐隐消失，选中信封放大，800ms后进入翻页浏览

### 第二屏：翻页查看信件

- **背景**: 纯黑色
- **内容**: 查看信件的4页内容，图片占满屏幕
- **功能**:
  - 上一页按钮（首页时禁用）
  - 下一页按钮（末页时显示"完成阅读"）
  - 顶部显示标题和当前页码
- **交互**: 点击"完成阅读"进入策略选择界面

### 第三屏：策略选择界面

- **背景**: 棕褐色渐变（#2C1810 → #4A2820）
- **内容**: 3个策略选项按钮
- **交互**: 点击选项进入书信界面

### 第四屏：书信感言界面

- **背景**: 米黄色渐变（#F0E6D2 → #D4C4A8）
- **内容**:
  - 策略名称和描述
  - 用户的选择展示
  - 感言输入框（textarea）
  - 署名输入框
- **交互**: 点击"提交感言"进入盖章界面

### 第五屏：盖章纪念界面

- **背景**: 米黄色渐变
- **内容**:
  - 个性化感谢语（含用户署名）
  - 信封+印章动画
  - 印章显示对应策略名称
- **交互**: 点击"重新体验"回到首页

***

## 四、五个历史信封

| ID | 标题  | 副标题        | 默认策略 |
| -- | --- | ---------- | ---- |
| 1  | 呐喊者 | 在信息封锁中撕开缺口 | 呐喊者  |
| 2  | 燃灯者 | 在秩序动荡中坚守阵地 | 燃灯者  |
| 3  | 织网者 | 在分散隔阂中凝聚力量 | 织网者  |
| 4  | 摆渡者 | 在道路受阻时另寻新途 | 摆渡者  |
| 5  | 潜火者 | 在严峻环境下保存火种 | 潜火者  |

***

## 五、五种策略

| 策略Key   | 名称  | 桂林地貌 | 核心图形    | 配色         | 动画隐喻 | 描述         |
| ------- | --- | ---- | ------- | ---------- | ---- | ---------- |
| shouter | 呐喊者 | 独秀峰  | 声波刺破云层  | #1E3A5F 靛蓝 | 刺破   | 在信息封锁中撕开缺口 |
| lighter | 燃灯者 | 象鼻山  | 时钟+幕布交织 | #8B2500 赭红 | 维持   | 在秩序动荡中坚守阵地 |
| weaver  | 织网者 | 两江四湖 | 节点连线成网  | #2E8B57 青绿 | 编织   | 在分散隔阂中凝聚力量 |
| crosser | 摆渡者 | 漓江断桥 | 报纸折成纸船  | #FFC107 明黄 | 转移   | 在道路受阻时另寻新途 |
| hider   | 潜火者 | 七星岩  | 冻土下藏光点  | #1A1A1A 墨黑 | 隐匿   | 在严峻环境下保存火种 |

***

## 六、如何修改内容

### 6.1 修改信封文字内容

**文件**: [src/data.ts](file:///f:/红旅/xinfeng/src/data.ts)

修改 `envelopeData` 数组：

```typescript
export const envelopeData: EnvelopeData[] = [
  {
    id: 1,                              // 信封ID
    title: '呐喊者',                   // 信封标题（显示在信封上）
    subtitle: '在信息封锁中撕开缺口',  // 副标题（选择屏显示）
    strategy: 'shouter',                // 默认策略
    coverImage: '/assets/呐喊者/封面/xxx.png',  // 封面图片路径
    pages: [                            // 内页图片路径数组
      '/assets/呐喊者/第一页/xxx.png',
      '/assets/呐喊者/第二页/xxx.png',
      '/assets/呐喊者/第三页/xxx.png',
      '/assets/呐喊者/第四页/xxx.png'
    ]
  },
  // ... 更多信封
];
```

**修改示例** - 更改第一个信封的标题：

```typescript
// 原来
title: '呐喊者',
// 改为
title: '新的标题',
```

### 6.2 修改策略配置

**文件**: [src/data.ts](file:///f:/红旅/xinfeng/src/data.ts)

修改 `strategyConfig` 对象：

```typescript
export const strategyConfig: Record<string, StrategyConfig> = {
  shouter: {
    name: '呐喊者',           // 策略显示名称
    landscape: '独秀峰',      // 对应桂林地貌
    coreGraphic: '声波刺破云层', // 核心图形描述
    color: '#1E3A5F',        // 策略配色（按钮背景色）
    animation: '刺破',        // 动画隐喻
    description: '在信息封锁中撕开缺口' // 策略描述
  },
  // ... 更多策略
};
```

**修改示例** - 更改策略名称和颜色：

```typescript
shouter: {
  name: '新名称',
  color: '#FF0000',  // 改为红色
  description: '新的描述文字'
},
```

### 6.3 修改页面标题和引导文字

**文件**: [src/components/EnvelopeScreen.tsx](file:///f:/红旅/xinfeng/src/components/EnvelopeScreen.tsx)

```typescript
// 主标题
<h1>红色记忆</h1>

// 副标题
<p>点击信封开启历史时刻</p>
```

### 6.4 修改选择界面文字

**文件**: [src/components/ChoiceScreen.tsx](file:///f:/红旅/xinfeng/src/components/ChoiceScreen.tsx)

```typescript
// 底部提示文字
<div>每个选择都是一种正当选择</div>
```

### 6.5 修改书信界面文字

**文件**: [src/components/LetterScreen.tsx](file:///f:/红旅/xinfeng/src/components/LetterScreen.tsx)

```typescript
// 标签文字
<label>写下你的感言：</label>
<label>署名：</label>

// 输入框占位符
<textarea placeholder="在这里写下你的感想..." />
<input placeholder="请输入您的署名" />

// 提交按钮
<button>提交感言</button>
```

### 6.5 修改盖章界面文字

**文件**: [src/components/StampScreen.tsx](file:///f:/红旅/xinfeng/src/components/StampScreen.tsx)

```typescript
// 感谢语
<h2>{userName}，你好！</h2>
<p>感谢你传承红色精神</p>

// 印章文字
<span>★</span>
<span>{config.name}</span>  // 显示策略名称
<span>纪念</span>

// 重新体验按钮
<button>重新体验</button>
```

### 6.7 修改翻页浏览界面文字

**文件**: [src/components/LetterViewer.tsx](file:///f:/红旅/xinfeng/src/components/LetterViewer.tsx)

```typescript
// 上一页按钮
<button>上一页</button>

// 下一页/完成阅读按钮
<button>下一页</button>
<button>完成阅读</button>
```

***

## 七、如何修改图片

### 7.1 添加图片资源

图片放在 `public/assets/` 文件夹中，按照以下目录结构：

```
public/assets/
├── 呐喊者/
│   ├── 封面/
│   │   └── xxx.png
│   ├── 第一页/
│   │   └── xxx.png
│   ├── 第二页/
│   │   └── xxx.png
│   ├── 第三页/
│   │   └── xxx.png
│   └── 第四页/
│       └── xxx.png
├── 燃灯者/
│   └── ...
├── 织网者/
│   └── ...
├── 摆渡者/
│   └── ...
└── 潜火者/
    └── ...
```

### 7.2 修改信封封面图片

在 [src/data.ts](file:///f:/红旅/xinfeng/src/data.ts) 中修改 `coverImage` 路径：

```typescript
{
  id: 1,
  title: '呐喊者',
  subtitle: '在信息封锁中撕开缺口',
  strategy: 'shouter',
  coverImage: '/assets/呐喊者/封面/新封面.png',  // 修改这里
  pages: [...]
}
```

### 7.3 修改信件内页图片

在 [src/data.ts](file:///f:/红旅/xinfeng/src/data.ts) 中修改 `pages` 数组：

```typescript
pages: [
  '/assets/呐喊者/第一页/新第一页.png',  // 修改这里
  '/assets/呐喊者/第二页/新第二页.png',  // 修改这里
  '/assets/呐喊者/第三页/新第三页.png',  // 修改这里
  '/assets/呐喊者/第四页/新第四页.png'   // 修改这里
],
```

### 7.4 修改信封选择界面背景

**文件**: [src/components/EnvelopeScreen.tsx](file:///f:/红旅/xinfeng/src/components/EnvelopeScreen.tsx)

{% raw %}
```typescript
// 修改背景样式
style={{
  // 原来：
  background: 'linear-gradient(180deg, #5C0000 0%, #8B0000 50%, #5C0000 100%)',
  
  // 改为图片背景（需要先导入图片）：
  // backgroundImage: `url(${bgImage})`,
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
}}
```
{% endraw %}

***

## 八、色彩系统

| 用途      | 颜色 | 色值      |
| ------- | -- | ------- |
| 主色（红色）  | 深红 | #C41E3A |
| 主色（暗红）  | 暗红 | #8B0000 |
| 主色（深暗）  | 深暗 | #5C0000 |
| 辅助色（金色） | 金色 | #FFD700 |
| 背景色     | 米白 | #F5F0E6 |
| 策略色-呐喊者 | 靛蓝 | #1E3A5F |
| 策略色-燃灯者 | 赭红 | #8B2500 |
| 策略色-织网者 | 青绿 | #2E8B57 |
| 策略色-摆渡者 | 明黄 | #FFC107 |
| 策略色-潜火者 | 墨黑 | #1A1A1A |

***

## 九、交互动效

使用Framer Motion实现：

- 信封淡入淡出动画
- 信封放大选中动画
- 平滑页面转场
- 图片翻页动画
- 策略选择悬停效果
- 盖章下落动画
- 墨迹扩散特效

***

## 十、响应式设计

- 手机全屏显示，使用 `100vh` 高度
- 自适应字体大小（`clamp()`）
- 自适应信封大小
- 支持触摸交互
- 优化移动端体验

***

## 十一、注意事项

- 所有历史内容均经过严格审核
- 无敏感词，符合红色文化传播要求
- 避免直接展示可能引起不适的战争场景
- 图片放置在 `public/assets/` 文件夹中

***

## 十二、后续扩展

可添加以下功能模块：

- 历史事件时间轴
- 英雄人物展示
- 红色旅游景点导览
- 徽章收藏系统
- 文创产品展示

***

## 十三、运行和构建

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 生产构建

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

***

## 十四、快速修改清单

| 想修改什么 | 修改哪个文件| 搜索关键词|
| -------- | ----------------------------------- | ------------------------------------ |
| 信封标题/副标题 | `src/data.ts`                       | `title`, `subtitle`                  |
| 策略名称/颜色  | `src/data.ts`                       | `strategyConfig`                     |
| 封面图片     | `src/data.ts`                       | `coverImage`                         |
| 内页图片     | `src/data.ts`                       | `pages`                              |
| 首页标题     | `src/components/EnvelopeScreen.tsx` | `红色记忆`                               |
| 按钮文字     | 各组件文件                               | `提交感言`, `重新体验`, `上一页`, `下一页`, `完成阅读` |
| 输入框提示    | `src/components/LetterScreen.tsx`   | `placeholder`                        |
| 感谢语      | `src/components/StampScreen.tsx`    | `感谢你传承红色精神`                          |
| 背景颜色 | 各组件文件                             | `background:`                        |

***

## 十五、分享与部署

### 方案一：本地预览分享（局域网内）

1. 确保开发服务器正在运行：

   ```bash
   npm run dev
   ```

2. 在同一局域网内的设备可访问：
   - **本地地址**：<http://localhost:3000/>
   - **网络地址**：查看控制台输出

### 方案二：静态文件部署（推荐）

将 `dist/` 文件夹部署到任意静态文件托管服务：

#### 免费托管选项

- 📦 **GitHub Pages** - 免费，全球CDN
- 🔥 **Vercel** - 自动部署，高性能
- 🌐 **Netlify** - 简单易用
- ☁️ **Gitee Pages** - 国内访问快

#### 部署步骤（以 GitHub Pages 为例）

1. 将 `dist/` 文件夹内容推送到 GitHub 仓库
2. 在仓库设置中开启 GitHub Pages
3. 选择分支和文件夹（通常是 `gh-pages` 分支或 `/root` 目录）

### 方案三：生成二维码分享

#### 使用在线工具生成二维码

1. 访问：<https://cli.im/> 或 <https://www.qr-code-generator.com/>
2. 输入您的项目访问地址
3. 下载二维码图片
4. 分享给朋友扫码访问

### dist 文件夹内容

```
dist/
├── index.html                    # 主页面
└── assets/
    ├── index-BHrXpfXs.css        # 样式文件
    └── index-BCwNxMNs.js         # JavaScript 文件
```

### 快速本地预览

直接双击 `dist/index.html` 在浏览器打开预览

### 技术支持

如有问题，请检查：

1. Node.js 版本（建议 v18+）
2. npm 依赖是否完整安装
3. 浏览器是否支持 ES6+

***

**铭记历史，珍爱和平！** 🇨🇳
