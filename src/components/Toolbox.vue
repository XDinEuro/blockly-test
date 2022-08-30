<template>
  <div id="category-block"></div>

  <xml id="toolbox" style="display: none" >
    <category :name="$t('blockly.categories.logic')" colour="%{BKY_LOGIC_HUE}">
    <!-- <category :name="test" colour="%{BKY_LOGIC_HUE}"> -->
      <block type="controls_if"></block>
      <block type="logic_boolean"></block>
    </category>
  </xml>
</template>

<script>
import Blockly from "blockly";
import { onMounted } from "vue";
import * as De from 'blockly/msg/de';
import * as En from 'blockly/msg/en';
import * as Cn from 'blockly/msg/zh-hans';
import { useI18n } from "vue-i18n";
import {ref} from "vue";

export default {
  name: "Toolbox",
  setup() {
    onMounted(() => {
      const i18n = ref(useI18n({ useScope: "global" })).value;
      if(i18n.locale === "de-DE") Blockly.setLocale(De);
      else if(i18n.locale=== "en-US") { Blockly.setLocale(En) 
      }
      else if(i18n.locale  === "cn-CN") Blockly.setLocale(Cn)
      Blockly.inject(document.querySelector("#category-block"), {
        toolbox: document.querySelector("#toolbox"),
        // media: 'https://unpkg.com/blockly/media/',
        grid: {
          spacing: 25,
          length: 3,
          colour: "#ccc",
          snap: true,
        },
        move: {
          scrollbars: {
            horizontal: false,
            vertical: false,
          },
          drag: true,
          wheel: false,
        },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 1.6,
          minScale: 0.6,
          scaleSpeed: 1.2,
          pinch: true,
        },
        collapse: true,
      });
    });
  },
};
</script>

<style scoped>

/* li {
  float: left;
  border-right: 3px solid white;
} */

/* li:last-child {
  border-right: none;
} */


#category-block {
  height: 800px;
  width: 640px;

}
</style>
