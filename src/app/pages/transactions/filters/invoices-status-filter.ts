import { TableFilter } from '../../../shared/table/filters/table-filter';
import { FilterType, TableFilterDef } from '../../../types/Table';
import { TRANSACTION_INVOICE_STATUS } from '../model/invoices.model';

export class InvoiceStatusFilter extends TableFilter {
  constructor() {
    super();
    // Define filter
    const filterDef: TableFilterDef = {
      id: 'status',
      httpId: 'Status',
      type: FilterType.DROPDOWN,
      name: 'general.status',
      class: 'col-md-6 col-lg-4 col-xl-2',
      label: '',
      currentValue: [],
      items: Object.assign([], TRANSACTION_INVOICE_STATUS),
      multiple: true,
    };
    this.setFilterDef(filterDef);
  }
}
