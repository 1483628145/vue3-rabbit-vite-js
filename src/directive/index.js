import { useIntersectionObserver } from "@vueuse/core";

export const lazyImagPlugin = {
  install(app) {
    // 全局自定义指令
    app.directive("img-lazy", {
      mounted(el, binding) {
        // el 绑定的元素
        // binging ： 绑定后的指令对象
        // binging.value : 指令等于号后面的实际值
        // console.log(el, binding);

        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          // 这个函数返回一个isIntersecting 用于判断是真还是假
          // 当是真的时候将其value值给到el上src
          if (isIntersecting) {
            el.src = binding.value;

            // 当第一个加载完成以后就停止加载
            stop();
          }
        });
      },
    });
  },
};
