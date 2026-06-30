import frappe


NUMBER_CARDS = [
    {
        "name": "Active Budget",
        "label": "Active Budget",
        "document_type": "Budget",
        "type": "Document Type",
        "function": "Count",
        "filters_json": '[[\"Budget\",\"docstatus\",\"=\",\"1\",false]]',
        "dynamic_filters_json": "[]",
        "color": "#2cdb46",
        "show_percentage_stats": 1,
        "stats_time_interval": "Daily",
        "is_public": 0,
        "is_standard": 0,
        "module": "budget",
        "report_function": "Sum",
        "show_full_number": 0,
    },
    {
        "name": "Cancelled Budget",
        "label": "Cancelled Budget",
        "document_type": "Budget",
        "type": "Document Type",
        "function": "Count",
        "filters_json": '[[\"Budget\",\"docstatus\",\"=\",\"2\",false]]',
        "dynamic_filters_json": "[]",
        "color": "#e62e2e",
        "show_percentage_stats": 1,
        "stats_time_interval": "Daily",
        "is_public": 0,
        "is_standard": 0,
        "module": "budget",
        "report_function": "Sum",
        "show_full_number": 0,
    },
    {
        "name": "Budget Requests",
        "label": "Budget Requests",
        "document_type": "Budget Request",
        "type": "Document Type",
        "function": "Count",
        "filters_json": '[[\"Budget Request\",\"docstatus\",\"=\",\"1\",false]]',
        "dynamic_filters_json": "[]",
        "color": "#4463F0",
        "show_percentage_stats": 1,
        "stats_time_interval": "Daily",
        "is_public": 0,
        "is_standard": 0,
        "module": "budget",
        "report_function": "Sum",
        "show_full_number": 0,
    },
]

def create_number_cards():
    for card in NUMBER_CARDS:
        if frappe.db.exists("Number Card", card["name"]):
            continue
        frappe.get_doc({"doctype": "Number Card", **card}).insert(ignore_permissions=True)


def delete_number_cards():
    for card in NUMBER_CARDS:
        if frappe.db.exists("Number Card", card["name"]):
            frappe.delete_doc("Number Card", card["name"], ignore_permissions=True, force=True)


