

import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_fields


def get_custom_fields():
	return {
		"Monthly Distribution": [
			{
				"fieldname": "custom_section_break_rsxhl",
				"fieldtype": "Section Break",
				"insert_after": "distribution_id",
			},
			{
				"fieldname": "custom_expense_account",
				"label": "Expense Account",
				"fieldtype": "Link",
				"insert_after": "fiscal_year",
				"options": "Account",
			},
			{
				"fieldname": "custom_budget",
				"label": "Budget",
				"fieldtype": "Link",
				"insert_after": "custom_expense_account",
				"options": "Budget",
			},
			{
				"fieldname": "custom_department",
				"label": "Department",
				"fieldtype": "Link",
				"insert_after": "custom_budget",
				"options": "Department",
			},
			{
				"fieldname": "custom_section_break_8v6af",
				"fieldtype": "Section Break",
				"insert_after": "custom_department",
			},
			{
				"fieldname": "custom_item_code",
				"label": "Item Code",
				"fieldtype": "Link",
				"insert_after": "custom_section_break_rsxhl",
				"options": "Item",
			},
			{
				"fieldname": "custom_cost_center",
				"label": "Cost Center",
				"fieldtype": "Link",
				"insert_after": "custom_item_code",
				"options": "Cost Center",
			},
			{
				"fieldname": "custom_column_break_ir7rx",
				"fieldtype": "Column Break",
				"insert_after": "custom_budget_control",
			},
			{
				"fieldname": "naming_series",
				"label": "naming series",
				"fieldtype": "Data",
				"insert_after": "percentages",
				"options": "MD-yyyy-",
				"default": "MD-yyyy-",
			},
		],
		"Monthly Distribution Percentage": [
			{
				"fieldname": "custom_amount",
				"label": "amount",
				"fieldtype": "Float",
				"insert_after": "percentage_allocation",
			},
		],
		"Department": [
			{
				"fieldname": "custom_manager",
				"label": "Manager",
				"fieldtype": "Link",
				"insert_after": "parent_department",
				"options": "User",
			},
			{
				"fieldname": "section_break_4",
				"fieldtype": "Section Break",
				"insert_after": "disabled",
			},
			{
				"fieldname": "payroll_cost_center",
				"label": "Payroll Cost Center",
				"fieldtype": "Link",
				"insert_after": "section_break_4",
				"options": "Cost Center",
			},
			{
				"fieldname": "column_break_9",
				"fieldtype": "Column Break",
				"insert_after": "payroll_cost_center",
			},
			{
				"fieldname": "approvers",
				"label": "Approvers",
				"fieldtype": "Section Break",
				"insert_after": "leave_block_list",
				"description": "The first Approver in the list will be set as the default Approver.",
			},
		],
		"Budget": [
			{
				"fieldname": "custom_budget_request_refrance",
				"label": "Budget Request",
				"fieldtype": "Link",
				"insert_after": "name",
				"options": "Budget Request",
			},
			{
				"fieldname": "employee",
				"label": "Employee",
				"fieldtype": "Link",
				"insert_after": "cost_center",
				"options": "Employee",
				"depends_on": "eval:doc.budget_against == 'Employee'",
			},
			{
				"fieldname": "custom_action_if__monthly_budget_exceeded_on_actual",
				"label": "Action if  Monthly Budget Exceeded on Actual",
				"fieldtype": "Select",
				"insert_after": "action_if_accumulated_monthly_budget_exceeded",
				"options": "\nStop\nWarn\nIgnore",
				"depends_on": "eval:doc.applicable_on_booking_actual_expenses == 1",
				"default": "Warn",
			},
			{
				"fieldname": "custom_action_if__monthly_budget_exceeded_on_mr",
				"label": "Action if  Monthly Budget Exceeded on MR",
				"fieldtype": "Select",
				"insert_after": "action_if_accumulated_monthly_budget_exceeded_on_mr",
				"options": "\nStop\nWarn\nIgnore",
				"depends_on": "eval:doc.applicable_on_material_request == 1",
				"default": "Warn",
			},
			{
				"fieldname": "custom_action_if__monthly_budget_exceeded_on_po",
				"label": "Action if  Monthly Budget Exceeded on PO",
				"fieldtype": "Select",
				"insert_after": "action_if_accumulated_monthly_budget_exceeded_on_po",
				"options": "\nStop\nWarn\nIgnore",
				"depends_on": "eval:doc.applicable_on_purchase_order == 1",
				"default": "Warn",
			},
			{
				"fieldname": "custom_budget_request_reference",
				"label": "Budget Request reference",
				"fieldtype": "Link",
				"insert_after": "amended_from",
				"options": "Budget Request",
			},
		],
		"Budget Account": [
			{
				"fieldname": "custom_monthly_distribution",
				"label": "Monthly Distribution",
				"fieldtype": "Link",
				"insert_after": "budget_amount",
				"options": "Monthly Distribution",
			},
			{
				"fieldname": "custom_item_code",
				"label": "Item Code",
				"fieldtype": "Link",
				"insert_after": "custom_monthly_distribution",
				"options": "Item",
			},
		],
	}


def after_install():
	make_custom_fields()

def make_custom_fields(update=True):
	custom_fields = get_custom_fields()
	create_custom_fields(custom_fields,update=update)

def before_uninstall():
	delete_custom_fields()


def delete_custom_fields():
	custom_fields = get_custom_fields()
	for doctype, fields in custom_fields.items():
		frappe.db.delete(
			"Custom Field",
			{
				"fieldname": ("in", [field["fieldname"] for field in fields]),
				"dt": doctype,
			},
		)

		frappe.clear_cache(doctype=doctype)
