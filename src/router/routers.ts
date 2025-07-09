//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute = [
  {
    //登录
    path: "/login",
    component: () => import("@/view/login/index.vue"),
    name: "Login",
    meta: {
      title: "登录", //菜单标题
      hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: "Promotion", //菜单文字左侧的图标,支持element-plus全部图标
    },
  },
  {
    //登录成功以后展示数据的路由
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "Layout",
    meta: {
      title: "",
      hidden: false,
      icon: "",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/view/home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
  {
    path: "/screen",
    component: () => import("@/view/screen/index.vue"),
    name: "Screen",
    meta: {
      hidden: false,
      title: "数据大屏",
      icon: "Platform",
    },
  },
  {
    path: "/acl",
    component: () => import("@/layout/index.vue"),
    name: "Acl",
    meta: {
      title: "权限管理",
      hidden: false,
      icon: "Lock",
    },
    children: [
      {
        path: "/acl/user",
        name: "User",
        component: () => import("@/view/acl/user/index.vue"),
        meta: {
          title: "用户管理",
          hidden: false,
          icon: "User",
        },
      },
      {
        path: "/acl/role",
        name: "Role",
        component: () => import("@/view/acl/role/index.vue"),
        meta: {
          title: "角色管理",
          hidden: false,
          icon: "Avatar",
        },
      },
      {
        path: "/acl/permission",
        name: "Permission",
        component: () => import("@/view/acl/permission/index.vue"),
        meta: {
          title: "权限管理",
          hidden: false,
          icon: "Setting",
        },
      },
    ],
  },
  {
    path: "/product",
    component: () => import("@/layout/index.vue"),
    name: "Product",
    meta: {
      title: "商品管理",
      hidden: false,
      icon: "GoodsFilled",
    },
    children: [
      {
        path: "/product/trademark",
        name: "Trademark",
        component: () => import("@/view/product/trademark/index.vue"),
        meta: {
          title: "品牌管理",
          hidden: false,
          icon: "ShoppingBag",
        },
      },
      {
        path: "/product/attr",
        name: "Attr",
        component: () => import("@/view/product/attr/index.vue"),
        meta: {
          title: "属性管理",
          hidden: false,
          icon: "Setting",
        },
      },
      {
        path: "/product/spu",
        name: "Spu",
        component: () => import("@/view/product/spu/index.vue"),
        meta: {
          title: "SPU管理",
          hidden: false,
          icon: "ShoppingBag",
        },
      },
      {
        path: "/product/sku",
        name: "Sku",
        component: () => import("@/view/product/sku/index.vue"),
        meta: {
          title: "SKU管理",
          hidden: false,
          icon: "ShoppingBag",
        },
      },
    ],
  },
];

//任意路由
export const anyRoute = {
  //任意路由
  path: "/:pathMatch(.*)*",
  redirect: "/404",
  name: "Any",
  meta: {
    title: "任意路由",
    hidden: true,
    icon: "DataLine",
  },
};
