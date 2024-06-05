"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const auto_complete_filter_single_select_multiple_fields_display_component_1 = require("./auto-complete-filter-single-select-multiple-fields-display.component");
const meta = {
  title:
    "Design System/Molecules/AutoCompleteFilterSingleSelectMultiFieldsDisplay",
  component:
    auto_complete_filter_single_select_multiple_fields_display_component_1.AutoCompleteFilterSingleSelectMultiFieldsDisplay,
  tags: ["autodocs"],
  parameters: {
    componentSubtitle: `import { AutoCompleteFilterSingleSelectMultiFieldsDisplay } from 'react-restyle-components'`,
    // backgrounds: {
    //   default: 'light-gray',
    // },
  },
};
exports.default = meta;
exports.Primary = {
  args: {
    data: {
      list: [
        { code: "Code1", name: "Value1" },
        { code: "Code2", name: "Value2" },
        { code: "Code3", name: "Value3" },
      ],
      displayKey: ["name"],
    },
    onSelect: (item) => {
      console.log({ item });
    },
  },
};
//# sourceMappingURL=auto-complete-filter-single-select-multiple-fields-display.stories.js.map
