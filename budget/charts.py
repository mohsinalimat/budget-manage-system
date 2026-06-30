import frappe

DASHBOARD_CHARTS = [
    {
        "name": "Dashboard Budget Overview",
        "chart_name": "Dashboard Budget Overview",
        "chart_type": "Report",
        "type": "Bar",
        "report_name": "Budget Overview Report",
        "x_field": "month",
        "filters_json": "{}",
        "custom_options": (
            '{"x_field": "month", "chart_type": "axis-mixed",'
            ' "y_axis_fields": ['
            '{"idx": 1, "__islocal": true, "name": "row 1", "y_field": "requested", "color": "#4463F0"},'
            '{"idx": 2, "__islocal": true, "name": "row 2", "y_field": "consumed",  "color": "#CB2929"},'
            '{"idx": 3, "__islocal": true, "name": "row 3", "y_field": "remaining", "color": "#29CD42"}'
            '], "y_fields": ["requested", "consumed", "remaining"],'
            ' "colors": ["#4463F0", "#CB2929", "#29CD42"]}'
        ),
        "currency": "EGP",
        "is_public": 0,
        "is_standard": 1,
        "use_report_chart": 0,
        "show_values_over_chart": 0,
        "timeseries": 0,
        "time_interval": "Yearly",
        "timespan": "Last Year",
        "number_of_groups": 0,
        "group_by_type": "Count",
        "module": "budget",
        "y_axis": [
            {"y_field": "requested", "color": "#4463F0"},
            {"y_field": "consumed",  "color": "#CB2929"},
            {"y_field": "remaining", "color": "#29CD42"},
        ],
        "roles": [
            {"role": "System Manager"},
            {"role": "Accounts Manager"},
        ],
    },
]


def create_dashboard_charts():
    for chart in DASHBOARD_CHARTS:
        if frappe.db.exists("Dashboard Chart", chart["name"]):
            continue
        frappe.get_doc({"doctype": "Dashboard Chart", **chart}).insert(ignore_permissions=True)


def delete_dashboard_charts():
    for chart in DASHBOARD_CHARTS:
        if frappe.db.exists("Dashboard Chart", chart["name"]):
            frappe.delete_doc("Dashboard Chart", chart["name"], ignore_permissions=True, force=True)
