import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Table } from '..';
// Generate sample data
const generateUsers = (count) => {
    const departments = ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance'];
    return Array.from({ length: count }, (_, i) => ({
        _id: `user-${i + 1}`,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        age: 20 + (i % 50),
        department: departments[i % departments.length],
    }));
};
const PaginationExample = () => {
    const [data] = useState(generateUsers(100));
    const columns = [
        {
            dataField: 'name',
            text: 'Name',
            sort: true,
        },
        {
            dataField: 'email',
            text: 'Email',
            sort: true,
        },
        {
            dataField: 'age',
            text: 'Age',
            sort: true,
            align: 'center',
        },
        {
            dataField: 'department',
            text: 'Department',
            sort: true,
            filter: true,
        },
    ];
    return (_jsxs("div", { style: { padding: '20px' }, children: [_jsx("h1", { children: "Table Pagination Improvements Demo" }), _jsxs("div", { style: { marginBottom: '20px' }, children: [_jsx("h2", { children: "Features Demonstrated:" }), _jsxs("ul", { children: [_jsx("li", { children: "\u2705 Click on page numbers (4, 5, etc.) - they stay active" }), _jsx("li", { children: "\u2705 Use Quick Jumper to navigate to any page" }), _jsx("li", { children: "\u2705 Page size selector with manual input + dropdown" }), _jsx("li", { children: "\u2705 Type custom page size (e.g., 15, 25, 35) and press Enter" }), _jsx("li", { children: "\u2705 Click page size input to see preset options (10, 20, 30, 50)" })] })] }), _jsx(Table, { id: "pagination-demo", data: data, columns: columns, keyField: "_id", pagination: true, paginationConfig: {
                    page: 0,
                    pageSize: 10,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    showTotal: true,
                    pageSizeOptions: [10, 20, 30, 50],
                }, searchable: true, filterable: true, bordered: true, hover: true, striped: true }), _jsxs("div", { style: { marginTop: '20px', padding: '15px', background: '#f0f9ff', borderRadius: '8px' }, children: [_jsx("h3", { children: "Testing Instructions:" }), _jsxs("ol", { children: [_jsxs("li", { children: [_jsx("strong", { children: "Page Number Active State:" }), _jsxs("ul", { children: [_jsx("li", { children: "Click on page 4 or 5" }), _jsx("li", { children: "Notice the page number stays highlighted" }), _jsx("li", { children: "The correct data is displayed" })] })] }), _jsxs("li", { children: [_jsx("strong", { children: "Quick Jumper:" }), _jsxs("ul", { children: [_jsx("li", { children: "Type \"7\" in the \"Go to\" input" }), _jsx("li", { children: "Press Enter or click \"Go\"" }), _jsx("li", { children: "Page 7 becomes active and displays correct data" })] })] }), _jsxs("li", { children: [_jsx("strong", { children: "Page Size Input:" }), _jsxs("ul", { children: [_jsx("li", { children: "Click on the page size input (shows current size like \"10\")" }), _jsx("li", { children: "Dropdown appears with options: 10, 20, 30, 50" }), _jsx("li", { children: "Click \"20\" to change page size" }), _jsx("li", { children: "OR click the input again and type \"15\"" }), _jsx("li", { children: "Press Enter to apply custom size" }), _jsx("li", { children: "Pagination updates to show 15 items per page" })] })] })] })] })] }));
};
export default PaginationExample;
