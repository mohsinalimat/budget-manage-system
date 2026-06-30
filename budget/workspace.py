import frappe


WORKSPACE_NAME = "Budget & Expenses"


def create_workspace():
    if frappe.db.exists("Workspace", WORKSPACE_NAME):
        return

    frappe.get_doc({
        "doctype": "Workspace",
        "name": WORKSPACE_NAME,
        "label": WORKSPACE_NAME,
        "title": WORKSPACE_NAME,
        "icon": "income",
        "module": "budget",
        "public": 1,
        "is_hidden": 0,
        "hide_custom": 0,
        "parent_page": "",
        "for_user": "",
        "sequence_id": 8.0,
        "content": (
            '[{"id":"jxElEZDoqz","type":"header","data":{"text":"<span class=\\"h2\\">Budget &amp; Expenses</span>","col":12}},'
            '{"id":"BLOi5_JNJt","type":"number_card","data":{"number_card_name":"Active Budget","col":4}},'
            '{"id":"jFI1UJSpv8","type":"number_card","data":{"number_card_name":"Cancelled Budget","col":4}},'
            '{"id":"G7fUZWwybv","type":"number_card","data":{"number_card_name":"Budget Requests","col":4}},'
            '{"id":"EVpwSC6UXU","type":"chart","data":{"chart_name":"Budget Overview","col":12}},'
            '{"id":"k8ItoFyOnh","type":"card","data":{"card_name":"Budget","col":12}},'
            '{"id":"phO4gfxB97","type":"custom_block","data":{"custom_block_name":"Budget reports","col":12}}]'
        ),
        "links": [
            {
                "type": "Card Break",
                "label": "Budget",
                "hidden": 0,
                "is_query_report": 0,
                "onboard": 0,
                "link_count": 5,
            },
            {
                "type": "Link",
                "label": "Budget Request",
                "link_to": "Budget Request",
                "link_type": "DocType",
                "hidden": 0,
                "is_query_report": 0,
                "onboard": 0,
                "link_count": 0,
            },
            {
                "type": "Link",
                "label": "Budget",
                "link_to": "Budget",
                "link_type": "DocType",
                "hidden": 0,
                "is_query_report": 0,
                "onboard": 0,
                "link_count": 0,
            },
            {
                "type": "Link",
                "label": "Monthly Distribution",
                "link_to": "Monthly Distribution",
                "link_type": "DocType",
                "hidden": 0,
                "is_query_report": 0,
                "onboard": 0,
                "link_count": 0,
            },
            {
                "type": "Link",
                "label": "Budget Control Log",
                "link_to": "Budget Control Log",
                "link_type": "DocType",
                "hidden": 0,
                "is_query_report": 0,
                "onboard": 0,
                "link_count": 0,
            },
            {
                "type": "Link",
                "label": "Budget Control",
                "link_to": "budget-control-page",
                "link_type": "Page",
                "hidden": 0,
                "is_query_report": 0,
                "onboard": 0,
                "link_count": 0,
            },
        ],
        "number_cards": [
            {"number_card_name": "Active Budget",    "label": "Active Budget"},
            {"number_card_name": "Cancelled Budget", "label": "Cancelled Budget"},
            {"number_card_name": "Budget Requests",  "label": "Budget Requests"},
        ],
        "charts": [
            {
                "chart_name": "Dashboard Budget Overview",
                "label": "Budget Overview",
            },
        ],
        "custom_blocks": [
            {
                "custom_block_name": "Budget reports",
                "label": "Budget reports",
            },
        ],
        "shortcuts": [
            {
                "label": "Budget Control",
                "link_to": "budget-control-page",
                "type": "Page",
                "color": "#0653cf",
                "format": "",
                "icon": "",
            },
        ],
        "quick_lists": [],
        "roles": [],
    }).insert(ignore_permissions=True)


def delete_workspace():
    if not frappe.db.exists("Workspace", WORKSPACE_NAME):
        return
    frappe.delete_doc("Workspace", WORKSPACE_NAME, ignore_permissions=True, force=True)
