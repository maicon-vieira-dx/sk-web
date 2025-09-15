import { useToggle } from "@vueuse/core";
import { defineNuxtPlugin, useCookie, useState, type RuntimeNuxtHooks } from "nuxt/app";
import { unref, watch } from "vue";
import type { VuetifyOptions } from "vuetify";

type HookKeys<T> = keyof T;

export default defineNuxtPlugin({
  name: "Theme",
  enforce: "pre",
  setup: (nuxtApp) => {
    const isDark = useState("isDark", () => useCookie("theme").value == "dark");
    const toggleMode = useToggle(isDark);

    nuxtApp.hook(
      "vuetify:before-create" as HookKeys<RuntimeNuxtHooks>,
      ({ vuetifyOptions }: { vuetifyOptions: VuetifyOptions }) => {
        vuetifyOptions.theme = {
          defaultTheme: unref(isDark) ? "dark" : "light"
        };
      }
    );

    nuxtApp.hook("vuetify:ready" as HookKeys<RuntimeNuxtHooks>, () => {
      watch(isDark,
        (dark: boolean) => useCookie("theme").value = dark ? "dark" : "light",
        { immediate: true }
      );
    });

    return {
      provide: {
        theme: {
          isDark,
          toggleMode
        },
      },
    };
  },
});