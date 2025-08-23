# import frappe
# from frappe.custom.doctype.custom_field.custom_field import create_custom_field

# def execute():
#     # لو الحقل مش موجود ضيفه
#     if not frappe.db.exists("Custom Field", "Budget Distribution-budget"):
#         create_custom_field(
#             "Budget Distribution",
#             {
#                 "fieldname": "budget",
#                 "label": "Budget",
#                 "fieldtype": "Link",
#                 "options": "Budget",
#                 "insert_after": "distribution_name",
#                 "read_only": 0,
#                 "hidden": 0
#             }
#         )
import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_field

def execute():
    # لو الحقل مش موجود ضيفه
    if not frappe.db.exists("Custom Field", {"dt": "Monthly Distribution", "fieldname": "budget"}):
        create_custom_field(
            "Monthly Distribution",
            {
                "fieldname": "budget",
                "label": "Budget",
                "fieldtype": "Link",
                "options": "Budget",
                "insert_after": "distribution_id",  
                "read_only": 0,
                "hidden": 0
            }
        )
    if not frappe.db.has_column("Budget Control", "budget_request"):
        frappe.get_doc({
            "doctype": "Custom Field",
            "dt": "Budget Control",
            "fieldname": "budget_request",
            "fieldtype": "Link",
            "label": "Budget Request",
            "options": "Budget Request",
            "insert_after": "name" 
        }).insert(ignore_permissions=True)
        frappe.db.commit()