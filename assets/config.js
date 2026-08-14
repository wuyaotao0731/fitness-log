// ============================================
// 记一次 · 配置层
// ⚠️ 这份配置里的 KEY 是 Supabase publishable key
//   前端公开使用是安全的(设计如此),但也别贴到公开代码仓库
//   如果要发到 GitHub public repo,把本文件加入 .gitignore
//   然后新建 config.example.js 作为模板
// ============================================
window.APP_CONFIG = {
  // Supabase 项目
  supabaseUrl: 'https://hyulrupwapczvssmzoqv.supabase.co',
  supabaseKey: 'sb_publishable_sjjp_3i6y2qLgRpja1Zuqw_HSgtldJE',

  // 群口令:输对了才能进
  //   想换口令 = 改这里 + 重新部署(Cloudflare Pages 会自动重发)
  //   想开另一个群 = 换一个新的 groupCode 即可,数据自动隔离
  groupCode: 'fitness2026',

  // Storage bucket 名(和 supabase-setup.sql 里一致)
  photoBucket: 'photos',
};
