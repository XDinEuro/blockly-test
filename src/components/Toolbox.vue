<template>
  <div id="category-block"></div>

  <xml id="toolbox" style="display: none" >
    <category :name="$t('blockly.categories.logic')" colour="%{BKY_LOGIC_HUE}">
    <!-- <category :name="test" colour="%{BKY_LOGIC_HUE}"> -->
      <block type="controls_if"></block>
    </category>
  </xml>
</template>

<script>
import Blockly from "blockly";
import { onMounted } from "vue";

export default {
  name: "Toolbox",
  setup() {
    onMounted(() => {
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
