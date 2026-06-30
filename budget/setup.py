from budget.workspace import create_workspace, delete_workspace
from budget.number_cards import create_number_cards, delete_number_cards
from budget.custom_blocks import create_custom_blocks, delete_custom_blocks
from budget.custom_fields import make_custom_fields, delete_custom_fields
from budget.charts import create_dashboard_charts, delete_dashboard_charts

def after_install():
    make_custom_fields()
    create_dashboard_charts()
    create_number_cards()
    create_custom_blocks()
    create_workspace()


def before_uninstall():
    delete_workspace()
    delete_custom_blocks()
    delete_number_cards()
    delete_custom_fields()
    delete_dashboard_charts()
