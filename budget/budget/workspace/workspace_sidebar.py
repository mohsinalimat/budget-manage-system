WORKSPACE_ICONS = {
    "Home": "home",
    "Budget Control": "dashboard",
    "Budget Request": "file-text",
    "Budget": "income",
    "Monthly Distribution": "calendar",
    "Budget Control Log": "list",
}

WORKSPACE_HEADER_ICON = "banknote"


def install_workspace_icons():
    import frappe

    if not frappe.db.exists("Workspace Sidebar", "Budget Expenses"):
        return

    ws = frappe.get_doc("Workspace Sidebar", "Budget Expenses")
    ws.header_icon = WORKSPACE_HEADER_ICON

    for item in ws.items:
        if item.label in WORKSPACE_ICONS:
            item.icon = WORKSPACE_ICONS[item.label]

    ws.save(ignore_permissions=True)

def uninstall_workspace_icons():
    import frappe

    if not frappe.db.exists("Workspace Sidebar", "Budget Expenses"):
        return

    ws = frappe.get_doc("Workspace Sidebar", "Budget Expenses")

    ws.header_icon = ""

    # remove broken self-link
    ws.items = [
        item for item in ws.items
        if item.link_to != "Budget Expenses"
    ]

    # clear icons
    for item in ws.items:
        if item.label in WORKSPACE_ICONS:
            item.icon = ""
    ws.save(ignore_permissions=True)
