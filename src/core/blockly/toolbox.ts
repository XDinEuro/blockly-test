import {$t} from "@/core/i18n/config";

export default `<xml>
          <category name="${$t('blockly.categories.logic')}" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
            <block type="controls_repeat_ext">
              <value name="TIMES">
                <block type="math_number">
                  <field name="NUM">10</field>
                </block>
              </value>
            </block>
            <block type="controls_whileUntil"></block>
          </category>
          <category name="${$t('blockly.categories.text')}" colour="%{BKY_TEXTS_HUE}">
            <block type="text"></block>
            <block type="text_length"></block>
            <block type="text_print"></block>
          </category>
          <category name="${$t('blockly.categories.variables')}" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">
            </category>
          <category name="${$t('blockly.categories.motion')}" colour="210">
            <label text="Simple Motions" web-class="simpleMotionsLabel"></label>            
            <block type="motion_move_to"></block>
            <block type="motion_pose"></block>
            <block type="motion_coordinates"></block>
            <label text="Pose Manager" web-class="poseManagerLabel"></label>
            <button text="New Pose" callbackKey="newPose"></button>
            <block type="motion_home_position"></block>
          </category>
          <category name="${$t('blockly.categories.gripper')}" colour="190">
            <block type="endeffector_open"></block>
            <block type="endeffector_close"></block>
            <block type="endeffector_is_closed"></block>
          </category>
           <category name="${$t('blockly.categories.objects')}" colour="50">
            <block type="object_place"></block>
            <block type="object_colour"></block>
          </category>
        </xml>`