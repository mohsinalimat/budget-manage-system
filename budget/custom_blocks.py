import frappe

CUSTOM_BLOCKS = [
    {
        "name": "Budget reports",
        "html": (
            "<div class=\"container\">\n"
            "  <!-- Under Development -->\n"
            "  <div class=\"desc disabled\"\n"
            "       onclick=\"frappe.msgprint(__('Still under development'))\">\n"
            "    Budget vs Actual Comparison (Items)\n"
            "  </div>\n\n"
            "  <!-- Active -->\n"
            "  <div class=\"desc\"\n"
            "       onclick=\"frappe.set_route('query-report', 'Budget Variance Report')\">\n"
            "    Cost Center Comparison\n"
            "  </div>\n\n"
            "  <!-- Active -->\n"
            "  <div class=\"desc\"\n"
            "       onclick=\"frappe.set_route('query-report', 'Purchase Order Trends')\">\n"
            "    Purchase Report\n"
            "  </div>\n\n"
            "</div>\n"
        ),
        "style": (
            ".container {\r\n  text-align: center;\r\n}\r\n\r\n"
            ".desc {\r\n"
            "  padding: 8px;\r\n"
            "  border: 0.1px solid #0653cf;\r\n"
            "  color: #0653cf;\r\n"
            "  border-radius: 12px;\r\n"
            "  display: inline-block;\r\n"
            "  cursor: pointer;\r\n"
            "  transition: all 0.3s ease;\r\n"
            "  margin-bottom: 10px;\r\n"
            "  margin-right: 10px;\r\n"
            "  font-size: 15px;\r\n"
            "}\r\n\r\n"
            ".desc:hover {\r\n"
            "  background-color: #0653cf;\r\n"
            "  color: white;\r\n"
            "}"
        ),
        "script": None,
        "private": 0,
        "roles": [],
    },
]


def create_custom_blocks():
    for block in CUSTOM_BLOCKS:
        if frappe.db.exists("Custom HTML Block", block["name"]):
            continue
        frappe.get_doc({"doctype": "Custom HTML Block", **block}).insert(ignore_permissions=True)


def delete_custom_blocks():
    for block in CUSTOM_BLOCKS:
        if frappe.db.exists("Custom HTML Block", block["name"]):
            frappe.delete_doc("Custom HTML Block", block["name"], ignore_permissions=True, force=True)
