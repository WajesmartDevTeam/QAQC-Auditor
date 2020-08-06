import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Index from "@/pages/Index.vue";
import Login from "@/pages/Login.vue";
import Home from "@/pages/Home.vue";
import AMMVR from "@/pages/Am_mvr.vue";
import AM_standard from "@/pages/Am_standard.vue";
import MIDDAYMVR from "@/pages/Midday_mvr.vue";
import Midday_standard from "@/pages/Midday_standard.vue";
import Food_safety from "@/pages/Foodsafety.vue";
import Greenbook from "@/pages/Greenbook.vue";
import Redbook from "@/pages/Redbook.vue";
const routes = [{

        path: "/",
        name: "Index",
        component: Index,
        meta: {
            public: true, // Allow access to even if not logged in
            onlyWhenLoggedOut: true
        }
    },
    // {
    //     path: "/login",
    //     name: "Login",
    //     component: Login,
    //     meta: {
    //         public: true, // Allow access to even if not logged in
    //         onlyWhenLoggedOut: true
    //     }
    // },

    {
        path: "/audit",
        component: DashboardLayout,

        children: [{
                path: "home",
                name: "Home",
                component: Home
            },
            {
                path: "amvrfeedback",
                name: "AM MVR Feedback Report",
                component: AMMVR
            },

            {
                path: "midamvfeedback",
                name: "MIDDAY MVR Feedback Report",
                component: MIDDAYMVR
            },
            {
                path: "openingsoa",
                name: "AM STANDARD OPERATIONS AUDIT",
                component: AM_standard
            },
            {
                path: "midopeningsoa",
                name: "MIDDAY STANDARD OPERATIONS AUDIT",
                component: Midday_standard
            },
            {
                path: "krss",
                name: "FOOD SAFETY REPORT",
                component: Food_safety
            },
            {
                path: "kdo",
                name: "GREENBOOK CHECKLIST",
                component: Greenbook
            },
            {
                path: "redbook",
                name: "REDBOOK CHECKLIST",
                component: Redbook
            },
        ]
    }
];

export default routes;