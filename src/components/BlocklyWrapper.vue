<template>
  <Toolbox :key="$i18n.locale" ></Toolbox>
     <li class="navbar-item-right" @click="$i18n.locale = 'de-DE'">
      <a :class="[$i18n.locale === 'de-DE' && 'underlined']">DE</a>
    </li>
    <li class="navbar-item-right" @click="$i18n.locale = 'en-US'">
      <a :class="[$i18n.locale === 'en-US' && 'underlined']">US</a>
    </li>
    <li class="navbar-item-right" @click="$i18n.locale = 'cn-CN'">
      <a :class="[$i18n.locale === 'cn-CN' && 'underlined']">CN</a>
    </li>
</template>

<script>
import { onMounted } from "vue";

import Toolbox from "@/components/Toolbox.vue";

export default {
  name: "BlocklyWrapper",
  components: { Toolbox },
  setup() {
    onMounted(() => {
      // Blockly.mainWorkspace.toolbox_.flyout_.CORNER_RADIUS = 0;
      // Blockly.mainWorkspace.registerButtonCallback("newPose", (payload) => {
      //   console.log("newPose", payload);
      // });
    });
  },
};
</script>
<style>
.blocklyToolboxDiv {
  width: 130px;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: var(--color-blue-tint-200);
  border-bottom: 3px solid var(--color-system-blue-500);
  color: white;
}

.active {
  background-color: var(--color-blue-tint-50);
  border-bottom: 3px solid var(--color-system-blue-500);
}

.underlined {
  text-decoration: underline;
}

.navbar-item-right {
  float: right;
}

.navbar-logo {
  height: 14px;
}

.navbar-sticky {
  position: absolute;
  top: 0;
  width: 100%;
  z-index:9999;
  box-shadow: 1px 1px 5px var(--color-blue-tint-200);
}
/* .blocklyHtmlInput {
  visibility: hidden;
} */
</style>
