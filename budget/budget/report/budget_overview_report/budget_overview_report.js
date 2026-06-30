// Copyright (c) 2026, ahmed and contributors
// For license information, please see license.txt

frappe.query_reports["Budget Overview Report"] = {
	filters: [
		{
			fieldname: "fiscal_year",
			label: __("Fiscal Year"),
			fieldtype: "Link",
			options: "Fiscal Year",
			reqd: 1,
			default: frappe.defaults.get_default("fiscal_year"),
		},
		{
			fieldname: "cost_center",
			label: __("Cost Center"),
			fieldtype: "Link",
			options: "Cost Center",
			reqd: 1,
		},
		{
			fieldname: "department",
			label: __("Department"),
			fieldtype: "Link",
			options: "Department",
		},
		{
			fieldname: "budget",
			label: __("Budget"),
			fieldtype: "Link",
			options: "Budget",
		},
		{
			fieldname: "item_code",
			label: __("Item"),
			fieldtype: "Link",
			options: "Item",
		},
		{
			fieldname: "month",
			label: __("Month"),
			fieldtype: "Select",
			options: [
				"",
				"January", "February", "March", "April",
				"May", "June", "July", "August",
				"September", "October", "November", "December",
			].join("\n"),
		},
	],
};
