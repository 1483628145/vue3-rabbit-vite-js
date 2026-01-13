export default {
  install(app) {
    // 扫描 src/components 下所有 index.vue
    const modules = import.meta.glob("./**/index.vue", { eager: true });

    Object.entries(modules).forEach(([path, mod]) => {
      // 取组件名： ./Button/index.vue -> Button
      const match = path.match(/\.\/(.*)\/index\.vue$/);
      if (!match) return;

      const componentName = match[1];
      app.component(componentName, mod.default);
    });
  },
};
