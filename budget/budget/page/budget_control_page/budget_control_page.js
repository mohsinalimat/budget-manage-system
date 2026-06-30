// Copyright (c) 2025, ahmed and contributors
// For license information, please see license.txt

// ─── Lucide Icon Helper ───────────────────────────────────────────────────────
// Renders a lucide SVG icon by name (uses lucide CDN sprite approach via inline paths)
const LUCIDE_ICONS = {
    "wallet":        `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>`,
    "trending-down": `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>`,
    "piggy-bank":    `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2z"/><path d="M2 9v1a2 2 0 0 0 2 2h1"/><path d="M16 11h.01"/></svg>`,
    "bar-chart-2":   `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>`,
    "calendar":      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`,
    "check-circle":  `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    "alert-triangle":`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`,
    "x-circle":      `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>`,
    "plus":          `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>`,
    "minus":         `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/></svg>`,
    "filter":        `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
    "rotate-ccw":    `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
    "layout-grid":   `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
    "table-2":       `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18"/></svg>`,
    "file-bar-chart":`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="12" x2="12" y1="18" y2="12"/><line x1="8" x2="8" y1="18" y2="16"/><line x1="16" x2="16" y1="18" y2="14"/></svg>`,
    "trash-2":       `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`,
    "download":      `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    "printer":       `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect width="12" height="8" x="6" y="14" rx="1"/></svg>`,
    "search":        `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>`,
    "inbox":         `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>`,
    "x-octagon":     `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>`,
    "loader":        `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/><line x1="2" x2="6" y1="12" y2="12"/><line x1="18" x2="22" y1="12" y2="12"/><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/></svg>`,
    "building-2":    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
};

function icon(name) {
    return LUCIDE_ICONS[name] || "";
}

// ─── Page Bootstrap ───────────────────────────────────────────────────────────
frappe.pages["budget-control-page"].on_page_load = function (wrapper) {
    const page = frappe.ui.make_app_page({
        parent: wrapper,
        title: "Budget Control Center",
        single_column: true,
    });

    // Store page ref on wrapper
    wrapper.page_obj = page;

    inject_styles();
    render_filters_bar(page, wrapper);
};

frappe.pages["budget-control-page"].on_page_show = function (wrapper) {
    // Re-use page ref
};

// ─── Styles ───────────────────────────────────────────────────────────────────
function inject_styles() {
    if ($("#bcp-styles").length) return;
    $("head").append(`
        <style id="bcp-styles">
            /* ── Layout ── */
            .bcp-wrap {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', sans-serif;
                padding: 24px;
                color: var(--text-color, #374151);
            }

            /* ── Filter Bar ── */
            .bcp-filters {
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                align-items: center;
                background: var(--card-bg, #fff);
                border: 1px solid var(--border-color, #e5e7eb);
                border-radius: 8px;
                padding: 16px;
                margin-bottom: 24px;
            }
            .bcp-filters .form-control {
                flex: 1;
                min-width: 150px;
                font-size: 13px;
            }
            .bcp-filters label {
                font-size: 12px;
                font-weight: 500;
                color: var(--text-muted, #6b7280);
                margin-bottom: 4px;
            }
            .bcp-filter-group {
                display: flex;
                flex-direction: column;
                flex: 1;
                min-width: 150px;
            }

            /* ── Summary Stats ── */
            .bcp-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                gap: 16px;
                margin-bottom: 24px;
            }
            .bcp-stat-card {
                background: var(--card-bg, #fff);
                border: 1px solid var(--border-color, #e5e7eb);
                border-radius: 8px;
                padding: 20px;
                text-align: center;
                transition: box-shadow 0.2s;
            }
            .bcp-stat-card:hover {
                box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            }
            .bcp-stat-icon {
                display: flex;
                justify-content: center;
                margin-bottom: 10px;
                color: var(--primary-color, #10b981);
            }
            .bcp-stat-value {
                font-size: 1.4rem;
                font-weight: 700;
                color: var(--heading-color, #111827);
                margin: 4px 0;
            }
            .bcp-stat-label {
                font-size: 0.75rem;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                font-weight: 500;
                color: var(--text-muted, #6b7280);
            }

            /* ── View Toggle ── */
            .bcp-view-toggle {
                display: flex;
                justify-content: flex-end;
                gap: 8px;
                margin-bottom: 16px;
            }

            /* ── Cards ── */
            .bcp-cards-grid {
                display: grid;
                gap: 16px;
            }
            .bcp-card {
                background: var(--card-bg, #fff);
                border: 1px solid var(--border-color, #e5e7eb);
                border-radius: 8px;
                padding: 20px;
                transition: box-shadow 0.2s;
                position: relative;
                overflow: hidden;
            }
            .bcp-card::before {
                content: '';
                position: absolute;
                top: 0; left: 0; right: 0;
                height: 3px;
            }
            .bcp-card.status-good::before   { background: #10b981; }
            .bcp-card.status-warning::before{ background: #f59e0b; }
            .bcp-card.status-danger::before { background: #ef4444; }
            .bcp-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }

            .bcp-card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 16px;
                padding-bottom: 12px;
                border-bottom: 1px solid var(--border-color, #f3f4f6);
                flex-wrap: wrap;
                gap: 8px;
            }
            .bcp-card-month {
                display: flex;
                align-items: center;
                gap: 6px;
                font-size: 1.1rem;
                font-weight: 600;
                color: var(--heading-color, #111827);
            }
            .bcp-card-month svg { color: var(--primary-color, #10b981); }

            .bcp-badge {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                padding: 4px 10px;
                border-radius: 4px;
                font-size: 0.72rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 0.4px;
                border: 1px solid transparent;
            }
            .badge-good    { background: #d1fae5; color: #065f46; border-color: #10b981; }
            .badge-warning { background: #fef3c7; color: #92400e; border-color: #f59e0b; }
            .badge-danger  { background: #fee2e2; color: #991b1b; border-color: #ef4444; }

            .bcp-details {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
                gap: 12px;
                margin-bottom: 16px;
            }
            .bcp-detail-item {
                background: var(--bg-light, #f9fafb);
                padding: 12px;
                border-radius: 6px;
                border-left: 3px solid var(--primary-color, #10b981);
            }
            .bcp-detail-label {
                font-size: 0.7rem;
                color: var(--text-muted, #6b7280);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                font-weight: 500;
                margin-bottom: 4px;
            }
            .bcp-detail-value {
                font-size: 0.9rem;
                font-weight: 500;
                color: var(--text-color, #374151);
                word-break: break-word;
            }

            /* ── Progress ── */
            .bcp-progress-wrap { margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border-color, #f3f4f6); }
            .bcp-progress-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8px;
                font-size: 0.875rem;
            }
            .bcp-progress-label { font-weight: 500; color: var(--text-color, #374151); }
            .bcp-progress-pct   { font-weight: 700; color: var(--heading-color, #111827); }
            .bcp-progress-bar   {
                width: 100%;
                height: 8px;
                background: var(--progress-bg, #f3f4f6);
                border-radius: 4px;
                overflow: hidden;
            }
            .bcp-progress-fill {
                height: 100%;
                border-radius: 4px;
                transition: width 0.4s ease;
            }
            .fill-good    { background: linear-gradient(90deg, #10b981, #059669); }
            .fill-warning { background: linear-gradient(90deg, #f59e0b, #d97706); }
            .fill-danger  { background: linear-gradient(90deg, #ef4444, #dc2626); }
            .bcp-remaining {
                margin-top: 8px;
                text-align: center;
                font-size: 0.875rem;
                font-weight: 600;
                color: var(--text-muted, #6b7280);
            }

            /* ── Card Action Buttons ── */
            .bcp-card-actions {
                display: flex;
                justify-content: center;
                gap: 8px;
                margin-top: 14px;
            }

            /* ── Table ── */
            .bcp-table-wrap {
                background: var(--card-bg, #fff);
                border: 1px solid var(--border-color, #e5e7eb);
                border-radius: 8px;
                overflow: hidden;
            }
            .bcp-table-controls {
                padding: 14px 16px;
                border-bottom: 1px solid var(--border-color, #e5e7eb);
                display: flex;
                align-items: center;
                gap: 10px;
                flex-wrap: wrap;
            }
            .bcp-table-controls label { font-size: 13px; font-weight: 500; margin: 0; }
            .bcp-table-controls input { width: 100px; }
            .bcp-table-wrap table { width: 100%; border-collapse: collapse; font-size: 13px; }
            .bcp-table-wrap thead tr {
                background: var(--table-header-bg, #f9fafb);
            }
            .bcp-table-wrap th {
                padding: 10px 14px;
                text-align: left;
                font-weight: 600;
                font-size: 12px;
                color: var(--heading-color, #111827);
                border-bottom: 1px solid var(--border-color, #e5e7eb);
                white-space: nowrap;
            }
            .bcp-table-wrap td {
                padding: 10px 14px;
                border-bottom: 1px solid var(--border-color, #f3f4f6);
                vertical-align: middle;
            }
            .bcp-table-wrap tbody tr:hover { background: var(--bg-light, #f9fafb); }
            .bcp-table-wrap input.budget-amount {
                width: 110px;
                padding: 4px 8px;
                font-size: 13px;
                border: 1px solid var(--input-border, #d1d5db);
                border-radius: 4px;
            }

            /* ── Empty / Error States ── */
            .bcp-state {
                text-align: center;
                padding: 60px 20px;
                color: var(--text-muted, #6b7280);
            }
            .bcp-state-icon {
                display: flex;
                justify-content: center;
                margin-bottom: 16px;
                opacity: 0.4;
            }
            .bcp-state-title {
                font-size: 1.1rem;
                font-weight: 600;
                margin-bottom: 8px;
                color: var(--text-color, #374151);
            }
            .bcp-state-desc { font-size: 0.875rem; line-height: 1.6; }

            /* ── Dark Mode ── */
            [data-theme="dark"] .bcp-stat-card,
            [data-theme="dark"] .bcp-card,
            [data-theme="dark"] .bcp-filters,
            [data-theme="dark"] .bcp-table-wrap {
                background: var(--dark-bg-3, #374151);
                border-color: var(--dark-border-1, #4b5563);
            }
            [data-theme="dark"] .bcp-detail-item { background: var(--dark-bg-1, #111827); }

            /* ── Responsive ── */
            @media (max-width: 768px) {
                .bcp-wrap { padding: 12px; }
                .bcp-details { grid-template-columns: 1fr; }
                .bcp-filters { flex-direction: column; }
                .bcp-filter-group { min-width: 100%; }
            }
        </style>
    `);
}

// ─── Filter Bar ───────────────────────────────────────────────────────────────
function render_filters_bar(page, wrapper) {
    const $main = $(wrapper).find(".page-content").addClass("bcp-wrap");
    $main.empty();

    $main.html(`
        <div class="bcp-filters" id="bcp-filters">
            <div class="bcp-filter-group" id="bcp-dept-wrap"></div>
            <div class="bcp-filter-group" id="bcp-fy-wrap"></div>
            <div class="bcp-filter-group" id="bcp-cc-wrap"></div>
            <div class="bcp-filter-group" id="bcp-budget-wrap"></div>
            <div style="display:flex; align-items:flex-end; gap:8px; padding-top:18px;">
                <button class="btn btn-primary btn-sm" id="bcp-load-btn">Load Dashboard</button>
                <button class="btn btn-danger btn-sm" id="bcp-delete-btn" style="display:none;">
                    ${icon("trash-2")} Delete Budget
                </button>
                <button class="btn btn-secondary btn-sm" id="bcp-report-btn" style="display:none;">
                    ${icon("file-bar-chart")} Generate Report
                </button>
            </div>
        </div>
        <div id="bcp-dashboard"></div>
    `);

    // Inject frappe Link controls
    const dept_field   = make_link_field("Department",   "Department");
    const fy_field     = make_link_field("Fiscal Year",  "Fiscal Year");
    const cc_field     = make_link_field("Cost Center",  "Cost Center");
    const budget_field = make_link_field("Budget",       "Budget");

    $("#bcp-dept-wrap").append(dept_field.$wrapper);
    $("#bcp-fy-wrap").append(fy_field.$wrapper);
    $("#bcp-cc-wrap").append(cc_field.$wrapper);
    $("#bcp-budget-wrap").append(budget_field.$wrapper);

    // Keep refs
    wrapper._bcp = { dept_field, fy_field, cc_field, budget_field };

    // Load button
    $("#bcp-load-btn").on("click", function () {
        const vals = get_filter_vals(wrapper);
        if (!vals.department || !vals.fiscal_year || !vals.cost_center || !vals.budget) {
            frappe.show_alert({ message: __("Please fill all filter fields"), indicator: "red" });
            return;
        }
        load_dashboard(wrapper, vals);
        $("#bcp-delete-btn, #bcp-report-btn").show();
    });

    // Delete button
    $("#bcp-delete-btn").on("click", function () {
        frappe.confirm(__("Are you sure you want to delete this Budget?"), function () {
            const vals = get_filter_vals(wrapper);
            delete_budget(vals);
        }, function () {
            frappe.show_alert({ message: __("Action Cancelled"), indicator: "blue" });
        });
    });

    // Report button
    $("#bcp-report-btn").on("click", function () {
        const vals = get_filter_vals(wrapper);
        show_report_dialog(vals);
    });
}

function make_link_field(label, doctype) {
    const $parent = $("<div>");
    const field = frappe.ui.form.make_control({
        df: {
            label: label,
            fieldname: label.toLowerCase().replace(/ /g, "_"),
            fieldtype: "Link",
            options: doctype,
            placeholder: __("Select " + label),
        },
        parent: $parent,
        render_input: true,
        only_input: false,
    });
    field.refresh();
    $parent.find(".help-box").remove();
    return field;
}

function get_filter_vals(wrapper) {
    const { dept_field, fy_field, cc_field, budget_field } = wrapper._bcp;
    return {
        department:  dept_field.get_value(),
        fiscal_year: fy_field.get_value(),
        cost_center: cc_field.get_value(),
        budget:      budget_field.get_value(),
    };
}

// ─── Load Dashboard ───────────────────────────────────────────────────────────
function load_dashboard(wrapper, vals) {
    const $dash = $("#bcp-dashboard");

    $dash.html(`
        <div class="bcp-state">
            <div class="bcp-state-icon">${icon("loader")}</div>
            <div class="bcp-state-title">Loading budget data…</div>
        </div>
    `);

    frappe.call({
        method: "budget.budget.page.budget_control_page.budget_control_page.get_monthly_distribution_department",
        args: vals,
        callback: function (r) {
            if (r.message && r.message.length > 0) {
                render_dashboard($dash, r.message, vals);
            } else {
                render_empty($dash, vals.cost_center);
            }
        },
        error: function (r) {
            render_error($dash, r);
        },
    });
}

// ─── Render Dashboard ─────────────────────────────────────────────────────────
function render_dashboard($dash, items, vals) {
    const totalBudget    = items.reduce((s, i) => s + (i.requested  || 0), 0);
    const totalSpent     = items.reduce((s, i) => s + (i.consumed   || 0), 0);
    const totalRemaining = items.reduce((s, i) => s + (i.remaining  || 0), 0);
    const utilRate       = totalBudget > 0 ? (totalSpent / totalBudget * 100) : 0;

    const uniqueItems    = [...new Set(items.map(i => i.item_code).filter(Boolean))];
    const uniqueAccounts = [...new Set(items.map(i => i.account).filter(Boolean))];
    const uniqueMonths   = [...new Set(items.map(i => i.month).filter(Boolean))];

    $dash.html(`
        <!-- Stats -->
        <div class="bcp-stats">
            <div class="bcp-stat-card">
                <div class="bcp-stat-icon">${icon("wallet")}</div>
                <div class="bcp-stat-value">${fmt_currency(totalBudget)}</div>
                <div class="bcp-stat-label">Total Budget</div>
            </div>
            <div class="bcp-stat-card">
                <div class="bcp-stat-icon">${icon("trending-down")}</div>
                <div class="bcp-stat-value">${fmt_currency(totalSpent)}</div>
                <div class="bcp-stat-label">Total Spent</div>
            </div>
            <div class="bcp-stat-card">
                <div class="bcp-stat-icon">${icon("piggy-bank")}</div>
                <div class="bcp-stat-value">${fmt_currency(totalRemaining)}</div>
                <div class="bcp-stat-label">Remaining</div>
            </div>
            <div class="bcp-stat-card">
                <div class="bcp-stat-icon">${icon("bar-chart-2")}</div>
                <div class="bcp-stat-value">${utilRate.toFixed(1)}%</div>
                <div class="bcp-stat-label">Utilization</div>
            </div>
        </div>

        <!-- Item/Account/Month Filters -->
        <div class="bcp-filters">
            <div class="bcp-filter-group">
                <label>Item Code</label>
                <select id="fi-item" class="form-control input-sm">
                    <option value="">All Items</option>
                    ${uniqueItems.map(c => `<option value="${c}">${c}</option>`).join("")}
                </select>
            </div>
            <div class="bcp-filter-group">
                <label>Account</label>
                <select id="fi-account" class="form-control input-sm">
                    <option value="">All Accounts</option>
                    ${uniqueAccounts.map(a => `<option value="${a}">${a}</option>`).join("")}
                </select>
            </div>
            <div class="bcp-filter-group">
                <label>Month</label>
                <select id="fi-month" class="form-control input-sm">
                    <option value="">All Months</option>
                    ${uniqueMonths.map(m => `<option value="${m}">${m}</option>`).join("")}
                </select>
            </div>
            <div style="display:flex; align-items:flex-end; gap:8px; padding-top:18px;">
                <button class="btn btn-primary btn-sm" id="fi-apply">
                    ${icon("filter")} Apply
                </button>
                <button class="btn btn-secondary btn-sm" id="fi-reset">
                    ${icon("rotate-ccw")} Reset
                </button>
            </div>
        </div>

        <!-- View Toggle -->
        <div class="bcp-view-toggle">
            <button class="btn btn-primary btn-sm" id="view-cards">
                ${icon("layout-grid")} Cards
            </button>
            <button class="btn btn-secondary btn-sm" id="view-table">
                ${icon("table-2")} Table
            </button>
        </div>

        <!-- Content Area -->
        <div id="bcp-content"></div>
    `);

    // Default view
    render_cards(items, vals);

    // View toggle
    $("#view-cards").off("click").on("click", function () {
        swap_view_btn(true);
        render_cards(items, vals);
    });
    $("#view-table").off("click").on("click", function () {
        swap_view_btn(false);
        render_table(items, vals);
    });

    // Item filters
    $("#fi-apply").off("click").on("click", function () {
        const itemCode = $("#fi-item").val();
        const account  = $("#fi-account").val();
        const month    = $("#fi-month").val();
        const filtered = items.filter(row =>
            (!itemCode || row.item_code === itemCode) &&
            (!account  || row.account   === account)  &&
            (!month    || row.month     === month)
        );
        if ($("#view-cards").hasClass("btn-primary")) render_cards(filtered, vals);
        else render_table(filtered, vals);
    });

    $("#fi-reset").off("click").on("click", function () {
        $("#fi-item, #fi-account, #fi-month").val("");
        if ($("#view-cards").hasClass("btn-primary")) render_cards(items, vals);
        else render_table(items, vals);
    });
}

function swap_view_btn(cardsActive) {
    if (cardsActive) {
        $("#view-cards").removeClass("btn-secondary").addClass("btn-primary");
        $("#view-table").removeClass("btn-primary").addClass("btn-secondary");
    } else {
        $("#view-table").removeClass("btn-secondary").addClass("btn-primary");
        $("#view-cards").removeClass("btn-primary").addClass("btn-secondary");
    }
}

// ─── Cards View ───────────────────────────────────────────────────────────────
function render_cards(items, vals) {
    const $content = $("#bcp-content");
    $content.empty();

    if (!items || items.length === 0) {
        $content.html(no_results_html());
        return;
    }

    const $grid = $(`<div class="bcp-cards-grid"></div>`);

    items.forEach(row => {
        const pct  = row.requested > 0 ? (row.consumed / row.requested * 100) : 0;
        const { label, badgeClass, fillClass, statusClass } = budget_status(pct);

        $grid.append(`
            <div class="bcp-card ${statusClass}">
                <div class="bcp-card-header">
                    <div class="bcp-card-month">
                        ${icon("calendar")} ${row.month || "N/A"}
                    </div>
                    <span class="bcp-badge ${badgeClass}">
                        ${status_icon(pct)} ${label}
                    </span>
                </div>

                <div class="bcp-details">
                    <div class="bcp-detail-item">
                        <div class="bcp-detail-label">Item Code</div>
                        <div class="bcp-detail-value">${row.item_code || "N/A"}</div>
                    </div>
                    <div class="bcp-detail-item">
                        <div class="bcp-detail-label">Expense Account</div>
                        <div class="bcp-detail-value">${row.account || "N/A"}</div>
                    </div>
                    <div class="bcp-detail-item">
                        <div class="bcp-detail-label">Monthly Budget</div>
                        <div class="bcp-detail-value">${fmt_currency(row.requested || 0)}</div>
                    </div>
                    <div class="bcp-detail-item">
                        <div class="bcp-detail-label">Amount Spent</div>
                        <div class="bcp-detail-value">${fmt_currency(row.consumed || 0)}</div>
                    </div>
                </div>

                <div class="bcp-progress-wrap">
                    <div class="bcp-progress-info">
                        <span class="bcp-progress-label">Budget Utilization</span>
                        <span class="bcp-progress-pct">${pct.toFixed(1)}%</span>
                    </div>
                    <div class="bcp-progress-bar">
                        <div class="bcp-progress-fill ${fillClass}" style="width:${Math.min(pct,100)}%"></div>
                    </div>
                    <div class="bcp-remaining">Remaining: ${fmt_currency(row.remaining || 0)}</div>
                </div>

                <div class="bcp-card-actions">
                    <button class="btn btn-success btn-sm increase-btn" data-item='${JSON.stringify(row)}'>
                        ${icon("plus")} Increase
                    </button>
                    <button class="btn btn-danger btn-sm decrease-btn" data-item='${JSON.stringify(row)}'>
                        ${icon("minus")} Decrease
                    </button>
                </div>
            </div>
        `);
    });

    $content.append($grid);
    setup_card_buttons(vals);
}

// ─── Table View ───────────────────────────────────────────────────────────────
function render_table(items, vals) {
    const $content = $("#bcp-content");

    if (!items || items.length === 0) {
        $content.html(no_results_html());
        return;
    }

    const rows_html = items.map((row, idx) => {
        const pct = row.requested > 0 ? (row.consumed / row.requested * 100) : 0;
        const { label, badgeClass, fillClass } = budget_status(pct);
        return `
            <tr>
                <td>${row.item_code || "N/A"}</td>
                <td>${row.account || "N/A"}</td>
                <td>${row.month || "N/A"}</td>
                <td>
                    <input
                        type="number"
                        class="budget-amount form-control input-sm"
                        data-index="${idx}"
                        value="${row.requested || 0}"
                        min="0"
                    />
                </td>
                <td>${fmt_currency(row.consumed || 0)}</td>
                <td>${fmt_currency(row.remaining || 0)}</td>
                <td>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <div style="background:#e5e7eb; border-radius:4px; height:7px; width:70px; overflow:hidden;">
                            <div class="bcp-progress-fill ${fillClass}" style="width:${Math.min(pct,100)}%; height:100%;"></div>
                        </div>
                        <span style="font-size:12px; font-weight:600;">${pct.toFixed(1)}%</span>
                    </div>
                </td>
                <td>
                    <span class="bcp-badge ${badgeClass}">${status_icon(pct)} ${label}</span>
                </td>
                <td>
                    <div style="display:flex; gap:4px;">
                        <button class="btn btn-success btn-xs btn-inc" data-index="${idx}" title="Increase">
                            ${icon("plus")}
                        </button>
                        <button class="btn btn-danger btn-xs btn-dec" data-index="${idx}" title="Decrease">
                            ${icon("minus")}
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");

    $content.html(`
        <div class="bcp-table-wrap">
            <div class="bcp-table-controls">
                <label>Amount to Change:</label>
                <input type="number" id="change-amount" class="form-control input-sm" value="100" min="1" />
            </div>
            <div class="table-responsive">
                <table>
                    <thead>
                        <tr>
                            <th>Item Code</th>
                            <th>Account</th>
                            <th>Month</th>
                            <th>Budget Amount</th>
                            <th>Spent</th>
                            <th>Remaining</th>
                            <th>Utilization</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>${rows_html}</tbody>
                </table>
            </div>
        </div>
    `);

    setup_table_buttons(items, vals);
}

// ─── Button Handlers ──────────────────────────────────────────────────────────
function setup_card_buttons(vals) {
    $(".increase-btn").off("click").on("click", function () {
        const row = JSON.parse($(this).attr("data-item"));
        prompt_update(vals, row, "increase");
    });
    $(".decrease-btn").off("click").on("click", function () {
        const row = JSON.parse($(this).attr("data-item"));
        prompt_update(vals, row, "decrease");
    });
}

function setup_table_buttons(items, vals) {
    $(".btn-inc").off("click").on("click", function () {
        const idx   = $(this).data("index");
        const step  = parseFloat($("#change-amount").val()) || 1;
        const $inp  = $(`.budget-amount[data-index="${idx}"]`);
        $inp.val(parseFloat($inp.val()) + step);
        call_update(vals, items[idx], step, "increase");
    });

    $(".btn-dec").off("click").on("click", function () {
        const idx   = $(this).data("index");
        const step  = parseFloat($("#change-amount").val()) || 1;
        const $inp  = $(`.budget-amount[data-index="${idx}"]`);
        const cur   = parseFloat($inp.val()) || 0;
        $inp.val(Math.max(0, cur - step));
        call_update(vals, items[idx], step, "decrease");
    });
}

function prompt_update(vals, row, action) {
    frappe.prompt([
        {
            label: "Amount to " + action,
            fieldname: "amount",
            fieldtype: "Currency",
            default: 100,
            reqd: 1,
        },
    ], function (v) {
        call_update(vals, row, v.amount, action);
    }, __("Update Budget Amount"));
}

function call_update(vals, row, amount, action) {
    frappe.call({
        method: "budget.budget.page.budget_control_page.budget_control_page.update_budget_amount",
        args: {
            cost_center: row.cost_center || vals.cost_center,
            item_code:   row.item_code,
            account:     row.account,
            month:       row.month,
            new_amount:  amount,
            action:      action,
        },
        callback: function (r) {
            if (r.message && r.message.success) {
                frappe.show_alert({ message: __("Budget updated successfully"), indicator: "green" });
                load_dashboard($("body"), vals); // reload
            } else {
                frappe.show_alert({
                    message: __("Failed: ") + (r.message && r.message.error ? r.message.error : "Unknown error"),
                    indicator: "red",
                });
            }
        },
    });
}

// ─── Delete Budget ────────────────────────────────────────────────────────────
function delete_budget(vals) {
    frappe.call({
        method: "budget.budget.page.budget_control_page.budget_control_page.delete_budget_related_records",
        args: {
            fiscal_year:         vals.fiscal_year,
            department:          vals.department,
            cost_center:         vals.cost_center,
        },
        callback: function (r) {
            frappe.show_alert({ message: __("Budget deleted successfully"), indicator: "green" });
        },
    });
}

// ─── Report Dialog ────────────────────────────────────────────────────────────
const MONTHS = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
];

function show_report_dialog(vals) {
    const d = new frappe.ui.Dialog({
        title: "Generate Budget Report",
        size: "large",
        fields: [
            { label: "Department",   fieldname: "department",   fieldtype: "Link", options: "Department",  default: vals.department,   reqd: 1 },
            { label: "Fiscal Year",  fieldname: "fiscal_year",  fieldtype: "Link", options: "Fiscal Year", default: vals.fiscal_year,  reqd: 1 },
            { label: "Cost Center",  fieldname: "cost_center",  fieldtype: "Link", options: "Cost Center", default: vals.cost_center,  reqd: 1 },
            { label: "Budget",       fieldname: "budget",       fieldtype: "Link", options: "Budget",      default: vals.budget,       reqd: 1 },
            { label: "Month Filter", fieldname: "month",        fieldtype: "Select", options: ["All Months"].concat(MONTHS), default: "All Months" },
            { label: "Report Type",  fieldname: "report_type",  fieldtype: "Select", options: "Summary\nDetailed\nExport to Excel", default: "Summary" },
        ],
        primary_action_label: "Generate Report",
        primary_action(v) {
            generate_report(v);
            d.hide();
        },
    });
    d.show();
}

function generate_report(filters) {
    frappe.show_alert({ message: __("Generating report…"), indicator: "blue" }, 3);

    const args = {
        cost_center: filters.cost_center,
        fiscal_year: filters.fiscal_year,
        department:  filters.department,
        budget:      filters.budget,
    };
    if (filters.month && filters.month !== "All Months") args.month = filters.month;

    frappe.call({
        method: "budget.budget.page.budget_control_page.budget_control_page.get_monthly_distribution_report",
        args,
        callback: function (r) {
            if (r.message) {
                if (filters.report_type === "Export to Excel") {
                    export_excel(r.message, filters);
                } else {
                    show_report_modal(r.message, filters);
                }
            } else {
                frappe.msgprint({ title: __("No Data"), message: __("No data found."), indicator: "yellow" });
            }
        },
    });
}

function show_report_modal(report_data, filters) {
    const { data, totals } = report_data;
    const html = build_report_html(data, totals, filters);

    const d = new frappe.ui.Dialog({
        title: `Budget Report — ${filters.cost_center}`,
        size: "extra-large",
        fields: [{ fieldname: "rpt", fieldtype: "HTML", options: html }],
        primary_action_label: `${icon("printer")} Print / PDF`,
        primary_action() { print_report(html, filters); },
        secondary_action_label: `${icon("download")} Export Excel`,
        secondary_action() { export_excel(report_data, filters); },
    });
    d.show();
}

function build_report_html(data, totals, filters) {
    const util = totals.total_requested > 0
        ? ((totals.total_consumed / totals.total_requested) * 100).toFixed(1)
        : "0.0";

    const rows = data.map((row, idx) => {
        const pct = row.requested > 0 ? (row.consumed / row.requested * 100) : 0;
        const { label } = budget_status(pct);
        const color = pct < 70 ? "#10b981" : pct < 90 ? "#f59e0b" : "#ef4444";
        return `
            <tr style="background:${idx % 2 === 0 ? "#f8fafc" : "#fff"}">
                <td style="padding:12px 14px; border-bottom:1px solid #e2e8f0;">${row.month}</td>
                <td style="padding:12px 14px; border-bottom:1px solid #e2e8f0; font-family:monospace;">${row.item_code || "N/A"}</td>
                <td style="padding:12px 14px; border-bottom:1px solid #e2e8f0; font-weight:600;">${fmt_currency(row.requested)}</td>
                <td style="padding:12px 14px; border-bottom:1px solid #e2e8f0; font-weight:600; color:#ef4444;">${fmt_currency(row.consumed)}</td>
                <td style="padding:12px 14px; border-bottom:1px solid #e2e8f0; font-weight:600; color:#10b981;">${fmt_currency(row.remaining)}</td>
                <td style="padding:12px 14px; border-bottom:1px solid #e2e8f0;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <div style="background:#e2e8f0; border-radius:10px; height:8px; width:60px; overflow:hidden;">
                            <div style="background:${color}; height:100%; width:${Math.min(pct,100)}%;"></div>
                        </div>
                        <span style="font-weight:600; font-size:.85rem;">${pct.toFixed(1)}%</span>
                    </div>
                </td>
                <td style="padding:12px 14px; border-bottom:1px solid #e2e8f0;">
                    <span style="background:${color}22; color:${color}; padding:4px 10px; border-radius:20px; font-size:.75rem; font-weight:600;">${label}</span>
                </td>
            </tr>
        `;
    }).join("");

    return `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif; padding:24px;">
            <h2 style="text-align:center; margin-bottom:4px;">Monthly Budget Distribution Report</h2>
            <p style="text-align:center; color:#64748b; margin-bottom:24px;">
                <strong>Cost Center:</strong> ${filters.cost_center} &nbsp;|&nbsp;
                <strong>Period:</strong> ${filters.month || "All Months"}
            </p>

            <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(170px,1fr)); gap:16px; margin-bottom:24px;">
                ${stat_card_html("Total Budget",   fmt_currency(totals.total_requested), "#667eea")}
                ${stat_card_html("Total Spent",    fmt_currency(totals.total_consumed),  "#f093fb")}
                ${stat_card_html("Remaining",      fmt_currency(totals.total_remaining), "#4facfe")}
                ${stat_card_html("Utilization",    util + "%",                           "#fa709a")}
            </div>

            <div style="background:#fff; border-radius:12px; overflow:hidden; border:1px solid #e2e8f0;">
                <table style="width:100%; border-collapse:collapse; font-size:13px;">
                    <thead>
                        <tr style="background:linear-gradient(135deg,#667eea,#764ba2); color:#fff;">
                            <th style="padding:14px; text-align:left;">Month</th>
                            <th style="padding:14px; text-align:left;">Item Code</th>
                            <th style="padding:14px; text-align:left;">Budget</th>
                            <th style="padding:14px; text-align:left;">Spent</th>
                            <th style="padding:14px; text-align:left;">Remaining</th>
                            <th style="padding:14px; text-align:left;">Usage</th>
                            <th style="padding:14px; text-align:left;">Status</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        </div>
    `;
}

function stat_card_html(label, value, color) {
    return `
        <div style="background:${color}; color:#fff; padding:20px; border-radius:10px; text-align:center;">
            <div style="font-size:1.3rem; font-weight:700; margin-bottom:4px;">${value}</div>
            <div style="font-size:.8rem; opacity:.9;">${label}</div>
        </div>
    `;
}

function print_report(html, filters) {
    const w = window.open("", "_blank");
    w.document.write(`<!DOCTYPE html><html><head><title>Budget Report</title>
        <style>@media print{body{margin:0;padding:20px;}}</style>
        </head><body>${html}</body></html>`);
    w.document.close();
    setTimeout(() => { w.print(); w.close(); }, 400);
    frappe.show_alert({ message: __("Print dialog opened"), indicator: "blue" }, 4);
}

function export_excel(report_data, filters) {
    const { data, totals } = report_data;
    let csv = "Month,Item Code,Account,Budget,Spent,Remaining,Usage %,Status\n";
    data.forEach(row => {
        const pct = row.requested > 0 ? (row.consumed / row.requested * 100) : 0;
        const { label } = budget_status(pct);
        csv += `"${row.month}","${row.item_code || ""}","${row.account || ""}",${row.requested},${row.consumed},${row.remaining},${pct.toFixed(1)}%,"${label}"\n`;
    });
    const util = totals.total_requested > 0
        ? ((totals.total_consumed / totals.total_requested) * 100).toFixed(1) + "%"
        : "0%";
    csv += `\nTOTALS,,,${totals.total_requested},${totals.total_consumed},${totals.total_remaining},${util},\n`;

    const blob = new Blob([csv], { type: "text/csv" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = `Budget_Report_${(filters.cost_center || "").replace(/[^a-z0-9]/gi, "_")}_${frappe.datetime.now_date()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    frappe.show_alert({ message: __("Excel file downloaded"), indicator: "green" }, 3);
}

// ─── Empty / Error States ─────────────────────────────────────────────────────
function render_empty($dash, cost_center) {
    $dash.html(`
        <div class="bcp-state">
            <div class="bcp-state-icon">${icon("inbox")}</div>
            <div class="bcp-state-title">No budget data found</div>
            <div class="bcp-state-desc">
                No distributions configured for cost center: <strong>${cost_center || "N/A"}</strong>
            </div>
        </div>
    `);
}

function render_error($dash, err) {
    $dash.html(`
        <div class="bcp-state">
            <div class="bcp-state-icon">${icon("x-octagon")}</div>
            <div class="bcp-state-title">Error loading data</div>
            <div class="bcp-state-desc">${err && err.message ? err.message : "Please try again or contact your administrator."}</div>
        </div>
    `);
}

function no_results_html() {
    return `
        <div class="bcp-state">
            <div class="bcp-state-icon">${icon("search")}</div>
            <div class="bcp-state-title">No results found</div>
            <div class="bcp-state-desc">Try adjusting your filter criteria.</div>
        </div>
    `;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function budget_status(pct) {
    if (pct < 70)  return { label: "On Track",    badgeClass: "badge-good",    fillClass: "fill-good",    statusClass: "status-good"    };
    if (pct < 90)  return { label: "Critical",    badgeClass: "badge-warning", fillClass: "fill-warning", statusClass: "status-warning" };
    return             { label: "Over Budget", badgeClass: "badge-danger",  fillClass: "fill-danger",  statusClass: "status-danger"  };
}

function status_icon(pct) {
    if (pct < 70)  return icon("check-circle");
    if (pct < 90)  return icon("alert-triangle");
    return             icon("x-circle");
}

function fmt_currency(amount) {
    if (!amount || isNaN(amount)) amount = 0;
    const currency = (frappe.sys_defaults && frappe.sys_defaults.currency) || "USD";
    return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount) + " " + currency;
}
