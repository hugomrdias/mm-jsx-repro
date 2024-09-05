import { jsx as _jsx, jsxs as _jsxs } from "@metamask/snaps-sdk/jsx-runtime";
import { Box, Heading, Text } from '@metamask/snaps-sdk/jsx';
export function Test() {
    return (_jsxs(Box, { children: [_jsx(Heading, { children: "Alert heading" }), _jsx(Text, { children: "Something happened in the system." })] }));
}
