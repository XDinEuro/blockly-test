// @ts-ignore
import * as Blockly from 'blockly/core';


export default Blockly.Theme.defineTheme('AREducationalUILight', {
    'base': "#fff",
    'stocks_category': {
        'logic_category': {
            'colour': "#1f29e2",
        },
        'text_category': {
            'colour': "#FE9B13",
        }
    },
    'blockStyles': {
        'list_blocks': {
            'colourPrimary': "#4a148c",
            'colourSecondary':"#AD7BE9",
            'colourTertiary':"#CDB6E9"
        },
        'logic_blocks': {
            'colourPrimary': "#8b4513",
            'colourSecondary':"#ff0000",
            'colourTertiary':"#C5EAFF"
        },
        'loop_blocks': {
            'colourPrimary': "#8b4513",
            'colourSecondary':"#ff0000",
            'colourTertiary':"#C5EAFF"
        },
        'text_blocks': {
            'colourPrimary': "#FE9B13",
            'colourSecondary':"#ff0000",
            'colourTertiary':"#C5EAFF"
        }
    },
    'componentStyles': {
        'workspaceBackgroundColour': '#ffffff',
        'toolboxBackgroundColour': '#8c8c8c',
        'toolboxForegroundColour': '#fff',
        'flyoutBackgroundColour': '#9f9f9f',
        'flyoutForegroundColour': '#ccc',
        'flyoutOpacity': 1,
        'scrollbarColour': '#ff0000',
        'insertionMarkerColour': '#fff',
        'insertionMarkerOpacity': 0.3,
        'scrollbarOpacity': 0.4,
        'cursorColour': '#d0d0d0',
        'blackBackground': '#333'
    }
});